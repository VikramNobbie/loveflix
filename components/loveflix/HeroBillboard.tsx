'use client';

import Image from 'next/image';
import { loveflixConfig } from '@/config/loveflix';
import { InformationCircleIcon, PlayIcon } from '@heroicons/react/24/solid';

type HeroBillboardProps = {
  onPlay: () => void;
};

export default function HeroBillboard({ onPlay }: HeroBillboardProps) {
  return (
    <section className="relative flex h-[70vh] min-h-[480px] w-full flex-col justify-end pb-24 md:h-[85vh] md:justify-center md:pb-0">
      {/* Background image with Netflix-style gradients */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={loveflixConfig.heroImage}
          alt={loveflixConfig.heroTitle}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />
      </div>

      <div className="container flex flex-col items-center gap-6 text-center md:items-start md:text-left">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight drop-shadow-lg sm:text-5xl md:text-6xl">
          {loveflixConfig.heroTitle}
        </h1>

        <p className="max-w-lg text-sm leading-relaxed text-neutral-200 sm:text-base md:text-lg">
          {loveflixConfig.heroDescription}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
          <button
            type="button"
            onClick={onPlay}
            className="flex items-center gap-2 rounded bg-white px-6 py-2.5 text-base font-bold text-neutral-950 shadow-lg transition-all hover:scale-105 hover:bg-neutral-200"
          >
            <PlayIcon className="h-5 w-5" />
            Play
          </button>

          <button
            type="button"
            className="flex items-center gap-2 rounded bg-neutral-500/60 px-6 py-2.5 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-neutral-500/80"
          >
            <InformationCircleIcon className="h-5 w-5" />
            More Info
          </button>
        </div>
      </div>
    </section>
  );
}
