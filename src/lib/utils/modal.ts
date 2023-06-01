import type { ModalSettings } from '@skeletonlabs/skeleton';
import { modalStore } from '@skeletonlabs/skeleton';
import RemoveAthleteModal from '../components/Modals/RemoveAthleteModal/index.svelte';
import AddPhotoModal from '../components/Modals/AddPhotoModal/index.svelte';
import MissionStatemntModal from '../components/Modals//MissionStatemntModal/index.svelte';
import AddCreditCardModal from '../components/Modals//AddCreditCardModal/index.svelte';
import BusinessInformationModal from '../components/Modals//BusinessInformationModal/index.svelte';
import EditEmployeeModal from '../components/Modals/EditEmployeeModal/index.svelte';
import BankAccountDetailModal from '../components/Modals/BankAccountDetailModal/index.svelte';
import AthletesComparisonModal from '../components/Modals/AthletesComparisonModal/index.svelte';


    export const AppModalKeys = {
	RemoveAthleteModal: 'removeAthleteModal',
	AthletesComparisonModal: 'athletesComparisonModal',
	AddPhotoModal: 'AddPhotoModal',
	MissionStatemntModal: 'MissionStatemntModal',
	AddCreditCardModal: 'AddCreditCardModal',
	BusinessInformationModal: 'BusinessInformationModal',
	EditEmployeeModal: 'EditEmployeeModal',
	BankAccountDetailModal: 'BankAccountDetailModal'
} as const;

// Register your modal keys & instances here
export const AppModals = {
	[AppModalKeys.RemoveAthleteModal]: RemoveAthleteModal,
	[AppModalKeys.AthletesComparisonModal]: AthletesComparisonModal,
	[AppModalKeys.AddPhotoModal]: AddPhotoModal,
	[AppModalKeys.MissionStatemntModal]: MissionStatemntModal,
	[AppModalKeys.AddCreditCardModal]: AddCreditCardModal,
	[AppModalKeys.BusinessInformationModal]: BusinessInformationModal,
	[AppModalKeys.EditEmployeeModal]: EditEmployeeModal,
	[AppModalKeys.BankAccountDetailModal]: BankAccountDetailModal
};

// Utility functions for operating modal
export const showModal = (
	componentType: keyof typeof AppModalKeys,
	data?: any,
	otherSettings?: Omit<ModalSettings, 'type' | 'component'>
) => {
	modalStore.trigger({
		type: 'component',
		component: AppModalKeys[componentType],
		...otherSettings,
		meta: data
	});
};

export const closeModal = () => {
	modalStore.close();
};
