import { Slot, component$ } from "@builder.io/qwik";

export interface DetailsProps {
  title: string;
}

export const Details = component$((props: DetailsProps) => {
  return (
    <details class='max-w-3xl mx-auto leading-loose text-xl group'>
      <summary class='font-medium group-open:text-sky-600 text-2xl cursor-pointer'>{props.title}</summary>
      <div class='pt-6 space-y-6'>
        <Slot />
      </div>
    </details>
  )
})
