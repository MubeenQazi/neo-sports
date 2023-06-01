<script>
  import Icon from "$lib/components/Icon/index.svelte";

  export let data = null;

  let selectItem = null;
  let statuses = [
    "Accepted",
    "Pending",
    "Declined",
    "No offer"
  ]

</script>

<div class="flex items-center group relative">
  <span>{data.column.title || ''}</span>
  <Icon icon="settingHorizontal" />
  <ul class="group-hover:scale-100 py-2 origin-top scale-0 bg-white rounded-lg text-black border w-[120px] absolute top-5 font-normal transition-all">
    {#each statuses as status (status)}
      <li class="hover:bg-primary-50 text-left">
        <button on:click={() => selectItem = status} class="btn py-1">
          <span class:active={selectItem === status}>{status}</span>
        </button>
      </li>
    {/each}
  </ul>
</div>

<style>
  .active {
      @apply font-bold underline decoration-secondary-500 decoration-4 underline-offset-8;
  }
</style>