import fs from 'fs';
import path from 'path';
import { MOCK_CARDS } from '../src/data/mockCards';

const kanjiSet = new Set<string>();

for (const card of MOCK_CARDS) {
  if (card.kanji) {
    const chars = card.kanji.split('');
    for (const c of chars) {
      if (/[\u4E00-\u9FAF]/.test(c)) {
        kanjiSet.add(c);
      }
    }
  }
}

const allKanji = Array.from(kanjiSet);
console.log(`Found ${allKanji.length} unique kanji characters.`);

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
    
    // Convert JLPT number to N5/N4 string
    // kanjiapi.dev uses 4=N5, 3=N4, 2=N3, 1=N2/N1
    let jlptStr = 'N4';
    if (data.jlpt === 4) jlptStr = 'N5';
    else if (data.jlpt === 3) jlptStr = 'N4';
    else if (data.jlpt === 2) jlptStr = 'N3';
    else if (data.jlpt === 1) jlptStr = 'N2';

    return {
      char: ch,
      meaning: data.meanings.slice(0, 3).join(', ') || 'character',
      onyomi: data.on_readings.join(', ') || '-',
      kunyomi: data.kun_readings.join(', ') || '-',
      strokes: data.stroke_count || 8,
      jlpt: jlptStr,
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
        };
      }
    });
    // Brief pause between batches
    await new Promise(r => setTimeout(r, 100));
  }

  console.log(`Successfully collected ${Object.keys(dictionary).length} dictionary entries.`);

  const fileContent = `export interface KanjiInfo {
  char: string;
  meaning: string;
  onyomi: string;
  kunyomi: string;
  strokes: number;
  jlpt: 'N5' | 'N4' | 'N3' | 'N2' | 'N1';
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
