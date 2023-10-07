import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';
import GithubSlugger from 'github-slugger';
import { DocumentTypes } from '@samyos/oss/contentlayer';
import { Heading } from './app/types/Heading';

const defineDocument = (name: string) => {
  return defineDocumentType(() => ({
    name,
    filePathPattern: `${name.toLowerCase()}/**/*.md`,
    fields: {
      title: { type: 'string', required: true },
      description: { type: 'string', required: true },
      datePublished: { type: 'date', required: true },
      dateModified: { type: 'date', required: true },
    },
    computedFields: {
      url: {
        type: 'string',
        resolve: (post) => `/read/${post._raw.flattenedPath}`,
      },
      headings: {
        type: 'json',
        // @ts-ignore
        resolve: headingResolve,
      },
      index: {
        type: 'boolean',
        resolve: () => true,
      },
    },
  }));
};

const headingResolve = async (doc: DocumentTypes) => {
  const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
  const slugger = new GithubSlugger();
  const headings = Array.from(doc.body.raw.matchAll(regXHeader)).map(
    ({ groups }) => {
      const flag = groups?.flag;
      const content = groups?.content;
      return {
        level: flag?.length ?? 0,
        text: content ?? '',
        slug: content ? slugger.slug(content) : '',
      } satisfies Heading;
    }
  );
  return headings;
};

export const Article = defineDocument('Article');
export const Story = defineDocument('Story');
export const Policies = defineDocument('Policies');

export const Contribute = defineDocumentType(() => ({
  name: 'Contribute',
  filePathPattern: `contribute/**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: false },
    datePublished: { type: 'date', required: true },
    dateModified: { type: 'date', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/contribute/${post._raw.sourceFileName.slice(0, -3)}`,
    },
    headings: {
      type: 'json',
      // @ts-ignore
      resolve: headingResolve,
    },
    index: {
      type: 'boolean',
      resolve: () => false,
    },
  },
}));

export const Tools = defineDocumentType(() => ({
  name: 'Tools',
  filePathPattern: `tools/**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    license: { type: 'string', required: true },
    link: { type: 'string', required: true },
    rating: { type: 'number', required: true },
    datePublished: { type: 'date', required: true },
    dateModified: { type: 'date', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/read/${post._raw.flattenedPath}`,
    },
    headings: {
      type: 'json',
      // @ts-ignore
      resolve: headingResolve,
    },
    index: {
      type: 'boolean',
      resolve: () => true,
    },
  },
}));

export default makeSource({
  disableImportAliasWarning: true,
  contentDirPath: './apps/oss/posts',
  documentTypes: [Article, Tools, Story, Policies, Contribute],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
        },
      ],
    ],
  },
});
