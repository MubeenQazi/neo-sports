<script lang="ts">
	import type { IconType } from '../../../utils/icons';
	import Icon from '../../Icon/index.svelte';

	export let text = '';
	export let className = '';
	export let icon: IconType;
	export let active = false;
</script>

<button
	type="button"
	class="btn default bg-white hover:border-inherit focus:outline-none {className}"
	class:active
	on:click
>
	<span>{text}</span>
	<Icon {icon} style={active ? 'color: rgb(var(--color-secondary-500))' : ''} />
</button>

<style>
	.default {
		height: 40px;
		border-radius: 10px;
		padding: 5px 20px 5px 20px;
		gap: 5px;
		border: 1px solid #cbdee499;
	}

	.active {
		@apply border-2 border-secondary-500;
	}
</style>
