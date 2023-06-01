<script>
	export let component ;


	export let props ;
	export let slot ;
	export let name ;


    import { Modal,modalStore } from '@skeletonlabs/skeleton';
	
	
	const modalComponentSetting= {
    // Pass a reference to your custom component
    ref: component[name],
    // Add the component properties as key/value pairs
    props: props,
    // props: { background: 'bg-red-500' },
    // Provide a template literal for the default component slot
    slot: slot
}
	
	const d= {
	type: 'component',
	// Pass the component directly:
	component: modalComponentSetting,
};
modalStore.clear();
// {#if condition ==true} 
modalStore.trigger(d);
// {/if}

</script>

<Modal 

/>

<style>
</style>