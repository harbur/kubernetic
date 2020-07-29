# k3d

### Installation

k3d is a lightweight wrapper to run k3s (Rancher Lab’s minimal Kubernetes distribution) in docker.

k3d makes it very easy to create single- and multi-node k3s clusters in docker, e.g. for local development on Kubernetes.

{% tabs %} {% tab title="Installation with Homebrew" %}

 ```bash
> brew install k3d
```
{% endtab %}

{% tabs %} {% tab title="Installation with install script" %}

1) wget
 ```bash
> wget -q -O - https://raw.githubusercontent.com/rancher/k3d/main/install.sh | bash
```
2) curl
 ```bash
> curl -s https://raw.githubusercontent.com/rancher/k3d/main/install.sh | bash
```
{% endtab %}

{% tabs %} {% tab title="Installation with [AUR](https://aur.archlinux.org//)" %}

 ```bash
> yay -S rancher-k3d-bin
```
{% endtab %}

{% tabs %} {% tab title="Installation with Go" %}

 ```bash
> go install github.com/rancher/k3d
```
{% endtab %}

{% tabs %} {% tab title="Installation with [arkade](https://github.com/alexellis/arkade//)" %}

 ```bash
> arkade get k3d
```
{% endtab %}

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
