'use client';
import cn from 'clsx';
import { HeaderItem, HeaderItemProps } from './HeaderItem';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export interface HeaderProps {
  items: HeaderItemProps[];
  children: React.ReactNode;
}

export const Header2 = ({ items, children }: HeaderProps) => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setIsAtTop(false) : setIsAtTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [isAtTop]);

  return (
    <header
      className={cn(
        'sticky z-10 top-0 p-5 bg-white/80 backdrop-blur flex justify-between text-lg transition-all items-center',
        !isAtTop && 'border-b-2 border-b-slate-200'
      )}
    >
      <div>
        <Link href="/" className="font-medium">
          Osmium OSS
        </Link>
      </div>
      <nav className="hidden md:block">
        <ul className="flex gap-16">
          {items.map((item) => (
            <li key={item.label}>
              <HeaderItem href={item.href} label={item.label} />
            </li>
          ))}
        </ul>
      </nav>
      <div>{children}</div>
    </header>
  );
};
