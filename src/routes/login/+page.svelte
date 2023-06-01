<script>
	import { enhance, applyAction } from '$app/forms';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import toast from '$lib/toast';
	import Header from '$lib/components/AuthHeader/index.svelte';
	import Input from '$lib/components/Input/index.svelte';
	import Loader from '$lib/components/Loader/index.svelte';
	let loading = false;
	$: loggedIn = $page.data.session;

	$: {
		// if there's a session and we're on the login page, redirect to the dashboard
		if (browser && loggedIn) goto('/dashboard');
	}
</script>

<div class="px-3 md:px-20">
	<Header showLogin={false} />
	<div class="flex gap-10 flex-wrap items-center pt-20">
		<form
			method="post"
			action="?/login"
			use:enhance={({ form }) => {
				loading = true;
				return async ({ result, update }) => {
					await applyAction(result);
					loading = false;
					update();
				};
			}}
		>
			<div
				class="sm:basis-full md:basis-7/12 lg:basis-5/12 sm:min-w-max border-solid border border-indigo-[#cbdee499] rounded-[10px] bg-white px-5 py-5 sm:px-10 lg:px-14 sm:py-12"
			>
				<h1 class="lg:text-[42px] text-[35px] font-medium pb-5">Log in</h1>

				<div class="pt-10 sm:pt-14">
					<Input required large placeholder="Email address" type="email" name="email" />
					<Input required large placeholder="Password" type="password" name="password" />
				</div>
				<div class="flex flex-wrap gap-2 justify-between">
					<label class="flex items-center space-x-2">
						<input class="checkbox bg-white" type="checkbox" />
						<p>Remember me</p>
					</label>
					<a class="unstyled no-underline font-normal text-primary-500" href="/">Forgot Password?</a
					>
				</div>

				<button
					disabled={loading}
					type="submit"
					class="btn variant-filled bg-primary-500 mt-8 px-16"
				>
					{#if loading}
						<Loader />
					{/if}
					Log in</button
				>
			</div>
		</form>
		<div class="basis-96">
			<div>
				<p class="unstyled text-[18px] font-normal text-[#BCC8CC] pb-4">Don’t have an account?</p>
				<a class="unstyled no-underline font-bold text-primary-500 uppercase" href="/register"
					>Register<br /> your account here
					<iconify-icon
						class="block pt-3 text-[30px] text-primary-500"
						icon="material-symbols:arrow-circle-right-rounded"
					/>
				</a>
			</div>
		</div>
	</div>
</div>
