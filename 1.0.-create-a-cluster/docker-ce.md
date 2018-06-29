# Docker CE



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

### Verify Installation

In order to check installation do:

```bash
> docker --version
Docker version 18.05.0-ce, build f150324
```

Docker should respond with the installed version.

### Start Kubernetes Cluster

To launch Kubernetes cluster using Docker CE go to Preferences and enable Kubernetes. It takes some minutes to start the orchestrator, once finished you should be able to use `kubectl` to connect to the cluster:

```bash
> kubectl get nodes
NAME                 STATUS    ROLES     AGE       VERSION
docker-for-desktop   Ready     master    1m        v1.10.3
```



{% hint style="success" %}
Now you have a working Kubernetes cluster running locally using **Docker CE** and have proper authentication using **kubectl** to connect to the cluster. You can launch **Kubernetic** to connect to the cluster.
{% endhint %}



