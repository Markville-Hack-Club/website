<script>
    import BentoGridItem from "./BentoGridItem.svelte";
    import BentoGrid from "./BentoGrid.svelte";
    import impactImage from "../assets/images/impact.jpg";
    import workshopImage from "../assets/images/workshop.jpg";
    import friendsImage from "../assets/images/friends.webp";
    import freeStuffImage from "../assets/images/free-stuff.jpg";
    import hackathonsImage from "../assets/images/hackathons.png";

    const items = [
        {
            title: "Create an Impact",
            description: "Pick a community project or bring your own idea to life.",
            image: impactImage,
            icon: "ph-pencil-circle-fill"
        },
        {
            title: "Fun Workshops",
            description: "Learn to code through hands-on projects.",
            image: workshopImage,
            icon: "mdi:design"
        },
        {
            title: "Make Friends",
            description: "Meet like-minded individuals and make friends.",
            image: friendsImage,
            icon: "icon-park-outline:connect"
        },
        {
            title: "Code 🡒 Get Free Stuff!",
            description: "Complete our workshops to get free stuff and food!",
            image: freeStuffImage,
            icon: "game-icons:boba"
        },
        {
            title: "Go To Hackathons With Us!",
            description: "Join us at hackathons and build cool projects.",
            image: hackathonsImage,
            icon: "game-icons:podium-winner"
        }
    ];
</script>

<div class="mt-64">
    <h1 class="text-6xl font-bold text-center mb-20">What We Do</h1>
    <BentoGrid>
        {#each items as item, i (i)}
            <BentoGridItem
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    image={item.image}
                    className="{i === 4 ? 'col-span-2' : 'col-span-1'}"
            />
        {/each}
    </BentoGrid>
</div>