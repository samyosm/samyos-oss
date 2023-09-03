import cn from 'clsx';
import { component$ } from "@builder.io/qwik";
import { Link, type ContentHeading } from "@builder.io/qwik-city";

export interface TableOfContentProps {
  headings: ContentHeading[],
  title: string
}

export interface TOCHeadingProps {
  heading: ContentHeading
}

export const TOCHeading = component$((props: TOCHeadingProps) => {
  const levelStyle: { [key: number]: string } = {
    1: 'text-neutral-900 font-medium text-xl',
    2: 'ml-2 pt-6 text-base',
    3: 'ml-4 text-base'
  }

  return (
    <Link
      href={`#${props.heading.id}`}
      class={cn(
        'block',
        levelStyle[Math.min(props.heading.level, 3)],
      )}
    >
      {props.heading.text}
    </Link>
  )
})

export const TableOfContent = component$((props: TableOfContentProps) => {
  const headings = props.headings.filter(h => h.level <= 3);
  return (
    <div class='sticky top-32 space-y-4'>
      {headings.map(h => <TOCHeading key={h.id} heading={h} />)}
    </div>
  )
})
