import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { PDFParse } from 'pdf-parse';
import { createClient } from '@supabase/supabase-js';

// Environment variables
const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('\n❌ Error: Missing Supabase environment variables!');
  console.error('Please set VITE_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY (or VITE_SUPABASE_ANON_KEY) in .env.\n');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

export interface ExtractedCard {
  chapter: number;
  kanji: string | null;
  reading: string;
  meaning: string;
  notes: string | null;
}

/**
 * Main function to import PDF vocabulary to Supabase
 */
async function importPdfToSupabase(pdfPath: string) {
  console.log(`\n📄 Processing PDF file: ${pdfPath}...`);

  if (!fs.existsSync(pdfPath)) {
    console.error(`❌ File not found at path: ${pdfPath}`);
    console.error('Please place your PDF file in the root directory (e.g. japanese-n5-n3/vocabulary.pdf).\n');
    process.exit(1);
  }

  const dataBuffer = fs.readFileSync(pdfPath);
  const parser = new PDFParse({ data: new Uint8Array(dataBuffer) });
  const pdfData = await parser.getText();
  const text = pdfData.text;
  const totalPages = pdfData.total || pdfData.pages?.length || 0;

  console.log(`\n📊 PDF read successfully. Total pages: ${totalPages}. Text length: ${text.length} characters.`);

  const cards = parseVocabularyText(text);

  console.log(`\n✅ Extracted ${cards.length} vocabulary items from Chapter 26 onwards.`);

  if (cards.length === 0) {
    console.warn('\n⚠️ No cards extracted.');
    return;
  }

  // Group by chapter for reporting
  const chapterCounts: Record<number, number> = {};
  cards.forEach(card => {
    chapterCounts[card.chapter] = (chapterCounts[card.chapter] || 0) + 1;
  });

  console.log('\n📋 Extracted Card Counts by Chapter:');
  Object.entries(chapterCounts).forEach(([ch, count]) => {
    console.log(`   - Chapter ${ch}: ${count} cards`);
  });

  console.log('\n🚀 Inserting cards into Supabase...');

  let successCount = 0;
  let errorCount = 0;

  // Insert in batches of 50
  const BATCH_SIZE = 50;
  for (let i = 0; i < cards.length; i += BATCH_SIZE) {
    const batch = cards.slice(i, i + BATCH_SIZE);
    const { data, error } = await supabase.from('cards').insert(batch).select();

    if (error) {
      console.error(`❌ Batch insert error (items ${i + 1}-${i + batch.length}):`, error.message);
      if (error.message.includes("Could not find the table 'public.cards'")) {
        console.error('\n💡 HINT: You need to create the "cards" table in your Supabase SQL Editor first!');
        console.error('Run the SQL query provided in your instructions to create the table.\n');
        process.exit(1);
      }
      errorCount += batch.length;
    } else {
      successCount += data ? data.length : batch.length;
      console.log(`   ✓ Inserted items ${i + 1}-${i + (data ? data.length : batch.length)}`);
    }
  }

  console.log(`\n🎉 Import Complete!`);
  console.log(`   Successful: ${successCount}`);
  console.log(`   Failed: ${errorCount}\n`);
}

/**
 * Parses raw text from PDF into ExtractedCard objects starting from Chapter 26 onwards.
 */
export function parseVocabularyText(text: string): ExtractedCard[] {
  const lines = text.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const cards: ExtractedCard[] = [];

  let currentChapter = 0;
  let inVocabSection = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Detect Lesson header (e.g. "Lesson 26", "LESSON 26", "第26課")
    const chapterMatch = line.match(/^(?:Lesson|LESSON|第|第\s*)(\d{1,2})(?:課|\b)/i);
    if (chapterMatch) {
      const chNum = parseInt(chapterMatch[1], 10);
      if (!isNaN(chNum) && chNum >= 1 && chNum <= 50) {
        currentChapter = chNum;
        inVocabSection = false;
        continue;
      }
    }

    if (currentChapter < 26) {
      continue;
    }

    if (line.includes('I. Vocabulary') || line.includes('Vocabulary')) {
      inVocabSection = true;
      continue;
    }

    if (line.includes('II. Translation') || line.includes('III. Reference') || line.includes('IV. Grammar')) {
      inVocabSection = false;
      continue;
    }

    if (!inVocabSection) {
      continue;
    }

    const parsed = parseVocabLine(line, currentChapter);
    if (parsed) {
      cards.push(parsed);
    }
  }

  return cards;
}

/**
 * Attempts to parse a single line into a Card object.
 */
function parseVocabLine(line: string, chapter: number): ExtractedCard | null {
  if (line.length < 3 || line.includes('-- ') || /^page \d+/i.test(line)) {
    return null;
  }

  // Must contain Japanese characters
  if (!hasJapanese(line)) {
    return null;
  }

  const cleanLine = line.replace(/^\d+[\.\)\s]+/, '').trim();

  // Match pattern: Japanese [Kana/Notes] English meaning
  const patternBrackets = /^([^\s\[\(]+)\s*[\[\((]([^\s\]\)]+)[\]\)]\s+(.+)$/;
  const matchBrackets = cleanLine.match(patternBrackets);

  if (matchBrackets) {
    const part1 = matchBrackets[1].trim();
    const part2 = matchBrackets[2].trim();
    const rest = matchBrackets[3].trim();

    const isPart1Kana = isHiraganaOrKatakana(part1);
    const isPart2Kana = isHiraganaOrKatakana(part2);

    let kanji: string | null = null;
    let reading = '';

    if (!isPart1Kana && isPart2Kana) {
      kanji = part1;
      reading = part2;
    } else if (isPart1Kana && !isPart2Kana) {
      kanji = part2;
      reading = part1;
    } else {
      reading = part1;
      kanji = isPart2Kana ? null : part2;
    }

    let meaning = rest;
    let notes: string | null = null;
    const noteMatch = rest.match(/\[(.*?)\]/);
    if (noteMatch) {
      notes = noteMatch[1];
      meaning = rest.replace(/\[.*?\]/, '').trim();
    }

    return {
      chapter,
      kanji: kanji || null,
      reading,
      meaning,
      notes,
    };
  }

  // Fallback: split by space/tab
  const parts = cleanLine.split(/\t+|\s{2,}/);
  if (parts.length >= 2) {
    const first = parts[0].trim();
    const second = parts[1].trim();
    const meaning = parts.slice(2).join(' ').trim() || second;

    const firstIsKana = isHiraganaOrKatakana(first);
    const secondIsKana = isHiraganaOrKatakana(second);

    return {
      chapter,
      kanji: firstIsKana ? (secondIsKana ? null : second) : first,
      reading: firstIsKana ? first : (secondIsKana ? second : first),
      meaning: parts.length > 2 ? meaning : second,
      notes: null,
    };
  }

  return null;
}

function isHiraganaOrKatakana(str: string): boolean {
  return /^[\u3040-\u309F\u30A0-\u30FF\s〜・]+$/.test(str);
}

function hasJapanese(str: string): boolean {
  return /[\u3040-\u309F\u30A0-\u30FF\u4E00-\u9FAF]/.test(str);
}

// Run script
const inputPath = process.argv[2] || path.join(process.cwd(), 'vocabulary.pdf');
importPdfToSupabase(inputPath).catch(err => {
  console.error('\n❌ Unhandled error during import:', err);
  process.exit(1);
});
