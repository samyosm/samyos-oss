import cn from 'clsx';

import { $, Slot, component$, useOnWindow, useSignal } from "@builder.io/qwik";
import { HeaderItem } from './HeaderItem';
import type { HeaderItemProps } from './HeaderItem';
import { Link } from '@builder.io/qwik-city';

export interface HeaderProps {
  items: HeaderItemProps[]
}

export const Header = component$(({ items }: HeaderProps) => {
  const isAtTop = useSignal(true);
  useOnWindow('scroll', $(() => {
    isAtTop.value = window.scrollY == 0;
  }));

  return (
    <header class={cn(
      'sticky z-10 top-0 p-5 bg-white/80 backdrop-blur flex justify-between text-lg transition-all',
      !isAtTop.value && 'border-b-2 border-b-slate-200'
    )}>
      <div>
        <Link href='/' class='font-medium'>Osmium OSS</Link>
      </div>
      <nav>
        <ul class='flex gap-16'>
          {items.map(item => <li key={item.label}><HeaderItem href={item.href} label={item.label} /></li>)}
        </ul>
      </nav>
      <div>
        <Slot />
      </div>
    </header>
  )
})
