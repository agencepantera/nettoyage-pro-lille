import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  build: {
    inlineStylesheets: 'auto'
  },
  compressHTML: true,
  site: 'https://nettoyage-pro-lille.fr',
});