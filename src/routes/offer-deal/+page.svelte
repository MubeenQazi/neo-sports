<script>
	import Header from '$lib/components/DashboardHeader/index.svelte';
	import Card from '$lib/components/Card/index.svelte';
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';
	import Step1Details from './tab-items/Step1Details.svelte';
	import Step2Tasks from './tab-items/Step2Tasks.svelte';
	import Step3Final from './tab-items/Step3Final.svelte';
	import { OfferDealTabKeys } from '$lib/constants/constants';
	import Icon from '$lib/components/Icon/index.svelte';

	let tabIndex = 0;
	const onChangeTab = (tabIdx) => (tabIndex = tabIdx);

	$: isSuccessTab = (currentTabIdx) => currentTabIdx < tabIndex;
	$: getTabClass = (currentTabIdx) => {
		if (currentTabIdx === tabIndex) return 'activeTab';
		else if (currentTabIdx > tabIndex) return 'disabledTab';
		else if (isSuccessTab(currentTabIdx)) return 'successTab';
	};
</script>

<Header />
<div class="px-3 md:px-20 my-7">
	<!-- Title Section -->
	<h1 class="unstyled lg:text-[42px] text-[35px] font-normal mb-4">Offer Deal</h1>

	<!-- Tabs -->
	<TabGroup border="" active="" regionList="border-0 max-w-[800px]" flex="flex-1">
		<Tab bind:group={tabIndex} name="tab-1" value={OfferDealTabKeys.TabDetails}>
			<div class="flex items-center whitespace-nowrap {getTabClass(0)}">
				{#if isSuccessTab(0)}
					<Icon icon="checkFillCircle" className="text-secondary-500 mr-2" width="25" height="25" />
				{/if}
				Step 1: Details
			</div>
		</Tab>
		<Tab bind:group={tabIndex} name="tab-2" value={OfferDealTabKeys.TabTasks}>
			<div class="flex items-center whitespace-nowrap {getTabClass(1)}">
				{#if isSuccessTab(1)}
					<Icon icon="checkFillCircle" className="text-secondary-500 mr-2" width="25" height="25" />
				{/if}
				Step 2: Tasks
			</div>
		</Tab>
		<Tab bind:group={tabIndex} name="tab-3" value={OfferDealTabKeys.TabOfferAndReview}>
			<div class="flex items-center whitespace-nowrap {getTabClass(2)}">
				{#if isSuccessTab(2)}
					<Icon icon="checkFillCircle" className="text-secondary-500 mr-2" width="25" height="25" />
				{/if}
				Step 3: Offer & Review
			</div>
		</Tab>

		<svelte:fragment slot="panel">
			<Card className="px-5 lg:px-10 py-10">
				{#if tabIndex === OfferDealTabKeys.TabDetails}
					<Step1Details {tabIndex} {onChangeTab} />
				{:else if tabIndex === OfferDealTabKeys.TabTasks}
					<Step2Tasks {tabIndex} {onChangeTab} />
				{:else if tabIndex === OfferDealTabKeys.TabOfferAndReview}
					<Step3Final {tabIndex} {onChangeTab} />
				{/if}
			</Card>
		</svelte:fragment>
	</TabGroup>
</div>

<style>
	.disabledTab {
		@apply border-b border-slate-400 pb-4 text-slate-400;
	}

	.activeTab {
		@apply border-b-2 border-primary-500 pb-4 font-semibold;
	}

	.successTab {
		@apply border-b-2 border-secondary-500 pb-4;
	}
</style>
