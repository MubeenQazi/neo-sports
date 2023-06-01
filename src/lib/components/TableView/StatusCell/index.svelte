<script>
    export let data = null;

    const StatusTypeClasses = {
      Accepted: "bg-secondary-500",
      Declined: "bg-gray-500",
      Pending: "bg-primary-500",
    }
</script>
<span
  class={`
    text-center
    inline-block
    font-medium
    mr-2
    px-3
    rounded-full
    text-white
    w-[100px]
    ${StatusTypeClasses[data.value]}
  `}>
  {data.value}
</span>