import { file } from 'astro/loaders';
import { defineCollection } from 'astro:content';
import { z } from 'astro:content';

const articles = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    draft: z.boolean().optional(),
  }),
});

const services = defineCollection({
  loader: file('src/data/services.json'),
  schema: z.object({
    text: z.string(),
  }),
});

export const collections = { articles, services };
