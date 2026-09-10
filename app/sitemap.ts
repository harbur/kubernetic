import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';
import { isPlaceholder, siteUrl } from '@/lib/seo';

export const dynamic = 'force-static';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await Promise.all(
    source.getPages().map(async (page) => ((await isPlaceholder(page)) ? [] : [page])),
  );

  return pages
    .flat()
    .map((page) => ({
      url: `${siteUrl}${page.url}`,
      lastModified: page.data.lastModified ?? new Date(),
      changeFrequency: 'weekly' as const,
      priority: page.url === '/' ? 1.0 : 0.8,
    }))
    .sort((a, b) => a.url.localeCompare(b.url));
}
