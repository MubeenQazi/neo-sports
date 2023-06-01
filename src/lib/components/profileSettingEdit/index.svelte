<script>
	import Icon from '../Icon/index.svelte';

	export let data = null;
</script>

{#if !data?.value}
	<span>-</span>
{:else}
	<Icon icon="pencilInSquare" className="text-[black]" />
{/if}
