<script>
	import { showModal } from '$lib/utils/modal';
	import { modalStore } from '@skeletonlabs/skeleton';
</script>

<div
	class="w-full rounded-[10px] bg-white pl-10 pt-[25px] h-[230px]
	 p-5 mt-5 border border-solid border-rgba(203, 222, 228, 0.6) sm:h-auto max-sm:h-auto"
>
	<div class="flex justify-between">
		<p class="font-Lato font-semibold text-xl">Business Information</p>
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<iconify-icon
			on:click={() => showModal('BusinessInformationModal')}
			class="text-[20px] text-secondary-100 cursor-pointer"
			icon="material-symbols:edit-square-outline-rounded"
		/>
	</div>

	<div
		class="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 max-sm:gap-y-4 max-sm:grid-cols-1 gap-4"
	>
		<div class="max-sm:mt-5">
			<p class="font-normal text-sm text-secondary-200">Business Name</p>
			<p class="font-semibold text-sm text-secondary-100">Insuredly.Inc</p>
		</div>
		<div class="relative">
			<p class="font-normal text-sm text-secondary-200">Email</p>
			<p class="font-semibold text-sm text-secondary-100 flex-wrap">Jordan@unsuredly.com</p>
		</div>
		<div>
			<p class="font-normal text-sm text-secondary-200">Phone</p>
			<p class="font-semibold text-sm text-secondary-100">-</p>
		</div>
		<div>
			<p class="font-normal text-sm text-secondary-200">Industry</p>
			<p class="font-semibold text-sm text-secondary-100">Insurance</p>
		</div>
		<div>
			<p class="font-normal text-sm text-secondary-200">Website</p>
			<p class="font-semibold text-sm text-secondary-100">-</p>
		</div>
		<div>
			<p class="font-normal text-sm text-secondary-200">Address</p>
			<p class="font-semibold text-sm text-secondary-100">-</p>
		</div>
	</div>
</div>
