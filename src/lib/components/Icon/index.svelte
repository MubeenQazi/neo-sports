<script lang="ts">
	import type { IconType } from "../../utils/icons";
	import { IconsList } from "../../utils/icons";
    export let width = "20px";
    export let height = "20px";
    export let icon: IconType = "sortAscending";
    export let style = "";
    export let className = "";
    let iconSet = IconsList[icon];
</script>
<iconify-icon {width} {height} icon={iconSet} {style} class={className}><slot></slot></iconify-icon>
