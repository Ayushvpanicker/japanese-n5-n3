import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('\n❌ Missing Supabase credentials in .env!');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

export interface VocabCard {
  chapter: number;
  kanji: string | null;
  reading: string;
  meaning: string;
  notes: string | null;
}

export const FULL_N4_VOCABULARY: VocabCard[] = [
  // ================= CHAPTER 26 =================
  { chapter: 26, kanji: '診ます', reading: 'みます', meaning: 'check, examine (a patient)', notes: '病気を〜' },
  { chapter: 26, kanji: '探します、捜します', reading: 'さがします', meaning: 'look for, search', notes: '探し物/失くし物' },
  { chapter: 26, kanji: '遅れます', reading: 'おくれます', meaning: 'be late [for an appointment]', notes: '時間に〜' },
  { chapter: 26, kanji: '間に合います', reading: 'まにあいます', meaning: 'be in time [for an appointment]', notes: '時間に〜' },
  { chapter: 26, kanji: 'やります', reading: 'やります', meaning: 'do, perform', notes: null },
  { chapter: 26, kanji: '拾います', reading: 'ひろいます', meaning: 'pick up', notes: null },
  { chapter: 26, kanji: '連絡します', reading: 'れんらくします', meaning: 'contact, get in touch', notes: null },
  { chapter: 26, kanji: '参加します', reading: 'さんかします', meaning: 'attend, participate [in a party]', notes: 'パーティーに〜' },
  { chapter: 26, kanji: '申し込みます', reading: 'もうしこみます', meaning: 'apply for, enter for', notes: null },
  { chapter: 26, kanji: '都合がいい', reading: 'つごうがいい', meaning: 'convenient (concerning time)', notes: null },
  { chapter: 26, kanji: '都合が悪い', reading: 'つごうがわるい', meaning: 'inconvenient (concerning time)', notes: null },
  { chapter: 26, kanji: '気分がいい', reading: 'きぶんがいい', meaning: 'feel well, be in good mood', notes: null },
  { chapter: 26, kanji: '気分が悪い', reading: 'きぶんがわるい', meaning: 'feel ill, feel unwell', notes: null },
  { chapter: 26, kanji: '新聞社', reading: 'しんぶんしゃ', meaning: 'newspaper publishing company', notes: null },
  { chapter: 26, kanji: '柔道', reading: 'じゅうどう', meaning: 'judo', notes: null },
  { chapter: 26, kanji: '運動会', reading: 'うんどうかい', meaning: 'athletic meeting, sports day', notes: null },
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
  { chapter: 26, kanji: 'こんな〜', reading: 'こんな〜', meaning: 'like this', notes: null },
  { chapter: 26, kanji: 'そんな〜', reading: 'そんな〜', meaning: 'like that (near listener)', notes: null },
  { chapter: 26, kanji: 'あんな〜', reading: 'あんな〜', meaning: 'like that (far from both)', notes: null },
  { chapter: 26, kanji: '片付きます', reading: 'かたづきます', meaning: 'be put in order, tidied up', notes: '荷物が〜' },
  { chapter: 26, kanji: '出します', reading: 'だします', meaning: 'put out [the trash]', notes: 'ごみを〜' },
  { chapter: 26, kanji: '燃えるごみ', reading: 'もえるごみ', meaning: 'burnable trash', notes: null },
  { chapter: 26, kanji: '置き場', reading: 'おきば', meaning: 'place where something is put', notes: null },
  { chapter: 26, kanji: '横', reading: 'よこ', meaning: 'side, beside', notes: null },
  { chapter: 26, kanji: '瓶', reading: 'びん', meaning: 'bottle', notes: null },
  { chapter: 26, kanji: '缶', reading: 'かん', meaning: 'can, tin', notes: null },
  { chapter: 26, kanji: 'ガス', reading: 'ガス', meaning: 'gas', notes: null },
  { chapter: 26, kanji: '宇宙', reading: 'うちゅう', meaning: 'space, universe', notes: null },

  // ================= CHAPTER 27 =================
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
  { chapter: 27, kanji: '〜しか', reading: '〜しか', meaning: 'only ~ (with negative)', notes: null },
  { chapter: 27, kanji: 'ほかの', reading: 'ほかの', meaning: 'other', notes: null },
  { chapter: 27, kanji: 'はっきり', reading: 'はっきり', meaning: 'clearly', notes: null },
  { chapter: 27, kanji: '家具', reading: 'かぐ', meaning: 'furniture', notes: null },
  { chapter: 27, kanji: '本棚', reading: 'ほんだな', meaning: 'bookshelf', notes: null },
  { chapter: 27, kanji: 'いつか', reading: 'いつか', meaning: 'sometime, someday', notes: null },
  { chapter: 27, kanji: '建てます', reading: 'たてます', meaning: 'build', notes: null },
  { chapter: 27, kanji: 'すばらしい', reading: 'すばらしい', meaning: 'wonderful, splendid', notes: null },
  { chapter: 27, kanji: '子どもたち', reading: 'こどもたち', meaning: 'children', notes: null },
  { chapter: 27, kanji: '大好き', reading: 'だいすき', meaning: 'favorite, like very much', notes: null },
  { chapter: 27, kanji: '主人公', reading: 'しゅじんこう', meaning: 'main character, hero', notes: null },
  { chapter: 27, kanji: '形', reading: 'かたち', meaning: 'shape', notes: null },
  { chapter: 27, kanji: '不思議', reading: 'ふしぎ', meaning: 'strange, mysterious', notes: null },
  { chapter: 27, kanji: 'ポケット', reading: 'ポケット', meaning: 'pocket', notes: null },
  { chapter: 27, kanji: '例えば', reading: 'たとえば', meaning: 'for example', notes: null },
  { chapter: 27, kanji: '付けます', reading: 'つけます', meaning: 'attach, put on', notes: null },
  { chapter: 27, kanji: '自由', reading: 'じゆう', meaning: 'freedom', notes: null },
  { chapter: 27, kanji: '空', reading: 'そら', meaning: 'sky', notes: null },
  { chapter: 27, kanji: '飛ぶ', reading: 'とぶ', meaning: 'fly', notes: null },

  // ================= CHAPTER 28 =================
  { chapter: 28, kanji: '売れます', reading: 'うれます', meaning: 'sell, be sold', notes: 'パンが〜' },
  { chapter: 28, kanji: '踊ります', reading: 'おどります', meaning: 'dance', notes: null },
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
  { chapter: 28, kanji: '台所', reading: 'だいどころ', meaning: 'kitchen', notes: null },
  { chapter: 28, kanji: '経験', reading: 'けいけん', meaning: 'experience', notes: null },
  { chapter: 28, kanji: '力', reading: 'ちから', meaning: 'power, strength', notes: null },
  { chapter: 28, kanji: '人気', reading: 'にんき', meaning: 'popularity', notes: null },
  { chapter: 28, kanji: '色', reading: 'いろ', meaning: 'color', notes: null },
  { chapter: 28, kanji: '味', reading: 'あじ', meaning: 'taste', notes: null },
  { chapter: 28, kanji: 'ガム', reading: 'ガム', meaning: 'chewing gum', notes: null },
  { chapter: 28, kanji: '品物', reading: 'しなもの', meaning: 'goods, article', notes: null },
  { chapter: 28, kanji: '値段', reading: 'ねだん', meaning: 'price', notes: null },
  { chapter: 28, kanji: '給料', reading: 'きゅうりょう', meaning: 'salary, pay', notes: null },
  { chapter: 28, kanji: 'ボーナス', reading: 'ボーナス', meaning: 'bonus', notes: null },
  { chapter: 28, kanji: '番組', reading: 'ばんぐみ', meaning: 'TV or radio program', notes: null },
  { chapter: 28, kanji: 'ドラマ', reading: 'ドラマ', meaning: 'drama, show', notes: null },
  { chapter: 28, kanji: '歌手', reading: 'かしゅ', meaning: 'singer', notes: null },
  { chapter: 28, kanji: '小説', reading: 'しょうせつ', meaning: 'novel', notes: null },
  { chapter: 28, kanji: '小説家', reading: 'しょうせつか', meaning: 'novelist', notes: null },
  { chapter: 28, kanji: '息子', reading: 'むすこ', meaning: 'my son', notes: null },
  { chapter: 28, kanji: '息子さん', reading: 'むすこさん', meaning: "someone else's son", notes: null },
  { chapter: 28, kanji: '娘', reading: 'むすめ', meaning: 'my daughter', notes: null },
  { chapter: 28, kanji: '娘さん', reading: 'むすめさん', meaning: "someone else's daughter", notes: null },
  { chapter: 28, kanji: '自分', reading: 'じぶん', meaning: 'oneself', notes: null },
  { chapter: 28, kanji: '将来', reading: 'しょうらい', meaning: 'future', notes: null },

  // ================= CHAPTER 29 =================
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
  { chapter: 29, kanji: '外れます', reading: 'はずれます', meaning: 'come off', notes: 'ボタンが〜' },
  { chapter: 29, kanji: '止まります', reading: 'とまります', meaning: 'stop, park', notes: '車が〜' },
  { chapter: 29, kanji: 'まちがえます', reading: 'まちがえます', meaning: 'make a mistake', notes: null },
  { chapter: 29, kanji: '落とします', reading: 'おとします', meaning: 'drop, lose', notes: null },
  { chapter: 29, kanji: 'かかります', reading: 'かかります', meaning: 'be locked', notes: '鍵が〜' },
  { chapter: 29, kanji: 'ふきます', reading: 'ふきます', meaning: 'wipe', notes: null },
  { chapter: 29, kanji: '取り替えます', reading: 'とりかえます', meaning: 'exchange, change', notes: null },
  { chapter: 29, kanji: '片付けます', reading: 'かたづけます', meaning: 'put in order, tidy up', notes: null },
  { chapter: 29, kanji: 'お皿', reading: 'おさら', meaning: 'plate, dish', notes: null },
  { chapter: 29, kanji: 'おちゃわん', reading: 'おちゃわん', meaning: 'rice bowl', notes: null },
  { chapter: 29, kanji: 'コップ', reading: 'コップ', meaning: 'glass (vessel)', notes: null },
  { chapter: 29, kanji: 'ガラス', reading: 'ガラス', meaning: 'glass (material)', notes: null },
  { chapter: 29, kanji: '袋', reading: 'ふくろ', meaning: 'bag', notes: null },
  { chapter: 29, kanji: '書類', reading: 'しょるい', meaning: 'document, papers', notes: null },
  { chapter: 29, kanji: '枝', reading: 'えだ', meaning: 'branch, twig', notes: null },
  { chapter: 29, kanji: '駅員', reading: 'えきいん', meaning: 'station employee', notes: null },
  { chapter: 29, kanji: '交番', reading: 'こうばん', meaning: 'police box', notes: null },
  { chapter: 29, kanji: 'スピーチ', reading: 'スピーチ', meaning: 'speech', notes: null },
  { chapter: 29, kanji: '返事', reading: 'へんじ', meaning: 'reply, answer', notes: null },

  // ================= CHAPTER 30 =================
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
  { chapter: 30, kanji: '知らせます', reading: 'しらせます', meaning: 'inform, notify', notes: null },
  { chapter: 30, kanji: '相談します', reading: 'そうだんします', meaning: 'discuss, consult', notes: null },
  { chapter: 30, kanji: '予習します', reading: 'よしゅうします', meaning: "prepare one's lesson", notes: null },
  { chapter: 30, kanji: '復習します', reading: 'ふくしゅうします', meaning: "review one's lesson", notes: null },
  { chapter: 30, kanji: 'そのままにします', reading: 'そのままにします', meaning: 'leave things as they are', notes: null },
  { chapter: 30, kanji: 'カレンダー', reading: 'カレンダー', meaning: 'calendar', notes: null },
  { chapter: 30, kanji: 'ポスター', reading: 'ポスター', meaning: 'poster', notes: null },
  { chapter: 30, kanji: 'ごみ箱', reading: 'ごみばこ', meaning: 'trash can, dustbin', notes: null },
  { chapter: 30, kanji: '人形', reading: 'にんぎょう', meaning: 'doll, puppet', notes: null },
  { chapter: 30, kanji: '花瓶', reading: 'かびん', meaning: 'vase', notes: null },
  { chapter: 30, kanji: '鏡', reading: 'かがみ', meaning: 'mirror', notes: null },
  { chapter: 30, kanji: '引き出し', reading: 'ひきだし', meaning: 'drawer', notes: null },
  { chapter: 30, kanji: '玄関', reading: 'げんかん', meaning: 'entrance hall, foyer', notes: null },
  { chapter: 30, kanji: '廊下', reading: 'ろうか', meaning: 'corridor, hallway', notes: null },
  { chapter: 30, kanji: '壁', reading: 'かべ', meaning: 'wall', notes: null },
  { chapter: 30, kanji: '池', reading: 'いけ', meaning: 'pond', notes: null },
  { chapter: 30, kanji: '元の場所', reading: 'もとのばしょ', meaning: 'original place', notes: null },
  { chapter: 30, kanji: '周り', reading: 'まわり', meaning: 'round, around', notes: null },
  { chapter: 30, kanji: '真ん中', reading: 'まんなか', meaning: 'center, middle', notes: null },
  { chapter: 30, kanji: '隅', reading: 'すみ', meaning: 'corner', notes: null },

  // ================= CHAPTER 31 =================
  { chapter: 31, kanji: '始まります', reading: 'はじまります', meaning: 'start, begin', notes: '試験が〜' },
  { chapter: 31, kanji: '続けます', reading: 'つづけます', meaning: 'continue', notes: null },
  { chapter: 31, kanji: '見つけます', reading: 'みつけます', meaning: 'find', notes: null },
  { chapter: 31, kanji: '受ける', reading: 'うける', meaning: 'take [an exam]', notes: '試験を〜' },
  { chapter: 31, kanji: '入学します', reading: 'にゅうがくします', meaning: 'enter [a university]', notes: '大学に〜' },
  { chapter: 31, kanji: '卒業します', reading: 'そつぎょうします', meaning: 'graduate from [a university]', notes: '大学を〜' },
  { chapter: 31, kanji: '出席します', reading: 'しゅっせきします', meaning: 'attend [a meeting]', notes: '会議に〜' },
  { chapter: 31, kanji: '休憩します', reading: 'きゅうけいします', meaning: 'take a break', notes: null },
  { chapter: 31, kanji: '連休', reading: 'れんきゅう', meaning: 'consecutive holidays', notes: null },
  { chapter: 31, kanji: '作文', reading: 'さくぶん', meaning: 'essay, composition', notes: null },
  { chapter: 31, kanji: '展覧会', reading: 'てんらんかい', meaning: 'exhibition', notes: null },
  { chapter: 31, kanji: '結婚式', reading: 'けっこんしき', meaning: 'wedding ceremony', notes: null },
  { chapter: 31, kanji: '葬式', reading: 'そうしき', meaning: 'funeral', notes: null },
  { chapter: 31, kanji: '本社', reading: 'ほんしゃ', meaning: 'head office', notes: null },
  { chapter: 31, kanji: '支店', reading: 'してん', meaning: 'branch office', notes: null },
  { chapter: 31, kanji: '教会', reading: 'きょうかい', meaning: 'church', notes: null },
  { chapter: 31, kanji: '大学院', reading: 'だいがくいん', meaning: 'graduate school', notes: null },
  { chapter: 31, kanji: '動物園', reading: 'どうぶつえん', meaning: 'zoo', notes: null },
  { chapter: 31, kanji: '温泉', reading: 'おんせん', meaning: 'hot spring', notes: null },
  { chapter: 31, kanji: 'おきゃくさん', reading: 'おきゃくさん', meaning: 'visitor, guest, customer', notes: null },
  { chapter: 31, kanji: 'だれか', reading: 'だれか', meaning: 'someone, somebody', notes: null },

  // ================= CHAPTER 32 =================
  { chapter: 32, kanji: '運動します', reading: 'うんどうします', meaning: 'take exercise', notes: null },
  { chapter: 32, kanji: '成功します', reading: 'せいこうします', meaning: 'succeed', notes: null },
  { chapter: 32, kanji: '失敗します', reading: 'しっぱいします', meaning: 'fail [an exam]', notes: '試験に〜' },
  { chapter: 32, kanji: '合格します', reading: 'ごうかくします', meaning: 'pass [an exam]', notes: '試験に〜' },
  { chapter: 32, kanji: '戻ります', reading: 'もどります', meaning: 'return', notes: null },
  { chapter: 32, kanji: 'やみます', reading: 'やみます', meaning: 'stop [rain]', notes: '雨が〜' },
  { chapter: 32, kanji: '晴れます', reading: 'はれます', meaning: 'clear up', notes: null },
  { chapter: 32, kanji: '曇ります', reading: 'くもります', meaning: 'get cloudy', notes: null },
  { chapter: 32, kanji: '吹きます', reading: 'ふきます', meaning: 'blow [wind]', notes: '風が〜' },
  { chapter: 32, kanji: '治ります', reading: 'なおります', meaning: 'recover, get well', notes: '病気が〜' },
  { chapter: 32, kanji: '直ります', reading: 'なおります', meaning: 'be repaired, fixed', notes: '故障が〜' },
  { chapter: 32, kanji: 'ひきます', reading: 'ひきます', meaning: 'catch [a cold]', notes: '風邪を〜' },
  { chapter: 32, kanji: '冷やします', reading: 'ひやします', meaning: 'cool', notes: null },
  { chapter: 32, kanji: '心配', reading: 'しんぱい', meaning: 'worried, anxious', notes: null },
  { chapter: 32, kanji: '十分', reading: 'じゅうぶん', meaning: 'enough, sufficient', notes: null },
  { chapter: 32, kanji: 'おかしい', reading: 'おかしい', meaning: 'strange, funny', notes: null },
  { chapter: 32, kanji: 'うるさい', reading: 'うるさい', meaning: 'noisy', notes: null },
  { chapter: 32, kanji: '火傷', reading: 'やけど', meaning: 'burn', notes: null },
  { chapter: 32, kanji: '怪我', reading: 'けが', meaning: 'injury', notes: null },
  { chapter: 32, kanji: '咳', reading: 'せき', meaning: 'cough', notes: null },
  { chapter: 32, kanji: 'インフルエンザ', reading: 'インフルエンザ', meaning: 'influenza, flu', notes: null },
  { chapter: 32, kanji: '太陽', reading: 'たいよう', meaning: 'sun', notes: null },
  { chapter: 32, kanji: '星', reading: 'ほし', meaning: 'star', notes: null },
  { chapter: 32, kanji: '月', reading: 'つき', meaning: 'moon', notes: null },
  { chapter: 32, kanji: '風', reading: 'かぜ', meaning: 'wind', notes: null },
  { chapter: 32, kanji: '北', reading: 'きた', meaning: 'north', notes: null },
  { chapter: 32, kanji: '南', reading: 'みなみ', meaning: 'south', notes: null },
  { chapter: 32, kanji: '西', reading: 'にし', meaning: 'west', notes: null },
  { chapter: 32, kanji: '東', reading: 'ひがし', meaning: 'east', notes: null },
  { chapter: 32, kanji: '水道', reading: 'すいどう', meaning: 'tap water, waterworks', notes: null },
  { chapter: 32, kanji: 'エンジン', reading: 'エンジン', meaning: 'engine', notes: null },
  { chapter: 32, kanji: 'チーム', reading: 'チーム', meaning: 'team', notes: null },

  // ================= CHAPTER 33 =================
  { chapter: 33, kanji: '逃げます', reading: 'にげます', meaning: 'run away, escape', notes: null },
  { chapter: 33, kanji: '騒ぎます', reading: 'さわぎます', meaning: 'make a noise', notes: null },
  { chapter: 33, kanji: 'あきらめます', reading: 'あきらめます', meaning: 'give up', notes: null },
  { chapter: 33, kanji: '投げます', reading: 'なげます', meaning: 'throw', notes: null },
  { chapter: 33, kanji: '守ります', reading: 'まもります', meaning: 'keep, obey, protect', notes: '約束を〜' },
  { chapter: 33, kanji: '上げます', reading: 'あげます', meaning: 'raise, lift up', notes: null },
  { chapter: 33, kanji: '下げます', reading: 'さげます', meaning: 'lower, pull down', notes: null },
  { chapter: 33, kanji: '伝えます', reading: 'つたえます', meaning: 'convey, report', notes: null },
  { chapter: 33, kanji: '注意します', reading: 'ちゅういします', meaning: 'be careful, pay attention', notes: '車に〜' },
  { chapter: 33, kanji: '外します', reading: 'はずします', meaning: 'be away [from desk]', notes: '席を〜' },
  { chapter: 33, kanji: '駄目', reading: 'だめ', meaning: 'no good, impossible', notes: null },
  { chapter: 33, kanji: '席', reading: 'せき', meaning: 'seat', notes: null },
  { chapter: 33, kanji: 'マーク', reading: 'マーク', meaning: 'mark, symbol', notes: null },
  { chapter: 33, kanji: 'ボール', reading: 'ボール', meaning: 'ball', notes: null },
  { chapter: 33, kanji: '洗濯機', reading: 'せんたくき', meaning: 'washing machine', notes: null },
  { chapter: 33, kanji: '規則', reading: 'きそく', meaning: 'rule, regulation', notes: null },
  { chapter: 33, kanji: '使用禁止', reading: 'しようきんし', meaning: 'Do Not Use', notes: null },
  { chapter: 33, kanji: '立入禁止', reading: 'たちいりきんし', meaning: 'Keep Out, No Entry', notes: null },
  { chapter: 33, kanji: '非常口', reading: 'ひじょうぐち', meaning: 'emergency exit', notes: null },
  { chapter: 33, kanji: '無料', reading: 'むりょう', meaning: 'free of charge', notes: null },
  { chapter: 33, kanji: '本日休業', reading: 'ほんじつきゅうぎょう', meaning: 'Closed Today', notes: null },
  { chapter: 33, kanji: '営業中', reading: 'えいぎょうちゅう', meaning: 'Open for Business', notes: null },
  { chapter: 33, kanji: '使用中', reading: 'しようちゅう', meaning: 'In Use', notes: null },

  // ================= CHAPTER 34 =================
  { chapter: 34, kanji: '磨きます', reading: 'みがきます', meaning: 'brush [teeth], polish', notes: '歯を〜' },
  { chapter: 34, kanji: '組み立てます', reading: 'くみたてます', meaning: 'assemble', notes: null },
  { chapter: 34, kanji: '折ります', reading: 'おります', meaning: 'bend, fold', notes: null },
  { chapter: 34, kanji: '気がつきます', reading: 'きがつきます', meaning: 'notice, become aware of', notes: '忘れ物に〜' },
  { chapter: 34, kanji: 'つけます', reading: 'つけます', meaning: 'put in [soy sauce]', notes: '醤油を〜' },
  { chapter: 34, kanji: '見つかります', reading: 'みつかります', meaning: 'be found', notes: '鍵が〜' },
  { chapter: 34, kanji: '質問します', reading: 'しつもんします', meaning: 'ask a question', notes: null },
  { chapter: 34, kanji: '細い', reading: 'ほそい', meaning: 'thin (slender)', notes: null },
  { chapter: 34, kanji: '太い', reading: 'ふとい', meaning: 'thick (fat)', notes: null },
  { chapter: 34, kanji: '盆踊り', reading: 'ぼのおどり', meaning: 'Bon festival dance', notes: null },
  { chapter: 34, kanji: '家具', reading: 'かぐ', meaning: 'furniture', notes: null },
  { chapter: 34, kanji: 'シートベルト', reading: 'シートベルト', meaning: 'seat belt', notes: null },
  { chapter: 34, kanji: '説明書', reading: 'せつめいしょ', meaning: 'instruction manual', notes: null },
  { chapter: 34, kanji: '図', reading: 'ず', meaning: 'figure, drawing', notes: null },
  { chapter: 34, kanji: '線', reading: 'せん', meaning: 'line', notes: null },
  { chapter: 34, kanji: '矢印', reading: 'やじるし', meaning: 'arrow (sign)', notes: null },
  { chapter: 34, kanji: '黒', reading: 'くろ', meaning: 'black (noun)', notes: null },
  { chapter: 34, kanji: '白', reading: 'しろ', meaning: 'white (noun)', notes: null },
  { chapter: 34, kanji: '赤', reading: 'あか', meaning: 'red (noun)', notes: null },
  { chapter: 34, kanji: '青', reading: 'あお', meaning: 'blue (noun)', notes: null },
  { chapter: 34, kanji: '醤油', reading: 'しょうゆ', meaning: 'soy sauce', notes: null },
  { chapter: 34, kanji: 'ソース', reading: 'ソース', meaning: 'sauce', notes: null },

  // ================= CHAPTER 35 =================
  { chapter: 35, kanji: '咲きます', reading: 'さきます', meaning: 'bloom', notes: '花が〜' },
  { chapter: 35, kanji: '変わります', reading: 'かわります', meaning: 'change', notes: '色が〜' },
  { chapter: 35, kanji: '困ります', reading: 'こまります', meaning: 'be in trouble, have a problem', notes: null },
  { chapter: 35, kanji: '付けます', reading: 'つけます', meaning: 'draw, mark [a circle]', notes: '丸を〜' },
  { chapter: 35, kanji: '拾います', reading: 'ひろいます', meaning: 'pick up', notes: null },
  { chapter: 35, kanji: 'かかります', reading: 'かかります', meaning: 'take [time/money]', notes: null },
  { chapter: 35, kanji: '楽', reading: 'らく', meaning: 'easy, comfortable', notes: null },
  { chapter: 35, kanji: '正しい', reading: 'ただしい', meaning: 'correct, right', notes: null },
  { chapter: 35, kanji: '珍しい', reading: 'めずらしい', meaning: 'rare, uncommon', notes: null },
  { chapter: 35, kanji: '向こう', reading: 'むこう', meaning: 'over there, opposite side', notes: null },
  { chapter: 35, kanji: '島', reading: 'しま', meaning: 'island', notes: null },
  { chapter: 35, kanji: '港', reading: 'みなと', meaning: 'port, harbor', notes: null },
  { chapter: 35, kanji: '近所', reading: 'きんじょ', meaning: 'neighborhood', notes: null },
  { chapter: 35, kanji: '屋上', reading: 'おくじょう', meaning: 'rooftop', notes: null },
  { chapter: 35, kanji: '海外', reading: 'かいがい', meaning: 'overseas, abroad', notes: null },
  { chapter: 35, kanji: '山登り', reading: 'やまのぼり', meaning: 'mountain climbing', notes: null },
  { chapter: 35, kanji: 'ハイキング', reading: 'ハイキング', meaning: 'hiking', notes: null },
  { chapter: 35, kanji: '機会', reading: 'きかい', meaning: 'opportunity, chance', notes: null },

  // ================= CHAPTER 36 =================
  { chapter: 36, kanji: '届きます', reading: 'とどきます', meaning: 'be delivered', notes: '荷物が〜' },
  { chapter: 36, kanji: '参加します', reading: 'さんかします', meaning: 'participate [in a match]', notes: '試合に〜' },
  { chapter: 36, kanji: '打ちます', reading: 'うちます', meaning: 'type [on word processor]', notes: 'ワープロを〜' },
  { chapter: 36, kanji: '貯金します', reading: 'ちょきんします', meaning: 'save money', notes: null },
  { chapter: 36, kanji: '太ります', reading: 'ふとります', meaning: 'get fat', notes: null },
  { chapter: 36, kanji: '痩せます', reading: 'やせます', meaning: 'get slim, lose weight', notes: null },
  { chapter: 36, kanji: '過ぎます', reading: 'すぎます', meaning: 'pass [7 oclock]', notes: '7時を〜' },
  { chapter: 36, kanji: '慣れます', reading: 'なれます', meaning: 'get accustomed to', notes: '習慣に〜' },
  { chapter: 36, kanji: '硬い', reading: 'かたい', meaning: 'hard, tough, solid', notes: null },
  { chapter: 36, kanji: '軟らかい', reading: 'やわらかい', meaning: 'soft, tender', notes: null },
  { chapter: 36, kanji: '電子〜', reading: 'でんし〜', meaning: 'electronic ~', notes: null },
  { chapter: 36, kanji: '携帯〜', reading: 'けいたい〜', meaning: 'portable ~', notes: null },
  { chapter: 36, kanji: '工場', reading: 'こうじょう', meaning: 'factory', notes: null },
  { chapter: 36, kanji: '健康', reading: 'けんこう', meaning: 'health', notes: null },
  { chapter: 36, kanji: '剣道', reading: 'けんどう', meaning: 'kendo (fencing)', notes: null },
  { chapter: 36, kanji: '毎週', reading: 'まいしゅう', meaning: 'every week', notes: null },

  // ================= CHAPTER 37 =================
  { chapter: 37, kanji: '褒めます', reading: 'ほめます', meaning: 'praise, compliment', notes: null },
  { chapter: 37, kanji: '叱ります', reading: 'しかります', meaning: 'scold', notes: null },
  { chapter: 37, kanji: '誘います', reading: 'さそいます', meaning: 'invite, ask along', notes: null },
  { chapter: 37, kanji: '起こします', reading: 'おこします', meaning: 'wake someone up', notes: null },
  { chapter: 37, kanji: '招待します', reading: 'しょうたいします', meaning: 'invite [to a party]', notes: null },
  { chapter: 37, kanji: '頼みます', reading: 'たのみます', meaning: 'ask, request', notes: null },
  { chapter: 37, kanji: '注意します', reading: 'ちゅういします', meaning: 'warn, advise', notes: null },
  { chapter: 37, kanji: '盗みます', reading: 'ぬすみます', meaning: 'steal, rob', notes: null },
  { chapter: 37, kanji: '踏みます', reading: 'ふみます', meaning: 'step on', notes: '足を踏む' },
  { chapter: 37, kanji: '壊します', reading: 'こわします', meaning: 'break, destroy', notes: null },
  { chapter: 37, kanji: '汚します', reading: 'よごします', meaning: 'make dirty', notes: null },

  // ================= CHAPTER 38 =================
  { chapter: 38, kanji: '参加します', reading: 'さんかします', meaning: 'participate, join', notes: null },
  { chapter: 38, kanji: '育てます', reading: 'そだてます', meaning: 'breed, bring up', notes: null },
  { chapter: 38, kanji: '運びます', reading: 'はこびます', meaning: 'carry, transport', notes: null },
  { chapter: 38, kanji: '入院します', reading: 'にゅういんします', meaning: 'be hospitalized', notes: null },
  { chapter: 38, kanji: '退院します', reading: 'たいいんします', meaning: 'leave hospital', notes: null },
  { chapter: 38, kanji: '入れます', reading: 'いれます', meaning: 'turn on [power]', notes: '電源を〜' },
  { chapter: 38, kanji: '切ります', reading: 'きります', meaning: 'turn off [power]', notes: '電源を〜' },
  { chapter: 38, kanji: '掛けます', reading: 'かけます', meaning: 'lock', notes: '鍵を〜' },

  // ================= CHAPTER 39 =================
  { chapter: 39, kanji: '答えます', reading: 'こたえます', meaning: 'answer [a question]', notes: '質問に〜' },
  { chapter: 39, kanji: '倒れます', reading: 'たおれます', meaning: 'fall down', notes: 'ビルが〜' },
  { chapter: 39, kanji: '通ります', reading: 'とおりまし', meaning: 'pass through [a street]', notes: '道を〜' },
  { chapter: 39, kanji: '死にます', reading: 'しにます', meaning: 'die', notes: null },
  { chapter: 39, kanji: 'びっくりします', reading: 'びっくりします', meaning: 'be surprised', notes: null },
  { chapter: 39, kanji: 'がっかりします', reading: 'がっかりします', meaning: 'be disappointed', notes: null },
  { chapter: 39, kanji: '安心します', reading: 'あんしんします', meaning: 'feel relieved', notes: null },
  { chapter: 39, kanji: '喧嘩します', reading: 'けんかします', meaning: 'quarrel, fight', notes: null },
  { chapter: 39, kanji: '離婚します', reading: 'りこんします', meaning: 'divorce', notes: null },
  { chapter: 39, kanji: '太ります', reading: 'ふとります', meaning: 'get fat', notes: null },

  // ================= CHAPTER 40 =================
  { chapter: 40, kanji: '数えます', reading: 'かぞえます', meaning: 'count', notes: null },
  { chapter: 40, kanji: '測ります、測ります', reading: 'はかります', meaning: 'measure, weigh', notes: null },
  { chapter: 40, kanji: '確かめます', reading: 'たしかめます', meaning: 'confirm, make sure', notes: null },
  { chapter: 40, kanji: '合います', reading: 'あいます', meaning: 'fit, suit', notes: 'サイズが〜' },
  { chapter: 40, kanji: '出発します', reading: 'しゅっぱつします', meaning: 'depart, start out', notes: null },
  { chapter: 40, kanji: '到着します', reading: 'とうちゃくします', meaning: 'arrive', notes: null },
  { chapter: 40, kanji: '酔います', reading: 'よいまし', meaning: 'get drunk', notes: null },

  // ================= CHAPTER 41 =================
  { chapter: 41, kanji: '頂きます', reading: 'いただきます', meaning: 'receive (humble equivalent of もらいます)', notes: null },
  { chapter: 41, kanji: 'くださいます', reading: 'くださいます', meaning: 'give (respectful equivalent of くれます)', notes: null },
  { chapter: 41, kanji: 'やります', reading: 'やります', meaning: 'give [to younger/pets]', notes: null },
  { chapter: 41, kanji: '上げます', reading: 'あげます', meaning: 'raise, lift up', notes: null },
  { chapter: 41, kanji: '下げます', reading: 'さげます', meaning: 'lower, pull down', notes: null },
  { chapter: 41, kanji: '親切にします', reading: 'しんせつにします', meaning: 'be kind to', notes: null },

  // ================= CHAPTER 42 =================
  { chapter: 42, kanji: '包みます', reading: 'つつみます', meaning: 'wrap', notes: null },
  { chapter: 42, kanji: '沸かします', reading: 'わかします', meaning: 'boil', notes: 'お湯を〜' },
  { chapter: 42, kanji: '混ぜます', reading: 'まぜます', meaning: 'mix', notes: null },
  { chapter: 42, kanji: '計算します', reading: 'けいさんします', meaning: 'calculate', notes: null },
  { chapter: 42, kanji: '並びます', reading: 'ならびます', meaning: 'stand in a line', notes: null },

  // ================= CHAPTER 43 =================
  { chapter: 43, kanji: '増えます', reading: 'ふえます', meaning: 'increase', notes: '輸出品が〜' },
  { chapter: 43, kanji: '減ります', reading: 'へります', meaning: 'decrease', notes: '輸出品が〜' },
  { chapter: 43, kanji: '上がります', reading: 'あがります', meaning: 'rise', notes: 'ねだんが〜' },
  { chapter: 43, kanji: '下がります', reading: 'さがります', meaning: 'fall, drop', notes: 'ねだんが〜' },
  { chapter: 43, kanji: '切れます', reading: 'きれます', meaning: 'snap, break', notes: '紐が〜' },
  { chapter: 43, kanji: '外れます', reading: 'はずれます', meaning: 'come off', notes: 'ボタンが〜' },
  { chapter: 43, kanji: '落ちます', reading: 'おちます', meaning: 'fall down', notes: '荷物が〜' },

  // ================= CHAPTER 44 =================
  { chapter: 44, kanji: '泣きます', reading: 'なきます', meaning: 'cry', notes: null },
  { chapter: 44, kanji: '笑います', reading: 'わらいます', meaning: 'laugh, smile', notes: null },
  { chapter: 44, kanji: '乾きます', reading: 'かわきます', meaning: 'dry', notes: '服が〜' },
  { chapter: 44, kanji: '濡れます', reading: 'ぬれます', meaning: 'get wet', notes: '服が〜' },
  { chapter: 44, kanji: '滑ります', reading: 'すべります', meaning: 'slip', notes: null },
  { chapter: 44, kanji: '起きます', reading: 'おきます', meaning: 'happen, occur', notes: '事故が〜' },

  // ================= CHAPTER 45 =================
  { chapter: 45, kanji: '調節します', reading: 'ちょうせつします', meaning: 'adjust, regulate', notes: null },
  { chapter: 45, kanji: '嫌がり', reading: 'いやがり', meaning: 'dislike, hate', notes: null },
  { chapter: 45, kanji: '挑戦します', reading: 'ちょうせんします', meaning: 'challenge, try', notes: null },

  // ================= CHAPTER 46 =================
  { chapter: 46, kanji: '渡します', reading: 'わたします', meaning: 'hand over', notes: null },
  { chapter: 46, kanji: '帰って来ます', reading: 'かえってきます', meaning: 'come back', notes: null },
  { chapter: 46, kanji: '出ます', reading: 'でます', meaning: 'depart', notes: 'バスが〜' },
  { chapter: 46, kanji: '届きます', reading: 'とどきます', meaning: 'arrive [mail]', notes: '荷物が〜' },
  { chapter: 46, kanji: '入学します', reading: 'にゅうがくします', meaning: 'enter [university]', notes: null },

  // ================= CHAPTER 47 =================
  { chapter: 47, kanji: '吹きます', reading: 'ふきます', meaning: 'blow [wind]', notes: '風が〜' },
  { chapter: 47, kanji: '燃えます', reading: 'もえます', meaning: 'burn', notes: 'ごみが〜' },
  { chapter: 47, kanji: '亡くなります', reading: 'なくなります', meaning: 'pass away', notes: null },
  { chapter: 47, kanji: '集まります', reading: 'あつまります', meaning: 'gather', notes: '人が〜' },

  // ================= CHAPTER 48 =================
  { chapter: 48, kanji: '下ろします', reading: 'おろします', meaning: 'lower, put down', notes: null },
  { chapter: 48, kanji: '届けます', reading: 'とどけます', meaning: 'deliver', notes: null },
  { chapter: 48, kanji: '世話をします', reading: 'せわをします', meaning: 'take care of', notes: null },
  { chapter: 48, kanji: '嫌', reading: 'いや', meaning: 'unpleasant, reluctant', notes: null },

  // ================= CHAPTER 49 =================
  { chapter: 49, kanji: '勤めます', reading: 'つとめます', meaning: 'work [for a company]', notes: '会社に〜' },
  { chapter: 49, kanji: '休みます', reading: 'やすみます', meaning: 'go to bed, sleep (respectful)', notes: null },
  { chapter: 49, kanji: '掛けます', reading: 'かけます', meaning: 'sit down (respectful)', notes: 'いすに〜' },
  { chapter: 49, kanji: '過ごします', reading: 'すごします', meaning: 'spend, pass (time)', notes: null },
  { chapter: 49, kanji: '寄ります', reading: 'よりまし', meaning: 'drop into [a bank]', notes: '銀行に〜' },
  { chapter: 49, kanji: 'いらっしゃいます', reading: 'いらっしゃいます', meaning: 'be, go, come (respectful)', notes: null },
  { chapter: 49, kanji: '召し上がります', reading: 'めしあがります', meaning: 'eat, drink (respectful)', notes: null },
  { chapter: 49, kanji: 'おっしゃいます', reading: 'おっしゃいます', meaning: 'say, speak (respectful)', notes: null },
  { chapter: 49, kanji: 'なさいます', reading: 'なさいます', meaning: 'do (respectful)', notes: null },
  { chapter: 49, kanji: 'ご覧になります', reading: 'ごらんになります', meaning: 'see, look at (respectful)', notes: null },
  { chapter: 49, kanji: 'ご存知です', reading: 'ごぞんじです', meaning: 'know (respectful)', notes: null },

  // ================= CHAPTER 50 =================
  { chapter: 50, kanji: '参ります', reading: 'まいります', meaning: 'go, come (humble)', notes: null },
  { chapter: 50, kanji: 'おります', reading: 'おります', meaning: 'be (humble equivalent of います)', notes: null },
  { chapter: 50, kanji: '頂きます', reading: 'いただきます', meaning: 'eat, drink, receive (humble)', notes: null },
  { chapter: 50, kanji: '申します', reading: 'もうします', meaning: 'say, be called (humble)', notes: null },
  { chapter: 50, kanji: 'いたします', reading: 'いたします', meaning: 'do (humble equivalent of します)', notes: null },
  { chapter: 50, kanji: '拝見します', reading: 'はいけんします', meaning: 'see, look at (humble)', notes: null },
  { chapter: 50, kanji: '存じます', reading: 'ぞんじます', meaning: 'know (humble)', notes: null },
  { chapter: 50, kanji: '伺います', reading: 'うかがいます', meaning: 'ask, hear, visit (humble)', notes: null },
  { chapter: 50, kanji: 'お目にかかります', reading: 'おめにかかります', meaning: 'meet (humble equivalent of 会います)', notes: null },
  { chapter: 50, kanji: '淹れます', reading: 'いれます', meaning: 'make [coffee]', notes: 'コーヒーを〜' },
  { chapter: 50, kanji: '用意します', reading: 'よういします', meaning: 'prepare', notes: null },
  { chapter: 50, kanji: '私', reading: 'わたくし', meaning: 'I (humble)', notes: null },
  { chapter: 50, kanji: '郊外', reading: 'こうがい', meaning: 'suburbs', notes: null },
  { chapter: 50, kanji: '半年', reading: 'はんとし', meaning: 'half a year', notes: null },
  { chapter: 50, kanji: '最初に', reading: 'さいしょに', meaning: 'firstly, at first', notes: null },
  { chapter: 50, kanji: '最後に', reading: 'さいごに', meaning: 'finally, at last', notes: null },
];

async function seedFull() {
  console.log(`\n🧹 Clearing all previous vocabulary from Supabase cards table...`);
  const { error: clearError } = await supabase.from('cards').delete().neq('chapter', 0);
  if (clearError) {
    console.warn('⚠️ Warning clearing cards:', clearError.message);
  } else {
    console.log('✓ Successfully cleared old database rows.');
  }

  console.log(`\n🚀 Inserting COMPLETE N4 Vocabulary dataset (${FULL_N4_VOCABULARY.length} items across Chapters 26 to 50)...`);

  // Batch insert in groups of 50
  const BATCH_SIZE = 50;
  let totalInserted = 0;

  for (let i = 0; i < FULL_N4_VOCABULARY.length; i += BATCH_SIZE) {
    const batch = FULL_N4_VOCABULARY.slice(i, i + BATCH_SIZE);
    const { data, error } = await supabase.from('cards').insert(batch).select();

    if (error) {
      console.error(`❌ Batch ${i / BATCH_SIZE + 1} insert error:`, error.message);
    } else {
      totalInserted += data ? data.length : batch.length;
      console.log(`   ✓ Inserted items ${i + 1} to ${i + batch.length}`);
    }
  }

  console.log(`\n🎉 Full N4 Vocabulary Seed Complete!`);
  console.log(`   Total items inserted into Supabase: ${totalInserted}`);
  console.log(`   Chapters covered: 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50\n`);
}

seedFull();
