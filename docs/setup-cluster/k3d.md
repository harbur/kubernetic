# k3d

### Installation

k3d is a lightweight wrapper to run k3s (Rancher Lab’s minimal Kubernetes distribution) in docker.

k3d makes it very easy to create single- and multi-node k3s clusters in docker, e.g. for local development on Kubernetes.

:::: tabs

::: tab with Homebrew

```bash
> brew install k3d
```

:::

::: tab with script

1. with wget:

  ```bash
  > wget -q -O - https://raw.githubusercontent.com/rancher/k3d/main/install.sh | bash
  ```

2. with curl:

  ```bash
  > curl -s https://raw.githubusercontent.com/rancher/k3d/main/install.sh | bash
  ```

:::

::: tab on ArchLinux

 ```bash
> yay -S rancher-k3d-bin
```

:::

::: tab with Go

```bash
> go install github.com/rancher/k3d
```

:::

::: tab with Arkade

1. Install [arkade](https://github.com/alexellis/arkade/)

2. Install k3d

 ```bash
> arkade get k3d
```

:::

::::

### Start a Cluster

1) Create a cluster named mycluster with just a single server node:

 ```bash
> k3d cluster create mycluster
```
2) Get the new cluster’s connection details merged into your default kubeconfig (usually specified using the KUBECONFIG environment variable or the default path $HOME/.kube/config) and directly switch to the new context:

 ```bash
> k3d kubeconfig merge mycluster --switch-context
```

3) Use the new cluster with kubectl, e.g.:

 ```bash
> kubectl get svc
```

::: tip
Now you have a working Kubernetes cluster running locally using **K3d** and have proper authentication using **kubectl** to connect to the cluster you can proceed to Kubernetic [Installation](/installation/) guide.
:::