// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://nice-sea-03641a110.2.azurestaticapps.net',
    output: 'static',
    vite: {
        plugins: [tailwindcss()],
    },
});


