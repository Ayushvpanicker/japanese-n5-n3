import { createClient } from '@supabase/supabase-js';
import { MOCK_CARDS } from '../data/mockCards';
import { Card } from '../types/card';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchCardsByChapter(chapter: number): Promise<Card[]> {
  if (supabaseUrl === 'https://placeholder.supabase.co') {
    return MOCK_CARDS.filter(c => c.chapter === chapter);
  }

  const { data, error } = await supabase
    .from('cards')
    .select('*')
    .eq('chapter', chapter);

  if (error) {
    console.error('Error fetching cards:', error);
    return [];
  }
  return data || [];
}

export async function fetchAvailableChapters(): Promise<number[]> {
  if (supabaseUrl === 'https://placeholder.supabase.co') {
    return Array.from(new Set(MOCK_CARDS.map(c => c.chapter))).sort((a, b) => a - b);
  }

  const { data, error } = await supabase
    .from('cards')
    .select('chapter');

  if (error || !data) {
    console.error('Error fetching chapters:', error);
    return [1, 2, 3, 4, 5, 26];
  }

  const chapters = Array.from(new Set(data.map((item: { chapter: number }) => item.chapter))).sort((a, b) => a - b);
  return chapters.length > 0 ? chapters : [1, 2, 3, 4, 5, 26];
}
