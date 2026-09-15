import { MOCK_CARDS } from '../src/data/mockCards';
import * as fs from 'fs';
import * as path from 'path';

console.log(`Initial total cards: ${MOCK_CARDS.length}`);

// Map of readings with brackets like "嫌[な]" to clean Kanji & Reading
const BRACKET_FIXES: Record<string, { kanji: string; reading: string }> = {
  '嫌[な]': { kanji: '嫌な', reading: 'いやな' },
  '子どもたち': { kanji: '子どもたち', reading: 'こどもたち' },
  '自由に': { kanji: '自由に', reading: 'じゆうに' },
  '例えば': { kanji: '例えば', reading: 'たとえば' },
  'できるだけ': { kanji: 'できるだけ', reading: 'できるだけ' },
  '飛びます': { kanji: '飛びます', reading: 'とびます' },
  'けんかします': { kanji: '喧嘩します', reading: 'けんかします' },
  'なべ': { kanji: '鍋', reading: 'なべ' },
  'また': { kanji: 'また', reading: 'また' },
  '美しい': { kanji: '美しい', reading: 'うつくしい' },
  '自然': { kanji: '自然', reading: 'しぜん' },
};

const cleanedCards = MOCK_CARDS.map(card => {
  let kanji = card.kanji;
  let reading = card.reading;
  let meaning = card.meaning;

  // 1. Fix bracketed readings like "嫌[な]"
  if (reading && BRACKET_FIXES[reading]) {
    const fix = BRACKET_FIXES[reading];
    if (!kanji || kanji === '一 ~' || kanji === '~') {
      kanji = fix.kanji;
    }
    reading = fix.reading;
  }

  // 2. Filter out OCR symbol artifacts from kanji
  if (kanji && (/^[\s\-\~〜～・ー—_]+$/.test(kanji) || kanji === '一 ~' || kanji === '一〜' || kanji === '~')) {
    kanji = null;
  }

  // 3. Clean up reading if it has suffix tags like " J", " RAS"
  if (reading) {
    reading = reading.replace(/\s+[A-Z]{1,3}$/, '').trim();
  }

  return {
    ...card,
    kanji: kanji || null,
    reading,
    meaning
  };
});

// Deduplicate within the SAME chapter (same chapter + reading + kanji)
const seenInChapter = new Set<string>();
const uniqueCards: typeof MOCK_CARDS = [];

for (const card of cleanedCards) {
  const key = `${card.chapter}_${(card.kanji || '').trim()}_${card.reading.trim()}`;
  if (!seenInChapter.has(key)) {
    seenInChapter.add(key);
    uniqueCards.push(card);
  } else {
    console.log(`Removed intra-chapter duplicate in Ch ${card.chapter}: ${card.reading} (${card.meaning})`);
  }
}

console.log(`Final deduplicated cards count: ${uniqueCards.length}`);

// Write back to mockCards.ts
const mockCardsTsPath = path.resolve(process.cwd(), 'src/data/mockCards.ts');
const fileContent = `import { Card } from '../types/card';

export const MOCK_CARDS: Card[] = ${JSON.stringify(uniqueCards, null, 2)};
`;

fs.writeFileSync(mockCardsTsPath, fileContent, 'utf-8');
console.log('Successfully updated src/data/mockCards.ts!');
