const isGithubPages = process.env.GITHUB_PAGES === 'true';
const basePath = isGithubPages ? '/loveflix' : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // GitHub Pages serves this repo at /loveflix — prefix all assets accordingly.
  // Local `npm run dev` keeps paths at / so localhost still works.
  basePath,
  assetPrefix: isGithubPages ? '/loveflix/' : undefined,
  trailingSlash: true,
  env: {
    // next/image with unoptimized does not always apply basePath — use this in config.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
        pathname: '/t/p/**',
      },
    ],
  },
};

module.exports = nextConfig;
