import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://stoaconsultancy.com',
  output: 'static',
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'tr'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  build: {
    format: 'directory',
  },
});
