<script>
	import TableView from '$lib/components/TableView/index.svelte';
	import Header from '$lib/components/DashboardHeader/index.svelte';
	import AthleteNameCell from '$lib/components/Atheletes/AthleteNameCell/index.svelte';
	import athleteImage from '$lib/assets/athleteImage.png';
	import athleteImage2 from '$lib/assets/athleteImage2.png';
	import AthleteAddButton from '$lib/components/Atheletes/AthleteAddButton/index.svelte';
	import Input from '$lib/components/Input/index.svelte';
	import Select from '$lib/components/Select/index.svelte';
	import InputGroup from '$lib/components/InputGroup/index.svelte';
	import SelectV2 from '$lib/components/SelectV2/index.svelte';
	import OutlineButton from '$lib/components/Buttons/OutlineButton/index.svelte';

	const tableItems = [
		{
			id: 1,
			athleteName: 'Name Surname',
			postPrice: '$1K',
			fans: '100.1K',
			er: '14.5%',
			epp: 'Value',
			cpe: '$0.06',
			tvViews: '33.1K',
			searchVol: '33.1K',
			athleteImage: athleteImage
		},
		{
			id: 2,
			athleteName: 'Name Surname',
			postPrice: '$1K',
			fans: '100.1K',
			er: '14.5%',
			epp: 'Value',
			cpe: '$0.06',
			tvViews: '33.1K',
			searchVol: '33.1K',
			athleteImage: athleteImage2
		},
		{
			id: 3,
			athleteName: 'Name Surname',
			postPrice: '$1K',
			fans: '100.1K',
			er: '14.5%',
			epp: 'Value',
			cpe: '$0.06',
			tvViews: '33.1K',
			searchVol: '33.1K',
			athleteImage: athleteImage
		},
		{
			id: 4,
			athleteName: 'Name Surname',
			postPrice: '$1K',
			fans: '100.1K',
			er: '14.5%',
			epp: 'Value',
			cpe: '$0.06',
			tvViews: '33.1K',
			searchVol: '33.1K',
			athleteImage: athleteImage2
		},
		{
			id: 5,
			athleteName: 'Name Surname',
			postPrice: '$1K',
			fans: '100.1K',
			er: '14.5%',
			epp: 'Value',
			cpe: '$0.06',
			tvViews: '33.1K',
			searchVol: '33.1K',
			athleteImage: athleteImage
		},
		{
			id: 6,
			athleteName: 'Name Surname',
			postPrice: '$1K',
			fans: '100.1K',
			er: '14.5%',
			epp: 'Value',
			cpe: '$0.06',
			tvViews: '33.1K',
			searchVol: '33.1K',
			athleteImage: athleteImage2
		}
	];
</script>

<Header />
<div class="px-3 md:px-20 my-7">
	<!-- Title Section -->
	<h1 class="unstyled text-[35px] md:text-[42px] font-normal mb-4">Search for players</h1>

	<div class="flex flex-col mb-6">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-2">
			<Select options={['Sports']} />
			<Input type="text" placeholder="Conference..." />
			<Input type="text" placeholder="Position..." />
			<Input type="text" placeholder="School..." />
		</div>
		<div class="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
			<InputGroup placeholder="5000" label="Followers" shimLabel="From" />

			<InputGroup placeholder="100000" className="sm:mt-7" shimLabel="To" />

			<InputGroup placeholder="10$" label="Post Price" shimLabel="From" />
			<InputGroup placeholder="10000$" className="sm:mt-7" shimLabel="To" />
			<SelectV2 tooltip label="Engagements" options={['Select...']} />
			<SelectV2
				label="Brands"
				options={['Select...']}
				tooltipText="Filter by players that have worked with these brands before"
			/>
		</div>
		<div class="flex flex-wrap gap-4 mt-5">
			<OutlineButton
				className="md:w-[130px] sm:w-[48%] w-[46%]"
				icon="socialTikTok"
				text="TikTok"
				active
				iconAlign="left"
			/>
			<OutlineButton
				className="md:w-[130px] sm:w-[48%] w-[46%]"
				icon="socialTwitter"
				text="Twitter"
				iconAlign="left"
			/>
			<OutlineButton
				className="md:w-[130px] sm:w-[48%] w-[46%]"
				icon="socialInstagram"
				text="Instagram"
				iconAlign="left"
			/>
			<OutlineButton
				className="md:w-[130px] sm:w-[48%] w-[46%]"
				icon="socialYoutube"
				text="Youtube"
				iconAlign="left"
			/>
		</div>
	</div>
	<!-- Table Section -->
	<TableView
		noRowsText="No athletes available"
		columns={[
			{ field: 'athleteName', title: 'Athlete Name', cellRendererComponent: AthleteNameCell },
			{
				field: 'postPrice',
				title: 'Post Price',
				actionIcon: 'sortAscending',
				headClass: 'cursor-pointer'
			},
			{ field: 'fans', title: 'Fans' },
			{ field: 'er', title: 'ER%', actionIcon: 'sortAscending', headClass: 'cursor-pointer' },
			{ field: 'epp', title: 'EPP', actionIcon: 'sortAscending', headClass: 'cursor-pointer' },
			{ field: 'cpe', title: 'CPE', actionIcon: 'sortAscending', headClass: 'cursor-pointer' },
			{
				field: 'tvViews',
				title: 'TV Views',
				actionIcon: 'sortAscending',
				headClass: 'cursor-pointer'
			},
			{
				field: 'searchVol',
				title: 'Search  Vol.',
				actionIcon: 'sortAscending',
				headClass: 'cursor-pointer'
			},
			{ field: '', title: '', cellRendererComponent: AthleteAddButton, cellClass: 'w-14' }
		]}
		rows={tableItems}
	/>
</div>
