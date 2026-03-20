// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
    site: 'https://lemon-beach-056777310.6.azurestaticapps.net',
    output: 'static',
    vite: {
        plugins: [tailwindcss()],
    },
});


