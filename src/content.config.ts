import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog', generateId: ({ entry }) => entry.replace(/\.md$/, '') }),
  schema: z.object({
    title: z.string(), description: z.string(), lang: z.enum(['en', 'zh']),
    slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
    published: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
    updated: z.string().regex(/^\d{4}-\d{2}-\d{2}$/).optional(),
    category: z.enum(['setup', 'detection', 'privacy', 'storage', 'workflow', 'discussion']),
    primaryKeyword: z.string(), draft: z.boolean().default(false),
  }),
});
export const collections = { blog };
