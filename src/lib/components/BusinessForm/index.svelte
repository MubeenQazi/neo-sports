<script>
	// @ts-nocheck

	import Input from '../Input/index.svelte';
	import Select from '../Select/index.svelte';

	const optionsSelect = [
		'Select Industry',
		'Nonprofit',
		'Agency',
		'Apparel',
		'Automobile',
		'Brokerage & Financial',
		'Collective',
		'Educational',
		'Electronics',
		'Food & Beverage',
		'Gaming',
		'Health & Nutrition',
		'Home Improvement',
		'Hospitality',
		'Hygiene',
		'IT & Software',
		'Legal & Tax',
		'Media',
		'Merchandise',
		'Onsite Sports Performance',
		'Pet Supplies',
		'Sports Equipment',
		'Travel',
		'Utility Provider',
		'Web3'
	];
</script>

<div>
	<form action="/dashboard">
		<div class="flex">
			<Input required placeholder="Legal Business Name*" type="text" />
			<Select options={optionsSelect} margin />
		</div>
		<div class="flex">
			<Input required placeholder="Your First Name*" type="text" />
			<Input required margin placeholder="Your Last Name*" type="text" />
		</div>
		<div class="flex">
			<Input required placeholder="Phone*" type="text" />
			<Input required margin placeholder="Email*" type="email" />
		</div>
		<div class="flex">
			<Input required placeholder="Password*" type="password" />
			<Input required margin placeholder="Password Confirmation*" type="password" />
		</div>
		<div class="flex justify-between items-center pt-5">
			<div>
				<label class="flex items-center space-x-2 mb-2">
					<input class="checkbox bg-white" type="checkbox" />
					<p>I agree to the Privacy Policy & Terms Of Use</p>
				</label>
				<label class="flex items-center space-x-2">
					<input class="checkbox bg-white" type="checkbox" />
					<p>Receive Updates</p>
				</label>
			</div>
			<button class="btn variant-filled bg-primary-500 mt-8 px-16">Sign up</button>
		</div>
	</form>
</div>
