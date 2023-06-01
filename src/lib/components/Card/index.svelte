<script>
    export let className = "";
</script>

<div class={`${className} bg-white border border-gray-300 rounded-lg p-4`}>
    <slot></slot>
</div>