export interface Card {
  id: string;
  chapter: number;
  kanji: string | null;
  reading: string;
  meaning: string;
  notes: string | null;
}
