import { defineConfig } from 'astro/config';
import icons from 'astro-icon';

export default defineConfig({
  site: 'https://Meg624.github.io/my-blog/',
  base: '/my-blog/', 
  output: 'static', // ← GitHub Pages 用のベースパスを追加
  integrations: [
    icons(),
  ],
});
