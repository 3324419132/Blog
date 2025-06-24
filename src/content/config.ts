import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).optional(),
		category: z.string().optional(),
		featured: z.boolean().optional().default(false),
		draft: z.boolean().optional().default(false),
		author: z.string().optional().default('大豆橙'),
		readingTime: z.number().optional(),
	}),
});

const projectCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		tags: z.array(z.string()).optional(),
		github: z.string().optional(),
		link: z.string().optional(),
		category: z.string().optional(),
		featured: z.boolean().optional().default(false),
		inProgress: z.boolean().optional().default(false),
		technologies: z.array(z.string()).optional(),
	}),
});

export const collections = {
	'blog': blogCollection,
	'projects': projectCollection,
}; 