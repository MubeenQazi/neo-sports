<script>
	import { Table, tableMapperValues } from '@skeletonlabs/skeleton';

	const sourceData = [
		{
			name: 'Jordan',
			position: '-',
			email: 'Jordan@insuredly.com',
			phone: '+1 (614)822-9752',
			access: 'Owner'
		}
	];

	const tableSimple = {
		// A list of heading labels.
		head: ['Name', 'Position', 'Email', 'Phone', 'Access'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(sourceData, ['name', 'position', 'email', 'phone', 'access']),
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: tableMapperValues(sourceData, ['name', 'position', 'email', 'phone', 'access'])
		// Optional: A list of footer labels.
	};
</script>

<div class="flex justify-between">
	<Table regionBody="bg-[white]" interactive={true} source={tableSimple} />
</div>

<style>
</style>
