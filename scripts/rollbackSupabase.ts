import 'dotenv/config';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('\n❌ Error: Missing Supabase environment variables!');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function rollbackSupabase() {
  console.log('\n🔄 Rolling back Supabase `cards` table...');

  // Delete all rows in cards table
  const { data, error } = await supabase
    .from('cards')
    .delete()
    .neq('id', '00000000-0000-0000-0000-000000000000') // matches all IDs
    .select();

  if (error) {
    console.error('❌ Rollback failed:', error.message);
  } else {
    console.log(`✅ Supabase rollback complete! Deleted ${data ? data.length : 'all'} inserted rows from cards table.\n`);
  }
}

rollbackSupabase().catch(console.error);
