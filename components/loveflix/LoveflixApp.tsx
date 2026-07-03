'use client';

import { useCallback, useState } from 'react';
import Homepage from '@/components/loveflix/Homepage';
import ProfileScreen from '@/components/loveflix/ProfileScreen';
import ProposalModal from '@/components/loveflix/ProposalModal';

type AppView = 'profiles' | 'home';

/**
 * Root client component — manages the three main states:
 * 1. Profile selection ("Who's watching?")
 * 2. Loveflix homepage
 * 3. Proposal modal (overlay)
 */
export default function LoveflixApp() {
  const [view, setView] = useState<AppView>('profiles');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isProposalOpen, setIsProposalOpen] = useState(false);

  const openProposal = useCallback(() => setIsProposalOpen(true), []);
  const closeProposal = useCallback(() => setIsProposalOpen(false), []);

  const selectHerProfile = useCallback(() => {
    setIsTransitioning(true);
    window.setTimeout(() => {
      setView('home');
      setIsTransitioning(false);
    }, 600);
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-950 text-white">
      {/* Profile screen */}
      <div
        className={`transition-opacity duration-500 ${
          view === 'profiles' ? 'opacity-100' : 'pointer-events-none absolute inset-0 opacity-0'
        } ${isTransitioning ? 'opacity-0' : ''}`}
        aria-hidden={view !== 'profiles'}
      >
        <ProfileScreen onSelectProfile={selectHerProfile} />
      </div>

      {/* Homepage */}
      <div
        className={`transition-opacity duration-700 ${
          view === 'home' ? 'opacity-100' : 'pointer-events-none absolute inset-0 opacity-0'
        }`}
        aria-hidden={view !== 'home'}
      >
        <Homepage onPlay={openProposal} onProposalCardClick={openProposal} />
      </div>

      {/* Proposal modal overlay */}
      <ProposalModal isOpen={isProposalOpen} onClose={closeProposal} />
    </div>
  );
}
