<script>
  import Icon from "$lib/components/Icon/index.svelte";
  import SelectV2 from "$lib/components/SelectV2/index.svelte";
  import Input from "$lib/components/Input/index.svelte";
  import RadioInput from "$lib/components/RadioInput/index.svelte";
  import Tooltip from "$lib/components/Tooltip/index.svelte";
  import TextArea from "$lib/components/TextArea/index.svelte";
  export let task;
  export let onBackClick;

  let fileinput;
  let tags = ["tags", "tags2"];
  let selectedValue = null;
</script>

<button class="btn border border-black rounded-full w-[150px] text-black" on:click={onBackClick}><Icon icon="arrowBackward" />Back To Task</button>

<!-- EL1 -->
<div class="flex flex-wrap gap-2 mt-8">
  <div class="basis-full sm:basis-5/12">
    <SelectV2 label={task.taskType} options={["None", "Instagram", "TikTok", "Twitter", "Youtube"]} onSelectionChange={(e) => selectedValue = e.target.value} />
  </div>
  {#if selectedValue}
    <div class="basis-full sm:basis-5/12">
      <p class="text-md font-medium mb-1 hidden sm:block">&nbsp;</p>
      <SelectV2 options={["Choose post type"]} />
    </div>
    <div class="basis-full sm:basis-0.5">
      <p class="text-md font-medium mb-1">Quantity</p>
      <Input type="number" />
    </div>
  {/if}
</div>

{#if selectedValue}
  <!-- EL2 -->
  <div class="flex flex-col mt-6">
    <p class="mb-1 flex items-center relative">
      Draft Submission and Approval
      <Tooltip tooltipText="You have the opinion to require the athlete to submit a draft (unpublished) version of their content through the NOCAP platform prior to their content going live." tooltipClass="left-4 top-4" />
    </p>
    <div class="flex flex-wrap gap-6">
      <RadioInput label="Required" inputProps={{ checked: true, name: "required", value: "yes", }} />
      <RadioInput label="Not Required" inputProps={{ name: "required", value: "no", }} />
    </div>
  </div>

  <!--EL3-->
  <div class="flex flex-wrap gap-6 mt-8 relative">
    <div class="basis-full sm:basis-auto">
      <SelectV2 label="Due Date for Draft Submission" tooltipClass="!left-[140px]" tooltip options={["To be determined"]} />
    </div>
    <div class="basis-full sm:basis-auto">
      <SelectV2 label="Content Live Date" tooltipClass="!left-[140px]" tooltip options={["To be determined"]} />
    </div>
    <div class="basis-full sm:basis-auto">
      <SelectV2 label="Time Zone" tooltip options={["Choose option", "Hawaii", "Alaska", "Pacific TIme", "Mountain Time", "Central Time"]} />
    </div>
  </div>

  <!--EL4-->
  <div class="flex gap-6 mt-8">
    <div class="flex-1">
      <p class="mb-1">Describe Athlete Expectations for this Task</p>
      <TextArea id="message4" placeholder="Describe athlete expectations for this task" />
    </div>
  </div>

  <!--EL5-->
  <div class="flex flex-col gap-2 mt-8">
    <SelectV2 label="Post Caption" tooltip options={["Choose Option"]} />
    <TextArea id="message5" placeholder="Example: I love to eat candy, and <Company Name> has the bet candy in the world!" />
  </div>

  <!--EL6-->
  <div class="mt-8">
    <p class="mb-1">Link(s) or Sticker(s)</p>
    <div class="flex flex-wrap sm:gap-2 gap-0">
      <div class="sm:flex-1 flex-auto">
        <Input type="text" placeholder="example1.com" />
      </div>
      <div class="sm:flex-1 flex-auto">
        <Input type="text" placeholder="example1.com" />
      </div>
      <div class="sm:flex-1 flex-auto">
        <Input type="text" placeholder="example1.com" />
      </div>
    </div>
  </div>

  <!--EL7-->
  <div class="flex flex-col gap-2 mt-8">
    <p>Required Call-To-Action</p>
    <TextArea id="message6" placeholder="Describe Required Call-To_action" />
  </div>

  <!--EL8-->
  <div class="flex flex-col gap-2 mt-8">
    <p>Required #hashtags <span class="text-sm">(Enter your hashtag then enter)&nbsp;<i class="text-primary-500">Limit of 5</i></span></p>
    <div class="flex flex-wrap gap-3">
      <div class="basis-full sm:basis-3/12">
        <Input type="text" placeholder="Enter your Tags" className="!mb-0" />
      </div>
      <div class="flex gap-3 flex-wrap items-center">
        {#each tags as tag (tag)}
          <div class="border rounded-lg p-2 min-w-6/12 flex items-center gap-3">
            @{tag}
            <button class="btn p-0">
              <Icon icon="cancelOutlineCircle" />
            </button>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <!--EL9-->
  <div class="flex flex-col gap-2 mt-8">
    <p>Required Account Tags <span class="text-sm">(Enter account name then enter)&nbsp;<i class="text-primary-500">Limit of 5</i></span></p>
    <div class="flex">
      <div class="flex-1">
        <Input type="text" placeholder="Enter your Tags" />
      </div>
    </div>
  </div>

  <!--EL10-->
  <div class="flex flex-col gap-2 mt-8 relative">
    <p class="flex items-center">
      Additional Required Disclosures
      <Tooltip tooltipClass="left-[120px]" />
    </p>
    <TextArea id="message3" placeholder="Describe Additional Required Disclosures" />
  </div>

  <!-- EL11 -->
  <div class="flex flex-wrap gap-6 mt-8">
    <div class="basis-full sm:basis-auto">
      <SelectV2 tooltip tooltipClass="left-[120px]" label="Ownership Rights Requested" options={["None"]} />
    </div>
    <div class="basis-full sm:basis-auto">
      <SelectV2 tooltip tooltipClass="left-[120px]" label="Content Must Remain Live For" options={["30 Days"]} />
    </div>
  </div>

  <!-- EL12 -->
  <div class="flex flex-col mt-8 gap-1 relative">
    <p class="flex items-center">
      Add Files
      <Tooltip />
    </p>
    <div class="flex items-center rounded-xl bg-white border cursor-pointer py-2 px-5 max-w-[130px] justify-between" on:click={() => fileinput.click()}>
      <span>Upload</span>
      <Icon icon="arrowUpOutlineCircle" width="25px" height="25px" />
    </div>
    <input style="display:none" type="file" accept=".jpg, .jpeg, .png" bind:this={fileinput} />
  </div>
{/if}