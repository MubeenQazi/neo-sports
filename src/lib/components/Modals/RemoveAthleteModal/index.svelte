<script>
  import Icon from "$lib/components/Icon/index.svelte";
  import {closeModal} from "$lib/utils/modal";
  import Card from "$lib/components/Card/index.svelte";

  const onCloseModal = () => {
    closeModal();
  }
</script>

<Card className="relative md:min-w-[620px] min-h-[190px] py-10">
  <div class="flex flex-col items-center justify-center gap-5 md:gap-10">
    <div class="flex flex-wrap">
      <h4 class="font-semibold md:mt-0 mt-5">Remove an athlete from the View List?</h4>
      <button class="btn text-lg absolute md:right-2 md:top-5 top-1 right-1" on:click={onCloseModal}>
        <Icon icon="cancelOutlineCircle" width="30px" height="30px" />
      </button>
    </div>
    <div class="flex flex-wrap md:gap-6 gap-2">
      <div>
        <button class="btn border border-primary-500 rounded-full w-[110px] md:w-[150px] text-primary-500">Yes</button>
      </div>
      <div>
        <button class="btn border bg-primary-500 rounded-full w-[110px] md:w-[150px] text-white">No</button>
      </div>
    </div>
  </div>
</Card>
