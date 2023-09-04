import { component$, Slot } from "@builder.io/qwik";
import { useContent, useDocumentHead } from "@builder.io/qwik-city";
import { TableOfContent } from "~/components/toc/TableOfContent";

// TODO: Make into an <article>, and find ways to enhance SEO 

export default component$(() => {

  const { title } = useDocumentHead();
  const { headings } = useContent();

  return (
    <div class='relative w-full max-w-6xl mx-auto mt-32 flex space-x-32'>
      <aside class=''>
        <TableOfContent headings={headings!} title={title} />
      </aside>
      <div class='w-full prose prose-headings:font-medium prose-h1:border-b-2 prose-h1:pb-6 prose-slate text-xl leading-loose'>
        <Slot />
      </div>
    </div>
  );
});
