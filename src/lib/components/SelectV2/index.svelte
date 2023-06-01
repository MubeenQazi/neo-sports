<script>
    import Tooltip from "$lib/components/Tooltip/index.svelte";

    export let label = "";
    export let margin = false;
    export let large = false;
    export let id = '';
    export let defaultChoice="";

    export let style="";
    // @ts-ignore
    /**
     * @type {any}
     */
    export let options;
    export let tooltip = false;
    export let tooltipText;
    export let tooltipWrapperClass;
    export let tooltipClass;
    export let selectedOption = defaultChoice;

    export let onSelectionChange;

    // @ts-ignore
    function handleChange(event) {
        selectedOption = event.target.value;
        if (onSelectionChange) onSelectionChange(event);
    }
</script>

<label class={`relative text-base`}>
  <div class="grid-cols-[auto_1fr_auto] border-0">
    {#if label}
      <span class="font-medium flex items-center mb-1">
        {label}
        {#if tooltip}
          <Tooltip tooltipText={tooltipText} tooltipWrapperClass={tooltipWrapperClass} tooltipClass={tooltipClass} />
        {/if}
      </span>
    {/if}
    <select
      class="select bg-transparent select_wrapper {large && 'large'} {margin ? 'ml-5' : ''}"
      {style}
      on:change={handleChange}
      value={selectedOption}
      {id}
    >
      {#each options as option, index}
        {#if index === 0}
          <option disabled value="" selected>{option}</option>
        {:else}
          <option value={option}>{option}</option>
        {/if}
      {/each}
    </select>
  </div>
</label>

<style>
    .select_wrapper {
      height: 40px;
      border-radius: 10px;
      background-color: #ffffff;
      border: 1px solid rgba(203, 222, 228, 0.6);
      padding-left: 20px;
      font-size: 16px;
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
