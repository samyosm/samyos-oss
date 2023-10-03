// contentlayer.config.ts
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import remarkGfm from "remark-gfm";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import GithubSlugger from "github-slugger";
import { DocumentTypes } from "contentlayer/generated";
import { Heading } from "./app/types/Heading";

const defineDocument = (name: string) => {
  return defineDocumentType(() => ({
    name,
    filePathPattern: `${name.toLowerCase()}/**/*.md`,
    fields: {
      title: { type: "string", required: true },
      description: { type: "string", required: true },
    },
    computedFields: {
      url: {
        type: "string",
        resolve: (post) => `/read/${post._raw.flattenedPath}`,
      },
      headings: {
        type: "json",
        // @ts-ignore
        resolve: headingResolve,
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
        level: flag?.length || 0,
        text: content || "",
        slug: content ? slugger.slug(content) : "",
      } satisfies Heading;
    },
  );
  return headings;
};

export const Article = defineDocument("Article");
export const Story = defineDocument("Story");
export const Policies = defineDocument("Policies");

export default makeSource({
  contentDirPath: "posts",
  documentTypes: [Article, Story, Policies],
  markdown: {
    remarkPlugins: [
      remarkGfm,
    ],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
        },
      ],
    ],
  },
});
