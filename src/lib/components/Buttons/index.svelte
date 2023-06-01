<script>
	export let label = '';
</script>

<button
	on:click
	type="button"
	class="btn h-10 sm:w-[200px] w-auto border border-solid border-secondary-100"
>
	<iconify-icon icon="material-symbols:arrow-back-ios" />
	<span class="font-normal text-black">{label}</span></button
>
