'use client';

import Image from 'next/image';
import { loveflixConfig } from '@/config/loveflix';

type ProfileScreenProps = {
  onSelectProfile: () => void;
};

function ProfileCard({
  name,
  avatar,
  emoji,
  onClick,
  highlight = false,
}: {
  name: string;
  avatar: string;
  emoji: string;
  onClick?: () => void;
  highlight?: boolean;
}) {
  const Wrapper = onClick ? 'button' : 'div';

  return (
    <Wrapper
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      className={`group flex flex-col items-center gap-3 transition-transform duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-netflix-red ${
        onClick ? 'cursor-pointer hover:scale-110' : 'cursor-default opacity-80'
      }`}
    >
      <div
        className={`relative h-28 w-28 overflow-hidden rounded-md border-4 transition-all duration-300 sm:h-36 sm:w-36 ${
          highlight ? 'border-transparent group-hover:border-white' : 'border-transparent group-hover:border-white/60'
        }`}
      >
        <Image src={avatar} alt={name} fill className="object-cover" sizes="144px" priority />
        <span className="absolute bottom-1 right-1 text-2xl drop-shadow-lg">{emoji}</span>
      </div>
      <span className="text-lg text-neutral-300 transition-colors group-hover:text-white sm:text-xl">{name}</span>
    </Wrapper>
  );
}

export default function ProfileScreen({ onSelectProfile }: ProfileScreenProps) {
  const { her, you } = loveflixConfig.profiles;

  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <h1 className="mb-12 text-center text-3xl font-normal tracking-wide text-white sm:text-5xl">
        Who&apos;s watching?
      </h1>

      <div className="flex flex-wrap items-start justify-center gap-10 sm:gap-16">
        <ProfileCard name={her.name} avatar={her.avatar} emoji={her.emoji} onClick={onSelectProfile} highlight />
        <ProfileCard name={you.name} avatar={you.avatar} emoji={you.emoji} />
      </div>

      <p className="mt-16 text-sm text-neutral-500">Hint: pick the cutest profile 😉</p>
    </section>
  );
}
