<script lang="ts">
	import type { IconType } from '../../../utils/icons';
	import Icon from '../../Icon/index.svelte';

	export let text = '';
	export let icon: IconType;
	export let active = false;
	export let className = '';
</script>

<button
	type="button"
	class="btn default bg-transparent p-0 border-0 hover:border-inherit focus:outline-none {className}"
	class:active
	on:click
>
	<span>{text}</span>
	<Icon {icon} style={active ? 'color: rgb(var(--color-secondary-500))' : ''} />
</button>
