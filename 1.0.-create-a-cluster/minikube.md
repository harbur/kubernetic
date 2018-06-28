# Minikube

### Installation

[Minikube](https://github.com/kubernetes/minikube) is a tool that makes it easy to run Kubernetes locally. Minikube runs a single-node Kubernetes cluster inside a VM on your laptop for users looking to try out Kubernetes or develop with it day-to-day.



{% tabs %}
{% tab title="Mac \(with brew\)" %}
```bash
brew cask install minikube
```
{% endtab %}

{% tab title="Mac \(without brew\)" %}
```bash
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64
chmod +x minikube
sudo mv minikube /usr/local/bin/
```
{% endtab %}

{% tab title="Linux" %}
```bash
curl -Lo minikube https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
chmod +x minikube
sudo mv minikube /usr/local/bin/
```
{% endtab %}

{% tab title="Windows" %}
1. Download the [minikube-windows-amd64.exe](https://storage.googleapis.com/minikube/releases/latest/minikube-windows-amd64.exe) file
2. Rename it to `minikube.exe`
3. Add it to your PATH
{% endtab %}
{% endtabs %}

{% hint style="info" %}
For more details on the installation process proceed [here](https://github.com/kubernetes/minikube/).
{% endhint %}

### Verify Installation

In order to check installation do:

```bash
> minikube version
minikube version: v0.28.0
```

Minikube should respond with the version it uses.

### Start Cluster



