//const supabaseUrl = "https://qhckkhonmmkqlibtvopx.supabase.co";
//const supabaseKey = "sb_publishable_I3m1QG_iZL01abbODbY3sw_itf29ApA";

//const supabase = window.supabase.createClient(supabaseUrl, supabaseKey);


import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://qhckkhonmmkqlibtvopx.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_I3m1QG_iZL01abbODbY3sw_itf29ApA';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);