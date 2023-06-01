<script>
    import Icon from "$lib/components/Icon/index.svelte";
    import {showModal} from "$lib/utils/modal";

    const onRemoveClick = () => {
      showModal("RemoveAthleteModal");
    }
</script>

<div class="flex items-center">
  <button class="btn underline px-2">make an offer</button>
  <button class="inline-flex" on:click={onRemoveClick}>
    <Icon icon="cancelOutlineCircle" className="text-black" />
  </button>
</div>