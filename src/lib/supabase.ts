import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ifffeanzsbjsdxrvvgme.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlmZmZlYW56c2Jqc2R4cnZ2Z21lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyMTU2ODgsImV4cCI6MjA2Mzc5MTY4OH0.OBleByKL7Pe-dAW2-jIFrlQiZgIs-vJ9Kio0Hg1YzTk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);