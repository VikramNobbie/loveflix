/**
 * Personalize your Loveflix proposal here.
 * Replace placeholder names, images, and video URL with your own content.
 */

/** Prefix public assets for GitHub Pages (/loveflix) vs local (/). */
function asset(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  return `${base}${path}`;
}

export type MemoryCard = {
  id: string;
  title: string;
  image: string;
};

export const loveflixConfig = {
  herName: 'Kav',
  yourName: 'Vikram',
  yourNickname: 'Vikram',

  heroTitle: "Vikram & Kav's Love Story",

  heroDescription:
    'From our first laugh to every little adventure — this is our story, told one beautiful moment at a time.',

  heroImage: asset('/hero.jpg'),

  profiles: {
    her: {
      name: 'Kav',
      avatar: asset('/profiles/her.jpg'),
      emoji: '💕',
    },
    you: {
      name: 'Vikram',
      avatar: asset('/profiles/you.jpg'),
      emoji: '😎',
    },
  },

  trendingRelationships: [
    { id: 'mem-1', title: 'Us', image: asset('/memories/memory-1.jpg') },
    { id: 'mem-2', title: 'Together', image: asset('/memories/memory-2.jpg') },
    { id: 'mem-3', title: 'Adventures', image: asset('/memories/memory-3.jpg') },
    { id: 'mem-4', title: 'Moments', image: asset('/memories/memory-4.jpg') },
    { id: 'mem-5', title: 'Memories', image: asset('/memories/memory-5.jpg') },
  ] satisfies MemoryCard[],

  romanticComedies: [
    { id: 'fun-1', title: 'Inside Joke #1', image: asset('/comedies/comedy-1.jpg') },
    { id: 'fun-2', title: 'Inside Joke #2', image: asset('/comedies/comedy-2.jpg') },
  ] satisfies MemoryCard[],

  proposalMovie: {
    id: 'the-proposal',
    title: 'The Proposal',
    image: asset('/proposal-poster.jpg'),
    tagline: 'A love story years in the making…',
  },

  /** Google Drive preview embed (video is too large for GitHub — hosted on Drive) */
  proposalVideoUrl: 'https://drive.google.com/file/d/1Z3rqwOVnolb848XrLavntzvzfmtQ-f5u/preview',

  proposalQuestion: 'Will you marry me, {herName}?',
} as const;

export function getProposalQuestion(): string {
  return loveflixConfig.proposalQuestion.replace('{herName}', loveflixConfig.herName);
}

export function isLocalVideo(url: string): boolean {
  return url.startsWith('/');
}

export function isEmbedVideo(url: string): boolean {
  return url.includes('youtube.com') || url.includes('youtu.be') || url.includes('drive.google.com');
}
