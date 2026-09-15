import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  output: 'export',
  images: { unoptimized: true },
  experimental: {
    // TypeScript 7 (native/Go port) doesn't expose the compiler API Next.js's
    // built-in type checker relies on; this switches to invoking the `tsc` CLI instead.
    useTypeScriptCli: true,
  },
  // A static export has no server, so redirects and headers live in
  // public/_redirects instead (Cloudflare Workers static assets reads it).
};

export default withMDX(config);
