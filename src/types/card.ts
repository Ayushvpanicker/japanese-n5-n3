export interface Card {
  id: string;
  chapter: number;
  kanji: string | null;
  reading: string;
  meaning: string;
  notes: string | null;
}

export type DisplayMode = 'all' | 'kanji-only' | 'reading-only';
export type AudioSpeed = 0.75 | 1.0;
