<script>
	import { modalStore } from '@skeletonlabs/skeleton';
	import creditCard from '../../../assets/creditCard.png';
	let cardNumber = '';
	let MM = '';
	let YY = '';
	let CVC = '';

	const submitForm = (e) => {
		if (e.target.checkValidity()) {
			modalStore.close();
		}
	};
</script>

<div
	class="border-1 w-1/2 max-md:w-full h-auto bg-[white] border-rgba(203, 222, 228, 0.6) rounded-[10px]"
>
	<form on:submit={submitForm}>
		<div class="employee_wrapper rounded-[10px] bg-white px-5 mt-5 py-3 m-5">
			<div class="flex justify-between">
				<p class="font-Lato font-semibold text-xl">Add Credit Card</p>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<iconify-icon
					on:click={() => modalStore.close()}
					class="text-[20px] text-secondary-100 cursor-pointer"
					icon="material-symbols:cancel-outline"
				/>
			</div>
			<!-- <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 my-5" placeholder="123456789" > -->

			<div class="flex mt-10">
				<div class="flex items-center border w-full px-2 rounded-[10px]">
					<div class="flex items-center w-full">
						<img class="h-[16px] w-[24px]" src={creditCard} alt="credit Card" />
						<input
							required
							bind:value={cardNumber}
							type="text"
							maxlength="16"
							size="16"
							id="success"
							class="bg-white-50 border-transparent text-[black]
                    placeholder-[#BCC8CC] text-sm rounded-lg
                     focus:ring-transparent focus:border-transparent
                     block w-3/4 p-2.5 dark:bg-gray-700
                     dark:border-transparent"
							placeholder="123456789"
						/>
					</div>
					<div class="flex items-center">
						<input
							required
							bind:value={MM}
							maxlength="2"
							size="2"
							type="text"
							id="success"
							class="bg-white-50 border-transparent text-[black]
                    placeholder-[#BCC8CC] text-sm rounded-lg
                     focus:ring-transparent focus:border-transparent
                     block w-[30px] p-0 dark:bg-gray-700
                     dark:border-transparent"
							placeholder="MM"
						/>
						<span class={MM.length == 2 ? 'text-[black] mr-2' : 'text-[#BCC8CC] mr-2'}>/</span>
						<input
							required
							bind:value={YY}
							type="text"
							maxlength="2"
							size="2"
							id="success"
							class="bg-white-50 border-transparent text-[black]
                    placeholder-[#BCC8CC] text-sm rounded-lg
                     focus:ring-transparent p-0 focus:border-transparent
                     block w-[32px] dark:bg-gray-700
                     dark:border-transparent"
							placeholder="YY"
						/>

						<span class={YY.length == 2 ? 'text-[black] mr-2' : 'text-[#BCC8CC] mr-2'}>/</span>

						<input
							required
							bind:value={CVC}
							type="text"
							maxlength="3"
							size="3"
							id="success"
							class="bg-white-50 border-transparent text-[black]
                    placeholder-[#BCC8CC] text-sm rounded-lg
                     focus:ring-transparent p-0 focus:border-transparent
                     block w-[42px] dark:bg-gray-700
                     dark:border-transparent"
							placeholder="CVC"
						/>
					</div>
					<!-- <span class="text-[#BCC8CC] text-sm ml-12">MM/YY/CVC</span>
				{/if} -->
					<div />
				</div>
			</div>

			<div>
				<button
					on:click={() => modalStore.close()}
					class=" cursor-pointer btn variant-filled bg-[white] text-primary-500 border-solid border-2 border-primary-500 text-sm mt-8 px-8"
					>Cancel</button
				>
				<button type="submit" class="btn variant-filled bg-primary-500 mt-8 px-12 ml-5">Save</button
				>
			</div>
		</div>
	</form>
</div>
