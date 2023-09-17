// Store this in .env file
import { createClient } from '@supabase/supabase-js';


const supabaseUrl = "https://ezocfbqgpoojzcglytej.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6b2NmYnFncG9vanpjZ2x5dGVqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ5NzM1NDAsImV4cCI6MjAxMDU0OTU0MH0.8wGtLoSgBcfV76Nc_6_yVwzG-GoxTOxQvoVGUVFayfI";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

//  password: QXSfrzgLf2DjQ97N

