<script lang="ts">
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';
	import { playerDealsContentOdd, playerDealsContentEven } from '../TabContent';
	const tabContent = [
		{
			title: 'NIL Deals'
		},
		{
			title: 'Player Usage'
		},
		{
			title: 'Nil State Laws'
		},
		{
			title: 'Team Exposure'
		},
		{
			title: 'Google Search'
		}
	];
	let tabSet: number = 0;
</script>

<TabGroup
	border="border-b border-tertiary-100 text-secondary-100"
	active="unstyled border-b-2 border-secondary-500 text-[#000]"
>
	{#each tabContent as tab, index}
		<Tab bind:group={tabSet} name={tab.title} value={index}>
			<div class="flex items-center gap-2">
				<p class="unstyled uppercase text-[14px]">{tab.title}</p>
			</div>
		</Tab>
	{/each}
	<svelte:fragment slot="panel">
		<div class="flex flex-wrap gap-3 my-7 mx-3 justify-between">
			{#if tabSet === 0}
				{#each playerDealsContentOdd as data, index}
					<div class="flex flex-col">
						<p class="unstyled lg:text-[18px] text-[16px]">{data.item1}</p>
						<p class="unstyled lg:text-[18px] text-[16px]">{data.item2}</p>
					</div>
				{/each}
			{:else if tabSet === 1}
				{#each playerDealsContentEven as data, index}
					<div class="flex flex-col">
						<p class="unstyled lg:text-[18px] text-[16px]">{data.item1}</p>
						<p class="unstyled lg:text-[18px] text-[16px]">{data.item2}</p>
					</div>
				{/each}
			{:else if tabSet === 2}
				{#each playerDealsContentOdd as data, index}
					<div class="flex flex-col">
						<p class="unstyled lg:text-[18px] text-[16px]">{data.item1}</p>
						<p class="unstyled lg:text-[18px] text-[16px]">{data.item2}</p>
					</div>
				{/each}
			{:else if tabSet === 3}
				{#each playerDealsContentEven as data, index}
					<div class="flex flex-col">
						<p class="unstyled lg:text-[18px] text-[16px]">{data.item1}</p>
						<p class="unstyled lg:text-[18px] text-[16px]">{data.item2}</p>
					</div>
				{/each}
			{:else if tabSet === 4}
				{#each playerDealsContentOdd as data, index}
					<div class="flex flex-col">
						<p class="unstyled lg:text-[18px] text-[16px]">{data.item1}</p>
						<p class="unstyled lg:text-[18px] text-[16px]">{data.item2}</p>
					</div>
				{/each}
			{/if}
		</div>
	</svelte:fragment>
</TabGroup>
