<script>
	// @ts-nocheck

	import Input from '../../Input/index.svelte';
	import Icon from '../../Icon/index.svelte';
	import TableView from '$lib/components/TableView/index.svelte';
	import athleteImage from '../../../assets/athleteImage.png';
	import AthleteNameCell from './AthleteNameCell.svelte';
	import PlatformCell from '../../TableView/PlatformCell/index.svelte';
	const tableItems = [
		{
			id: 1,
			name: 'Name Surname',
			email: 'NameName@info.com',
			phone: '+1 123 456 7890',
			fans: '100.1K',
			postPrice: '$1.4K',
			image: athleteImage,
			platforms: ['socialInstagram', 'socialTwitter', 'socialTikTok', 'socialYoutube']
		},
		{
			id: 2,
			name: 'Name Surname',
			email: 'NameName@info.com',
			phone: '+1 123 456 7890',
			fans: '100.1K',
			postPrice: '$1.4K',
			image: athleteImage,
			platforms: ['socialInstagram', 'socialTikTok', 'socialYoutube']
		},
		{
			id: 3,
			name: 'Name Surname',
			email: 'NameName@info.com',
			phone: '+1 123 456 7890',
			fans: '100.1K',
			postPrice: '$1.4K',
			image: athleteImage,
			platforms: ['socialInstagram']
		},
		{
			id: 4,
			name: 'Name Surname',
			email: 'NameName@info.com',
			phone: '+1 123 456 7890',
			fans: '100.1K',
			postPrice: '$1.4K',
			image: athleteImage,
			platforms: ['socialTwitter', 'socialTikTok', 'socialYoutube']
		}
	];
</script>

<div class="flex sm:flex-row flex-col items-start gap-3 mb-5 sm:items-center">
	<Input type="search" placeholder=" Search Business..." large />
	<button class="btn bg-primary-500 text-white rounded-lg mb-5">
		<Icon icon="settingHorizontal" className="pr-3" />
		Search
	</button>
</div>

<TableView
	noRowsText="No Business available"
	columns={[
		{
			field: 'name',
			title: 'Athlete Name',
			cellRendererComponent: AthleteNameCell,
			actionIcon: 'sortAscending',
			headClass: 'cursor-pointer'
		},
		{
			field: 'email',
			title: 'Email'
		},
		{ field: 'phone', title: 'Phone' },
		{
			field: 'postPrice',
			title: 'Post Price',
			actionIcon: 'sortAscending',
			headClass: 'cursor-pointer text-secondary-500'
		},
		{ field: 'platforms', title: 'Platform', cellRendererComponent: PlatformCell },
		{ field: 'fans', title: 'Fans' }
	]}
	rows={tableItems}
/>
