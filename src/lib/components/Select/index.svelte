<script>
	import Icon from '../../components/Icon/index.svelte';

	export let margin = false;
	export let large = false;
	export let label = '';
	export let id = '';
	export let defaultChoice = '';

	export let style = '';
	// @ts-ignore
	/**
	 * @type {any}
	 */
	export let options;
	export let selectedOption = defaultChoice;
	export let handleChange = (event) => {
		selectedOption = event.target.value;
	};

</script>

{#if label !== ''}
	<label class="mb-2 font-semibold text-base" for={id}>{label}</label>
{/if}
<select
	class="select bg-transparent select_wrapper {large && 'large'} {margin ? 'ml-5' : ''}"
	{style}
	on:change={handleChange}
	value={selectedOption}
	{id}
>
	{#each options as option, index}
		{#if typeof option === 'string'}
			{#if index == 0}
				<option disabled value="" selected>{option}</option>
			{:else}
				<option value={option}> {option}</option>
			{/if}
		{:else}
			{#if index == 0}
				<option value="" selected> <Icon icon={option.icon} width="30px" height="30px" /> {option.label}</option>
			{:else}
				<option value={option.label}> <Icon icon={option.icon} width="30px" height="30px" /> {option.label}</option>
			{/if}
		{/if}
	{/each}
</select>

<style>
	.select_wrapper {
		width: 100%;
		height: 40px;
		border-radius: 10px;
		background-color: #ffffff;
		border: 1px solid rgba(203, 222, 228, 0.6);
		padding-left: 20px;
		font-size: 16px;
		margin-bottom: 20px;
	}
	option {
		background-color: #ffffff;
		color: #2c2c2d;
	}
	option:checked {
		background: #85c9e133 !important;
	}
	.select option {
		background-color: #ffffff;
	}
	.large {
		height: 50px !important;
	}
</style>
