<script lang="ts">
	import Icon from '../../components/Icon/index.svelte';
	import Card from '../Card/index.svelte';

	type ColumnType = {
		field: string;
		title: string;
		actionIcon?: string;
		editIcon?: string;
		cellClass?: string;
		headClass?: string;
		cellRendererHTML: null;
		cellRendererComponent: null;
		headRendererComponent: null;
	};
	export let columns: ColumnType[] = [];
	export let rows = [];

	export let noRowsText = 'No Records';
	export let cellLabelClass = '';
	export let cardClass = '';
	export let headLabelClass = '';
</script>

<Card className={cardClass ? cardClass : 'px-8 mb-5'}>
	<div class="relative overflow-x-auto">
		<table class="w-full">
			<!-- Head -->
			<thead class="text-sm text-gray-700">
				<tr>
					{#each columns as column}
						<th scope="col" class={`pb-5 px-2 whitespace-nowrap ${column.headClass || ''}`}>
								{#if column.headRendererComponent}
                  <svelte:component
                    this={column.headRendererComponent}
                    data={{ column }}
                  />
								{:else}
                  <div class="flex items-center">
                    <span class={headLabelClass || ''}>{column.title || ''}</span>
                    {#if column.actionIcon}<Icon icon={column.actionIcon} />{/if}
                  </div>
								{/if}
						</th>
					{/each}
				</tr>
			</thead>
			<!-- Body -->
			<tbody>
				{#each rows as row, index (row.id)}
					<tr class={cellLabelClass ? cellLabelClass : 'bg-white border-t text-gray-500'}>
						{#each columns as column}
							<td class={`py-4 px-2  whitespace-nowrap ${column.cellClass || ''}`}>
								{#if column.cellRendererHTML}
									{@html column.cellRendererHTML({ value: row[column.field], row })}
								{:else if column.cellRendererComponent}
									<svelte:component
										this={column.cellRendererComponent}
										data={{ value: row[column.field], row }}
									/>
								{:else}
									{row[column.field] || ''}
								{/if}
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
		{#if !rows.length}
			<p class="pt-5 mb-2 border-t-2 font-bold">{noRowsText}</p>
		{/if}
	</div>
</Card>
