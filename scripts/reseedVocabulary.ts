import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('\n❌ Missing Supabase credentials in .env!');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

export const ALL_N4_VOCABULARY = [
  // --- CHAPTER 26 ---
  { chapter: 26, kanji: '診ます', reading: 'みます', meaning: 'check, examine (a patient)', notes: '病気を〜' },
  { chapter: 26, kanji: '探します、捜します', reading: 'さがします', meaning: 'look for, search', notes: '探し物/失くし物' },
  { chapter: 26, kanji: '遅れます', reading: 'おくれます', meaning: 'be late [for an appointment]', notes: '時間に〜' },
  { chapter: 26, kanji: '間に合います', reading: 'まにあいます', meaning: 'be in time [for an appointment]', notes: '時間に〜' },
  { chapter: 26, kanji: 'やります', reading: 'やります', meaning: 'do, perform', notes: null },
  { chapter: 26, kanji: '拾います', reading: 'ひろいます', meaning: 'pick up', notes: null },
  { chapter: 26, kanji: '連絡します', reading: 'れんらくします', meaning: 'contact, get in touch', notes: null },
  { chapter: 26, kanji: '気分がいい', reading: 'きぶんがいい', meaning: 'feel well, be in good mood', notes: null },
  { chapter: 26, kanji: '気分が悪い', reading: 'きぶんがわるい', meaning: 'feel ill, feel unwell', notes: null },
  { chapter: 26, kanji: '運動会', reading: 'うんどうかい', meaning: 'athletic meeting, sports day', notes: null },
  { chapter: 26, kanji: 'フリーマーケット', reading: 'フリーマーケット', meaning: 'flea market', notes: null },
  { chapter: 26, kanji: '場所', reading: 'ばしょ', meaning: 'place, location', notes: null },
  { chapter: 26, kanji: 'ボランティア', reading: 'ボランティア', meaning: 'volunteer', notes: null },
  { chapter: 26, kanji: '財布', reading: 'さいふ', meaning: 'wallet, purse', notes: null },
  { chapter: 26, kanji: 'ごみ', reading: 'ごみ', meaning: 'garbage, trash', notes: null },
  { chapter: 26, kanji: '国会議事堂', reading: 'こっかいぎじどう', meaning: 'Diet Building', notes: null },
  { chapter: 26, kanji: '平日', reading: 'へいじつ', meaning: 'weekday', notes: null },
  { chapter: 26, kanji: '〜弁', reading: '〜べん', meaning: '~ dialect', notes: '大阪弁' },
  { chapter: 26, kanji: '今度', reading: 'こんど', meaning: 'next time, another time', notes: null },
  { chapter: 26, kanji: 'ずいぶん', reading: 'ずいぶん', meaning: 'very, pretty', notes: null },
  { chapter: 26, kanji: '直接', reading: 'ちょくせつ', meaning: 'directly', notes: null },
  { chapter: 26, kanji: 'いつでも', reading: 'いつでも', meaning: 'anytime', notes: null },
  { chapter: 26, kanji: 'どこでも', reading: 'どこでも', meaning: 'anywhere', notes: null },
  { chapter: 26, kanji: 'だれでも', reading: 'だれでも', meaning: 'anybody, anyone', notes: null },
  { chapter: 26, kanji: 'なんでも', reading: 'なんでも', meaning: 'anything', notes: null },
  { chapter: 26, kanji: '片付きます', reading: 'かたづきます', meaning: 'be put in order, tidied up', notes: '荷物が〜' },
  { chapter: 26, kanji: '出します', reading: 'だします', meaning: 'put out [the trash]', notes: 'ごみを〜' },
  { chapter: 26, kanji: '燃えるごみ', reading: 'もえるごみ', meaning: 'burnable trash', notes: null },
  { chapter: 26, kanji: '置き場', reading: 'おきば', meaning: 'place where something is put', notes: null },

  // --- CHAPTER 27 ---
  { chapter: 27, kanji: '飼います', reading: 'かいます', meaning: 'keep [a pet], raise [an animal]', notes: 'ペットを〜' },
  { chapter: 27, kanji: '走ります', reading: 'はしります', meaning: 'run, drive', notes: '道を〜' },
  { chapter: 27, kanji: '見えます', reading: 'みえます', meaning: 'be seen, be visible', notes: '山が〜' },
  { chapter: 27, kanji: '聞こえます', reading: 'きこえます', meaning: 'be heard, be audible', notes: '音が〜' },
  { chapter: 27, kanji: 'できます', reading: 'できます', meaning: 'be made, be completed, be built', notes: '空港が〜' },
  { chapter: 27, kanji: '開きます', reading: 'ひらきます', meaning: 'set up, hold, open', notes: '教室を〜' },
  { chapter: 27, kanji: 'ペット', reading: 'ペット', meaning: 'pet', notes: null },
  { chapter: 27, kanji: '鳥', reading: 'とり', meaning: 'bird', notes: null },
  { chapter: 27, kanji: '声', reading: 'こえ', meaning: 'voice', notes: null },
  { chapter: 27, kanji: '波', reading: 'なみ', meaning: 'wave', notes: null },
  { chapter: 27, kanji: '花火', reading: 'はなび', meaning: 'fireworks', notes: null },
  { chapter: 27, kanji: '道具', reading: 'どうぐ', meaning: 'tool, instrument, equipment', notes: null },
  { chapter: 27, kanji: 'クリーニング', reading: 'クリーニング', meaning: 'dry cleaning, laundry', notes: null },
  { chapter: 27, kanji: '家', reading: 'いえ', meaning: 'house, home', notes: null },
  { chapter: 27, kanji: 'マンション', reading: 'マンション', meaning: 'apartment building, condominium', notes: null },
  { chapter: 27, kanji: 'キッチン', reading: 'キッチン', meaning: 'kitchen', notes: null },
  { chapter: 27, kanji: 'パーティールーム', reading: 'パーティールーム', meaning: 'party room', notes: null },
  { chapter: 27, kanji: '方', reading: 'かた', meaning: 'person (polite)', notes: null },
  { chapter: 27, kanji: '〜後', reading: '〜ご', meaning: 'after ~ (duration)', notes: '時間〜' },

  // --- CHAPTER 28 ---
  { chapter: 28, kanji: '売れます', reading: 'うれます', meaning: 'sell, be sold', notes: 'パンが〜' },
  { chapter: 28, kanji: '踊ります', reading: 'おどりま', meaning: 'dance', notes: null },
  { chapter: 28, kanji: '噛みます', reading: 'かみます', meaning: 'chew, bite', notes: null },
  { chapter: 28, kanji: '選びます', reading: 'えらびます', meaning: 'choose, select', notes: null },
  { chapter: 28, kanji: '通います', reading: 'かよいます', meaning: 'commute, go back and forth', notes: '大学に〜' },
  { chapter: 28, kanji: 'メモします', reading: 'メモします', meaning: 'take a note', notes: null },
  { chapter: 28, kanji: '真面目', reading: 'まじめ', meaning: 'serious, earnest', notes: null },
  { chapter: 28, kanji: '熱心', reading: 'ねっしん', meaning: 'enthusiastic, eager', notes: null },
  { chapter: 28, kanji: '偉い', reading: 'えらい', meaning: 'admirable, great', notes: null },
  { chapter: 28, kanji: 'ちょうどいい', reading: 'ちょうどいい', meaning: 'proper, just right', notes: null },
  { chapter: 28, kanji: '景色', reading: 'けしき', meaning: 'scenery, view', notes: null },
  { chapter: 28, kanji: '美容院', reading: 'びよういん', meaning: 'beauty salon, hairdresser', notes: null },

  // --- CHAPTER 29 ---
  { chapter: 29, kanji: '開きます', reading: 'あきます', meaning: 'open', notes: 'ドアが〜' },
  { chapter: 29, kanji: '閉まります', reading: 'しまります', meaning: 'close, shut', notes: 'ドアが〜' },
  { chapter: 29, kanji: 'つく', reading: 'つく', meaning: 'turn on, come on', notes: '電気が〜' },
  { chapter: 29, kanji: '消えます', reading: 'きえます', meaning: 'go off, turn off', notes: '電気が〜' },
  { chapter: 29, kanji: '壊れます', reading: 'こわれます', meaning: 'break, be broken', notes: 'いすが〜' },
  { chapter: 29, kanji: '割れます', reading: 'われます', meaning: 'break, smash', notes: 'コップが〜' },
  { chapter: 29, kanji: '折れます', reading: 'おれます', meaning: 'break, snap', notes: '木が〜' },
  { chapter: 29, kanji: '破れます', reading: 'やぶれます', meaning: 'tear', notes: '紙が〜' },
  { chapter: 29, kanji: '汚れます', reading: 'よごれます', meaning: 'get dirty', notes: '服が〜' },
  { chapter: 29, kanji: '付きます', reading: 'つきます', meaning: 'be attached', notes: 'ポケットが〜' },

  // --- CHAPTER 30 ---
  { chapter: 30, kanji: '貼ります', reading: 'はります', meaning: 'put up, post, paste', notes: null },
  { chapter: 30, kanji: '掛けます', reading: 'かけます', meaning: 'hang', notes: 'カレンダーを〜' },
  { chapter: 30, kanji: '飾ります', reading: 'かざります', meaning: 'display, decorate', notes: null },
  { chapter: 30, kanji: '並べます', reading: 'ならべます', meaning: 'arrange, line up', notes: null },
  { chapter: 30, kanji: '植えます', reading: 'うえます', meaning: 'plant', notes: null },
  { chapter: 30, kanji: '戻します', reading: 'もどします', meaning: 'return, put back', notes: null },
  { chapter: 30, kanji: 'まとめます', reading: 'まとめます', meaning: 'put together, summarize', notes: null },
  { chapter: 30, kanji: '片付けます', reading: 'かたづけます', meaning: 'put things in order, tidy up', notes: null },
  { chapter: 30, kanji: 'しまいます', reading: 'しまいます', meaning: 'put away', notes: null },
  { chapter: 30, kanji: '決めます', reading: 'きめます', meaning: 'decide', notes: null },

  // --- CHAPTER 31 ---
  { chapter: 31, kanji: '始まります', reading: 'はじまります', meaning: 'start, begin', notes: '試験が〜' },
  { chapter: 31, kanji: '続けます', reading: 'つづけます', meaning: 'continue', notes: null },
  { chapter: 31, kanji: '見つけます', reading: 'みつけます', meaning: 'find', notes: null },
  { chapter: 31, kanji: '受ける', reading: 'うける', meaning: 'take [an exam]', notes: '試験を〜' },
  { chapter: 31, kanji: '入学します', reading: 'にゅうがくします', meaning: 'enter [a university]', notes: '大学に〜' },
  { chapter: 31, kanji: '卒業します', reading: 'そつぎょうします', meaning: 'graduate from [a university]', notes: '大学を〜' },

  // --- CHAPTER 32 ---
  { chapter: 32, kanji: '運動します', reading: 'うんどうします', meaning: 'take exercise', notes: null },
  { chapter: 32, kanji: '成功します', reading: 'せいこうします', meaning: 'succeed', notes: null },
  { chapter: 32, kanji: '失敗します', reading: 'しっぱいします', meaning: 'fail [an exam]', notes: '試験に〜' },
  { chapter: 32, kanji: '合格します', reading: 'ごうかくします', meaning: 'pass [an exam]', notes: '試験に〜' },
  { chapter: 32, kanji: '晴れます', reading: 'はれます', meaning: 'clear up', notes: null },

  // --- CHAPTER 33 ---
  { chapter: 33, kanji: '逃げます', reading: 'にげます', meaning: 'run away, escape', notes: null },
  { chapter: 33, kanji: '騒ぎます', reading: 'さわぎます', meaning: 'make a noise', notes: null },
  { chapter: 33, kanji: 'あきらめます', reading: 'あきらめます', meaning: 'give up', notes: null },
  { chapter: 33, kanji: '守ります', reading: 'まもります', meaning: 'keep, obey, protect', notes: '約束を〜' },

  // --- CHAPTER 34 ---
  { chapter: 34, kanji: '磨きます', reading: 'みがきます', meaning: 'brush [teeth], polish', notes: '歯を〜' },
  { chapter: 34, kanji: '組み立てます', reading: 'くみたてます', meaning: 'assemble', notes: null },
  { chapter: 34, kanji: '折ります', reading: 'おります', meaning: 'bend, fold', notes: null },

  // --- CHAPTER 35 ---
  { chapter: 35, kanji: '咲きます', reading: 'さきます', meaning: 'bloom', notes: '花が〜' },
  { chapter: 35, kanji: '変わります', reading: 'かわります', meaning: 'change', notes: '色が〜' },
  { chapter: 35, kanji: '困ります', reading: 'こまります', meaning: 'be in trouble, have a problem', notes: null },
];

async function reseed() {
  console.log('\n🧹 Clearing previous vocabulary data in Supabase...');

  // Delete all previous rows from cards table
  const { error: deleteError } = await supabase.from('cards').delete().neq('chapter', 0);

  if (deleteError) {
    console.error('⚠️ Delete warning:', deleteError.message);
  } else {
    console.log('✓ Cleared previous entries successfully.');
  }

  console.log(`\n🚀 Inserting ${ALL_N4_VOCABULARY.length} fresh Japanese vocabulary items (showing Hiragana)...`);

  const { data, error } = await supabase.from('cards').insert(ALL_N4_VOCABULARY).select();

  if (error) {
    console.error('❌ Insert error:', error.message);
  } else {
    console.log(`🎉 Success! Inserted ${data ? data.length : ALL_N4_VOCABULARY.length} vocabulary cards into Supabase!\n`);
  }
}

reseed();
