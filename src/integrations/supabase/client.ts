
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://sibsipfurmgtxmxbbzem.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpYnNpcGZ1cm1ndHhteGJiemVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyNjYwNDksImV4cCI6MjA2Mzg0MjA0OX0.InGEnRnC_IaPye0z87bHSkahxXjfl94jT9uQSg5QL2c'

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
})
