<script>
  import Icon from "$lib/components/Icon/index.svelte";
  import {OfferDealTabKeys} from "$lib/constants/constants";
  import Step2TaskCreate from "./Step2TaskCreate.svelte";
  import {IconsList} from "$lib/utils/icons";

  export let onChangeTab;

  let tasks = [
    "Social Media Promotion",
    "Appearances (Virtual or In-Person)",
    "Interview or Speaking Engagement",
    "Autograph Signing",
    "Photo or Video Shoot",
    "Co-Branded",
    "Social Media Live Guest",
    "Social Media Link or @mention in Bio",
    "Share Affiliate Link or Code",
    "Custom Task",
  ];
  let createTask = null;
  let createdTasks = null;
  const onCreateTask = (task) => {
    createTask = { taskType: task };
    createdTasks = null;
  }

  const onBackFromTaskCreate = () => {
    createTask = null;
    createdTasks = null;
  }

  const onNextClick = () => {
    if (!createTask) {
      onChangeTab(OfferDealTabKeys.TabOfferAndReview);
    } else {
      createTask = null;
      createdTasks = [{ task: "Instagram", icon: IconsList.socialInstagram }];
    }
  }
</script>

{#if createdTasks?.length}
  <div class="flex flex-col gap-2 mb-12">
    <p class="mb-4 font-semibold text-base">Created Tasks</p>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each createdTasks as createdTask (createdTask)}
        <li class="py-2 px-5 border border-slate-300 rounded-lg w-full text-left flex justify-between">
          <span class="truncate">{createdTask.task}</span>
          <div class="flex items-center gap-1">
            <button class="btn p-0"><Icon icon="pencilInSquare" width="26" height="26" /></button>
            &nbsp;
            <button class="btn p-0"><Icon icon="cancelOutlineCircle" width="26" height="26" /></button>
          </div>
        </li>
      {/each}
    </ul>
  </div>
{/if}

{#if !createTask}
  <div class="flex flex-col gap-2">
    <p class="mb-4 font-semibold text-base">{!createdTasks ? "Choose Your Tasks": "Add More Tasks"}</p>
    <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {#each tasks as task (task)}
        <li>
          <button class="btn border border-slate-300 rounded-lg w-full text-left flex justify-between hover:bg-slate-300" on:click={onCreateTask.bind(null, task)}>
            <span class="truncate">{task}</span>
            <Icon icon="addOutlineCircle" width="26" height="26" />
          </button>
        </li>
      {/each}
    </ul>
  </div>
{:else if typeof createTask === "object"}
  <Step2TaskCreate task={createTask} onBackClick={onBackFromTaskCreate} />
{/if}

<div class="mt-12 px-5" >
  <hr class="!border-slate-200" />
</div>

<div class="flex flex-wrap mt-8 gap-6">
  {#if !createTask}
    <button class="btn border border-primary-500 rounded-full w-full sm:w-[150px] text-primary-500" on:click={() => onChangeTab(OfferDealTabKeys.TabDetails)}><Icon icon="arrowBackward" />Back</button>
  {/if}
  <button class="btn border border-primary-500 rounded-full w-full sm:w-[150px] text-primary-500">Cancel</button>
  <button class="btn border bg-primary-500 rounded-full w-full sm:w-[150px] text-white" on:click={onNextClick}>Next</button>
</div>