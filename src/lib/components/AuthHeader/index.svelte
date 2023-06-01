<script>
	import logo from '../../assets/Logo.jpg';
	import Button from '../Buttons/index.svelte';

	export let showLogin = true;
</script>

<div class="flex flex-wrap gap-5 justify-between items-center pt-9">
	<img width="111" alt="logo" src={logo} />
	<div class="flex justify-center items-center ml-2 gap-2">
		<Button on:click label="Back to Home" />
		{#if showLogin}
			<a href="/login" type="btn" class="btn h-10 variant-filled bg-primary-500 ml-5 px-8">Log in</a
			>
		{/if}
	</div>
</div>
