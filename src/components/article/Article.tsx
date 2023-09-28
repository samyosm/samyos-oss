import { component$, Slot } from "@builder.io/qwik";
import type { ContentHeading } from "@builder.io/qwik-city";
import { TableOfContent } from "../toc/TableOfContent";

export interface ArticleProps {
  title: string;
  headings: ContentHeading[];
}

// TODO: Make into an <article>, and find ways to enhance SEO

export const Article = component$((props: ArticleProps) => {
  return (
    <div class="relative w-full md:max-w-6xl md:mx-auto flex md:space-x-32 mt-0">
      <aside class="sticky space-y-4 h-screen overflow-auto top-16 hidden md:block">
        <TableOfContent headings={props.headings} />
      </aside>
      <article class="w-full mx-8 md:mx-0 prose prose-headings:font-medium prose-h1:border-b-2 prose-h1:pb-6 prose-slate text-xl leading-loose">
        <Slot />
      </article>
    </div>
  );
});
