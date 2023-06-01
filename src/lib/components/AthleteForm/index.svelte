<script>
	// @ts-nocheck

	import Input from '../Input/index.svelte';
	import Select from '../Select/index.svelte';

	const optionsSelect = [
		'Level',
		'AAU/Club',
		'Prep School',
		'Private School',
		'High School',
		'NCAA Division I',
		'NCAA Division II',
		'NAIA'
	];
</script>

<div>
	<form action="/dashboard">
		<div class="flex lg:flex-row flex-col gap-x-5">
			<Input required placeholder="First Name*" type="text" />
			<Input required placeholder="Last Name*" type="text" />
		</div>
		<div class="flex lg:flex-row flex-col gap-x-5">
			<Input required placeholder="Phone*" type="text" />
			<Input required placeholder="Email*" type="email" />
		</div>
		<div class="flex lg:flex-row flex-col gap-x-5">
			<Input required placeholder="Password*" type="password" />
			<Input required placeholder="Password Confirmation*" type="password" />
		</div>
		<div class="flex lg:flex-row flex-col gap-x-5">
			<Input required type="date" placeholder="Birthdate" />
			<Select options={optionsSelect} />
		</div>
		<div
			class="flex lg:flex-row flex-col gap-x-5 gap-y-5 lg:items-center items-start justify-between pt-5"
		>
			<div>
				<label class="flex items-center space-x-2 mb-2">
					<input class="checkbox bg-white" type="checkbox" />
					<p class="unstyled text-[13px] md:text-[16px]">
						I agree to the Privacy Policy & Terms Of Use
					</p>
				</label>
				<label class="flex items-center space-x-2">
					<input class="checkbox bg-white" type="checkbox" />
					<p class="unstyled text-[13px] md:text-[16px]">Receive Updates</p>
				</label>
			</div>
			<button class="btn variant-filled bg-primary-500 px-16">Sign up</button>
		</div>
	</form>
</div>
