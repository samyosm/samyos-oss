import { Slot, component$ } from "@builder.io/qwik";

export interface PedestalProps {
  title: string,
  emoji: string,
}

export const Pedestal = component$((props: PedestalProps) => {
  return (
    <div class='flex gap-6'>
      <p aria-hidden="true" class='text-2xl bg-primary-100 w-20 h-20 rounded-2xl flex justify-center items-center'>{props.emoji}</p>
      <div class='space-y-3 flex-1'>
        <h3 class='text-neutral-900 text-xl font-medium'>{props.title}</h3>
        <p><Slot /></p>
      </div>
    </div>


  )
})
