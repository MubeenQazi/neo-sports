<script>
    import Input from "$lib/components/Input/index.svelte";
    import {OfferDealTabKeys} from "$lib/constants/constants";
    import RadioInput from "$lib/components/RadioInput/index.svelte";
    import Tooltip from "$lib/components/Tooltip/index.svelte";

    export let onChangeTab;
</script>

<div class="flex flex-col">
  <div class="max-w-md">
    <Input label="Deal Title" placeholder="Enter deal Title" type="text" />
  </div>

  <div class="flex flex-col mt-6">
    <p class="mb-2 font-semibold text-base">Are there any other companies involved?</p>
    <div class="flex gap-6 flex-wrap">
      <RadioInput label="Yes, other companies, too" inputProps={{ name: "company", value: "yes", }} />
      <RadioInput label="No, just my company" inputProps={{ checked: true, name: "company", value: "no", }} />
    </div>
  </div>

  <div class="flex flex-col mt-12">
    <p class="mb-2 font-semibold text-base flex items-center relative">
      Competitive Exclusivity
      <Tooltip tooltipText="If selecting “Exclusive”, this allows you to specify a duration in which a participating athlete cannot work with your listed competitors." />
    </p>
    <div class="flex gap-6 flex-wrap">
      <RadioInput label="Exclusive" inputProps={{ name: "competitive", value: "exclusive", }} />
      <RadioInput label="Not exclusive" inputProps={{ checked: true, name: "competitive", value: "nonExclusive", }} />
    </div>
  </div>

  <div class="mt-12 px-5" >
    <hr class="!border-slate-200" />
  </div>

  <div class="flex flex-wrap mt-8 gap-6">
    <button class="btn border border-primary-500 rounded-full w-full sm:w-[150px] text-primary-500">Cancel</button>
    <button class="btn border bg-primary-500 rounded-full w-full sm:w-[150px] text-white" on:click={() => onChangeTab(OfferDealTabKeys.TabTasks)}>Next</button>
  </div>
</div>
