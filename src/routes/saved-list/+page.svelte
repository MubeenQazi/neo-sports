<script lang="ts">
	import Header from '$lib/components/DashboardHeader/index.svelte';
	import TableView from '$lib/components/TableView/index.svelte';
	import StatusCell from '$lib/components/TableView/StatusCell/index.svelte';
	import MakeAnOfferCell from '$lib/components/TableView/MakeAnOfferCell/index.svelte';
	import PlatformCell from '$lib/components/TableView/PlatformCell/index.svelte';
	import StatusHeader from '$lib/components/TableView/StatusHeader/StatusHeader.svelte';
	import AthleteNameCell from '$lib/components/Atheletes/AthleteNameCell/index.svelte';
	import athleteImage from '$lib/assets/athleteImage.png';
	import athleteImage2 from '$lib/assets/athleteImage2.png';
	import type { IconType } from '$lib/utils/icons.js';

	const tableItems = [
		{
			id: 1,
			athleteName: 'Name Surname',
			postPrice: '$1K',
			sport: 'Basketball',
			platforms: [
				'socialInstagram',
				'socialTwitter',
				'socialTikTok',
				'socialYoutube'
			] as IconType[],
			fans: '100.1K',
			er: '14.5%',
			epp: 'Value',
			cpe: '$0.06',
			searchVol: '33.1K',
			status: 'Pending',
			athleteImage: athleteImage
		},
		{
			id: 2,
			athleteName: 'Name Surname',
			postPrice: '$1K',
			sport: 'Tennis',
			platforms: ['socialInstagram'] as IconType[],
			fans: '100.1K',
			er: '14.5%',
			epp: 'Value',
			cpe: '$0.06',
			searchVol: '33.1K',
			status: 'Accepted',
			athleteImage: athleteImage2
		},
		{
			id: 3,
			athleteName: 'Name Surname',
			postPrice: '$1K',
			sport: 'Basketball',
			platforms: ['socialInstagram', 'socialTwitter'] as IconType[],
			fans: '100.1K',
			er: '14.5%',
			epp: 'Value',
			cpe: '$0.06',
			searchVol: '33.1K',
			status: 'Declined',
			athleteImage: athleteImage
		}
	];
</script>

<Header />
<div class="px-3 md:px-20 my-7">
	<!-- Title Section -->
	<h1 class="unstyled lg:text-[42px] text-[35px] font-normal mb-4">Saved List</h1>

	<!-- Table -->
	<TableView
		noRowsText="No Athletes in List view"
		columns={[
			{ field: 'athleteName', title: 'Athlete Name', cellRendererComponent: AthleteNameCell },
			{
				field: 'postPrice',
				title: 'Post Price',
				actionIcon: 'sortAscending',
				headClass: 'cursor-pointer'
			},
			{ field: 'sport', title: 'Sport', actionIcon: 'sortAscending', headClass: 'cursor-pointer' },
			{ field: 'platforms', title: 'Platform', cellRendererComponent: PlatformCell },
			{ field: 'fans', title: 'Fans' },
			{ field: 'er', title: 'ER%', actionIcon: 'sortAscending', headClass: 'cursor-pointer' },
			{ field: 'epp', title: 'EPP', actionIcon: 'sortAscending', headClass: 'cursor-pointer' },
			{ field: 'cpe', title: 'CPE', actionIcon: 'sortAscending', headClass: 'cursor-pointer' },
			{ field: 'searchVol', title: 'Search Vol.' },
			{
				field: 'status',
				title: 'Status',
				actionIcon: 'settingHorizontal',
				cellRendererComponent: StatusCell,
				headRendererComponent: StatusHeader,
				headClass: 'cursor-pointer'
			},
			{ field: 'action', title: '', cellRendererComponent: MakeAnOfferCell, cellClass: 'w-14' }
		]}
		rows={tableItems}
	/>
</div>
