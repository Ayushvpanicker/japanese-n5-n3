export interface ExampleWord {
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

export const KANJI_DICTIONARY: Record<string, KanjiInfo> = {
  "私": {
    "char": "私",
    "meaning": "private, I, me",
    "onyomi": "シ",
    "kunyomi": "わたくし, わたし",
    "strokes": 7,
    "jlpt": "N5",
    "examples": [
      {
        "word": "私",
        "reading": "わたし",
        "meaning": "I, me"
      },
      {
        "word": "私 (",
        "reading": "La わたくし",
        "meaning": "humble equivalent of わたし)"
      }
    ]
  },
  "人": {
    "char": "人",
    "meaning": "person",
    "onyomi": "ジン, ニン",
    "kunyomi": "ひと, -り, -と",
    "strokes": 2,
    "jlpt": "N4",
    "examples": [
      {
        "word": "あの人",
        "reading": "あのひと",
        "meaning": "That person"
      },
      {
        "word": "人",
        "reading": "〜じん",
        "meaning": "Nationality suffix"
      },
      {
        "word": "一人で",
        "reading": "ひとりで",
        "meaning": "alone, by oneself"
      }
    ]
  },
  "先": {
    "char": "先",
    "meaning": "before, ahead, previous",
    "onyomi": "セン",
    "kunyomi": "さき, ま.ず",
    "strokes": 6,
    "jlpt": "N4",
    "examples": [
      {
        "word": "先生",
        "reading": "せんせい",
        "meaning": "Teacher, instructor"
      },
      {
        "word": "お先に どうぞ。 After",
        "reading": "おさきに どうぞ。",
        "meaning": "you./Go ahead, please."
      },
      {
        "word": "お先に Excuse",
        "reading": "おさきに",
        "meaning": "me (for leaving before you)."
      }
    ]
  },
  "生": {
    "char": "生",
    "meaning": "life, genuine, birth",
    "onyomi": "セイ, ショウ",
    "kunyomi": "い.きる, い.かす, い.ける, う.まれる, うま.れる, う.まれ, うまれ, う.む, お.う, は.える, は.やす, き, なま, なま-, な.る, な.す, む.す, -う",
    "strokes": 5,
    "jlpt": "N4",
    "examples": [
      {
        "word": "先生",
        "reading": "せんせい",
        "meaning": "Teacher, instructor"
      },
      {
        "word": "学生",
        "reading": "がくせい",
        "meaning": "Student"
      },
      {
        "word": "長生きします",
        "reading": "ながいきします",
        "meaning": "livelong"
      }
    ]
  },
  "教": {
    "char": "教",
    "meaning": "teach, faith, doctrine",
    "onyomi": "キョウ",
    "kunyomi": "おし.える, おそ.わる",
    "strokes": 11,
    "jlpt": "N5",
    "examples": [
      {
        "word": "教師",
        "reading": "きょうし",
        "meaning": "Teacher, classroom instructor"
      },
      {
        "word": "教室",
        "reading": "きょうしつ",
        "meaning": "Classroom"
      },
      {
        "word": "一教室 ー",
        "reading": "ーーきょうしつ",
        "meaning": "class"
      }
    ]
  },
  "師": {
    "char": "師",
    "meaning": "expert, teacher, master",
    "onyomi": "シ",
    "kunyomi": "いくさ",
    "strokes": 10,
    "jlpt": "N4",
    "examples": [
      {
        "word": "教師",
        "reading": "きょうし",
        "meaning": "Teacher, classroom instructor"
      }
    ]
  },
  "学": {
    "char": "学",
    "meaning": "study, learning, science",
    "onyomi": "ガク",
    "kunyomi": "まな.ぶ",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "学生",
        "reading": "がくせい",
        "meaning": "Student"
      },
      {
        "word": "大学",
        "reading": "だいがく",
        "meaning": "University"
      },
      {
        "word": "学校",
        "reading": "がっこう",
        "meaning": "School"
      }
    ]
  },
  "会": {
    "char": "会",
    "meaning": "meeting, meet, party",
    "onyomi": "カイ, エ",
    "kunyomi": "あ.う, あ.わせる, あつ.まる",
    "strokes": 6,
    "jlpt": "N5",
    "examples": [
      {
        "word": "会社員",
        "reading": "かいしゃいん",
        "meaning": "Company employee"
      },
      {
        "word": "会議室",
        "reading": "かいぎしつ",
        "meaning": "Conference room"
      },
      {
        "word": "会社",
        "reading": "かいしゃ",
        "meaning": "Company, firm"
      }
    ]
  },
  "社": {
    "char": "社",
    "meaning": "company, firm, office",
    "onyomi": "シャ",
    "kunyomi": "やしろ",
    "strokes": 7,
    "jlpt": "N5",
    "examples": [
      {
        "word": "会社員",
        "reading": "かいしゃいん",
        "meaning": "Company employee"
      },
      {
        "word": "社員",
        "reading": "しゃいん",
        "meaning": "Employee of ~ company"
      },
      {
        "word": "会社",
        "reading": "かいしゃ",
        "meaning": "Company, firm"
      }
    ]
  },
  "員": {
    "char": "員",
    "meaning": "employee, member, number",
    "onyomi": "イン",
    "kunyomi": "-",
    "strokes": 10,
    "jlpt": "N5",
    "examples": [
      {
        "word": "会社員",
        "reading": "かいしゃいん",
        "meaning": "Company employee"
      },
      {
        "word": "社員",
        "reading": "しゃいん",
        "meaning": "Employee of ~ company"
      },
      {
        "word": "銀行員",
        "reading": "ぎんこういん",
        "meaning": "Bank employee"
      }
    ]
  },
  "銀": {
    "char": "銀",
    "meaning": "silver",
    "onyomi": "ギン",
    "kunyomi": "しろがね",
    "strokes": 14,
    "jlpt": "N5",
    "examples": [
      {
        "word": "銀行員",
        "reading": "ぎんこういん",
        "meaning": "Bank employee"
      }
    ]
  },
  "行": {
    "char": "行",
    "meaning": "going, journey, carry out",
    "onyomi": "コウ, ギョウ, アン",
    "kunyomi": "い.く, ゆ.く, -ゆ.き, -ゆき, -い.き, -いき, おこな.う, おこ.なう",
    "strokes": 6,
    "jlpt": "N4",
    "examples": [
      {
        "word": "銀行員",
        "reading": "ぎんこういん",
        "meaning": "Bank employee"
      },
      {
        "word": "行きます",
        "reading": "いきます",
        "meaning": "go"
      },
      {
        "word": "飛行機",
        "reading": "ひこうき",
        "meaning": "Airplane"
      }
    ]
  },
  "医": {
    "char": "医",
    "meaning": "doctor, medicine",
    "onyomi": "イ",
    "kunyomi": "い.やす, い.する, くすし",
    "strokes": 7,
    "jlpt": "N5",
    "examples": [
      {
        "word": "医者",
        "reading": "いしゃ",
        "meaning": "Medical doctor"
      }
    ]
  },
  "者": {
    "char": "者",
    "meaning": "someone, person",
    "onyomi": "シャ",
    "kunyomi": "もの",
    "strokes": 8,
    "jlpt": "N5",
    "examples": [
      {
        "word": "医者",
        "reading": "いしゃ",
        "meaning": "Medical doctor"
      },
      {
        "word": "研究者",
        "reading": "けんきゅうしゃ",
        "meaning": "Researcher, scholar"
      },
      {
        "word": "科学者",
        "reading": "かがくしゃ",
        "meaning": "scientist"
      }
    ]
  },
  "研": {
    "char": "研",
    "meaning": "polish, study of, sharpen",
    "onyomi": "ケン",
    "kunyomi": "と.ぐ",
    "strokes": 9,
    "jlpt": "N5",
    "examples": [
      {
        "word": "研究者",
        "reading": "けんきゅうしゃ",
        "meaning": "Researcher, scholar"
      }
    ]
  },
  "究": {
    "char": "究",
    "meaning": "research, study",
    "onyomi": "キュウ, ク",
    "kunyomi": "きわ.める",
    "strokes": 7,
    "jlpt": "N5",
    "examples": [
      {
        "word": "研究者",
        "reading": "けんきゅうしゃ",
        "meaning": "Researcher, scholar"
      }
    ]
  },
  "大": {
    "char": "大",
    "meaning": "large, big",
    "onyomi": "ダイ, タイ",
    "kunyomi": "おお-, おお.きい, -おお.いに",
    "strokes": 3,
    "jlpt": "N4",
    "examples": [
      {
        "word": "大学",
        "reading": "だいがく",
        "meaning": "University"
      },
      {
        "word": "大学院",
        "reading": "だいがくいん",
        "meaning": "graduate school"
      },
      {
        "word": "一 大きな 一",
        "reading": "おおきな",
        "meaning": "large ~"
      }
    ]
  },
  "病": {
    "char": "病",
    "meaning": "ill, sick",
    "onyomi": "ビョウ, ヘイ",
    "kunyomi": "や.む, -や.み, やまい",
    "strokes": 10,
    "jlpt": "N5",
    "examples": [
      {
        "word": "病院",
        "reading": "びょういん",
        "meaning": "Hospital"
      }
    ]
  },
  "院": {
    "char": "院",
    "meaning": "Inst., institution, temple",
    "onyomi": "イン",
    "kunyomi": "-",
    "strokes": 10,
    "jlpt": "N5",
    "examples": [
      {
        "word": "病院",
        "reading": "びょういん",
        "meaning": "Hospital"
      },
      {
        "word": "大学院",
        "reading": "だいがくいん",
        "meaning": "graduate school"
      },
      {
        "word": "退院します",
        "reading": "たいいんします",
        "meaning": "leave hospital"
      }
    ]
  },
  "誰": {
    "char": "誰",
    "meaning": "who, someone, somebody",
    "onyomi": "スイ",
    "kunyomi": "だれ, たれ, た",
    "strokes": 15,
    "jlpt": "N4",
    "examples": [
      {
        "word": "誰",
        "reading": "だれ",
        "meaning": "Who"
      }
    ]
  },
  "歳": {
    "char": "歳",
    "meaning": "year-end, age, occasion",
    "onyomi": "サイ, セイ",
    "kunyomi": "とし, とせ, よわい",
    "strokes": 13,
    "jlpt": "N4",
    "examples": [
      {
        "word": "歳",
        "reading": "〜さい",
        "meaning": "Years old"
      },
      {
        "word": "何歳",
        "reading": "なんさい",
        "meaning": "How old"
      }
    ]
  },
  "何": {
    "char": "何",
    "meaning": "what",
    "onyomi": "カ",
    "kunyomi": "なに, なん, なに-, なん-",
    "strokes": 7,
    "jlpt": "N4",
    "examples": [
      {
        "word": "何歳",
        "reading": "なんさい",
        "meaning": "How old"
      },
      {
        "word": "何でも",
        "reading": "なんでも",
        "meaning": "anything"
      }
    ]
  },
  "初": {
    "char": "初",
    "meaning": "first time, beginning",
    "onyomi": "ショ",
    "kunyomi": "はじ.め, はじ.めて, はつ, はつ-, うい-, -そ.める, -ぞ.め",
    "strokes": 7,
    "jlpt": "N4",
    "examples": [
      {
        "word": "初めまして",
        "reading": "はじめまして",
        "meaning": "How do you do?"
      },
      {
        "word": "初めに",
        "reading": "はじめに",
        "meaning": "first"
      },
      {
        "word": "最初に",
        "reading": "さいしょに",
        "meaning": "first of all"
      }
    ]
  },
  "本": {
    "char": "本",
    "meaning": "book, present, main",
    "onyomi": "ホン",
    "kunyomi": "もと",
    "strokes": 5,
    "jlpt": "N4",
    "examples": [
      {
        "word": "本",
        "reading": "ほん",
        "meaning": "Book"
      },
      {
        "word": "(一ぼん、一ぼん) 一本 (",
        "reading": "ーほん",
        "meaning": "counter for long objects)"
      },
      {
        "word": "一本 ー",
        "reading": "ーはい (-ー-ばい、-ばい)",
        "meaning": "glass or cup of (counter for full cups, glasses, etc)"
      }
    ]
  },
  "辞": {
    "char": "辞",
    "meaning": "resign, word, term",
    "onyomi": "ジ",
    "kunyomi": "や.める, いな.む",
    "strokes": 13,
    "jlpt": "N4",
    "examples": [
      {
        "word": "辞書",
        "reading": "じしょ",
        "meaning": "Dictionary"
      }
    ]
  },
  "書": {
    "char": "書",
    "meaning": "write",
    "onyomi": "ショ",
    "kunyomi": "か.く, -が.き, -がき",
    "strokes": 10,
    "jlpt": "N4",
    "examples": [
      {
        "word": "辞書",
        "reading": "じしょ",
        "meaning": "Dictionary"
      },
      {
        "word": "説明書",
        "reading": "せつめいしょ",
        "meaning": "explanatory pamphlet, instruction book,"
      },
      {
        "word": "書類",
        "reading": "しょるい",
        "meaning": "document, papers"
      }
    ]
  },
  "雑": {
    "char": "雑",
    "meaning": "miscellaneous",
    "onyomi": "ザツ, ゾウ",
    "kunyomi": "まじ.える, まじ.る",
    "strokes": 14,
    "jlpt": "N4",
    "examples": [
      {
        "word": "雑誌",
        "reading": "ざっし",
        "meaning": "Magazine"
      }
    ]
  },
  "誌": {
    "char": "誌",
    "meaning": "document, records",
    "onyomi": "シ",
    "kunyomi": "-",
    "strokes": 14,
    "jlpt": "N3",
    "examples": [
      {
        "word": "雑誌",
        "reading": "ざっし",
        "meaning": "Magazine"
      }
    ]
  },
  "新": {
    "char": "新",
    "meaning": "new",
    "onyomi": "シン",
    "kunyomi": "あたら.しい, あら.た, あら-, にい-",
    "strokes": 13,
    "jlpt": "N5",
    "examples": [
      {
        "word": "新聞",
        "reading": "しんぶん",
        "meaning": "Newspaper"
      },
      {
        "word": "新幹線",
        "reading": "しんかんせん",
        "meaning": "Bullet train"
      },
      {
        "word": "新聞社",
        "reading": "しんぶんしゃ",
        "meaning": "newspaper publishing company, newspaper"
      }
    ]
  },
  "聞": {
    "char": "聞",
    "meaning": "hear, ask, listen",
    "onyomi": "ブン, モン",
    "kunyomi": "き.く, き.こえる",
    "strokes": 14,
    "jlpt": "N4",
    "examples": [
      {
        "word": "新聞",
        "reading": "しんぶん",
        "meaning": "Newspaper"
      },
      {
        "word": "新聞社",
        "reading": "しんぶんしゃ",
        "meaning": "newspaper publishing company, newspaper"
      }
    ]
  },
  "手": {
    "char": "手",
    "meaning": "hand",
    "onyomi": "シュ, ズ",
    "kunyomi": "て, て-, -て, た-",
    "strokes": 4,
    "jlpt": "N5",
    "examples": [
      {
        "word": "手帳",
        "reading": "てちょう",
        "meaning": "Pocket notebook"
      },
      {
        "word": "お手洗い",
        "reading": "おてあらい",
        "meaning": "Restroom, toilet"
      },
      {
        "word": "手袋",
        "reading": "てぶてくろ",
        "meaning": "gloves"
      }
    ]
  },
  "帳": {
    "char": "帳",
    "meaning": "notebook, account book, album",
    "onyomi": "チョウ",
    "kunyomi": "とばり",
    "strokes": 11,
    "jlpt": "N2",
    "examples": [
      {
        "word": "手帳",
        "reading": "てちょう",
        "meaning": "Pocket notebook"
      }
    ]
  },
  "名": {
    "char": "名",
    "meaning": "name, noted, distinguished",
    "onyomi": "メイ, ミョウ",
    "kunyomi": "な, -な",
    "strokes": 6,
    "jlpt": "N4",
    "examples": [
      {
        "word": "名刺",
        "reading": "めいし",
        "meaning": "Business card"
      },
      {
        "word": "名みます ‘",
        "reading": "つつみます",
        "meaning": "wrap"
      }
    ]
  },
  "刺": {
    "char": "刺",
    "meaning": "thorn, pierce, stab",
    "onyomi": "シ",
    "kunyomi": "さ.す, さ.さる, さ.し, さし, とげ",
    "strokes": 8,
    "jlpt": "N3",
    "examples": [
      {
        "word": "名刺",
        "reading": "めいし",
        "meaning": "Business card"
      }
    ]
  },
  "鉛": {
    "char": "鉛",
    "meaning": "lead",
    "onyomi": "エン",
    "kunyomi": "なまり",
    "strokes": 13,
    "jlpt": "N2",
    "examples": [
      {
        "word": "鉛筆",
        "reading": "えんぴつ",
        "meaning": "Pencil"
      }
    ]
  },
  "筆": {
    "char": "筆",
    "meaning": "writing brush, writing, painting brush",
    "onyomi": "ヒツ",
    "kunyomi": "ふで",
    "strokes": 12,
    "jlpt": "N3",
    "examples": [
      {
        "word": "鉛筆",
        "reading": "えんぴつ",
        "meaning": "Pencil"
      }
    ]
  },
  "時": {
    "char": "時",
    "meaning": "time, hour",
    "onyomi": "ジ",
    "kunyomi": "とき, -どき",
    "strokes": 10,
    "jlpt": "N4",
    "examples": [
      {
        "word": "時計",
        "reading": "とけい",
        "meaning": "Watch, clock"
      },
      {
        "word": "時",
        "reading": "〜じ",
        "meaning": "~ o'clock"
      },
      {
        "word": "時金します",
        "reading": "ちょきんします DD",
        "meaning": "save money"
      }
    ]
  },
  "計": {
    "char": "計",
    "meaning": "plot, plan, scheme",
    "onyomi": "ケイ",
    "kunyomi": "はか.る, はか.らう",
    "strokes": 9,
    "jlpt": "N5",
    "examples": [
      {
        "word": "時計",
        "reading": "とけい",
        "meaning": "Watch, clock"
      },
      {
        "word": "設計します",
        "reading": "せっけいします DT",
        "meaning": "design, plan"
      },
      {
        "word": "計算します",
        "reading": "けいさんします",
        "meaning": "calculate"
      }
    ]
  },
  "傘": {
    "char": "傘",
    "meaning": "umbrella",
    "onyomi": "サン",
    "kunyomi": "かさ",
    "strokes": 12,
    "jlpt": "N2",
    "examples": [
      {
        "word": "傘",
        "reading": "かさ",
        "meaning": "Umbrella"
      }
    ]
  },
  "鞄": {
    "char": "鞄",
    "meaning": "suitcase, bag, briefcase",
    "onyomi": "ハク, ホウ, ビョウ",
    "kunyomi": "かばん",
    "strokes": 14,
    "jlpt": "N4",
    "examples": [
      {
        "word": "鞄",
        "reading": "かばん",
        "meaning": "Bag, briefcase"
      }
    ]
  },
  "鍵": {
    "char": "鍵",
    "meaning": "key",
    "onyomi": "ケン",
    "kunyomi": "かぎ",
    "strokes": 17,
    "jlpt": "N4",
    "examples": [
      {
        "word": "鍵",
        "reading": "かぎ",
        "meaning": "Key"
      }
    ]
  },
  "自": {
    "char": "自",
    "meaning": "oneself",
    "onyomi": "ジ, シ",
    "kunyomi": "みずか.ら, おの.ずから, おの.ずと",
    "strokes": 6,
    "jlpt": "N5",
    "examples": [
      {
        "word": "自動車",
        "reading": "じどうしゃ",
        "meaning": "Automobile, car"
      },
      {
        "word": "自転車",
        "reading": "じてんしゃ",
        "meaning": "Bicycle"
      },
      {
        "word": "自動販売機",
        "reading": "じどうはんばいき",
        "meaning": "vending machine"
      }
    ]
  },
  "動": {
    "char": "動",
    "meaning": "move, motion, change",
    "onyomi": "ドウ",
    "kunyomi": "うご.く, うご.かす",
    "strokes": 11,
    "jlpt": "N5",
    "examples": [
      {
        "word": "自動車",
        "reading": "じどうしゃ",
        "meaning": "Automobile, car"
      },
      {
        "word": "運動会",
        "reading": "うんどうかい",
        "meaning": "athletic meeting"
      },
      {
        "word": "自動販売機",
        "reading": "じどうはんばいき",
        "meaning": "vending machine"
      }
    ]
  },
  "車": {
    "char": "車",
    "meaning": "car",
    "onyomi": "シャ",
    "kunyomi": "くるま",
    "strokes": 7,
    "jlpt": "N4",
    "examples": [
      {
        "word": "自動車",
        "reading": "じどうしゃ",
        "meaning": "Automobile, car"
      },
      {
        "word": "電車",
        "reading": "でんしゃ",
        "meaning": "Electric train"
      },
      {
        "word": "自転車",
        "reading": "じてんしゃ",
        "meaning": "Bicycle"
      }
    ]
  },
  "机": {
    "char": "机",
    "meaning": "desk, table",
    "onyomi": "キ",
    "kunyomi": "つくえ",
    "strokes": 6,
    "jlpt": "N3",
    "examples": [
      {
        "word": "机",
        "reading": "つくえ",
        "meaning": "Desk"
      }
    ]
  },
  "椅": {
    "char": "椅",
    "meaning": "chair",
    "onyomi": "イ",
    "kunyomi": "-",
    "strokes": 12,
    "jlpt": "N4",
    "examples": [
      {
        "word": "椅子",
        "reading": "いす",
        "meaning": "Chair"
      }
    ]
  },
  "子": {
    "char": "子",
    "meaning": "child, sign of the rat, 11PM-1AM",
    "onyomi": "シ, ス, ツ",
    "kunyomi": "こ, -こ, ね",
    "strokes": 3,
    "jlpt": "N4",
    "examples": [
      {
        "word": "椅子",
        "reading": "いす",
        "meaning": "Chair"
      },
      {
        "word": "お子さん (",
        "reading": "おこさん",
        "meaning": "someone else’s) child"
      },
      {
        "word": "子どもたち",
        "reading": "こどもたち",
        "meaning": "children"
      }
    ]
  },
  "室": {
    "char": "室",
    "meaning": "room, apartment, chamber",
    "onyomi": "シツ",
    "kunyomi": "むろ",
    "strokes": 9,
    "jlpt": "N5",
    "examples": [
      {
        "word": "教室",
        "reading": "きょうしつ",
        "meaning": "Classroom"
      },
      {
        "word": "会議室",
        "reading": "かいぎしつ",
        "meaning": "Conference room"
      },
      {
        "word": "一教室 ー",
        "reading": "ーーきょうしつ",
        "meaning": "class"
      }
    ]
  },
  "食": {
    "char": "食",
    "meaning": "eat, food",
    "onyomi": "ショク, ジキ",
    "kunyomi": "く.う, く.らう, た.べる, は.む",
    "strokes": 9,
    "jlpt": "N4",
    "examples": [
      {
        "word": "食堂",
        "reading": "しょくどう",
        "meaning": "Dining hall, canteen"
      }
    ]
  },
  "堂": {
    "char": "堂",
    "meaning": "public chamber, hall",
    "onyomi": "ドウ",
    "kunyomi": "-",
    "strokes": 11,
    "jlpt": "N5",
    "examples": [
      {
        "word": "食堂",
        "reading": "しょくどう",
        "meaning": "Dining hall, canteen"
      }
    ]
  },
  "事": {
    "char": "事",
    "meaning": "matter, thing, fact",
    "onyomi": "ジ, ズ",
    "kunyomi": "こと, つか.う, つか.える",
    "strokes": 8,
    "jlpt": "N5",
    "examples": [
      {
        "word": "事務所",
        "reading": "じむしょ",
        "meaning": "Office"
      },
      {
        "word": "火事",
        "reading": "OU",
        "meaning": "fire"
      },
      {
        "word": "事故",
        "reading": "じこ",
        "meaning": "accident"
      }
    ]
  },
  "務": {
    "char": "務",
    "meaning": "task, duties",
    "onyomi": "ム",
    "kunyomi": "つと.める",
    "strokes": 11,
    "jlpt": "N4",
    "examples": [
      {
        "word": "事務所",
        "reading": "じむしょ",
        "meaning": "Office"
      }
    ]
  },
  "所": {
    "char": "所",
    "meaning": "place, extent",
    "onyomi": "ショ",
    "kunyomi": "ところ, -ところ, どころ, とこ",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "事務所",
        "reading": "じむしょ",
        "meaning": "Office"
      },
      {
        "word": "場所",
        "reading": "ばしょ",
        "meaning": "place"
      },
      {
        "word": "台所",
        "reading": "だいどころ",
        "meaning": "kitchen"
      }
    ]
  },
  "議": {
    "char": "議",
    "meaning": "deliberation, consultation, debate",
    "onyomi": "ギ",
    "kunyomi": "-",
    "strokes": 20,
    "jlpt": "N4",
    "examples": [
      {
        "word": "会議室",
        "reading": "かいぎしつ",
        "meaning": "Conference room"
      }
    ]
  },
  "受": {
    "char": "受",
    "meaning": "accept, undergo, answer (phone)",
    "onyomi": "ジュ",
    "kunyomi": "う.ける, -う.け, う.かる",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "受付",
        "reading": "うけつけ",
        "meaning": "Reception desk"
      },
      {
        "word": "受けます",
        "reading": "うけます",
        "meaning": "take [an examination]"
      }
    ]
  },
  "付": {
    "char": "付",
    "meaning": "adhere, attach, refer to",
    "onyomi": "フ",
    "kunyomi": "つ.ける, -つ.ける, -づ.ける, つ.け, つ.け-, -つ.け, -づ.け, -づけ, つ.く, -づ.く, つ.き, -つ.き, -つき, -づ.き, -づき",
    "strokes": 5,
    "jlpt": "N4",
    "examples": [
      {
        "word": "受付",
        "reading": "うけつけ",
        "meaning": "Reception desk"
      },
      {
        "word": "付きます [",
        "reading": "つきます",
        "meaning": "a pocket] bc attached"
      },
      {
        "word": "付けます",
        "reading": "つけます",
        "meaning": "draw [a circle], mark [with a circle]"
      }
    ]
  },
  "部": {
    "char": "部",
    "meaning": "section, bureau, dept",
    "onyomi": "ブ",
    "kunyomi": "-べ",
    "strokes": 11,
    "jlpt": "N4",
    "examples": [
      {
        "word": "部屋",
        "reading": "へや",
        "meaning": "Room"
      }
    ]
  },
  "屋": {
    "char": "屋",
    "meaning": "roof, house, shop",
    "onyomi": "オク",
    "kunyomi": "や",
    "strokes": 9,
    "jlpt": "N5",
    "examples": [
      {
        "word": "部屋",
        "reading": "へや",
        "meaning": "Room"
      },
      {
        "word": "屋上",
        "reading": "おくじょう",
        "meaning": "rooftop"
      }
    ]
  },
  "洗": {
    "char": "洗",
    "meaning": "wash, inquire into, probe",
    "onyomi": "セン",
    "kunyomi": "あら.う",
    "strokes": 9,
    "jlpt": "N4",
    "examples": [
      {
        "word": "お手洗い",
        "reading": "おてあらい",
        "meaning": "Restroom, toilet"
      },
      {
        "word": "洗濯機",
        "reading": "せんたくき",
        "meaning": "washing machine"
      }
    ]
  },
  "階": {
    "char": "階",
    "meaning": "storey, stair, counter for storeys of a building",
    "onyomi": "カイ",
    "kunyomi": "きざはし",
    "strokes": 12,
    "jlpt": "N3",
    "examples": [
      {
        "word": "階段",
        "reading": "かいだん",
        "meaning": "Stairs, staircase"
      }
    ]
  },
  "段": {
    "char": "段",
    "meaning": "grade, steps, stairs",
    "onyomi": "ダン, タン",
    "kunyomi": "-",
    "strokes": 9,
    "jlpt": "N4",
    "examples": [
      {
        "word": "階段",
        "reading": "かいだん",
        "meaning": "Stairs, staircase"
      },
      {
        "word": "値段",
        "reading": "ねだん",
        "meaning": "price"
      }
    ]
  },
  "国": {
    "char": "国",
    "meaning": "country",
    "onyomi": "コク",
    "kunyomi": "くに",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "国",
        "reading": "くに",
        "meaning": "Country, home nation"
      },
      {
        "word": "再入国ビザ",
        "reading": "さいにゅうこくビザ",
        "meaning": "re-entry visa"
      }
    ]
  },
  "家": {
    "char": "家",
    "meaning": "house, home, family",
    "onyomi": "カ, ケ",
    "kunyomi": "いえ, や, うち",
    "strokes": 10,
    "jlpt": "N5",
    "examples": [
      {
        "word": "家",
        "reading": "うち",
        "meaning": "House, home"
      },
      {
        "word": "家族",
        "reading": "かぞく",
        "meaning": "Family"
      },
      {
        "word": "小説家",
        "reading": "しょうせつか",
        "meaning": "novelist"
      }
    ]
  },
  "靴": {
    "char": "靴",
    "meaning": "shoes",
    "onyomi": "カ",
    "kunyomi": "くつ",
    "strokes": 13,
    "jlpt": "N4",
    "examples": [
      {
        "word": "靴",
        "reading": "くつ",
        "meaning": "Shoes"
      },
      {
        "word": "靴下",
        "reading": "くつした",
        "meaning": "socks, stockings"
      }
    ]
  },
  "売": {
    "char": "売",
    "meaning": "sell",
    "onyomi": "バイ",
    "kunyomi": "う.る, う.れる",
    "strokes": 7,
    "jlpt": "N5",
    "examples": [
      {
        "word": "売り場",
        "reading": "うりば",
        "meaning": "Department, counter in a store"
      },
      {
        "word": "自動販売機",
        "reading": "じどうはんばいき",
        "meaning": "vending machine"
      },
      {
        "word": "通信販売",
        "reading": "つう しんはんばい",
        "meaning": "mail order, mail-order sales"
      }
    ]
  },
  "場": {
    "char": "場",
    "meaning": "location, place",
    "onyomi": "ジョウ, チョウ",
    "kunyomi": "ば",
    "strokes": 12,
    "jlpt": "N5",
    "examples": [
      {
        "word": "売り場",
        "reading": "うりば",
        "meaning": "Department, counter in a store"
      },
      {
        "word": "場所",
        "reading": "ばしょ",
        "meaning": "place"
      },
      {
        "word": "工場",
        "reading": "こうじょう",
        "meaning": "factory"
      }
    ]
  },
  "起": {
    "char": "起",
    "meaning": "rouse, wake up, get up",
    "onyomi": "キ",
    "kunyomi": "お.きる, お.こる, お.こす, おこ.す, た.つ",
    "strokes": 10,
    "jlpt": "N5",
    "examples": [
      {
        "word": "起きる",
        "reading": "おきます",
        "meaning": "get up, wake up"
      },
      {
        "word": "起こします",
        "reading": "おこします",
        "meaning": "wake (someone) up"
      },
      {
        "word": "起きます [",
        "reading": "おきます",
        "meaning": "an accident] happen"
      }
    ]
  },
  "寝": {
    "char": "寝",
    "meaning": "lie down, sleep, rest",
    "onyomi": "シン",
    "kunyomi": "ね.る, ね.かす, い.ぬ, みたまや, や.める",
    "strokes": 13,
    "jlpt": "N4",
    "examples": [
      {
        "word": "寝る",
        "reading": "ねます",
        "meaning": "sleep, go to bed"
      }
    ]
  },
  "働": {
    "char": "働",
    "meaning": "work, (kokuji)",
    "onyomi": "ドウ",
    "kunyomi": "はたら.く",
    "strokes": 13,
    "jlpt": "N4",
    "examples": [
      {
        "word": "働く",
        "reading": "はたらきます",
        "meaning": "work"
      }
    ]
  },
  "休": {
    "char": "休",
    "meaning": "rest, day off, retire",
    "onyomi": "キュウ",
    "kunyomi": "やす.む, やす.まる, やす.める",
    "strokes": 6,
    "jlpt": "N4",
    "examples": [
      {
        "word": "休む",
        "reading": "やすみます",
        "meaning": "take a rest, take a holiday"
      },
      {
        "word": "連休",
        "reading": "れんきゅう",
        "meaning": "consecutive holidays"
      }
    ]
  },
  "勉": {
    "char": "勉",
    "meaning": "exertion, endeavour, encourage",
    "onyomi": "ベン",
    "kunyomi": "つと.める",
    "strokes": 10,
    "jlpt": "N5",
    "examples": [
      {
        "word": "勉強する",
        "reading": "べんきょうします",
        "meaning": "study"
      }
    ]
  },
  "強": {
    "char": "強",
    "meaning": "strong",
    "onyomi": "キョウ, ゴウ",
    "kunyomi": "つよ.い, つよ.まる, つよ.める, し.いる, こわ.い",
    "strokes": 11,
    "jlpt": "N5",
    "examples": [
      {
        "word": "勉強する",
        "reading": "べんきょうします",
        "meaning": "study"
      }
    ]
  },
  "終": {
    "char": "終",
    "meaning": "end, finish",
    "onyomi": "シュウ",
    "kunyomi": "お.わる, -お.わる, おわ.る, お.える, つい, つい.に",
    "strokes": 11,
    "jlpt": "N5",
    "examples": [
      {
        "word": "終わる",
        "reading": "おわります",
        "meaning": "finish, end"
      }
    ]
  },
  "今": {
    "char": "今",
    "meaning": "now",
    "onyomi": "コン, キン",
    "kunyomi": "いま",
    "strokes": 4,
    "jlpt": "N4",
    "examples": [
      {
        "word": "今",
        "reading": "いま",
        "meaning": "Now"
      },
      {
        "word": "今日",
        "reading": "きょう",
        "meaning": "Today"
      },
      {
        "word": "今度",
        "reading": "こんど",
        "meaning": "next time, another time"
      }
    ]
  },
  "分": {
    "char": "分",
    "meaning": "part, minute of time, segment",
    "onyomi": "ブン, フン, ブ",
    "kunyomi": "わ.ける, わ.け, わ.かれる, わ.かる, わ.かつ",
    "strokes": 4,
    "jlpt": "N4",
    "examples": [
      {
        "word": "分",
        "reading": "〜ふん",
        "meaning": "~ minute(s)"
      },
      {
        "word": "気分が いい",
        "reading": "きぶんが いい",
        "meaning": "feel well"
      },
      {
        "word": "気分が悪い",
        "reading": "きぶんが わるい",
        "meaning": "feel ill"
      }
    ]
  },
  "半": {
    "char": "半",
    "meaning": "half, middle, odd number",
    "onyomi": "ハン",
    "kunyomi": "なか.ば",
    "strokes": 5,
    "jlpt": "N4",
    "examples": [
      {
        "word": "半",
        "reading": "はん",
        "meaning": "Half past"
      },
      {
        "word": "半分",
        "reading": "はんぶん",
        "meaning": "half"
      },
      {
        "word": "半年",
        "reading": "はんとし",
        "meaning": "half a year"
      }
    ]
  },
  "午": {
    "char": "午",
    "meaning": "noon, sign of the horse, 11AM-1PM",
    "onyomi": "ゴ",
    "kunyomi": "うま",
    "strokes": 4,
    "jlpt": "N4",
    "examples": [
      {
        "word": "午前",
        "reading": "ごぜん",
        "meaning": "a.m., morning"
      },
      {
        "word": "午後",
        "reading": "ごご",
        "meaning": "p.m., afternoon"
      }
    ]
  },
  "前": {
    "char": "前",
    "meaning": "in front, before",
    "onyomi": "ゼン",
    "kunyomi": "まえ, -まえ",
    "strokes": 9,
    "jlpt": "N4",
    "examples": [
      {
        "word": "午前",
        "reading": "ごぜん",
        "meaning": "a.m., morning"
      },
      {
        "word": "駅前",
        "reading": "えきまえ",
        "meaning": "the area in front of the station"
      }
    ]
  },
  "後": {
    "char": "後",
    "meaning": "behind, back, later",
    "onyomi": "ゴ, コウ",
    "kunyomi": "のち, うし.ろ, うしろ, あと, おく.れる",
    "strokes": 9,
    "jlpt": "N4",
    "examples": [
      {
        "word": "午後",
        "reading": "ごご",
        "meaning": "p.m., afternoon"
      },
      {
        "word": "ー後",
        "reading": "Se",
        "meaning": "after ~ (duration of time) のCE"
      },
      {
        "word": "最後に",
        "reading": "さいごに",
        "meaning": "lastly"
      }
    ]
  },
  "朝": {
    "char": "朝",
    "meaning": "morning, dynasty, regime",
    "onyomi": "チョウ",
    "kunyomi": "あさ",
    "strokes": 12,
    "jlpt": "N5",
    "examples": [
      {
        "word": "朝",
        "reading": "あさ",
        "meaning": "Morning"
      }
    ]
  },
  "昼": {
    "char": "昼",
    "meaning": "daytime, noon",
    "onyomi": "チュウ",
    "kunyomi": "ひる",
    "strokes": 9,
    "jlpt": "N5",
    "examples": [
      {
        "word": "昼",
        "reading": "ひる",
        "meaning": "Daytime, noon"
      }
    ]
  },
  "夜": {
    "char": "夜",
    "meaning": "night, evening",
    "onyomi": "ヤ",
    "kunyomi": "よ, よる",
    "strokes": 8,
    "jlpt": "N5",
    "examples": [
      {
        "word": "夜",
        "reading": "よる",
        "meaning": "Night, evening"
      }
    ]
  },
  "昨": {
    "char": "昨",
    "meaning": "yesterday, previous",
    "onyomi": "サク",
    "kunyomi": "-",
    "strokes": 9,
    "jlpt": "N4",
    "examples": [
      {
        "word": "昨日",
        "reading": "きのう",
        "meaning": "Yesterday"
      }
    ]
  },
  "日": {
    "char": "日",
    "meaning": "day, sun, Japan",
    "onyomi": "ニチ, ジツ",
    "kunyomi": "ひ, -び, -か",
    "strokes": 4,
    "jlpt": "N4",
    "examples": [
      {
        "word": "昨日",
        "reading": "きのう",
        "meaning": "Yesterday"
      },
      {
        "word": "今日",
        "reading": "きょう",
        "meaning": "Today"
      },
      {
        "word": "明日",
        "reading": "あした",
        "meaning": "Tomorrow"
      }
    ]
  },
  "明": {
    "char": "明",
    "meaning": "bright, light",
    "onyomi": "メイ, ミョウ, ミン",
    "kunyomi": "あ.かり, あか.るい, あか.るむ, あか.らむ, あき.らか, あ.ける, -あ.け, あ.く, あ.くる, あ.かす",
    "strokes": 8,
    "jlpt": "N5",
    "examples": [
      {
        "word": "明日",
        "reading": "あした",
        "meaning": "Tomorrow"
      },
      {
        "word": "説明書",
        "reading": "せつめいしょ",
        "meaning": "explanatory pamphlet, instruction book,"
      },
      {
        "word": "発明します",
        "reading": "はつめいします",
        "meaning": "invent"
      }
    ]
  },
  "来": {
    "char": "来",
    "meaning": "come, due, next",
    "onyomi": "ライ, タイ",
    "kunyomi": "く.る, きた.る, きた.す, き.たす, き.たる, き, こ",
    "strokes": 7,
    "jlpt": "N4",
    "examples": [
      {
        "word": "来ます",
        "reading": "きます",
        "meaning": "come"
      },
      {
        "word": "将来",
        "reading": "しょうらい",
        "meaning": "future"
      },
      {
        "word": "さ来年",
        "reading": "さらいれねん",
        "meaning": "the year after next"
      }
    ]
  },
  "帰": {
    "char": "帰",
    "meaning": "homecoming, arrive at, lead to",
    "onyomi": "キ",
    "kunyomi": "かえ.る, かえ.す, おく.る, とつ.ぐ",
    "strokes": 10,
    "jlpt": "N5",
    "examples": [
      {
        "word": "帰ります",
        "reading": "かえります",
        "meaning": "go home, return"
      },
      {
        "word": "帰って REF",
        "reading": "かえって きます WM",
        "meaning": "comeback"
      },
      {
        "word": "帰りに",
        "reading": "かえりに",
        "meaning": "on the way back"
      }
    ]
  },
  "校": {
    "char": "校",
    "meaning": "exam, school, printing",
    "onyomi": "コウ, キョウ",
    "kunyomi": "-",
    "strokes": 10,
    "jlpt": "N4",
    "examples": [
      {
        "word": "学校",
        "reading": "がっこう",
        "meaning": "School"
      },
      {
        "word": "小学校",
        "reading": "しょうがっこう",
        "meaning": "elementary school"
      },
      {
        "word": "中学校",
        "reading": "ちゅうがっこう",
        "meaning": "junior high school"
      }
    ]
  },
  "駅": {
    "char": "駅",
    "meaning": "station",
    "onyomi": "エキ",
    "kunyomi": "-",
    "strokes": 14,
    "jlpt": "N5",
    "examples": [
      {
        "word": "駅",
        "reading": "えき",
        "meaning": "Station"
      },
      {
        "word": "駅前",
        "reading": "えきまえ",
        "meaning": "the area in front of the station"
      }
    ]
  },
  "飛": {
    "char": "飛",
    "meaning": "fly, skip (pages), scatter",
    "onyomi": "ヒ",
    "kunyomi": "と.ぶ, と.ばす, -と.ばす",
    "strokes": 9,
    "jlpt": "N4",
    "examples": [
      {
        "word": "飛行機",
        "reading": "ひこうき",
        "meaning": "Airplane"
      }
    ]
  },
  "機": {
    "char": "機",
    "meaning": "loom, mechanism, machine",
    "onyomi": "キ",
    "kunyomi": "はた",
    "strokes": 16,
    "jlpt": "N4",
    "examples": [
      {
        "word": "飛行機",
        "reading": "ひこうき",
        "meaning": "Airplane"
      },
      {
        "word": "自動販売機",
        "reading": "じどうはんばいき",
        "meaning": "vending machine"
      },
      {
        "word": "洗濯機",
        "reading": "せんたくき",
        "meaning": "washing machine"
      }
    ]
  },
  "船": {
    "char": "船",
    "meaning": "ship, boat",
    "onyomi": "セン",
    "kunyomi": "ふね, ふな-",
    "strokes": 11,
    "jlpt": "N4",
    "examples": [
      {
        "word": "船",
        "reading": "ふね",
        "meaning": "Ship, boat"
      }
    ]
  },
  "電": {
    "char": "電",
    "meaning": "electricity",
    "onyomi": "デン",
    "kunyomi": "-",
    "strokes": 13,
    "jlpt": "N4",
    "examples": [
      {
        "word": "電車",
        "reading": "でんしゃ",
        "meaning": "Electric train"
      },
      {
        "word": "[電話が一]",
        "reading": "[でんわが-ー]",
        "meaning": "have [a phone call]"
      },
      {
        "word": "電源",
        "reading": "でんげん",
        "meaning": "power switch"
      }
    ]
  },
  "地": {
    "char": "地",
    "meaning": "ground, earth",
    "onyomi": "チ, ジ",
    "kunyomi": "-",
    "strokes": 6,
    "jlpt": "N5",
    "examples": [
      {
        "word": "地下鉄",
        "reading": "ちかてつ",
        "meaning": "Subway, underground"
      },
      {
        "word": "地震",
        "reading": "じしん",
        "meaning": "earthquake"
      },
      {
        "word": "地球",
        "reading": "ちきゅう",
        "meaning": "carth"
      }
    ]
  },
  "下": {
    "char": "下",
    "meaning": "below, down, descend",
    "onyomi": "カ, ゲ",
    "kunyomi": "した, しも, もと, さ.げる, さ.がる, くだ.る, くだ.り, くだ.す, -くだ.す, くだ.さる, お.ろす, お.りる",
    "strokes": 3,
    "jlpt": "N4",
    "examples": [
      {
        "word": "地下鉄",
        "reading": "ちかてつ",
        "meaning": "Subway, underground"
      },
      {
        "word": "廊下",
        "reading": "るうか",
        "meaning": "corridor, hallway"
      },
      {
        "word": "下げます",
        "reading": "さげます",
        "meaning": "lower, pull down"
      }
    ]
  },
  "鉄": {
    "char": "鉄",
    "meaning": "iron",
    "onyomi": "テツ",
    "kunyomi": "くろがね",
    "strokes": 13,
    "jlpt": "N3",
    "examples": [
      {
        "word": "地下鉄",
        "reading": "ちかてつ",
        "meaning": "Subway, underground"
      }
    ]
  },
  "幹": {
    "char": "幹",
    "meaning": "tree trunk, main part, talent",
    "onyomi": "カン",
    "kunyomi": "みき",
    "strokes": 13,
    "jlpt": "N2",
    "examples": [
      {
        "word": "新幹線",
        "reading": "しんかんせん",
        "meaning": "Bullet train"
      }
    ]
  },
  "線": {
    "char": "線",
    "meaning": "line, track",
    "onyomi": "セン",
    "kunyomi": "すじ",
    "strokes": 15,
    "jlpt": "N3",
    "examples": [
      {
        "word": "新幹線",
        "reading": "しんかんせん",
        "meaning": "Bullet train"
      },
      {
        "word": "線",
        "reading": "せん",
        "meaning": "line"
      }
    ]
  },
  "転": {
    "char": "転",
    "meaning": "revolve, turn around, change",
    "onyomi": "テン",
    "kunyomi": "ころ.がる, ころ.げる, ころ.がす, ころ.ぶ, まろ.ぶ, うたた, うつ.る, くる.めく",
    "strokes": 11,
    "jlpt": "N5",
    "examples": [
      {
        "word": "自転車",
        "reading": "じてんしゃ",
        "meaning": "Bicycle"
      }
    ]
  },
  "歩": {
    "char": "歩",
    "meaning": "walk, counter for steps",
    "onyomi": "ホ, ブ, フ",
    "kunyomi": "ある.く, あゆ.む",
    "strokes": 8,
    "jlpt": "N5",
    "examples": [
      {
        "word": "歩いて",
        "reading": "あるいて",
        "meaning": "on foot"
      }
    ]
  },
  "友": {
    "char": "友",
    "meaning": "friend",
    "onyomi": "ユウ",
    "kunyomi": "とも",
    "strokes": 4,
    "jlpt": "N4",
    "examples": [
      {
        "word": "友達",
        "reading": "ともだち",
        "meaning": "Friend"
      },
      {
        "word": "友出席します",
        "reading": "しゅっせきします",
        "meaning": "attend [a mceting]"
      }
    ]
  },
  "達": {
    "char": "達",
    "meaning": "accomplished, reach, arrive",
    "onyomi": "タツ, ダ",
    "kunyomi": "-たち",
    "strokes": 12,
    "jlpt": "N4",
    "examples": [
      {
        "word": "友達",
        "reading": "ともだち",
        "meaning": "Friend"
      }
    ]
  },
  "族": {
    "char": "族",
    "meaning": "tribe, family",
    "onyomi": "ゾク",
    "kunyomi": "-",
    "strokes": 11,
    "jlpt": "N5",
    "examples": [
      {
        "word": "家族",
        "reading": "かぞく",
        "meaning": "Family"
      }
    ]
  },
  "一": {
    "char": "一",
    "meaning": "one, one radical (no.1)",
    "onyomi": "イチ, イツ",
    "kunyomi": "ひと-, ひと.つ",
    "strokes": 1,
    "jlpt": "N4",
    "examples": [
      {
        "word": "一人で",
        "reading": "ひとりで",
        "meaning": "alone, by oneself"
      },
      {
        "word": "一弁 ~",
        "reading": "ーベん",
        "meaning": "dialect"
      },
      {
        "word": "一 ~",
        "reading": "こんな",
        "meaning": "like this"
      }
    ]
  },
  "見": {
    "char": "見",
    "meaning": "see, hopes, chances",
    "onyomi": "ケン",
    "kunyomi": "み.る, み.える, み.せる",
    "strokes": 7,
    "jlpt": "N4",
    "examples": [
      {
        "word": "見ます、診ます",
        "reading": "みます",
        "meaning": "check"
      },
      {
        "word": "見えます",
        "reading": "みえます",
        "meaning": "ja mountain] can be seen"
      },
      {
        "word": "見つけます",
        "reading": "みつけます",
        "meaning": "find"
      }
    ]
  },
  "診": {
    "char": "診",
    "meaning": "checkup, seeing, diagnose",
    "onyomi": "シン",
    "kunyomi": "み.る",
    "strokes": 12,
    "jlpt": "N2",
    "examples": [
      {
        "word": "見ます、診ます",
        "reading": "みます",
        "meaning": "check"
      }
    ]
  },
  "探": {
    "char": "探",
    "meaning": "grope, search, look for",
    "onyomi": "タン",
    "kunyomi": "さぐ.る, さが.す",
    "strokes": 11,
    "jlpt": "N4",
    "examples": [
      {
        "word": "探します、援します",
        "reading": "さがします",
        "meaning": "look for, search"
      }
    ]
  },
  "援": {
    "char": "援",
    "meaning": "abet, help, save",
    "onyomi": "エン",
    "kunyomi": "-",
    "strokes": 12,
    "jlpt": "N2",
    "examples": [
      {
        "word": "探します、援します",
        "reading": "さがします",
        "meaning": "look for, search"
      }
    ]
  },
  "遅": {
    "char": "遅",
    "meaning": "slow, late, back",
    "onyomi": "チ",
    "kunyomi": "おく.れる, おく.らす, おそ.い",
    "strokes": 12,
    "jlpt": "N4",
    "examples": [
      {
        "word": "遅れます",
        "reading": "おくれます",
        "meaning": "be late [for an appointment, etc.]"
      },
      {
        "word": "遅く",
        "reading": "おそく",
        "meaning": "late (ime)"
      },
      {
        "word": "遅刻します",
        "reading": "ちこくします",
        "meaning": "be late, come late"
      }
    ]
  },
  "合": {
    "char": "合",
    "meaning": "fit, suit, join",
    "onyomi": "ゴウ, ガッ, カッ",
    "kunyomi": "あ.う, -あ.う, あ.い, あい-, -あ.い, -あい, あ.わす, あ.わせる, -あ.わせる",
    "strokes": 6,
    "jlpt": "N4",
    "examples": [
      {
        "word": "合います",
        "reading": "まに あいます MI",
        "meaning": "beintme [for an appointment, efc.]"
      },
      {
        "word": "都合が いい",
        "reading": "つごうが いい",
        "meaning": "convenient (concerning time)"
      },
      {
        "word": "都合が Bry",
        "reading": "つごうが わるい",
        "meaning": "inconvenient (concerning time)"
      }
    ]
  },
  "参": {
    "char": "参",
    "meaning": "nonplussed, three (in documents), going",
    "onyomi": "サン, シン",
    "kunyomi": "まい.る, まい-, まじわる, みつ",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "参加します",
        "reading": "さんかします",
        "meaning": "attend [a party]"
      },
      {
        "word": "参ります",
        "reading": "まいリます",
        "meaning": "go, come (humble equivalent of いきます and"
      }
    ]
  },
  "加": {
    "char": "加",
    "meaning": "add, addition, increase",
    "onyomi": "カ",
    "kunyomi": "くわ.える, くわ.わる",
    "strokes": 5,
    "jlpt": "N4",
    "examples": [
      {
        "word": "参加します",
        "reading": "さんかします",
        "meaning": "attend [a party]"
      }
    ]
  },
  "申": {
    "char": "申",
    "meaning": "have the honor to, sign of the monkey, 3-5PM",
    "onyomi": "シン",
    "kunyomi": "もう.す, もう.し-, さる",
    "strokes": 5,
    "jlpt": "N4",
    "examples": [
      {
        "word": "申し込みます",
        "reading": "もうしこみます",
        "meaning": "apply for, enter for"
      },
      {
        "word": "申し込み",
        "reading": "もうしこみ",
        "meaning": "application"
      },
      {
        "word": "申します",
        "reading": "もうします",
        "meaning": "say (bumble equivalentofいいます)"
      }
    ]
  },
  "込": {
    "char": "込",
    "meaning": "crowded, mixture, in bulk",
    "onyomi": "-",
    "kunyomi": "-こ.む, こ.む, こ.み, -こ.み, こ.める",
    "strokes": 5,
    "jlpt": "N4",
    "examples": [
      {
        "word": "申し込みます",
        "reading": "もうしこみます",
        "meaning": "apply for, enter for"
      },
      {
        "word": "込みます [",
        "reading": "こみます",
        "meaning": "a road] get crowded"
      },
      {
        "word": "申し込み",
        "reading": "もうしこみ",
        "meaning": "application"
      }
    ]
  },
  "都": {
    "char": "都",
    "meaning": "metropolis, capital, all",
    "onyomi": "ト, ツ",
    "kunyomi": "みやこ",
    "strokes": 11,
    "jlpt": "N4",
    "examples": [
      {
        "word": "都合が いい",
        "reading": "つごうが いい",
        "meaning": "convenient (concerning time)"
      },
      {
        "word": "都合が Bry",
        "reading": "つごうが わるい",
        "meaning": "inconvenient (concerning time)"
      }
    ]
  },
  "気": {
    "char": "気",
    "meaning": "spirit, mind, air",
    "onyomi": "キ, ケ",
    "kunyomi": "いき, き",
    "strokes": 6,
    "jlpt": "N4",
    "examples": [
      {
        "word": "気分が いい",
        "reading": "きぶんが いい",
        "meaning": "feel well"
      },
      {
        "word": "気分が悪い",
        "reading": "きぶんが わるい",
        "meaning": "feel ill"
      },
      {
        "word": "気持ちが いい",
        "reading": "きもちが いい",
        "meaning": "pleasant, agrccable"
      }
    ]
  },
  "悪": {
    "char": "悪",
    "meaning": "bad, vice, rascal",
    "onyomi": "アク, オ",
    "kunyomi": "わる.い, わる-, あ.し, にく.い, -にく.い, ああ, いずくに, いずくんぞ, にく.む",
    "strokes": 11,
    "jlpt": "N5",
    "examples": [
      {
        "word": "気分が悪い",
        "reading": "きぶんが わるい",
        "meaning": "feel ill"
      }
    ]
  },
  "運": {
    "char": "運",
    "meaning": "carry, luck, destiny",
    "onyomi": "ウン",
    "kunyomi": "はこ.ぶ",
    "strokes": 12,
    "jlpt": "N5",
    "examples": [
      {
        "word": "運動会",
        "reading": "うんどうかい",
        "meaning": "athletic meeting"
      },
      {
        "word": "運動します",
        "reading": "うんどうします MW",
        "meaning": "take exercise"
      }
    ]
  },
  "弁": {
    "char": "弁",
    "meaning": "valve, petal, braid",
    "onyomi": "ベン, ヘン",
    "kunyomi": "かんむり, わきま.える, わ.ける, はなびら, あらそ.う",
    "strokes": 5,
    "jlpt": "N2",
    "examples": [
      {
        "word": "一弁 ~",
        "reading": "ーベん",
        "meaning": "dialect"
      },
      {
        "word": "弁護士",
        "reading": "べんごし",
        "meaning": "lawyer, attorney"
      }
    ]
  },
  "度": {
    "char": "度",
    "meaning": "degrees, occurrence, time",
    "onyomi": "ド, ト, タク",
    "kunyomi": "たび, -た.い",
    "strokes": 9,
    "jlpt": "N5",
    "examples": [
      {
        "word": "今度",
        "reading": "こんど",
        "meaning": "next time, another time"
      }
    ]
  },
  "直": {
    "char": "直",
    "meaning": "straightaway, honesty, frankness",
    "onyomi": "チョク, ジキ, ジカ",
    "kunyomi": "ただ.ちに, なお.す, -なお.す, なお.る, なお.き, す.ぐ",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "直接",
        "reading": "ちょくせつ",
        "meaning": "directly"
      }
    ]
  },
  "接": {
    "char": "接",
    "meaning": "touch, contact, adjoin",
    "onyomi": "セツ, ショウ",
    "kunyomi": "つ.ぐ",
    "strokes": 11,
    "jlpt": "N3",
    "examples": [
      {
        "word": "直接",
        "reading": "ちょくせつ",
        "meaning": "directly"
      }
    ]
  },
  "飼": {
    "char": "飼",
    "meaning": "domesticate, raise, keep",
    "onyomi": "シ",
    "kunyomi": "か.う",
    "strokes": 13,
    "jlpt": "N2",
    "examples": [
      {
        "word": "飼います",
        "reading": "かいます J",
        "meaning": "keep (a pet), raise (an animal)"
      }
    ]
  },
  "建": {
    "char": "建",
    "meaning": "build",
    "onyomi": "ケン, コン",
    "kunyomi": "た.てる, た.て, -だ.て, た.つ",
    "strokes": 9,
    "jlpt": "N5",
    "examples": [
      {
        "word": "建てます",
        "reading": "たてます",
        "meaning": "build"
      }
    ]
  },
  "去": {
    "char": "去",
    "meaning": "gone, past, quit",
    "onyomi": "キョ, コ",
    "kunyomi": "さ.る, -さ.る",
    "strokes": 5,
    "jlpt": "N5",
    "examples": [
      {
        "word": "去ります",
        "reading": "はしります",
        "meaning": "mun, drive (along a road]"
      }
    ]
  },
  "取": {
    "char": "取",
    "meaning": "take, fetch, take up",
    "onyomi": "シュ",
    "kunyomi": "と.る, と.り, と.り-, とり, -ど.り",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "取ります",
        "reading": "とります",
        "meaning": "take [a holiday]"
      },
      {
        "word": "取り替えます",
        "reading": "とりかえます",
        "meaning": "exchange"
      }
    ]
  },
  "開": {
    "char": "開",
    "meaning": "open, unfold, unseal",
    "onyomi": "カイ",
    "kunyomi": "ひら.く, ひら.き, -びら.き, ひら.ける, あ.く, あ.ける",
    "strokes": 12,
    "jlpt": "N5",
    "examples": [
      {
        "word": "開こえます (",
        "reading": "きこえます",
        "meaning": "a sound] can be heard"
      },
      {
        "word": "開きます",
        "reading": "ひらさきます",
        "meaning": "set up [a class]. open, hold"
      },
      {
        "word": "開きます [",
        "reading": "あきます",
        "meaning": "a door] open"
      }
    ]
  },
  "空": {
    "char": "空",
    "meaning": "empty, sky, void",
    "onyomi": "クウ",
    "kunyomi": "そら, あ.く, あ.き, あ.ける, から, す.く, す.かす, むな.しい",
    "strokes": 8,
    "jlpt": "N5",
    "examples": [
      {
        "word": "[空港がー]",
        "reading": "[くうこうが-ー]",
        "meaning": "existence"
      }
    ]
  },
  "港": {
    "char": "港",
    "meaning": "harbor",
    "onyomi": "コウ",
    "kunyomi": "みなと",
    "strokes": 12,
    "jlpt": "N4",
    "examples": [
      {
        "word": "[空港がー]",
        "reading": "[くうこうが-ー]",
        "meaning": "existence"
      },
      {
        "word": "港",
        "reading": "みなと",
        "meaning": "port harbor"
      }
    ]
  },
  "島": {
    "char": "島",
    "meaning": "island",
    "onyomi": "トウ",
    "kunyomi": "しま",
    "strokes": 10,
    "jlpt": "N3",
    "examples": [
      {
        "word": "島",
        "reading": "とり",
        "meaning": "bird facet: Age,"
      }
    ]
  },
  "声": {
    "char": "声",
    "meaning": "voice",
    "onyomi": "セイ, ショウ",
    "kunyomi": "こえ, こわ-",
    "strokes": 7,
    "jlpt": "N4",
    "examples": [
      {
        "word": "声",
        "reading": "こえ",
        "meaning": "voice"
      }
    ]
  },
  "波": {
    "char": "波",
    "meaning": "waves, billows, Poland",
    "onyomi": "ハ",
    "kunyomi": "なみ",
    "strokes": 8,
    "jlpt": "N3",
    "examples": [
      {
        "word": "波 Wave -",
        "reading": "なみ",
        "meaning": "a"
      },
      {
        "word": "お波れさまでした。 Thank",
        "reading": "おつかれさまでした。",
        "meaning": "you for your hard work. (used to"
      }
    ]
  },
  "花": {
    "char": "花",
    "meaning": "flower",
    "onyomi": "カ, ケ",
    "kunyomi": "はな",
    "strokes": 7,
    "jlpt": "N5",
    "examples": [
      {
        "word": "花火",
        "reading": "はなび",
        "meaning": "fireworks Fh Pie na qj"
      },
      {
        "word": "花瓶",
        "reading": "かびん",
        "meaning": "vase"
      }
    ]
  },
  "火": {
    "char": "火",
    "meaning": "fire",
    "onyomi": "カ",
    "kunyomi": "ひ, -び, ほ-",
    "strokes": 4,
    "jlpt": "N4",
    "examples": [
      {
        "word": "花火",
        "reading": "はなび",
        "meaning": "fireworks Fh Pie na qj"
      },
      {
        "word": "火事",
        "reading": "OU",
        "meaning": "fire"
      },
      {
        "word": "火",
        "reading": "ひ",
        "meaning": "fire"
      }
    ]
  },
  "音": {
    "char": "音",
    "meaning": "sound, noise",
    "onyomi": "オン, イン, -ノン",
    "kunyomi": "おと, ね",
    "strokes": 9,
    "jlpt": "N5",
    "examples": [
      {
        "word": "音",
        "reading": "むおかし",
        "meaning": "old days, ancient times"
      },
      {
        "word": "発音",
        "reading": "はつおん",
        "meaning": "pronunciation"
      },
      {
        "word": "音楽",
        "reading": "おんがくか",
        "meaning": "musician"
      }
    ]
  },
  "道": {
    "char": "道",
    "meaning": "road-way, street, district",
    "onyomi": "ドウ, トウ",
    "kunyomi": "みち, いう",
    "strokes": 12,
    "jlpt": "N5",
    "examples": [
      {
        "word": "道具",
        "reading": "どうで",
        "meaning": "tool, instrument, equipment"
      },
      {
        "word": "水道",
        "reading": "すいどう",
        "meaning": "faucet, tap, water supply"
      },
      {
        "word": "剣道",
        "reading": "けんどう",
        "meaning": "kendo (Japanese style fencing)"
      }
    ]
  },
  "具": {
    "char": "具",
    "meaning": "tool, utensil, means",
    "onyomi": "グ",
    "kunyomi": "そな.える, つぶさ.に",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "道具",
        "reading": "どうで",
        "meaning": "tool, instrument, equipment"
      },
      {
        "word": "家具",
        "reading": "| かぐ",
        "meaning": "furniture"
      }
    ]
  },
  "販": {
    "char": "販",
    "meaning": "marketing, sell, trade",
    "onyomi": "ハン",
    "kunyomi": "-",
    "strokes": 11,
    "jlpt": "N3",
    "examples": [
      {
        "word": "自動販売機",
        "reading": "じどうはんばいき",
        "meaning": "vending machine"
      },
      {
        "word": "通信販売",
        "reading": "つう しんはんばい",
        "meaning": "mail order, mail-order sales"
      }
    ]
  },
  "通": {
    "char": "通",
    "meaning": "traffic, pass through, avenue",
    "onyomi": "ツウ, ツ",
    "kunyomi": "とお.る, とお.り, -とお.り, -どお.り, とお.す, とお.し, -どお.し, かよ.う",
    "strokes": 10,
    "jlpt": "N5",
    "examples": [
      {
        "word": "通信販売",
        "reading": "つう しんはんばい",
        "meaning": "mail order, mail-order sales"
      },
      {
        "word": "通います て.",
        "reading": "かよいます",
        "meaning": "goftoand from [university]"
      },
      {
        "word": "通ります",
        "reading": "とおります",
        "meaning": "pass [along a street]"
      }
    ]
  },
  "信": {
    "char": "信",
    "meaning": "faith, truth, fidelity",
    "onyomi": "シン",
    "kunyomi": "-",
    "strokes": 9,
    "jlpt": "N4",
    "examples": [
      {
        "word": "通信販売",
        "reading": "つう しんはんばい",
        "meaning": "mail order, mail-order sales"
      },
      {
        "word": "信じます",
        "reading": "しんじます",
        "meaning": "believe, trust"
      }
    ]
  },
  "台": {
    "char": "台",
    "meaning": "pedestal, a stand, counter for machines and vehicles",
    "onyomi": "ダイ, タイ",
    "kunyomi": "うてな, われ, つかさ",
    "strokes": 5,
    "jlpt": "N5",
    "examples": [
      {
        "word": "台所",
        "reading": "だいどころ",
        "meaning": "kitchen"
      }
    ]
  },
  "踊": {
    "char": "踊",
    "meaning": "jump, dance, leap",
    "onyomi": "ヨウ",
    "kunyomi": "おど.る",
    "strokes": 14,
    "jlpt": "N3",
    "examples": [
      {
        "word": "踊ります",
        "reading": "おどります",
        "meaning": "danee"
      },
      {
        "word": "金踊り Bon Festival",
        "reading": "| ぼんおどり",
        "meaning": "dance"
      }
    ]
  },
  "選": {
    "char": "選",
    "meaning": "elect, select, choose",
    "onyomi": "セン",
    "kunyomi": "えら.ぶ, え.る, よ.る",
    "strokes": 15,
    "jlpt": "N4",
    "examples": [
      {
        "word": "選びます",
        "reading": "えらびます",
        "meaning": "choose ="
      }
    ]
  },
  "優": {
    "char": "優",
    "meaning": "tenderness, excel, surpass",
    "onyomi": "ユウ, ウ",
    "kunyomi": "やさ.しい, すぐ.れる, まさ.る",
    "strokes": 17,
    "jlpt": "N4",
    "examples": [
      {
        "word": "優しい",
        "reading": "やさしい",
        "meaning": "gentle, kind"
      }
    ]
  },
  "習": {
    "char": "習",
    "meaning": "learn",
    "onyomi": "シュウ, ジュ",
    "kunyomi": "なら.う, なら.い",
    "strokes": 11,
    "jlpt": "N5",
    "examples": [
      {
        "word": "習慣",
        "reading": "しゅうかん",
        "meaning": "custom"
      },
      {
        "word": "予習します",
        "reading": "よしゅうします",
        "meaning": "prepare one’s lesson"
      }
    ]
  },
  "慣": {
    "char": "慣",
    "meaning": "accustomed, get used to, become experienced",
    "onyomi": "カン",
    "kunyomi": "な.れる, な.らす",
    "strokes": 14,
    "jlpt": "N4",
    "examples": [
      {
        "word": "習慣",
        "reading": "しゅうかん",
        "meaning": "custom"
      },
      {
        "word": "慣れます",
        "reading": "なれれます",
        "meaning": "get accustomed to [the customs]"
      }
    ]
  },
  "経": {
    "char": "経",
    "meaning": "sutra, longitude, pass thru",
    "onyomi": "ケイ, キョウ, キン",
    "kunyomi": "へ.る, た.つ, たていと, はか.る, のり",
    "strokes": 11,
    "jlpt": "N4",
    "examples": [
      {
        "word": "経験",
        "reading": "けいけん",
        "meaning": "experience"
      }
    ]
  },
  "験": {
    "char": "験",
    "meaning": "verification, effect, testing",
    "onyomi": "ケン, ゲン",
    "kunyomi": "あかし, しるし, ため.す, ためし",
    "strokes": 18,
    "jlpt": "N5",
    "examples": [
      {
        "word": "経験",
        "reading": "けいけん",
        "meaning": "experience"
      }
    ]
  },
  "形": {
    "char": "形",
    "meaning": "shape, form, style",
    "onyomi": "ケイ, ギョウ",
    "kunyomi": "かた, -がた, かたち, なり",
    "strokes": 7,
    "jlpt": "N4",
    "examples": [
      {
        "word": "形",
        "reading": "かたち",
        "meaning": "form, shape"
      }
    ]
  },
  "色": {
    "char": "色",
    "meaning": "color",
    "onyomi": "ショク, シキ",
    "kunyomi": "いろ",
    "strokes": 6,
    "jlpt": "N5",
    "examples": [
      {
        "word": "色",
        "reading": "いろ",
        "meaning": "color"
      },
      {
        "word": "黄色",
        "reading": "きいろ",
        "meaning": "yellow (noun)"
      },
      {
        "word": "茶色",
        "reading": "ちゃいろ",
        "meaning": "brown (noun)"
      }
    ]
  },
  "味": {
    "char": "味",
    "meaning": "flavor, taste",
    "onyomi": "ミ",
    "kunyomi": "あじ, あじ.わう",
    "strokes": 8,
    "jlpt": "N5",
    "examples": [
      {
        "word": "味",
        "reading": "あじ",
        "meaning": "taste"
      },
      {
        "word": "正味",
        "reading": "きょうみ",
        "meaning": "interest"
      }
    ]
  },
  "品": {
    "char": "品",
    "meaning": "goods, refinement, dignity",
    "onyomi": "ヒン, ホン",
    "kunyomi": "しな",
    "strokes": 9,
    "jlpt": "N5",
    "examples": [
      {
        "word": "品物",
        "reading": "しなもの",
        "meaning": "goods"
      }
    ]
  },
  "物": {
    "char": "物",
    "meaning": "thing, object, matter",
    "onyomi": "ブツ, モツ",
    "kunyomi": "もの, もの-",
    "strokes": 8,
    "jlpt": "N5",
    "examples": [
      {
        "word": "品物",
        "reading": "しなもの",
        "meaning": "goods"
      },
      {
        "word": "贈り物",
        "reading": "おくりもの",
        "meaning": "gift, present (てを します: give a present)"
      }
    ]
  },
  "値": {
    "char": "値",
    "meaning": "price, cost, value",
    "onyomi": "チ",
    "kunyomi": "ね, あたい",
    "strokes": 10,
    "jlpt": "N4",
    "examples": [
      {
        "word": "値段",
        "reading": "ねだん",
        "meaning": "price"
      }
    ]
  },
  "給": {
    "char": "給",
    "meaning": "salary, wage, gift",
    "onyomi": "キュウ",
    "kunyomi": "たま.う, たも.う, -たま.え",
    "strokes": 12,
    "jlpt": "N4",
    "examples": [
      {
        "word": "給料",
        "reading": "さきゅうリりょう",
        "meaning": "salary"
      }
    ]
  },
  "料": {
    "char": "料",
    "meaning": "fee, materials",
    "onyomi": "リョウ",
    "kunyomi": "-",
    "strokes": 10,
    "jlpt": "N5",
    "examples": [
      {
        "word": "給料",
        "reading": "さきゅうリりょう",
        "meaning": "salary"
      },
      {
        "word": "無料",
        "reading": "むりょう",
        "meaning": "free of charge"
      },
      {
        "word": "原料",
        "reading": "げんりょう",
        "meaning": "raw material"
      }
    ]
  },
  "番": {
    "char": "番",
    "meaning": "turn, number in a series",
    "onyomi": "バン",
    "kunyomi": "つが.い",
    "strokes": 12,
    "jlpt": "N4",
    "examples": [
      {
        "word": "番細",
        "reading": "ばんでぐみ",
        "meaning": "program"
      },
      {
        "word": "交番",
        "reading": "こうばん",
        "meaning": "police box"
      }
    ]
  },
  "細": {
    "char": "細",
    "meaning": "dainty, get thin, taper",
    "onyomi": "サイ",
    "kunyomi": "ほそ.い, ほそ.る, こま.か, こま.かい",
    "strokes": 11,
    "jlpt": "N3",
    "examples": [
      {
        "word": "番細",
        "reading": "ばんでぐみ",
        "meaning": "program"
      },
      {
        "word": "細い",
        "reading": "| ほそい",
        "meaning": "thin (of small diameter)"
      },
      {
        "word": "細かい",
        "reading": "こまかい",
        "meaning": "small, fine"
      }
    ]
  },
  "小": {
    "char": "小",
    "meaning": "little, small",
    "onyomi": "ショウ",
    "kunyomi": "ちい.さい, こ-, お-, さ-",
    "strokes": 3,
    "jlpt": "N4",
    "examples": [
      {
        "word": "小説",
        "reading": "しょうせつ",
        "meaning": "novel"
      },
      {
        "word": "小説家",
        "reading": "しょうせつか",
        "meaning": "novelist"
      },
      {
        "word": "一 小さな ~",
        "reading": "ちいさな",
        "meaning": "small ~"
      }
    ]
  },
  "説": {
    "char": "説",
    "meaning": "opinion, theory, explanation",
    "onyomi": "セツ, ゼイ",
    "kunyomi": "と.く",
    "strokes": 14,
    "jlpt": "N4",
    "examples": [
      {
        "word": "小説",
        "reading": "しょうせつ",
        "meaning": "novel"
      },
      {
        "word": "小説家",
        "reading": "しょうせつか",
        "meaning": "novelist"
      },
      {
        "word": "説明書",
        "reading": "せつめいしょ",
        "meaning": "explanatory pamphlet, instruction book,"
      }
    ]
  },
  "管": {
    "char": "管",
    "meaning": "pipe, tube, wind instrument",
    "onyomi": "カン",
    "kunyomi": "くだ",
    "strokes": 14,
    "jlpt": "N3",
    "examples": [
      {
        "word": "管理人",
        "reading": "かんりにん",
        "meaning": "janitor"
      },
      {
        "word": "-管 ー",
        "reading": "ーばい",
        "meaning": "times"
      }
    ]
  },
  "理": {
    "char": "理",
    "meaning": "logic, arrangement, reason",
    "onyomi": "リ",
    "kunyomi": "ことわり",
    "strokes": 11,
    "jlpt": "N5",
    "examples": [
      {
        "word": "管理人",
        "reading": "かんりにん",
        "meaning": "janitor"
      },
      {
        "word": "理由",
        "reading": "りゆ",
        "meaning": "reason"
      }
    ]
  },
  "将": {
    "char": "将",
    "meaning": "leader, commander, general",
    "onyomi": "ショウ, ソウ",
    "kunyomi": "まさ.に, はた, まさ, ひきい.る, もって",
    "strokes": 10,
    "jlpt": "N3",
    "examples": [
      {
        "word": "将来",
        "reading": "しょうらい",
        "meaning": "future"
      }
    ]
  },
  "願": {
    "char": "願",
    "meaning": "petition, request, vow",
    "onyomi": "ガン",
    "kunyomi": "ねが.う, -ねがい",
    "strokes": 19,
    "jlpt": "N4",
    "examples": [
      {
        "word": "お願いが あるんですが。 [",
        "reading": "[ちょっと]",
        "meaning": "havea favor to ask."
      }
    ]
  },
  "閉": {
    "char": "閉",
    "meaning": "closed, shut",
    "onyomi": "ヘイ",
    "kunyomi": "と.じる, と.ざす, し.める, し.まる, た.てる",
    "strokes": 11,
    "jlpt": "N4",
    "examples": [
      {
        "word": "閉まります [",
        "reading": "しまります",
        "meaning": "a door] close, shut"
      }
    ]
  },
  "消": {
    "char": "消",
    "meaning": "extinguish, blow out, turn off",
    "onyomi": "ショウ",
    "kunyomi": "き.える, け.す",
    "strokes": 10,
    "jlpt": "N4",
    "examples": [
      {
        "word": "消えます [",
        "reading": "きえます",
        "meaning": "a light] go off, disappear"
      }
    ]
  },
  "壊": {
    "char": "壊",
    "meaning": "demolition, break, destroy",
    "onyomi": "カイ, エ",
    "kunyomi": "こわ.す, こわ.れる, やぶ.る",
    "strokes": 16,
    "jlpt": "N2",
    "examples": [
      {
        "word": "壊れます [",
        "reading": "こわれます II",
        "meaning": "a chair] break"
      },
      {
        "word": "壊します",
        "reading": "こわします",
        "meaning": "break, destroy"
      }
    ]
  },
  "割": {
    "char": "割",
    "meaning": "proportion, comparatively, divide",
    "onyomi": "カツ",
    "kunyomi": "わ.る, わり, わ.り, わ.れる, さ.く",
    "strokes": 12,
    "jlpt": "N4",
    "examples": [
      {
        "word": "割れます [",
        "reading": "われます",
        "meaning": "a glass] brcak, smash"
      }
    ]
  },
  "折": {
    "char": "折",
    "meaning": "fold, break, fracture",
    "onyomi": "セツ, シャク",
    "kunyomi": "お.る, おり, お.り, -お.り, お.れる",
    "strokes": 7,
    "jlpt": "N4",
    "examples": [
      {
        "word": "折れます [",
        "reading": "おれます",
        "meaning": "a tree] break, snap"
      },
      {
        "word": "折ります",
        "reading": "おります",
        "meaning": "bend, fold, break, snap"
      }
    ]
  },
  "汚": {
    "char": "汚",
    "meaning": "dirty, pollute, disgrace",
    "onyomi": "オ",
    "kunyomi": "けが.す, けが.れる, けが.らわしい, よご.す, よご.れる, きたな.い",
    "strokes": 6,
    "jlpt": "N3",
    "examples": [
      {
        "word": "汚れます [",
        "reading": "よごれます",
        "meaning": "the clothes] get dirty"
      },
      {
        "word": "汚します",
        "reading": "よごします",
        "meaning": "make ~ dirty"
      },
      {
        "word": "汚い",
        "reading": "きたない",
        "meaning": "dirty"
      }
    ]
  },
  "外": {
    "char": "外",
    "meaning": "outside",
    "onyomi": "ガイ, ゲ",
    "kunyomi": "そと, ほか, はず.す, はず.れる, と-",
    "strokes": 5,
    "jlpt": "N4",
    "examples": [
      {
        "word": "外れます [",
        "reading": "はずれます HL",
        "meaning": "a button] be undone"
      },
      {
        "word": "外します",
        "reading": "はずします",
        "meaning": "be away [from one’s desk]"
      },
      {
        "word": "海外",
        "reading": "| かいがい",
        "meaning": "overseas"
      }
    ]
  },
  "掛": {
    "char": "掛",
    "meaning": "hang, suspend, depend",
    "onyomi": "カイ, ケイ",
    "kunyomi": "か.ける, -か.ける, か.け, -か.け, -が.け, か.かる, -か.かる, -が.かる, か.かり, -が.かり, かかり, -がかり",
    "strokes": 11,
    "jlpt": "N4",
    "examples": [
      {
        "word": "掛かります",
        "reading": "。 かかります",
        "meaning": "be locked"
      },
      {
        "word": "掛けます",
        "reading": "かけます",
        "meaning": "hang"
      }
    ]
  },
  "亜": {
    "char": "亜",
    "meaning": "Asia, rank next, come after",
    "onyomi": "ア",
    "kunyomi": "つ.ぐ",
    "strokes": 7,
    "jlpt": "N2",
    "examples": [
      {
        "word": "[お]亜",
        "reading": "[お]さら",
        "meaning": "plate。 dish"
      }
    ]
  },
  "財": {
    "char": "財",
    "meaning": "property, money, wealth",
    "onyomi": "ザイ, サイ, ゾク",
    "kunyomi": "たから",
    "strokes": 10,
    "jlpt": "N4",
    "examples": [
      {
        "word": "財布",
        "reading": "さいふ、",
        "meaning": "wallet, purse"
      }
    ]
  },
  "布": {
    "char": "布",
    "meaning": "linen, cloth, spread",
    "onyomi": "フ, ホ",
    "kunyomi": "ぬの, し.く, きれ",
    "strokes": 5,
    "jlpt": "N3",
    "examples": [
      {
        "word": "財布",
        "reading": "さいふ、",
        "meaning": "wallet, purse"
      }
    ]
  },
  "枝": {
    "char": "枝",
    "meaning": "bough, branch, twig",
    "onyomi": "シ",
    "kunyomi": "えだ",
    "strokes": 8,
    "jlpt": "N3",
    "examples": [
      {
        "word": "枝",
        "reading": "えだ",
        "meaning": "branch, twig"
      }
    ]
  },
  "飾": {
    "char": "飾",
    "meaning": "decorate, ornament, adorn",
    "onyomi": "ショク",
    "kunyomi": "かざ.る, かざ.り",
    "strokes": 13,
    "jlpt": "N2",
    "examples": [
      {
        "word": "飾ります",
        "reading": "かざります",
        "meaning": "display, decorate"
      }
    ]
  },
  "並": {
    "char": "並",
    "meaning": "row, and, besides",
    "onyomi": "ヘイ, ホウ",
    "kunyomi": "な.み, なみ, なら.べる, なら.ぶ, なら.びに",
    "strokes": 8,
    "jlpt": "N3",
    "examples": [
      {
        "word": "並べます",
        "reading": "ならべます",
        "meaning": "arrange, line up"
      }
    ]
  },
  "植": {
    "char": "植",
    "meaning": "plant",
    "onyomi": "ショク",
    "kunyomi": "う.える, う.わる",
    "strokes": 12,
    "jlpt": "N3",
    "examples": [
      {
        "word": "植えます",
        "reading": "うえます D",
        "meaning": "plant"
      }
    ]
  },
  "戻": {
    "char": "戻",
    "meaning": "re-, return, revert",
    "onyomi": "レイ",
    "kunyomi": "もど.す, もど.る",
    "strokes": 7,
    "jlpt": "N4",
    "examples": [
      {
        "word": "戻します",
        "reading": "もどします",
        "meaning": "return, put ~ back"
      },
      {
        "word": "戻ります",
        "reading": "もどります",
        "meaning": "retumn"
      }
    ]
  },
  "片": {
    "char": "片",
    "meaning": "one-sided, leaf, sheet",
    "onyomi": "ヘン",
    "kunyomi": "かた-, かた",
    "strokes": 4,
    "jlpt": "N3",
    "examples": [
      {
        "word": "片づけます",
        "reading": "かたづけます IL",
        "meaning": "put things in order, tidy up"
      }
    ]
  },
  "決": {
    "char": "決",
    "meaning": "decide, fix, agree upon",
    "onyomi": "ケツ",
    "kunyomi": "き.める, -ぎ.め, き.まる, さ.く",
    "strokes": 7,
    "jlpt": "N4",
    "examples": [
      {
        "word": "決めます",
        "reading": "きめます HL",
        "meaning": "decide"
      }
    ]
  },
  "知": {
    "char": "知",
    "meaning": "know, wisdom",
    "onyomi": "チ",
    "kunyomi": "し.る, し.らせる",
    "strokes": 8,
    "jlpt": "N5",
    "examples": [
      {
        "word": "知らせます",
        "reading": "しらせます U",
        "meaning": "inform"
      },
      {
        "word": "お知らせ",
        "reading": "おしらせ",
        "meaning": "notice"
      }
    ]
  },
  "相": {
    "char": "相",
    "meaning": "inter-, mutual, together",
    "onyomi": "ソウ, ショウ",
    "kunyomi": "あい-",
    "strokes": 9,
    "jlpt": "N4",
    "examples": [
      {
        "word": "相談します",
        "reading": "そうだんします MW",
        "meaning": "consult, discuss"
      }
    ]
  },
  "談": {
    "char": "談",
    "meaning": "discuss, talk",
    "onyomi": "ダン",
    "kunyomi": "-",
    "strokes": 15,
    "jlpt": "N4",
    "examples": [
      {
        "word": "相談します",
        "reading": "そうだんします MW",
        "meaning": "consult, discuss"
      }
    ]
  },
  "予": {
    "char": "予",
    "meaning": "beforehand, previous, myself",
    "onyomi": "ヨ, シャ",
    "kunyomi": "あらかじ.め",
    "strokes": 4,
    "jlpt": "N4",
    "examples": [
      {
        "word": "予習します",
        "reading": "よしゅうします",
        "meaning": "prepare one’s lesson"
      },
      {
        "word": "予定",
        "reading": "よてい",
        "meaning": "plan, schedule"
      },
      {
        "word": "天気予報",
        "reading": "てんきよほう",
        "meaning": "weather forecast"
      }
    ]
  },
  "講": {
    "char": "講",
    "meaning": "lecture, club, association",
    "onyomi": "コウ",
    "kunyomi": "-",
    "strokes": 17,
    "jlpt": "N3",
    "examples": [
      {
        "word": "講義",
        "reading": "こうぎ",
        "meaning": "lecture"
      }
    ]
  },
  "義": {
    "char": "義",
    "meaning": "righteousness, justice, morality",
    "onyomi": "ギ",
    "kunyomi": "-",
    "strokes": 13,
    "jlpt": "N2",
    "examples": [
      {
        "word": "講義",
        "reading": "こうぎ",
        "meaning": "lecture"
      }
    ]
  },
  "定": {
    "char": "定",
    "meaning": "determine, fix, establish",
    "onyomi": "テイ, ジョウ",
    "kunyomi": "さだ.める, さだ.まる, さだ.か",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "予定",
        "reading": "よてい",
        "meaning": "plan, schedule"
      }
    ]
  },
  "瓶": {
    "char": "瓶",
    "meaning": "bottle, vial, jar",
    "onyomi": "ビン, ヘイ",
    "kunyomi": "かめ",
    "strokes": 11,
    "jlpt": "N3",
    "examples": [
      {
        "word": "花瓶",
        "reading": "かびん",
        "meaning": "vase"
      }
    ]
  },
  "鏡": {
    "char": "鏡",
    "meaning": "mirror, speculum, barrel-head",
    "onyomi": "キョウ, ケイ",
    "kunyomi": "かがみ",
    "strokes": 19,
    "jlpt": "N2",
    "examples": [
      {
        "word": "鏡",
        "reading": "かがみ",
        "meaning": "mirror"
      }
    ]
  },
  "引": {
    "char": "引",
    "meaning": "pull, tug, jerk",
    "onyomi": "イン",
    "kunyomi": "ひ.く, ひ.ける",
    "strokes": 4,
    "jlpt": "N4",
    "examples": [
      {
        "word": "引き出し",
        "reading": "ひきだし",
        "meaning": "drawer"
      }
    ]
  },
  "出": {
    "char": "出",
    "meaning": "exit, leave, go out",
    "onyomi": "シュツ, スイ",
    "kunyomi": "で.る, -で, だ.す, -だ.す, い.でる, い.だす",
    "strokes": 5,
    "jlpt": "N4",
    "examples": [
      {
        "word": "引き出し",
        "reading": "ひきだし",
        "meaning": "drawer"
      },
      {
        "word": "友出席します",
        "reading": "しゅっせきします",
        "meaning": "attend [a mceting]"
      },
      {
        "word": "出ます",
        "reading": "でます HI",
        "meaning": "participate [in the game]"
      }
    ]
  },
  "云": {
    "char": "云",
    "meaning": "say",
    "onyomi": "ウン",
    "kunyomi": "い.う, ここに",
    "strokes": 4,
    "jlpt": "N4",
    "examples": [
      {
        "word": "云関",
        "reading": "げんかん",
        "meaning": "front door, porch, entrance hall"
      }
    ]
  },
  "関": {
    "char": "関",
    "meaning": "connection, barrier, gateway",
    "onyomi": "カン",
    "kunyomi": "せき, -ぜき, かか.わる, からくり, かんぬき",
    "strokes": 14,
    "jlpt": "N4",
    "examples": [
      {
        "word": "云関",
        "reading": "げんかん",
        "meaning": "front door, porch, entrance hall"
      },
      {
        "word": "関係",
        "reading": "かんけい",
        "meaning": "relation, connection"
      }
    ]
  },
  "廊": {
    "char": "廊",
    "meaning": "corridor, hall, tower",
    "onyomi": "ロウ",
    "kunyomi": "-",
    "strokes": 12,
    "jlpt": "N2",
    "examples": [
      {
        "word": "廊下",
        "reading": "るうか",
        "meaning": "corridor, hallway"
      }
    ]
  },
  "池": {
    "char": "池",
    "meaning": "pond, cistern, pool",
    "onyomi": "チ",
    "kunyomi": "いけ",
    "strokes": 6,
    "jlpt": "N3",
    "examples": [
      {
        "word": "池",
        "reading": "いけ",
        "meaning": "pond"
      }
    ]
  },
  "交": {
    "char": "交",
    "meaning": "mingle, mixing, association",
    "onyomi": "コウ",
    "kunyomi": "まじ.わる, まじ.える, ま.じる, まじ.る, ま.ざる, ま.ぜる, -か.う, か.わす, かわ.す, こもごも",
    "strokes": 6,
    "jlpt": "N4",
    "examples": [
      {
        "word": "交番",
        "reading": "こうばん",
        "meaning": "police box"
      }
    ]
  },
  "元": {
    "char": "元",
    "meaning": "beginning, former time, origin",
    "onyomi": "ゲン, ガン",
    "kunyomi": "もと",
    "strokes": 4,
    "jlpt": "N5",
    "examples": [
      {
        "word": "元の 所",
        "reading": "もとの ところ",
        "meaning": "original place"
      }
    ]
  },
  "周": {
    "char": "周",
    "meaning": "circumference, circuit, lap",
    "onyomi": "シュウ",
    "kunyomi": "まわ.り",
    "strokes": 8,
    "jlpt": "N3",
    "examples": [
      {
        "word": "周り",
        "reading": "まわりリ",
        "meaning": "round around"
      }
    ]
  },
  "真": {
    "char": "真",
    "meaning": "true, reality, Buddhist sect",
    "onyomi": "シン",
    "kunyomi": "ま, ま-, まこと",
    "strokes": 10,
    "jlpt": "N5",
    "examples": [
      {
        "word": "真ん中",
        "reading": "まんなか",
        "meaning": "center"
      }
    ]
  },
  "中": {
    "char": "中",
    "meaning": "in, inside, middle",
    "onyomi": "チュウ",
    "kunyomi": "なか, うち, あた.る",
    "strokes": 4,
    "jlpt": "N4",
    "examples": [
      {
        "word": "真ん中",
        "reading": "まんなか",
        "meaning": "center"
      },
      {
        "word": "営業中",
        "reading": "えいきぎょうちゅう",
        "meaning": "open for business"
      },
      {
        "word": "使用中",
        "reading": "しようちゅう",
        "meaning": "in use"
      }
    ]
  },
  "隅": {
    "char": "隅",
    "meaning": "corner, nook",
    "onyomi": "グウ",
    "kunyomi": "すみ",
    "strokes": 12,
    "jlpt": "N3",
    "examples": [
      {
        "word": "隅",
        "reading": "すみ",
        "meaning": "corer"
      }
    ]
  },
  "始": {
    "char": "始",
    "meaning": "commence, begin",
    "onyomi": "シ",
    "kunyomi": "はじ.める, -はじ.める, はじ.まる",
    "strokes": 8,
    "jlpt": "N5",
    "examples": [
      {
        "word": "始まります [",
        "reading": "はじまります",
        "meaning": "a ceremony] begin, start"
      }
    ]
  },
  "続": {
    "char": "続",
    "meaning": "continue, series, sequel",
    "onyomi": "ゾク, ショク, コウ, キョウ",
    "kunyomi": "つづ.く, つづ.ける, つぐ.ない",
    "strokes": 13,
    "jlpt": "N4",
    "examples": [
      {
        "word": "続けます",
        "reading": "つづけます L",
        "meaning": "continue"
      },
      {
        "word": "続きます {",
        "reading": "つづきます",
        "meaning": "high temperature] continue"
      }
    ]
  },
  "貼": {
    "char": "貼",
    "meaning": "stick, paste, apply",
    "onyomi": "テン, チョウ",
    "kunyomi": "は.る, つ.く",
    "strokes": 12,
    "jlpt": "N4",
    "examples": [
      {
        "word": "貼入学します",
        "reading": "にゅうがくします",
        "meaning": "cnter [a university]"
      }
    ]
  },
  "入": {
    "char": "入",
    "meaning": "enter, insert",
    "onyomi": "ニュウ, ジュ",
    "kunyomi": "い.る, -い.る, -い.り, い.れる, -い.れ, はい.る",
    "strokes": 2,
    "jlpt": "N4",
    "examples": [
      {
        "word": "貼入学します",
        "reading": "にゅうがくします",
        "meaning": "cnter [a university]"
      },
      {
        "word": "立入禁止 Kcep",
        "reading": "たちいリりきんし",
        "meaning": "out."
      },
      {
        "word": "輸入します",
        "reading": "ゆにゅうします DM",
        "meaning": "import"
      }
    ]
  },
  "席": {
    "char": "席",
    "meaning": "seat, mat, occasion",
    "onyomi": "セキ",
    "kunyomi": "むしろ",
    "strokes": 10,
    "jlpt": "N4",
    "examples": [
      {
        "word": "友出席します",
        "reading": "しゅっせきします",
        "meaning": "attend [a mceting]"
      },
      {
        "word": "席",
        "reading": "せき",
        "meaning": "seat"
      }
    ]
  },
  "連": {
    "char": "連",
    "meaning": "take along, lead, join",
    "onyomi": "レン",
    "kunyomi": "つら.なる, つら.ねる, つ.れる, -づ.れ",
    "strokes": 10,
    "jlpt": "N4",
    "examples": [
      {
        "word": "連休",
        "reading": "れんきゅう",
        "meaning": "consecutive holidays"
      }
    ]
  },
  "作": {
    "char": "作",
    "meaning": "make, production, prepare",
    "onyomi": "サク, サ",
    "kunyomi": "つく.る, つく.り, -づく.り",
    "strokes": 7,
    "jlpt": "N5",
    "examples": [
      {
        "word": "作文",
        "reading": "さくぶん",
        "meaning": "essay, Composition"
      }
    ]
  },
  "文": {
    "char": "文",
    "meaning": "sentence, literature, style",
    "onyomi": "ブン, モン",
    "kunyomi": "ふみ, あや",
    "strokes": 4,
    "jlpt": "N5",
    "examples": [
      {
        "word": "作文",
        "reading": "さくぶん",
        "meaning": "essay, Composition"
      },
      {
        "word": "文法",
        "reading": "ぶんぼう",
        "meaning": "grammar"
      },
      {
        "word": "文化",
        "reading": "ぶんか",
        "meaning": "culture"
      }
    ]
  },
  "結": {
    "char": "結",
    "meaning": "tie, bind, contract",
    "onyomi": "ケツ, ケチ",
    "kunyomi": "むす.ぶ, ゆ.う, ゆ.わえる",
    "strokes": 12,
    "jlpt": "N2",
    "examples": [
      {
        "word": "結婚式",
        "reading": "けっこんしき",
        "meaning": "wedding ceremony"
      }
    ]
  },
  "婚": {
    "char": "婚",
    "meaning": "marriage",
    "onyomi": "コン",
    "kunyomi": "-",
    "strokes": 11,
    "jlpt": "N4",
    "examples": [
      {
        "word": "結婚式",
        "reading": "けっこんしき",
        "meaning": "wedding ceremony"
      }
    ]
  },
  "式": {
    "char": "式",
    "meaning": "style, ceremony, rite",
    "onyomi": "シキ",
    "kunyomi": "-",
    "strokes": 6,
    "jlpt": "N4",
    "examples": [
      {
        "word": "結婚式",
        "reading": "けっこんしき",
        "meaning": "wedding ceremony"
      },
      {
        "word": "式",
        "reading": "しき",
        "meaning": "ceremony"
      }
    ]
  },
  "支": {
    "char": "支",
    "meaning": "branch, support, sustain",
    "onyomi": "シ",
    "kunyomi": "ささ.える, つか.える, か.う",
    "strokes": 4,
    "jlpt": "N4",
    "examples": [
      {
        "word": "支店",
        "reading": "してん",
        "meaning": "branch office"
      }
    ]
  },
  "店": {
    "char": "店",
    "meaning": "store, shop",
    "onyomi": "テン",
    "kunyomi": "みせ, たな",
    "strokes": 8,
    "jlpt": "N5",
    "examples": [
      {
        "word": "支店",
        "reading": "してん",
        "meaning": "branch office"
      }
    ]
  },
  "温": {
    "char": "温",
    "meaning": "warm",
    "onyomi": "オン",
    "kunyomi": "あたた.か, あたた.かい, あたた.まる, あたた.める, ぬく",
    "strokes": 12,
    "jlpt": "N3",
    "examples": [
      {
        "word": "温泉",
        "reading": "おんせん",
        "meaning": "hot spring, spa"
      },
      {
        "word": "体温る (",
        "reading": "たいおんけい",
        "meaning": "clinical) thermometer"
      }
    ]
  },
  "泉": {
    "char": "泉",
    "meaning": "spring, fountain",
    "onyomi": "セン",
    "kunyomi": "いずみ",
    "strokes": 9,
    "jlpt": "N3",
    "examples": [
      {
        "word": "温泉",
        "reading": "おんせん",
        "meaning": "hot spring, spa"
      }
    ]
  },
  "客": {
    "char": "客",
    "meaning": "guest, visitor, customer",
    "onyomi": "キャク, カク",
    "kunyomi": "-",
    "strokes": 9,
    "jlpt": "N4",
    "examples": [
      {
        "word": "お客[さん]",
        "reading": "おきゃく〈く[さん]",
        "meaning": "visitor, guest, customer, client"
      }
    ]
  },
  "方": {
    "char": "方",
    "meaning": "direction, person, alternative",
    "onyomi": "ホウ",
    "kunyomi": "かた, -かた, -がた",
    "strokes": 4,
    "jlpt": "N5",
    "examples": [
      {
        "word": "方",
        "reading": "~D ほう ーーの",
        "meaning": "place toward ~, dircction of ~"
      },
      {
        "word": "タ方",
        "reading": "ゆうがた",
        "meaning": "late afternoon"
      },
      {
        "word": "方法",
        "reading": "ほうはほう",
        "meaning": "method"
      }
    ]
  },
  "成": {
    "char": "成",
    "meaning": "turn into, become, get",
    "onyomi": "セイ, ジョウ",
    "kunyomi": "な.る, な.す, -な.す",
    "strokes": 6,
    "jlpt": "N4",
    "examples": [
      {
        "word": "成功します",
        "reading": "せいこうします MD",
        "meaning": "succeed"
      }
    ]
  },
  "功": {
    "char": "功",
    "meaning": "achievement, merits, success",
    "onyomi": "コウ, ク",
    "kunyomi": "いさお",
    "strokes": 5,
    "jlpt": "N2",
    "examples": [
      {
        "word": "成功します",
        "reading": "せいこうします MD",
        "meaning": "succeed"
      }
    ]
  },
  "愛": {
    "char": "愛",
    "meaning": "love, affection, favourite",
    "onyomi": "アイ",
    "kunyomi": "いと.しい, かな.しい, め.でる, お.しむ, まな",
    "strokes": 13,
    "jlpt": "N4",
    "examples": [
      {
        "word": "愛ります",
        "reading": "く《もります",
        "meaning": "get cloudy"
      }
    ]
  },
  "吹": {
    "char": "吹",
    "meaning": "blow, breathe, puff",
    "onyomi": "スイ",
    "kunyomi": "ふ.く",
    "strokes": 7,
    "jlpt": "N4",
    "examples": [
      {
        "word": "吹きます [",
        "reading": "ふきます",
        "meaning": "wind] blow"
      }
    ]
  },
  "数": {
    "char": "数",
    "meaning": "number, strength, fate",
    "onyomi": "スウ, ス, サク, ソク, シュ",
    "kunyomi": "かず, かぞ.える, しばしば, せ.める, わずらわ.しい",
    "strokes": 13,
    "jlpt": "N4",
    "examples": [
      {
        "word": "[数隊が一]",
        "reading": "Ltにこしょうが-ー]",
        "meaning": "be fixed, be repaired"
      },
      {
        "word": "数えます",
        "reading": "かぞえます",
        "meaning": "count"
      }
    ]
  },
  "隊": {
    "char": "隊",
    "meaning": "regiment, party, company",
    "onyomi": "タイ",
    "kunyomi": "-",
    "strokes": 12,
    "jlpt": "N2",
    "examples": [
      {
        "word": "[数隊が一]",
        "reading": "Ltにこしょうが-ー]",
        "meaning": "be fixed, be repaired"
      }
    ]
  },
  "冷": {
    "char": "冷",
    "meaning": "cool, cold (beer, person), chill",
    "onyomi": "レイ",
    "kunyomi": "つめ.たい, ひ.える, ひ.や, ひ.ややか, ひ.やす, ひ.やかす, さ.める, さ.ます",
    "strokes": 7,
    "jlpt": "N4",
    "examples": [
      {
        "word": "冷やします",
        "reading": "ひやします",
        "meaning": "cool"
      }
    ]
  },
  "心": {
    "char": "心",
    "meaning": "heart, mind, spirit",
    "onyomi": "シン",
    "kunyomi": "こころ, -ごころ",
    "strokes": 4,
    "jlpt": "N5",
    "examples": [
      {
        "word": "心配[な]",
        "reading": "しんばい [な]",
        "meaning": "worried, anxious"
      },
      {
        "word": "安心します",
        "reading": "あんしんします",
        "meaning": "be relieved"
      }
    ]
  },
  "配": {
    "char": "配",
    "meaning": "distribute, spouse, exile",
    "onyomi": "ハイ",
    "kunyomi": "くば.る",
    "strokes": 10,
    "jlpt": "N4",
    "examples": [
      {
        "word": "心配[な]",
        "reading": "しんばい [な]",
        "meaning": "worried, anxious"
      },
      {
        "word": "宅配便",
        "reading": "たくはいびん",
        "meaning": "delivery service"
      }
    ]
  },
  "十": {
    "char": "十",
    "meaning": "ten",
    "onyomi": "ジュウ, ジッ, ジュッ",
    "kunyomi": "とお, と, そ",
    "strokes": 2,
    "jlpt": "N4",
    "examples": [
      {
        "word": "十分[な]",
        "reading": "じゅうぶん[な]",
        "meaning": "enough, sufficient"
      }
    ]
  },
  "是": {
    "char": "是",
    "meaning": "just so, this, right",
    "onyomi": "ゼ, シ",
    "kunyomi": "これ, この, ここ",
    "strokes": 9,
    "jlpt": "N2",
    "examples": [
      {
        "word": "是",
        "reading": "{ZL",
        "meaning": "star"
      }
    ]
  },
  "月": {
    "char": "月",
    "meaning": "month, moon",
    "onyomi": "ゲツ, ガツ",
    "kunyomi": "つき",
    "strokes": 4,
    "jlpt": "N4",
    "examples": [
      {
        "word": "月",
        "reading": "つき",
        "meaning": "moon."
      }
    ]
  },
  "南": {
    "char": "南",
    "meaning": "south",
    "onyomi": "ナン, ナ",
    "kunyomi": "みなみ",
    "strokes": 9,
    "jlpt": "N4",
    "examples": [
      {
        "word": "南",
        "reading": "みなみ",
        "meaning": "south"
      }
    ]
  },
  "丁": {
    "char": "丁",
    "meaning": "street, ward, town",
    "onyomi": "チョウ, テイ, チン, トウ, チ",
    "kunyomi": "ひのと",
    "strokes": 2,
    "jlpt": "N2",
    "examples": [
      {
        "word": "丁",
        "reading": "にし",
        "meaning": "west"
      },
      {
        "word": "丁寧[な]",
        "reading": "ていれねれい[な]",
        "meaning": "polite, courteous, careful"
      }
    ]
  },
  "東": {
    "char": "東",
    "meaning": "east",
    "onyomi": "トウ",
    "kunyomi": "ひがし",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "東",
        "reading": "ひがし",
        "meaning": "east"
      }
    ]
  },
  "水": {
    "char": "水",
    "meaning": "water",
    "onyomi": "スイ",
    "kunyomi": "みず, みず-",
    "strokes": 4,
    "jlpt": "N4",
    "examples": [
      {
        "word": "水道",
        "reading": "すいどう",
        "meaning": "faucet, tap, water supply"
      }
    ]
  },
  "逃": {
    "char": "逃",
    "meaning": "escape, flee, shirk",
    "onyomi": "トウ",
    "kunyomi": "に.げる, に.がす, のが.す, のが.れる",
    "strokes": 9,
    "jlpt": "N4",
    "examples": [
      {
        "word": "逃げます",
        "reading": "にげばます",
        "meaning": "run away"
      }
    ]
  },
  "投": {
    "char": "投",
    "meaning": "throw, discard, abandon",
    "onyomi": "トウ",
    "kunyomi": "な.げる, -な.げ",
    "strokes": 7,
    "jlpt": "N4",
    "examples": [
      {
        "word": "投げます",
        "reading": "なげます II",
        "meaning": "throw"
      }
    ]
  },
  "守": {
    "char": "守",
    "meaning": "guard, protect, defend",
    "onyomi": "シュ, ス",
    "kunyomi": "まも.る, まも.り, もり, -もり, かみ",
    "strokes": 6,
    "jlpt": "N4",
    "examples": [
      {
        "word": "守ります",
        "reading": "まもります",
        "meaning": "keep, follow obey"
      },
      {
        "word": "留守",
        "reading": "るす",
        "meaning": "absence"
      }
    ]
  },
  "上": {
    "char": "上",
    "meaning": "above, up",
    "onyomi": "ジョウ, ショウ, シャン",
    "kunyomi": "うえ, -うえ, うわ-, かみ, あ.げる, -あ.げる, あ.がる, -あ.がる, あ.がり, -あ.がり, のぼ.る, のぼ.り, のぼ.せる, のぼ.す, たてまつ.る",
    "strokes": 3,
    "jlpt": "N4",
    "examples": [
      {
        "word": "上ばげます",
        "reading": "あげます",
        "meaning": "raise, lift up"
      },
      {
        "word": "屋上",
        "reading": "おくじょう",
        "meaning": "rooftop"
      },
      {
        "word": "一以上",
        "reading": "ーーいいじょう",
        "meaning": "not less than ~, over ~"
      }
    ]
  },
  "伝": {
    "char": "伝",
    "meaning": "transmit, go along, walk along",
    "onyomi": "デン, テン",
    "kunyomi": "つた.わる, つた.える, つた.う, つだ.う, -づた.い, つて",
    "strokes": 6,
    "jlpt": "N4",
    "examples": [
      {
        "word": "伝えます",
        "reading": "つたえます",
        "meaning": "convey (a message)"
      }
    ]
  },
  "注": {
    "char": "注",
    "meaning": "pour, irrigate, shed (tears)",
    "onyomi": "チュウ",
    "kunyomi": "そそ.ぐ, さ.す, つ.ぐ",
    "strokes": 8,
    "jlpt": "N5",
    "examples": [
      {
        "word": "注意します",
        "reading": "ちゅういします",
        "meaning": "be careful [of the cars]"
      },
      {
        "word": "注射",
        "reading": "ちゅうしゃ",
        "meaning": "injection"
      }
    ]
  },
  "意": {
    "char": "意",
    "meaning": "idea, mind, heart",
    "onyomi": "イ",
    "kunyomi": "-",
    "strokes": 13,
    "jlpt": "N5",
    "examples": [
      {
        "word": "注意します",
        "reading": "ちゅういします",
        "meaning": "be careful [of the cars]"
      },
      {
        "word": "用意します",
        "reading": "よういします",
        "meaning": "prepare"
      }
    ]
  },
  "濯": {
    "char": "濯",
    "meaning": "laundry, wash, pour on",
    "onyomi": "タク",
    "kunyomi": "すす.ぐ, ゆす.ぐ",
    "strokes": 17,
    "jlpt": "N3",
    "examples": [
      {
        "word": "洗濯機",
        "reading": "せんたくき",
        "meaning": "washing machine"
      }
    ]
  },
  "規": {
    "char": "規",
    "meaning": "standard, measure",
    "onyomi": "キ",
    "kunyomi": "-",
    "strokes": 11,
    "jlpt": "N4",
    "examples": [
      {
        "word": "規則",
        "reading": "さきそく",
        "meaning": "regulation, rule"
      }
    ]
  },
  "則": {
    "char": "則",
    "meaning": "rule, law, follow",
    "onyomi": "ソク",
    "kunyomi": "のっと.る, のり, すなわち",
    "strokes": 9,
    "jlpt": "N3",
    "examples": [
      {
        "word": "規則",
        "reading": "さきそく",
        "meaning": "regulation, rule"
      }
    ]
  },
  "使": {
    "char": "使",
    "meaning": "use, send on a mission, order",
    "onyomi": "シ",
    "kunyomi": "つか.う, つか.い, -つか.い, -づか.い",
    "strokes": 8,
    "jlpt": "N5",
    "examples": [
      {
        "word": "使用禁止 Do",
        "reading": "しようきんし",
        "meaning": "not use."
      },
      {
        "word": "使用中",
        "reading": "しようちゅう",
        "meaning": "in use"
      }
    ]
  },
  "用": {
    "char": "用",
    "meaning": "utilize, business, service",
    "onyomi": "ヨウ",
    "kunyomi": "もち.いる",
    "strokes": 5,
    "jlpt": "N5",
    "examples": [
      {
        "word": "使用禁止 Do",
        "reading": "しようきんし",
        "meaning": "not use."
      },
      {
        "word": "使用中",
        "reading": "しようちゅう",
        "meaning": "in use"
      },
      {
        "word": "用意します",
        "reading": "よういします",
        "meaning": "prepare"
      }
    ]
  },
  "禁": {
    "char": "禁",
    "meaning": "prohibition, ban, forbid",
    "onyomi": "キン",
    "kunyomi": "-",
    "strokes": 13,
    "jlpt": "N3",
    "examples": [
      {
        "word": "使用禁止 Do",
        "reading": "しようきんし",
        "meaning": "not use."
      },
      {
        "word": "立入禁止 Kcep",
        "reading": "たちいリりきんし",
        "meaning": "out."
      }
    ]
  },
  "止": {
    "char": "止",
    "meaning": "stop, halt",
    "onyomi": "シ",
    "kunyomi": "と.まる, -ど.まり, と.める, -と.める, -ど.め, とど.める, とど.め, とど.まる, や.める, や.む, -や.む, よ.す, -さ.す, -さ.し",
    "strokes": 4,
    "jlpt": "N5",
    "examples": [
      {
        "word": "使用禁止 Do",
        "reading": "しようきんし",
        "meaning": "not use."
      },
      {
        "word": "立入禁止 Kcep",
        "reading": "たちいリりきんし",
        "meaning": "out."
      }
    ]
  },
  "立": {
    "char": "立",
    "meaning": "stand up, rise, set up",
    "onyomi": "リツ, リュウ, リットル",
    "kunyomi": "た.つ, -た.つ, た.ち-, た.てる, -た.てる, た.て-, たて-, -た.て, -だ.て, -だ.てる",
    "strokes": 5,
    "jlpt": "N5",
    "examples": [
      {
        "word": "立入禁止 Kcep",
        "reading": "たちいリりきんし",
        "meaning": "out."
      },
      {
        "word": "組み立てます",
        "reading": "くみたてます",
        "meaning": "assemble"
      }
    ]
  },
  "非": {
    "char": "非",
    "meaning": "un-, mistake, negative",
    "onyomi": "ヒ",
    "kunyomi": "あら.ず",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "非常ロ ,",
        "reading": "ひじょうでぐち",
        "meaning": "emergency exit"
      }
    ]
  },
  "常": {
    "char": "常",
    "meaning": "usual, ordinary, normal",
    "onyomi": "ジョウ",
    "kunyomi": "つね, とこ-",
    "strokes": 11,
    "jlpt": "N4",
    "examples": [
      {
        "word": "非常ロ ,",
        "reading": "ひじょうでぐち",
        "meaning": "emergency exit"
      }
    ]
  },
  "無": {
    "char": "無",
    "meaning": "nothingness, none, ain't",
    "onyomi": "ム, ブ",
    "kunyomi": "な.い",
    "strokes": 12,
    "jlpt": "N4",
    "examples": [
      {
        "word": "無料",
        "reading": "むりょう",
        "meaning": "free of charge"
      }
    ]
  },
  "営": {
    "char": "営",
    "meaning": "camp, perform, build",
    "onyomi": "エイ",
    "kunyomi": "いとな.む, いとな.み",
    "strokes": 12,
    "jlpt": "N3",
    "examples": [
      {
        "word": "営業中",
        "reading": "えいきぎょうちゅう",
        "meaning": "open for business"
      }
    ]
  },
  "業": {
    "char": "業",
    "meaning": "business, vocation, arts",
    "onyomi": "ギョウ, ゴウ",
    "kunyomi": "わざ",
    "strokes": 13,
    "jlpt": "N5",
    "examples": [
      {
        "word": "営業中",
        "reading": "えいきぎょうちゅう",
        "meaning": "open for business"
      }
    ]
  },
  "磨": {
    "char": "磨",
    "meaning": "grind, polish, scour",
    "onyomi": "マ",
    "kunyomi": "みが.く, す.る",
    "strokes": 16,
    "jlpt": "N3",
    "examples": [
      {
        "word": "磨きます",
        "reading": "みがきます",
        "meaning": "brush [ones teeth], polish"
      }
    ]
  },
  "組": {
    "char": "組",
    "meaning": "association, braid, plait",
    "onyomi": "ソ",
    "kunyomi": "く.む, くみ, -ぐみ",
    "strokes": 11,
    "jlpt": "N4",
    "examples": [
      {
        "word": "組み立てます",
        "reading": "くみたてます",
        "meaning": "assemble"
      }
    ]
  },
  "皿": {
    "char": "皿",
    "meaning": "dish, a helping, plate",
    "onyomi": "ベイ",
    "kunyomi": "さら",
    "strokes": 5,
    "jlpt": "N3",
    "examples": [
      {
        "word": "皿",
        "reading": "します",
        "meaning": "put on, wear [a tie]"
      },
      {
        "word": "皿親切に します",
        "reading": "しんせつに します",
        "meaning": "bekindto"
      }
    ]
  },
  "損": {
    "char": "損",
    "meaning": "damage, loss, disadvantage",
    "onyomi": "ソン",
    "kunyomi": "そこ.なう, そこな.う, -そこ.なう, そこ.ねる, -そこ.ねる",
    "strokes": 13,
    "jlpt": "N3",
    "examples": [
      {
        "word": "損問します",
        "reading": "しつもんします DT",
        "meaning": "ask a question"
      }
    ]
  },
  "問": {
    "char": "問",
    "meaning": "question, ask, problem",
    "onyomi": "モン",
    "kunyomi": "と.う, と.い, とん",
    "strokes": 11,
    "jlpt": "N5",
    "examples": [
      {
        "word": "損問します",
        "reading": "しつもんします DT",
        "meaning": "ask a question"
      },
      {
        "word": "ー問",
        "reading": "ーかん",
        "meaning": "for ~ (referring to duration)"
      }
    ]
  },
  "金": {
    "char": "金",
    "meaning": "gold",
    "onyomi": "キン, コン, ゴン",
    "kunyomi": "かね, かな-, -がね",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "金踊り Bon Festival",
        "reading": "| ぼんおどり",
        "meaning": "dance"
      },
      {
        "word": "時金します",
        "reading": "ちょきんします DD",
        "meaning": "save money"
      }
    ]
  },
  "図": {
    "char": "図",
    "meaning": "map, drawing, plan",
    "onyomi": "ズ, ト",
    "kunyomi": "え, はか.る",
    "strokes": 7,
    "jlpt": "N5",
    "examples": [
      {
        "word": "図",
        "reading": "ず",
        "meaning": "figure, drawing"
      }
    ]
  },
  "赤": {
    "char": "赤",
    "meaning": "red",
    "onyomi": "セキ, シャク",
    "kunyomi": "あか, あか-, あか.い, あか.らむ, あか.らめる",
    "strokes": 7,
    "jlpt": "N5",
    "examples": [
      {
        "word": "赤",
        "reading": "あか",
        "meaning": "red (noun)"
      },
      {
        "word": "赤ちゃん",
        "reading": "あかちゃん",
        "meaning": "baby"
      }
    ]
  },
  "青": {
    "char": "青",
    "meaning": "blue, green",
    "onyomi": "セイ, ショウ",
    "kunyomi": "あお, あお-, あお.い",
    "strokes": 8,
    "jlpt": "N5",
    "examples": [
      {
        "word": "青",
        "reading": "あお",
        "meaning": "blue (noun)"
      }
    ]
  },
  "黄": {
    "char": "黄",
    "meaning": "yellow",
    "onyomi": "コウ, オウ",
    "kunyomi": "き, こ-",
    "strokes": 11,
    "jlpt": "N3",
    "examples": [
      {
        "word": "黄色",
        "reading": "きいろ",
        "meaning": "yellow (noun)"
      }
    ]
  },
  "茶": {
    "char": "茶",
    "meaning": "tea",
    "onyomi": "チャ, サ",
    "kunyomi": "-",
    "strokes": 9,
    "jlpt": "N5",
    "examples": [
      {
        "word": "茶色",
        "reading": "ちゃいろ",
        "meaning": "brown (noun)"
      }
    ]
  },
  "咲": {
    "char": "咲",
    "meaning": "blossom, bloom",
    "onyomi": "ショウ",
    "kunyomi": "さ.く, -ざき",
    "strokes": 9,
    "jlpt": "N3",
    "examples": [
      {
        "word": "咲きます [",
        "reading": "さきます",
        "meaning": "flowers] bloom"
      }
    ]
  },
  "変": {
    "char": "変",
    "meaning": "unusual, change, strange",
    "onyomi": "ヘン",
    "kunyomi": "か.わる, か.わり, か.える",
    "strokes": 9,
    "jlpt": "N4",
    "examples": [
      {
        "word": "変わります [",
        "reading": "かわります",
        "meaning": "the color] change"
      },
      {
        "word": "変[な]",
        "reading": "へん[な",
        "meaning": "strange, peculiar"
      }
    ]
  },
  "困": {
    "char": "困",
    "meaning": "quandary, become distressed, annoyed",
    "onyomi": "コン",
    "kunyomi": "こま.る",
    "strokes": 7,
    "jlpt": "N4",
    "examples": [
      {
        "word": "困ります",
        "reading": "こまります",
        "meaning": "be in trouble, have a problem"
      }
    ]
  },
  "拾": {
    "char": "拾",
    "meaning": "pick up, gather, find",
    "onyomi": "シュウ, ジュウ",
    "kunyomi": "ひろ.う",
    "strokes": 9,
    "jlpt": "N3",
    "examples": [
      {
        "word": "拾います",
        "reading": "ひろいます",
        "meaning": "pick up"
      }
    ]
  },
  "話": {
    "char": "話",
    "meaning": "tale, talk",
    "onyomi": "ワ",
    "kunyomi": "はな.す, はなし",
    "strokes": 13,
    "jlpt": "N4",
    "examples": [
      {
        "word": "[電話が一]",
        "reading": "[でんわが-ー]",
        "meaning": "have [a phone call]"
      },
      {
        "word": "世話を します",
        "reading": "せわを します",
        "meaning": "take careof~"
      }
    ]
  },
  "楽": {
    "char": "楽",
    "meaning": "music, comfort, ease",
    "onyomi": "ガク, ラク, ゴウ",
    "kunyomi": "たの.しい, たの.しむ, この.む",
    "strokes": 13,
    "jlpt": "N5",
    "examples": [
      {
        "word": "楽[な]",
        "reading": "らく[な]",
        "meaning": "comfortable, easy"
      },
      {
        "word": "楽しみ",
        "reading": "たのしみ",
        "meaning": "pleasure, enjoyment, expectation"
      },
      {
        "word": "音楽",
        "reading": "おんがくか",
        "meaning": "musician"
      }
    ]
  },
  "正": {
    "char": "正",
    "meaning": "correct, justice, righteous",
    "onyomi": "セイ, ショウ",
    "kunyomi": "ただ.しい, ただ.す, まさ, まさ.に",
    "strokes": 5,
    "jlpt": "N5",
    "examples": [
      {
        "word": "正しい",
        "reading": "ただしい",
        "meaning": "corcct right"
      },
      {
        "word": "正味",
        "reading": "きょうみ",
        "meaning": "interest"
      }
    ]
  },
  "珍": {
    "char": "珍",
    "meaning": "rare, curious, strange",
    "onyomi": "チン",
    "kunyomi": "めずら.しい, たから",
    "strokes": 9,
    "jlpt": "N3",
    "examples": [
      {
        "word": "珍しい",
        "reading": "めずらしい",
        "meaning": "rare, uncommon"
      }
    ]
  },
  "向": {
    "char": "向",
    "meaning": "yonder, facing, beyond",
    "onyomi": "コウ",
    "kunyomi": "む.く, む.い, -む.き, む.ける, -む.け, む.かう, む.かい, む.こう, む.こう-, むこ, むか.い",
    "strokes": 6,
    "jlpt": "N4",
    "examples": [
      {
        "word": "向こう",
        "reading": "むこう",
        "meaning": "over there, the other side"
      }
    ]
  },
  "近": {
    "char": "近",
    "meaning": "near, early, akin",
    "onyomi": "キン, コン",
    "kunyomi": "ちか.い",
    "strokes": 7,
    "jlpt": "N5",
    "examples": [
      {
        "word": "近所",
        "reading": "きんじょ",
        "meaning": "neighborhood, vicinity"
      }
    ]
  },
  "海": {
    "char": "海",
    "meaning": "sea, ocean",
    "onyomi": "カイ",
    "kunyomi": "うみ",
    "strokes": 9,
    "jlpt": "N5",
    "examples": [
      {
        "word": "海外",
        "reading": "| かいがい",
        "meaning": "overseas"
      },
      {
        "word": "海岩",
        "reading": "かいがん",
        "meaning": "seaside, seashore"
      }
    ]
  },
  "山": {
    "char": "山",
    "meaning": "mountain",
    "onyomi": "サン, セン",
    "kunyomi": "やま",
    "strokes": 3,
    "jlpt": "N4",
    "examples": [
      {
        "word": "山登り",
        "reading": "やまのばぼり",
        "meaning": "mountain climbing"
      }
    ]
  },
  "登": {
    "char": "登",
    "meaning": "ascend, climb up",
    "onyomi": "トウ, ト, ドウ, ショウ, チョウ",
    "kunyomi": "のぼ.る, あ.がる",
    "strokes": 12,
    "jlpt": "N4",
    "examples": [
      {
        "word": "山登り",
        "reading": "やまのばぼり",
        "meaning": "mountain climbing"
      }
    ]
  },
  "許": {
    "char": "許",
    "meaning": "permit, approve",
    "onyomi": "キョ",
    "kunyomi": "ゆる.す, もと",
    "strokes": 11,
    "jlpt": "N4",
    "examples": [
      {
        "word": "許可",
        "reading": "きょか",
        "meaning": "permission"
      }
    ]
  },
  "可": {
    "char": "可",
    "meaning": "can, passable, approval",
    "onyomi": "カ, コク",
    "kunyomi": "-べ.き, -べ.し",
    "strokes": 5,
    "jlpt": "N4",
    "examples": [
      {
        "word": "許可",
        "reading": "きょか",
        "meaning": "permission"
      }
    ]
  },
  "丸": {
    "char": "丸",
    "meaning": "round, full (month), perfection",
    "onyomi": "ガン",
    "kunyomi": "まる, まる.める, まる.い",
    "strokes": 3,
    "jlpt": "N3",
    "examples": [
      {
        "word": "丸",
        "reading": "£",
        "meaning": "circle"
      }
    ]
  },
  "法": {
    "char": "法",
    "meaning": "method, law, rule",
    "onyomi": "ホウ, ハッ, ホッ, フラン",
    "kunyomi": "のり",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "方法",
        "reading": "ほうはほう",
        "meaning": "method"
      },
      {
        "word": "文法",
        "reading": "ぶんぼう",
        "meaning": "grammar"
      },
      {
        "word": "法律",
        "reading": "(ほうりつ",
        "meaning": "law"
      }
    ]
  },
  "設": {
    "char": "設",
    "meaning": "establishment, provision, prepare",
    "onyomi": "セツ",
    "kunyomi": "もう.ける",
    "strokes": 11,
    "jlpt": "N3",
    "examples": [
      {
        "word": "設備",
        "reading": "せつび",
        "meaning": "equipment, facilities"
      },
      {
        "word": "設計します",
        "reading": "せっけいします DT",
        "meaning": "design, plan"
      }
    ]
  },
  "備": {
    "char": "備",
    "meaning": "equip, provision, preparation",
    "onyomi": "ビ",
    "kunyomi": "そな.える, そな.わる, つぶさ.に",
    "strokes": 12,
    "jlpt": "N4",
    "examples": [
      {
        "word": "設備",
        "reading": "せつび",
        "meaning": "equipment, facilities"
      }
    ]
  },
  "葉": {
    "char": "葉",
    "meaning": "leaf, plane, lobe",
    "onyomi": "ヨウ",
    "kunyomi": "は",
    "strokes": 12,
    "jlpt": "N4",
    "examples": [
      {
        "word": "葉",
        "reading": "は",
        "meaning": "leaf"
      }
    ]
  },
  "曲": {
    "char": "曲",
    "meaning": "bend, music, melody",
    "onyomi": "キョク",
    "kunyomi": "ま.がる, ま.げる, くま",
    "strokes": 6,
    "jlpt": "N4",
    "examples": [
      {
        "word": "曲",
        "reading": "きょく",
        "meaning": "a piece of music"
      }
    ]
  },
  "打": {
    "char": "打",
    "meaning": "strike, hit, knock",
    "onyomi": "ダ, ダース",
    "kunyomi": "う.つ, う.ち-, ぶ.つ",
    "strokes": 5,
    "jlpt": "N4",
    "examples": [
      {
        "word": "打ちます",
        "reading": "うちます",
        "meaning": "type [on a word processor]"
      }
    ]
  },
  "太": {
    "char": "太",
    "meaning": "plump, thick, big around",
    "onyomi": "タイ, タ",
    "kunyomi": "ふと.い, ふと.る",
    "strokes": 4,
    "jlpt": "N4",
    "examples": [
      {
        "word": "太ります",
        "reading": "ふとります",
        "meaning": "get fat"
      }
    ]
  },
  "過": {
    "char": "過",
    "meaning": "overdo, exceed, go beyond",
    "onyomi": "カ",
    "kunyomi": "す.ぎる, す.ごす, あやま.ち, あやま.つ, よぎ.る, よ.ぎる",
    "strokes": 12,
    "jlpt": "N4",
    "examples": [
      {
        "word": "過ぎます Pass [",
        "reading": "すぎます",
        "meaning": "o'clock]"
      },
      {
        "word": "過ごします",
        "reading": "すごします",
        "meaning": "spend (time), pass (time)"
      }
    ]
  },
  "携": {
    "char": "携",
    "meaning": "portable, carry (in hand), armed with",
    "onyomi": "ケイ",
    "kunyomi": "たずさ.える, たずさ.わる",
    "strokes": 13,
    "jlpt": "N2",
    "examples": [
      {
        "word": "携帯一",
        "reading": "けいたいい",
        "meaning": "portable ~"
      }
    ]
  },
  "帯": {
    "char": "帯",
    "meaning": "sash, belt, obi",
    "onyomi": "タイ",
    "kunyomi": "お.びる, おび",
    "strokes": 10,
    "jlpt": "N3",
    "examples": [
      {
        "word": "携帯一",
        "reading": "けいたいい",
        "meaning": "portable ~"
      }
    ]
  },
  "工": {
    "char": "工",
    "meaning": "craft, construction, katakana e radical (no. 48)",
    "onyomi": "コウ, ク, グ",
    "kunyomi": "-",
    "strokes": 3,
    "jlpt": "N5",
    "examples": [
      {
        "word": "工場",
        "reading": "こうじょう",
        "meaning": "factory"
      }
    ]
  },
  "剣": {
    "char": "剣",
    "meaning": "sabre, sword, blade",
    "onyomi": "ケン",
    "kunyomi": "つるぎ",
    "strokes": 10,
    "jlpt": "N2",
    "examples": [
      {
        "word": "剣道",
        "reading": "けんどう",
        "meaning": "kendo (Japanese style fencing)"
      }
    ]
  },
  "必": {
    "char": "必",
    "meaning": "invariably, certain, inevitable",
    "onyomi": "ヒツ",
    "kunyomi": "かなら.ず",
    "strokes": 5,
    "jlpt": "N4",
    "examples": [
      {
        "word": "必ず",
        "reading": "かならず",
        "meaning": "without fail, by any means"
      },
      {
        "word": "必要[な]",
        "reading": "ひつよう[な]",
        "meaning": "necessary"
      }
    ]
  },
  "絶": {
    "char": "絶",
    "meaning": "discontinue, sever, cut off",
    "onyomi": "ゼツ",
    "kunyomi": "た.える, た.やす, た.つ",
    "strokes": 12,
    "jlpt": "N4",
    "examples": [
      {
        "word": "絶対に",
        "reading": "ぜったいに",
        "meaning": "absolutely (used with negatives)"
      }
    ]
  },
  "対": {
    "char": "対",
    "meaning": "vis-a-vis, opposite, even",
    "onyomi": "タイ, ツイ",
    "kunyomi": "あいて, こた.える, そろ.い, つれあ.い, なら.ぶ, むか.う",
    "strokes": 7,
    "jlpt": "N4",
    "examples": [
      {
        "word": "絶対に",
        "reading": "ぜったいに",
        "meaning": "absolutely (used with negatives)"
      }
    ]
  },
  "招": {
    "char": "招",
    "meaning": "beckon, invite, summon",
    "onyomi": "ショウ",
    "kunyomi": "まね.く",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "招待します",
        "reading": "しょうたいします",
        "meaning": "invite"
      }
    ]
  },
  "待": {
    "char": "待",
    "meaning": "wait, depend on",
    "onyomi": "タイ",
    "kunyomi": "ま.つ, -ま.ち",
    "strokes": 9,
    "jlpt": "N5",
    "examples": [
      {
        "word": "招待します",
        "reading": "しょうたいします",
        "meaning": "invite"
      }
    ]
  },
  "頼": {
    "char": "頼",
    "meaning": "trust, request",
    "onyomi": "ライ",
    "kunyomi": "たの.む, たの.もしい, たよ.る",
    "strokes": 16,
    "jlpt": "N4",
    "examples": [
      {
        "word": "頼みます",
        "reading": "たのみます",
        "meaning": "ask, request"
      }
    ]
  },
  "踏": {
    "char": "踏",
    "meaning": "step, trample, carry through",
    "onyomi": "トウ",
    "kunyomi": "ふ.む, ふ.まえる",
    "strokes": 15,
    "jlpt": "N2",
    "examples": [
      {
        "word": "踏みます",
        "reading": "ふみます",
        "meaning": "step on (someone’s foot)"
      }
    ]
  },
  "輸": {
    "char": "輸",
    "meaning": "transport, send, be inferior",
    "onyomi": "ユ, シュ",
    "kunyomi": "-",
    "strokes": 16,
    "jlpt": "N3",
    "examples": [
      {
        "word": "輸出します",
        "reading": "ゆしゅつします",
        "meaning": "export"
      },
      {
        "word": "輸入します",
        "reading": "ゆにゅうします DM",
        "meaning": "import"
      }
    ]
  },
  "翻": {
    "char": "翻",
    "meaning": "flip, turn over, wave",
    "onyomi": "ホン, ハン",
    "kunyomi": "ひるがえ.る, ひるがえ.す",
    "strokes": 18,
    "jlpt": "N2",
    "examples": [
      {
        "word": "翻訳します",
        "reading": "ほんやくします OD",
        "meaning": "translate"
      }
    ]
  },
  "訳": {
    "char": "訳",
    "meaning": "translate, reason, circumstance",
    "onyomi": "ヤク",
    "kunyomi": "わけ",
    "strokes": 11,
    "jlpt": "N2",
    "examples": [
      {
        "word": "翻訳します",
        "reading": "ほんやくします OD",
        "meaning": "translate"
      }
    ]
  },
  "発": {
    "char": "発",
    "meaning": "departure, discharge, publish",
    "onyomi": "ハツ, ホツ",
    "kunyomi": "た.つ, あば.く, おこ.る, つか.わす, はな.つ",
    "strokes": 9,
    "jlpt": "N5",
    "examples": [
      {
        "word": "発明します",
        "reading": "はつめいします",
        "meaning": "invent"
      },
      {
        "word": "発音",
        "reading": "はつおん",
        "meaning": "pronunciation"
      },
      {
        "word": "発表",
        "reading": "はっぴょ",
        "meaning": "announcement, prescnfation"
      }
    ]
  },
  "石": {
    "char": "石",
    "meaning": "stone",
    "onyomi": "セキ, シャク, コク",
    "kunyomi": "いし",
    "strokes": 5,
    "jlpt": "N4",
    "examples": [
      {
        "word": "石油",
        "reading": "せきゆ",
        "meaning": "oil"
      },
      {
        "word": "石",
        "reading": "いし",
        "meaning": "stone"
      }
    ]
  },
  "油": {
    "char": "油",
    "meaning": "oil, fat",
    "onyomi": "ユ, ユウ",
    "kunyomi": "あぶら",
    "strokes": 8,
    "jlpt": "N3",
    "examples": [
      {
        "word": "石油",
        "reading": "せきゆ",
        "meaning": "oil"
      }
    ]
  },
  "原": {
    "char": "原",
    "meaning": "meadow, original, primitive",
    "onyomi": "ゲン",
    "kunyomi": "はら",
    "strokes": 10,
    "jlpt": "N4",
    "examples": [
      {
        "word": "原料",
        "reading": "げんりょう",
        "meaning": "raw material"
      },
      {
        "word": "原因",
        "reading": "げんいん",
        "meaning": "cause"
      }
    ]
  },
  "科": {
    "char": "科",
    "meaning": "department, course, section",
    "onyomi": "カ",
    "kunyomi": "-",
    "strokes": 9,
    "jlpt": "N4",
    "examples": [
      {
        "word": "科学者",
        "reading": "かがくしゃ",
        "meaning": "scientist"
      }
    ]
  },
  "世": {
    "char": "世",
    "meaning": "generation, world, society",
    "onyomi": "セイ, セ, ソウ",
    "kunyomi": "よ",
    "strokes": 5,
    "jlpt": "N5",
    "examples": [
      {
        "word": "世界中",
        "reading": "せかいじゅう",
        "meaning": "all over the world"
      },
      {
        "word": "世話を します",
        "reading": "せわを します",
        "meaning": "take careof~"
      }
    ]
  },
  "界": {
    "char": "界",
    "meaning": "world, boundary",
    "onyomi": "カイ",
    "kunyomi": "-",
    "strokes": 9,
    "jlpt": "N5",
    "examples": [
      {
        "word": "世界中",
        "reading": "せかいじゅう",
        "meaning": "all over the world"
      }
    ]
  },
  "育": {
    "char": "育",
    "meaning": "bring up, grow up, raise",
    "onyomi": "イク",
    "kunyomi": "そだ.つ, そだ.ち, そだ.てる, はぐく.む",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "育てます",
        "reading": "そだてます",
        "meaning": "breed, bring up"
      },
      {
        "word": "教育",
        "reading": "きょういく",
        "meaning": "education"
      }
    ]
  },
  "亡": {
    "char": "亡",
    "meaning": "deceased, the late, dying",
    "onyomi": "ボウ, モウ",
    "kunyomi": "な.い, な.き-, ほろ.びる, ほろ.ぶ, ほろ.ぼす",
    "strokes": 3,
    "jlpt": "N4",
    "examples": [
      {
        "word": "亡くなります",
        "reading": "ななくなります",
        "meaning": "pass away (euphcmistic expression for"
      }
    ]
  },
  "退": {
    "char": "退",
    "meaning": "retreat, withdraw, retire",
    "onyomi": "タイ",
    "kunyomi": "しりぞ.く, しりぞ.ける, ひ.く, の.く, の.ける, ど.く",
    "strokes": 9,
    "jlpt": "N4",
    "examples": [
      {
        "word": "退院します",
        "reading": "たいいんします",
        "meaning": "leave hospital"
      }
    ]
  },
  "切": {
    "char": "切",
    "meaning": "cut, cutoff, be sharp",
    "onyomi": "セツ, サイ",
    "kunyomi": "き.る, -き.る, き.り, -き.り, -ぎ.り, き.れる, -き.れる, き.れ, -き.れ, -ぎ.れ",
    "strokes": 4,
    "jlpt": "N5",
    "examples": [
      {
        "word": "切ります",
        "reading": "きります",
        "meaning": "turn off [the power switch]"
      },
      {
        "word": "皿親切に します",
        "reading": "しんせつに します",
        "meaning": "bekindto"
      },
      {
        "word": "缶切り",
        "reading": "かんきり",
        "meaning": "can opener"
      }
    ]
  },
  "持": {
    "char": "持",
    "meaning": "hold, have",
    "onyomi": "ジ",
    "kunyomi": "も.つ, -も.ち, も.てる",
    "strokes": 9,
    "jlpt": "N5",
    "examples": [
      {
        "word": "気持ちが いい",
        "reading": "きもちが いい",
        "meaning": "pleasant, agrccable"
      },
      {
        "word": "気持ちが Rvs",
        "reading": "きもちが わるい",
        "meaning": "unpleasant, disgusting"
      }
    ]
  },
  "岩": {
    "char": "岩",
    "meaning": "boulder, rock, cliff",
    "onyomi": "ガン",
    "kunyomi": "いわ",
    "strokes": 8,
    "jlpt": "N3",
    "examples": [
      {
        "word": "海岩",
        "reading": "かいがん",
        "meaning": "seaside, seashore"
      }
    ]
  },
  "類": {
    "char": "類",
    "meaning": "sort, kind, variety",
    "onyomi": "ルイ",
    "kunyomi": "たぐ.い",
    "strokes": 18,
    "jlpt": "N4",
    "examples": [
      {
        "word": "書類",
        "reading": "しょるい",
        "meaning": "document, papers"
      }
    ]
  },
  "源": {
    "char": "源",
    "meaning": "source, origin",
    "onyomi": "ゲン",
    "kunyomi": "みなもと",
    "strokes": 13,
    "jlpt": "N2",
    "examples": [
      {
        "word": "電源",
        "reading": "でんげん",
        "meaning": "power switch"
      }
    ]
  },
  "邊": {
    "char": "邊",
    "meaning": "edge, margin, side",
    "onyomi": "ヘン",
    "kunyomi": "あた.り, ほと.り, -べ",
    "strokes": 19,
    "jlpt": "N4",
    "examples": [
      {
        "word": "邊 答えます",
        "reading": "こたえます",
        "meaning": "answer [a question]"
      }
    ]
  },
  "答": {
    "char": "答",
    "meaning": "solution, answer",
    "onyomi": "トウ",
    "kunyomi": "こた.える, こた.え",
    "strokes": 12,
    "jlpt": "N5",
    "examples": [
      {
        "word": "邊 答えます",
        "reading": "こたえます",
        "meaning": "answer [a question]"
      }
    ]
  },
  "倒": {
    "char": "倒",
    "meaning": "overthrow, fall, collapse",
    "onyomi": "トウ",
    "kunyomi": "たお.れる, -だお.れ, たお.す, さかさま, さかさ, さかしま",
    "strokes": 10,
    "jlpt": "N4",
    "examples": [
      {
        "word": "倒れます",
        "reading": "たおれます",
        "meaning": "fa building] fall down"
      }
    ]
  },
  "肉": {
    "char": "肉",
    "meaning": "meat",
    "onyomi": "ニク",
    "kunyomi": "しし",
    "strokes": 6,
    "jlpt": "N5",
    "examples": [
      {
        "word": "[肉がー」 [",
        "reading": "[にく がーー]",
        "meaning": "meat] be roasted, be grilled"
      }
    ]
  },
  "死": {
    "char": "死",
    "meaning": "death, die",
    "onyomi": "シ",
    "kunyomi": "し.ぬ, し.に-",
    "strokes": 6,
    "jlpt": "N5",
    "examples": [
      {
        "word": "死にます",
        "reading": "| しにます",
        "meaning": "die"
      }
    ]
  },
  "安": {
    "char": "安",
    "meaning": "relax, cheap, low",
    "onyomi": "アン",
    "kunyomi": "やす.い, やす.まる, やす, やす.らか",
    "strokes": 6,
    "jlpt": "N5",
    "examples": [
      {
        "word": "安心します",
        "reading": "あんしんします",
        "meaning": "be relieved"
      },
      {
        "word": "安全",
        "reading": "あんぜん",
        "meaning": "safety"
      }
    ]
  },
  "刻": {
    "char": "刻",
    "meaning": "engrave, cut fine, chop",
    "onyomi": "コク",
    "kunyomi": "きざ.む, きざ.み",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "遅刻します",
        "reading": "ちこくします",
        "meaning": "be late, come late"
      }
    ]
  },
  "恥": {
    "char": "恥",
    "meaning": "shame, dishonor",
    "onyomi": "チ",
    "kunyomi": "は.じる, はじ, は.じらう, は.ずかしい",
    "strokes": 10,
    "jlpt": "N4",
    "examples": [
      {
        "word": "恥ずかしい",
        "reading": "はずかしい",
        "meaning": "embarrassed ashamed"
      }
    ]
  },
  "震": {
    "char": "震",
    "meaning": "quake, shake, tremble",
    "onyomi": "シン",
    "kunyomi": "ふる.う, ふる.える, ふる.わせる, ふる.わす",
    "strokes": 15,
    "jlpt": "N3",
    "examples": [
      {
        "word": "地震",
        "reading": "じしん",
        "meaning": "earthquake"
      }
    ]
  },
  "故": {
    "char": "故",
    "meaning": "happenstance, especially, intentionally",
    "onyomi": "コ",
    "kunyomi": "ゆえ, ふる.い, もと",
    "strokes": 9,
    "jlpt": "N2",
    "examples": [
      {
        "word": "事故",
        "reading": "じこ",
        "meaning": "accident"
      }
    ]
  },
  "号": {
    "char": "号",
    "meaning": "nickname, number, item",
    "onyomi": "ゴウ",
    "kunyomi": "さけ.ぶ, よびな",
    "strokes": 5,
    "jlpt": "N4",
    "examples": [
      {
        "word": "ー号室",
        "reading": "ーごうしつ",
        "meaning": "room number 一"
      },
      {
        "word": "ー号",
        "reading": "ーごう",
        "meaning": "train numbcr, typhoon number, etc."
      }
    ]
  },
  "伺": {
    "char": "伺",
    "meaning": "pay respects, visit, ask",
    "onyomi": "シ",
    "kunyomi": "うかが.う",
    "strokes": 7,
    "jlpt": "N3",
    "examples": [
      {
        "word": "伺います。 '",
        "reading": "うかがいます。",
        "meaning": "m coming. (humble way of saying いきます)"
      },
      {
        "word": "伺います",
        "reading": "うかがいます",
        "meaning": "ask, hear, visit (humble equiyalentof ききます"
      }
    ]
  },
  "測": {
    "char": "測",
    "meaning": "fathom, plan, scheme",
    "onyomi": "ソク",
    "kunyomi": "はか.る",
    "strokes": 12,
    "jlpt": "N3",
    "examples": [
      {
        "word": "測ります、量リます",
        "reading": "はかります",
        "meaning": "mcasurc, weigh"
      }
    ]
  },
  "量": {
    "char": "量",
    "meaning": "quantity, measure, weight",
    "onyomi": "リョウ",
    "kunyomi": "はか.る",
    "strokes": 12,
    "jlpt": "N3",
    "examples": [
      {
        "word": "測ります、量リます",
        "reading": "はかります",
        "meaning": "mcasurc, weigh"
      }
    ]
  },
  "確": {
    "char": "確",
    "meaning": "assurance, firm, tight",
    "onyomi": "カク, コウ",
    "kunyomi": "たし.か, たし.かめる",
    "strokes": 15,
    "jlpt": "N4",
    "examples": [
      {
        "word": "確かめます",
        "reading": "たしかめます",
        "meaning": "confinn, make sure"
      }
    ]
  },
  "到": {
    "char": "到",
    "meaning": "arrival, proceed, reach",
    "onyomi": "トウ",
    "kunyomi": "いた.る",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "到着します",
        "reading": "とうちゃくします HO",
        "meaning": "arrive"
      }
    ]
  },
  "着": {
    "char": "着",
    "meaning": "don, arrive, wear",
    "onyomi": "チャク, ジャク",
    "kunyomi": "き.る, き.せる, つ.く, つ.ける",
    "strokes": 12,
    "jlpt": "N5",
    "examples": [
      {
        "word": "到着します",
        "reading": "とうちゃくします HO",
        "meaning": "arrive"
      }
    ]
  },
  "酔": {
    "char": "酔",
    "meaning": "drunk, feel sick, poisoned",
    "onyomi": "スイ",
    "kunyomi": "よ.う, よ.い, よ",
    "strokes": 11,
    "jlpt": "N2",
    "examples": [
      {
        "word": "酔います",
        "reading": "よいます TI",
        "meaning": "get drunk"
      }
    ]
  },
  "危": {
    "char": "危",
    "meaning": "dangerous, fear, uneasy",
    "onyomi": "キ",
    "kunyomi": "あぶ.ない, あや.うい, あや.ぶむ",
    "strokes": 6,
    "jlpt": "N4",
    "examples": [
      {
        "word": "危険[な]",
        "reading": "SIFA CH]",
        "meaning": "dangerous"
      }
    ]
  },
  "険": {
    "char": "険",
    "meaning": "precipitous, inaccessible place, impregnable position",
    "onyomi": "ケン",
    "kunyomi": "けわ.しい",
    "strokes": 11,
    "jlpt": "N4",
    "examples": [
      {
        "word": "危険[な]",
        "reading": "SIFA CH]",
        "meaning": "dangerous"
      }
    ]
  },
  "要": {
    "char": "要",
    "meaning": "need, main point, essence",
    "onyomi": "ヨウ",
    "kunyomi": "い.る, かなめ",
    "strokes": 9,
    "jlpt": "N4",
    "examples": [
      {
        "word": "必要[な]",
        "reading": "ひつよう[な]",
        "meaning": "necessary"
      }
    ]
  },
  "宇": {
    "char": "宇",
    "meaning": "eaves, roof, house",
    "onyomi": "ウ",
    "kunyomi": "-",
    "strokes": 6,
    "jlpt": "N3",
    "examples": [
      {
        "word": "宇宙",
        "reading": "う ちゅう",
        "meaning": "space, universe"
      }
    ]
  },
  "宙": {
    "char": "宙",
    "meaning": "mid-air, air, space",
    "onyomi": "チュウ",
    "kunyomi": "-",
    "strokes": 8,
    "jlpt": "N2",
    "examples": [
      {
        "word": "宇宙",
        "reading": "う ちゅう",
        "meaning": "space, universe"
      }
    ]
  },
  "球": {
    "char": "球",
    "meaning": "ball, sphere",
    "onyomi": "キュウ",
    "kunyomi": "たま",
    "strokes": 11,
    "jlpt": "N4",
    "examples": [
      {
        "word": "地球",
        "reading": "ちきゅう",
        "meaning": "carth"
      }
    ]
  },
  "年": {
    "char": "年",
    "meaning": "year, counter for years",
    "onyomi": "ネン",
    "kunyomi": "とし",
    "strokes": 6,
    "jlpt": "N4",
    "examples": [
      {
        "word": "新年会 New Year'",
        "reading": "しんれねれんかい",
        "meaning": "s party"
      },
      {
        "word": "お年玉",
        "reading": "おとしだま",
        "meaning": "money given as a New Years gift"
      },
      {
        "word": "さ来年",
        "reading": "さらいれねん",
        "meaning": "the year after next"
      }
    ]
  },
  "返": {
    "char": "返",
    "meaning": "return, answer, fade",
    "onyomi": "ヘン",
    "kunyomi": "かえ.す, -かえ.す, かえ.る, -かえ.る",
    "strokes": 7,
    "jlpt": "N4",
    "examples": [
      {
        "word": "返事",
        "reading": "| NAL",
        "meaning": "reply"
      }
    ]
  },
  "重": {
    "char": "重",
    "meaning": "heavy, important, esteem",
    "onyomi": "ジュウ, チョウ",
    "kunyomi": "え, おも.い, おも.り, おも.なう, かさ.ねる, かさ.なる, おも",
    "strokes": 9,
    "jlpt": "N5",
    "examples": [
      {
        "word": "重さ",
        "reading": "Bix",
        "meaning": "weight"
      }
    ]
  },
  "高": {
    "char": "高",
    "meaning": "tall, high, expensive",
    "onyomi": "コウ",
    "kunyomi": "たか.い, たか, -だか, たか.まる, たか.める",
    "strokes": 10,
    "jlpt": "N4",
    "examples": [
      {
        "word": "高さ",
        "reading": "たかさ",
        "meaning": "height"
      }
    ]
  },
  "便": {
    "char": "便",
    "meaning": "convenience, facility, excrement",
    "onyomi": "ベン, ビン",
    "kunyomi": "たよ.り",
    "strokes": 9,
    "jlpt": "N4",
    "examples": [
      {
        "word": "[-]便",
        "reading": "[-]びん",
        "meaning": "flight, flight number"
      },
      {
        "word": "宅配便",
        "reading": "たくはいびん",
        "meaning": "delivery service"
      }
    ]
  },
  "個": {
    "char": "個",
    "meaning": "individual, counter for articles",
    "onyomi": "コ, カ",
    "kunyomi": "-",
    "strokes": 10,
    "jlpt": "N3",
    "examples": [
      {
        "word": "ー個 (",
        "reading": "=",
        "meaning": "counter for small objects)"
      }
    ]
  },
  "以": {
    "char": "以",
    "meaning": "by means of, because, in view of",
    "onyomi": "イ",
    "kunyomi": "もっ.て",
    "strokes": 5,
    "jlpt": "N5",
    "examples": [
      {
        "word": "一以上",
        "reading": "ーーいいじょう",
        "meaning": "not less than ~, over ~"
      },
      {
        "word": "一以下",
        "reading": "ーーいか",
        "meaning": "not more than ~, under ~"
      },
      {
        "word": "以上です。 Thats",
        "reading": "いじょうです。",
        "meaning": "all."
      }
    ]
  },
  "項": {
    "char": "項",
    "meaning": "paragraph, nape of neck, clause",
    "onyomi": "コウ",
    "kunyomi": "うなじ",
    "strokes": 12,
    "jlpt": "N2",
    "examples": [
      {
        "word": "項",
        "reading": "うわさします",
        "meaning": "gossip"
      }
    ]
  },
  "呼": {
    "char": "呼",
    "meaning": "call, call out to, invite",
    "onyomi": "コ",
    "kunyomi": "よ.ぶ",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "呼びます",
        "reading": "よびます",
        "meaning": "invite"
      }
    ]
  },
  "替": {
    "char": "替",
    "meaning": "exchange, spare, substitute",
    "onyomi": "タイ",
    "kunyomi": "か.える, か.え-, か.わる",
    "strokes": 12,
    "jlpt": "N3",
    "examples": [
      {
        "word": "取り替えます",
        "reading": "とりかえます",
        "meaning": "exchange"
      }
    ]
  },
  "親": {
    "char": "親",
    "meaning": "parent, intimacy, relative",
    "onyomi": "シン",
    "kunyomi": "おや, おや-, した.しい, した.しむ",
    "strokes": 16,
    "jlpt": "N5",
    "examples": [
      {
        "word": "皿親切に します",
        "reading": "しんせつに します",
        "meaning": "bekindto"
      }
    ]
  },
  "祝": {
    "char": "祝",
    "meaning": "celebrate, congratulate",
    "onyomi": "シュク, シュウ",
    "kunyomi": "いわ.う",
    "strokes": 9,
    "jlpt": "N3",
    "examples": [
      {
        "word": "お祝い",
        "reading": "おいわい",
        "meaning": "celebration, gift(~ * します・ celebrate)"
      }
    ]
  },
  "玉": {
    "char": "玉",
    "meaning": "jewel, ball",
    "onyomi": "ギョク",
    "kunyomi": "たま, たま-, -だま",
    "strokes": 5,
    "jlpt": "N3",
    "examples": [
      {
        "word": "お年玉",
        "reading": "おとしだま",
        "meaning": "money given as a New Years gift"
      }
    ]
  },
  "情": {
    "char": "情",
    "meaning": "feelings, emotion, passion",
    "onyomi": "ジョウ, セイ",
    "kunyomi": "なさ.け",
    "strokes": 11,
    "jlpt": "N4",
    "examples": [
      {
        "word": "情報",
        "reading": "じょうほう",
        "meaning": "information"
      }
    ]
  },
  "報": {
    "char": "報",
    "meaning": "report, news, reward",
    "onyomi": "ホウ",
    "kunyomi": "むく.いる",
    "strokes": 12,
    "jlpt": "N4",
    "examples": [
      {
        "word": "情報",
        "reading": "じょうほう",
        "meaning": "information"
      },
      {
        "word": "天気予報",
        "reading": "てんきよほう",
        "meaning": "weather forecast"
      }
    ]
  },
  "絵": {
    "char": "絵",
    "meaning": "picture, drawing, painting",
    "onyomi": "カイ, エ",
    "kunyomi": "-",
    "strokes": 12,
    "jlpt": "N4",
    "examples": [
      {
        "word": "絵本",
        "reading": "えほん",
        "meaning": "picture book"
      },
      {
        "word": "絵はがき",
        "reading": "えはがき",
        "meaning": "picture postcard"
      }
    ]
  },
  "袋": {
    "char": "袋",
    "meaning": "sack, bag, pouch",
    "onyomi": "タイ, ダイ",
    "kunyomi": "ふくろ",
    "strokes": 11,
    "jlpt": "N3",
    "examples": [
      {
        "word": "手袋",
        "reading": "てぶてくろ",
        "meaning": "gloves"
      }
    ]
  },
  "祖": {
    "char": "祖",
    "meaning": "ancestor, pioneer, founder",
    "onyomi": "ソ",
    "kunyomi": "-",
    "strokes": 9,
    "jlpt": "N4",
    "examples": [
      {
        "word": "祖父 (",
        "reading": "Biss",
        "meaning": "my) grandfather"
      }
    ]
  },
  "父": {
    "char": "父",
    "meaning": "father",
    "onyomi": "フ",
    "kunyomi": "ちち",
    "strokes": 4,
    "jlpt": "N4",
    "examples": [
      {
        "word": "祖父 (",
        "reading": "Biss",
        "meaning": "my) grandfather"
      }
    ]
  },
  "沸": {
    "char": "沸",
    "meaning": "seethe, boil, ferment",
    "onyomi": "フツ",
    "kunyomi": "わ.く, わ.かす",
    "strokes": 8,
    "jlpt": "N3",
    "examples": [
      {
        "word": "沸かします",
        "reading": "わかします",
        "meaning": "boil"
      }
    ]
  },
  "混": {
    "char": "混",
    "meaning": "mix, blend, confuse",
    "onyomi": "コン",
    "kunyomi": "ま.じる, -ま.じり, ま.ざる, ま.ぜる, こ.む",
    "strokes": 11,
    "jlpt": "N3",
    "examples": [
      {
        "word": "混ぜます",
        "reading": "まぜます",
        "meaning": "mix"
      }
    ]
  },
  "算": {
    "char": "算",
    "meaning": "calculate, divining, number",
    "onyomi": "サン",
    "kunyomi": "そろ",
    "strokes": 14,
    "jlpt": "N3",
    "examples": [
      {
        "word": "計算します",
        "reading": "けいさんします",
        "meaning": "calculate"
      }
    ]
  },
  "培": {
    "char": "培",
    "meaning": "cultivate, foster",
    "onyomi": "バイ",
    "kunyomi": "つちか.う",
    "strokes": 11,
    "jlpt": "N2",
    "examples": [
      {
        "word": "培い",
        "reading": "うすい",
        "meaning": "thin"
      }
    ]
  },
  "護": {
    "char": "護",
    "meaning": "safeguard, protect",
    "onyomi": "ゴ",
    "kunyomi": "まも.る",
    "strokes": 20,
    "jlpt": "N2",
    "examples": [
      {
        "word": "弁護士",
        "reading": "べんごし",
        "meaning": "lawyer, attorney"
      }
    ]
  },
  "士": {
    "char": "士",
    "meaning": "gentleman, scholar, samurai",
    "onyomi": "シ",
    "kunyomi": "さむらい",
    "strokes": 3,
    "jlpt": "N2",
    "examples": [
      {
        "word": "弁護士",
        "reading": "べんごし",
        "meaning": "lawyer, attorney"
      }
    ]
  },
  "化": {
    "char": "化",
    "meaning": "change, take the form of, influence",
    "onyomi": "カ, ケ",
    "kunyomi": "ば.ける, ば.かす, ふ.ける, け.する",
    "strokes": 4,
    "jlpt": "N4",
    "examples": [
      {
        "word": "文化",
        "reading": "ぶんか",
        "meaning": "culture"
      }
    ]
  },
  "律": {
    "char": "律",
    "meaning": "rhythm, law, regulation",
    "onyomi": "リツ, リチ, レツ",
    "kunyomi": "-",
    "strokes": 9,
    "jlpt": "N3",
    "examples": [
      {
        "word": "法律",
        "reading": "(ほうりつ",
        "meaning": "law"
      }
    ]
  },
  "戦": {
    "char": "戦",
    "meaning": "war, battle, match",
    "onyomi": "セン",
    "kunyomi": "いくさ, たたか.う, おのの.く, そよ.ぐ, わなな.く",
    "strokes": 13,
    "jlpt": "N4",
    "examples": [
      {
        "word": "戦争",
        "reading": "せんそう",
        "meaning": "war"
      }
    ]
  },
  "争": {
    "char": "争",
    "meaning": "contend, dispute, argue",
    "onyomi": "ソウ",
    "kunyomi": "あらそ.う, いか.でか",
    "strokes": 6,
    "jlpt": "N4",
    "examples": [
      {
        "word": "戦争",
        "reading": "せんそう",
        "meaning": "war"
      }
    ]
  },
  "平": {
    "char": "平",
    "meaning": "even, flat, peace",
    "onyomi": "ヘイ, ビョウ, ヒョウ",
    "kunyomi": "たい.ら, たい.らげる, ひら",
    "strokes": 5,
    "jlpt": "N4",
    "examples": [
      {
        "word": "平和",
        "reading": "へいわ",
        "meaning": "peace"
      }
    ]
  },
  "和": {
    "char": "和",
    "meaning": "harmony, Japanese style, peace",
    "onyomi": "ワ, オ, カ",
    "kunyomi": "やわ.らぐ, やわ.らげる, なご.む, なご.やか, あ.える",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "平和",
        "reading": "へいわ",
        "meaning": "peace"
      }
    ]
  },
  "目": {
    "char": "目",
    "meaning": "eye, class, look",
    "onyomi": "モク, ボク",
    "kunyomi": "め, -め, ま-",
    "strokes": 5,
    "jlpt": "N5",
    "examples": [
      {
        "word": "目的",
        "reading": "もくてき",
        "meaning": "purpose"
      }
    ]
  },
  "的": {
    "char": "的",
    "meaning": "bull's eye, mark, target",
    "onyomi": "テキ",
    "kunyomi": "まと",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "目的",
        "reading": "もくてき",
        "meaning": "purpose"
      }
    ]
  },
  "全": {
    "char": "全",
    "meaning": "whole, entire, all",
    "onyomi": "ゼン",
    "kunyomi": "まった.く, すべ.て",
    "strokes": 6,
    "jlpt": "N4",
    "examples": [
      {
        "word": "安全",
        "reading": "あんぜん",
        "meaning": "safety"
      },
      {
        "word": "実全[な]",
        "reading": "あんぜん[な]",
        "meaning": "safe"
      }
    ]
  },
  "論": {
    "char": "論",
    "meaning": "argument, discourse",
    "onyomi": "ロン",
    "kunyomi": "あげつら.う",
    "strokes": 15,
    "jlpt": "N4",
    "examples": [
      {
        "word": "論文",
        "reading": "ろんぶん",
        "meaning": "thesis, academic paper"
      }
    ]
  },
  "係": {
    "char": "係",
    "meaning": "person in charge, connection, duty",
    "onyomi": "ケイ",
    "kunyomi": "かか.る, かかり, -がかり, かか.わる",
    "strokes": 9,
    "jlpt": "N4",
    "examples": [
      {
        "word": "関係",
        "reading": "かんけい",
        "meaning": "relation, connection"
      },
      {
        "word": "係",
        "reading": "かかり",
        "meaning": "person in charge"
      }
    ]
  },
  "缶": {
    "char": "缶",
    "meaning": "tin can, container, jar radical (no. 121)",
    "onyomi": "カン",
    "kunyomi": "かま",
    "strokes": 6,
    "jlpt": "N3",
    "examples": [
      {
        "word": "缶切り",
        "reading": "かんきり",
        "meaning": "can opener"
      }
    ]
  },
  "体": {
    "char": "体",
    "meaning": "body, substance, object",
    "onyomi": "タイ, テイ",
    "kunyomi": "からだ, かたち",
    "strokes": 7,
    "jlpt": "N5",
    "examples": [
      {
        "word": "体温る (",
        "reading": "たいおんけい",
        "meaning": "clinical) thermometer"
      },
      {
        "word": "体みます Eo",
        "reading": "やすみます",
        "meaning": "to bed, sleep"
      }
    ]
  },
  "材": {
    "char": "材",
    "meaning": "lumber, log, timber",
    "onyomi": "ザイ",
    "kunyomi": "-",
    "strokes": 7,
    "jlpt": "N3",
    "examples": [
      {
        "word": "材料",
        "reading": "ざいりょう",
        "meaning": "material, ingredient"
      }
    ]
  },
  "代": {
    "char": "代",
    "meaning": "substitute, change, convert",
    "onyomi": "ダイ, タイ",
    "kunyomi": "か.わる, かわ.る, かわ.り, か.わり, -がわ.り, -が.わり, か.える, よ, しろ",
    "strokes": 5,
    "jlpt": "N5",
    "examples": [
      {
        "word": "代わりに",
        "reading": "ーの",
        "meaning": "in place of ~, instead of ~"
      }
    ]
  },
  "増": {
    "char": "増",
    "meaning": "increase, add, augment",
    "onyomi": "ゾウ",
    "kunyomi": "ま.す, ま.し, ふ.える, ふ.やす",
    "strokes": 14,
    "jlpt": "N4",
    "examples": [
      {
        "word": "増えます [",
        "reading": "ふえます YT",
        "meaning": "exports] increase"
      }
    ]
  },
  "減": {
    "char": "減",
    "meaning": "dwindle, decrease, reduce",
    "onyomi": "ゲン",
    "kunyomi": "へ.る, へ.らす",
    "strokes": 12,
    "jlpt": "N3",
    "examples": [
      {
        "word": "減ります {",
        "reading": "へります",
        "meaning": "exports] decrease"
      }
    ]
  },
  "落": {
    "char": "落",
    "meaning": "fall, drop, come down",
    "onyomi": "ラク",
    "kunyomi": "お.ちる, お.ち, お.とす",
    "strokes": 12,
    "jlpt": "N4",
    "examples": [
      {
        "word": "落ちます [",
        "reading": "おちます",
        "meaning": "baggage] fall down"
      }
    ]
  },
  "泣": {
    "char": "泣",
    "meaning": "cry, weep, moan",
    "onyomi": "キュウ",
    "kunyomi": "な.く",
    "strokes": 8,
    "jlpt": "N2",
    "examples": [
      {
        "word": "泣きます",
        "reading": "なきます",
        "meaning": "cry"
      }
    ]
  },
  "笑": {
    "char": "笑",
    "meaning": "laugh",
    "onyomi": "ショウ",
    "kunyomi": "わら.う, え.む",
    "strokes": 10,
    "jlpt": "N4",
    "examples": [
      {
        "word": "笑います",
        "reading": "わらいます",
        "meaning": "laugh, smile"
      }
    ]
  },
  "乾": {
    "char": "乾",
    "meaning": "drought, dry, desiccate",
    "onyomi": "カン, ケン",
    "kunyomi": "かわ.く, かわ.かす, ほ.す, ひ.る, いぬい",
    "strokes": 11,
    "jlpt": "N3",
    "examples": [
      {
        "word": "乾きます",
        "reading": "かわきます",
        "meaning": "dry"
      }
    ]
  },
  "実": {
    "char": "実",
    "meaning": "reality, truth, seed",
    "onyomi": "ジツ, シツ",
    "kunyomi": "み, みの.る, まこと, みの, みち.る",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "実全[な]",
        "reading": "あんぜん[な]",
        "meaning": "safe"
      }
    ]
  },
  "寧": {
    "char": "寧",
    "meaning": "rather, preferably, peaceful",
    "onyomi": "ネイ",
    "kunyomi": "むし.ろ",
    "strokes": 14,
    "jlpt": "N2",
    "examples": [
      {
        "word": "丁寧[な]",
        "reading": "ていれねれい[な]",
        "meaning": "polite, courteous, careful"
      }
    ]
  },
  "導": {
    "char": "導",
    "meaning": "guidance, leading, conduct",
    "onyomi": "ドウ",
    "kunyomi": "みちび.く",
    "strokes": 15,
    "jlpt": "N3",
    "examples": [
      {
        "word": "導い",
        "reading": "うすい",
        "meaning": "weak (taste), light (color)"
      }
    ]
  },
  "由": {
    "char": "由",
    "meaning": "wherefore, a reason",
    "onyomi": "ユ, ユウ, ユイ",
    "kunyomi": "よし, よ.る",
    "strokes": 5,
    "jlpt": "N4",
    "examples": [
      {
        "word": "理由",
        "reading": "りゆ",
        "meaning": "reason"
      },
      {
        "word": "自由に",
        "reading": "じゆうに",
        "meaning": "freely"
      }
    ]
  },
  "疲": {
    "char": "疲",
    "meaning": "exhausted, tire, weary",
    "onyomi": "ヒ",
    "kunyomi": "つか.れる, -づか.れ, つか.らす",
    "strokes": 10,
    "jlpt": "N4",
    "examples": [
      {
        "word": "お疲れさまでした。 Thank",
        "reading": "[どうも]",
        "meaning": "you for being patient."
      }
    ]
  },
  "謝": {
    "char": "謝",
    "meaning": "apologize, thank, refuse",
    "onyomi": "シャ",
    "kunyomi": "あやま.る",
    "strokes": 17,
    "jlpt": "N2",
    "examples": [
      {
        "word": "謝ります",
        "reading": "あやまります",
        "meaning": "apologize"
      }
    ]
  },
  "保": {
    "char": "保",
    "meaning": "protect, guarantee, keep",
    "onyomi": "ホ, ホウ",
    "kunyomi": "たも.つ",
    "strokes": 9,
    "jlpt": "N2",
    "examples": [
      {
        "word": "保証書",
        "reading": "ほしょうしょ",
        "meaning": "guarantee"
      }
    ]
  },
  "証": {
    "char": "証",
    "meaning": "evidence, proof, certificate",
    "onyomi": "ショウ",
    "kunyomi": "あかし",
    "strokes": 12,
    "jlpt": "N2",
    "examples": [
      {
        "word": "保証書",
        "reading": "ほしょうしょ",
        "meaning": "guarantee"
      }
    ]
  },
  "贈": {
    "char": "贈",
    "meaning": "presents, send, give to",
    "onyomi": "ゾウ, ソウ",
    "kunyomi": "おく.る",
    "strokes": 18,
    "jlpt": "N3",
    "examples": [
      {
        "word": "贈り物",
        "reading": "おくりもの",
        "meaning": "gift, present (てを します: give a present)"
      }
    ]
  },
  "点": {
    "char": "点",
    "meaning": "spot, point, mark",
    "onyomi": "テン",
    "kunyomi": "つ.ける, つ.く, た.てる, さ.す, とぼ.す, とも.す, ぼち",
    "strokes": 9,
    "jlpt": "N4",
    "examples": [
      {
        "word": "点",
        "reading": "てん",
        "meaning": "point, score"
      }
    ]
  },
  "円": {
    "char": "円",
    "meaning": "circle, yen, round",
    "onyomi": "エン",
    "kunyomi": "まる.い, まる, まど, まど.か, まろ.やか",
    "strokes": 4,
    "jlpt": "N4",
    "examples": [
      {
        "word": "円]札 [",
        "reading": "[-えん]さつ [-",
        "meaning": "yen] note, bill"
      }
    ]
  },
  "札": {
    "char": "札",
    "meaning": "tag, paper money, counter for bonds",
    "onyomi": "サツ",
    "kunyomi": "ふだ",
    "strokes": 5,
    "jlpt": "N3",
    "examples": [
      {
        "word": "円]札 [",
        "reading": "[-えん]さつ [-",
        "meaning": "yen] note, bill"
      }
    ]
  },
  "焼": {
    "char": "焼",
    "meaning": "bake, burning",
    "onyomi": "ショウ",
    "kunyomi": "や.く, や.き, や.き-, -や.き, や.ける",
    "strokes": 12,
    "jlpt": "N3",
    "examples": [
      {
        "word": "焼きます",
        "reading": "やきます",
        "meaning": "bake, grill, roast"
      }
    ]
  },
  "渡": {
    "char": "渡",
    "meaning": "transit, ford, ferry",
    "onyomi": "ト",
    "kunyomi": "わた.る, -わた.る, わた.す",
    "strokes": 12,
    "jlpt": "N4",
    "examples": [
      {
        "word": "渡します",
        "reading": "わたします",
        "meaning": "hand over"
      }
    ]
  },
  "留": {
    "char": "留",
    "meaning": "detain, fasten, halt",
    "onyomi": "リュウ, ル",
    "kunyomi": "と.める, と.まる, とど.める, とど.まる, るうぶる",
    "strokes": 10,
    "jlpt": "N4",
    "examples": [
      {
        "word": "留守",
        "reading": "るす",
        "meaning": "absence"
      }
    ]
  },
  "宅": {
    "char": "宅",
    "meaning": "home, house, residence",
    "onyomi": "タク",
    "kunyomi": "-",
    "strokes": 6,
    "jlpt": "N4",
    "examples": [
      {
        "word": "宅配便",
        "reading": "たくはいびん",
        "meaning": "delivery service"
      },
      {
        "word": "お宅 (",
        "reading": "おたく",
        "meaning": "someone clses) house"
      }
    ]
  },
  "因": {
    "char": "因",
    "meaning": "cause, factor, be associated with",
    "onyomi": "イン",
    "kunyomi": "よ.る, ちな.む",
    "strokes": 6,
    "jlpt": "N4",
    "examples": [
      {
        "word": "原因",
        "reading": "げんいん",
        "meaning": "cause"
      }
    ]
  },
  "射": {
    "char": "射",
    "meaning": "shoot, shine into, onto",
    "onyomi": "シャ",
    "kunyomi": "い.る, さ.す, う.つ",
    "strokes": 10,
    "jlpt": "N2",
    "examples": [
      {
        "word": "注射",
        "reading": "ちゅうしゃ",
        "meaning": "injection"
      }
    ]
  },
  "集": {
    "char": "集",
    "meaning": "gather, meet, congregate",
    "onyomi": "シュウ",
    "kunyomi": "あつ.まる, あつ.める, つど.う",
    "strokes": 12,
    "jlpt": "N5",
    "examples": [
      {
        "word": "集まります [",
        "reading": "あつまります",
        "meaning": "people] gather"
      }
    ]
  },
  "列": {
    "char": "列",
    "meaning": "file, row, rank",
    "onyomi": "レツ, レ",
    "kunyomi": "-",
    "strokes": 6,
    "jlpt": "N4",
    "examples": [
      {
        "word": "列れます [",
        "reading": "わかれます H",
        "meaning": "people] part, separate"
      }
    ]
  },
  "長": {
    "char": "長",
    "meaning": "long, leader, superior",
    "onyomi": "チョウ",
    "kunyomi": "なが.い, おさ",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "長生きします",
        "reading": "ながいきします",
        "meaning": "livelong"
      }
    ]
  },
  "怖": {
    "char": "怖",
    "meaning": "dreadful, be frightened, fearful",
    "onyomi": "フ, ホ",
    "kunyomi": "こわ.い, こわ.がる, お.じる, おそ.れる",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "怖い",
        "reading": "こわい",
        "meaning": "frightening, horrible"
      }
    ]
  },
  "天": {
    "char": "天",
    "meaning": "heavens, sky, imperial",
    "onyomi": "テン",
    "kunyomi": "あまつ, あめ, あま-",
    "strokes": 4,
    "jlpt": "N4",
    "examples": [
      {
        "word": "天気予報",
        "reading": "てんきよほう",
        "meaning": "weather forecast"
      }
    ]
  },
  "表": {
    "char": "表",
    "meaning": "surface, table, chart",
    "onyomi": "ヒョウ",
    "kunyomi": "おもて, -おもて, あらわ.す, あらわ.れる, あら.わす",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "発表",
        "reading": "はっぴょ",
        "meaning": "announcement, prescnfation"
      }
    ]
  },
  "男": {
    "char": "男",
    "meaning": "male",
    "onyomi": "ダン, ナン",
    "kunyomi": "おとこ, お",
    "strokes": 7,
    "jlpt": "N4",
    "examples": [
      {
        "word": "男性",
        "reading": "| だんせい",
        "meaning": "male, man"
      }
    ]
  },
  "性": {
    "char": "性",
    "meaning": "sex, gender, nature",
    "onyomi": "セイ, ショウ",
    "kunyomi": "さが",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "男性",
        "reading": "| だんせい",
        "meaning": "male, man"
      }
    ]
  },
  "降": {
    "char": "降",
    "meaning": "descend, precipitate, fall",
    "onyomi": "コウ, ゴ",
    "kunyomi": "お.りる, お.ろす, ふ.る, ふ.り, くだ.る, くだ.す",
    "strokes": 10,
    "jlpt": "N4",
    "examples": [
      {
        "word": "降ろします、下るします",
        "reading": "おろします",
        "meaning": "put down, lower"
      }
    ]
  },
  "届": {
    "char": "届",
    "meaning": "deliver, reach, arrive",
    "onyomi": "カイ",
    "kunyomi": "とど.ける, -とど.け, とど.く",
    "strokes": 8,
    "jlpt": "N3",
    "examples": [
      {
        "word": "届けます",
        "reading": "とどけます",
        "meaning": "deliver, report"
      }
    ]
  },
  "嫌": {
    "char": "嫌",
    "meaning": "dislike, detest, hate",
    "onyomi": "ケン, ゲン",
    "kunyomi": "きら.う, きら.い, いや",
    "strokes": 13,
    "jlpt": "N2",
    "examples": [
      {
        "word": "嫌[な]",
        "reading": "いや[な]",
        "meaning": "unwilling, reluctant"
      }
    ]
  },
  "徒": {
    "char": "徒",
    "meaning": "on foot, junior, emptiness",
    "onyomi": "ト",
    "kunyomi": "いたずら, あだ",
    "strokes": 10,
    "jlpt": "N4",
    "examples": [
      {
        "word": "生徒",
        "reading": "せいと",
        "meaning": "pupil"
      }
    ]
  },
  "再": {
    "char": "再",
    "meaning": "again, twice, second time",
    "onyomi": "サイ, サ",
    "kunyomi": "ふたた.び",
    "strokes": 6,
    "jlpt": "N3",
    "examples": [
      {
        "word": "再入国ビザ",
        "reading": "さいにゅうこくビザ",
        "meaning": "re-entry visa"
      }
    ]
  },
  "勤": {
    "char": "勤",
    "meaning": "diligence, become employed, serve",
    "onyomi": "キン, ゴン",
    "kunyomi": "つと.める, -づと.め, つと.まる, いそ.しむ",
    "strokes": 12,
    "jlpt": "N4",
    "examples": [
      {
        "word": "勤めます",
        "reading": "つとめます",
        "meaning": "work [for a company]"
      }
    ]
  },
  "寄": {
    "char": "寄",
    "meaning": "draw near, stop in, bring near",
    "onyomi": "キ",
    "kunyomi": "よ.る, -よ.り, よ.せる",
    "strokes": 11,
    "jlpt": "N4",
    "examples": [
      {
        "word": "寄ります",
        "reading": "よります",
        "meaning": "drop into [a bank]"
      }
    ]
  },
  "召": {
    "char": "召",
    "meaning": "seduce, call, send for",
    "onyomi": "ショウ",
    "kunyomi": "め.す",
    "strokes": 5,
    "jlpt": "N3",
    "examples": [
      {
        "word": "召し上がリりリます",
        "reading": "めしあがります TI",
        "meaning": "eat, drink (respectful equivalent of たべます"
      }
    ]
  },
  "覧": {
    "char": "覧",
    "meaning": "perusal, see",
    "onyomi": "ラン",
    "kunyomi": "み.る",
    "strokes": 17,
    "jlpt": "N2",
    "examples": [
      {
        "word": "ご覧に なります",
        "reading": "ぐらんに なります T",
        "meaning": "see, look at (respectful equivalent of みます)"
      }
    ]
  },
  "旅": {
    "char": "旅",
    "meaning": "trip, travel",
    "onyomi": "リョ",
    "kunyomi": "たび",
    "strokes": 10,
    "jlpt": "N5",
    "examples": [
      {
        "word": "旅館 Japanese",
        "reading": "りょかん",
        "meaning": "style hotel or inn"
      }
    ]
  },
  "館": {
    "char": "館",
    "meaning": "building, mansion, large building",
    "onyomi": "カン",
    "kunyomi": "やかた, たて",
    "strokes": 16,
    "jlpt": "N5",
    "examples": [
      {
        "word": "旅館 Japanese",
        "reading": "りょかん",
        "meaning": "style hotel or inn"
      }
    ]
  },
  "貿": {
    "char": "貿",
    "meaning": "trade, exchange",
    "onyomi": "ボウ",
    "kunyomi": "-",
    "strokes": 12,
    "jlpt": "N3",
    "examples": [
      {
        "word": "貿易",
        "reading": "ぼぽうえき",
        "meaning": "trade"
      }
    ]
  },
  "易": {
    "char": "易",
    "meaning": "easy, ready to, simple",
    "onyomi": "エキ, イ",
    "kunyomi": "やさ.しい, やす.い",
    "strokes": 8,
    "jlpt": "N4",
    "examples": [
      {
        "word": "貿易",
        "reading": "ぼぽうえき",
        "meaning": "trade"
      }
    ]
  },
  "拝": {
    "char": "拝",
    "meaning": "worship, adore, pray to",
    "onyomi": "ハイ",
    "kunyomi": "おが.む, おろが.む",
    "strokes": 8,
    "jlpt": "N3",
    "examples": [
      {
        "word": "拝見します",
        "reading": "はいけんします",
        "meaning": "see (humble equivalentofみます)"
      }
    ]
  },
  "存": {
    "char": "存",
    "meaning": "exist, suppose, be aware of",
    "onyomi": "ソン, ゾン",
    "kunyomi": "ながら.える, あ.る, たも.つ, と.う",
    "strokes": 6,
    "jlpt": "N4",
    "examples": [
      {
        "word": "存じます",
        "reading": "ぞんじます",
        "meaning": "know (humble equivalentof しります)"
      }
    ]
  },
  "郊": {
    "char": "郊",
    "meaning": "outskirts, suburbs, rural area",
    "onyomi": "コウ",
    "kunyomi": "-",
    "strokes": 9,
    "jlpt": "N3",
    "examples": [
      {
        "word": "郊外",
        "reading": "こうがい",
        "meaning": "suburbs"
      }
    ]
  },
  "最": {
    "char": "最",
    "meaning": "utmost, most, extreme",
    "onyomi": "サイ, シュ",
    "kunyomi": "もっと.も, つま",
    "strokes": 12,
    "jlpt": "N4",
    "examples": [
      {
        "word": "最初に",
        "reading": "さいしょに",
        "meaning": "first of all"
      },
      {
        "word": "最後に",
        "reading": "さいごに",
        "meaning": "lastly"
      }
    ]
  },
  "川": {
    "char": "川",
    "meaning": "stream, river, river or three-stroke river radical (no. 47)",
    "onyomi": "セン",
    "kunyomi": "かわ",
    "strokes": 3,
    "jlpt": "N4",
    "examples": []
  },
  "田": {
    "char": "田",
    "meaning": "rice field, rice paddy",
    "onyomi": "デン",
    "kunyomi": "た",
    "strokes": 5,
    "jlpt": "N5",
    "examples": []
  },
  "木": {
    "char": "木",
    "meaning": "tree, wood",
    "onyomi": "ボク, モク",
    "kunyomi": "き, こ-",
    "strokes": 4,
    "jlpt": "N4",
    "examples": []
  },
  "土": {
    "char": "土",
    "meaning": "soil, earth, ground",
    "onyomi": "ド, ト",
    "kunyomi": "つち",
    "strokes": 3,
    "jlpt": "N4",
    "examples": []
  },
  "二": {
    "char": "二",
    "meaning": "two, two radical (no. 7)",
    "onyomi": "ニ, ジ",
    "kunyomi": "ふた, ふた.つ, ふたたび",
    "strokes": 2,
    "jlpt": "N4",
    "examples": []
  },
  "三": {
    "char": "三",
    "meaning": "three",
    "onyomi": "サン, ゾウ",
    "kunyomi": "み, み.つ, みっ.つ",
    "strokes": 3,
    "jlpt": "N4",
    "examples": []
  },
  "四": {
    "char": "四",
    "meaning": "four",
    "onyomi": "シ",
    "kunyomi": "よ, よ.つ, よっ.つ, よん",
    "strokes": 5,
    "jlpt": "N4",
    "examples": []
  },
  "五": {
    "char": "五",
    "meaning": "five",
    "onyomi": "ゴ",
    "kunyomi": "いつ, いつ.つ",
    "strokes": 4,
    "jlpt": "N4",
    "examples": []
  },
  "六": {
    "char": "六",
    "meaning": "six",
    "onyomi": "ロク, リク",
    "kunyomi": "む, む.つ, むっ.つ, むい",
    "strokes": 4,
    "jlpt": "N4",
    "examples": []
  },
  "七": {
    "char": "七",
    "meaning": "seven",
    "onyomi": "シチ",
    "kunyomi": "なな, なな.つ, なの",
    "strokes": 2,
    "jlpt": "N4",
    "examples": []
  },
  "八": {
    "char": "八",
    "meaning": "eight, eight radical (no. 12)",
    "onyomi": "ハチ, ハツ",
    "kunyomi": "や, や.つ, やっ.つ, よう",
    "strokes": 2,
    "jlpt": "N4",
    "examples": []
  },
  "九": {
    "char": "九",
    "meaning": "nine",
    "onyomi": "キュウ, ク",
    "kunyomi": "ここの, ここの.つ",
    "strokes": 2,
    "jlpt": "N4",
    "examples": []
  },
  "百": {
    "char": "百",
    "meaning": "hundred",
    "onyomi": "ヒャク, ビャク",
    "kunyomi": "もも",
    "strokes": 6,
    "jlpt": "N4",
    "examples": []
  },
  "千": {
    "char": "千",
    "meaning": "thousand",
    "onyomi": "セン",
    "kunyomi": "ち",
    "strokes": 3,
    "jlpt": "N4",
    "examples": []
  },
  "万": {
    "char": "万",
    "meaning": "ten thousand, 10,000",
    "onyomi": "マン, バン",
    "kunyomi": "よろず",
    "strokes": 3,
    "jlpt": "N4",
    "examples": []
  },
  "女": {
    "char": "女",
    "meaning": "woman, female",
    "onyomi": "ジョ, ニョ, ニョウ",
    "kunyomi": "おんな, め",
    "strokes": 3,
    "jlpt": "N4",
    "examples": []
  },
  "力": {
    "char": "力",
    "meaning": "power, strength, strong",
    "onyomi": "リョク, リキ, リイ",
    "kunyomi": "ちから",
    "strokes": 2,
    "jlpt": "N5",
    "examples": []
  },
  "口": {
    "char": "口",
    "meaning": "mouth",
    "onyomi": "コウ, ク",
    "kunyomi": "くち",
    "strokes": 3,
    "jlpt": "N5",
    "examples": []
  },
  "耳": {
    "char": "耳",
    "meaning": "ear",
    "onyomi": "ジ",
    "kunyomi": "みみ",
    "strokes": 6,
    "jlpt": "N4",
    "examples": []
  },
  "足": {
    "char": "足",
    "meaning": "leg, foot, be sufficient",
    "onyomi": "ソク",
    "kunyomi": "あし, た.りる, た.る, た.す",
    "strokes": 7,
    "jlpt": "N5",
    "examples": []
  },
  "母": {
    "char": "母",
    "meaning": "mother",
    "onyomi": "ボ",
    "kunyomi": "はは, も",
    "strokes": 5,
    "jlpt": "N4",
    "examples": []
  },
  "毎": {
    "char": "毎",
    "meaning": "every",
    "onyomi": "マイ",
    "kunyomi": "ごと, -ごと.に",
    "strokes": 6,
    "jlpt": "N4",
    "examples": []
  },
  "左": {
    "char": "左",
    "meaning": "left",
    "onyomi": "サ, シャ",
    "kunyomi": "ひだり",
    "strokes": 5,
    "jlpt": "N4",
    "examples": []
  },
  "右": {
    "char": "右",
    "meaning": "right",
    "onyomi": "ウ, ユウ",
    "kunyomi": "みぎ",
    "strokes": 5,
    "jlpt": "N4",
    "examples": []
  },
  "西": {
    "char": "西",
    "meaning": "west, Spain",
    "onyomi": "セイ, サイ, ス",
    "kunyomi": "にし",
    "strokes": 6,
    "jlpt": "N4",
    "examples": []
  },
  "北": {
    "char": "北",
    "meaning": "north",
    "onyomi": "ホク",
    "kunyomi": "きた",
    "strokes": 5,
    "jlpt": "N4",
    "examples": []
  },
  "牛": {
    "char": "牛",
    "meaning": "cow",
    "onyomi": "ギュウ",
    "kunyomi": "うし",
    "strokes": 4,
    "jlpt": "N5",
    "examples": []
  },
  "馬": {
    "char": "馬",
    "meaning": "horse",
    "onyomi": "バ, メ, マ, ボ, モ",
    "kunyomi": "うま, ま",
    "strokes": 10,
    "jlpt": "N4",
    "examples": []
  },
  "魚": {
    "char": "魚",
    "meaning": "fish",
    "onyomi": "ギョ",
    "kunyomi": "うお, さかな, -ざかな",
    "strokes": 11,
    "jlpt": "N5",
    "examples": []
  },
  "貝": {
    "char": "貝",
    "meaning": "shellfish",
    "onyomi": "バイ",
    "kunyomi": "かい",
    "strokes": 7,
    "jlpt": "N3",
    "examples": []
  },
  "雨": {
    "char": "雨",
    "meaning": "rain",
    "onyomi": "ウ",
    "kunyomi": "あめ, あま-, -さめ",
    "strokes": 8,
    "jlpt": "N4",
    "examples": []
  },
  "門": {
    "char": "門",
    "meaning": "gate, counter for cannons",
    "onyomi": "モン",
    "kunyomi": "かど, と",
    "strokes": 8,
    "jlpt": "N3",
    "examples": []
  },
  "古": {
    "char": "古",
    "meaning": "old",
    "onyomi": "コ",
    "kunyomi": "ふる.い, ふる-, -ふる.す",
    "strokes": 5,
    "jlpt": "N5",
    "examples": []
  },
  "多": {
    "char": "多",
    "meaning": "many, frequent, much",
    "onyomi": "タ",
    "kunyomi": "おお.い, まさ.に, まさ.る",
    "strokes": 6,
    "jlpt": "N5",
    "examples": []
  },
  "少": {
    "char": "少",
    "meaning": "few, little",
    "onyomi": "ショウ",
    "kunyomi": "すく.ない, すこ.し",
    "strokes": 4,
    "jlpt": "N5",
    "examples": []
  },
  "早": {
    "char": "早",
    "meaning": "early, fast",
    "onyomi": "ソウ, サッ",
    "kunyomi": "はや.い, はや, はや-, はや.まる, はや.める, さ-",
    "strokes": 6,
    "jlpt": "N5",
    "examples": []
  },
  "言": {
    "char": "言",
    "meaning": "say, word",
    "onyomi": "ゲン, ゴン",
    "kunyomi": "い.う, こと",
    "strokes": 7,
    "jlpt": "N5",
    "examples": []
  },
  "飲": {
    "char": "飲",
    "meaning": "drink, smoke, take",
    "onyomi": "イン, オン",
    "kunyomi": "の.む, -の.み",
    "strokes": 12,
    "jlpt": "N5",
    "examples": []
  },
  "読": {
    "char": "読",
    "meaning": "read",
    "onyomi": "ドク, トク, トウ",
    "kunyomi": "よ.む, -よ.み",
    "strokes": 14,
    "jlpt": "N4",
    "examples": []
  },
  "語": {
    "char": "語",
    "meaning": "word, speech, language",
    "onyomi": "ゴ",
    "kunyomi": "かた.る, かた.らう",
    "strokes": 14,
    "jlpt": "N4",
    "examples": []
  },
  "買": {
    "char": "買",
    "meaning": "buy",
    "onyomi": "バイ",
    "kunyomi": "か.う",
    "strokes": 12,
    "jlpt": "N5",
    "examples": []
  },
  "週": {
    "char": "週",
    "meaning": "week",
    "onyomi": "シュウ",
    "kunyomi": "-",
    "strokes": 11,
    "jlpt": "N5",
    "examples": []
  },
  "白": {
    "char": "白",
    "meaning": "white",
    "onyomi": "ハク, ビャク",
    "kunyomi": "しろ, しら-, しろ.い",
    "strokes": 5,
    "jlpt": "N4",
    "examples": []
  },
  "住": {
    "char": "住",
    "meaning": "dwell, reside, live",
    "onyomi": "ジュウ, ヂュウ, チュウ",
    "kunyomi": "す.む, す.まう, -ず.まい",
    "strokes": 7,
    "jlpt": "N5",
    "examples": []
  },
  "京": {
    "char": "京",
    "meaning": "capital, 10**16",
    "onyomi": "キョウ, ケイ, キン",
    "kunyomi": "みやこ",
    "strokes": 8,
    "jlpt": "N5",
    "examples": []
  },
  "府": {
    "char": "府",
    "meaning": "borough, urban prefecture, govt office",
    "onyomi": "フ",
    "kunyomi": "-",
    "strokes": 8,
    "jlpt": "N3",
    "examples": []
  },
  "県": {
    "char": "県",
    "meaning": "prefecture",
    "onyomi": "ケン",
    "kunyomi": "か.ける",
    "strokes": 9,
    "jlpt": "N3",
    "examples": []
  },
  "市": {
    "char": "市",
    "meaning": "market, city, town",
    "onyomi": "シ",
    "kunyomi": "いち",
    "strokes": 5,
    "jlpt": "N4",
    "examples": []
  },
  "区": {
    "char": "区",
    "meaning": "ward, district",
    "onyomi": "ク, オウ, コウ",
    "kunyomi": "-",
    "strokes": 4,
    "jlpt": "N3",
    "examples": []
  },
  "町": {
    "char": "町",
    "meaning": "town, village, block",
    "onyomi": "チョウ",
    "kunyomi": "まち",
    "strokes": 7,
    "jlpt": "N5",
    "examples": []
  },
  "村": {
    "char": "村",
    "meaning": "village, town",
    "onyomi": "ソン",
    "kunyomi": "むら",
    "strokes": 7,
    "jlpt": "N3",
    "examples": []
  },
  "暗": {
    "char": "暗",
    "meaning": "darkness, disappear, shade",
    "onyomi": "アン",
    "kunyomi": "くら.い, くら.む, くれ.る",
    "strokes": 13,
    "jlpt": "N4",
    "examples": []
  },
  "遠": {
    "char": "遠",
    "meaning": "distant, far",
    "onyomi": "エン, オン",
    "kunyomi": "とお.い",
    "strokes": 13,
    "jlpt": "N4",
    "examples": []
  },
  "弱": {
    "char": "弱",
    "meaning": "weak, frail",
    "onyomi": "ジャク",
    "kunyomi": "よわ.い, よわ.る, よわ.まる, よわ.める",
    "strokes": 10,
    "jlpt": "N3",
    "examples": []
  },
  "軽": {
    "char": "軽",
    "meaning": "lightly, trifling, unimportant",
    "onyomi": "ケイ, キョウ, キン",
    "kunyomi": "かる.い, かろ.やか, かろ.んじる",
    "strokes": 12,
    "jlpt": "N3",
    "examples": []
  },
  "特": {
    "char": "特",
    "meaning": "special",
    "onyomi": "トク",
    "kunyomi": "-",
    "strokes": 10,
    "jlpt": "N5",
    "examples": []
  },
  "別": {
    "char": "別",
    "meaning": "separate, branch off, diverge",
    "onyomi": "ベツ",
    "kunyomi": "わか.れる, わ.ける",
    "strokes": 7,
    "jlpt": "N5",
    "examples": []
  },
  "有": {
    "char": "有",
    "meaning": "possess, have, exist",
    "onyomi": "ユウ, ウ",
    "kunyomi": "あ.る",
    "strokes": 6,
    "jlpt": "N5",
    "examples": []
  },
  "利": {
    "char": "利",
    "meaning": "profit, advantage, benefit",
    "onyomi": "リ",
    "kunyomi": "き.く",
    "strokes": 7,
    "jlpt": "N4",
    "examples": []
  },
  "不": {
    "char": "不",
    "meaning": "negative, non-, bad",
    "onyomi": "フ, ブ",
    "kunyomi": "-",
    "strokes": 4,
    "jlpt": "N5",
    "examples": []
  },
  "好": {
    "char": "好",
    "meaning": "fond, pleasing, like something",
    "onyomi": "コウ",
    "kunyomi": "この.む, す.く, よ.い, い.い",
    "strokes": 6,
    "jlpt": "N4",
    "examples": []
  },
  "急": {
    "char": "急",
    "meaning": "hurry, emergency, sudden",
    "onyomi": "キュウ",
    "kunyomi": "いそ.ぐ, いそ.ぎ, せ.く",
    "strokes": 9,
    "jlpt": "N5",
    "examples": []
  },
  "低": {
    "char": "低",
    "meaning": "lower, short, humble",
    "onyomi": "テイ",
    "kunyomi": "ひく.い, ひく.める, ひく.まる",
    "strokes": 7,
    "jlpt": "N3",
    "examples": []
  },
  "広": {
    "char": "広",
    "meaning": "wide, broad, spacious",
    "onyomi": "コウ",
    "kunyomi": "ひろ.い, ひろ.まる, ひろ.める, ひろ.がる, ひろ.げる",
    "strokes": 5,
    "jlpt": "N5",
    "examples": []
  },
  "短": {
    "char": "短",
    "meaning": "short, brevity, fault",
    "onyomi": "タン",
    "kunyomi": "みじか.い",
    "strokes": 12,
    "jlpt": "N3",
    "examples": []
  },
  "良": {
    "char": "良",
    "meaning": "good, pleasing, skilled",
    "onyomi": "リョウ",
    "kunyomi": "よ.い, -よ.い, い.い, -い.い",
    "strokes": 7,
    "jlpt": "N4",
    "examples": []
  },
  "黒": {
    "char": "黒",
    "meaning": "black",
    "onyomi": "コク",
    "kunyomi": "くろ, くろ.ずむ, くろ.い",
    "strokes": 11,
    "jlpt": "N5",
    "examples": []
  },
  "映": {
    "char": "映",
    "meaning": "reflect, reflection, projection",
    "onyomi": "エイ",
    "kunyomi": "うつ.る, うつ.す, は.える, -ば.え",
    "strokes": 9,
    "jlpt": "N5",
    "examples": []
  },
  "画": {
    "char": "画",
    "meaning": "brush-stroke, picture",
    "onyomi": "ガ, カク, エ, カイ",
    "kunyomi": "えが.く, かく.する, かぎ.る, はかりごと, はか.る",
    "strokes": 8,
    "jlpt": "N5",
    "examples": []
  },
  "歌": {
    "char": "歌",
    "meaning": "song, sing",
    "onyomi": "カ",
    "kunyomi": "うた, うた.う",
    "strokes": 14,
    "jlpt": "N5",
    "examples": []
  },
  "写": {
    "char": "写",
    "meaning": "copy, be photographed, describe",
    "onyomi": "シャ, ジャ",
    "kunyomi": "うつ.す, うつ.る, うつ-, うつ.し",
    "strokes": 5,
    "jlpt": "N5",
    "examples": []
  },
  "仕": {
    "char": "仕",
    "meaning": "attend, doing, official",
    "onyomi": "シ, ジ",
    "kunyomi": "つか.える",
    "strokes": 5,
    "jlpt": "N5",
    "examples": []
  },
  "産": {
    "char": "産",
    "meaning": "products, bear, give birth",
    "onyomi": "サン",
    "kunyomi": "う.む, う.まれる, うぶ-, む.す",
    "strokes": 11,
    "jlpt": "N4",
    "examples": []
  },
  "林": {
    "char": "林",
    "meaning": "grove, forest",
    "onyomi": "リン",
    "kunyomi": "はやし",
    "strokes": 8,
    "jlpt": "N3",
    "examples": []
  },
  "森": {
    "char": "森",
    "meaning": "forest, woods",
    "onyomi": "シン",
    "kunyomi": "もり",
    "strokes": 12,
    "jlpt": "N3",
    "examples": []
  },
  "洋": {
    "char": "洋",
    "meaning": "ocean, sea, foreign",
    "onyomi": "ヨウ",
    "kunyomi": "-",
    "strokes": 9,
    "jlpt": "N5",
    "examples": []
  },
  "雪": {
    "char": "雪",
    "meaning": "snow",
    "onyomi": "セツ",
    "kunyomi": "ゆき",
    "strokes": 11,
    "jlpt": "N4",
    "examples": []
  },
  "光": {
    "char": "光",
    "meaning": "ray, light",
    "onyomi": "コウ",
    "kunyomi": "ひか.る, ひかり",
    "strokes": 6,
    "jlpt": "N4",
    "examples": []
  },
  "風": {
    "char": "風",
    "meaning": "wind, air, style",
    "onyomi": "フウ, フ",
    "kunyomi": "かぜ, かざ-",
    "strokes": 9,
    "jlpt": "N5",
    "examples": []
  },
  "季": {
    "char": "季",
    "meaning": "seasons",
    "onyomi": "キ",
    "kunyomi": "-",
    "strokes": 8,
    "jlpt": "N3",
    "examples": []
  },
  "節": {
    "char": "節",
    "meaning": "node, season, period",
    "onyomi": "セツ, セチ",
    "kunyomi": "ふし, -ぶし, のっと",
    "strokes": 13,
    "jlpt": "N2",
    "examples": []
  },
  "春": {
    "char": "春",
    "meaning": "springtime, spring (season)",
    "onyomi": "シュン",
    "kunyomi": "はる",
    "strokes": 9,
    "jlpt": "N5",
    "examples": []
  },
  "夏": {
    "char": "夏",
    "meaning": "summer",
    "onyomi": "カ, ガ, ゲ",
    "kunyomi": "なつ",
    "strokes": 10,
    "jlpt": "N5",
    "examples": []
  },
  "秋": {
    "char": "秋",
    "meaning": "autumn",
    "onyomi": "シュウ",
    "kunyomi": "あき, とき",
    "strokes": 9,
    "jlpt": "N5",
    "examples": []
  },
  "冬": {
    "char": "冬",
    "meaning": "winter",
    "onyomi": "トウ",
    "kunyomi": "ふゆ",
    "strokes": 5,
    "jlpt": "N5",
    "examples": []
  },
  "暑": {
    "char": "暑",
    "meaning": "sultry, hot, summer heat",
    "onyomi": "ショ",
    "kunyomi": "あつ.い",
    "strokes": 12,
    "jlpt": "N2",
    "examples": []
  },
  "寒": {
    "char": "寒",
    "meaning": "cold",
    "onyomi": "カン",
    "kunyomi": "さむ.い",
    "strokes": 12,
    "jlpt": "N4",
    "examples": []
  },
  "暖": {
    "char": "暖",
    "meaning": "warmth",
    "onyomi": "ダン, ノン",
    "kunyomi": "あたた.か, あたた.かい, あたた.まる, あたた.める",
    "strokes": 13,
    "jlpt": "N2",
    "examples": []
  },
  "涼": {
    "char": "涼",
    "meaning": "refreshing, nice and cool",
    "onyomi": "リョウ",
    "kunyomi": "すず.しい, すず.む, すず.やか, うす.い, ひや.す, まことに",
    "strokes": 11,
    "jlpt": "N3",
    "examples": []
  },
  "頭": {
    "char": "頭",
    "meaning": "head, counter for large animals",
    "onyomi": "トウ, ズ, ト",
    "kunyomi": "あたま, かしら, -がしら, かぶり",
    "strokes": 16,
    "jlpt": "N4",
    "examples": []
  },
  "顔": {
    "char": "顔",
    "meaning": "face, expression",
    "onyomi": "ガン",
    "kunyomi": "かお",
    "strokes": 18,
    "jlpt": "N4",
    "examples": []
  },
  "首": {
    "char": "首",
    "meaning": "neck, counter for songs and poems",
    "onyomi": "シュ",
    "kunyomi": "くび",
    "strokes": 9,
    "jlpt": "N4",
    "examples": []
  },
  "薬": {
    "char": "薬",
    "meaning": "medicine, chemical, enamel",
    "onyomi": "ヤク",
    "kunyomi": "くすり",
    "strokes": 16,
    "jlpt": "N4",
    "examples": []
  },
  "内": {
    "char": "内",
    "meaning": "inside, within, between",
    "onyomi": "ナイ, ダイ",
    "kunyomi": "うち",
    "strokes": 4,
    "jlpt": "N4",
    "examples": []
  },
  "夕": {
    "char": "夕",
    "meaning": "evening",
    "onyomi": "セキ",
    "kunyomi": "ゆう",
    "strokes": 3,
    "jlpt": "N5",
    "examples": []
  },
  "晩": {
    "char": "晩",
    "meaning": "nightfall, night",
    "onyomi": "バン",
    "kunyomi": "-",
    "strokes": 12,
    "jlpt": "N4",
    "examples": []
  },
  "曜": {
    "char": "曜",
    "meaning": "weekday",
    "onyomi": "ヨウ",
    "kunyomi": "-",
    "strokes": 18,
    "jlpt": "N5",
    "examples": []
  },
  "走": {
    "char": "走",
    "meaning": "run",
    "onyomi": "ソウ",
    "kunyomi": "はし.る",
    "strokes": 7,
    "jlpt": "N5",
    "examples": []
  },
  "借": {
    "char": "借",
    "meaning": "borrow, rent",
    "onyomi": "シャク",
    "kunyomi": "か.りる",
    "strokes": 10,
    "jlpt": "N5",
    "examples": []
  },
  "貸": {
    "char": "貸",
    "meaning": "lend",
    "onyomi": "タイ",
    "kunyomi": "か.す, か.し-, かし-",
    "strokes": 12,
    "jlpt": "N5",
    "examples": []
  },
  "両": {
    "char": "両",
    "meaning": "both, old Japanese coin, counter for carriages (e.g., in a train)",
    "onyomi": "リョウ",
    "kunyomi": "てる, ふたつ",
    "strokes": 6,
    "jlpt": "N4",
    "examples": []
  },
  "兄": {
    "char": "兄",
    "meaning": "elder brother, big brother",
    "onyomi": "ケイ, キョウ",
    "kunyomi": "あに",
    "strokes": 5,
    "jlpt": "N5",
    "examples": []
  },
  "弟": {
    "char": "弟",
    "meaning": "younger brother, faithful service to elders",
    "onyomi": "テイ, ダイ, デ",
    "kunyomi": "おとうと",
    "strokes": 7,
    "jlpt": "N5",
    "examples": []
  },
  "姉": {
    "char": "姉",
    "meaning": "elder sister",
    "onyomi": "シ",
    "kunyomi": "あね, はは",
    "strokes": 8,
    "jlpt": "N5",
    "examples": []
  },
  "妹": {
    "char": "妹",
    "meaning": "younger sister",
    "onyomi": "マイ",
    "kunyomi": "いもうと",
    "strokes": 8,
    "jlpt": "N5",
    "examples": []
  },
  "活": {
    "char": "活",
    "meaning": "lively, resuscitation, being helped",
    "onyomi": "カツ",
    "kunyomi": "い.きる, い.かす, い.ける",
    "strokes": 9,
    "jlpt": "N4",
    "examples": []
  },
  "回": {
    "char": "回",
    "meaning": "-times, round, game",
    "onyomi": "カイ, エ",
    "kunyomi": "まわ.る, -まわ.る, -まわ.り, まわ.す, -まわ.す, まわ.し-, -まわ.し, もとお.る, か.える",
    "strokes": 6,
    "jlpt": "N4",
    "examples": []
  },
  "主": {
    "char": "主",
    "meaning": "lord, chief, master",
    "onyomi": "シュ, ス, シュウ",
    "kunyomi": "ぬし, おも, あるじ",
    "strokes": 5,
    "jlpt": "N5",
    "examples": []
  },
  "民": {
    "char": "民",
    "meaning": "people, nation, subjects",
    "onyomi": "ミン",
    "kunyomi": "たみ",
    "strokes": 5,
    "jlpt": "N4",
    "examples": []
  },
  "服": {
    "char": "服",
    "meaning": "clothing, admit, obey",
    "onyomi": "フク",
    "kunyomi": "-",
    "strokes": 8,
    "jlpt": "N5",
    "examples": []
  },
  "犬": {
    "char": "犬",
    "meaning": "dog",
    "onyomi": "ケン",
    "kunyomi": "いぬ, いぬ-",
    "strokes": 4,
    "jlpt": "N5",
    "examples": []
  },
  "同": {
    "char": "同",
    "meaning": "same, agree, equal",
    "onyomi": "ドウ",
    "kunyomi": "おな.じ",
    "strokes": 6,
    "jlpt": "N5",
    "examples": []
  },
  "米": {
    "char": "米",
    "meaning": "rice, USA, metre",
    "onyomi": "ベイ, マイ, メエトル",
    "kunyomi": "こめ, よね",
    "strokes": 6,
    "jlpt": "N4",
    "examples": []
  },
  "鳥": {
    "char": "鳥",
    "meaning": "bird, chicken",
    "onyomi": "チョウ",
    "kunyomi": "とり",
    "strokes": 11,
    "jlpt": "N5",
    "examples": []
  },
  "野": {
    "char": "野",
    "meaning": "plains, field, rustic",
    "onyomi": "ヤ, ショ",
    "kunyomi": "の, の-",
    "strokes": 11,
    "jlpt": "N5",
    "examples": []
  },
  "菜": {
    "char": "菜",
    "meaning": "vegetable, side dish, greens",
    "onyomi": "サイ",
    "kunyomi": "な",
    "strokes": 11,
    "jlpt": "N3",
    "examples": []
  },
  "飯": {
    "char": "飯",
    "meaning": "meal, boiled rice",
    "onyomi": "ハン",
    "kunyomi": "めし",
    "strokes": 12,
    "jlpt": "N5",
    "examples": []
  },
  "進": {
    "char": "進",
    "meaning": "advance, proceed, progress",
    "onyomi": "シン",
    "kunyomi": "すす.む, すす.める",
    "strokes": 11,
    "jlpt": "N4",
    "examples": []
  },
  "送": {
    "char": "送",
    "meaning": "escort, send",
    "onyomi": "ソウ",
    "kunyomi": "おく.る",
    "strokes": 9,
    "jlpt": "N5",
    "examples": []
  },
  "乗": {
    "char": "乗",
    "meaning": "ride, power, multiplication",
    "onyomi": "ジョウ, ショウ",
    "kunyomi": "の.る, -の.り, の.せる",
    "strokes": 9,
    "jlpt": "N4",
    "examples": []
  },
  "漢": {
    "char": "漢",
    "meaning": "Sino-, China",
    "onyomi": "カン",
    "kunyomi": "-",
    "strokes": 13,
    "jlpt": "N5",
    "examples": []
  },
  "字": {
    "char": "字",
    "meaning": "character, letter, word",
    "onyomi": "ジ",
    "kunyomi": "あざ, あざな, -な",
    "strokes": 6,
    "jlpt": "N5",
    "examples": []
  },
  "英": {
    "char": "英",
    "meaning": "England, English, hero",
    "onyomi": "エイ",
    "kunyomi": "はなぶさ",
    "strokes": 8,
    "jlpt": "N5",
    "examples": []
  },
  "考": {
    "char": "考",
    "meaning": "consider, think over",
    "onyomi": "コウ",
    "kunyomi": "かんが.える, かんが.え",
    "strokes": 6,
    "jlpt": "N5",
    "examples": []
  },
  "題": {
    "char": "題",
    "meaning": "topic, subject",
    "onyomi": "ダイ",
    "kunyomi": "-",
    "strokes": 18,
    "jlpt": "N5",
    "examples": []
  },
  "試": {
    "char": "試",
    "meaning": "test, try, attempt",
    "onyomi": "シ",
    "kunyomi": "こころ.みる, ため.す",
    "strokes": 13,
    "jlpt": "N5",
    "examples": []
  },
  "質": {
    "char": "質",
    "meaning": "substance, quality, matter",
    "onyomi": "シツ, シチ, チ",
    "kunyomi": "たち, ただ.す, もと, わりふ",
    "strokes": 15,
    "jlpt": "N5",
    "examples": []
  },
  "紙": {
    "char": "紙",
    "meaning": "paper",
    "onyomi": "シ",
    "kunyomi": "かみ",
    "strokes": 10,
    "jlpt": "N5",
    "examples": []
  },
  "思": {
    "char": "思",
    "meaning": "think",
    "onyomi": "シ",
    "kunyomi": "おも.う, おもえら.く, おぼ.す",
    "strokes": 9,
    "jlpt": "N5",
    "examples": []
  }
};

export function getKanjiBreakdown(word: string): KanjiInfo[] {
  if (!word) return [];
  const chars = Array.from(new Set(word.split('')));
  const results: KanjiInfo[] = [];

  for (const ch of chars) {
    if (/[\u4E00-\u9FAF]/.test(ch)) {
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
