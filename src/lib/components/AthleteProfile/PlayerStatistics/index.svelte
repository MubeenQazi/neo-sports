<script lang="ts">
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';
	import { playerStatisticsContentOdd, playerStatisticsContentEven } from '../TabContent';
	const tabTitle = [
		{
			title: 'Audience Gender'
		},
		{
			title: 'AUDIENCE INTERESTS'
		},
		{
			title: 'AUDIENCE Reachability'
		},
		{
			title: 'AUDIENCE LOCATION'
		}
	];
	let tabSet: number = 0;
</script>

<TabGroup
	border=" border-b border-tertiary-100 text-secondry-100"
	active="border-b-2 border-secondary-500 text-secondary-100"
>
	{#each tabTitle as tab, index}
		<Tab bind:group={tabSet} name={tab.title} value={index}>
			<div class="flex items-center">
				<p class="unstyled uppercase text-[14px]">{tab.title}</p>
			</div>
		</Tab>
	{/each}
	<svelte:fragment slot="panel">
		<div class="flex flex-wrap gap-3 my-7 mx-3 justify-center">
			{#if tabSet === 0}
				{#each playerStatisticsContentOdd as data, index}
					<div class="flex flex-col items-center">
						<p class="unstyled text-[14px] text-primary-500">{data.title}</p>
						<div class="bg-primary-500 h-[100px] w-[20px]" />
						<p class="unstyled text-[12px]">{data.desc}</p>
						<p class="unstyled text-[12px]">Followings</p>
					</div>
				{/each}
			{:else if tabSet === 1}
				{#each playerStatisticsContentEven as data, index}
					<div class="flex flex-col items-center">
						<p class="unstyled text-[14px] text-primary-500">{data.title}</p>
						<div class="bg-primary-500 h-[100px] w-[20px]" />
						<p class="unstyled text-[12px]">{data.desc}</p>
						<p class="unstyled text-[12px]">Followings</p>
					</div>
				{/each}
			{:else if tabSet === 2}
				{#each playerStatisticsContentOdd as data, index}
					<div class="flex flex-col items-center">
						<p class="unstyled text-[14px] text-primary-500">{data.title}</p>
						<div class="bg-primary-500 h-[100px] w-[20px]" />
						<p class="unstyled text-[12px]">{data.desc}</p>
						<p class="unstyled text-[12px]">Followings</p>
					</div>
				{/each}
			{:else if tabSet === 3}
				{#each playerStatisticsContentEven as data, index}
					<div class="flex flex-col items-center">
						<p class="unstyled text-[14px] text-primary-500">{data.title}</p>
						<div class="bg-primary-500 h-[100px] w-[20px]" />
						<p class="unstyled text-[12px]">{data.desc}</p>
						<p class="unstyled text-[12px]">Followings</p>
					</div>
				{/each}
			{/if}
		</div>
	</svelte:fragment>
</TabGroup>
