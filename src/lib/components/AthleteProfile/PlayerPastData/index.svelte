<script lang="ts">
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';
	import { playerPastDataContent } from '../TabContent';
	const tabTitle = [
		{
			title: 'Past Deals'
		}
	];
	let tabSet: number = 0;
</script>

<TabGroup border=" border-b border-tertiary-100" active="border-0">
	{#each tabTitle as tab, index}
		<Tab bind:group={tabSet} name={tab.title} value={index} active="text-secondary-100">
			<div class="flex items-center gap-2">
				<p class="unstyled uppercase text-[18px] font-semibold">{tab.title}</p>
			</div>
		</Tab>
	{/each}
	<svelte:fragment slot="panel">
		<div class="flex gap-3 flex-col my-7 mx-5">
			{#each playerPastDataContent as data, index}
				<div class="flex">
					<p class="unstyled text-[14px]">{data.title}</p>
				</div>
			{/each}
		</div>
	</svelte:fragment>
</TabGroup>
