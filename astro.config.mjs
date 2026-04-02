import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://rachelgriffard.vercel.app',
  integrations: [mdx()],
});
