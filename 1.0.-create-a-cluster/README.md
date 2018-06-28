---
description: Prepare a Kubernetes Cluster
---

# Create a Cluster

In this section you'll setup a Kubernetes cluster locally in your machine.

{% hint style="info" %}
If you already have a cluster running  you can skip this section and go to Cluster Authentication.
{% endhint %}

We'll cover two ways to run a cluster locally, the first is using [Minikube](https://github.com/kubernetes/minikube/), the second is using [Docker CE](https://docs.docker.com/install/).

Choose one way and follow the guide below to prepare the environment.

### Install Minikube

Minikube is a tool that makes it easy to run Kubernetes locally. Minikube runs a single-node Kubernetes cluster inside a VM on your laptop for users looking to try out Kubernetes or develop with it day-to-day.



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

In order to check installation do:

```bash
> minikube version
minikube version: v0.28.0
```

Minikube should respond with the version it uses.

### Install Docker CE

Docker Community Edition \(CE\) is ideal for developers and small teams looking to get started with Docker and experimenting with container-based apps. Docker CE has two update channels, **stable** and **edge**:  


{% tabs %}
{% tab title="Docker for Mac" %}
Follow the installation steps for [Docker for Mac](https://docs.docker.com/docker-for-mac/install/).
{% endtab %}

{% tab title="Docker for Windows" %}
Follow the installation steps for [Docker for Windows](https://docs.docker.com/docker-for-windows/install/).
{% endtab %}
{% endtabs %}

{% hint style="info" %}
For more details on the installation process proceed [here](https://docs.docker.com/install/).
{% endhint %}

