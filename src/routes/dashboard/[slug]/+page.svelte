<script>
	import Header from '$lib/components/DashboardHeader/index.svelte';
	import Card from '$lib/components/Card/index.svelte';
	import Icon from '$lib/components/Icon/index.svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
	import athleteImage from '$lib/assets/athleteImage.png';
	import athleteImage2 from '$lib/assets/athleteImage2.png';
	import Tooltip from '$lib/components/Tooltip/index.svelte';

	let activeMenuItemId = 1;
	let activeChildItemId = null;
	let childItemsExpanded = false;

	let menuItems = [
		{
			index: 1,
			title: 'Task',
			icon: 'factCheckOutline',
			childrens: [
				{ index: 1.1, title: 'Instagram', icon: 'accessTime' },
				{ index: 1.2, title: 'TikTok', icon: 'outlineCheck' },
				{ index: 1.3, title: 'Facebook', icon: 'accessTime' }
			]
		},
		{
			index: 2,
			title: 'Messages',
			icon: 'chatOutline',
			childrens: [
				{ index: 2.1, title: 'Message A', icon: 'accessTime' },
				{ index: 2.2, title: 'Message B', icon: 'outlineCheck' }
			]
		},
		{ index: 3, title: 'Details', icon: 'stickyNote' },
		{ index: 4, title: 'History', icon: 'historyQuery' },
		{ index: 5, title: 'Payment', icon: 'dollarSquare' },
		{ index: 6, title: 'Cancel Deal', icon: 'cancelOutline' }
	];

	const onSelectMenuItem = (parent, child) => {
		if (parent.childrens) childItemsExpanded = true;
		activeChildItemId = child?.index;
		activeMenuItemId = parent.index;
	};
</script>

<Header />
<div class="px-3 md:px-20 my-7">
	<!-- Title Section -->
	<h1 class="unstyled lg:text-[42px] text-[35px] font-normal mb-6">
		Deals: New organic soda launch
	</h1>

	<!-- Card Section -->
	<div class="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
		<!--  Card 1  -->
		<Card>
			<div class="p-2 flex flex-wrap items-center">
				<div class="rounded-full overflow-hidden mr-4">
					<Avatar src={athleteImage2} width="w-10" rounded="rounded-full" />
				</div>
				<div>
					<div class="unstyled font-medium mb-1 text-xl font-semibold">Moon Cola</div>
					<div class="flex items-center">
						<p class="unstyled text-secondary-500 text-sm font-normal">Accepted Deal</p>
						<div class="flex items-center justify-center text-secondary-500 ml-[4px]">
							<Icon icon="outlineCheck" />
						</div>
					</div>
				</div>
			</div>
		</Card>
		<!--  Card 2  -->
		<Card>
			<div class="p-2 flex flex-wrap items-center">
				<div class="rounded-full overflow-hidden mr-4">
					<Avatar src={athleteImage} width="w-10" rounded="rounded-full" />
				</div>
				<div>
					<div class="unstyled font-medium mb-1 text-xl font-semibold">Name Surname</div>
					<div class="flex items-center">
						<p class="unstyled text-secondary-500 text-sm font-normal">Accepted Deal</p>
						<div class="flex items-center justify-center text-secondary-500 ml-[4px]">
							<Icon icon="outlineCheck" />
						</div>
					</div>
				</div>
			</div>
		</Card>
		<!--  Card 3  -->
		<Card className="relative">
			<div class="p-2 flex flex-wrap items-center">
				<div class="rounded-full overflow-hidden mr-4">
					<Icon icon="dollarCircle" width="50px" height="50px" />
				</div>
				<div>
					<div class="unstyled font-medium mb-1 text-xl font-semibold">$3000 + Product</div>
					<div class="flex items-center">
						<p class="unstyled text-gray-500 text-sm font-normal">Compensation Value</p>
					</div>
					<div class="flex items-center justify-center absolute right-3 top-3">
						<Tooltip />
					</div>
				</div>
			</div>
		</Card>
		<!--  Card 4  -->
		<Card>
			<div class="p-2 flex flex-wrap items-center">
				<div class="rounded-full overflow-hidden mr-4">
					<Icon icon="historyQuery" width="50px" height="50px" />
				</div>
				<div>
					<div class="unstyled font-medium mb-1 text-xl font-semibold">1 of 3</div>
					<div class="flex items-center">
						<p class="unstyled text-secondary-500 text-sm font-normal">Task Completed</p>
						<div class="flex items-center justify-center text-secondary-500 ml-[4px]">
							<Icon icon="outlineCheck" />
						</div>
					</div>
				</div>
			</div>
		</Card>
	</div>
	<!-- Section 2 -->
	<div class="grid grid-cols-12 gap-5 mt-5">
		<div class="col-span-12 md:col-span-4 lg:col-span-3 h-full">
			<Card>
				<ul>
					{#each menuItems as item (item.index)}
						<li>
							<button
								on:click={() => onSelectMenuItem(item)}
								class:active={activeMenuItemId === item.index}
								class:hasChildren={item.childrens}
								type="button"
								class="rounded-md relative inline-flex items-center w-full px-4 py-2 font-medium hover:bg-gray-100 hover:text-blue-700"
							>
								<Icon icon={item.icon} width="25px" height="25px" />
								<span class="flex-1 text-left ml-2">{item.title}</span>
								{#if item.childrens}
									{#if childItemsExpanded && activeMenuItemId === item.index}
										<Icon icon="arrowUpRounded" />
									{:else}
										<Icon icon="arrowDownRounded" />
									{/if}
								{/if}
							</button>
							{#if item.childrens && childItemsExpanded && activeMenuItemId === item.index}
								<ul class="ml-4">
									{#each item.childrens as childItem (childItem.index)}
										<li>
											<button
												on:click={() => onSelectMenuItem(item, childItem)}
												class:activeChild={activeChildItemId === childItem.index}
												type="button"
												class="outline-none relative inline-flex items-center w-full px-4 py-2 font-medium hover:bg-gray-100 hover:text-blue-700"
											>
												<span class="flex-1 text-left">{childItem.title}</span>
												<Icon icon={childItem.icon} />
											</button>
										</li>
									{/each}
								</ul>
							{/if}
						</li>
					{/each}
				</ul>
			</Card>
			<button class="btn bg-primary-500 w-full text-white mt-5">Review Draft</button>
		</div>
		<div class="col-span-12 md:col-span-8 lg:col-span-9 h-full">
			<Card className="h-full">
				<div class="flex flex-wrap gap-y-4">
					<div class="flex items-center flex-1">
						<h4 class="font-medium mr-2 whitespace-nowrap">Instagram | Photo</h4>
						<Tooltip tooltipWrapperClass="relative" />
					</div>
					<div class="hidden sm:block">
						<button
							class="flex items-center bg-white border border-gray-400 rounded-full px-4 py-2 text-gray-700 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
						>
							Task 1 of 3 <Icon width="11px" icon="arrowForward" className="pl-1" />
						</button>
					</div>
					<div class="sm:hidden">
						<button class="flex items-center bg-white text-gray-700 hover:text-gray-800">
							1 of 3 <Icon width="10px" icon="arrowForward" className="pl-1" />
						</button>
					</div>
				</div>

				<div class="relative overflow-x-auto mt-4">
					<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
						<tbody>
							<tr class="bg-white border-t dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									class="py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
								>
									Due date for Draft Submission:
								</th>
								<td class="px-6 py-4"> Due in 7 days (05.20.2022) </td>
							</tr>
							<tr class="bg-white border-t dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									class="py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
								>
									Content live date:
								</th>
								<td class="px-6 py-4"> Due in 15 days (05.28.2022) </td>
							</tr>
							<tr class="bg-white border-t dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									class="py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
								>
									Required Hashtags:
								</th>
								<td class="pl-6 py-4">
									<div class="flex gap-2">
										<p
											class="unstyled w-max text-secondary-500 border border-gray-200 text-xs font-bold mr-2 px-2.5 py-1 rounded-lg"
										>
											#moon
										</p>
										<p
											class="unstyled w-max text-secondary-500 border border-gray-200 text-xs font-bold mr-2 px-2.5 py-1 rounded-lg"
										>
											#mooncola
										</p>
										<p
											class="unstyled w-max text-secondary-500 border border-gray-200 text-xs font-bold mr-2 px-2.5 py-1 rounded-lg"
										>
											#tothemoon
										</p>
									</div>
								</td>
							</tr>
							<tr class="bg-white border-t dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									class="py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
								>
									Required Account Tags:
								</th>
								<td class="px-6 py-4">
									<span class="text-secondary-500 text-sm font-bold mr-2 px-2.5 py-1 rounded-lg"
										>@mooncola</span
									>
								</td>
							</tr>
							<tr class="bg-white border-t dark:bg-gray-800 dark:border-gray-700">
								<th
									scope="row"
									class="py-4 font-bold text-gray-900 whitespace-nowrap dark:text-white"
								>
									Expectations:
								</th>
								<td class="px-6 py-4">
									We are asking you to create an Instagram Photo post showing yourself takinga sip
									of the new moon cola post workout. At Moon Cola, we’re all about individuality, so
									please feel the freedom to show your personality in the content you create.
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Card>
		</div>
	</div>
</div>

<style>
	.active.hasChildren {
		background-color: rgb(var(--color-surface-100));
		color: black;
	}
	.active {
		background-color: rgb(var(--color-primary-500));
		color: white;
	}
	.activeChild {
		color: rgb(var(--color-primary-500));
	}
</style>
