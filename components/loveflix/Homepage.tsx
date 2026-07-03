'use client';

import { loveflixConfig } from '@/config/loveflix';
import HeroBillboard from '@/components/loveflix/HeroBillboard';
import LoveflixNavbar from '@/components/loveflix/LoveflixNavbar';
import MovieRow from '@/components/loveflix/MovieRow';

type HomepageProps = {
  onPlay: () => void;
  onProposalCardClick: () => void;
};

export default function Homepage({ onPlay, onProposalCardClick }: HomepageProps) {
  const proposalCard = {
    id: loveflixConfig.proposalMovie.id,
    title: loveflixConfig.proposalMovie.title,
    image: loveflixConfig.proposalMovie.image,
  };

  return (
    <div className="min-h-screen pb-16">
      <LoveflixNavbar />
      <HeroBillboard onPlay={onPlay} />

      <div className="-mt-16 space-y-2">
        <MovieRow title="Trending Relationships" cards={loveflixConfig.trendingRelationships} />
        <MovieRow title="Romantic Comedies" cards={loveflixConfig.romanticComedies} />
        <MovieRow
          title="The Ultimate Choice"
          cards={[proposalCard]}
          featured
          onCardClick={() => onProposalCardClick()}
        />
      </div>
    </div>
  );
}
