<script>
	export let id = '';
	export let name = '';
	export let type = 'text';
	export let placeholder = '';
	export let margin = false;
	export let large = false;
	export let label = '';
	export let style = '';
	let inputValue = '';
	let isInputEmpty = false;
	export let required = false;

	export let className = '';

	function handleChange(event) {
		inputValue = event.target.value;
		isInputEmpty = inputValue.trim() === '';
	}
</script>

{#if label !== ''}
	<label class="mb-2 font-semibold text-base" for={id}>{label}</label>
{/if}

<input
	{required}
	on:change
	on:blur={handleChange}
	class="text_input mb-5 {margin && 'ml-5'} {large && 'large'} {isInputEmpty && required && 'error'} {className}"
	{placeholder}
	{type}
	value={inputValue}
	{name}
	{id}
	{style}
/>

<style>
	.text_input {
		width: 100%;
		height: 40px;
		border-radius: 10px;
		background-color: #ffffff;
		border: 1px solid rgba(203, 222, 228, 0.6);
		padding-left: 20px;
		font-size: 16px;
	}
	::placeholder {
		color: #bcc8cc;
	}
	input[type='date']:invalid::-webkit-datetime-edit {
		color: #999;
	}
	.large {
		height: 50px !important;
	}
	.text_input.error {
		border: 1px solid #e1414199;
	}
	.text_input.error::placeholder {
		color: #e1414199;
	}
</style>
