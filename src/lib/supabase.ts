import { createClient } from '@supabase/supabase-js';
import { MOCK_CARDS } from '../data/mockCards';
import { Card } from '../types/card';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

export async function fetchCardsByChapter(chapter: number): Promise<Card[]> {
  if (supabaseUrl === 'https://placeholder.supabase.co') {
    console.warn('⚠️ [Data Source] Using Mock Data (Missing VITE_SUPABASE_URL)');
    return MOCK_CARDS.filter(c => c.chapter === chapter);
  }

  const { data, error } = await supabase
    .from('cards')
    .select('*')
    .eq('chapter', chapter);

  if (error) {
    console.error('❌ [Supabase Error] Fetching cards failed:', error.message);
    return [];
  }

  console.log(`⚡ [Supabase Data] Successfully pulled ${data?.length || 0} cards for Chapter ${chapter} from database`);
  return data || [];
}

export async function fetchAvailableChapters(): Promise<number[]> {
  if (supabaseUrl === 'https://placeholder.supabase.co') {
    console.warn('⚠️ [Data Source] Using Mock Chapters (Missing VITE_SUPABASE_URL)');
    return Array.from(new Set(MOCK_CARDS.map(c => c.chapter))).sort((a, b) => a - b);
  }

  const { data, error } = await supabase
    .from('cards')
    .select('chapter');

  if (error || !data) {
    console.error('❌ [Supabase Error] Fetching chapters failed:', error?.message);
    return [1, 2, 3, 4, 5, 26];
  }

  const chapters = Array.from(new Set(data.map((item: { chapter: number }) => item.chapter))).sort((a, b) => a - b);
  console.log(`⚡ [Supabase Data] Loaded ${chapters.length} active chapters from Supabase database:`, chapters);
  return chapters.length > 0 ? chapters : [1, 2, 3, 4, 5, 26];
}
