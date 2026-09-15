import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

export interface CsvCard {
  chapter: number;
  kanji: string | null;
  reading: string;
  meaning: string;
  notes: string | null;
}

export function parseUserCsvFile(csvPath: string): CsvCard[] {
  const content = fs.readFileSync(csvPath, 'utf-8');
  const lines = content.split(/\r?\n/).filter(Boolean);
  const cards: CsvCard[] = [];

  // Skip header
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const parts: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let c = 0; c < line.length; c++) {
      const char = line[c];
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        parts.push(current);
        current = '';
      } else {
        current += char;
      }
    }
    parts.push(current);

    if (parts.length < 3) continue;

    const chapterNum = parseInt(parts[0].trim(), 10);
    if (isNaN(chapterNum)) continue;

    const rawJp = parts[1].trim();
    const rawEn = parts.slice(2).join(',').replace(/^"|"$/g, '').trim();

    let reading = rawJp;
    let kanji: string | null = null;

    const spaceSplit = rawJp.split(/\s+/);
    if (spaceSplit.length >= 2) {
      reading = spaceSplit[0].replace(/[\d\.]/g, '').trim();
      kanji = spaceSplit.slice(1).join(' ').replace(/[\d\.]/g, '').trim();
      if (kanji.length < 1 || /^\d+$/.test(kanji)) {
        kanji = null;
      }
    } else {
      reading = rawJp.replace(/[\d\.]/g, '').trim();
      kanji = null;
    }

    cards.push({
      chapter: chapterNum,
      kanji: kanji || null,
      reading,
      meaning: rawEn,
      notes: null
    });
  }

  return cards;
}

async function runCsvImport() {
  const csvPath = path.join(process.cwd(), 'data', 'user_vocabulary.csv');
  console.log(`\n📄 Parsing user CSV file: ${csvPath}...`);

  const cards = parseUserCsvFile(csvPath);
  console.log(`\n🎉 CSV Parsed Successfully! Total cards extracted: ${cards.length}`);

  const counts: Record<number, number> = {};
  cards.forEach(c => {
    counts[c.chapter] = (counts[c.chapter] || 0) + 1;
  });

  console.log('\n📋 Cards count per chapter from your CSV:');
  Object.entries(counts).forEach(([ch, cnt]) => {
    console.log(`   - Chapter ${ch}: ${cnt} cards`);
  });

  const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey && supabaseUrl !== 'https://placeholder.supabase.co') {
    console.log('\n🚀 Uploading all parsed CSV cards into Supabase database...');
    const supabase = createClient(supabaseUrl, supabaseKey);

    let inserted = 0;
    const BATCH = 50;
    for (let i = 0; i < cards.length; i += BATCH) {
      const batch = cards.slice(i, i + BATCH);
      const { data, error } = await supabase.from('cards').insert(batch).select();
      if (error) {
        console.error(`❌ Insert error: ${error.message}`);
      } else {
        inserted += data ? data.length : batch.length;
        console.log(`   ✓ Inserted items ${i + 1}-${i + batch.length}`);
      }
    }
    console.log(`\n✅ Supabase Upload Complete! Total inserted: ${inserted}\n`);
  }
}

runCsvImport().catch(console.error);
