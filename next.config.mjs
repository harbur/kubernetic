import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

// NEXT_OUTPUT=export builds plain HTML for static hosting (Netlify). Redirects
// and headers need the Next.js server, so the static host defines its own
// redirects in netlify.toml.
const isExport = process.env.NEXT_OUTPUT === 'export';

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: isExport ? 'export' : 'standalone',
  images: { unoptimized: isExport },
  experimental: {
    // TypeScript 7 (native/Go port) doesn't expose the compiler API Next.js's
    // built-in type checker relies on; this switches to invoking the `tsc` CLI instead.
    useTypeScriptCli: true,
  },
  // URLs from the VuePress site stay reachable: it served every page as
  // /page.html, and "Generic" features lived under crosssections-features.
  redirects: isExport ? undefined : async () => [
    { source: '/index.html', destination: '/', permanent: true },
    { source: '/:dir(.*)/index.html', destination: '/:dir', permanent: true },
    { source: '/features/crosssections-features/:page(.*)\\.html', destination: '/features/general/:page', permanent: true },
    { source: '/features/crosssections-features/:page*', destination: '/features/general/:page*', permanent: true },
    { source: '/:page(.*)\\.html', destination: '/:page', permanent: true },
  ],
  headers: isExport ? undefined : async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default withMDX(config);
