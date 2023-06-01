<script>
	// @ts-nocheck

	import logo from '../../assets/Logo.jpg';
	import notification from '../../assets/notification.png';
	import SideBarMenu from '../SideBarMenu/index.svelte';
	export let menu = '';
	export let sideBarShow = false;
	import { onMount } from 'svelte';
	import Icon from '../../components/Icon/index.svelte';

	onMount(() => (menu = window.location.pathname));
</script>

<div
	class="flex items-center justify-between h-[120px] pt-9 border-b-2 pb-5 px-20 max-sm:px-5 bg-white"
>
	<div>
		<img class="w-[90px] sm:w-[111px] max-sm:[500px] max-sm:ml-[10px]" alt="logo" src={logo} />
	</div>

	<div class="flex items-center">
		<div class="lg:flex xl:w-5/6 md:w-4/5 max-lg:hidden lg:justify-end">
			<nav>
				<ul id="menu">
					<li>
						<a
							class={menu == '/dashboard'
								? '!text-primary-500 !no-underline font-bold border-b-2 !border-primary-500'
								: 'font-semibold !no-underline !text-black normal'}
							href="/dashboard"
							on:click={() => menu}
						>
							DASHBOARD</a
						>
					</li>

					<li>
						<!-- svelte-ignore a11y-invalid-attribute -->
						<a
							class={menu == '/athletes'
								? '!text-primary-500 !no-underline font-bold border-b-2 !border-primary-500 ml-[19px]'
								: 'font-semibold !no-underline !text-black normal ml-5'}
							href="/athletes"
							on:click={() => menu}
							>AHTLETES
						</a>
						<button class="group btn relative p-0 top-[5px]" title="Add to List View">
							<iconify-icon
								class={menu == '/athletes'
									? 'group text-[22px] text-primary-500 align-middle cursor-pointer'
									: 'group text-[22px] text-secondary-100 align-middle cursor-pointer'}
								icon="material-symbols:arrow-drop-down"
							/>
							<div
								class={menu == '/athletes'
									? 'left-[-100pX] top-[20px] group-hover:block min-w-[160px] ml-24 absolute border bg-white z-10 shadow-lg rounded-[10px]'
									: 'left-[-100pX] top-[20px] group-hover:block min-w-[160px] ml-24 absolute border bg-white z-10 shadow-lg hidden rounded-[10px]'}
							>
								<a
									class="block hover:!text-primary-500
							hover:!font-semibold float-none px-3 py-2 !no-underline !text-[black] text-left"
									href="/athletes">Search</a
								>
								<a
									class="flex hover:!text-primary-500 hover:!font-semibold float-none px-3 py-2 !no-underline !text-[black] text-left"
									href="/saved-list"
									>Saved List
								</a>
							</div>
						</button>
					</li>

					<li>
						<a
							class={menu == '/analysis'
								? '!text-primary-500 !no-underline font-bold border-b-2 !border-primary-500 mr-5'
								: 'font-semibold !no-underline !text-black normal mr-5'}
							href="#"
							on:click={() => menu}>ANALYSIS</a
						>
					</li>
					<li class={menu == '/messages' ? 'border-b-4 border-Sky-700 mr-3 text-blue' : 'mr-3'}>
						<a
							class={menu == '/messages'
								? '!text-primary-500 !no-underline font-bold border-b-2 !border-primary-500'
								: 'font-semibold !no-underline !text-black  normal'}
							href="#"
							on:click={() => menu}>MESSAGES</a
						>
					</li>
				</ul>
			</nav>
		</div>

		<!-- {#if sideBarShow == true} -->
		<SideBarMenu
			className="lg:hidden h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"
			classDrawer="transition-all duration-700 z-10 {sideBarShow
				? 'translate-x-0'
				: '-translate-x-[100vw]'}"
			bind:menu
		/>
		<!-- {/if} -->

		<div class="h-10 border-solid border-2 vertical_line hidden lg:block" />

		<div class="flex gap-x-2 justify-end items-center md:w-[280px] xl:w-[240px]">
			<div class="lg:ml-[15px] sm:block hidden">
				<p
					class="font-semibold text-secondary-100 normal text-base max-md:ml-[10px]

				 mt-[4px]"
				>
					Name Surname
				</p>
			</div>
			<div class="flex justify-center rounded-full w-8 h-8 bg-black border text-white p-1">JB</div>
			<div class="justify-center items-center flex border border-primary-500 rounded-full w-8 h-8">
				<img alt="notification" src={notification} />
			</div>
		</div>

		<div class="h-10 border-solid border-2 vertical_line mx-4 block lg:hidden" />

		<div class="lg:hidden flex justify-end mr-3">
			<iconify-icon
				on:click={() => {
					sideBarShow = !sideBarShow;
				}}
				class="text-[30px] text-secondary-100 cursor-pointer"
				icon="material-symbols:dehaze"
			/>
		</div>
	</div>
</div>

<style>
	ul#menu li {
		display: inline;
		margin-right: 10px;
	}
	.vertical_line {
		border: 1px solid rgba(203, 222, 228, 0.6);
	}
</style>
