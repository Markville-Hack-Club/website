<script>
    import bobaImage from "../assets/images/boba.png";
    import pcbImage from "../assets/images/pcb.png";
    import blotImage from "../assets/images/blot.webp";
    import sprigImage from "../assets/images/sprig.png";
    import jamsImage from "../assets/images/jams.png";

    let currentHoveredActivity = -1;
    const getOnHoverFunction = (index) => {
        return () => {
            currentHoveredActivity = index;
        };
    };
</script>

<div class="mt-64 flex flex-col items-center">
    <h1 class="text-3xl md:text-5xl font-bold text-center mb-20">Some Of Our Activities/Workshops</h1>
    <div class="flex flex-col lg:flex-row text-center gap-16 w-[80%] lg:w-[60%]">
        <div class="flex-1 flex flex-col duration-500 hover:scale-110"
             class:blur={currentHoveredActivity !== -1 && currentHoveredActivity !== 0}
             on:mouseenter={getOnHoverFunction(0)} on:mouseleave={getOnHoverFunction(-1)}>
            <img src={bobaImage.src} alt="Boba" class="min-h-44 max-w-40 mx-auto object-contain"/>
            <h2 class="text-3xl">Boba Drops</h2>
            <p class="text-neutral-300">
                Design a website and get
                <span class="text-accent font-bold">free</span>
                boba!
            </p>
        </div>
        <div class="flex-1 flex flex-col duration-500 hover:scale-110"
             class:blur={currentHoveredActivity !== -1 && currentHoveredActivity !== 1}
             on:mouseenter={getOnHoverFunction(1)} on:mouseleave={getOnHoverFunction(-1)}>
            <img src={pcbImage.src} alt="PCB" class="min-h-44 max-w-40 mx-auto object-contain"/>
            <h2 class="text-3xl">Onboard</h2>
            <p class="text-neutral-300">
                Design a circuit board and get a
                <span class="text-accent font-bold">$135</span>
                grant to get it manufactured!!
            </p>
        </div>
        <div class="flex-1 flex flex-col duration-500 hover:scale-110"
             class:blur={currentHoveredActivity !== -1 && currentHoveredActivity !== 2}
             on:mouseenter={getOnHoverFunction(2)} on:mouseleave={getOnHoverFunction(-1)}>
            <img src={blotImage.src} alt="Blot" class="min-h-44 max-w-40 mx-auto object-contain"/>
            <h2 class="text-3xl">Blot</h2>
            <p class="text-neutral-300">
                Write an interactive art piece, and receive a CNC machine valued at
                <span class="text-accent font-bold">$270</span>
                that can draw it!
            </p>
        </div>
    </div>
    <div class="flex flex-col lg:flex-row justify-center text-center gap-16 w-[80%] lg:w-[40%] mt-12">
        <div class="flex-1 duration-500 hover:scale-110"
             class:blur={currentHoveredActivity !== -1 && currentHoveredActivity !== 3}
             on:mouseenter={getOnHoverFunction(3)} on:mouseleave={getOnHoverFunction(-1)}>
            <img src={jamsImage.src} alt="Jam" class="min-h-44 max-w-40 mx-auto object-contain"/>
            <h2 class="text-3xl">Code Jams</h2>
            <p class="text-neutral-300">Collaborative coding workshops where sparks ignite, fears dissolve, and
                inventions come to life.</p>
        </div>
        <div class="flex-1 duration-500 hover:scale-110"
             class:blur={currentHoveredActivity !== -1 && currentHoveredActivity !== 4}
             on:mouseenter={getOnHoverFunction(4)} on:mouseleave={getOnHoverFunction(-1)}>
            <img src={sprigImage.src} alt="Sprig" class="min-h-44 max-w-40 mx-auto object-contain"/>
            <h2 class="text-3xl">Sprig</h2>
            <p class="text-neutral-300">
                Design a video game and receive a
                <span class="text-accent font-bold">free</span>
                handheld, DIY gaming console
            </p>
        </div>
    </div>
</div>

<style>
    .blur {
        filter: blur(2px) brightness(0.5) grayscale(1);
        transition: 0.5s;
    }
</style>