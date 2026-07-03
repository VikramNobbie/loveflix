'use client';

import Image from 'next/image';
import type { MemoryCard } from '@/config/loveflix';

type MovieRowProps = {
  title: string;
  cards: MemoryCard[];
  onCardClick?: (card: MemoryCard) => void;
  /** Single special card — larger hover, triggers proposal */
  featured?: boolean;
};

export default function MovieRow({ title, cards, onCardClick, featured = false }: MovieRowProps) {
  return (
    <section className="mb-8">
      <h2 className="mb-3 px-4 text-lg font-bold tracking-wide sm:px-8 sm:text-xl">{title}</h2>

      <div className="loveflix-row -mx-2 flex gap-3 overflow-x-auto px-4 pb-4 sm:px-8">
        {cards.map((card) => (
          <button
            key={card.id}
            type="button"
            onClick={() => onCardClick?.(card)}
            className={`group relative shrink-0 overflow-hidden rounded-md shadow-lg transition-transform duration-300 ease-out hover:z-10 hover:scale-110 ${
              featured ? 'h-56 w-40 sm:h-72 sm:w-48' : 'h-44 w-28 sm:h-52 sm:w-36'
            }`}
          >
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover"
              sizes={featured ? '192px' : '144px'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <span className="absolute bottom-2 left-2 right-2 text-left text-xs font-semibold text-white opacity-0 transition-opacity group-hover:opacity-100 sm:text-sm">
              {card.title}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}
