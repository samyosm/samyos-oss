import cn from 'clsx';
import Link from 'next/link';
import { Heading } from '../../app/types/Heading';

export interface TableOfContentProps {
  headings: Heading[];
}

export interface TOCHeadingProps {
  heading: Heading;
}

export const TOCHeading = (props: TOCHeadingProps) => {
  const levelStyle: { [key: number]: string } = {
    2: 'py-3',
    3: 'ml-4 text-sm',
  };

  return (
    <li>
      <Link
        href={`#${props.heading.slug}`}
        className={cn(
          'block hover:underline',
          levelStyle[Math.min(props.heading.level, 3)],
        )}
      >
        {props.heading.text}
      </Link>
    </li>
  );
};

export const TableOfContent = (props: TableOfContentProps) => {
  const headings = props.headings.filter((h) => h.level <= 3 && h.level != 1);
  return (
    <aside
      className="md:sticky md:top-32 w-full md:max-w-sm h-fit max-h-[36rem] overflow-y-auto rounded-lg">
      <p
        className="bg-neutral-800 text-neutral-100 text-xl font-medium p-5 sticky top-0">
        Table Of Content
      </p>
      <ol
        className="bg-neutral-500 text-white py-5 pl-5 text-base list-['→'] [&>*]:pl-2">
        {headings.map((h) => <TOCHeading key={h.slug} heading={h}/>)}
      </ol>
    </aside>
  );
};
