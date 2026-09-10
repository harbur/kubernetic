import { source } from '@/lib/source';
import { createFromSource } from 'fumadocs-core/search/server';

// Static index, searched in the browser: works both behind the Next.js server
// and on a static export.
export const revalidate = false;

export const { staticGET: GET } = createFromSource(source, {
  // https://docs.orama.com/docs/orama-js/supported-languages
  language: 'english',
});
