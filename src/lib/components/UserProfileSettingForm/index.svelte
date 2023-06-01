<script lang="ts">
	import ProfileSettingForm from '../UserProfileSetting/ProfileSettingForm/index.svelte';
	import { modalStore } from '@skeletonlabs/skeleton';
	import PaymentCardForm from '../UserProfileSetting/PaymentCardForm/index.svelte';
	import TableWrapper from '../TableWrapper/index.svelte';
	import BusinessInformation from '../UserProfileSetting/BusinessInformation/index.svelte';
	import TableView from '../../components/TableView/index.svelte';
	import Edit from '../profileSettingEdit/index.svelte';
	import { showModal } from '$lib/utils/modal';

	let originalItems = [
		{
			id: '3013',
			Name: 'Jordan Linn',
			Position: '-',
			Email: 'Jordan@insuredly.com',
			Phone: '+1 (614) 822-9752',
			Access: 'Owner',
			editIcon: 'pencilInSquare',
			compliance: true
		}
	];
	let tableItems = originalItems;
</script>

<div class="items-center justify-between mb-20">
	<div class="lg:flex gap-x-4">
		<ProfileSettingForm Heading={'Product/Services Description'} label={'No Description'} />
		<ProfileSettingForm Heading={'Gallery'} gallery={'fileInput'} />
	</div>
	<div class="lg:flex gap-x-4">
		<ProfileSettingForm
			Heading={'Mission Statement'}
			condition={true}
			label={'No mission statement provided'}
		/>
		<ProfileSettingForm Heading={'Business Logo'} gallery={'fileInput'} businessLogo={true} />
	</div>
	<div
		class="w-full rounded-[10px] bg-white p-5 mt-2 border border-solid border-rgba(203, 222, 228, 0.6)"
	>
		<div class="flex justify-between max-sm:flex-wrap">
			<p class="font-Lato font-semibold text-sm text-secondary-100 mb-5">Employees</p>

			<div class="flex">
				<p class="  max-sm:mr-2 mr-5">Add Employee</p>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<iconify-icon
					on:click={() => showModal('EditEmployeeModal')}
					class="text-[25px] text-black flex justify-center cursor-pointer"
					icon="material-symbols:add-circle-outline-rounded"
				/>
			</div>
		</div>
		<TableView
			cellLabelClass="bg-white border-t border-b text-sm text-secondary-100 font-semibold !pr-5"
			cardClass="border-none"
			headLabelClass="text-secondary-200 font-normal text-sm !pr-5"
			columns={[
				{
					field: 'Name',
					title: 'Name',
					cellClass: '!pr-4'
				},
				{
					field: 'Position',
					title: 'Position',
					cellClass: '!pr-4'
				},
				{
					field: 'Email',
					title: 'Email',
					cellClass: '!pr-4'
				},

				{
					field: 'Phone',
					title: 'Phone',
					cellClass: '!pr-4'
				},
				{
					field: 'Access',
					title: 'Access',
					cellClass: '!pr-4'
				},
				{
					field: 'compliance',
					headClass: 'cursor-pointer',
					cellClass: '!pr-0 pl-10 items-center flex justify-center',
					cellRendererComponent: Edit
				}
				// }
			]}
			rows={tableItems}
		/>
	</div>

	<BusinessInformation />

	<div class="lg:flex gap-x-4">
		<PaymentCardForm Heading={'Payment Methods'} />
		<div
			class="w-1/2 sm:w-full max-sm:w-full lg:min-h-[300px] h-auto
			border border-solid border-rgba(203, 222, 228, 0.6) rounded-[10px] bg-white p-5 mb-3 mt-5"
		>
			<div class="justify-between max-sm:h-auto">
				<div class="w-full">
					<p class="font-Lato font-semibold text-sm text-secondary-100">{'Delete Account'}</p>
					<p class="font-Lato font-normal text-sm text-secondary-200 inline-block mt-5">
						This action will permanently delete your account
					</p>
					<br />
					<p class="font-Lato font-normal text-sm text-secondary-200 inline-block">
						For furthur assistance contact: <span class="underline underline-offset-1"
							>support@nilvaluation.com</span
						>
					</p>
				</div>
				<div class="lg:mt-12">
					<button class="btn variant-filled bg-primary-500 text-sm lg:mt-20 max-lg:mt-[30px] px-8"
						>Delete Account</button
					>
				</div>
			</div>
		</div>
	</div>
</div>
