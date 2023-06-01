<script>
    import Icon from "$lib/components/Icon/index.svelte";

    export let data = null;
</script>

{#if data?.value}
  <div class="grid grid-cols-2 w-7/12">
      {#each data.value as platform}
        <div>
          <Icon width="17" height="17" icon={platform} />
        </div>
      {/each}
  </div>
{/if}