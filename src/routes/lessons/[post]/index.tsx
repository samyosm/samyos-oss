import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { TableOfContent } from "~/components/toc/TableOfContent";

export const useLoader = routeLoader$(async (request) => {
  const modules = import.meta.glob('/src/posts/*.md', { eager: true });
  const raw = await modules['/src/posts/' + request.params.post + '.md'] as any;

  const children = raw.default().children.type().children;

  return {
    children,
    headings: raw.headings,
    frontmatter: raw.frontmatter,
  };
});

export default component$(() => {
  const data = useLoader();
  return (
    <div class='relative w-full max-w-6xl mx-auto mt-32 flex space-x-32'>
      <aside class=''>
        <TableOfContent headings={data.value.headings!} title={data.value.frontmatter?.title || data.value.headings.filter((t: any) => t.level === 1)[0].text} />
      </aside>
      <div class='w-full prose prose-headings:font-medium prose-h1:border-b-2 prose-h1:pb-6 prose-slate text-xl leading-loose'>
        {data.value.children.map((t: any) => <>{t}</>)}
      </div>
    </div>
  )
});

