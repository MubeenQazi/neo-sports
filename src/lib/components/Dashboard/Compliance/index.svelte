<script>
  import Icon from "../../Icon/index.svelte";

  export let data = null;
</script>
{#if !data?.value}
  <span>-</span>
{:else}
  <Icon icon="outlineCheck" className="text-secondary-500" />
{/if}