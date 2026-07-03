# LOVEFLIX 💕

A personalized Netflix-style wedding proposal web app — built with **Next.js**, **React**, and **Tailwind CSS**.

Forked from [miaouflix](https://github.com/Gregory-Gerard/miaouflix) and transformed into a romantic, interactive experience for your special someone.

**Live demo structure:** Profile picker → Loveflix homepage → Proposal modal with confetti 🎉

---

## Features

- **"Who's watching?"** profile screen with hover animations
- **LOVEFLIX homepage** with Netflix-dark theme, red accents, and horizontal scrolling rows
- **Hero billboard** with Play / More Info buttons
- **Three content rows:**
  - Trending Relationships (your best memories)
  - Romantic Comedies (funny photos / inside jokes)
  - The Ultimate Choice (single "The Proposal" poster)
- **Proposal modal** triggered by Play or The Proposal card
- **Confetti celebration** on "YES!" (canvas-confetti)
- **Runaway "No" button** that teleports away on hover 😄
- Fully responsive (mobile + desktop)

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Personalize It

Edit **`config/loveflix.ts`** — this is the only file you need to customize:

| Setting | What to change |
|---------|----------------|
| `herName` | Her name |
| `yourName` | Your name |
| `heroTitle` | Billboard title |
| `heroDescription` | Romantic description |
| `proposalVideoUrl` | YouTube embed URL (e.g. `https://www.youtube.com/embed/VIDEO_ID`) |
| `proposalQuestion` | The big question |

### Replace photos

Drop your images into `public/loveflix/`:

```
public/loveflix/
├── hero.jpg                 # Hero banner (1920×1080 recommended)
├── proposal-poster.jpg      # "The Proposal" movie poster
├── profiles/
│   ├── her.jpg
│   └── you.jpg
├── memories/
│   ├── memory-1.jpg … memory-6.jpg
└── comedies/
    ├── comedy-1.jpg … comedy-6.jpg
```

Update titles in `config/loveflix.ts` to match your photos.

---

## Deploy to GitHub Pages / Vercel

### Vercel (recommended)

1. Push this repo to [github.com/VikramNobbie](https://github.com/VikramNobbie)
2. Import the repo at [vercel.com](https://vercel.com)
3. Deploy — no extra config needed

### GitHub Pages

Add to `next.config.js`:

```js
output: 'export',
images: { unoptimized: true },
```

Then: `npm run build` → deploy the `out/` folder.

---

## Project Structure

```
config/
  loveflix.ts              # ← Personalization config
components/loveflix/
  LoveflixApp.tsx          # Main state machine (profiles → home → modal)
  ProfileScreen.tsx        # "Who's watching?"
  Homepage.tsx             # Navbar + hero + rows
  LoveflixNavbar.tsx
  HeroBillboard.tsx
  MovieRow.tsx
  ProposalModal.tsx        # Proposal + confetti
app/
  page.tsx                 # Entry point
  layout.tsx
  globals.css
public/loveflix/           # Your photos go here
```

---

## Tech Stack

- [Next.js 13](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [canvas-confetti](https://github.com/catdad/canvas-confetti)
- [Heroicons](https://heroicons.com/)

---

## Credits

Original Netflix clone inspiration: [Gregory-Gerard/miaouflix](https://github.com/Gregory-Gerard/miaouflix)

Made with love by [VikramNobbie](https://github.com/VikramNobbie) 💍
