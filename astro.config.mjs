// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind({
        applyBaseStyles: false,
    }), icon(), react(), svelte()],
    site: "https://markville-hack-club.github.io",
});