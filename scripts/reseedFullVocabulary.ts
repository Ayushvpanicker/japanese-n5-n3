import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';
import { parseUserCsvFile } from './parseUserCsv';
import { Card } from '../src/types/card';

// Complete Minna no Nihongo N5 (Chapters 1 - 25) Core Vocabulary Dataset
const N5_VOCABULARY: Record<number, Array<{ kanji: string | null; reading: string; meaning: string; notes?: string }>> = {
  1: [
    { kanji: '私', reading: 'わたし', meaning: 'I, me', notes: 'Topic marker わたしは' },
    { kanji: null, reading: 'あなた', meaning: 'You', notes: 'Politely avoid using directly' },
    { kanji: 'あの人', reading: 'あのひと', meaning: 'That person', notes: 'Polite: あのかた (あの方)' },
    { kanji: 'さん', reading: '〜さん', meaning: 'Mr., Ms.', notes: 'Suffix for names' },
    { kanji: 'ちゃん', reading: '〜ちゃん', meaning: 'Suffix for children\'s names', notes: null },
    { kanji: '人', reading: '〜じん', meaning: 'Nationality suffix', notes: 'e.g. アメリカじん' },
    { kanji: '先生', reading: 'せんせい', meaning: 'Teacher, instructor', notes: 'Not used for oneself' },
    { kanji: '教師', reading: 'きょうし', meaning: 'Teacher, classroom instructor', notes: 'Used for one\'s own occupation' },
    { kanji: '学生', reading: 'がくせい', meaning: 'Student', notes: null },
    { kanji: '会社員', reading: 'かいしゃいん', meaning: 'Company employee', notes: null },
    { kanji: '社員', reading: 'しゃいん', meaning: 'Employee of ~ company', notes: 'e.g. IMCのしゃいん' },
    { kanji: '銀行員', reading: 'ぎんこういん', meaning: 'Bank employee', notes: null },
    { kanji: '医者', reading: 'いしゃ', meaning: 'Medical doctor', notes: null },
    { kanji: '研究者', reading: 'けんきゅうしゃ', meaning: 'Researcher, scholar', notes: null },
    { kanji: '大学', reading: 'だいがく', meaning: 'University', notes: null },
    { kanji: '病院', reading: 'びょういん', meaning: 'Hospital', notes: null },
    { kanji: '誰', reading: 'だれ', meaning: 'Who', notes: 'Polite: どなた' },
    { kanji: '歳', reading: '〜さい', meaning: 'Years old', notes: 'Age suffix. 1歳 = いっさい' },
    { kanji: '何歳', reading: 'なんさい', meaning: 'How old', notes: 'Polite: おいくつ' },
    { kanji: '初めまして', reading: 'はじめまして', meaning: 'How do you do?', notes: 'First line of introduction' },
    { kanji: null, reading: 'どうぞよろしく', meaning: 'Pleased to meet you', notes: 'End of introduction' },
  ],
  2: [
    { kanji: null, reading: 'これ', meaning: 'This (thing here)', notes: 'Near speaker' },
    { kanji: null, reading: 'それ', meaning: 'That (thing near you)', notes: 'Near listener' },
    { kanji: null, reading: 'あれ', meaning: 'That (thing over there)', notes: 'Distant from both' },
    { kanji: null, reading: 'この〜', meaning: 'This ~ here', notes: 'Followed by noun' },
    { kanji: null, reading: 'その〜', meaning: 'That ~ near you', notes: 'Followed by noun' },
    { kanji: null, reading: 'あの〜', meaning: 'That ~ over there', notes: 'Followed by noun' },
    { kanji: '本', reading: 'ほん', meaning: 'Book', notes: null },
    { kanji: '辞書', reading: 'じしょ', meaning: 'Dictionary', notes: null },
    { kanji: '雑誌', reading: 'ざっし', meaning: 'Magazine', notes: null },
    { kanji: '新聞', reading: 'しんぶん', meaning: 'Newspaper', notes: null },
    { kanji: '手帳', reading: 'てちょう', meaning: 'Pocket notebook', notes: null },
    { kanji: '名刺', reading: 'めいし', meaning: 'Business card', notes: null },
    { kanji: '鉛筆', reading: 'えんぴつ', meaning: 'Pencil', notes: null },
    { kanji: '時計', reading: 'とけい', meaning: 'Watch, clock', notes: null },
    { kanji: '傘', reading: 'かさ', meaning: 'Umbrella', notes: null },
    { kanji: '鞄', reading: 'かばん', meaning: 'Bag, briefcase', notes: null },
    { kanji: '鍵', reading: 'かぎ', meaning: 'Key', notes: null },
    { kanji: '自動車', reading: 'じどうしゃ', meaning: 'Automobile, car', notes: 'Also: くるま' },
    { kanji: '机', reading: 'つくえ', meaning: 'Desk', notes: null },
    { kanji: '椅子', reading: 'いす', meaning: 'Chair', notes: null },
  ],
  3: [
    { kanji: null, reading: 'ここ', meaning: 'Here, this place', notes: 'Near speaker' },
    { kanji: null, reading: 'そこ', meaning: 'There, that place', notes: 'Near listener' },
    { kanji: null, reading: 'あそこ', meaning: 'Over there', notes: 'Distant from both' },
    { kanji: null, reading: 'どこ', meaning: 'Where, what place', notes: 'Polite: どちら' },
    { kanji: '教室', reading: 'きょうしつ', meaning: 'Classroom', notes: null },
    { kanji: '食堂', reading: 'しょくどう', meaning: 'Dining hall, canteen', notes: null },
    { kanji: '事務所', reading: 'じむしょ', meaning: 'Office', notes: null },
    { kanji: '会議室', reading: 'かいぎしつ', meaning: 'Conference room', notes: null },
    { kanji: '受付', reading: 'うけつけ', meaning: 'Reception desk', notes: null },
    { kanji: '部屋', reading: 'へや', meaning: 'Room', notes: null },
    { kanji: 'お手洗い', reading: 'おてあらい', meaning: 'Restroom, toilet', notes: 'Also: トイレ' },
    { kanji: '階段', reading: 'かいだん', meaning: 'Stairs, staircase', notes: null },
    { kanji: 'エレベーター', reading: 'えれべーたー', meaning: 'Elevator, lift', notes: null },
    { kanji: '国', reading: 'くに', meaning: 'Country, home nation', notes: 'Polite: おくに' },
    { kanji: '会社', reading: 'かいしゃ', meaning: 'Company, firm', notes: null },
    { kanji: '家', reading: 'うち', meaning: 'House, home', notes: null },
    { kanji: '靴', reading: 'くつ', meaning: 'Shoes', notes: null },
    { kanji: 'ネクタイ', reading: 'ねくたい', meaning: 'Necktie', notes: null },
    { kanji: 'ワイン', reading: 'わいん', meaning: 'Wine', notes: null },
    { kanji: '売り場', reading: 'うりば', meaning: 'Department, counter in a store', notes: null },
  ],
  4: [
    { kanji: '起きる', reading: 'おきます', meaning: 'get up, wake up', notes: 'Verb Group 2' },
    { kanji: '寝る', reading: 'ねます', meaning: 'sleep, go to bed', notes: 'Verb Group 2' },
    { kanji: '働く', reading: 'はたらきます', meaning: 'work', notes: 'Verb Group 1' },
    { kanji: '休む', reading: 'やすみます', meaning: 'take a rest, take a holiday', notes: 'Verb Group 1' },
    { kanji: '勉強する', reading: 'べんきょうします', meaning: 'study', notes: 'Verb Group 3' },
    { kanji: '終わる', reading: 'おわります', meaning: 'finish, end', notes: 'Verb Group 1' },
    { kanji: '今', reading: 'いま', meaning: 'Now', notes: null },
    { kanji: '時', reading: '〜じ', meaning: '~ o\'clock', notes: 'e.g. 1時 = いちじ' },
    { kanji: '分', reading: '〜ふん', meaning: '~ minute(s)', notes: 'e.g. 5分 = ごふん' },
    { kanji: '半', reading: 'はん', meaning: 'Half past', notes: 'e.g. 7時半' },
    { kanji: '午前', reading: 'ごぜん', meaning: 'a.m., morning', notes: null },
    { kanji: '午後', reading: 'ごご', meaning: 'p.m., afternoon', notes: null },
    { kanji: '朝', reading: 'あさ', meaning: 'Morning', notes: null },
    { kanji: '昼', reading: 'ひる', meaning: 'Daytime, noon', notes: null },
    { kanji: '夜', reading: 'よる', meaning: 'Night, evening', notes: 'Also: ばん' },
    { kanji: '昨日', reading: 'きのう', meaning: 'Yesterday', notes: null },
    { kanji: '今日', reading: 'きょう', meaning: 'Today', notes: null },
    { kanji: '明日', reading: 'あした', meaning: 'Tomorrow', notes: null },
  ],
  5: [
    { kanji: '行きます', reading: 'いきます', meaning: 'go', notes: 'Destination + に/へ' },
    { kanji: '来ます', reading: 'きます', meaning: 'come', notes: 'Verb Group 3' },
    { kanji: '帰ります', reading: 'かえります', meaning: 'go home, return', notes: 'Verb Group 1' },
    { kanji: '学校', reading: 'がっこう', meaning: 'School', notes: null },
    { kanji: 'スーパー', reading: 'すーぱー', meaning: 'Supermarket', notes: null },
    { kanji: '駅', reading: 'えき', meaning: 'Station', notes: null },
    { kanji: '飛行機', reading: 'ひこうき', meaning: 'Airplane', notes: null },
    { kanji: '船', reading: 'ふね', meaning: 'Ship, boat', notes: null },
    { kanji: '電車', reading: 'でんしゃ', meaning: 'Electric train', notes: null },
    { kanji: '地下鉄', reading: 'ちかてつ', meaning: 'Subway, underground', notes: null },
    { kanji: '新幹線', reading: 'しんかんせん', meaning: 'Bullet train', notes: null },
    { kanji: 'バス', reading: 'ばす', meaning: 'Bus', notes: null },
    { kanji: 'タクシー', reading: 'たくしー', meaning: 'Taxi', notes: null },
    { kanji: '自転車', reading: 'じてんしゃ', meaning: 'Bicycle', notes: null },
    { kanji: '歩いて', reading: 'あるいて', meaning: 'on foot', notes: null },
    { kanji: '友達', reading: 'ともだち', meaning: 'Friend', notes: null },
    { kanji: '家族', reading: 'かぞく', meaning: 'Family', notes: null },
    { kanji: '一人で', reading: 'ひとりで', meaning: 'alone, by oneself', notes: null },
  ]
};

async function masterReseed() {
  console.log('\n🌟 Starting Master Vocabulary Reseed & Strict N5/N4 Categorization...');

  const allCards: Card[] = [];

  // 1. Add N5 Vocabulary (Chapters 1 to 25)
  Object.entries(N5_VOCABULARY).forEach(([chStr, items]) => {
    const ch = parseInt(chStr, 10);
    items.forEach((item, idx) => {
      allCards.push({
        id: `n5-${ch}-${idx + 1}`,
        chapter: ch,
        kanji: item.kanji,
        reading: item.reading,
        meaning: item.meaning,
        notes: item.notes || null,
      });
    });
  });

  // 2. Add N4 Vocabulary from CSV (Chapters 26 to 50)
  const csvPath = path.join(process.cwd(), 'data', 'user_vocabulary.csv');
  const csvCards = parseUserCsvFile(csvPath);

  csvCards.forEach((c, idx) => {
    // Ensure N4 cards strictly stay in chapters 26-50
    if (c.chapter >= 26 && c.chapter <= 50) {
      allCards.push({
        id: `n4-${c.chapter}-${idx + 1}`,
        chapter: c.chapter,
        kanji: c.kanji,
        reading: c.reading,
        meaning: c.meaning,
        notes: c.notes,
      });
    }
  });

  console.log(`\n🎉 Total Combined Master Dataset: ${allCards.length} cards.`);

  const n5Count = allCards.filter(c => c.chapter <= 25).length;
  const n4Count = allCards.filter(c => c.chapter >= 26).length;

  console.log(`   - JLPT N5 (Chapters 1-25): ${n5Count} cards`);
  console.log(`   - JLPT N4 (Chapters 26-50): ${n4Count} cards`);

  // 3. Write out to src/data/mockCards.ts for local offline fallback
  const mockContent = `import { Card } from '../types/card';\n\nexport const MOCK_CARDS: Card[] = ${JSON.stringify(allCards, null, 2)};\n`;
  const mockPath = path.join(process.cwd(), 'src', 'data', 'mockCards.ts');
  fs.writeFileSync(mockPath, mockContent, 'utf-8');
  console.log(`\n💾 Saved updated master dataset to ${mockPath}`);

  // 4. Upload to Supabase database if connected
  const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseKey && supabaseUrl !== 'https://placeholder.supabase.co') {
    const supabase = createClient(supabaseUrl, supabaseKey);

    console.log('\n🔄 Resetting Supabase `cards` table for clean insertion...');
    await supabase.from('cards').delete().neq('id', '00000000-0000-0000-0000-000000000000');

    console.log('\n🚀 Uploading all N5 & N4 cards to Supabase database...');
    let inserted = 0;
    const BATCH = 50;

    // Remove client string id when inserting to Supabase so it lets Supabase auto-generate UUIDs
    const dbPayload = allCards.map(({ id, ...rest }) => rest);

    for (let i = 0; i < dbPayload.length; i += BATCH) {
      const batch = dbPayload.slice(i, i + BATCH);
      const { data, error } = await supabase.from('cards').insert(batch).select();
      if (error) {
        console.error(`❌ Batch insert error: ${error.message}`);
      } else {
        inserted += data ? data.length : batch.length;
        console.log(`   ✓ Inserted items ${i + 1}-${i + batch.length}`);
      }
    }
    console.log(`\n✅ Supabase Upload Complete! Total inserted: ${inserted}\n`);
  }
}

masterReseed().catch(console.error);
