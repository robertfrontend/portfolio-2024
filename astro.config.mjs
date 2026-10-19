import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.robertfrontend.com',
  integrations: [
    tailwind(),
    sitemap({
      serialize(item) {
        const url = new URL(item.url);
        if (url.pathname.length > 1 && url.pathname.endsWith("/")) {
          url.pathname = url.pathname.replace(/\/+$/, "");
        }
        return { ...item, url: url.href };
      },
    }),
  ]
});
