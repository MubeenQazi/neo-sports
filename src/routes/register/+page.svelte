<script>
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/AuthHeader/index.svelte';
	import AthleteForm from '$lib/components/AthleteForm/index.svelte';
	import BusinessForm from '$lib/components/BusinessForm/index.svelte';

	let tabSet = 0;
</script>

<div class="px-5 md:px-20">
	<Header />
	<div class="flex items-center justify-between pt-20">
		<div
			class="basis-full md:basis-10/12 lg:basis-7/12 border-solid border border-indigo-[#cbdee499] rounded-[10px] bg-white px-5 py-5 sm:px-10 lg:px-14 sm:py-12"
		>
			<h1 class="unstyled lg:text-[42px] text-[35px] font-medium pb-6">Get started for free</h1>
			<TabGroup
				active="border-b-2 border-secondary-500"
				regionList="test"
				border=""
				class="tab_wrapper uppercase"
			>
				<Tab class="tab" bind:group={tabSet} name="tab1" value={0}>Athlete</Tab>
				<Tab class="tab" bind:group={tabSet} name="tab2" value={1}>Business</Tab>
				<!-- Tab Panels --->
				<svelte:fragment slot="panel">
					{#if tabSet === 0}
						<AthleteForm extclass="flex lg:flex-row flex-col gap-x-5" />
					{:else if tabSet === 1}
						<BusinessForm extclass="flex lg:flex-row flex-col gap-x-5" />
					{/if}
				</svelte:fragment>
			</TabGroup>
		</div>
	</div>
</div>

<style>
	.box_wrapper {
		width: 838px;
	}
</style>
