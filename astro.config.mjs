import { defineConfig } from 'astro/config';
import icons from 'astro-icon';

export default defineConfig({
  base: '/my-blog/', // ← GitHub Pages 用のベースパスを追加
  integrations: [
    icons(),
  ],
});
