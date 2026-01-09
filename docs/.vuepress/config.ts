module.exports = {
  title: "Kubernetic",
  head: [
    ['script', { defer: true, 'data-domain': 'kubernetic.com', src: 'https://plausible.apps.harbur.io/js/script.js' }]
  ],
  plugins: [
    '@snippetors/vuepress-plugin-tabs',
    ['@vuepress/plugin-google-analytics', { id: 'UA-11756963-5' }],
  ],
  themeConfig: {
    repo: 'harbur/kubernetic',
    editLinks: true,
    docsDir: 'docs',
    docsBranch: 'master',
    editLinkText: 'Help us improve this page!',
    activeHeaderLinks: false,
    navbar: [
      { text: 'Getting Started', link: '/' },
      { text: 'Tutorials', link: '/tutorials/' },
      { text: 'Features', link: '/features/' }
    ],
    sidebarDepth: 0,
    sidebar: {

      // //////// FEATURES SIDEBAR ////////
      '/features/': [
        {
          text: "Features",
          link: "/features/"
        },
        {
          text: 'Generic',
          collapsable: false,
          children: [
            '/features/crosssections-features/create',
            '/features/crosssections-features/search',
            '/features/crosssections-features/filterlogs',
            '/features/crosssections-features/terminal',
            '/features/crosssections-features/portforwarding',
          ]
        },
        {
          text: 'Settings',
          path: '/features/settings/',
          collapsable: false,
          children: [
            '/features/settings/contexts',
            '/features/settings/addons',
            '/features/settings/namespaces',
            '/features/settings/repositories',
          ]
        },
        {
          text: 'Infrastructure',
          collapsable: false,
          children: [
            '/features/infrastructure/nodes',
            '/features/infrastructure/quotas',
            '/features/infrastructure/limits',
          ]
        },
        {
          text: 'Workloads',
          collapsable: false,
          children: [
            '/features/workloads/pods',
            '/features/workloads/deployments',
            '/features/workloads/statefulsets',
            '/features/workloads/daemonsets',
            '/features/workloads/jobs',
            '/features/workloads/cronjobs',
          ]
        },
        {
          text: 'Configuration',
          collapsable: false,
          children: [
            '/features/configuration/config',
            '/features/configuration/secrets',
            '/features/configuration/autoscalers',
          ]
        },
        {
          text: 'Networking',
          collapsable: false,
          children: [
            '/features/networking/services',
            '/features/networking/ingresses',
            '/features/networking/networkpolicies',
          ]
        },
        {
          text: 'Storage',
          collapsable: false,
          children: [
            '/features/storage/volumes',
          ]
        },
        {
          text: 'Applications',
          collapsable: false,
          children: [
            '/features/applications/charts',
            '/features/applications/releases',
          ]
        },
        {
          text: 'User Management',
          collapsable: false,
          children: [
            '/features/user-management/serviceaccounts',
          ]
        },
        {
          text: 'Team',
          collapsable: false,
          children: [
            '/features/team/config',
            '/features/team/argocd',
            '/features/team/tekton',
          ]
        },
      ],
      //////// TUTORIALS SIDEBAR ////////
      '/tutorials/': [
        {
          text: "Tutorials",
          link: "/tutorials/"
        },
        {
          text: 'Workloads',
          link: '/tutorials/workloads/',
          collapsable: false,
          children: [
            '/tutorials/workloads/pods/',
            '/tutorials/workloads/deployments/',
            '/tutorials/workloads/statefulsets/',
            '/tutorials/workloads/daemonsets/',
            '/tutorials/workloads/jobs/',
          ]
        },
        {
          text: 'Networking',
          link: '/tutorials/networking/',
          collapsable: false,
          children: [
            '/tutorials/networking/services/',
            '/tutorials/networking/ingresses/',
          ]
        },
        {
          text: 'Configuration',
          link: '/tutorials/configuration/',
          collapsable: false,
          children: [
            '/tutorials/configuration/env/',
            '/tutorials/configuration/configmaps/',
            '/tutorials/configuration/secrets/',
          ]
        },
        {
          text: 'Storage',
          link: '/tutorials/storage/',
          collapsable: false,
          children: [
            '/tutorials/storage/claims/',
          ]
        },
      ],

      //////// BASE SIDEBAR ////////
      '/': [
        {
          text: "Getting Started",
          link: "/"
        },
        {
          text: 'Setup Cluster',
          link: '/setup-cluster/',
          collapsable: false,
          children: [
            '/setup-cluster/minikube',
            '/setup-cluster/docker-for-desktop',
            '/setup-cluster/kind',
            '/setup-cluster/k3d',
            '/setup-cluster/google-kubernetes-engine-gke',
            '/setup-cluster/azure-kubernetes-engine-aks',
            '/setup-cluster/elastic-kubernetes-service-eks',
          ]
        },
        {
          text: 'Installation',
          link: '/installation/',
          collapsable: false,
          children: [
            '/installation/desktop',
            '/installation/team',
          ]
        },
        {
          text: "Next Steps",
          link: "/next-steps.html"
        },
        {
          text: "Changelog",
          link: "/changelog.html"
        }

      ],
    }
  }
}
