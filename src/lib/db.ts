import { createClient } from '@supabase/auth-helpers-sveltekit'
import { writable } from "svelte/store";
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from '$env/static/public';
export const LOGGED_IN = writable(false)
export const supabaseClient = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY)