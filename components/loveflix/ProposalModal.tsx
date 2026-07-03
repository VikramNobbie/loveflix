'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import confetti from 'canvas-confetti';
import { getProposalQuestion, loveflixConfig } from '@/config/loveflix';
import { XMarkIcon } from '@heroicons/react/24/solid';

type ProposalModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function fireConfetti() {
  const duration = 4000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 4,
      angle: 60,
      spread: 55,
      origin: { x: 0, y: 0.7 },
      colors: ['#E50914', '#ffffff', '#ff6b9d', '#ffd700'],
    });
    confetti({
      particleCount: 4,
      angle: 120,
      spread: 55,
      origin: { x: 1, y: 0.7 },
      colors: ['#E50914', '#ffffff', '#ff6b9d', '#ffd700'],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
    colors: ['#E50914', '#ffffff', '#ff6b9d', '#ffd700'],
  });

  frame();
}

/** Joke "No" button that runs away from the cursor */
function RunawayNoButton() {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [label, setLabel] = useState('No');

  const teleport = useCallback(() => {
    const btn = buttonRef.current;
    if (!btn) return;

    const maxX = window.innerWidth - btn.offsetWidth - 40;
    const maxY = window.innerHeight - btn.offsetHeight - 40;
    const x = Math.random() * maxX + 20;
    const y = Math.random() * maxY + 20;

    btn.style.position = 'fixed';
    btn.style.left = `${x}px`;
    btn.style.top = `${y}px`;
    btn.style.zIndex = '60';
    setLabel('Yes? 😏');
  }, []);

  return (
    <button
      ref={buttonRef}
      type="button"
      onMouseEnter={teleport}
      onClick={teleport}
      className="rounded border border-neutral-600 px-4 py-2 text-sm text-neutral-400 transition-colors hover:border-neutral-400"
    >
      {label}
    </button>
  );
}

export default function ProposalModal({ isOpen, onClose }: ProposalModalProps) {
  const [saidYes, setSaidYes] = useState(false);

  const handleYes = useCallback(() => {
    setSaidYes(true);
    fireConfetti();
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setSaidYes(false);
      return;
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const hasVideo = Boolean(loveflixConfig.proposalVideoUrl);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="proposal-title"
    >
      {/* Dimmed backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close proposal"
      />

      <div className="animate-fade-in-up relative z-10 w-full max-w-2xl overflow-hidden rounded-xl bg-neutral-900 shadow-2xl ring-1 ring-white/10">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 rounded-full bg-neutral-800/80 p-1.5 text-white transition-colors hover:bg-neutral-700"
          aria-label="Close"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        {/* Video or slideshow placeholder */}
        <div className="relative aspect-video w-full bg-neutral-800">
          {hasVideo ? (
            <iframe
              src={loveflixConfig.proposalVideoUrl}
              title="Our love story"
              className="h-full w-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
              <span className="text-5xl">🎬</span>
              <p className="text-sm text-neutral-400">
                Add your YouTube unlisted video URL in{' '}
                <code className="rounded bg-neutral-800 px-1.5 py-0.5 text-netflix-red">config/loveflix.ts</code>
              </p>
              <p className="text-xs text-neutral-500">Or replace this block with a photo slideshow</p>
            </div>
          )}
        </div>

        <div className="space-y-6 p-6 text-center sm:p-8">
          <h2 id="proposal-title" className="text-2xl font-bold sm:text-3xl md:text-4xl">
            {saidYes ? `She said YES! 💍✨` : getProposalQuestion()}
          </h2>

          {!saidYes ? (
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                type="button"
                onClick={handleYes}
                className="rounded bg-netflix-red px-8 py-3 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-red-600"
              >
                YES!
              </button>
              <button
                type="button"
                onClick={handleYes}
                className="rounded bg-white px-8 py-3 text-lg font-bold text-neutral-950 shadow-lg transition-all hover:scale-105 hover:bg-neutral-200"
              >
                YES, ABSOLUTELY!
              </button>
              <RunawayNoButton />
            </div>
          ) : (
            <p className="text-lg text-neutral-300">Forever starts now. I love you, {loveflixConfig.herName}! 💕</p>
          )}
        </div>
      </div>
    </div>
  );
}
