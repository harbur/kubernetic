# Minikube

### Installation

[Minikube](https://github.com/kubernetes/minikube) is a tool that makes it easy to run Kubernetes locally. Minikube runs a single-node Kubernetes cluster inside a VM on your laptop for users looking to try out Kubernetes or develop with it day-to-day.

Along with minikube, [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/) CLI client is needed. The installation steps cover how to install it.

{% tabs %}
{% tab title="Mac \(with brew\)" %}
```bash
brew cask install minikube
brew install kubectl
```
{% endtab %}

{% tab title="Mac \(without brew\)" %}
```bash
# minikube
curl -Lo minikube "https://storage.googleapis.com/minikube/releases/latest/minikube-darwin-amd64"
chmod +x minikube
sudo mv minikube /usr/local/bin/

# kubectl
curl -Lo kubectl "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/darwin/amd64/kubectl"
chmod +x kubectl
sudo mv kubectl /usr/local/bin/
```
{% endtab %}

{% tab title="Linux" %}
```bash
# minikube
curl -Lo minikube "https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64"
chmod +x minikube
sudo mv minikube /usr/local/bin/

# kubectl
curl -Lo kubectl "https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl"
chmod +x kubectl
sudo mv kubectl /usr/local/bin/
```
{% endtab %}

{% tab title="Windows" %}
#### minikube

1. Download the [minikube-windows-amd64.exe](https://storage.googleapis.com/minikube/releases/latest/minikube-windows-amd64.exe) file
2. Rename it to `minikube.exe`
3. Add it to your PATH

#### kubectl

1. Download the [kubectl.exe](https://storage.googleapis.com/kubernetes-release/release/v1.11.0/bin/windows/amd64/kubectl.exe) file
2. Add it to your PATH
{% endtab %}
{% endtabs %}

{% hint style="info" %}
For more details on the installation process check documentation of [minikube](https://github.com/kubernetes/minikube/) and [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-with-homebrew-on-macos).
{% endhint %}

### Verify Installation

In order to check installation do:

```bash
> minikube version
minikube version: v0.28.0
> kubectl version --client
Client Version: version.Info{Major:"1", Minor:"11", GitVersion:"v1.11.0", GitCommit:"91e7b4fd31fcd3d5f436da26c980becec37ceefe", GitTreeState:"clean", BuildDate:"2018-06-27T22:30:22Z", GoVersion:"go1.10.3", Compiler:"gc", Platform:"darwin/amd64"}
```

Minikube and kubectl should respond with their respective versions.

### Start Cluster

To start a kubernetes cluster:

```bash
> minikube start
Starting local Kubernetes v1.10.0 cluster...
Starting VM...
Getting VM IP address...
Moving files into cluster...
Setting up certs...
Connecting to cluster...
Setting up kubeconfig...
Starting cluster components...
Kubectl is now configured to use the cluster.
Loading cached images from config file.
```

Once the cluster is up and running you should be able to get the list of nodes through kubectl CLI:

```bash
> kubectl get nodes
NAME       STATUS    ROLES     AGE       VERSION
minikube   Ready     master    22m       v1.10.0
```

{% hint style="success" %}
Now you have a working Kubernetes cluster running locally using **minikube** and have proper authentication using **kubectl** to connect to the cluster. You can launch **Kubernetic** to connect to the cluster.
{% endhint %}

