import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Section } from "~/components/section/Section";

export const useBlogPost = routeLoader$(async () => {
  const data = await import('/src/_posts/hello.md');

  // @ts-ignore
  return JSON.stringify(data.default().props.children.type().children);
});

export default component$(() => {
  const data = useBlogPost();
  return (
    <div class='mt-32'>
      <Section title="Latest" class="prose">
        {(JSON.parse(data.value) as any[]).map(item => item)}
      </Section>
    </div>
  )
}) 
