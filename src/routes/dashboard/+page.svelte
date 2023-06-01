<script lang="ts">
	import Header from '$lib/components/DashboardHeader/index.svelte';
	import OutlineButton from '$lib/components/Buttons/OutlineButton/index.svelte';
	import Select from '$lib/components/Select/index.svelte';
	import Input from '$lib/components/Input/index.svelte';
	import type { IconType } from '$lib/utils/icons';
	import Card from '$lib/components/Card/index.svelte';
	import TableView from '$lib/components/TableView/index.svelte';
	import Compliance from '$lib/components/Dashboard/Compliance/index.svelte';
	import StatusCell from '$lib/components/TableView/StatusCell/index.svelte';

	let toolbarItems: { title: string; icon: IconType; active?: boolean }[] = [
		{ title: 'Active', icon: 'pulse', active: true },
		{ title: 'Archived', icon: 'archive' },
		{ title: 'Draft', icon: 'pencilInSquare' }
	];

	const onSetButtonActive = (selectedItem: (typeof toolbarItems)[0]) => {
		toolbarItems = toolbarItems.map((item) => ({
			...item,
			active: selectedItem.title === item.title
		}));
	};

	let isFilterActive = true;
	let isFilterApplied = false;

	let originalItems = [
		{
			id: 3013,
			date: '10.05.2022',
			athleteName: 'Boogie Elis',
			deal: 'Pizza Shop Appearance',
			type: 'Direct',
			compliance: true,
			athlete: 'Accepted',
			tasks: 3,
			amount: '$1,500',
			status: 'Accepted'
		},
		{
			id: 3014,
			date: '10.05.2022',
			athleteName: 'Boogie Elis',
			deal: 'Pizza Shop Appearance',
			type: 'Direct',
			compliance: false,
			athlete: 'Accepted',
			tasks: 3,
			amount: '$1,500',
			status: 'Declined'
		},
		{
			id: 3015,
			date: '10.05.2022',
			athleteName: 'Boogie Elis',
			deal: 'Pizza Shop Appearance',
			type: 'Direct',
			compliance: true,
			athlete: 'Accepted',
			tasks: 3,
			amount: '$1,500',
			status: 'Pending'
		},
		{
			id: 3016,
			date: '10.05.2022',
			athleteName: 'Boogie Elis',
			deal: 'Pizza Shop Appearance',
			type: 'Direct',
			compliance: true,
			athlete: 'Accepted',
			tasks: 3,
			amount: '$1,500',
			status: 'Accepted'
		},
		{
			id: 3017,
			date: '10.05.2022',
			athleteName: 'Boogie Elis',
			deal: 'Pizza Shop Appearance',
			type: 'Direct',
			compliance: false,
			athlete: 'Accepted',
			tasks: 3,
			amount: '$1,500',
			status: 'Declined'
		},
		{
			id: 3018,
			date: '10.05.2022',
			athleteName: 'Boogie Elis',
			deal: 'Pizza Shop Appearance',
			type: 'Direct',
			compliance: true,
			athlete: 'Accepted',
			tasks: 3,
			amount: '$1,500',
			status: 'Pending'
		},
		{
			id: 3019,
			date: '10.05.2022',
			athleteName: 'Boogie Elis',
			deal: 'Pizza Shop Appearance',
			type: 'Direct',
			compliance: true,
			athlete: 'Accepted',
			tasks: 3,
			amount: '$1,500',
			status: 'Accepted'
		},
		{
			id: 3020,
			date: '10.05.2022',
			athleteName: 'Boogie Elis',
			deal: 'Pizza Shop Appearance',
			type: 'Direct',
			compliance: false,
			athlete: 'Accepted',
			tasks: 3,
			amount: '$1,500',
			status: 'Declined'
		},
		{
			id: 3021,
			date: '10.05.2022',
			athleteName: 'Boogie Elis',
			deal: 'Pizza Shop Appearance',
			type: 'Direct',
			compliance: true,
			athlete: 'Accepted',
			tasks: 3,
			amount: '$1,500',
			status: 'Pending'
		}
	];

	let tableItems = originalItems;

	let onFilterRecords = () => {
		isFilterApplied = !isFilterApplied;
		tableItems = isFilterApplied ? [] : originalItems;
	};
</script>

<Header />
<div class="px-3 md:px-20 my-7">
	<!-- Title Section -->
	<h1 class="unstyled lg:text-[42px] text-[35px] font-normal mb-4">Deals</h1>

	<!-- Toolbar Section -->
	<div class="flex flex-wrap gap-2 mb-5">
		{#each toolbarItems as item}
			<OutlineButton
				icon={item.icon}
				text={item.title}
				active={item.active}
				on:click={() => onSetButtonActive(item)}
			/>
		{/each}
		<div class="flex flex-1 sm:justify-end">
			<OutlineButton
				icon="filter"
				text="Filter"
				active={isFilterActive}
				on:click={() => (isFilterActive = !isFilterActive)}
			/>
		</div>
	</div>

	<!-- FilterBar Section -->
	{#if isFilterActive}
		<Card className="mb-5">
			<section class="flex flex-wrap items-center gap-5">
				<div class="flex flex-wrap items-center w-[300px] md:min-w-max">
					<p class="flex-shrink-0 mr-4 font-medium">Range Type</p>
					<Select
						options={['This week', 'This month', 'This year', 'Last 7 days']}
						style="margin-bottom: 0"
					/>
				</div>
				<div class="flex flex-wrap items-baseline w-[300px] md:min-w-max">
					<p class="flex-shrink-0 mr-4 text-black font-medium">Date Range</p>
					<Input type="date" placeholder="Choose date range" style="margin-bottom: 0" />
				</div>
				<div class="flex flex-wrap gap-2 items-center lg:mt-4">
					<button
						type="button"
						class="btn variant-filled-primary px-10 text-white"
						on:click={onFilterRecords}
						>Filter
					</button>
					<i class="mr-3 text-gray-500">filters are applied</i>
					<button class="btn underline">Reset All Filters</button>
				</div>
			</section>
		</Card>
	{/if}

	<!-- Table Section -->
	<TableView
		noRowsText="No deals created yet"
		columns={[
			{
				field: 'id',
				title: '#',
				actionIcon: 'sortAscending',
				headClass: 'cursor-pointer text-secondary-500'
			},
			{ field: 'date', title: 'Date', actionIcon: 'sortAscending', headClass: 'cursor-pointer' },
			{
				field: 'athleteName',
				title: 'Athlete Name',
				actionIcon: 'sortAscending',
				headClass: 'cursor-pointer'
			},
			{
				field: 'deal',
				title: 'Deal',
				actionIcon: 'sortAscending',
				headClass: 'cursor-pointer',
				cellRendererHTML: ({ value, id = 'deals' }) => {
					return `<a href="/dashboard/${id}" class="unstyled text-black hover:underline">${value}</a>`;
				}
			},
			{
				field: 'type',
				title: 'Type',
				actionIcon: 'settingHorizontal',
				headClass: 'cursor-pointer'
			},
			{
				field: 'compliance',
				title: 'Compliance',
				actionIcon: 'sortAscending',
				headClass: 'cursor-pointer',
				cellRendererComponent: Compliance
			},
			{
				field: 'athlete',
				title: 'Athlete',
				actionIcon: 'settingHorizontal',
				headClass: 'cursor-pointer'
			},
			{ field: 'tasks', title: 'Tasks', actionIcon: 'sortAscending', headClass: 'cursor-pointer' },
			{
				field: 'amount',
				title: 'Amount',
				actionIcon: 'sortAscending',
				headClass: 'cursor-pointer'
			},
			{
				field: 'status',
				title: 'Status',
				actionIcon: 'settingHorizontal',
				headClass: 'cursor-pointer',
				cellRendererComponent: StatusCell
			}
		]}
		rows={tableItems}
	/>
	<br />
</div>
