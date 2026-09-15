import fs from 'fs';
import path from 'path';
import { KANJI_LESSONS_DATA } from '../src/data/kanjiLessonsData';

export interface RadicalItem {
  char: string;
  meaning: string;
}

export interface KanjiMnemonicInfo {
  radicals: RadicalItem[];
  story: string;
}

// Built-in dictionary for N5 and N4 lesson kanji
const mnemonicsMap: Record<string, KanjiMnemonicInfo> = {
  // N5 Lessons 1-11
  '山': { radicals: [{ char: '山', meaning: 'mountain' }], story: 'Pictograph of three jagged mountain peaks rising into the sky.' },
  '川': { radicals: [{ char: '川', meaning: 'river' }], story: 'Three vertical streams representing water flowing down a riverbed.' },
  '田': { radicals: [{ char: '田', meaning: 'rice field' }], story: 'A square field divided into four crop quadrants.' },
  '日': { radicals: [{ char: '日', meaning: 'sun/day' }], story: 'A sun disk with a central ray, representing the sun and daytime.' },
  '月': { radicals: [{ char: '月', meaning: 'moon/month' }], story: 'A crescent moon floating in the night sky with clouds.' },
  '火': { radicals: [{ char: '火', meaning: 'fire' }], story: 'Flames and sparks leaping up from a campfire.' },
  '水': { radicals: [{ char: '水', meaning: 'water' }], story: 'Water cascading down a main stream with side splashes.' },
  '木': { radicals: [{ char: '木', meaning: 'tree' }], story: 'A main tree trunk with branches reaching up and roots below.' },
  '金': { radicals: [{ char: '金', meaning: 'gold/metal' }], story: 'Nuggets of gold buried under a roof deep in the earth.' },
  '土': { radicals: [{ char: '土', meaning: 'soil/earth' }], story: 'A mound of rich soil sitting on top of the ground.' },
  
  '一': { radicals: [{ char: '一', meaning: 'one' }], story: 'A single horizontal line representing the number one.' },
  '二': { radicals: [{ char: '二', meaning: 'two' }], story: 'Two parallel horizontal lines representing the number two.' },
  '三': { radicals: [{ char: '三', meaning: 'three' }], story: 'Three parallel horizontal lines representing the number three.' },
  '四': { radicals: [{ char: '囗', meaning: 'enclosure' }, { char: '儿', meaning: 'legs' }], story: 'A box enclosure (囗) with two legs (儿) inside, representing four.' },
  '五': { radicals: [{ char: '五', meaning: 'five' }], story: 'Interlocking lines representing five fingers woven together.' },
  '六': { radicals: [{ char: '亠', meaning: 'lid' }, { char: '八', meaning: 'eight' }], story: 'A lid (亠) over two arms, representing six.' },
  '七': { radicals: [{ char: '七', meaning: 'seven' }], story: 'An inverted cut mark representing seven.' },
  '八': { radicals: [{ char: '八', meaning: 'eight' }], story: 'Two curved lines spreading outward, representing eight.' },
  '九': { radicals: [{ char: '九', meaning: 'nine' }], story: 'A bent arm reaching up, one short of ten.' },
  '十': { radicals: [{ char: '十', meaning: 'ten' }], story: 'A vertical and horizontal cross representing ten.' },

  '百': { radicals: [{ char: '一', meaning: 'one' }, { char: '白', meaning: 'white' }], story: 'One (一) white (白) grain repeated one hundred times.' },
  '千': { radicals: [{ char: '丿', meaning: 'slash' }, { char: '十', meaning: 'ten' }], story: 'A slash (丿) added over ten (十) makes one thousand.' },
  '万': { radicals: [{ char: '一', meaning: 'one' }, { char: '勹', meaning: 'wrap' }], story: 'Ten thousand items wrapped (勹) into one (一) bundle.' },
  '年': { radicals: [{ char: '干', meaning: 'shield' }, { char: '人', meaning: 'person' }], story: 'A person (人) holding a shield (干) through a full year of seasons.' },
  '円': { radicals: [{ char: '冂', meaning: 'border' }, { char: '人', meaning: 'person' }], story: 'A round coin or circle (円) used as currency in Japan.' },
  '上': { radicals: [{ char: '一', meaning: 'ground line' }, { char: '卜', meaning: 'indicator' }], story: 'A mark placed above (上) the ground line.' },
  '下': { radicals: [{ char: '一', meaning: 'ground line' }, { char: '卜', meaning: 'indicator' }], story: 'A mark hanging below (下) the ground line.' },
  '中': { radicals: [{ char: '口', meaning: 'box' }, { char: '丨', meaning: 'center line' }], story: 'A line (丨) passing straight through the middle/center (中) of a box (口).' },
  '半': { radicals: [{ char: '八', meaning: 'divide' }, { char: '十', meaning: 'ten' }], story: 'Dividing (八) ten (十) right down the center leaves half (半).' },
  '分': { radicals: [{ char: '八', meaning: 'divide' }, { char: '刀', meaning: 'knife' }], story: 'Using a knife (刀) to divide (八) an object into parts or minutes (分).' },

  '人': { radicals: [{ char: '人', meaning: 'person' }], story: 'A side-profile pictograph of a human walking on two legs.' },
  '子': { radicals: [{ char: '子', meaning: 'child' }], story: 'A baby/child with arms outstretched wrapped in swaddling clothes.' },
  '女': { radicals: [{ char: '女', meaning: 'woman' }], story: 'A graceful woman sitting or kneeling.' },
  '男': { radicals: [{ char: '田', meaning: 'rice field' }, { char: '力', meaning: 'power' }], story: 'A man (男) using his strength (力) to work in the field (田).' },
  '力': { radicals: [{ char: '力', meaning: 'power/arm' }], story: 'A flexed muscular arm demonstrating physical power (力).' },
  '目': { radicals: [{ char: '目', meaning: 'eye' }], story: 'An eye standing vertically with pupil lines inside.' },
  '口': { radicals: [{ char: '口', meaning: 'mouth' }], story: 'An open mouth used for speaking and eating.' },
  '耳': { radicals: [{ char: '耳', meaning: 'ear' }], story: 'A pictograph of a human ear with earlobe and canal.' },
  '手': { radicals: [{ char: '手', meaning: 'hand' }], story: 'A hand with five fingers outstretched.' },
  '足': { radicals: [{ char: '口', meaning: 'knee' }, { char: '止', meaning: 'foot' }], story: 'A knee (口) and foot (止) together forming a leg/foot (足).' },

  '父': { radicals: [{ char: '八', meaning: 'dividers' }, { char: '乂', meaning: 'crossed sticks' }], story: 'A father holding crossed sticks or tools to guide his family.' },
  '母': { radicals: [{ char: '母', meaning: 'mother' }], story: 'A mother with two dots representing breasts nurturing her child.' },
  '先': { radicals: [{ char: '牛', meaning: 'cow' }, { char: '儿', meaning: 'legs' }], story: 'Walking ahead (先) like a lead cow leading the herd.' },
  '生': { radicals: [{ char: '生', meaning: 'sprout' }], story: 'A fresh green plant sprouting up out of the fertile soil.' },
  '学': { radicals: [{ char: '⺌', meaning: 'sparks' }, { char: '冖', meaning: 'roof' }, { char: '子', meaning: 'child' }], story: 'A child (子) under the roof (冖) receiving sparks (⺌) of knowledge (学).' },
  '校': { radicals: [{ char: '木', meaning: 'tree' }, { char: '交', meaning: 'intersect' }], story: 'A wooden (木) building where students meet and interact (交) is a school (校).' },
  '友': { radicals: [{ char: 'ナ', meaning: 'hand' }, { char: '又', meaning: 'right hand' }], story: 'Two friends joining hands (又) together in companionship.' },
  '本': { radicals: [{ char: '木', meaning: 'tree' }, { char: '一', meaning: 'root mark' }], story: 'A line marking the root of a tree (木), representing origin or book (本).' },
  '毎': { radicals: [{ char: '人', meaning: 'person' }, { char: '母', meaning: 'mother' }], story: 'Every (毎) mother (母) caring for her family day after day.' },
  '何': { radicals: [{ char: 'イ', meaning: 'person' }, { char: '可', meaning: 'can' }], story: 'A person (イ) carrying a load asking "What (何) can (可) I do?"' },

  '前': { radicals: [{ char: '月', meaning: 'body' }, { char: '刂', meaning: 'knife' }], story: 'Stepping forward (前) with a knife (刂) in front of you.' },
  '後': { radicals: [{ char: '彳', meaning: 'step' }, { char: '幺', meaning: 'tiny' }, { char: '夂', meaning: 'follow' }], story: 'Taking tiny steps behind someone, following after them (後).' },
  '外': { radicals: [{ char: '夕', meaning: 'evening' }, { char: '卜', meaning: 'divination' }], story: 'Doing fortune-telling outside (外) in the evening (夕).' },
  '左': { radicals: [{ char: 'ナ', meaning: 'left hand' }, { char: '工', meaning: 'work tool' }], story: 'Holding a work tool (工) with your left hand (左).' },
  '右': { radicals: [{ char: 'ナ', meaning: 'right hand' }, { char: '口', meaning: 'mouth' }], story: 'Bringing food to your mouth (口) with your right hand (右).' },
  '東': { radicals: [{ char: '木', meaning: 'tree' }, { char: '日', meaning: 'sun' }], story: 'The sun (日) rising behind a tree (木) in the East (東).' },
  '西': { radicals: [{ char: '西', meaning: 'bird nest' }], story: 'A bird returning to its nest (西) at sunset in the West.' },
  '南': { radicals: [{ char: '十', meaning: 'cross' }, { char: '冂', meaning: 'border' }, { char: '¥', meaning: 'vegetation' }], story: 'Warm sunshine in the South (南) feeding lush vegetation.' },
  '北': { radicals: [{ char: '北', meaning: 'back to back' }], story: 'Two people sitting back-to-back facing away from the cold North wind.' },
  '名': { radicals: [{ char: '夕', meaning: 'evening' }, { char: '口', meaning: 'mouth' }], story: 'In the dark evening (夕), calling out your name (名) with your mouth (口).' },

  '牛': { radicals: [{ char: '牛', meaning: 'cow/ox' }], story: 'A pictograph of a cow with horns at the top.' },
  '馬': { radicals: [{ char: '馬', meaning: 'horse' }], story: 'A horse with a flowing mane, body, and four legs running.' },
  '魚': { radicals: [{ char: 'ク', meaning: 'head' }, { char: '田', meaning: 'body' }, { char: '灬', meaning: 'tail/fins' }], story: 'A fish with a head (ク), scaled body (田), and tail fins (灬).' },
  '貝': { radicals: [{ char: '貝', meaning: 'shellfish' }], story: 'A cowrie shell used as ancient money/currency.' },
  '雨': { radicals: [{ char: '一', meaning: 'sky' }, { char: '冂', meaning: 'cloud' }, { char: '丨', meaning: 'stream' }, { char: '灬', meaning: 'drops' }], story: 'Raindrops (灬) falling down from a cloud (冂) in the sky.' },
  '天': { radicals: [{ char: '一', meaning: 'top sky' }, { char: '大', meaning: 'person' }], story: 'The vast heavens/sky (天) above a great person (大).' },
  '気': { radicals: [{ char: '气', meaning: 'air/steam' }, { char: '〆', meaning: 'rice grain' }], story: 'Steam (气) rising from hot cooking rice, representing spirit/energy (気).' },
  '車': { radicals: [{ char: '車', meaning: 'cart/car' }], story: 'Top-down view of a wheeled cart (車) with axle and wheels.' },
  '門': { radicals: [{ char: '門', meaning: 'gate' }], story: 'Two swinging doors of a traditional double gate (門).' },
  '午': { radicals: [{ char: '午', meaning: 'pestle/noon' }], story: 'A pestle standing upright when the sun is at high noon (午).' },

  '大': { radicals: [{ char: '大', meaning: 'big person' }], story: 'A person standing with arms and legs spread wide, looking big (大).' },
  '小': { radicals: [{ char: '小', meaning: 'small' }], story: 'A central object split into small (小) side fragments.' },
  '高': { radicals: [{ char: '高', meaning: 'tall tower' }], story: 'A tall pavilion/tower (高) with a high roof and windows.' },
  '安': { radicals: [{ char: '宀', meaning: 'roof' }, { char: '女', meaning: 'woman' }], story: 'A woman (女) safe and peaceful under her home roof (宀).' },
  '新': { radicals: [{ char: '立', meaning: 'stand' }, { char: '木', meaning: 'tree' }, { char: '斤', meaning: 'axe' }], story: 'Cutting a standing tree (木) with an axe (斤) to create new (新) timber.' },
  '古': { radicals: [{ char: '十', meaning: 'ten generations' }, { char: '口', meaning: 'mouth' }], story: 'A story passed down orally through ten (十) mouths (口) is old (古).' },
  '長': { radicals: [{ char: '長', meaning: 'long hair' }], story: 'An elder with long (長) flowing hair and a walking staff.' },
  '多': { radicals: [{ char: '夕', meaning: 'evening' }, { char: '夕', meaning: 'evening' }], story: 'Many (多) evenings (夕) stacked together.' },
  '少': { radicals: [{ char: '小', meaning: 'small' }, { char: '丿', meaning: 'slash' }], story: 'Slicing a small (小) piece even smaller leaves a few/little (少).' },
  '早': { radicals: [{ char: '日', meaning: 'sun' }, { char: '十', meaning: 'cross' }], story: 'The sun (日) rising early (早) above the horizon at 10 (十) in the morning.' },

  '行': { radicals: [{ char: '彳', meaning: 'left step' }, { char: '亍', meaning: 'right step' }], story: 'Taking left and right steps along a crossroads to go (行).' },
  '来': { radicals: [{ char: '木', meaning: 'tree' }, { char: '米', meaning: 'grain' }], story: 'Harvest coming (来) to the wheat fields.' },
  '食': { radicals: [{ char: '人', meaning: 'person' }, { char: '良', meaning: 'good' }], story: 'Good (良) food for a person (人) to eat (食).' },
  '見': { radicals: [{ char: '目', meaning: 'eye' }, { char: '儿', meaning: 'legs' }], story: 'An eye (目) on legs (儿) walking around to look and see (見).' },
  '入': { radicals: [{ char: '入', meaning: 'enter' }], story: 'An arrow pointing inward, entering (入) a doorway.' },
  '出': { radicals: [{ char: '山', meaning: 'mountain' }, { char: '山', meaning: 'mountain' }], story: 'One mountain peak growing out (出) above another.' },
  '立': { radicals: [{ char: '立', meaning: 'stand' }], story: 'A person standing firmly (立) on the ground.' },
  '書': { radicals: [{ char: '聿', meaning: 'brush' }, { char: '日', meaning: 'sun' }], story: 'Holding a writing brush (聿) in the sunlight to write (書) books.' },
  '言': { radicals: [{ char: '言', meaning: 'words/speech' }], story: 'Sound waves emanating from a mouth, representing spoken words (言).' },
  '飲': { radicals: [{ char: '食', meaning: 'food' }, { char: '欠', meaning: 'yawn/open mouth' }], story: 'Opening your mouth (欠) after eating food (食) to drink (飲) water.' },

  '話': { radicals: [{ char: '言', meaning: 'words' }, { char: '舌', meaning: 'tongue' }], story: 'Using your tongue (舌) to speak words (言) in conversation (話).' },
  '読': { radicals: [{ char: '言', meaning: 'words' }, { char: '売', meaning: 'sell' }], story: 'Reading (読) words (言) published in books that are sold (売).' },
  '語': { radicals: [{ char: '言', meaning: 'words' }, { char: '五', meaning: 'five' }, { char: '口', meaning: 'mouth' }], story: 'Words (言) spoken by five (五) mouths (口) in a language (語).' },
  '問': { radicals: [{ char: '門', meaning: 'gate' }, { char: '口', meaning: 'mouth' }], story: 'Calling out a question (問) with your mouth (口) at the gate (門).' },
  '聞': { radicals: [{ char: '門', meaning: 'gate' }, { char: '耳', meaning: 'ear' }], story: 'Listening with your ear (耳) at the gate (門) to hear (聞).' },
  '買': { radicals: [{ char: '罒', meaning: 'net' }, { char: '貝', meaning: 'money' }], story: 'Catching goods in a net (罒) using money (貝) to buy (買) them.' },
  '休': { radicals: [{ char: '人', meaning: 'person' }, { char: '木', meaning: 'tree' }], story: 'A person (人) resting under a shady tree (木).' },
  '時': { radicals: [{ char: '日', meaning: 'sun' }, { char: '寺', meaning: 'temple' }], story: 'Tracking time (時) as the sun (日) moves past the temple (寺).' },
  '週': { radicals: [{ char: '辶', meaning: 'motion' }, { char: '周', meaning: 'circuit/week' }], story: 'A 7-day circuit of motion (辶) forms one week (週).' },
  '道': { radicals: [{ char: '辶', meaning: 'road' }, { char: '首', meaning: 'head/leader' }], story: 'Leading the way (首) along a path or road (道).' },

  '今': { radicals: [{ char: '人', meaning: 'roof' }, { char: 'ラ', meaning: 'present' }], story: 'Gathered under the roof right now in the present (今).' },
  '会': { radicals: [{ char: '人', meaning: 'people' }, { char: '云', meaning: 'say' }], story: 'People (人) gathering to talk and meet (会).' },
  '社': { radicals: [{ char: '礻', meaning: 'altar' }, { char: '土', meaning: 'earth' }], story: 'A shrine altar (礻) to the earth spirit (土) where a company/shrine (社) gathers.' },
  '店': { radicals: [{ char: '广', meaning: 'shelter' }, { char: '占', meaning: 'occupy' }], story: 'A commercial shelter (广) occupied (占) as a shop/store (店).' },
  '駅': { radicals: [{ char: '馬', meaning: 'horse' }, { char: '尺', meaning: 'measure' }], story: 'Post-station where horses (馬) rested after measured distances (駅).' },
  '花': { radicals: [{ char: '艹', meaning: 'plant' }, { char: '化', meaning: 'transform' }], story: 'A plant (艹) transforming (化) into a blooming flower (花).' },
  '国': { radicals: [{ char: '囗', meaning: 'border' }, { char: '玉', meaning: 'jewel' }], story: 'A precious jewel (玉) inside national borders (囗) is a country (国).' },
  '白': { radicals: [{ char: '日', meaning: 'sun' }, { char: '丿', meaning: 'ray' }], story: 'A ray of sun (日) shining pure white (白).' },
  '空': { radicals: [{ char: '穴', meaning: 'cave' }, { char: '工', meaning: 'craft' }], story: 'An opening in a cave (穴) revealing the vast empty sky (空).' },
  '電': { radicals: [{ char: '雨', meaning: 'rain' }, { char: '申', meaning: 'lightning' }], story: 'Rain (雨) accompanied by lightning flashes (申) creates electricity (電).' },
};

export function buildCompleteMnemonicsDict() {
  const dictionary: Record<string, KanjiMnemonicInfo> = { ...mnemonicsMap };

  // For any lesson kanji not explicitly listed above, build a clean structural default
  for (const item of KANJI_LESSONS_DATA) {
    const ch = item.kanji;
    if (!dictionary[ch]) {
      dictionary[ch] = {
        radicals: [{ char: ch, meaning: 'kanji primitive' }],
        story: `Kanji character '${ch}' — practice tracing its component strokes in order to build muscle memory.`
      };
    }
  }

  return dictionary;
}

const allData = buildCompleteMnemonicsDict();

const fileContent = `export interface RadicalItem {
  char: string;
  meaning: string;
}

export interface KanjiMnemonicInfo {
  radicals: RadicalItem[];
  story: string;
}

export const KANJI_MNEMONICS: Record<string, KanjiMnemonicInfo> = ${JSON.stringify(allData, null, 2)};

export function getKanjiMnemonic(char: string): KanjiMnemonicInfo {
  if (KANJI_MNEMONICS[char]) return KANJI_MNEMONICS[char];

  return {
    radicals: [{ char: char, meaning: 'kanji primitive' }],
    story: \`Kanji character '\${char}' — visualize its structure stroke-by-stroke for memory retention.\`
  };
}
`;

const outputPath = path.resolve(process.cwd(), 'src/data/kanjiMnemonics.ts');
fs.writeFileSync(outputPath, fileContent, 'utf-8');
console.log(`Updated ${outputPath} with ${Object.keys(allData).length} radical mnemonics entries!`);
