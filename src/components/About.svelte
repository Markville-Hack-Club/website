<script>
    import Icon from '@iconify/svelte';
    import whatImage from "../assets/images/what.jpg"
    import aboutImage from "../assets/images/about.png";
</script>

<div class="relative items-center text-center justify-center">
    <div class="mt-56 mb-48 flex gap-4 justify-center items-center">
        <hr class="w-1/6 border-gray-400"/>
        <Icon icon="ph:code" class="text-4xl text-gray-400"/>
        <hr class="w-1/6 border-gray-400"/>
    </div>
    <h1 class="text-6xl font-bold">About Us</h1>
    <div class="flex flex-col xl:flex-row items-center justify-center gap-8 xl:gap-12 mt-12 xl:mt-20">
        <p class="text-lg xl:text-2xl w-[90%] md:w-[60%] xl:w-[30%] text-center xl:text-left leading-7 xl:leading-10 text-neutral-200">We are Markville Secondary School’s Hack/Dev Club, the ultimate club for hackathon enthusiasts & developers! Originally known as the Web/App Development Club, in 2024 we became a Hack Club chapter to level up our club resources. We host fun and engaging activities and workshops every Tuesday after school in room 224.</p>
        <img src={aboutImage.src} alt="placeholder" class="w-[90%] md:w-[60%] xl:w-[30%]"/>
    </div>
    <div class="flex flex-col-reverse xl:flex-row items-center justify-center gap-8 xl:gap-12 mt-24 xl:mt-32">
        <img src={whatImage.src} alt="placeholder" class="w-[90%] md:w-[60%] xl:w-[30%]"/>
        <div class="w-[90%] md:w-[60%] xl:w-[30%]">
            <h2 class="text-4xl font-bold xl:text-left mb-8">
                What is Hack Club?
            </h2>
            <p class="text-lg xl:text-2xl text-center xl:text-left xl:leading-10 text-neutral-200">Hack Club is a nonprofit organization that helps high school students learn coding and build projects through hands-on activities. It supports student-led Hack Club chapters around the world, where students can work together, code, and improve their skills. Each chapter is run by students, while Hack Club provides resources like coding workshops, project ideas, and funding.</p>
        </div>
    </div>
</div>
