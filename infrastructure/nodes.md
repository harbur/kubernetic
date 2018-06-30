# Nodes

{% hint style="info" %}
A [Node](https://kubernetes.io/docs/concepts/architecture/nodes/) is a worker machine in Kubernetes. A node may be a VM or physical machine, depending on the cluster. Each node has the services necessary to run Pods and is managed by the master components.
{% endhint %}

### Listing Nodes

The nodes of the cluster are listed on the nodes section:

![Infrastructure &amp;gt; Nodes: Visualizing a minikube cluster](../.gitbook/assets/nodes.png)

### Details of a Node

Clicking on a Node a detailed view of the Node appears:

![Infrastructure &amp;gt; Node Details: Minikube](../.gitbook/assets/node-view.png)

### Cordoning a Node

A Node can be \(un\)cordoned using the Cordon button. Once the node is cordoned the Ready state of the Node is set to false.

![Infrastructure &amp;gt; Node Details: Cordoned Minikube](../.gitbook/assets/cordon-node.png)

{% hint style="danger" %}
Make sure to **uncordon** the Node before continuing. A Cordoned node doesn't accept new Pod requests.
{% endhint %}

