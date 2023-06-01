<script>
	import Input from '../Input/index.svelte';
	import { showPassword, hidePassword } from '../../assets/AppIcons';
	export let id = '';
	export let name = '';
	export let placeholder = '';
	export let margin = false;
	export let large = false;
	export let label = '';
	let passwordVisible = false;
	let type = "password";
	function togglePasswordVisibility() {
		passwordVisible = !passwordVisible;
		type = passwordVisible ? 'text' : 'password';
	}
</script>
<div class="relative">
	<Input id={id} name={name} placeholder={placeholder} margin={margin} large={large} type={type} label={label} />
				
				
<svg class="h-4 text-gray-400 absolute top-1/2 mt-2 right-2 -translate-y-1/2 " fill="none"  xmlns="http://www.w3.org/2000/svg" viewbox="0 0 640 512" on:click={togglePasswordVisibility}>
	<path fill="currentColor"
	  d="{passwordVisible ? showPassword : hidePassword}"
	>
	</path>
  </svg>
</div>