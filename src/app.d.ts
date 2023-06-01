/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Supabase {
		// Use the path to where you generated the types using the Supbase CLI.
		Database: import('../types/supabase').Database;
		SchemaName: 'public'
	}

	// interface Locals {}
	interface PageData {
		session: import('@supabase/supabase-js').Session | null;
		teams: string[]
	}
	// interface Error {}
	// interface Platform {}
}
