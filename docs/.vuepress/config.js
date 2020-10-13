module.exports = {
  title: "Kubernetic",
  plugins: [
    'vuepress-plugin-element-tabs'
  ],
  themeConfig: {
    repo: 'harbur/kubernetic',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: 'Help us improve this page!',
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
          children: [
            '/features/infrastructure/nodes',
            '/features/infrastructure/quotas',
            '/features/infrastructure/limits',
          ]
        },
        {
          title: 'Workloads',
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
          title: 'Configuration',
          collapsable: false,
          children: [
            '/features/configuration/config',
            '/features/configuration/secrets',
            '/features/configuration/autoscalers',
          ]
        },
        {
          title: 'Networking',
          collapsable: false,
          children: [
            '/features/networking/services',
            '/features/networking/ingresses',
            '/features/networking/networkpolicies',
          ]
        },
        {
          title: 'Storage',
          collapsable: false,
          children: [
            '/features/storage/volumes',
          ]
        },
        {
          title: 'Applications',
          collapsable: false,
          children: [
            '/features/applications/charts',
            '/features/applications/releases',
          ]
        },
        {
          title: 'User Management',
          collapsable: false,
          children: [
            '/features/user-management/serviceaccounts',
          ]
        },
        {
          title: 'Enterprise',
          collapsable: false,
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
          title: 'Networking',
          path: '/tutorials/networking/',
          collapsable: false,
          children: [
            '/tutorials/networking/services/',
            '/tutorials/networking/ingresses/',
          ]
        },
        {
          title: 'Configuration',
          path: '/tutorials/configuration/',
          collapsable: false,
          children: [
            '/tutorials/configuration/env/',
            '/tutorials/configuration/configmaps/',
            '/tutorials/configuration/secrets/',
          ]
        },
        {
          title: 'Storage',
          path: '/tutorials/storage/',
          collapsable: false,
          children: [
            '/tutorials/storage/claims/',
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
          path: '/installation/',
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
