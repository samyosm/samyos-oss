import React, { useEffect, useState } from 'react';
import cn from 'clsx';
import { IoMenu as Menu } from 'react-icons/io5';
import { HeaderItem, IHeaderItem } from './header-item';
import { HeaderMenu } from './header-menu';

export interface HeaderProps {
  logo: React.ReactNode;
  items: IHeaderItem[];
  children: React.ReactNode;
}

export const Header = ({ logo, items, children }: HeaderProps) => {
  const [open, setOpen] = useState(false);
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
        'sticky top-0 bg-white/90 backdrop-blur text-lg font-medium',
        !isAtTop && 'border-b-2 border-b-slate-200'
      )}
    >
      <div className="flex justify-between p-5">
        <HeaderMenu
          open={open}
          setOpen={(b) => setOpen(b)}
          header={{ logo: logo, items, children }}
        />

        <div className="flex gap-1 items-center">
          <Menu
            onClick={() => setOpen((p) => !p)}
            className="text-2xl md:hidden"
          />
          {logo}
        </div>
        <nav className={cn('hidden md:block')}>
          <ol className={cn('flex gap-4')}>
            {items.map((i) => (
              <HeaderItem key={i.label} item={i} />
            ))}
          </ol>
        </nav>
        {children && <div>{children}</div>}
      </div>
    </header>
  );
};

export default Header;
