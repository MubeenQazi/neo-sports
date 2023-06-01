<script>
  export let id = "";
  export let rows = "3";
  export let className = "";
  export let placeholder = "";
</script>
<textarea
  id={id}
  rows={rows}
  class="w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 resize-none placeholder-slate-300 px-4 py-3 {className}"
  placeholder={placeholder}
></textarea>