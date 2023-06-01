export type IconType =
	| 'sortAscending'
	| 'settingHorizontal'
	| 'filter'
	| 'pulse'
	| 'archive'
	| 'pencilInSquare'
	| 'outlineCheck'
	| 'arrowUpRounded'
	| 'factCheckOutline'
	| 'chatOutline'
	| 'stickyNote'
	| 'addDocSquare'
	| 'socialTikTok'
	| 'socialTwitter'
	| 'socialInstagram'
	| 'socialYoutube'
	| 'arrowDownRounded'
	| 'cancelOutlineCircle'
	| 'historyQuery'
	| 'dollarCircle'
	| 'dollarSquare'
	| 'cancelOutline'
	| 'accessTime'
	| 'exclamationCircle'
	| 'arrowForward'
	| 'arrowBackward'
	| 'instagramIcon'
	| 'twitterIcon'
	| 'tiktokIcon'
	| 'starIcon'
	| 'addOutlineCircle'
	| 'arrowUpOutlineCircle'
	| 'checkFillCircle'
	| 'userIcon'
	| 'uploadBox'
	| 'overview';
export type IconAliasType = { [key in IconType]: string };

export const IconsList: IconAliasType = {
	sortAscending: 'ph:sort-ascending',
	settingHorizontal: 'basil:settings-adjust-outline',
	filter: 'mingcute:settings-2-line',
	pulse: 'ri:pulse-fill',
	archive: 'ph:archive-box',
	pencilInSquare: 'material-symbols:edit-square-outline-rounded',
	outlineCheck: 'material-symbols:check-circle-outline',
	arrowUpRounded: 'material-symbols:arrow-drop-up-rounded',
	arrowDownRounded: 'material-symbols:arrow-drop-down-rounded',
	factCheckOutline: 'material-symbols:fact-check-outline',
	chatOutline: 'material-symbols:chat-outline',
	stickyNote: 'material-symbols:sticky-note-2-outline',
	historyQuery: 'icon-park-outline:history-query',
	dollarCircle: 'humbleicons:currency-dollar-circle',
	dollarSquare: 'ri:money-dollar-box-line',
	cancelOutline: 'solar:close-square-linear',
	cancelOutlineCircle: 'radix-icons:cross-circled',
	accessTime: 'ic:baseline-access-time',
	exclamationCircle: 'teenyicons:exclamation-circle-solid',
	arrowForward: 'material-symbols:arrow-forward-ios',
	arrowBackward: 'material-symbols:arrow-back-ios',
	addDocSquare: 'material-symbols:docs-add-on',
	socialTikTok: 'ic:baseline-tiktok',
	socialTwitter: 'mdi:twitter',
	socialInstagram: 'ri:instagram-fill',
	socialYoutube: 'akar-icons:youtube-fill',
	instagramIcon: 'mdi:instagram',
	twitterIcon: 'mdi:twitter',
	tiktokIcon: 'ic:baseline-tiktok',
	userIcon:'gg:profile',
	uploadBox:'streamline:interface-download-box-1-arrow-box-down-download-internet-network-server-upload',
	overview:'pajamas:overview',
	starIcon: 'material-symbols:star-rate-rounded',
	addOutlineCircle: "material-symbols:add-circle-outline",
	arrowUpOutlineCircle: "material-symbols:arrow-circle-up-outline-rounded",
	checkFillCircle: "material-symbols:check-circle",
};
