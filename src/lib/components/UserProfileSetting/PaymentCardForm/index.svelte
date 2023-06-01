<script>
	import { showModal } from '$lib/utils/modal';
	import { modalStore } from '@skeletonlabs/skeleton';
	export let Heading = '';
</script>

<div
	class="w-1/2 sm:w-full max-sm:w-full rounded-[10px]
	 max-md:h-auto min-h-[300px] bg-white
	 pl-10 max-sm:pl-4 pt-6 pr-5 mb-3 mt-5 border border-solid border-rgba(203, 222, 228, 0.6)"
>
	<div class="justify-between">
		<div>
			<div class="flex justify-between">
				<p class="font-Lato font-semibold text-sm text-secondary-100">{Heading}</p>
				<iconify-icon
					class="text-[20px] text-secondary-100"
					icon="material-symbols:edit-square-outline-rounded"
				/>
			</div>
		</div>
	</div>
	<div class="flex max-sm:flex-wrap justify-between border-b-2 mt-8">
		<div class="pb-2">
			<p class="font-Lato font-normal text-sm text-secondary-200">Bank Accounts</p>
			<p>FIRST COMMON <span class="pl-[20px]">*****7581</span></p>
		</div>
		<div class="flex pl-2 pt-[8px] max-sm:pb-[8px]">
			<p
				class="font-Lato font-normal text-sm text-secondary-100 underline underline-offset-1 mr-[10px]"
			>
				Verify Account
			</p>
			<p class="font-Lato font-normal text-sm text-[red] underline underline-offset-1">
				Disconnect
			</p>
		</div>
	</div>
	<div class="flex max-sm:flex-wrap justify-between border-b-1 border-color-black my-2">
		<div>
			<p class="font-Lato font-normal text-sm text-secondary-200 pb-[5px]">Credit Card</p>
			<p>MASTER CARD <span class="pl-[30px]"> *****7866 </span></p>
		</div>
		<div class="flex pt-[15px]">
			<p class="font-Lato font-normal text-sm !text-[red] underline underline-offset-1">
				Disconnect
			</p>
		</div>
	</div>
	<div>
		<button
			on:click={() => showModal('BankAccountDetailModal')}
			class="btn mr-2 variant-filled bg-[white] text-primary-500 border-2 border-primary-500 text-sm mt-8 max-sm:px-4 px-8 cursor-pointer"
		>
			<iconify-icon
				class="text-[20px] text-primary-500 flex justify-center mr-2"
				icon="material-symbols:add-circle-outline-rounded"
			/>Add Bank Account</button
		>
		<button
			on:click={() => showModal('AddCreditCardModal')}
			class=" btn variant-filled bg-[white] max-sm:mb-3 mb-5 text-primary-500 border-2 border-primary-500 text-sm mt-8 max-sm:px-4 cursor-pointer"
		>
			<iconify-icon
				class="text-[20px] text-primary-500 flex justify-center mr-2"
				icon="material-symbols:add-circle-outline-rounded"
			/>Add credit Card</button
		>
	</div>
</div>
