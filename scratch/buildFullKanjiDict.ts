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

console.log(`Total unique Kanji characters in dataset: ${kanjiSet.size}`);
console.log('Kanji chars list:');
console.log(Array.from(kanjiSet).join(''));
