import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://czkwpzaoyydiwmasmsqr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6a3dwemFveXlkaXdtYXNtc3FyIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1MDY3OTM1MiwiZXhwIjoyMDY2MjU1MzUyfQ.SMVJ4Jq_JFDWKrWtouDFktJCzWdTE3NE8KA3FS64Yf4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;