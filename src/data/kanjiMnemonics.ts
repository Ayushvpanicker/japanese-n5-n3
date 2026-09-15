export interface RadicalItem {
  char: string;
  meaning: string;
}

export interface KanjiMnemonicInfo {
  radicals: RadicalItem[];
  story: string;
}

export const KANJI_MNEMONICS: Record<string, KanjiMnemonicInfo> = {
  "山": {
    "radicals": [
      {
        "char": "山",
        "meaning": "mountain"
      }
    ],
    "story": "Pictograph of three jagged mountain peaks rising into the sky."
  },
  "川": {
    "radicals": [
      {
        "char": "川",
        "meaning": "river"
      }
    ],
    "story": "Three vertical streams representing water flowing down a riverbed."
  },
  "田": {
    "radicals": [
      {
        "char": "田",
        "meaning": "rice field"
      }
    ],
    "story": "A square field divided into four crop quadrants."
  },
  "日": {
    "radicals": [
      {
        "char": "日",
        "meaning": "sun/day"
      }
    ],
    "story": "A sun disk with a central ray, representing the sun and daytime."
  },
  "月": {
    "radicals": [
      {
        "char": "月",
        "meaning": "moon/month"
      }
    ],
    "story": "A crescent moon floating in the night sky with clouds."
  },
  "火": {
    "radicals": [
      {
        "char": "火",
        "meaning": "fire"
      }
    ],
    "story": "Flames and sparks leaping up from a campfire."
  },
  "水": {
    "radicals": [
      {
        "char": "水",
        "meaning": "water"
      }
    ],
    "story": "Water cascading down a main stream with side splashes."
  },
  "木": {
    "radicals": [
      {
        "char": "木",
        "meaning": "tree"
      }
    ],
    "story": "A main tree trunk with branches reaching up and roots below."
  },
  "金": {
    "radicals": [
      {
        "char": "金",
        "meaning": "gold/metal"
      }
    ],
    "story": "Nuggets of gold buried under a roof deep in the earth."
  },
  "土": {
    "radicals": [
      {
        "char": "土",
        "meaning": "soil/earth"
      }
    ],
    "story": "A mound of rich soil sitting on top of the ground."
  },
  "一": {
    "radicals": [
      {
        "char": "一",
        "meaning": "one"
      }
    ],
    "story": "A single horizontal line representing the number one."
  },
  "二": {
    "radicals": [
      {
        "char": "二",
        "meaning": "two"
      }
    ],
    "story": "Two parallel horizontal lines representing the number two."
  },
  "三": {
    "radicals": [
      {
        "char": "三",
        "meaning": "three"
      }
    ],
    "story": "Three parallel horizontal lines representing the number three."
  },
  "四": {
    "radicals": [
      {
        "char": "囗",
        "meaning": "enclosure"
      },
      {
        "char": "儿",
        "meaning": "legs"
      }
    ],
    "story": "A box enclosure (囗) with two legs (儿) inside, representing four."
  },
  "五": {
    "radicals": [
      {
        "char": "五",
        "meaning": "five"
      }
    ],
    "story": "Interlocking lines representing five fingers woven together."
  },
  "六": {
    "radicals": [
      {
        "char": "亠",
        "meaning": "lid"
      },
      {
        "char": "八",
        "meaning": "eight"
      }
    ],
    "story": "A lid (亠) over two arms, representing six."
  },
  "七": {
    "radicals": [
      {
        "char": "七",
        "meaning": "seven"
      }
    ],
    "story": "An inverted cut mark representing seven."
  },
  "八": {
    "radicals": [
      {
        "char": "八",
        "meaning": "eight"
      }
    ],
    "story": "Two curved lines spreading outward, representing eight."
  },
  "九": {
    "radicals": [
      {
        "char": "九",
        "meaning": "nine"
      }
    ],
    "story": "A bent arm reaching up, one short of ten."
  },
  "十": {
    "radicals": [
      {
        "char": "十",
        "meaning": "ten"
      }
    ],
    "story": "A vertical and horizontal cross representing ten."
  },
  "百": {
    "radicals": [
      {
        "char": "一",
        "meaning": "one"
      },
      {
        "char": "白",
        "meaning": "white"
      }
    ],
    "story": "One (一) white (白) grain repeated one hundred times."
  },
  "千": {
    "radicals": [
      {
        "char": "丿",
        "meaning": "slash"
      },
      {
        "char": "十",
        "meaning": "ten"
      }
    ],
    "story": "A slash (丿) added over ten (十) makes one thousand."
  },
  "万": {
    "radicals": [
      {
        "char": "一",
        "meaning": "one"
      },
      {
        "char": "勹",
        "meaning": "wrap"
      }
    ],
    "story": "Ten thousand items wrapped (勹) into one (一) bundle."
  },
  "年": {
    "radicals": [
      {
        "char": "干",
        "meaning": "shield"
      },
      {
        "char": "人",
        "meaning": "person"
      }
    ],
    "story": "A person (人) holding a shield (干) through a full year of seasons."
  },
  "円": {
    "radicals": [
      {
        "char": "冂",
        "meaning": "border"
      },
      {
        "char": "人",
        "meaning": "person"
      }
    ],
    "story": "A round coin or circle (円) used as currency in Japan."
  },
  "上": {
    "radicals": [
      {
        "char": "一",
        "meaning": "ground line"
      },
      {
        "char": "卜",
        "meaning": "indicator"
      }
    ],
    "story": "A mark placed above (上) the ground line."
  },
  "下": {
    "radicals": [
      {
        "char": "一",
        "meaning": "ground line"
      },
      {
        "char": "卜",
        "meaning": "indicator"
      }
    ],
    "story": "A mark hanging below (下) the ground line."
  },
  "中": {
    "radicals": [
      {
        "char": "口",
        "meaning": "box"
      },
      {
        "char": "丨",
        "meaning": "center line"
      }
    ],
    "story": "A line (丨) passing straight through the middle/center (中) of a box (口)."
  },
  "半": {
    "radicals": [
      {
        "char": "八",
        "meaning": "divide"
      },
      {
        "char": "十",
        "meaning": "ten"
      }
    ],
    "story": "Dividing (八) ten (十) right down the center leaves half (半)."
  },
  "分": {
    "radicals": [
      {
        "char": "八",
        "meaning": "divide"
      },
      {
        "char": "刀",
        "meaning": "knife"
      }
    ],
    "story": "Using a knife (刀) to divide (八) an object into parts or minutes (分)."
  },
  "人": {
    "radicals": [
      {
        "char": "人",
        "meaning": "person"
      }
    ],
    "story": "A side-profile pictograph of a human walking on two legs."
  },
  "子": {
    "radicals": [
      {
        "char": "子",
        "meaning": "child"
      }
    ],
    "story": "A baby/child with arms outstretched wrapped in swaddling clothes."
  },
  "女": {
    "radicals": [
      {
        "char": "女",
        "meaning": "woman"
      }
    ],
    "story": "A graceful woman sitting or kneeling."
  },
  "男": {
    "radicals": [
      {
        "char": "田",
        "meaning": "rice field"
      },
      {
        "char": "力",
        "meaning": "power"
      }
    ],
    "story": "A man (男) using his strength (力) to work in the field (田)."
  },
  "力": {
    "radicals": [
      {
        "char": "力",
        "meaning": "power/arm"
      }
    ],
    "story": "A flexed muscular arm demonstrating physical power (力)."
  },
  "目": {
    "radicals": [
      {
        "char": "目",
        "meaning": "eye"
      }
    ],
    "story": "An eye standing vertically with pupil lines inside."
  },
  "口": {
    "radicals": [
      {
        "char": "口",
        "meaning": "mouth"
      }
    ],
    "story": "An open mouth used for speaking and eating."
  },
  "耳": {
    "radicals": [
      {
        "char": "耳",
        "meaning": "ear"
      }
    ],
    "story": "A pictograph of a human ear with earlobe and canal."
  },
  "手": {
    "radicals": [
      {
        "char": "手",
        "meaning": "hand"
      }
    ],
    "story": "A hand with five fingers outstretched."
  },
  "足": {
    "radicals": [
      {
        "char": "口",
        "meaning": "knee"
      },
      {
        "char": "止",
        "meaning": "foot"
      }
    ],
    "story": "A knee (口) and foot (止) together forming a leg/foot (足)."
  },
  "父": {
    "radicals": [
      {
        "char": "八",
        "meaning": "dividers"
      },
      {
        "char": "乂",
        "meaning": "crossed sticks"
      }
    ],
    "story": "A father holding crossed sticks or tools to guide his family."
  },
  "母": {
    "radicals": [
      {
        "char": "母",
        "meaning": "mother"
      }
    ],
    "story": "A mother with two dots representing breasts nurturing her child."
  },
  "先": {
    "radicals": [
      {
        "char": "牛",
        "meaning": "cow"
      },
      {
        "char": "儿",
        "meaning": "legs"
      }
    ],
    "story": "Walking ahead (先) like a lead cow leading the herd."
  },
  "生": {
    "radicals": [
      {
        "char": "生",
        "meaning": "sprout"
      }
    ],
    "story": "A fresh green plant sprouting up out of the fertile soil."
  },
  "学": {
    "radicals": [
      {
        "char": "⺌",
        "meaning": "sparks"
      },
      {
        "char": "冖",
        "meaning": "roof"
      },
      {
        "char": "子",
        "meaning": "child"
      }
    ],
    "story": "A child (子) under the roof (冖) receiving sparks (⺌) of knowledge (学)."
  },
  "校": {
    "radicals": [
      {
        "char": "木",
        "meaning": "tree"
      },
      {
        "char": "交",
        "meaning": "intersect"
      }
    ],
    "story": "A wooden (木) building where students meet and interact (交) is a school (校)."
  },
  "友": {
    "radicals": [
      {
        "char": "ナ",
        "meaning": "hand"
      },
      {
        "char": "又",
        "meaning": "right hand"
      }
    ],
    "story": "Two friends joining hands (又) together in companionship."
  },
  "本": {
    "radicals": [
      {
        "char": "木",
        "meaning": "tree"
      },
      {
        "char": "一",
        "meaning": "root mark"
      }
    ],
    "story": "A line marking the root of a tree (木), representing origin or book (本)."
  },
  "毎": {
    "radicals": [
      {
        "char": "人",
        "meaning": "person"
      },
      {
        "char": "母",
        "meaning": "mother"
      }
    ],
    "story": "Every (毎) mother (母) caring for her family day after day."
  },
  "何": {
    "radicals": [
      {
        "char": "イ",
        "meaning": "person"
      },
      {
        "char": "可",
        "meaning": "can"
      }
    ],
    "story": "A person (イ) carrying a load asking \"What (何) can (可) I do?\""
  },
  "前": {
    "radicals": [
      {
        "char": "月",
        "meaning": "body"
      },
      {
        "char": "刂",
        "meaning": "knife"
      }
    ],
    "story": "Stepping forward (前) with a knife (刂) in front of you."
  },
  "後": {
    "radicals": [
      {
        "char": "彳",
        "meaning": "step"
      },
      {
        "char": "幺",
        "meaning": "tiny"
      },
      {
        "char": "夂",
        "meaning": "follow"
      }
    ],
    "story": "Taking tiny steps behind someone, following after them (後)."
  },
  "外": {
    "radicals": [
      {
        "char": "夕",
        "meaning": "evening"
      },
      {
        "char": "卜",
        "meaning": "divination"
      }
    ],
    "story": "Doing fortune-telling outside (外) in the evening (夕)."
  },
  "左": {
    "radicals": [
      {
        "char": "ナ",
        "meaning": "left hand"
      },
      {
        "char": "工",
        "meaning": "work tool"
      }
    ],
    "story": "Holding a work tool (工) with your left hand (左)."
  },
  "右": {
    "radicals": [
      {
        "char": "ナ",
        "meaning": "right hand"
      },
      {
        "char": "口",
        "meaning": "mouth"
      }
    ],
    "story": "Bringing food to your mouth (口) with your right hand (右)."
  },
  "東": {
    "radicals": [
      {
        "char": "木",
        "meaning": "tree"
      },
      {
        "char": "日",
        "meaning": "sun"
      }
    ],
    "story": "The sun (日) rising behind a tree (木) in the East (東)."
  },
  "西": {
    "radicals": [
      {
        "char": "西",
        "meaning": "bird nest"
      }
    ],
    "story": "A bird returning to its nest (西) at sunset in the West."
  },
  "南": {
    "radicals": [
      {
        "char": "十",
        "meaning": "cross"
      },
      {
        "char": "冂",
        "meaning": "border"
      },
      {
        "char": "¥",
        "meaning": "vegetation"
      }
    ],
    "story": "Warm sunshine in the South (南) feeding lush vegetation."
  },
  "北": {
    "radicals": [
      {
        "char": "北",
        "meaning": "back to back"
      }
    ],
    "story": "Two people sitting back-to-back facing away from the cold North wind."
  },
  "名": {
    "radicals": [
      {
        "char": "夕",
        "meaning": "evening"
      },
      {
        "char": "口",
        "meaning": "mouth"
      }
    ],
    "story": "In the dark evening (夕), calling out your name (名) with your mouth (口)."
  },
  "牛": {
    "radicals": [
      {
        "char": "牛",
        "meaning": "cow/ox"
      }
    ],
    "story": "A pictograph of a cow with horns at the top."
  },
  "馬": {
    "radicals": [
      {
        "char": "馬",
        "meaning": "horse"
      }
    ],
    "story": "A horse with a flowing mane, body, and four legs running."
  },
  "魚": {
    "radicals": [
      {
        "char": "ク",
        "meaning": "head"
      },
      {
        "char": "田",
        "meaning": "body"
      },
      {
        "char": "灬",
        "meaning": "tail/fins"
      }
    ],
    "story": "A fish with a head (ク), scaled body (田), and tail fins (灬)."
  },
  "貝": {
    "radicals": [
      {
        "char": "貝",
        "meaning": "shellfish"
      }
    ],
    "story": "A cowrie shell used as ancient money/currency."
  },
  "雨": {
    "radicals": [
      {
        "char": "一",
        "meaning": "sky"
      },
      {
        "char": "冂",
        "meaning": "cloud"
      },
      {
        "char": "丨",
        "meaning": "stream"
      },
      {
        "char": "灬",
        "meaning": "drops"
      }
    ],
    "story": "Raindrops (灬) falling down from a cloud (冂) in the sky."
  },
  "天": {
    "radicals": [
      {
        "char": "一",
        "meaning": "top sky"
      },
      {
        "char": "大",
        "meaning": "person"
      }
    ],
    "story": "The vast heavens/sky (天) above a great person (大)."
  },
  "気": {
    "radicals": [
      {
        "char": "气",
        "meaning": "air/steam"
      },
      {
        "char": "〆",
        "meaning": "rice grain"
      }
    ],
    "story": "Steam (气) rising from hot cooking rice, representing spirit/energy (気)."
  },
  "車": {
    "radicals": [
      {
        "char": "車",
        "meaning": "cart/car"
      }
    ],
    "story": "Top-down view of a wheeled cart (車) with axle and wheels."
  },
  "門": {
    "radicals": [
      {
        "char": "門",
        "meaning": "gate"
      }
    ],
    "story": "Two swinging doors of a traditional double gate (門)."
  },
  "午": {
    "radicals": [
      {
        "char": "午",
        "meaning": "pestle/noon"
      }
    ],
    "story": "A pestle standing upright when the sun is at high noon (午)."
  },
  "大": {
    "radicals": [
      {
        "char": "大",
        "meaning": "big person"
      }
    ],
    "story": "A person standing with arms and legs spread wide, looking big (大)."
  },
  "小": {
    "radicals": [
      {
        "char": "小",
        "meaning": "small"
      }
    ],
    "story": "A central object split into small (小) side fragments."
  },
  "高": {
    "radicals": [
      {
        "char": "高",
        "meaning": "tall tower"
      }
    ],
    "story": "A tall pavilion/tower (高) with a high roof and windows."
  },
  "安": {
    "radicals": [
      {
        "char": "宀",
        "meaning": "roof"
      },
      {
        "char": "女",
        "meaning": "woman"
      }
    ],
    "story": "A woman (女) safe and peaceful under her home roof (宀)."
  },
  "新": {
    "radicals": [
      {
        "char": "立",
        "meaning": "stand"
      },
      {
        "char": "木",
        "meaning": "tree"
      },
      {
        "char": "斤",
        "meaning": "axe"
      }
    ],
    "story": "Cutting a standing tree (木) with an axe (斤) to create new (新) timber."
  },
  "古": {
    "radicals": [
      {
        "char": "十",
        "meaning": "ten generations"
      },
      {
        "char": "口",
        "meaning": "mouth"
      }
    ],
    "story": "A story passed down orally through ten (十) mouths (口) is old (古)."
  },
  "長": {
    "radicals": [
      {
        "char": "長",
        "meaning": "long hair"
      }
    ],
    "story": "An elder with long (長) flowing hair and a walking staff."
  },
  "多": {
    "radicals": [
      {
        "char": "夕",
        "meaning": "evening"
      },
      {
        "char": "夕",
        "meaning": "evening"
      }
    ],
    "story": "Many (多) evenings (夕) stacked together."
  },
  "少": {
    "radicals": [
      {
        "char": "小",
        "meaning": "small"
      },
      {
        "char": "丿",
        "meaning": "slash"
      }
    ],
    "story": "Slicing a small (小) piece even smaller leaves a few/little (少)."
  },
  "早": {
    "radicals": [
      {
        "char": "日",
        "meaning": "sun"
      },
      {
        "char": "十",
        "meaning": "cross"
      }
    ],
    "story": "The sun (日) rising early (早) above the horizon at 10 (十) in the morning."
  },
  "行": {
    "radicals": [
      {
        "char": "彳",
        "meaning": "left step"
      },
      {
        "char": "亍",
        "meaning": "right step"
      }
    ],
    "story": "Taking left and right steps along a crossroads to go (行)."
  },
  "来": {
    "radicals": [
      {
        "char": "木",
        "meaning": "tree"
      },
      {
        "char": "米",
        "meaning": "grain"
      }
    ],
    "story": "Harvest coming (来) to the wheat fields."
  },
  "食": {
    "radicals": [
      {
        "char": "人",
        "meaning": "person"
      },
      {
        "char": "良",
        "meaning": "good"
      }
    ],
    "story": "Good (良) food for a person (人) to eat (食)."
  },
  "見": {
    "radicals": [
      {
        "char": "目",
        "meaning": "eye"
      },
      {
        "char": "儿",
        "meaning": "legs"
      }
    ],
    "story": "An eye (目) on legs (儿) walking around to look and see (見)."
  },
  "入": {
    "radicals": [
      {
        "char": "入",
        "meaning": "enter"
      }
    ],
    "story": "An arrow pointing inward, entering (入) a doorway."
  },
  "出": {
    "radicals": [
      {
        "char": "山",
        "meaning": "mountain"
      },
      {
        "char": "山",
        "meaning": "mountain"
      }
    ],
    "story": "One mountain peak growing out (出) above another."
  },
  "立": {
    "radicals": [
      {
        "char": "立",
        "meaning": "stand"
      }
    ],
    "story": "A person standing firmly (立) on the ground."
  },
  "書": {
    "radicals": [
      {
        "char": "聿",
        "meaning": "brush"
      },
      {
        "char": "日",
        "meaning": "sun"
      }
    ],
    "story": "Holding a writing brush (聿) in the sunlight to write (書) books."
  },
  "言": {
    "radicals": [
      {
        "char": "言",
        "meaning": "words/speech"
      }
    ],
    "story": "Sound waves emanating from a mouth, representing spoken words (言)."
  },
  "飲": {
    "radicals": [
      {
        "char": "食",
        "meaning": "food"
      },
      {
        "char": "欠",
        "meaning": "yawn/open mouth"
      }
    ],
    "story": "Opening your mouth (欠) after eating food (食) to drink (飲) water."
  },
  "話": {
    "radicals": [
      {
        "char": "言",
        "meaning": "words"
      },
      {
        "char": "舌",
        "meaning": "tongue"
      }
    ],
    "story": "Using your tongue (舌) to speak words (言) in conversation (話)."
  },
  "読": {
    "radicals": [
      {
        "char": "言",
        "meaning": "words"
      },
      {
        "char": "売",
        "meaning": "sell"
      }
    ],
    "story": "Reading (読) words (言) published in books that are sold (売)."
  },
  "語": {
    "radicals": [
      {
        "char": "言",
        "meaning": "words"
      },
      {
        "char": "五",
        "meaning": "five"
      },
      {
        "char": "口",
        "meaning": "mouth"
      }
    ],
    "story": "Words (言) spoken by five (五) mouths (口) in a language (語)."
  },
  "問": {
    "radicals": [
      {
        "char": "門",
        "meaning": "gate"
      },
      {
        "char": "口",
        "meaning": "mouth"
      }
    ],
    "story": "Calling out a question (問) with your mouth (口) at the gate (門)."
  },
  "聞": {
    "radicals": [
      {
        "char": "門",
        "meaning": "gate"
      },
      {
        "char": "耳",
        "meaning": "ear"
      }
    ],
    "story": "Listening with your ear (耳) at the gate (門) to hear (聞)."
  },
  "買": {
    "radicals": [
      {
        "char": "罒",
        "meaning": "net"
      },
      {
        "char": "貝",
        "meaning": "money"
      }
    ],
    "story": "Catching goods in a net (罒) using money (貝) to buy (買) them."
  },
  "休": {
    "radicals": [
      {
        "char": "人",
        "meaning": "person"
      },
      {
        "char": "木",
        "meaning": "tree"
      }
    ],
    "story": "A person (人) resting under a shady tree (木)."
  },
  "時": {
    "radicals": [
      {
        "char": "日",
        "meaning": "sun"
      },
      {
        "char": "寺",
        "meaning": "temple"
      }
    ],
    "story": "Tracking time (時) as the sun (日) moves past the temple (寺)."
  },
  "週": {
    "radicals": [
      {
        "char": "辶",
        "meaning": "motion"
      },
      {
        "char": "周",
        "meaning": "circuit/week"
      }
    ],
    "story": "A 7-day circuit of motion (辶) forms one week (週)."
  },
  "道": {
    "radicals": [
      {
        "char": "辶",
        "meaning": "road"
      },
      {
        "char": "首",
        "meaning": "head/leader"
      }
    ],
    "story": "Leading the way (首) along a path or road (道)."
  },
  "今": {
    "radicals": [
      {
        "char": "人",
        "meaning": "roof"
      },
      {
        "char": "ラ",
        "meaning": "present"
      }
    ],
    "story": "Gathered under the roof right now in the present (今)."
  },
  "会": {
    "radicals": [
      {
        "char": "人",
        "meaning": "people"
      },
      {
        "char": "云",
        "meaning": "say"
      }
    ],
    "story": "People (人) gathering to talk and meet (会)."
  },
  "社": {
    "radicals": [
      {
        "char": "礻",
        "meaning": "altar"
      },
      {
        "char": "土",
        "meaning": "earth"
      }
    ],
    "story": "A shrine altar (礻) to the earth spirit (土) where a company/shrine (社) gathers."
  },
  "店": {
    "radicals": [
      {
        "char": "广",
        "meaning": "shelter"
      },
      {
        "char": "占",
        "meaning": "occupy"
      }
    ],
    "story": "A commercial shelter (广) occupied (占) as a shop/store (店)."
  },
  "駅": {
    "radicals": [
      {
        "char": "馬",
        "meaning": "horse"
      },
      {
        "char": "尺",
        "meaning": "measure"
      }
    ],
    "story": "Post-station where horses (馬) rested after measured distances (駅)."
  },
  "花": {
    "radicals": [
      {
        "char": "艹",
        "meaning": "plant"
      },
      {
        "char": "化",
        "meaning": "transform"
      }
    ],
    "story": "A plant (艹) transforming (化) into a blooming flower (花)."
  },
  "国": {
    "radicals": [
      {
        "char": "囗",
        "meaning": "border"
      },
      {
        "char": "玉",
        "meaning": "jewel"
      }
    ],
    "story": "A precious jewel (玉) inside national borders (囗) is a country (国)."
  },
  "白": {
    "radicals": [
      {
        "char": "日",
        "meaning": "sun"
      },
      {
        "char": "丿",
        "meaning": "ray"
      }
    ],
    "story": "A ray of sun (日) shining pure white (白)."
  },
  "空": {
    "radicals": [
      {
        "char": "穴",
        "meaning": "cave"
      },
      {
        "char": "工",
        "meaning": "craft"
      }
    ],
    "story": "An opening in a cave (穴) revealing the vast empty sky (空)."
  },
  "電": {
    "radicals": [
      {
        "char": "雨",
        "meaning": "rain"
      },
      {
        "char": "申",
        "meaning": "lightning"
      }
    ],
    "story": "Rain (雨) accompanied by lightning flashes (申) creates electricity (電)."
  },
  "住": {
    "radicals": [
      {
        "char": "住",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '住' — practice tracing its component strokes in order to build muscle memory."
  },
  "所": {
    "radicals": [
      {
        "char": "所",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '所' — practice tracing its component strokes in order to build muscle memory."
  },
  "京": {
    "radicals": [
      {
        "char": "京",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '京' — practice tracing its component strokes in order to build muscle memory."
  },
  "都": {
    "radicals": [
      {
        "char": "都",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '都' — practice tracing its component strokes in order to build muscle memory."
  },
  "府": {
    "radicals": [
      {
        "char": "府",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '府' — practice tracing its component strokes in order to build muscle memory."
  },
  "県": {
    "radicals": [
      {
        "char": "県",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '県' — practice tracing its component strokes in order to build muscle memory."
  },
  "市": {
    "radicals": [
      {
        "char": "市",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '市' — practice tracing its component strokes in order to build muscle memory."
  },
  "区": {
    "radicals": [
      {
        "char": "区",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '区' — practice tracing its component strokes in order to build muscle memory."
  },
  "町": {
    "radicals": [
      {
        "char": "町",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '町' — practice tracing its component strokes in order to build muscle memory."
  },
  "村": {
    "radicals": [
      {
        "char": "村",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '村' — practice tracing its component strokes in order to build muscle memory."
  },
  "明": {
    "radicals": [
      {
        "char": "明",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '明' — practice tracing its component strokes in order to build muscle memory."
  },
  "暗": {
    "radicals": [
      {
        "char": "暗",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '暗' — practice tracing its component strokes in order to build muscle memory."
  },
  "遠": {
    "radicals": [
      {
        "char": "遠",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '遠' — practice tracing its component strokes in order to build muscle memory."
  },
  "近": {
    "radicals": [
      {
        "char": "近",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '近' — practice tracing its component strokes in order to build muscle memory."
  },
  "強": {
    "radicals": [
      {
        "char": "強",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '強' — practice tracing its component strokes in order to build muscle memory."
  },
  "弱": {
    "radicals": [
      {
        "char": "弱",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '弱' — practice tracing its component strokes in order to build muscle memory."
  },
  "重": {
    "radicals": [
      {
        "char": "重",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '重' — practice tracing its component strokes in order to build muscle memory."
  },
  "軽": {
    "radicals": [
      {
        "char": "軽",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '軽' — practice tracing its component strokes in order to build muscle memory."
  },
  "太": {
    "radicals": [
      {
        "char": "太",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '太' — practice tracing its component strokes in order to build muscle memory."
  },
  "細": {
    "radicals": [
      {
        "char": "細",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '細' — practice tracing its component strokes in order to build muscle memory."
  },
  "特": {
    "radicals": [
      {
        "char": "特",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '特' — practice tracing its component strokes in order to build muscle memory."
  },
  "別": {
    "radicals": [
      {
        "char": "別",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '別' — practice tracing its component strokes in order to build muscle memory."
  },
  "有": {
    "radicals": [
      {
        "char": "有",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '有' — practice tracing its component strokes in order to build muscle memory."
  },
  "便": {
    "radicals": [
      {
        "char": "便",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '便' — practice tracing its component strokes in order to build muscle memory."
  },
  "利": {
    "radicals": [
      {
        "char": "利",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '利' — practice tracing its component strokes in order to build muscle memory."
  },
  "不": {
    "radicals": [
      {
        "char": "不",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '不' — practice tracing its component strokes in order to build muscle memory."
  },
  "切": {
    "radicals": [
      {
        "char": "切",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '切' — practice tracing its component strokes in order to build muscle memory."
  },
  "元": {
    "radicals": [
      {
        "char": "元",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '元' — practice tracing its component strokes in order to build muscle memory."
  },
  "好": {
    "radicals": [
      {
        "char": "好",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '好' — practice tracing its component strokes in order to build muscle memory."
  },
  "急": {
    "radicals": [
      {
        "char": "急",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '急' — practice tracing its component strokes in order to build muscle memory."
  },
  "低": {
    "radicals": [
      {
        "char": "低",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '低' — practice tracing its component strokes in order to build muscle memory."
  },
  "広": {
    "radicals": [
      {
        "char": "広",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '広' — practice tracing its component strokes in order to build muscle memory."
  },
  "短": {
    "radicals": [
      {
        "char": "短",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '短' — practice tracing its component strokes in order to build muscle memory."
  },
  "良": {
    "radicals": [
      {
        "char": "良",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '良' — practice tracing its component strokes in order to build muscle memory."
  },
  "悪": {
    "radicals": [
      {
        "char": "悪",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '悪' — practice tracing its component strokes in order to build muscle memory."
  },
  "正": {
    "radicals": [
      {
        "char": "正",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '正' — practice tracing its component strokes in order to build muscle memory."
  },
  "変": {
    "radicals": [
      {
        "char": "変",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '変' — practice tracing its component strokes in order to build muscle memory."
  },
  "赤": {
    "radicals": [
      {
        "char": "赤",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '赤' — practice tracing its component strokes in order to build muscle memory."
  },
  "青": {
    "radicals": [
      {
        "char": "青",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '青' — practice tracing its component strokes in order to build muscle memory."
  },
  "黒": {
    "radicals": [
      {
        "char": "黒",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '黒' — practice tracing its component strokes in order to build muscle memory."
  },
  "映": {
    "radicals": [
      {
        "char": "映",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '映' — practice tracing its component strokes in order to build muscle memory."
  },
  "画": {
    "radicals": [
      {
        "char": "画",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '画' — practice tracing its component strokes in order to build muscle memory."
  },
  "音": {
    "radicals": [
      {
        "char": "音",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '音' — practice tracing its component strokes in order to build muscle memory."
  },
  "楽": {
    "radicals": [
      {
        "char": "楽",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '楽' — practice tracing its component strokes in order to build muscle memory."
  },
  "歌": {
    "radicals": [
      {
        "char": "歌",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '歌' — practice tracing its component strokes in order to build muscle memory."
  },
  "写": {
    "radicals": [
      {
        "char": "写",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '写' — practice tracing its component strokes in order to build muscle memory."
  },
  "真": {
    "radicals": [
      {
        "char": "真",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '真' — practice tracing its component strokes in order to build muscle memory."
  },
  "旅": {
    "radicals": [
      {
        "char": "旅",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '旅' — practice tracing its component strokes in order to build muscle memory."
  },
  "世": {
    "radicals": [
      {
        "char": "世",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '世' — practice tracing its component strokes in order to build muscle memory."
  },
  "界": {
    "radicals": [
      {
        "char": "界",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '界' — practice tracing its component strokes in order to build muscle memory."
  },
  "仕": {
    "radicals": [
      {
        "char": "仕",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '仕' — practice tracing its component strokes in order to build muscle memory."
  },
  "事": {
    "radicals": [
      {
        "char": "事",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '事' — practice tracing its component strokes in order to build muscle memory."
  },
  "銀": {
    "radicals": [
      {
        "char": "銀",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '銀' — practice tracing its component strokes in order to build muscle memory."
  },
  "員": {
    "radicals": [
      {
        "char": "員",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '員' — practice tracing its component strokes in order to build muscle memory."
  },
  "医": {
    "radicals": [
      {
        "char": "医",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '医' — practice tracing its component strokes in order to build muscle memory."
  },
  "者": {
    "radicals": [
      {
        "char": "者",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '者' — practice tracing its component strokes in order to build muscle memory."
  },
  "働": {
    "radicals": [
      {
        "char": "働",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '働' — practice tracing its component strokes in order to build muscle memory."
  },
  "屋": {
    "radicals": [
      {
        "char": "屋",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '屋' — practice tracing its component strokes in order to build muscle memory."
  },
  "産": {
    "radicals": [
      {
        "char": "産",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '産' — practice tracing its component strokes in order to build muscle memory."
  },
  "業": {
    "radicals": [
      {
        "char": "業",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '業' — practice tracing its component strokes in order to build muscle memory."
  },
  "林": {
    "radicals": [
      {
        "char": "林",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '林' — practice tracing its component strokes in order to build muscle memory."
  },
  "森": {
    "radicals": [
      {
        "char": "森",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '森' — practice tracing its component strokes in order to build muscle memory."
  },
  "地": {
    "radicals": [
      {
        "char": "地",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '地' — practice tracing its component strokes in order to build muscle memory."
  },
  "池": {
    "radicals": [
      {
        "char": "池",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '池' — practice tracing its component strokes in order to build muscle memory."
  },
  "海": {
    "radicals": [
      {
        "char": "海",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '海' — practice tracing its component strokes in order to build muscle memory."
  },
  "洋": {
    "radicals": [
      {
        "char": "洋",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '洋' — practice tracing its component strokes in order to build muscle memory."
  },
  "雪": {
    "radicals": [
      {
        "char": "雪",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '雪' — practice tracing its component strokes in order to build muscle memory."
  },
  "光": {
    "radicals": [
      {
        "char": "光",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '光' — practice tracing its component strokes in order to build muscle memory."
  },
  "台": {
    "radicals": [
      {
        "char": "台",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '台' — practice tracing its component strokes in order to build muscle memory."
  },
  "風": {
    "radicals": [
      {
        "char": "風",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '風' — practice tracing its component strokes in order to build muscle memory."
  },
  "季": {
    "radicals": [
      {
        "char": "季",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '季' — practice tracing its component strokes in order to build muscle memory."
  },
  "節": {
    "radicals": [
      {
        "char": "節",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '節' — practice tracing its component strokes in order to build muscle memory."
  },
  "春": {
    "radicals": [
      {
        "char": "春",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '春' — practice tracing its component strokes in order to build muscle memory."
  },
  "夏": {
    "radicals": [
      {
        "char": "夏",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '夏' — practice tracing its component strokes in order to build muscle memory."
  },
  "秋": {
    "radicals": [
      {
        "char": "秋",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '秋' — practice tracing its component strokes in order to build muscle memory."
  },
  "冬": {
    "radicals": [
      {
        "char": "冬",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '冬' — practice tracing its component strokes in order to build muscle memory."
  },
  "暑": {
    "radicals": [
      {
        "char": "暑",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '暑' — practice tracing its component strokes in order to build muscle memory."
  },
  "寒": {
    "radicals": [
      {
        "char": "寒",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '寒' — practice tracing its component strokes in order to build muscle memory."
  },
  "暖": {
    "radicals": [
      {
        "char": "暖",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '暖' — practice tracing its component strokes in order to build muscle memory."
  },
  "涼": {
    "radicals": [
      {
        "char": "涼",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '涼' — practice tracing its component strokes in order to build muscle memory."
  },
  "体": {
    "radicals": [
      {
        "char": "体",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '体' — practice tracing its component strokes in order to build muscle memory."
  },
  "頭": {
    "radicals": [
      {
        "char": "頭",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '頭' — practice tracing its component strokes in order to build muscle memory."
  },
  "顔": {
    "radicals": [
      {
        "char": "顔",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '顔' — practice tracing its component strokes in order to build muscle memory."
  },
  "首": {
    "radicals": [
      {
        "char": "首",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '首' — practice tracing its component strokes in order to build muscle memory."
  },
  "心": {
    "radicals": [
      {
        "char": "心",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '心' — practice tracing its component strokes in order to build muscle memory."
  },
  "声": {
    "radicals": [
      {
        "char": "声",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '声' — practice tracing its component strokes in order to build muscle memory."
  },
  "病": {
    "radicals": [
      {
        "char": "病",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '病' — practice tracing its component strokes in order to build muscle memory."
  },
  "薬": {
    "radicals": [
      {
        "char": "薬",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '薬' — practice tracing its component strokes in order to build muscle memory."
  },
  "科": {
    "radicals": [
      {
        "char": "科",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '科' — practice tracing its component strokes in order to build muscle memory."
  },
  "内": {
    "radicals": [
      {
        "char": "内",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '内' — practice tracing its component strokes in order to build muscle memory."
  },
  "朝": {
    "radicals": [
      {
        "char": "朝",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '朝' — practice tracing its component strokes in order to build muscle memory."
  },
  "昼": {
    "radicals": [
      {
        "char": "昼",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '昼' — practice tracing its component strokes in order to build muscle memory."
  },
  "夜": {
    "radicals": [
      {
        "char": "夜",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '夜' — practice tracing its component strokes in order to build muscle memory."
  },
  "夕": {
    "radicals": [
      {
        "char": "夕",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '夕' — practice tracing its component strokes in order to build muscle memory."
  },
  "方": {
    "radicals": [
      {
        "char": "方",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '方' — practice tracing its component strokes in order to build muscle memory."
  },
  "晩": {
    "radicals": [
      {
        "char": "晩",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '晩' — practice tracing its component strokes in order to build muscle memory."
  },
  "計": {
    "radicals": [
      {
        "char": "計",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '計' — practice tracing its component strokes in order to build muscle memory."
  },
  "曜": {
    "radicals": [
      {
        "char": "曜",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '曜' — practice tracing its component strokes in order to build muscle memory."
  },
  "以": {
    "radicals": [
      {
        "char": "以",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '以' — practice tracing its component strokes in order to build muscle memory."
  },
  "度": {
    "radicals": [
      {
        "char": "度",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '度' — practice tracing its component strokes in order to build muscle memory."
  },
  "止": {
    "radicals": [
      {
        "char": "止",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '止' — practice tracing its component strokes in order to build muscle memory."
  },
  "歩": {
    "radicals": [
      {
        "char": "歩",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '歩' — practice tracing its component strokes in order to build muscle memory."
  },
  "走": {
    "radicals": [
      {
        "char": "走",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '走' — practice tracing its component strokes in order to build muscle memory."
  },
  "起": {
    "radicals": [
      {
        "char": "起",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '起' — practice tracing its component strokes in order to build muscle memory."
  },
  "持": {
    "radicals": [
      {
        "char": "持",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '持' — practice tracing its component strokes in order to build muscle memory."
  },
  "待": {
    "radicals": [
      {
        "char": "待",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '待' — practice tracing its component strokes in order to build muscle memory."
  },
  "借": {
    "radicals": [
      {
        "char": "借",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '借' — practice tracing its component strokes in order to build muscle memory."
  },
  "貸": {
    "radicals": [
      {
        "char": "貸",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '貸' — practice tracing its component strokes in order to build muscle memory."
  },
  "始": {
    "radicals": [
      {
        "char": "始",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '始' — practice tracing its component strokes in order to build muscle memory."
  },
  "終": {
    "radicals": [
      {
        "char": "終",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '終' — practice tracing its component strokes in order to build muscle memory."
  },
  "家": {
    "radicals": [
      {
        "char": "家",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '家' — practice tracing its component strokes in order to build muscle memory."
  },
  "族": {
    "radicals": [
      {
        "char": "族",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '族' — practice tracing its component strokes in order to build muscle memory."
  },
  "私": {
    "radicals": [
      {
        "char": "私",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '私' — practice tracing its component strokes in order to build muscle memory."
  },
  "自": {
    "radicals": [
      {
        "char": "自",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '自' — practice tracing its component strokes in order to build muscle memory."
  },
  "親": {
    "radicals": [
      {
        "char": "親",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '親' — practice tracing its component strokes in order to build muscle memory."
  },
  "両": {
    "radicals": [
      {
        "char": "両",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '両' — practice tracing its component strokes in order to build muscle memory."
  },
  "兄": {
    "radicals": [
      {
        "char": "兄",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '兄' — practice tracing its component strokes in order to build muscle memory."
  },
  "弟": {
    "radicals": [
      {
        "char": "弟",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '弟' — practice tracing its component strokes in order to build muscle memory."
  },
  "姉": {
    "radicals": [
      {
        "char": "姉",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '姉' — practice tracing its component strokes in order to build muscle memory."
  },
  "妹": {
    "radicals": [
      {
        "char": "妹",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '妹' — practice tracing its component strokes in order to build muscle memory."
  },
  "活": {
    "radicals": [
      {
        "char": "活",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '活' — practice tracing its component strokes in order to build muscle memory."
  },
  "回": {
    "radicals": [
      {
        "char": "回",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '回' — practice tracing its component strokes in order to build muscle memory."
  },
  "主": {
    "radicals": [
      {
        "char": "主",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '主' — practice tracing its component strokes in order to build muscle memory."
  },
  "色": {
    "radicals": [
      {
        "char": "色",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '色' — practice tracing its component strokes in order to build muscle memory."
  },
  "形": {
    "radicals": [
      {
        "char": "形",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '形' — practice tracing its component strokes in order to build muscle memory."
  },
  "品": {
    "radicals": [
      {
        "char": "品",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '品' — practice tracing its component strokes in order to build muscle memory."
  },
  "民": {
    "radicals": [
      {
        "char": "民",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '民' — practice tracing its component strokes in order to build muscle memory."
  },
  "服": {
    "radicals": [
      {
        "char": "服",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '服' — practice tracing its component strokes in order to build muscle memory."
  },
  "犬": {
    "radicals": [
      {
        "char": "犬",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '犬' — practice tracing its component strokes in order to build muscle memory."
  },
  "同": {
    "radicals": [
      {
        "char": "同",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '同' — practice tracing its component strokes in order to build muscle memory."
  },
  "米": {
    "radicals": [
      {
        "char": "米",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '米' — practice tracing its component strokes in order to build muscle memory."
  },
  "料": {
    "radicals": [
      {
        "char": "料",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '料' — practice tracing its component strokes in order to build muscle memory."
  },
  "理": {
    "radicals": [
      {
        "char": "理",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '理' — practice tracing its component strokes in order to build muscle memory."
  },
  "肉": {
    "radicals": [
      {
        "char": "肉",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '肉' — practice tracing its component strokes in order to build muscle memory."
  },
  "鳥": {
    "radicals": [
      {
        "char": "鳥",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '鳥' — practice tracing its component strokes in order to build muscle memory."
  },
  "野": {
    "radicals": [
      {
        "char": "野",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '野' — practice tracing its component strokes in order to build muscle memory."
  },
  "菜": {
    "radicals": [
      {
        "char": "菜",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '菜' — practice tracing its component strokes in order to build muscle memory."
  },
  "茶": {
    "radicals": [
      {
        "char": "茶",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '茶' — practice tracing its component strokes in order to build muscle memory."
  },
  "飯": {
    "radicals": [
      {
        "char": "飯",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '飯' — practice tracing its component strokes in order to build muscle memory."
  },
  "味": {
    "radicals": [
      {
        "char": "味",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '味' — practice tracing its component strokes in order to build muscle memory."
  },
  "代": {
    "radicals": [
      {
        "char": "代",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '代' — practice tracing its component strokes in order to build muscle memory."
  },
  "使": {
    "radicals": [
      {
        "char": "使",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '使' — practice tracing its component strokes in order to build muscle memory."
  },
  "作": {
    "radicals": [
      {
        "char": "作",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '作' — practice tracing its component strokes in order to build muscle memory."
  },
  "化": {
    "radicals": [
      {
        "char": "化",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '化' — practice tracing its component strokes in order to build muscle memory."
  },
  "信": {
    "radicals": [
      {
        "char": "信",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '信' — practice tracing its component strokes in order to build muscle memory."
  },
  "進": {
    "radicals": [
      {
        "char": "進",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '進' — practice tracing its component strokes in order to build muscle memory."
  },
  "送": {
    "radicals": [
      {
        "char": "送",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '送' — practice tracing its component strokes in order to build muscle memory."
  },
  "返": {
    "radicals": [
      {
        "char": "返",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '返' — practice tracing its component strokes in order to build muscle memory."
  },
  "洗": {
    "radicals": [
      {
        "char": "洗",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '洗' — practice tracing its component strokes in order to build muscle memory."
  },
  "注": {
    "radicals": [
      {
        "char": "注",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '注' — practice tracing its component strokes in order to build muscle memory."
  },
  "場": {
    "radicals": [
      {
        "char": "場",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '場' — practice tracing its component strokes in order to build muscle memory."
  },
  "建": {
    "radicals": [
      {
        "char": "建",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '建' — practice tracing its component strokes in order to build muscle memory."
  },
  "物": {
    "radicals": [
      {
        "char": "物",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '物' — practice tracing its component strokes in order to build muscle memory."
  },
  "院": {
    "radicals": [
      {
        "char": "院",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '院' — practice tracing its component strokes in order to build muscle memory."
  },
  "館": {
    "radicals": [
      {
        "char": "館",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '館' — practice tracing its component strokes in order to build muscle memory."
  },
  "堂": {
    "radicals": [
      {
        "char": "堂",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '堂' — practice tracing its component strokes in order to build muscle memory."
  },
  "室": {
    "radicals": [
      {
        "char": "室",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '室' — practice tracing its component strokes in order to build muscle memory."
  },
  "工": {
    "radicals": [
      {
        "char": "工",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '工' — practice tracing its component strokes in order to build muscle memory."
  },
  "図": {
    "radicals": [
      {
        "char": "図",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '図' — practice tracing its component strokes in order to build muscle memory."
  },
  "号": {
    "radicals": [
      {
        "char": "号",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '号' — practice tracing its component strokes in order to build muscle memory."
  },
  "交": {
    "radicals": [
      {
        "char": "交",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '交' — practice tracing its component strokes in order to build muscle memory."
  },
  "通": {
    "radicals": [
      {
        "char": "通",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '通' — practice tracing its component strokes in order to build muscle memory."
  },
  "動": {
    "radicals": [
      {
        "char": "動",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '動' — practice tracing its component strokes in order to build muscle memory."
  },
  "乗": {
    "radicals": [
      {
        "char": "乗",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '乗' — practice tracing its component strokes in order to build muscle memory."
  },
  "降": {
    "radicals": [
      {
        "char": "降",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '降' — practice tracing its component strokes in order to build muscle memory."
  },
  "運": {
    "radicals": [
      {
        "char": "運",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '運' — practice tracing its component strokes in order to build muscle memory."
  },
  "転": {
    "radicals": [
      {
        "char": "転",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '転' — practice tracing its component strokes in order to build muscle memory."
  },
  "帰": {
    "radicals": [
      {
        "char": "帰",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '帰' — practice tracing its component strokes in order to build muscle memory."
  },
  "発": {
    "radicals": [
      {
        "char": "発",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '発' — practice tracing its component strokes in order to build muscle memory."
  },
  "着": {
    "radicals": [
      {
        "char": "着",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '着' — practice tracing its component strokes in order to build muscle memory."
  },
  "漢": {
    "radicals": [
      {
        "char": "漢",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '漢' — practice tracing its component strokes in order to build muscle memory."
  },
  "字": {
    "radicals": [
      {
        "char": "字",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '字' — practice tracing its component strokes in order to build muscle memory."
  },
  "文": {
    "radicals": [
      {
        "char": "文",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '文' — practice tracing its component strokes in order to build muscle memory."
  },
  "教": {
    "radicals": [
      {
        "char": "教",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '教' — practice tracing its component strokes in order to build muscle memory."
  },
  "勉": {
    "radicals": [
      {
        "char": "勉",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '勉' — practice tracing its component strokes in order to build muscle memory."
  },
  "習": {
    "radicals": [
      {
        "char": "習",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '習' — practice tracing its component strokes in order to build muscle memory."
  },
  "英": {
    "radicals": [
      {
        "char": "英",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '英' — practice tracing its component strokes in order to build muscle memory."
  },
  "考": {
    "radicals": [
      {
        "char": "考",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '考' — practice tracing its component strokes in order to build muscle memory."
  },
  "研": {
    "radicals": [
      {
        "char": "研",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '研' — practice tracing its component strokes in order to build muscle memory."
  },
  "究": {
    "radicals": [
      {
        "char": "究",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '究' — practice tracing its component strokes in order to build muscle memory."
  },
  "題": {
    "radicals": [
      {
        "char": "題",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '題' — practice tracing its component strokes in order to build muscle memory."
  },
  "試": {
    "radicals": [
      {
        "char": "試",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '試' — practice tracing its component strokes in order to build muscle memory."
  },
  "験": {
    "radicals": [
      {
        "char": "験",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '験' — practice tracing its component strokes in order to build muscle memory."
  },
  "質": {
    "radicals": [
      {
        "char": "質",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '質' — practice tracing its component strokes in order to build muscle memory."
  },
  "合": {
    "radicals": [
      {
        "char": "合",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '合' — practice tracing its component strokes in order to build muscle memory."
  },
  "答": {
    "radicals": [
      {
        "char": "答",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '答' — practice tracing its component strokes in order to build muscle memory."
  },
  "用": {
    "radicals": [
      {
        "char": "用",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '用' — practice tracing its component strokes in order to build muscle memory."
  },
  "紙": {
    "radicals": [
      {
        "char": "紙",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '紙' — practice tracing its component strokes in order to build muscle memory."
  },
  "意": {
    "radicals": [
      {
        "char": "意",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '意' — practice tracing its component strokes in order to build muscle memory."
  },
  "引": {
    "radicals": [
      {
        "char": "引",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '引' — practice tracing its component strokes in order to build muscle memory."
  },
  "開": {
    "radicals": [
      {
        "char": "開",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '開' — practice tracing its component strokes in order to build muscle memory."
  },
  "閉": {
    "radicals": [
      {
        "char": "閉",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '閉' — practice tracing its component strokes in order to build muscle memory."
  },
  "去": {
    "radicals": [
      {
        "char": "去",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '去' — practice tracing its component strokes in order to build muscle memory."
  },
  "死": {
    "radicals": [
      {
        "char": "死",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '死' — practice tracing its component strokes in order to build muscle memory."
  },
  "集": {
    "radicals": [
      {
        "char": "集",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '集' — practice tracing its component strokes in order to build muscle memory."
  },
  "知": {
    "radicals": [
      {
        "char": "知",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '知' — practice tracing its component strokes in order to build muscle memory."
  },
  "売": {
    "radicals": [
      {
        "char": "売",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '売' — practice tracing its component strokes in order to build muscle memory."
  },
  "説": {
    "radicals": [
      {
        "char": "説",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '説' — practice tracing its component strokes in order to build muscle memory."
  },
  "思": {
    "radicals": [
      {
        "char": "思",
        "meaning": "kanji primitive"
      }
    ],
    "story": "Kanji character '思' — practice tracing its component strokes in order to build muscle memory."
  }
};

export function getKanjiMnemonic(char: string): KanjiMnemonicInfo {
  if (KANJI_MNEMONICS[char]) return KANJI_MNEMONICS[char];

  return {
    radicals: [{ char: char, meaning: 'kanji primitive' }],
    story: `Kanji character '${char}' — visualize its structure stroke-by-stroke for memory retention.`
  };
}
