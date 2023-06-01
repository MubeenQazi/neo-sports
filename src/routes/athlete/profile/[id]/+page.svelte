<script lang="ts">
	import PhotoAthlete from '$lib/assets/PhotoAthlete.png';
	import ProfileClaim from '$lib/assets/ProfileClaim.svg';
	import Header from '$lib/components/DashboardHeader/index.svelte';
	import Icon from '$lib/components/Icon/index.svelte';
	import SvgButton from '$lib/components/Buttons/SvgButton/index.svelte';
	import SocialMedia from '$lib/components/AthleteProfile/SocialMedia/index.svelte';
	import PlayerDeals from '$lib/components/AthleteProfile/PlayerDeals/index.svelte';
	import PlayerStatistics from '$lib/components/AthleteProfile/PlayerStatistics/index.svelte';
	import PlayerPastData from '$lib/components/AthleteProfile/PlayerPastData/index.svelte';
	import { showModal } from '$lib/utils/modal';
	const iconStat = [
		{
			title: '151K',
			icon: 'instagramIcon',
			percentage: '2.1%',
			level: 'UP'
		},
		{
			title: '54K',
			icon: 'twitterIcon',
			percentage: '2.1%',
			level: 'UP'
		},
		{
			title: '104K',
			icon: 'tiktokIcon',
			percentage: '2.1%',
			level: 'UP'
		}
	];
	let tabSet: number = 0;
	let compared = false;
	const onCompareClick = () => {
		showModal('AthletesComparisonModal');
	};
</script>

<Header />
{#if compared === false}
	<button
		on:click={() => ((compared = true), onCompareClick())}
		class="fixed bottom-0 right-0 md:right-40 btn variant-filled rounded-lg rounded-b-none bg-primary-500 mt-8 px-12"
		>Compare Athletes <SvgButton
			className="border-l rounded-none ml-3"
			icon="cancelOutlineCircle"
		/></button
	>
{:else}
	<button
		on:click={() => (compared = false)}
		class="fixed bottom-0 right-0 md:right-40 btn variant-filled rounded-lg rounded-b-none bg-secondary-500 mt-8 px-14"
		>Clear Comparison List</button
	>
{/if}
<div class="flex lg:flex-row flex-col mx-3 my-7 lg:mx-16 gap-6">
	<div
		class="card p-4 h-fit bg-white border border-tertiary-100 border-solid rounded-[10px] lg:basis-0 basis-full"
	>
		<img class="w-[150px] lg:w-full" width="100%" src={PhotoAthlete} alt="Profile Image" />
		<h3 class="uppercase text-[20px] font-medium my-3">Marvin Harrison JR.</h3>
		<h6>Wide receiver 2021</h6>
		<hr class="mt-4" />
		<h6 class="mt-3">Recruit ranking</h6>

		<div class="flex my-3 gap-3 items-center">
			<div>
				{#each Array(5) as _, index (index)}
					<Icon icon="starIcon" className="text-secondary-500 stroke-secondary-500 " />
				{/each}
			</div>
			<span class="px-4 py-1 bg-secondary-500 text-white">95.08</span>
		</div>
		<hr />
		<div class="flex my-3 gap-6">
			<div class="flex flex-col gap-3">
				<p class="text-secondary-200">Hometown</p>
				<p class="text-secondary-200">School</p>
			</div>
			<div class="flex flex-col gap-3">
				<p class="font-medium">Philadelphia, PA</p>
				<p class="font-medium">Ohio State University</p>
			</div>
		</div>
		<hr />
		<div class="flex mt-3 gap-3">
			<p>Social Media Post:</p>
			<span class="text-primary-500 lg:text-[18px] text-[16px] font-semibold">$1.64M</span>
		</div>
		<div>
			<button class="btn variant-filled bg-primary-500 w-fit mt-8 px-[50px] py-3"
				>Claim Profile</button
			>
			<button class="btn variant-filled bg-primary-500 rounded px-2 py-4 ml-1"
				><img width="15" alt="" src={ProfileClaim} /></button
			>
		</div>
		<button class="btn variant-ringed-tertiary lg:w-fit w-full mt-4 px-20 text-primary-500"
			>Make Offer</button
		>
	</div>
	<div class="card p-4 bg-white border border-tertiary-100 border-solid rounded-[10px] basis-full">
		<div class="flex flex-wrap gap-y-3 justify-between lg:flex-row flex-col">
			<div class=" flex flex-wrap gap-6 border-md">
				{#each iconStat as icon}
					<span class="chip bg-surface-900 flexpx-6 py-3 rounded-lg">
						<SvgButton icon={icon.icon} active={false} />
						<span>{icon.title}</span>
						{#if icon.level === 'UP'}
							<span class="text-secondary-500 text-[20px] mt-[-7px] font-black">&#8593;</span>
							<sub class="text-[8px] text-secondary-500">{icon.percentage}</sub>
						{:else}
							<span class="text-error-300 text-[20px] mt-[-7px] font-black">&#8595;</span>
							<sub class="text-[8px] text-error-300">{icon.percentage}</sub>
						{/if}
					</span>
				{/each}
			</div>
			<div class="flex justify-between">
				<label class="flex items-center space-x-2">
					<input class="checkbox bg-white checked:bg-blue-500" type="checkbox" />
					<p>Add to comparison</p>
				</label>
			</div>
		</div>
		<div class="bg-surface-900 mt-10 p-4 border border-tertiary-100 border-solid rounded-[10px]">
			<SocialMedia />
		</div>
		<div class="bg-surface-900 mt-10 p-4 border border-tertiary-100 border-solid rounded-[10px]">
			<PlayerDeals />
		</div>
		<div class=" bg-surface-900 mt-10 p-4 border border-tertiary-100 border-solid rounded-[10px]">
			<PlayerStatistics />
		</div>
		<div class=" bg-surface-900 mt-10 p-4 border border-tertiary-100 border-solid rounded-[10px]">
			<PlayerPastData />
		</div>
	</div>
</div>
