import { RootProvider } from 'fumadocs-ui/provider/next';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { source } from '@/lib/source';
import { baseOptions } from '@/lib/layout.shared';
import { PlausibleProvider } from '@/lib/plausible';
import { siteUrl } from '@/lib/seo';
import { StructuredData } from './layout-client';
import './global.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Kubernetic Documentation',
    template: '%s | Kubernetic Docs',
  },
  description:
    'Kubernetic is a desktop and in-cluster UI for Kubernetes: manage multiple clusters, Helm charts, logs, port forwarding and terminals from one place.',
  keywords: ['Kubernetic', 'Kubernetes', 'Kubernetes UI', 'Helm', 'Documentation'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    siteName: 'Kubernetic Documentation',
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body className="flex flex-col min-h-screen">
        <PlausibleProvider>
          <RootProvider>
            <DocsLayout tree={source.pageTree} {...baseOptions()}>
              {children}
            </DocsLayout>
          </RootProvider>
        </PlausibleProvider>
      </body>
    </html>
  );
}
