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
	class="border-1 w-120 max-sm:mt-20 h-auto bg-white border-rgba(203, 222, 228, 0.6) rounded-[10px]"
>
	<form on:submit={submitForm}>
		<div class="employee_wrapper rounded-[10px] bg-white max-sm:px-3 px-5 mt-5 py-3 m-5">
			<div class="flex justify-between">
				<p class="font-Lato font-semibold text-xl mb-2">Bank Account Details</p>
				<iconify-icon
					on:click={() => modalStore.close()}
					class="text-[20px] text-secondary-100 cursor-pointer"
					icon="material-symbols:cancel-outline"
				/>
			</div>
			<div>
				<p class="font-Lato normal text-sm text-secondary-200">
					This account will be used for recieving payments after completing campaign and deal
				</p>
			</div>
			<div class="mt-8">
				<div class="flex my-2 max-sm:flex-wrap">
					<div class="w-1/3 max-sm:w-full mr-2">
						<Input label="Routing Number" required placeholder="00123456789" type="text" />
					</div>
					<div class="w-1/3 max-sm:w-full mr-2">
						<Input label="Account Number" required placeholder="00123456789" type="text" />
					</div>
					<div class="w-1/3 max-sm:w-full">
						<Input label="Account Holder Name" required placeholder="John Doe" type="text" />
					</div>
				</div>
				<div class="mt-6">
					<label class="flex items-center space-x-2 mb-2">
						<input class="checkbox bg-white" type="checkbox" required />
						<p>
							By registering your account,you agreee to our <span
								class="font-Lato normal text-sm underline underline-offset-1"
								>Services Agreement
							</span>
							and
							<span class="font-Lato normal text-sm underline underline-offset-1"
								>Stripe Connect Account Agreemnt
							</span>
						</p>
					</label>
				</div>
			</div>
			<div class="mb-[10px] flex flex-wrap items-center">
				<button
					on:click={() => modalStore.close()}
					class="btn variant-filled bg-[white] h-[40px] text-primary-500 border-solid border-2 border-primary-500
				 text-sm mt-2 px-8">Cancel</button
				>
				<button
					type="submit"
					class="btn variant-filled h-[40px] bg-blue-300 mt-2 px-12 max-sm:ml-2 ml-5">Next</button
				>
			</div>
		</div>
	</form>
</div>
