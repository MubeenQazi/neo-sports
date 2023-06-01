<script>
  import {OfferDealTabKeys} from "$lib/constants/constants";
  import Icon from "$lib/components/Icon/index.svelte";
  import Input from "$lib/components/Input/index.svelte";
  import SelectV2 from "$lib/components/SelectV2/index.svelte";
  import Tooltip from "$lib/components/Tooltip/index.svelte";
  import TextArea from "$lib/components/TextArea/index.svelte";

  export let onChangeTab;
</script>

<!--EL1-->
<h5 class="text-lg font-semibold mb-2">Review</h5>
<div class="flex border rounded-lg justify-between p-6 px-4">
  <div class="flex md:flex-row flex-col flex-wrap gap-2 justify-between w-9/12">
    <div><span class="min-w-[100px]">Task #1:</span> </div>
    <div class="flex items-center"><Icon icon="socialInstagram" className="mr-2" /> Instagram</div>
    <div>Quantity: 1</div>
    <div>Date: None</div>
    <div>Content Ownership Rights: 3 Months</div>
  </div>
  <button class="btn p-0">
    <Icon icon="pencilInSquare" />
  </button>
</div>

<!--EL2-->
<div class="mt-9">
  <h5 class="text-lg font-semibold mb-2 mt-6 flex items-center">
    Compensation
    <Tooltip />
  </h5>
  <div class="flex ">
    <div class="flex sm:flex-row flex-col items-start w-8/12 gap-4">
      <SelectV2 label="Type" options={["Choose payment type"]} />
      <button class="btn border rounded-lg sm:mt-[24px]">Add more &nbsp; <Icon icon="addOutlineCircle" /></button>
    </div>
  </div>
</div>


<!--EL3-->

<div class="mt-9">
  <h5 class="text-lg font-semibold mb-2 mt-6">Business Information</h5>
  <div class="flex flex-wrap gap-2">
    <div class="sm:basis-auto basis-full flex-1">
      <p class="mb-1">Business name</p>
      <Input type="text" placeholder="Enter Business Name" />
    </div>
    <div class="sm:basis-auto basis-full flex-1">
      <SelectV2 label="Industry" options={["Insurance"]} />
    </div>
    <div class="sm:basis-auto basis-full flex-1">
      <p class="mb-1">Website</p>
      <Input type="text" placeholder="Enter Website" />
    </div>
  </div>
</div>

<!--EL4-->
<div class="flex gap-6 mt-9">
  <div class="flex-1">
    <h5 class="text-lg font-semibold mb-2">Pitch (Describe your business)</h5>
    <TextArea id="message" placeholder="Enter Pitch" />
  </div>
</div>

<!--EL5-->
<div class="mt-12" >
  <hr class="!border-slate-200" />
</div>
<h5 class="text-lg font-semibold mb-2 mt-6">Payment Summary</h5>
<p>Payment(s): $0</p>
<div class="mt-12" >
  <hr class="!border-slate-200" />
</div>

<!--EL6-->
<div class="mt-9">
  <h5 class="text-lg font-semibold mb-2 mt-6">Contract</h5>
  <div class="flex-1 sm:w-7/12">
    <SelectV2 options={["I want to use NIL1's  Deal Terms & Conditions"]} />
  </div>
  <p class="unstyled text-primary-400 italic p-0 text-sm mt-2 font-medium">View Contract / Terms & Conditions (PDF)</p>
</div>

<!--Action Buttons-->

<div class="mt-12" >
  <hr class="!border-slate-200" />
</div>

<div class="flex flex-wrap gap-4 mt-9">
    <button class="btn border border-primary-500 rounded-full w-full sm:w-[150px] text-primary-500" on:click={() => onChangeTab(OfferDealTabKeys.TabTasks)}><Icon icon="arrowBackward" />Back</button>
    <button class="btn border border-primary-500 rounded-full w-full sm:w-[150px] text-primary-500">Cancel</button>
    <button class="btn border bg-primary-500 rounded-full w-full sm:w-[150px] text-white">Offer Deal</button>
  <div class="flex flex-1 md:justify-end">
    <button disabled class="btn border bg-primary-500 rounded-full w-full sm:w-[150px] text-white">Save Draft</button>
  </div>
</div>