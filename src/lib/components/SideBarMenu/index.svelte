<script>
	// @ts-nocheck

	import logo from '../../assets/Logo.jpg';
	export let menu = '';
	export let className = '';
	export let classDrawer = '';
</script>

<aside
	id="default-sidebar"
	class="fixed top-0 left-0 w-64
    h-screen
    
    {classDrawer}"
>
	<div class={className || 'h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800'}>
		<div class="m-5"><img width="111" alt="logo" src={logo} /></div>
		<ul class="space-y-8 font-medium">
			<li
				class={menu == '/dashboard'
					? 'bg-primary-500  h-[40px] pt-[5px] flex items-start justify-start'
					: 'text-black normal h-[40px] pt-[5px]'}
			>
				<a
					href="/dashboard"
					on:click={() => menu}
					class={menu == '/dashboard'
						? '!text-[white] items-center flex ml-[30px] !no-underline font-bold'
						: 'font-semibold ml-[30px] items-center flex !no-underline !text-[black] normal'}
				>
					DASHBOARD
				</a>
			</li>

			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<li
				on:click={() => menu}
				class={menu == '/athletes'
					? 'bg-primary-500 h-[40px] pt-[5px] flex items-start justify-start'
					: ' normal h-[40px] pt-[5px]'}
			>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					class={menu == '/athletes'
						? '!text-white ml-[30px] !no-underline font-bold'
						: 'font-semibold ml-[30px] !no-underline !text-black normal'}
					href="/athletes"
					>AHTLETES
				</a>
				<iconify-icon
					class={menu == '/athletes'
						? 'text-[22px] text-[white] align-middle cursor-pointer'
						: 'text-[22px] text-secondary-100 align-middle cursor-pointer'}
					icon="material-symbols:arrow-drop-down"
				/>
				<div
					class={menu == '/athletes/search'
						? 'min-w-[230px] mt-12 absolute border bg-[#f9f9f9] z-10 shadow-lg rounded-[10px]'
						: 'min-w-[230px]  absolute border bg-[#f9f9f9] z-10 shadow-lg hidden rounded-[10px]'}
				>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						class="block hover:!text-primary-500
                hover:!font-semibold float-none px-3 py-2 !no-underline !text-[black] text-left"
						href="/athletes/search">Search</a
					>
					<!-- svelte-ignore a11y-invalid-attribute -->
					<a
						class="flex hover:!text-primary-500 hover:!font-semibold float-none px-3 py-2 !no-underline !text-black text-left"
						href="/athletes/savedList"
						>Saved List
					</a>
				</div>
			</li>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<li
				on:click={() => menu}
				class={menu == '/analysis'
					? 'bg-primary-500  h-[40px] pt-[5px] flex items-start justify-start'
					: 'normal h-[40px] pt-[5px]'}
			>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					class={menu == '/analysis'
						? '!text-[white] hover:!text-[white] ml-[30px] !no-underline font-bold  mr-5'
						: 'font-semibold ml-[30px] !no-underline !text-[black] normal mr-5'}
					href="#">ANALYSIS</a
				>
			</li>
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<li
				on:click={() => menu}
				class={menu == '/messages'
					? 'bg-primary-500  h-[40px] pt-[5px] flex items-start justify-start'
					: ' normal h-[40px] pt-[5px]'}
			>
				<!-- svelte-ignore a11y-invalid-attribute -->
				<a
					href="#"
					class={menu == '/messages'
						? '!text-[white] ml-[30px] !no-underline font-bold'
						: 'font-semibold ml-[30px] !no-underline !text-[black]  normal'}
				>
					MESSAGES
				</a>
			</li>
		</ul>
	</div>
</aside>
