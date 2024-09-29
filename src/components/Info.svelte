<script>
    import Icon from "@iconify/svelte";
</script>

<div class="mt-64 flex flex-col items-center pb-32">
    <h1 class="text-5xl md:text-6xl font-bold text-center mb-20" id="info">Join Us</h1>
    <div class="flex flex-col lg:flex-row gap-32 w-[90%] lg:w-[80%] xl:w-[50%]">
        <div class="flex-1 flex flex-col lg:items-end">
            <div>
                <h2 class="text-4xl mb-12">Meeting Info</h2>
                <div class="mt-6 text-xl flex">
                    <span class="mr-6"><Icon icon="uiw:date" class="text-3xl"/> </span>
                    <p>Every Tuesday</p>
                </div>
                <div class="mt-6 text-xl flex">
                    <span class="mr-6"><Icon icon="octicon:rocket-16" class="text-3xl"/> </span>
                    <p>First meeting October 8th</p>
                </div>
                <div class="mt-6 text-xl flex">
                    <span class="mr-6"><Icon icon="zondicons:location" class="text-3xl"/> </span>
                    <p>Room 224</p>
                </div>
            </div>
        </div>
        <div class="flex-1 flex flex-col items-end">
            <div>
                <h2 class="text-4xl mb-12">Connect With Us</h2>
                <div class="mt-6 text-xl flex">
                    <a href="https://discord.gg/EdJuPgVSW2" class="gap-4 flex items-center">
                        <Icon icon="bi:discord" class="text-3xl"/>
                        <span class="ml-2">discord.gg/EdJuPgVSW2</span>
                    </a>
                </div>
                <div class="mt-6 text-xl flex">
                    <a href="https://www.instagram.com/markvilledev/" class="gap-4 flex items-center">
                        <Icon icon="fa:instagram" class="text-3xl"/>
                        <span class="ml-2">instagram.com/markvilledev/</span>
                    </a>
                </div>
                <div class="mt-6 text-xl flex">
                    <a href="https://classroom.google.com/c/NTI5NzUzMDQyNDY1?cjc=46ppeor" class="gap-4 flex items-center">
                        <Icon icon="mdi:google-classroom" class="text-3xl"/>
                        <span class="ml-2">46ppeor</span>
                    </a>
                </div>
                <div class="mt-6 text-xl flex">
                    <a href="https://forms.gle/VegvqoiWT2R7njeB9" class="gap-4 flex items-center">
                        <Icon icon="mdi:register" class="text-3xl"/>
                        <span class="ml-2">forms.gle/VegvqoiWT2R7njeB9</span>
                    </a>
                </div>
                <div class="mt-6 text-xl flex">
                    <a href="https://linktr.ee/markvilledev" class="flex gap-4 items-center">
                        <Icon icon="simple-icons:linktree" class="text-3xl"/>
                        <span class="ml-2">linktr.ee/markvilledev</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>