# Google Kubernetes Engine (GKE)

### Installation

[Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine/) \(GKE\) is a managed, production-ready environment for deploying containerized applications.

In order to use GKE through the CLI you will need the `gcloud` installed.

### Start a Cluster

To start a cluster:

```bash
> gcloud containers create myCluster
```

::: tip
Now you have a working Kubernetes cluster running locally using **GKE** and have proper authentication using **kubectl** to connect to the cluster you can proceed to Kubernetic [Installation](/installation/) guide.
:::