import type { LayoutLoad } from './$types'
import { getSupabase } from '@supabase/auth-helpers-sveltekit'

// @ts-ignore
export const load: LayoutLoad = async (event) => {
  const { session } = await getSupabase(event)
  console.log('session', session)
  return { session }
}
