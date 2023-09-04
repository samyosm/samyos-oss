import { Slot, component$ } from "@builder.io/qwik";

export interface SectionProps {
  class?: string;
  titleClass?: string;
  title: string;
}

export const Section = component$((props: SectionProps) => {
  return (

    <div class='space-y-16 max-w-6xl mx-auto'>
      <h2 class={'font-medium text-4xl text-neutral-900 ' + props.titleClass}>{props.title}</h2>
      <div class={props.class}>
        <Slot />
      </div>
    </div>
  )
})
