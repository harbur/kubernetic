import type { InferPageType } from 'fumadocs-core/source';
import type { source } from '@/lib/source';

type Page = InferPageType<typeof source>;

export const siteUrl = 'https://docs.kubernetic.com';

function prose(markdown: string) {
  return markdown
    .replace(/```[\s\S]*?```/g, '') // code blocks
    .replace(/^\s*#.*$/gm, '') // headings
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '') // images
    .replace(/<[^>]+>/g, ''); // jsx
}

// Placeholder pages ("Coming Soon...", near-empty pages) and the unfinished
// clusters tutorials are kept out of search engines and the sitemap.
export async function isPlaceholder(page: Page) {
  if (page.url.startsWith('/tutorials/clusters')) return true;
  const text = prose(await page.data.getText('processed')).trim();
  return text.split(/\s+/).filter(Boolean).length < 10 || /^coming soon/i.test(text);
}

// First real paragraph of the page, as plain text, for pages without a
// hand-written description.
export async function description(page: Page) {
  if (page.data.description) return page.data.description;
  const paragraph = prose(await page.data.getText('processed'))
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => !/^([-*]|\d+\.) /.test(p) && !/^\[[^\]]+\]: /.test(p))
    .map((p) =>
      p
        .replace(/\[([^\]]*)\](\([^)]*\)|\[[^\]]*\])?/g, '$1')
        .replace(/\\(.)/g, '$1')
        .replace(/[*_`>]/g, '')
        .replace(/\s+/g, ' ')
        .trim(),
    )
    .find((p) => p.split(' ').length >= 6);
  if (!paragraph) return undefined;
  return paragraph.length > 160
    ? paragraph.slice(0, 157).replace(/\s+\S*$/, '') + '...'
    : paragraph;
}
