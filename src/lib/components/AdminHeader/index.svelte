<script>
	import logo from '../../assets/Logo.jpg';
	import notification from '../../assets/notification.png';
</script>

<div class=" flex items-center justify-between h-[120px] bg-[white] border-b-2 px-20 max-sm:px-5">
	<div><img class="w-[111px] sm:[500px]" alt="logo" src={logo} /></div>
	<div class="flex items-center">
		<p class="font-semibold pr-3  sm:block hidden">Name Admin</p>
		<div
			class="flex justify-center rounded-full w-8 h-8 bg-[black] border text-white mr-3 pt-[3px]"
		>
			JB
		</div>
		<div class="justify-center items-center flex border border-primary-500 rounded-full w-8 h-8">
			<img alt="notification" src={notification} />
		</div>
	</div>
</div>
