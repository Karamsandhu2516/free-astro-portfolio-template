import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // IMPORTANT: Replace with your real site URL (Appwrite domain)
  site: 'https://karamsandhu.appwrite.network',

  // REQUIRED for Appwrite hosting
  output: 'static',

  // Optional but recommended so routes deploy correctly
  trailingSlash: 'always',

  integrations: [mdx(), sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },
});
