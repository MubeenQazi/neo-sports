<script>
	import { modalStore } from '@skeletonlabs/skeleton';
	import Input from '../../../components/Input/index.svelte';
	import Select from '../../Select/index.svelte';

	const submitForm = (e) => {
		if (!e.target.checkValidity()) {
		} else {
			modalStore.close();
		}
	};
</script>

<div
	class="border-1 mt-[180px] w-120 h-auto bg-white border-rgba(203, 222, 228, 0.6) rounded-[10px]"
>
	<form on:submit={submitForm}>
		<div class="employee_wrapper rounded-[10px] bg-white max-sm:px-0 px-5 mt-5 py-3 m-5">
			<div class="flex justify-between mb-4">
				<p class="font-Lato font-semibold text-xl">Business Information</p>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<iconify-icon
					on:click={() => modalStore.close()}
					class="text-[20px] text-secondary-100 cursor-pointer"
					icon="material-symbols:cancel-outline"
				/>
			</div>
			<div class="mt-4">
				<div class="flex max-sm:flex-wrap">
					<div class="w-1/3 max-sm:w-full mr-2">
						<Input required label="Business Name" placeholder="Jordan" type="text" />
					</div>
					<div class="w-1/3 max-sm:w-full mr-2">
						<Input required label="Email" placeholder="Jordan@insuredly.com" type="text" />
					</div>
					<div class="w-1/3 max-sm:w-full">
						<Input required label="Phone" placeholder="21312" type="text" />
					</div>
				</div>
				<div class="flex max-sm:flex-wrap">
					<div class="w-1/3 max-sm:w-full mr-2">
						<label class="mb-2 font-semibold">Industry</label>
						<select
							id="countries"
							class="bg-gray-50 mb-5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
						>
							<option selected>Insurance</option>
							<option value="US">United States</option>
							<option value="CA">Canada</option>
							<option value="FR">France</option>
							<option value="DE">Germany</option>
						</select>
					</div>
					<div class="w-1/3 mr-2 max-sm:w-full">
						<Input required label="Website" placeholder="Website" type="text" />
					</div>
					<div class="w-1/3 max-sm:w-full">
						<Input required label="Address" placeholder="Address" type="text" />
					</div>
				</div>
			</div>
			<div>
				<button
					on:click={() => modalStore.close()}
					class="btn variant-filled bg-[white] text-primary-500 border-solid border-2 border-primary-500 text-sm mt-4 px-8"
					>Cancel</button
				>
				<button type="submit" class="btn variant-filled bg-primary-500 mt-4 px-12 sm:ml-5"
					>Save</button
				>
			</div>
		</div>
	</form>
</div>
