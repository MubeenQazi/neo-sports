<script lang="ts">
	import Icon from '../../../components/Icon/index.svelte';
	import { closeModal } from '../../../utils/modal';
	import Card from '../../../components/Card/index.svelte';
	import PhotoAthlete from '../../../assets/PhotoAthlete.png';
	import PhotoCompare from '../../../assets/PhotoAthleteCompare.png';
	import PhotoUpload from '../../../assets/PhotoUpload.svg';
	import Convert from '../../../assets/Convert.png';
	import Select from '../../../components/Select/index.svelte';

	const onCloseModal = () => {
		closeModal();
	};
	const onClearClick = () => {};
	let otherAthlete = false;
	let className = '';
	const socialPlatformSelect = [
		{ label: 'Instagram', icon: 'instagramIcon' },
		{ label: 'TikTok', icon: 'socialTikTok' },
		{ label: 'Twitter', icon: 'socialTwitter' },
		{ label: 'Youtube', icon: 'socialYoutube' },
	];
	
	
	const addAthlete = ['Name Surname', 'Name Surname', 'Name Surname', 'Name Surname'];
	const conversionLabels = [
		{ title: 'Post Price', titleHovered: 'Post Price' },
		{ title: 'Fans', titleHovered: 'Fans' },
		{ title: 'ER%', titleHovered: 'Engagement Rate' },
		{ title: 'EPP', titleHovered: 'Engagement Per Post' },
		{ title: 'AVG. Post View', titleHovered: 'AVG. Post View' },
		{ title: 'AVG. Reels Plays', titleHovered: 'AVG. Reels Plays' },
		{ title: 'CPM', titleHovered: 'Cost Per 1000 Impressions' },
		{ title: 'CPE', titleHovered: 'Cost  Per Engagement' },
		{ title: 'Player Usage', titleHovered: 'Player Usage' },
		{ title: 'AVG TV Views', titleHovered: 'AVG TV Views' }
	];
	const playerSummary = [
		'$1.3K',
		'110K',
		'39.01%',
		'39.01%',
		'86.9K',
		'209.3K',
		'$14',
		'$0.03',
		'0.1044',
		'1.66M'
	];
	const competetorSummary = [
		'$1.5K',
		'69.7',
		'52.22%',
		'52.22%',
		'83.7K',
		'219.7K',
		'$10',
		'$0.02',
		'0.1288',
		'5.74M'
	];
	// for (let i = 0; i < playerSummary.length; i++) {
	// 	const value1 = playerSummary[i];
	// 	const value2 = competetorSummary[i];
	// 	console.log(value1, value2);
	// 	if (value1 === value2) {
	// 		console.log(`Elements at index ${i} are equal`);
	// 	} else if (value1 > value2) {
	// 		className = 'text-primary-500 font-bold';
	// 	} else if (value2 > value1) {
	// 		className = 'text-secondary-100 font-bold';
	// 	} else {
	// 		className = 'text-secondary-100';
	// 	}
	// }
</script>

<Card className="relative text-center w-[1180px] max-w-[95%] h-[690px] overflow-y-auto py-8">
	<h4 class="unstyled text-[24px] uppercase font-semibold">Player Comparison</h4>
	<button class="btn text-lg absolute right-2 top-5" on:click={onCloseModal}>
		<Icon icon="cancelOutlineCircle" width="30px" height="30px" />
	</button>

	<div class="flex sm:flex-row flex-col justify-center gap-6 mt-8">
		<div class="card md:min-w-[280px] px-8 pt-4 bg-[#F8FAFB] text-center relative">
			<button class="btn text-lg absolute right-0 top-0" on:click={onClearClick}>
				<Icon icon="cancelOutlineCircle" width="30px" height="30px" />
			</button>
			<img width="140" src={PhotoAthlete} alt="Profile Image" class="mx-auto" />
			<h3 class="unstyled uppercase text-[18px] font-semibold mt-3 mb-1">Marvin Harrison JR.</h3>
			<h6 class="unstyled uppercase text-[14px] text-[#6D6D6D]">Wide receiver 2021</h6>
			<div class="pt-3">
				{#each playerSummary as summary, index}
					<p class="unstyled text-[14px] leading-[29px] {index==1 || index==4 ? "text-primary-500 font-bold" : 'text-secondary-100'} { playerSummary.length == index+1 ? '' : 'border-b border-[#CBDEE499]' } {className}">
						{summary}
					</p>
				{/each}
			</div>
		</div>
		<div class="p-2 text-center border-0 bg-transparent">
			<button class="btn text-lg" on:click={onClearClick}>
				<img width="120" src={Convert} alt="Profile Image" />
			</button>
			<div class="pt-4">
				<Select options={socialPlatformSelect} />
				<div class="px-4 flex flex-col">
					{#each conversionLabels as label, index}
						<p
							class="unstyled px-4 leading-[31px] text-[14px] text-[#6D6D6D] hover:text-[#0E1018] group relative { conversionLabels.length == index+1 ? '' : 'border-b border-[#CBDEE499]'}"
							title={label.title}
						>
							{label.title}
							<span
								class="z-[9999999] group-hover:block whitespace-pre-wrap w-[72px] bg-white border-2 border-gray-300 p-1 text-xs text-primary-500 rounded-md absolute -translate-x-11 -translate-y-8 hidden mx-auto"
							>
								{label.titleHovered}
							</span>
						</p>
					{/each}
				</div>
			</div>
		</div>
		<div class="card md:min-w-[280px] px-8 py-4 bg-[#F8FAFB] text-center relative">
			{#if otherAthlete === false}
				<button class="w-[140px] h-[140px] bg-white">
					<img width="80" src={PhotoUpload} alt="Profile Upload" class="mx-auto" />
				</button>
				<div class="py-8">
					<h5 class="my-2">Add athlete to compare</h5>
					<Select large options={addAthlete} handleChange={() => (otherAthlete = true)} />
				</div>
			{:else}
				<button class="btn text-lg absolute right-0 top-0" on:click={onClearClick}>
					<Icon icon="cancelOutlineCircle" width="30px" height="30px" />
				</button>
				<img width="140" src={PhotoCompare} alt="Profile Image"  class="mx-auto" />
				<h3 class="unstyled uppercase text-[18px] font-semibold mt-3 mb-1">Emeka Egbuka.</h3>
				<h6 class="unstyled uppercase text-[14px] text-[#6D6D6D]">Wide receiver 2021</h6>
				<div class="pt-3">
					{#each competetorSummary as summary, index}
						<p
							class="unstyled text-[14px] leading-[29px] {index==2 || index==5 ? "text-primary-500 font-bold" : ''} { competetorSummary.length == index+1 ? '' : 'border-b border-[#CBDEE499]' }  {className}"
						>
							{summary}
						</p>
					{/each}
				</div>
			{/if}
		</div>
	</div>

</Card>

