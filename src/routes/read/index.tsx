import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link, routeLoader$ } from "@builder.io/qwik-city";
import { Section } from "~/components/section/Section";

export const getPosts = (modules: any, type: string) => {
  const posts: {
    headings: any[];
    title: string;
    href: string;
    description: string;
  }[] = [];

  for (const path in modules) {
    modules[path]().then((mod: any) => {
      const firstParagraph =
        mod.default().children.type().children.find((t: any) => t.type == "p")
          .children;

      const headings: any[] = mod.headings;
      posts.push({
        headings,
        title: mod.head?.title || headings.find((t) => t.level == 1).text || "",
        href: type + "/" + (path.split("/").at(-2) || ""),
        description: mod.frontmatter?.description || firstParagraph,
      });
    });
  }

  return posts;
};

export const useLoader = routeLoader$(async () => {
  const articles = import.meta.glob(
    "./\\(article\\)/articles/**/*.md",
  );
  const stories = import.meta.glob(
    "./\\(article\\)/stories/**/*.md",
  );

  return [
    {
      type: "Articles",
      posts: getPosts(articles, "articles"),
    },
    {
      type: "Stories",
      posts: getPosts(stories, "stories"),
    },
  ];
});

export interface ArticleLinkProps {
  title: string;
  href: string;
  description: string;
}

export const ArticleLink = component$((props: ArticleLinkProps) => {
  return (
    <Link
      class="p-7 rounded-2xl border-4 border-neutral-200 shadow group hover:border-sky-600"
      href={props.href}
    >
      <article class="space-y-6 h-full">
        <h2 class="text-xl md:text-xl text-neutral-900 font-medium leading-relaxed group-hover:text-sky-600 line-clamp-2">
          {props.title}
        </h2>
        <p class="group-hover:text-sky-600 text-xl leading-loose line-clamp-3">
          {props.description}
        </p>
      </article>
    </Link>
  );
});

export default component$(() => {
  const data = useLoader();
  return (
    <div class="space-y-16 mx-8 md:mx-0">
      {data.value.map((type) => (
        <Section
          key={type.type}
          title={type.type}
          class="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {type.posts.map((post) => <ArticleLink key={post.href} {...post} />)}
        </Section>
      ))}
    </div>
  );
});

export const head: DocumentHead = {
  title: "Osmium OSS — Read",
};
