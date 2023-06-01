<script lang="ts">
  export let label = '';
  export let inputProps:HTMLInputElement;
</script>

<label class="flex items-center space-x-2">
  <input class="radio" type="radio" {...inputProps} />
  {#if label}<p class="text-gray-500">{label}</p>{/if}
</label>

<style>
  .radio {
      @apply bg-transparent border border-black;
  }
  .radio:checked {
      @apply border border-black bg-white;
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='black' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='5'/%3e%3c/svg%3e");
  }
</style>