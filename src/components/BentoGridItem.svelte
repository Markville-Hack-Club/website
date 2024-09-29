<script>
    import { animate } from "motion";
    import Icon from "@iconify/svelte";
    import { onMount } from "svelte";

    export let title = "";
    export let description = "";
    export let icon = "";
    export let image = {};
    export let className = "";

    let imageRef;

    onMount(() => {
        const handleMouseEnter = () => {
            animate(imageRef, { objectPosition: "center top" }, { duration: 0.5 });
        };

        const handleMouseLeave = () => {
            animate(imageRef, { objectPosition: "center center" }, { duration: 0.5 });
        };

        imageRef.addEventListener("mouseenter", handleMouseEnter);
        imageRef.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            imageRef.removeEventListener("mouseenter", handleMouseEnter);
            imageRef.removeEventListener("mouseleave", handleMouseLeave);
        };
    });
</script>

<div class="rounded-xl group/bento p-4 bg-white {className} h-[102%]">
    {#if image}
        <img bind:this={imageRef} src={image.src} alt={title} class="w-full h-44 object-cover object-center rounded-lg"/>
    {/if}
    <div class="group-hover/bento:translate-x-2 transition duration-500 will-change-transform">
        <Icon icon={icon} class="text-black text-2xl mt-2"/>
        <div class="font-bold text-neutral-600 mb-1">
            {title}
        </div>
        <div class="text-neutral-600 text-xs" style="line-height: 1.5;">
            {description}
        </div>
    </div>
</div>