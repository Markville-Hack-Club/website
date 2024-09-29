<script>
    export let children;
</script>

<div class="flex flex-col w-[90%] md:grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
    <slot>{children}</slot>
</div>
