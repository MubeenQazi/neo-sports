<script>
  import Icon from "$lib/components/Icon/index.svelte";
  export let tooltipText;
  export let tooltipClass;
  export let tooltipWrapperClass;
  export let tooltipIconClass;
  export let tooltipDisabled = !tooltipText;
</script>

<div class="group inline-flex {tooltipWrapperClass}" style="pointer-events: {tooltipDisabled ? 'none': ''}">
  <Icon icon="exclamationCircle" className="ml-1 cursor-pointer {tooltipIconClass} {tooltipDisabled ? 'text-primary-300': 'text-primary-500 '}" />
  {#if tooltipText}
    <span
      class="group-hover:block cursor-pointer whitespace-pre-wrap max-w-[270px] bg-white border-2 border-primary-500 p-2 text-sm rounded-md absolute z-[999] hidden mx-auto px-4 font-normal left-4 top-4 {tooltipClass}"
    >
      {tooltipText}
    </span>
  {/if}
</div>