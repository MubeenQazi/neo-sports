<script>
	import { modalStore } from '@skeletonlabs/skeleton';
	import Input from '../../../components/Input/index.svelte';
</script>

<div
	class="border-1 w-1/2 max-sm:w-full h-auto bg-white border-rgba(203, 222, 228, 0.6) rounded-[10px]"
>
	<div class="employee_wrapper rounded-[10px] bg-white px-5 mt-5 py-3 m-5">
		<div class="flex justify-between">
			<p class="font-Lato font-semibold text-xl">Mission Statement</p>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<iconify-icon
				on:click={() => modalStore.close()}
				class="text-[20px] text-secondary-100 cursor-pointer"
				icon="material-symbols:cancel-outline"
			/>
		</div>

		<textarea
			id="message"
			rows="4"
			class="block p-2.5 my-5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			placeholder="Write your thoughts here..."
		/>
		<div>
			<button
				on:click={() => modalStore.close()}
				class="btn variant-filled bg-[white] text-primary-500 border-solid border-2 border-primary-500 text-sm mt-8 px-8"
				>Cancel</button
			>
			<button class="btn variant-filled bg-primary-500 mt-8 px-12 max-md:ml-[1px] ml-5">Save</button
			>
		</div>
	</div>
</div>
