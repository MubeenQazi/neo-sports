<script>
	// @ts-nocheck

	import Input from '../../Input/index.svelte';
	import Icon from '../../Icon/index.svelte';
	import TableView from '$lib/components/TableView/index.svelte';
	import athleteImage from '../../../assets/athleteImage.png';
	import BusinessNameCell from './BusinessNameCell.svelte';

	const tableItems = [
		{
			id: 1,
			businessName: 'Mona Cola',
			email: 'Mooncola@info.com',
			phone: '+1 123 456 7890',
			plan: 'Value',
			payment: '25.03.2023',
			image: athleteImage
		},
		{
			id: 2,
			businessName: 'Mona Cola',
			email: 'Mooncola@info.com',
			phone: '+1 123 456 7890',
			plan: 'Value',
			payment: '25.03.2023',
			image: athleteImage
		},
		{
			id: 3,
			businessName: 'Mona Cola',
			email: 'Mooncola@info.com',
			phone: '+1 123 456 7890',
			plan: 'Value',
			payment: '25.03.2023',
			image: athleteImage
		},
		{
			id: 4,
			businessName: 'Mona Cola',
			email: 'Mooncola@info.com',
			phone: '+1 123 456 7890',
			plan: 'Value',
			payment: '25.03.2023',
			image: athleteImage
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
			field: 'businessName',
			title: 'Business Name',
			cellRendererComponent: BusinessNameCell,
			actionIcon: 'sortAscending',
			headClass: 'cursor-pointer'
		},
		{
			field: 'email',
			title: 'Email'
		},
		{ field: 'phone', title: 'Phone' },
		{ field: 'plan', title: 'Subscription plan' },
		{
			field: 'payment',
			title: 'last payment',
			actionIcon: 'sortAscending',
			headClass: 'cursor-pointer text-secondary-500'
		}
	]}
	rows={tableItems}
/>
