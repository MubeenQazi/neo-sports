<script>
	import { Avatar } from '@skeletonlabs/skeleton';
	export let data;
	let profileID = 2;
</script>

<div class="flex items-center">
	<Avatar src={data.row.athleteImage} width="w-10" rounded="rounded-full" />
	<a href="/athlete/profile/{profileID}" class="ml-2 unstyled text-black hover:underline"
		>Name <br /> Surname</a
	>
</div>
