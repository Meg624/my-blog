
//@ts-ignore
import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};


import { defineConfig } from 'astro/config';
import astroIcon from 'astro-icon';

export default defineConfig({
  integrations: [astroIcon()],
});
