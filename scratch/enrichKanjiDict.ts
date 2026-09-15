import fs from 'fs';
import path from 'path';
import { MOCK_CARDS } from '../src/data/mockCards';
import { KANJI_LESSONS_DATA } from '../src/data/kanjiLessonsData';

const kanjiSet = new Set<string>();

// Collect kanji from MOCK_CARDS
for (const card of MOCK_CARDS) {
  if (card.kanji) {
    for (const c of card.kanji.split('')) {
      if (/[\u4E00-\u9FAF]/.test(c)) {
        kanjiSet.add(c);
      }
    }
  }
}

// Collect kanji from KANJI_LESSONS_DATA (All 310 kanji)
for (const lessonItem of KANJI_LESSONS_DATA) {
  if (/[\u4E00-\u9FAF]/.test(lessonItem.kanji)) {
    kanjiSet.add(lessonItem.kanji);
  }
}

const allKanji = Array.from(kanjiSet);
console.log(`Total unique Kanji across both datasets: ${allKanji.length}`);

// Pre-build example vocabulary map from MOCK_CARDS for each kanji
const examplesMap: Record<string, { word: string; reading: string; meaning: string }[]> = {};

for (const card of MOCK_CARDS) {
  if (card.kanji) {
    for (const c of card.kanji.split('')) {
      if (/[\u4E00-\u9FAF]/.test(c)) {
        if (!examplesMap[c]) examplesMap[c] = [];
        // Avoid duplicate word entries
        if (!examplesMap[c].some(e => e.word === card.kanji)) {
          examplesMap[c].push({
            word: card.kanji,
            reading: card.reading,
            meaning: card.meaning,
          });
        }
      }
    }
  }
}

interface KanjiApiResult {
  kanji: string;
  meanings: string[];
  on_readings: string[];
  kun_readings: string[];
  stroke_count: number;
  jlpt: number | null;
}

async function fetchKanjiInfo(ch: string): Promise<any> {
  try {
    const res = await fetch(`https://kanjiapi.dev/v1/kanji/${encodeURIComponent(ch)}`);
    if (!res.ok) return null;
    const data: KanjiApiResult = await res.json();
    
    let jlptStr = 'N4';
    if (data.jlpt === 4) jlptStr = 'N5';
    else if (data.jlpt === 3) jlptStr = 'N4';
    else if (data.jlpt === 2) jlptStr = 'N3';
    else if (data.jlpt === 1) jlptStr = 'N2';

    // Top 3 example words from mock cards
    const examples = (examplesMap[ch] || []).slice(0, 3);

    return {
      char: ch,
      meaning: data.meanings.slice(0, 3).join(', ') || 'Kanji Character',
      onyomi: data.on_readings.join(', ') || '-',
      kunyomi: data.kun_readings.join(', ') || '-',
      strokes: data.stroke_count || 8,
      jlpt: jlptStr,
      examples: examples,
    };
  } catch (err) {
    console.error(`Failed to fetch ${ch}:`, err);
    return null;
  }
}

async function main() {
  const dictionary: Record<string, any> = {};
  const batchSize = 15;
  
  for (let i = 0; i < allKanji.length; i += batchSize) {
    const batch = allKanji.slice(i, i + batchSize);
    console.log(`Fetching batch ${i / batchSize + 1} / ${Math.ceil(allKanji.length / batchSize)}...`);
    const results = await Promise.all(batch.map(ch => fetchKanjiInfo(ch)));
    
    results.forEach((res, idx) => {
      const ch = batch[idx];
      const examples = (examplesMap[ch] || []).slice(0, 3);
      if (res) {
        dictionary[ch] = res;
      } else {
        dictionary[ch] = {
          char: ch,
          meaning: 'Kanji Character',
          onyomi: '-',
          kunyomi: '-',
          strokes: 8,
          jlpt: 'N4',
          examples: examples,
        };
      }
    });
    await new Promise(r => setTimeout(r, 100));
  }

  console.log(`Successfully collected ${Object.keys(dictionary).length} dictionary entries with examples.`);

  const fileContent = `export interface ExampleWord {
  word: string;
  reading: string;
  meaning: string;
}

export interface KanjiInfo {
  char: string;
  meaning: string;
  onyomi: string;
  kunyomi: string;
  strokes: number;
  jlpt: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
  examples?: ExampleWord[];
}

export const KANJI_DICTIONARY: Record<string, KanjiInfo> = ${JSON.stringify(dictionary, null, 2)};

export function getKanjiBreakdown(word: string): KanjiInfo[] {
  if (!word) return [];
  const chars = Array.from(new Set(word.split('')));
  const results: KanjiInfo[] = [];

  for (const ch of chars) {
    if (/[\\u4E00-\\u9FAF]/.test(ch)) {
      if (KANJI_DICTIONARY[ch]) {
        results.push(KANJI_DICTIONARY[ch]);
      } else {
        results.push({
          char: ch,
          meaning: 'Kanji Character',
          onyomi: 'CJK Ideograph',
          kunyomi: 'Japanese Reading',
          strokes: 8,
          jlpt: 'N4',
        });
      }
    }
  }

  return results;
}
`;

  const outputPath = path.resolve(process.cwd(), 'src/data/kanjiData.ts');
  fs.writeFileSync(outputPath, fileContent, 'utf-8');
  console.log(`Updated ${outputPath} successfully!`);
}

main();
