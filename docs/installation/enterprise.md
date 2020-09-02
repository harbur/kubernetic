# Enterprise

To install Kubernetic Enterprise, you will need [Helm] CLI tool.

[Helm]: https://helm.sh/

* Add the following chart repository:

```sh
helm repo add kubernetic https://harbur.github.io/kubernetic-charts
```

* Create a Namespace (recommended name `kubernetic`)

```sh
kubectl create namespace kubernetic
```

* Install Kubernetic

```sh
helm install kubernetic --namespace kubernetic kubernetic/kubernetic
```
