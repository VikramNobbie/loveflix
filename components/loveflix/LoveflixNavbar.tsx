'use client';

import { loveflixConfig } from '@/config/loveflix';
import { useCallback, useEffect, useState } from 'react';

const NAV_LINKS = ['Home', 'TV Shows', 'Movies', 'New & Popular'] as const;

export default function LoveflixNavbar() {
  const [hasScrolled, setHasScrolled] = useState(false);

  const onScroll = useCallback(() => {
    const scrollTop = document.scrollingElement?.scrollTop ?? 0;
    setHasScrolled(scrollTop > 20);
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <nav
      className={`fixed z-30 w-full transition-colors duration-500 ${
        hasScrolled ? 'bg-neutral-950/95 shadow-lg' : 'bg-gradient-to-b from-neutral-950/80 to-transparent'
      }`}
    >
      <div className="container flex items-center justify-between py-4">
        <span className="font-netflix text-3xl font-bold tracking-tight text-netflix-red sm:text-4xl">LOVEFLIX</span>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <button type="button" className="text-sm text-neutral-300 transition-colors hover:text-white">
                {link}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex h-8 w-8 items-center justify-center rounded bg-netflix-red text-sm font-bold">
          {loveflixConfig.herName.charAt(0) || '♥'}
        </div>
      </div>
    </nav>
  );
}
