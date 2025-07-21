import { defineConfig } from 'astro/config';
import icons from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [
    icons(),    // ←astro-icon用
  ],
});
