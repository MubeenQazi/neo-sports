<script type="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
	export let data: any;
</script>

<div class="flex items-center">
	<Avatar src={data.row.image} width="w-10" rounded="rounded-full" />
	<a href="#" class="ml-2 unstyled text-black hover:underline">{data.row.businessName}</a>
</div>
