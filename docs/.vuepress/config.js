module.exports = {
  themeConfig: {
    activeHeaderLinks: false,
    nav: [
      { text: 'Getting Started', link: '/' },
      { text: 'Tutorials', link: '/tutorials/' },
      { text: 'Features', link: '/features/' }
    ],
    sidebarDepth: 0,
    sidebar: {

      //////// FEATURES SIDEBAR ////////
      '/features/': [
        '',
        {
          title: 'Generic',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/features/crosssections-features/create',
            '/features/crosssections-features/searchtab',
            '/features/crosssections-features/filterlogs',
            '/features/crosssections-features/terminal',
            '/features/crosssections-features/portforwarding',
          ]
        },
        {
          title: 'Settings',
          path: '/features/settings/',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/features/settings/contexts',
            '/features/settings/addons',
            '/features/settings/namespaces',
            '/features/settings/repositories',
          ]
        },
        {
          title: 'Infrastructure',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/features/infrastructure/nodes',
            '/features/infrastructure/quotas',
            '/features/infrastructure/limits',
          ]
        },
        {
          title: 'Workloads',
          collapsable: false,
          sidebarDepth: 0,
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
          title: 'Configuration',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/features/configuration/config',
            '/features/configuration/secrets',
            '/features/configuration/autoscalers',
          ]
        },
        {
          title: 'Networking',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/features/networking/services',
            '/features/networking/ingresses',
            '/features/networking/networkpolicies',
          ]
        },
        {
          title: 'Storage',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/features/storage/volumes',
          ]
        },
        {
          title: 'Applications',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/features/applications/charts',
            '/features/applications/releases',
          ]
        },
        {
          title: 'User Management',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/features/user-management/serviceaccounts',
          ]
        },
        {
          title: 'Enterprise',
          collapsable: false,
          sidebarDepth: 0,
          children: [
            '/features/enterprise/config',
            '/features/enterprise/argocd',
            '/features/enterprise/tekton',
          ]
        },
      ],
      //////// TUTORIALS SIDEBAR ////////
      '/tutorials/': [
        '',
        {
          title: 'Workloads',
          path: '/tutorials/workloads/',
          collapsable: true,

          children: [
            '/tutorials/workloads/pods/',
            '/tutorials/workloads/deployments/',
            '/tutorials/workloads/statefulsets/',
          ]
        },
      ],

      //////// BASE SIDEBAR ////////
      '/': [
        '',
        {
          title: 'Setup Cluster',
          path: '/setup-cluster/',
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
          title: 'Installation',
          path: '/installation',
          collapsable: false,
          children: [
            '/installation/desktop',
            '/installation/enterprise',
          ]
        },
        'next-steps',
        'changelog',
      ],
    }
  }
}
