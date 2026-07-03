import React from 'react';
import '@/app/globals.css';

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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full overflow-x-hidden bg-neutral-950 font-sans text-neutral-50 antialiased">
        <main>{children}</main>
      </body>
    </html>
  );
}
