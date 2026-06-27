import { defineConfig } from 'astro/config';

// Static output goes to ./dist (Railpack / nginx / any static host serves that).
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
