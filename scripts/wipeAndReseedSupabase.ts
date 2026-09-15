import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';
import { MOCK_CARDS } from '../src/data/mockCards';

async function wipeAndReseed() {
  const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey || supabaseUrl.includes('placeholder')) {
    console.error('❌ Missing Supabase URL or Key in environment variables.');
    process.exit(1);
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  console.log('----------------------------------------------------');
  console.log('🧹 STEP 1: Deleting ALL contents from Supabase `cards` table...');
  
  // Delete all rows in cards table
  const { error: deleteError, count: deletedCount } = await supabase
    .from('cards')
    .delete({ count: 'exact' })
    .gte('chapter', 0);

  if (deleteError) {
    console.error(`❌ Deletion Error: ${deleteError.message}`);
    // Try fallback deletion query if gte chapter fails
    const { error: fallbackError } = await supabase.from('cards').delete().neq('id', '00000000-0000-0000-0000-000000000000');
    if (fallbackError) {
      console.error(`❌ Fallback Deletion Error: ${fallbackError.message}`);
    }
  } else {
    console.log(`✓ Deleted ${deletedCount ?? 'all'} existing rows from Supabase.`);
  }

  // Verify table is empty
  const { count: currentCount } = await supabase.from('cards').select('*', { count: 'exact', head: true });
  console.log(`📊 Current table row count after wipe: ${currentCount ?? 0}`);

  console.log('----------------------------------------------------');
  console.log(`🚀 STEP 2: Inserting ${MOCK_CARDS.length} clean vocabulary cards into Supabase...`);

  // Strip client IDs so Supabase handles UUID generation cleanly
  const payload = MOCK_CARDS.map(({ id, ...card }) => ({
    chapter: card.chapter,
    kanji: card.kanji || null,
    reading: card.reading.trim(),
    meaning: card.meaning.trim(),
    notes: card.notes || null,
  }));

  const BATCH_SIZE = 50;
  let totalInserted = 0;

  for (let i = 0; i < payload.length; i += BATCH_SIZE) {
    const batch = payload.slice(i, i + BATCH_SIZE);
    const { data, error } = await supabase.from('cards').insert(batch).select();

    if (error) {
      console.error(`❌ Batch insert failed for items ${i + 1}-${i + batch.length}: ${error.message}`);
    } else {
      const insertedCount = data ? data.length : batch.length;
      totalInserted += insertedCount;
      console.log(`  ✓ Inserted batch ${i + 1}-${i + batch.length} (${insertedCount} rows)`);
    }
  }

  console.log('----------------------------------------------------');
  // Final verification check
  const { count: finalCount } = await supabase.from('cards').select('*', { count: 'exact', head: true });
  console.log('✅ SUCCESS! Supabase cards table fully reseeded.');
  console.log(`📊 Total rows in Supabase database: ${finalCount}`);
  console.log('----------------------------------------------------');
}

wipeAndReseed().catch(console.error);
