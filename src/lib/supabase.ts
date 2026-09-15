import { createClient } from '@supabase/supabase-js';
import { MOCK_CARDS } from '../data/mockCards';
import { Card } from '../types/card';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchCardsByChapter(chapter: number): Promise<Card[]> {
  if (supabaseUrl === 'https://placeholder.supabase.co' || !supabaseUrl) {
    console.warn(`⚠️ [Data Source] Using Local Vocabulary Data for Chapter ${chapter}`);
    return MOCK_CARDS.filter(c => c.chapter === chapter);
  }

  try {
    const { data, error } = await supabase
      .from('cards')
      .select('*')
      .eq('chapter', chapter);

    if (error || !data || data.length === 0) {
      console.warn(`⚠️ [Data Source] Falling back to local dataset for Chapter ${chapter} (Db empty or offline)`);
      return MOCK_CARDS.filter(c => c.chapter === chapter);
    }

    console.log(`⚡ [Supabase Data] Successfully pulled ${data.length} cards for Chapter ${chapter}`);
    return data;
  } catch (err) {
    console.error('❌ [Supabase Error] Query failed, using fallback deck:', err);
    return MOCK_CARDS.filter(c => c.chapter === chapter);
  }
}

export async function fetchAvailableChapters(): Promise<number[]> {
  const localChapters = Array.from(new Set(MOCK_CARDS.map(c => c.chapter))).sort((a, b) => a - b);

  if (supabaseUrl === 'https://placeholder.supabase.co' || !supabaseUrl) {
    return localChapters;
  }

  try {
    const { data, error } = await supabase
      .from('cards')
      .select('chapter');

    if (error || !data || data.length === 0) {
      return localChapters;
    }

    const dbChapters = Array.from(new Set(data.map((item: { chapter: number }) => item.chapter))).sort((a, b) => a - b);
    const combinedChapters = Array.from(new Set([...localChapters, ...dbChapters])).sort((a, b) => a - b);
    return combinedChapters;
  } catch {
    return localChapters;
  }
}
