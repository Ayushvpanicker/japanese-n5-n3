import { MOCK_CARDS } from '../src/data/mockCards';

console.log(`Total mock cards: ${MOCK_CARDS.length}`);

// Find duplicates based on (chapter + reading + kanji)
const seenMap = new Map<string, typeof MOCK_CARDS[0]>();
const duplicates: { orig: typeof MOCK_CARDS[0]; dup: typeof MOCK_CARDS[0] }[] = [];

for (const card of MOCK_CARDS) {
  const key = `${card.chapter}_${(card.kanji || '').trim()}_${(card.reading || '').trim()}`;
  if (seenMap.has(key)) {
    duplicates.push({ orig: seenMap.get(key)!, dup: card });
  } else {
    seenMap.set(key, card);
  }
}

console.log(`Found ${duplicates.length} exact (chapter + kanji + reading) duplicates.`);
for (const d of duplicates) {
  console.log(`Ch ${d.dup.chapter}: kanji="${d.dup.kanji}" reading="${d.dup.reading}" meaning="${d.dup.meaning}" (ID ${d.orig.id} vs ${d.dup.id})`);
}

// Check duplicates across chapter + reading
const readingSeenMap = new Map<string, typeof MOCK_CARDS[0]>();
const readingDuplicates: { orig: typeof MOCK_CARDS[0]; dup: typeof MOCK_CARDS[0] }[] = [];

for (const card of MOCK_CARDS) {
  const cleanReading = card.reading.trim().replace(/[〜~\s]/g, '');
  const cleanMeaning = card.meaning.trim().toLowerCase();
  const key = `${card.chapter}_${cleanReading}`;
  if (readingSeenMap.has(key)) {
    readingDuplicates.push({ orig: readingSeenMap.get(key)!, dup: card });
  } else {
    readingSeenMap.set(key, card);
  }
}

console.log(`Found ${readingDuplicates.length} reading duplicates within the same chapter.`);
for (const d of readingDuplicates) {
  console.log(`Ch ${d.dup.chapter}: reading="${d.dup.reading}" meaning1="${d.orig.meaning}" vs meaning2="${d.dup.meaning}"`);
}

// Check global duplicates across all chapters with identical kanji + reading
const globalSeen = new Map<string, typeof MOCK_CARDS[0]>();
const globalDuplicates: { orig: typeof MOCK_CARDS[0]; dup: typeof MOCK_CARDS[0] }[] = [];

for (const card of MOCK_CARDS) {
  if (!card.reading) continue;
  const key = `${(card.kanji || '').trim()}_${card.reading.trim()}_${card.meaning.trim().toLowerCase()}`;
  if (globalSeen.has(key)) {
    globalDuplicates.push({ orig: globalSeen.get(key)!, dup: card });
  } else {
    globalSeen.set(key, card);
  }
}

console.log(`Found ${globalDuplicates.length} global identical (kanji + reading + meaning) duplicates across chapters.`);
for (const d of globalDuplicates.slice(0, 20)) {
  console.log(`Orig Ch ${d.orig.chapter} (ID ${d.orig.id}) vs Dup Ch ${d.dup.chapter} (ID ${d.dup.id}): kanji="${d.dup.kanji}" reading="${d.dup.reading}" meaning="${d.dup.meaning}"`);
}
