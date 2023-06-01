<script lang="ts">
	import { Modal } from '@skeletonlabs/skeleton';
	import { AppModals } from '../../utils/modal';

	const modalComponentRegistry = Object.entries(AppModals).reduce(
		(accum, [key, component]) => ({ ...accum, [key]: { ref: component } }),
		{}
	);
</script>

<Modal components={modalComponentRegistry} />
