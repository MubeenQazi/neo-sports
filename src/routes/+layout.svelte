<script>
	import '@fontsource/lato';
	import '@fontsource/alexandria';
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/all.css';

	// Finally, your application's global stylesheet (sometimes labeled 'app.css')
	import '../app.postcss';
	import '../theme.postcss';
	import 'iconify-icon';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import AppModals from '$lib/components/AppModals/index.svelte';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<body class="background_primary" />

<slot />

<!-- Our App may have many modals we can host all modals from a single root -->
<AppModals />

<style>
	.background_primary {
		background-color: #f8fafb;
		/* padding: 0 130px; */
		/* background-image: url('../lib/assets//background.png'); */
		background-repeat: no-repeat;
		background-position: right;
		background-size: contain;
		min-height: 100%;
		font-family: 'lato', sans-serif;
	}
	/* @media (max-width: 1024px) {
		.background_primary {
			padding: 0 40px;
		} */
	/* } */
</style>
