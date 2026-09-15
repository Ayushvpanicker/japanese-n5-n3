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

/**
 * Intelligent parser for Japanese column that preserves FULL words & phrases.
 */
export function parseJapaneseColumn(rawJp: string): { reading: string; kanji: string | null } {
  const clean = rawJp.replace(/^\d+[\.\)\s]+/, '').trim();

  // If input contains a comma or space separating Kana reading and Kanji representation
  // E.g., "みます 見ます、診ます" or "きぶんが いい 気分が いい" or "まに あいます 間に合います"
  
  // Clean out OCR artifacts like numbers inside Japanese text (e.g. "さがします 1 探します" -> "さがします 探します")
  const sanitized = clean.replace(/\b\d+\b/g, '').replace(/\s{2,}/g, ' ').trim();

  // Check if there are separate sections for Kana vs Kanji
  // We check if part of the string has Kanji (\u4E00-\u9FAF) and part is pure Kana (\u3040-\u30FF)
  const hasKanjiChar = /[\u4E00-\u9FAF]/.test(sanitized);

  if (!hasKanjiChar) {
    // Pure Hiragana/Katakana word or phrase (e.g., "ボランティア", "フリーマーケット", "いつでも", "どこでも")
    return {
      reading: sanitized,
      kanji: null,
    };
  }

  // Split into segments to separate Kana reading from Kanji form
  // Look for the boundary where Kanji starts
  const tokens = sanitized.split(/\s+/);
  let kanaTokens: string[] = [];
  let kanjiTokens: string[] = [];

  for (const token of tokens) {
    if (/[\u4E00-\u9FAF]/.test(token)) {
      kanjiTokens.push(token);
    } else if (/[\u3040-\u309F\u30A0-\u30FF]/.test(token)) {
      if (kanjiTokens.length === 0) {
        kanaTokens.push(token);
      } else {
        kanjiTokens.push(token); // Okurigana following Kanji
      }
    } else {
      // Punctuation or special symbols
      if (kanjiTokens.length > 0) {
        kanjiTokens.push(token);
      } else {
        kanaTokens.push(token);
      }
    }
  }

  const reading = kanaTokens.join(' ').trim() || sanitized;
  const kanji = kanjiTokens.join(' ').trim() || null;

  return {
    reading,
    kanji: kanji && kanji !== reading ? kanji : null,
  };
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

    const { reading, kanji } = parseJapaneseColumn(rawJp);

    cards.push({
      chapter: chapterNum,
      kanji,
      reading,
      meaning: rawEn,
      notes: null,
    });
  }

  return cards;
}

async function runCsvImport() {
  const csvPath = path.join(process.cwd(), 'data', 'user_vocabulary.csv');
  console.log(`\n📄 Parsing user CSV file: ${csvPath}...`);

  const cards = parseUserCsvFile(csvPath);
  console.log(`\n🎉 CSV Parsed Successfully! Total full word cards extracted: ${cards.length}`);

  // Print sample of parsed cards to verify full words
  console.log('\n🔍 Sample Parsed Full-Word Cards:');
  cards.slice(0, 15).forEach((c, idx) => {
    console.log(`   [Card ${idx + 1}] Ch.${c.chapter} | Kanji: "${c.kanji || 'N/A'}" | Reading: "${c.reading}" | Meaning: "${c.meaning}"`);
  });

  const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey && supabaseUrl !== 'https://placeholder.supabase.co') {
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log('\n🔄 First, clearing previous entries in Supabase `cards` table...');
    await supabase.from('cards').delete().neq('id', '00000000-0000-0000-0000-000000000000');

    console.log('\n🚀 Uploading all full-word cards into Supabase database...');
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
    console.log(`\n✅ Supabase Upload Complete! Total full-word cards inserted: ${inserted}\n`);
  }
}

runCsvImport().catch(console.error);
