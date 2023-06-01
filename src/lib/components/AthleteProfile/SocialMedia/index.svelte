<script lang="ts">
	import { Tab, TabGroup } from '@skeletonlabs/skeleton';
	import { socialMediaContentOdd, socialMediaContentEven } from '../TabContent';
	import SvgButton from '../../Buttons/SvgButton/index.svelte';
	const iconSet = [
		{
			title: 'Instagram',
			icon: 'instagramIcon'
		},
		{
			title: 'Twitter',
			icon: 'twitterIcon'
		},
		{
			title: 'TikTok',
			icon: 'tiktokIcon'
		}
	];
	let tabSet: number = 0;
</script>

<TabGroup
	border="border-b border-tertiary-100 text-secondary-300"
	active="border-b-2 border-secondary-500 text-secondary-100"
>
	{#each iconSet as icon, index}
		<Tab bind:group={tabSet} name={icon.title} value={index}>
			<div class="flex items-center gap-2">
				<SvgButton icon={icon.icon} active={false} />
				<p>{icon.title}</p>
			</div>
		</Tab>
	{/each}
	<svelte:fragment slot="panel">
		<div class="flex gap-3 my-7 mx-3 justify-between flex-wrap">
			{#if tabSet === 0}
				{#each socialMediaContentOdd as data, index}
					<div class="flex flex-col">
						<div class="flex gap-3">
							<h5 class="text-primary-500 md:text-[18px] text-[16px] font-semibold">
								{data.title}
							</h5>
							{#if data.level === 'UP'}
								<span class="text-secondary-500 text-[20px] mt-[-7px] font-black">&#8593;</span>
							{:else}
								<span class="text-error-300 text-[20px] mt-[-7px] font-black">&#8595;</span>
							{/if}
						</div>
						<p class="unstyled text-secondary-300 text-[14px]">{data.desc}</p>
					</div>
				{/each}
			{:else if tabSet === 1}
				{#each socialMediaContentEven as data, index}
					<div class="flex flex-col">
						<div class="flex gap-3">
							<h5 class="text-primary-500 md:text-[18px] text-[16px] font-semibold">
								{data.title}
							</h5>
							{#if data.level === 'UP'}
								<span class="text-secondary-500 text-[20px] mt-[-7px] font-black">&#8593;</span>
							{:else}
								<span class="text-error-300 text-[20px] mt-[-7px] font-black">&#8595;</span>
							{/if}
						</div>
						<p class="unstyled text-secondary-300 text-[14px]">{data.desc}</p>
					</div>
				{/each}
			{:else if tabSet === 2}
				{#each socialMediaContentOdd as data, index}
					<div class="flex flex-col">
						<div class="flex gap-3">
							<h5 class="text-primary-500 md:text-[18px] text-[16px] font-semibold">
								{data.title}
							</h5>
							{#if data.level === 'UP'}
								<span class="text-secondary-500 text-[20px] mt-[-7px] font-black">&#8593;</span>
							{:else}
								<span class="text-error-300 text-[20px] mt-[-7px] font-black">&#8595;</span>
							{/if}
						</div>
						<p class="unstyled text-secondary-300 text-[14px]">{data.desc}</p>
					</div>
				{/each}
			{/if}
		</div>
	</svelte:fragment>
</TabGroup>
