import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://qkqgtehesbjryfdkjocr.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_53iRkyp4fLxL3_eHuTrczA_XCgxrTVJ";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);