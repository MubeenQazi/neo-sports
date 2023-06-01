<script>
    import Icon from "$lib/components/Icon/index.svelte";
</script>

<button class="group btn bg-primary-500 text-white relative" title="Add to List View">
  <Icon icon="addDocSquare" />
  <span class="z-[9999999] group-hover:block whitespace-pre-wrap w-[72px] bg-white border-2 border-gray-300 p-1 text-xs text-primary-500 rounded-md absolute -translate-x-11 -translate-y-8 hidden mx-auto">
    Add to List View
  </span>
</button>

<style>
  .btn {
      width: 30px;
      height: 42px;
      border-radius: 5px;
      padding: 16px;
  }
</style>