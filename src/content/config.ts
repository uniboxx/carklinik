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

export const collections = { articles };
