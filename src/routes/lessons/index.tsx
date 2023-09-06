import { component$ } from "@builder.io/qwik";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import { Section } from "~/components/section/Section";

export const useLoader = routeLoader$(async () => {
  const modules = import.meta.glob('/src/posts/*.md', { eager: true });
  const posts = [];

  for (const path in modules) {
    const raw = modules[path] as any;
    posts.push({
      title: raw.frontmatter?.title || raw.headings.filter((t: any) => t.level === 1)[0].text as string,
      description: raw.frontmatter?.description as string | undefined,
      href: path.split('/')[3].replace('.md', ''),
    });
  }

  return posts;
});

export default component$(() => {
  const data = useLoader();
  return (
    <div class='mt-32 px-10'>
      <Section title="Latest" class="grid grid-cols-1 md:grid-cols-2 gap-12">
        {data.value.map(post => (
          <Link
            key={post.title}
            class='p-7 rounded-2xl border-4 border-neutral-200 shadow group hover:border-sky-600'
            href={post.href}
          >
            <article
              class='space-y-6'
            >
              <h2 class='text-2xl text-neutral-900 font-medium leading-relaxed group-hover:text-sky-600'>{post.title}</h2>
              <p class='group-hover:text-sky-600 text-xl leading-loose'>{post.description}</p>
            </article>
          </Link>
        ))}
      </Section>
    </div>
  )
}) 
