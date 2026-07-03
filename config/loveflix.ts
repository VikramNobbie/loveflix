/**
 * Personalize your Loveflix proposal here.
 * Replace placeholder names, images, and video URL with your own content.
 */

export type MemoryCard = {
  id: string;
  title: string;
  image: string;
};

export const loveflixConfig = {
  /** Her name — shown on profile card and in the proposal */
  herName: '[Her Name]',

  /** Your name — shown on your profile card */
  yourName: '[Your Name]',

  /** Optional cute nickname for your profile */
  yourNickname: '[Cute Joke Name]',

  /** Hero billboard title */
  heroTitle: "[Your Names' Love Story]",

  /** Hero description paragraph */
  heroDescription:
    'From our first laugh to every little adventure — this is our story, told one beautiful moment at a time.',

  /** Hero background image — replace with your romantic photo */
  heroImage: '/loveflix/hero.jpg',

  /** Profile avatars */
  profiles: {
    her: {
      name: '[Her Name]',
      avatar: '/loveflix/profiles/her.jpg',
      emoji: '💕',
    },
    you: {
      name: '[Your Name]',
      avatar: '/loveflix/profiles/you.jpg',
      emoji: '😎',
    },
  },

  /** Row 1 — best memories together */
  trendingRelationships: [
    { id: 'mem-1', title: 'Our First Date', image: '/loveflix/memories/memory-1.jpg' },
    { id: 'mem-2', title: 'That Sunset', image: '/loveflix/memories/memory-2.jpg' },
    { id: 'mem-3', title: 'Road Trip', image: '/loveflix/memories/memory-3.jpg' },
    { id: 'mem-4', title: 'Coffee Mornings', image: '/loveflix/memories/memory-4.jpg' },
    { id: 'mem-5', title: 'Dancing in the Kitchen', image: '/loveflix/memories/memory-5.jpg' },
    { id: 'mem-6', title: 'Weekend Getaway', image: '/loveflix/memories/memory-6.jpg' },
  ] satisfies MemoryCard[],

  /** Row 2 — funny photos / inside jokes */
  romanticComedies: [
    { id: 'fun-1', title: 'The Burnt Toast Incident', image: '/loveflix/comedies/comedy-1.jpg' },
    { id: 'fun-2', title: 'GPS vs. Us', image: '/loveflix/comedies/comedy-2.jpg' },
    { id: 'fun-3', title: 'Matching Pajamas', image: '/loveflix/comedies/comedy-3.jpg' },
    { id: 'fun-4', title: 'The Karaoke Disaster', image: '/loveflix/comedies/comedy-4.jpg' },
    { id: 'fun-5', title: 'Pet Name Olympics', image: '/loveflix/comedies/comedy-5.jpg' },
    { id: 'fun-6', title: 'Late Night Snacks', image: '/loveflix/comedies/comedy-6.jpg' },
  ] satisfies MemoryCard[],

  /** Row 3 — the special proposal poster */
  proposalMovie: {
    id: 'the-proposal',
    title: 'The Proposal',
    image: '/loveflix/proposal-poster.jpg',
    tagline: 'A love story years in the making…',
  },

  /**
   * Proposal video — paste your YouTube embed URL or leave empty for a slideshow placeholder.
   * Example: 'https://www.youtube.com/embed/VIDEO_ID'
   */
  proposalVideoUrl: '',

  /** Proposal question (herName is inserted automatically if you use {herName}) */
  proposalQuestion: 'Will you marry me, {herName}?',
} as const;

export function getProposalQuestion(): string {
  return loveflixConfig.proposalQuestion.replace('{herName}', loveflixConfig.herName);
}
