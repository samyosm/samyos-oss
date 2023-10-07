import './globals.scss';
import type { Metadata } from 'next';
import { Lexend as font } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

import Link from 'next/link';
import cn from 'clsx';
import React from 'react';
import { Footer } from '../components/footer/Footer';
import { Header } from '@samyos/shared/ui';

const myFont = font({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Osmium OSS',
  description: 'We promote open source.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const items = [
    {
      label: 'Read',
      href: '/read',
    },
    {
      label: 'Contribute',
      href: '/contribute',
    },
  ];

  return (
    <html lang="en">
      <body
        className={cn(myFont.className, 'flex flex-col overflow-auto h-max')}
      >
        <Analytics />
        <Header
          logo={
            <Link href="/" className="">
              Osmium OSS
            </Link>
          }
          items={items}
        >
          <Link href="/contribute" className="button mx-auto md:mx-0">
            Contribute
          </Link>
        </Header>
        <main className="flex-1 mt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
