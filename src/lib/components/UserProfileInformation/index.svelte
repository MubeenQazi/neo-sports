<script lang="ts">
	import Input from '../Input/index.svelte';
	import Password from '../Password/index.svelte';
	import Select from '../Select/index.svelte';
	const genderOption = ['Gender Not Specific', 'Male', 'Female'];
	const timeOption = ['Eastern Time', 'Asia Pacific', 'European Time'];
</script>

<form class="bg-white px-5 md:px-16 rounded-3xl mb-20">
	<div class="block border-b-2 border-gray-200 py-8">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 md:gap-2">
			<div class="block">
				<Input
					large
					id="fname"
					name="fname"
					placeholder="First Name"
					type="text"
					label="First Name"
				/>
			</div>
			<div class="block">
				<Input
					large
					id="lname"
					name="lname"
					placeholder="Last Name"
					type="text"
					label="Last Name"
				/>
			</div>
			<div class="block">
				<Select id="gender" label="Gender" large options={genderOption} />
			</div>
			<div class="block">
				<Input
					large
					id="address"
					name="address"
					placeholder="Address"
					type="text"
					label="Address"
				/>
			</div>
			<div class="block">
				<Input large id="city" name="city" placeholder="City" type="text" label="City" />
			</div>
			<div class="block">
				<Input large id="state" name="state" placeholder="State" type="text" label="State" />
			</div>
			<div class="block">
				<Input
					large
					id="birthdate"
					name="birthdate"
					placeholder="State"
					type="date"
					label="Birthdate"
				/>
			</div>
			<div class="block">
				<Input large id="phone" name="phone" placeholder="Phone" type="text" label="Phone" />
			</div>
			<div class="block">
				<Select id="time_zone" label="Time Zone" large options={timeOption} />
			</div>
		</div>
	</div>
	<div class="block border-b-2 border-gray-200 py-8">
		<p class="unstyled text-[20px] font-medium pb-7">Email Change</p>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<div class="block">
				<Input
					large
					id="current_email"
					name="current_email"
					placeholder="Current Email"
					type="email"
					label="Current Email"
				/>
			</div>
			<div class="block">
				<Input
					large
					id="new_email"
					name="new_email"
					placeholder="New Email"
					type="email"
					label="New Email"
				/>
			</div>
			<div class="block">
				<Password
					large
					id="password"
					name="password"
					placeholder="Enter Password"
					label="Enter Password"
				/>
			</div>
		</div>
		<div class="block mt-5">
			<button type="button" class="btn variant-filled bg-tertiary-50 px-16"> Change email </button>
		</div>
	</div>
	<div class="block border-b-2 border-gray-200 py-8">
		<p class="unstyled text-[20px] font-medium pb-7">Password Change</p>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 md:gap-2">
			<div class="block">
				<Password
					large
					id="current_password"
					name="current_password"
					placeholder="Enter Password"
					label="Current Password"
				/>
			</div>
			<div class="block">
				<Password
					large
					id="new_password"
					name="new_password"
					placeholder="Enter Password"
					label="New Password"
				/>
			</div>
			<div class="block">
				<Password
					large
					id="confirm_new_password"
					name="confirm_new_password"
					placeholder="Enter Password"
					label="Confirm New Password"
				/>
			</div>
		</div>
		<div class="block mt-5">
			<button type="button" class="btn variant-filled bg-tertiary-50 px-16">
				Change password
			</button>
		</div>
	</div>
	<div class="block border-b-2 border-gray-200 py-8">
		<p class="unstyled text-[20px] font-medium pb-2">Two-Factor Authentication</p>
		<p class="unstyled text-[14px] font-medium pb-8 text-secondary-200">
			Two-factor authentication adds an additional layer of security to your account by requiring
			more than just a password to sign in.
		</p>
		<div class="flex mb-5 gap-2 flex-wrap">
			<label class="flex items-center space-x-2 basis-full md:basis-1/2 lg:basis-1/4">
				<input class="checkbox bg-white" type="checkbox" />
				<p class="unstyled text-[14px]">By SMS: +1 (614) 822-9752</p>
			</label>
			<a class="unstyled underline font-normal text-secondary-200" href="/">Change number</a>
		</div>
		<div class="flex gap-2 flex-wrap">
			<label class="flex items-center space-x-2 basis-full md:basis-1/2 lg:basis-1/4">
				<input class="checkbox bg-white" type="checkbox" />
				<p class="unstyled text-[14px]">By one time passwords</p>
			</label>
			<a class="unstyled underline font-normal text-secondary-200" href="/"
				>Download recovery codes</a
			>
		</div>
	</div>
	<div class="block border-b-2 border-gray-200 py-8">
		<p class="unstyled text-[20px] font-medium pb-2">Receive Text Updates</p>
		<p class="unstyled text-[14px] font-medium pb-5 text-secondary-200">
			Enter the number you like to receive important updates such as deal offers, messages, and
			other opportunities.
		</p>
		<div class="block md:w-80 my-2">
			<Input large id="new_email" name="new_email" placeholder="+1 (614) 822-9752" type="email" />
		</div>
		<div class="flex mb-10">
			<label class="flex items-center space-x-2">
				<input class="checkbox bg-white" type="checkbox" />
				<p class="unstyled text-[14px]">
					You agree to receive automated messages. You also agree to our Terms of Use and Privacy
					Policy. Msg & Data rates may apply. Reply STOP to end or HELP for help.
				</p>
			</label>
		</div>
		<div class="block">
			<button type="button" class="btn variant-filled bg-tertiary-50 px-16"> Change email </button>
		</div>
	</div>
	<div class="block border-b-2 border-gray-200 py-8">
		<p class="unstyled text-[20px] font-medium pb-2">Notifications</p>
		<div class="flex gap-10 flex-wrap pt-3">
			<label class="flex items-center space-x-2 sm:basis-1/3 md:basis-1/4 lg:basis-auto">
				<input class="checkbox bg-white" type="checkbox" />
				<p class="unstyled text-[14px]">Deals</p>
			</label>
			<label class="flex items-center space-x-2 sm:basis-1/3 md:basis-1/4 lg:basis-auto">
				<input class="checkbox bg-white" type="checkbox" />
				<p class="unstyled text-[14px]">Deliverables</p>
			</label>
			<label class="flex items-center space-x-2 sm:basis-1/3 md:basis-1/4 lg:basis-auto">
				<input class="checkbox bg-white" type="checkbox" />
				<p class="unstyled text-[14px]">Messages</p>
			</label>
			<label class="flex items-center space-x-2 sm:basis-1/3 md:basis-1/4 lg:basis-auto">
				<input class="checkbox bg-white" type="checkbox" />
				<p class="unstyled text-[14px]">Newsletter</p>
			</label>
			<label class="flex items-center space-x-2 sm:basis-1/3 md:basis-1/4 lg:basis-auto">
				<input class="checkbox bg-white" type="checkbox" />
				<p class="unstyled text-[14px]">Deal Payments</p>
			</label>
			<label class="flex items-center space-x-2 sm:basis-1/3 md:basis-1/4 lg:basis-auto">
				<input class="checkbox bg-white" type="checkbox" />
				<p class="unstyled text-[14px]">Deal Reminders</p>
			</label>
			<label class="flex items-center space-x-2 sm:basis-1/3 md:basis-1/4 lg:basis-auto">
				<input class="checkbox bg-white" type="checkbox" />
				<p class="unstyled text-[14px]">Campaigns</p>
			</label>
		</div>
	</div>
	<div class="flex items-end justify-start md:justify-end flex-wrap gap-4 py-8">
		<button class="btn variant-ringed-tertiary text-primary-500 px-16"> Cancel </button>
		<button class="btn variant-filled bg-primary-500 px-16">Save</button>
	</div>
</form>
