<script>
	import { modalStore } from '@skeletonlabs/skeleton';
	import Input from '../../../components/Input/index.svelte';
	import Select from '../../Select/index.svelte';

	const submitForm = (e) => {
		if (e.target.checkValidity()) {
			modalStore.close();
		}
	};
</script>

<div
	class="border-1 w-120 max-sm:mt-[220px] h-auto bg-white border-rgba(203, 222, 228, 0.6) rounded-[10px]"
>
	<form on:submit={submitForm}>
		<div class="employee_wrapper rounded-[10px] bg-white max-sm:px-0 px-5 mt-5 py-3 m-5">
			<div class="flex justify-between">
				<p class="font-Lato font-semibold text-xl mb-2">Edit Employee</p>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<iconify-icon
					on:click={() => modalStore.close()}
					class="text-[20px] text-secondary-100 cursor-pointer"
					icon="material-symbols:cancel-outline"
				/>
			</div>
			<div>
				<div class="flex max-sm:flex-wrap mt-6">
					<div class="w-1/3 mr-2 max-sm:w-full">
						<Input required label="First Name" placeholder="Jordan" type="text" />
					</div>
					<div class="w-1/3 mr-2 max-sm:w-full">
						<Input required label="Last Name" placeholder="Linn" type="text" />
					</div>
					<div class="w-1/3 max-sm:w-full">
						<Input required label="Email" placeholder="Jordan@insuredly.com" type="text" />
					</div>
				</div>
				<div class="flex max-sm:flex-wrap">
					<div class="w-1/3 mr-2 max-sm:w-full">
						<Input required label="Phone" placeholder="+1 (614) 822-9752" type="text" />
					</div>

					<div class="w-1/3 mr-2 max-sm:w-full">
						<Input required label="Position" placeholder="Position" type="text" />
					</div>
					<div class="w-1/3 max-sm:w-full">
						<Input required label="Access" placeholder="Owner" type="text" />
					</div>
				</div>
			</div>
			<div>
				<button
					on:click={() => modalStore.close()}
					class="btn variant-filled bg-[white] text-primary-500 border-solid border-2
                 border-primary-500 text-sm mt-[15px] px-8">Cancel</button
				>
				<button
					type="submit"
					class="btn variant-filled bg-primary-500 mt-[15px] px-12 max-sm:ml-[1px] ml-5"
					>Save</button
				>
			</div>
		</div>
	</form>
</div>
