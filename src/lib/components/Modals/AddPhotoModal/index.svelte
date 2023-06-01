<script>
	import { modalStore } from '@skeletonlabs/skeleton';
	import UploadDumi from '../../../assets/UploadDumi.png';
	import FileObjectToUrl from '../../../utils/reusableFunction';
	let fileinput,
		uploadImage = $modalStore[0].meta.uploadImage;
	const onFileSelected = (e) => {
		let selectedImageUrl = FileObjectToUrl(e.target.files[0]);

		uploadImage = selectedImageUrl;
	};
	const DisplayImage = () => {
		$modalStore[0].meta.ImageData(uploadImage);
		uploadImage && modalStore.close();
	};
</script>

<div
	class="border-1 md:w-[400px] max-sm:w-full xl:w-[480px] h-auto bg-white border-rgba(203, 222, 228, 0.6) rounded-[10px]"
>
	<div class="employee_wrapper rounded-[10px] bg-white px-5 mt-5 py-3">
		<div class="flex justify-between">
			<p class="font-Lato font-semibold text-xl">Add profile Photo</p>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<iconify-icon
				on:click={() => modalStore.close()}
				class="text-[20px] text-secondary-100 cursor-pointer"
				icon="material-symbols:cancel-outline"
			/>
		</div>
		<div class="flex justify-center my-10">
			<img
				class="w-[360px] h-[360px] rounded-[10px]"
				src={uploadImage || UploadDumi}
				alt="UploadDumi"
			/>
		</div>
		<div class="mb-5 ml-[5px]">
			<input
				style="display:none"
				type="file"
				accept=".jpg, .jpeg, .png"
				on:change={(e) => onFileSelected(e)}
				bind:this={fileinput}
			/>
			<button
				on:click={() => {
					fileinput.click();
				}}
				class="btn variant-filled mr-[15px] h-[40px] bg-[white] text-primary-500 border-solid border-2 border-primary-500 text-sm mt-8 px-8"
				>Add photo</button
			>
			<button
				on:click={() => {
					DisplayImage();
				}}
				class="btn variant-filled text-[16px] font-lato bg-primary-500 h-[40px] px-[50px] max-sm:mt-5"
				>Save</button
			>
		</div>
	</div>
</div>
