import type { Actions } from './$types';
import { fail, type RequestEvent } from '@sveltejs/kit';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { AuthApiError } from "@supabase/supabase-js";

export const actions:Actions = {
    login:async (event:RequestEvent) => {
        const {request} = event;
    const { supabaseClient } = await getSupabase(event);
    const formData = await request.formData();
const email = formData.get('email') as string;
    const {data,error} = await supabaseClient.auth.signInWithPassword({
        email,
        password:formData.get('password') as string
    })

    if(error){
      if(error instanceof AuthApiError){
            if(error.status === 401) {
          return fail(400, {email, response: error.message});
        }
        if(error.status === 400 || error.status === 403) {
          return fail(400, {email, response: error.message, });
        }
        if(error.status === 429) {
          return fail(400, {email, response: error.message, });
        }
        }
      return fail(500, {email, response: error.message});

    }

    return {data,error, response:'success'}
        }
}