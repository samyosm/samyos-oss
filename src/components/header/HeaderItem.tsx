import cn from 'clsx'
import { component$ } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";

export interface HeaderItemProps {
  label: string,
  href: string,
}

export const HeaderItem = component$((props: HeaderItemProps) => {
  const location = useLocation();
  const active = location.url.pathname.startsWith(props.href + '/');
  return (
    <Link
      href={props.href}
      class={cn(
        'hover:text-neutral-800 hover:underline underline-offset-8 font-medium',
        active && 'underline text-neutral-800'
      )
      }
    >
      {props.label}
    </Link >
  );
})


