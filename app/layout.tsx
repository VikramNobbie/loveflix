import React from 'react';
import { Bebas_Neue, Inter } from 'next/font/google';
import '@/app/globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const bebasNeue = Bebas_Neue({
  variable: '--font-netflix',
  weight: '400',
  subsets: ['latin'],
});

export const metadata = {
  title: 'LOVEFLIX',
  description: 'A personalized Netflix experience — made with love.',
  robots: {
    index: false,
    follow: false,
  },
  colorScheme: 'dark',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="min-h-full overflow-x-hidden bg-neutral-950 font-sans text-neutral-50 antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
