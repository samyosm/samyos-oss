import cn from 'clsx';
import { IoClose as Close } from 'react-icons/io5';
import React, { useRef } from 'react';
import { HeaderItem } from './header-item';
import type { HeaderProps } from './header';

export interface HeaderMenuProps {
  open: boolean;
  setOpen: (a: boolean) => void;
  header: HeaderProps;
}

export const HeaderMenu = ({ setOpen, open, header }: HeaderMenuProps) => {
  const ref = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    document.addEventListener('mousedown', (ev) => {
      if (ref.current && !ref.current.contains(ev.target as Node)) {
        setOpen(false);
      }
    });
  }, [ref, setOpen]);

  return (
    <div
      ref={ref}
      className={cn(
        open ? 'left-0' : '-left-full',
        'transition-all w-3/4 h-screen absolute top-0 shadow-xl md:!hidden',
        'p-5 bg-white/80 backdrop-blur-lg ring-1 ring-neutral-300 ring-inset rounded-r-md flex flex-col gap-8'
      )}
    >
      <div className="flex justify-between">
        {header.logo}
        <Close onClick={() => setOpen(false)} className="text-2xl" />
      </div>
      <ol className={cn('space-y-4')}>
        {header.items.map((i) => (
          <HeaderItem key={i.label} item={i} />
        ))}
      </ol>
      <div className="mt-auto flex">{header.children}</div>
    </div>
  );
};
