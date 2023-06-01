<script>
	// @ts-nocheck

	import { modalStore } from '@skeletonlabs/skeleton';
	export let Heading = '';
	export let label = '';
	export let gallery = '';
	export let condition = false;
	export let businessLogo = false;
	import Upload from '../../../assets/Upload.png';
	import PhotoAhtlete from '../../../assets/PhotoAthlete.png';
	import { showModal } from '$lib/utils/modal';
	import FileObjectToUrl from '../../../utils/reusableFunction';

	let businessLogoFileinput;
	let businessGallery = [];
	let Gallery = [];
	let fileinput;

	const FileSelected = (e, value) => {
		let files = e.target.files;
		if (files.length > 5) {
			alert('You can only upload up to 5 files.');
			return;
		}
		// Add each file to the form data object
		for (let i = 0; i < files.length; i++) {
			let file = FileObjectToUrl(files[i]);
			if (value) {
				businessGallery = [...businessGallery, file];
			} else {
				Gallery = [...Gallery, file];
			}
		}
	};

	const FileDeleted = (index, value) => {
		if (value) {
			let deleteElement = businessGallery.filter((item, ind) => index !== ind);
			businessGallery = deleteElement;
		} else {
			let deleteElement = Gallery.filter((item, ind) => index !== ind);
			Gallery = deleteElement;
		}
	};
</script>

<div
	class="w-full rounded-[10px] bg-white max-sm:pl-4 pl-10 p-5 mb-3 h-auto
	lg:min-h-[180px] min-h-[120px]
	border border-solid border-rgba(203, 222, 228, 0.6)"
>
	<div class="flex justify-between">
		<p class="font-Lato font-semibold text-sm text-secondary-100">{Heading}</p>
		{#if label}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<iconify-icon
				on:click={() => condition && showModal('MissionStatemntModal')}
				class="text-[20px] text-secondary-100 cursor-pointer"
				icon="material-symbols:edit-square-outline-rounded"
			/>
		{/if}
		{#if gallery}
			<p class="font-Lato font-normal text-sm text-secondary-200 italic">Limit of 5</p>
		{/if}
	</div>
	{#if label}
		<div>
			<p class="font-Lato font-normal text-[14px] text-secondary-200 pt-[10px]">{label}</p>
		</div>
	{/if}

	{#if gallery && !businessLogo}
		<div class="mt-5 flex">
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<div
				class="rounded-[10px] bg-white w-16 border cursor-pointer p-1 ml-2 mr-2"
				on:click={() => {
					fileinput.click();
				}}
			>
				<p class="font-Lato font-normal text-[6px] text-secondary-100">Upload</p>
				<iconify-icon
					class="text-[25px] text-black flex justify-center"
					icon="material-symbols:arrow-circle-up-outline-rounded"
				/>
			</div>
			<input
				style="display:none"
				type="file"
				accept=".jpg, .jpeg, .png"
				multiple
				on:change={(e) => FileSelected(e)}
				bind:this={fileinput}
			/>
			<div class="flex flex-wrap gap-y-2 gap-x-2">
				{#each Gallery as item, key}
					<div class="relative flex gap-x-2 gap-y-2 cursor-pointer">
						<!-- svelte-ignore a11y-img-redundant-alt -->
						<img class="h-[60px] w-[60px] object-contain" src={item} alt="Your Image" />
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<div
							on:click={(e) => FileDeleted(key)}
							class="absolute top-0 left-0 opacity-0 flex flex-wrap items-center justify-center h-[50px] w-[60px] hover:bg-slate-300 hover:opacity-50"
						>
							<iconify-icon
								class="text-[20px] text-[red] border"
								icon="material-symbols:dangerous-outline-rounded"
							/>
							<p class="text-[red] text-[12px] mb-2">remove</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	{/if}

	{#if businessLogo}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<div
			class="flex justify-around mt-[20px] rounded-[10px] border bg-white w-24 cursor-pointer p-1 mb-2"
			on:click={() => {
				businessLogoFileinput.click();
			}}
		>
			<input
				style="display:none"
				type="file"
				accept=".jpg, .jpeg, .png"
				multiple
				bind:this={businessLogoFileinput}
				on:change={(e) => FileSelected(e, true)}
			/>
			<p class="font-Lato font-normal text-[6px] text-secondary-100">Upload</p>
			<iconify-icon
				class="text-[25px] text-black flex justify-center"
				icon="material-symbols:arrow-circle-up-outline-rounded"
			/>
		</div>
		<!-- <div class="max-sm:flex-wrap flex gap-x-2 gap-y-2">
			<img src={GalleryUpload} alt="gallery" />
			<img src={GalleryUpload} alt="gallery" />
		</div> -->
		<div class="flex flex-wrap gap-y-2 gap-x-2">
			{#each businessGallery as item, key}
				<div class="relative flex gap-x-2 gap-y-2 cursor-pointer">
					<img class="h-[30px] w-[110px] object-contain" src={item} alt="Your Image" />
					<div
						on:click={(e) => FileDeleted(key, true)}
						class="absolute top-0 left-0 opacity-0 items-center justify-center h-[30px] w-[110px] flex hover:bg-slate-300 hover:opacity-50"
					>
						<iconify-icon
							class="text-[20px] text-[red]"
							icon="material-symbols:dangerous-outline-rounded"
						/>
						<p class="text-[red] text-[12px] ml-[5px]">remove</p>
					</div>
				</div>
			{/each}
		</div>
	{/if}
</div>
