'use client';

import { useEffect } from 'react';

// init() throws if called twice. React Strict Mode runs effects twice and Fast
// Refresh re-evaluates this module (but not the tracker's) in development, so
// the guard lives on window rather than in a module variable.
declare global {
  interface Window {
    __plausibleInitialized?: boolean;
  }
}

export function PlausibleProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (window.__plausibleInitialized) return;
    window.__plausibleInitialized = true;
    import('@plausible-analytics/tracker').then(({ init }) => {
      init({
        domain: 'kubernetic.com',
        endpoint: 'https://plausible.apps.harbur.io/api/event',
        autoCapturePageviews: true,
      });
    });
  }, []);

  return <>{children}</>;
}
