import { component$, Slot } from "@builder.io/qwik";
import { useContent, useDocumentHead } from "@builder.io/qwik-city";
import { Article } from "~/components/article/Article";

export default component$(() => {
  const { title } = useDocumentHead();
  const { headings } = useContent();

  return (
    <Article
      headings={headings!}
      title={title || headings?.find((t) => t.level == 1)?.text || ""}
    >
      <Slot />
    </Article>
  );
});
