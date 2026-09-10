import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Kubernetic',
      url: '/',
    },
    githubUrl: 'https://github.com/harbur/kubernetic',
    links: [
      { text: 'Download', url: 'https://www.kubernetic.com', external: true },
    ],
  };
}
