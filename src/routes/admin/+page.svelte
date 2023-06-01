<script type="ts">
	import type { IconType } from '$lib/utils/icons';
	import Header from '../../lib/components/AdminHeader/index.svelte';
	import Icon from '../../lib/components/Icon/index.svelte';
	import AdminOverview from '../../lib/components/AdminOverview/index.svelte';
	import AdminUserList from '../../lib/components/AdminUserList/index.svelte';

	let activeMenuItemId = 1;
	let menuItems: { index: number; title: string; icon: IconType }[] = [
		{ index: 1, title: 'Overview', icon: 'overview' },
		{ index: 2, title: 'User List', icon: 'userIcon' },
		{ index: 3, title: 'Messages', icon: 'chatOutline' }
	];
	const onSelectMenuItem = (parent: any) => {
		activeMenuItemId = parent.index;
	};
</script>

<Header />
<div class="px-3 md:px-20 my-7">
	<h1 class="unstyled lg:text-[42px] text-[35px] font-normal mb-5 lg:mb-12">Admin Dashboard</h1>
	<div class="flex md:flex-row flex-col gap-5">
		<div class="md:w-[28%] lg:w-1/4">
			<div class="bg-[white] md:h-[530px] border rounded-xl px-2 lg:px-6 pt-8">
				<ul>
					{#each menuItems as item (item.index)}
						<li class="mb-2">
							<button
								on:click={() => onSelectMenuItem(item)}
								class:active={activeMenuItemId === item.index}
								type="button"
								class="rounded-md relative inline-flex items-center w-full px-4 py-4 font-medium hover:bg-gray-100 hover:text-primary-500"
							>
								<Icon icon={item.icon} width="20px" height="20px" />
								<span class="unstyled flex-1 text-left ml-2 lg:text-lg">{item.title}</span>
							</button>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		{#if activeMenuItemId === 1}
			<AdminOverview />
		{:else}
			<AdminUserList />
		{/if}
	</div>
</div>

<style>
	.active {
		background-color: #f8fafb;
		color: rgb(var(--color-primary-500));
	}
</style>
