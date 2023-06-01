<script>
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import BusinessesList from './BusinessesList/index.svelte';
	import AthletesList from './AthletesList/index.svelte';
	let tabSet = 0;
</script>

<div class="md:w-3/4">
	<TabGroup
		active="border-b-2 border-secondary-500 font-bold text-black"
		regionList="test"
		border=""
		class="tab_wrapper uppercase text-gray-400"
	>
		<Tab class="tab" bind:group={tabSet} name="tab1" value={0}>Athlete</Tab>
		<Tab class="tab" bind:group={tabSet} name="tab2" value={1}>Business</Tab>
		<!-- Tab Panels --->
		<svelte:fragment slot="panel">
			{#if tabSet === 0}
				<AthletesList />
			{:else if tabSet === 1}
				<BusinessesList />
			{/if}
		</svelte:fragment>
	</TabGroup>
</div>
