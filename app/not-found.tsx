import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="[grid-area:main] flex flex-col items-center justify-center px-6 text-center">
      <p className="text-7xl font-bold mb-4">404</p>
      <h1 className="text-3xl font-bold mb-4">Page not found</h1>
      <p className="text-fd-muted-foreground mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-lg border border-fd-border font-semibold hover:bg-fd-accent transition-colors"
      >
        Back to home
      </Link>
    </main>
  );
}
