import Link from 'next/link';

export interface IHeaderItem {
  label: string;
  href: string;
}

export interface HeaderItemProps {
  item: IHeaderItem;
}

export const HeaderItem = ({ item }: HeaderItemProps) => {
  return (
    <li>
      <Link
        href={item.href}
        className={'hover:text-slate-900 hover:underline underline-offset-8'}
      >
        {item.label}
      </Link>
    </li>
  );
};
