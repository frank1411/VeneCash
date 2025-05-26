import { createClient } from '@supabase/supabase-js';

// Reemplaza estos valores con tus credenciales de Supabase
const supabaseUrl = 'https://[TU-PROYECTO-ID].supabase.co';
const supabaseAnonKey = '[TU-ANON-KEY]';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);