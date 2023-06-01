<script>
	import { Modal, Tab, TabGroup } from '@skeletonlabs/skeleton';
	import Header from '$lib/components/DashboardHeader/index.svelte';
	import SettingForm from '$lib/components/UserProfileSettingForm/index.svelte';
	import InformationForm from '$lib/components/UserProfileInformation/index.svelte';
	import editProfile from '$lib/assets/EditProfile.png';
	import tick from '$lib/assets/tick.png';
	import { showModal } from '$lib/utils/modal';
	import { modalStore } from '@skeletonlabs/skeleton';
	let tabSet = 0;
	let index = 7;
	let fileinput;
	let uploadImage = '';
	const onEditProfilePhoto = () => {
		showModal('AddPhotoModal', { ImageData: showImage, uploadImage });
	};
	const showImage = (value) => {
		uploadImage = value;
	};
	modalStore.close();
</script>

<Header />
<div class="px-3 md:px-20">
	<div class='flex sm:flex-row flex-col  items-center justify-between gap-5 my-10'>
		<div class="flex items-center gap-5">
			<div class="relative">
				<img
					src={uploadImage || editProfile}
					alt="editProfile"
					class='w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-[60px]'
				/>
				<div
					class="flex justify-center items-center rounded-[20px] bg-primary-500 w-10 h-10
					absolute right-0 bottom-0"
				>
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<iconify-icon
						on:click={onEditProfilePhoto}
						class="text-[20px] text-white cursor-pointer"
						icon="material-symbols:edit-square-outline-rounded"
					/>
				</div>
			</div>

			<div class="flex">
				<p class="font-Lato font-bold text-base">Insuredly Inc.</p>
				<img src={tick} alt="tick" />
			</div>
		</div>
		<TabGroup regionList="test" border="" class='mb-5 tab_wrapper'>
			<Tab
				active="border-b-2 border-b-secondary-500  font-bold font text-lg"
				class="tab"
				bind:group={tabSet}
				name="tab1"
				value={0}><p class="">Setting</p></Tab
			>
			<Tab
				active="border-b-2 border-b-secondary-500  font-bold font text-lg"
				class="tab"
				bind:group={tabSet}
				name="tab2"
				value={1}><p>Profile Information</p></Tab
			>
		</TabGroup>
	</div>

		{#if tabSet === 0}
		<SettingForm />
	{:else if tabSet === 1}
		<InformationForm />
	{/if}
</div>
