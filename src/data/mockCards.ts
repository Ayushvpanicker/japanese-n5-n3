import { Card } from '../types/card';

export const MOCK_CARDS: Card[] = [
  { id: '1', chapter: 1, kanji: '私', reading: 'わたし', meaning: 'I, me', notes: 'Topic marker わたしは is very common.' },
  { id: '2', chapter: 1, kanji: null, reading: 'あなた', meaning: 'You', notes: 'Rarely used directly in polite conversation.' },
  { id: '3', chapter: 1, kanji: '学生', reading: 'がくせい', meaning: 'Student', notes: null },
  { id: '4', chapter: 1, kanji: '先生', reading: 'せんせい', meaning: 'Teacher, instructor', notes: 'Not used to refer to oneself.' },
  { id: '5', chapter: 1, kanji: '会社員', reading: 'かいしゃいん', meaning: 'Company employee', notes: null },
];
