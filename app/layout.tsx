import "./globals.css";
import type {Metadata} from "next";
import {Lexend as Font} from "next/font/google";
import {Analytics} from '@vercel/analytics/react';

import {Footer} from "@/components/footer/Footer";
import {Header} from "@/components/header/Header";
import Link from "next/link";
import cn from "clsx";

const font = Font({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Osmium OSS",
  description: "We promote open source.",
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  const items = [
    {
      label: "Read",
      href: "/read",
    },
    {
      label: "Contribute",
      href: "/contribute",
    },
  ];

  return (
    <html lang="en">
    <body className={cn(font.className, 'flex flex-col')}>
    <Analytics/>
    <Header items={items}>
      <Link href="/contribute" className="button">Contribute</Link>
    </Header>
    <main className="flex-1 mt-16">
      {children}
    </main>
    <Footer/>
    </body>
    </html>
  );
}
