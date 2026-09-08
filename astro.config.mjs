import { defineConfig } from 'astro/config';

// Static output goes to ./dist, served by Cloudflare Workers static assets.
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'pt-br'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  server: {
    host: true,
    port: 4321,
  },
});
