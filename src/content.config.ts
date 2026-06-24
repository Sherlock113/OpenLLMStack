import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const models = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/models' }),
  schema: z.object({
    name: z.string(),
    org: z.string(),
    logo: z.string(),
    params: z.string(),
    license: z.string(),
    releaseDate: z.string(),
    description: z.string(),
    url: z.string(),
    tags: z.array(z.string()),
    family: z.string().optional(),
    architecture: z.enum(['MoE', 'Dense']).optional(),
    activeParams: z.string().optional(),
    contextLength: z.string().optional(),
    modality: z.string().optional(),
    modalityNote: z.string().optional(),
    attentionArchitecture: z.string().optional(),
    precisions: z.array(z.string()).optional(),
    deployment: z.array(z.string()).optional(),
    useCase: z.string().optional(),
    huggingfacePath: z.string().optional(),
    intro: z.string().optional(),
    vllmRecipe: z.string().optional(),
    sglangCookbook: z.string().optional(),
    releaseBlog: z.string().optional(),
    github: z.string().optional(),
    paper: z.string().optional(),
    blogPosts: z.array(z.object({ title: z.string(), url: z.string() })).optional(),
  }),
});

const inference = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/inference' }),
  schema: z.object({
    name: z.string(),
    org: z.string(),
    description: z.string(),
    url: z.string(),
    github: z.string(),
    stars: z.string(),
    tags: z.array(z.string()),
  }),
});

const optimizations = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/optimizations' }),
  schema: z.object({
    name: z.string(),
    category: z.string(),
    description: z.string(),
    url: z.string(),
    tags: z.array(z.string()),
  }),
});

const agents = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/agents' }),
  schema: z.object({
    name: z.string(),
    org: z.string(),
    description: z.string(),
    url: z.string(),
    github: z.string(),
    stars: z.string(),
    tags: z.array(z.string()),
  }),
});

const papers = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/papers' }),
  schema: z.object({
    title: z.string(),
    authors: z.string(),
    date: z.string(),
    arxivUrl: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
  }),
});

const timeline = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/timeline' }),
  schema: z.object({
    date: z.string(),
    title: z.string(),
    category: z.enum(['models', 'inference', 'optimizations', 'agents', 'papers']),
    description: z.string(),
    url: z.string().optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    author: z.string().default('Sherlock Xu'),
    authorUrl: z.string().default('https://github.com/Sherlock113'),
    authorImage: z.string().default('https://github.com/Sherlock113.png'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { models, inference, optimizations, agents, papers, timeline, blog };
