import { defineConfig } from 'astro/config';

export default defineConfig({
  outDir: '/tmp/kotauth-dist',
  cacheDir: '/tmp/kotauth-astro-cache',
  vite: {
    cacheDir: '/tmp/vite-kotauth-cache',
  },
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
