import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {

  return (
    <div class='w-full max-w-4xl prose prose-headings:font-medium prose-h1:border-b-2 prose-h1:pb-6 prose-slate mx-auto mt-32 text-xl leading-loose'>
      <Slot />
    </div>
  );
});
