import '$lib/db'
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { redirect, error, type Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  console.log("handle", event.url.href)
  // redirect to login page if invalid session
  if (!event.url.pathname.startsWith('/login')) {
    const { session, supabaseClient } = await getSupabase(event);
    console.log(session,supabaseClient,'testststtst')
     if (!session) {
      throw redirect(302, '/login');
    }

   
  }

  return resolve(event);
};
