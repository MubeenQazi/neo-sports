<script>
  import Tooltip from "$lib/components/Tooltip/index.svelte";

  export let label = "";
  export let shimLabel = "";
  export let placeholder = "";
  export let className = "";
  export let tooltip = false;
  export let tooltipText = "";
</script>
<label class={`text-base relative ${className}`} for="my-input">
  {#if label}
  <span class="font-medium flex items-center mb-1">
    {label}
    {#if tooltip}
      <Tooltip tooltipText={tooltipText} />
    {/if}
  </span>
  {/if}
  <div class="input-group input-group-divider grid-cols-[auto_1fr_auto] bg-white border-0">
    <div class="input-group-shim text-black">{shimLabel}</div>
    <input type="search" {placeholder} />
  </div>
</label>

<style>
    .input-group {
      width: 100%;
      height: 40px;
      border-radius: 10px;
      background-color: #ffffff;
      border: 1px solid rgba(203, 222, 228, 0.6);
      font-size: 16px;
    }
    .input-group-shim {
      background: #ffffff;
      position: relative;
    }
    .input-group-shim:after {
      content: "";
      display: block;
      position: absolute;
      width: 1px;
      height: 22px;
      background-color: rgba(203, 222, 228, 0.6);
      right: 4px;
    }
    input {
      border-left: none;
    }
</style>