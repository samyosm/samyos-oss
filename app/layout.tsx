import "./globals.css";
import type { Metadata } from "next";
import { Lexend as Font } from "next/font/google";

import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";
import Link from "next/link";

const font = Font({ subsets: ["latin"] });

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
    // {
    //   label: 'History',
    //   href: '/history',
    // },
    //
    {
      label: "Read",
      href: "/read",
    },
    {
      label: "Contribute",
      href: "/contribute",
    },
    // {
    //   label: 'Software',
    //   href: '/software',
    // },
  ];

  return (
    <html lang="en">
      <body className={font.className}>
        <Header items={items}>
          <Link href="/contribute" className="button">Contribute</Link>
        </Header>
        <main className="h-full mt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
