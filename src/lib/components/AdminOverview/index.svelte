<script type="ts">
	import Select from '../Select/index.svelte';
	import Icon from '../Icon/index.svelte';
	import Chart from '../Chart/index.svelte';

	const options = ['7 days', '1 month', '3 month', '6 month', '12 month'];

	export const data = {
		labels: [
			'2023.03.15',
			'2023.03.16',
			'2023.03.17',
			'2023.03.18',
			'2023.03.19',
			'2023.03.20',
			'2023.03.21'
		],
		datasets: [
			{
				lineTension: 0,
				borderColor: 'rgba(44, 44, 45, 1)',
				borderDashOffset: 0.0,
				borderJoinStyle: 'bevel',
				pointBorderColor: 'rgba(35, 217, 172, 1)',
				pointBackgroundColor: 'rgba(203, 222, 228, 0.6)',
				pointBorderWidth: 10,
				data: [20, 25, 24, 30, 35, 32, 40]
			}
		]
	};

	const stats = [
		{
			title: 'Registered Users ',
			info: '1,2K'
		},
		{
			title: 'Athletes in DB  ',
			info: '23'
		},
		{
			title: 'Claimed Profiles  ',
			info: '900'
		}
	];
	const profitStats = [
		{
			title: 'Monthly NIL Spend ',
			info: '8,2K'
		},
		{
			title: 'Total SaaS MRR',
			info: '00,0K'
		},
		{
			title: 'YTD Gross Revenue',
			info: '00,0K'
		}
	];
	const offers = [
		{
			id: '3013',
			title: 'Pizza Shop Appearance...',
			amount: '$1,500'
		},
		{
			id: '3013',
			title: 'Pizza Shop Appearance...',
			amount: '$1,500'
		},
		{
			id: '3013',
			title: 'Pizza Shop Appearance...',
			amount: '$1,500'
		},
		{
			id: '3013',
			title: 'Pizza Shop Appearance...',
			amount: '$1,500'
		},
		{
			id: '3013',
			title: 'Pizza Shop Appearance...',
			amount: '$1,500'
		}
	];
</script>

<div class="md:w-3/4">
	<div class="flex flex-wrap gap-4">
		{#each stats as stat}
			<div class=" bg-white whitespace-nowrap rounded-xl border w-full md:w-2/5 lg:w-[32%] h-[100px] p-5">
				<div class="flex items-center mb-3">
					<Icon icon="userIcon" />
					<p class="unstyled pl-2 text-sm">{stat.title}</p>
				</div>
				<p class="unstyled text-2xl font-bold text-primary-500">{stat.info}</p>
			</div>
		{/each}
	</div>
	<div class="lg:flex grid gap-3 mt-5">
		<div class=" bg-white rounded-xl border lg:w-1/2 h-[230px] pl-5 pr-3">
			<div class="flex items-center my-5">
				<p class="unstyled text-xl font-semibold mr-3">Outstanding Offers</p>
				<Icon icon="uploadBox" />
			</div>
			<div class="h-[150px] overflow-y-auto pb-5 pr-3">
				{#each offers as offer}
					<div class="flex justify-between items-center border-t-2 mb-3 pt-3">
						<div class="flex">
							<p class="unstyled pr-6 text-sm text-gray-500">{offer.id}</p>
							<p class="unstyled text-sm underline font-semibold cursor-pointer">
								{offer.title}
							</p>
						</div>
						<p class="unstyled text-sm text-gray-500">{offer.amount}</p>
					</div>
				{/each}
			</div>
		</div>

		<div class=" bg-white rounded-xl border lg:w-1/2 h-[230px] pl-5 pr-3">
			<div class="flex items-center my-5">
				<p class="unstyled text-xl font-semibold mr-3">Active Deals</p>
				<Icon icon="pulse" />
			</div>
			<div class="h-[150px] overflow-y-auto pb-5 pr-3">
				{#each offers as offer}
					<div class="flex justify-between items-center border-t-2 mb-3 pt-3">
						<div class="flex">
							<p class="unstyled pr-6 text-sm text-gray-500">{offer.id}</p>
							<p class="unstyled text-sm underline font-semibold cursor-pointer">
								{offer.title}
							</p>
						</div>
						<p class="unstyled text-sm text-gray-500">{offer.amount}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="flex flex-wrap gap-4 mt-5">
		{#each profitStats as stat}
			<div class=" bg-white whitespace-nowrap rounded-xl border w-full md:w-2/5 lg:w-[32%] h-[100px] p-5">
				<div class="flex items-center mb-3">
					<Icon icon="dollarCircle" />
					<p class="unstyled pl-2 text-sm">{stat.title}</p>
				</div>
				<p class="unstyled text-2xl font-bold text-primary-500">{stat.info}</p>
			</div>
		{/each}
	</div>
	<div class="mt-5">
		<div class="bg-white rounded-xl border h-[400px] p-6">
			<div class="flex justify-between items-start">
				<p class="unstyled w-11/12 text-xl font-semibold">Website Traffic</p>
				<Select {options} />
			</div>
			<div class="h-[300px]">
				<Chart {data} />
			</div>
		</div>
	</div>
</div>
