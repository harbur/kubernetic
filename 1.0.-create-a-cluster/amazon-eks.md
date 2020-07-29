# Amazon Elastic Kubernetes Service \(EKS\)

### Installation

[Amazon Elastic Kubernetes Service](https://aws.amazon.com/eks//) \(EKS\) is a fully managed, production-ready environment for deploying containerized applications, without needing to install, operate, and maintain your own Kubernetes control plane or nodes.

One of the best ways to work with Amazon EKS is by using the `eksctl` tool, a simple command line utility for creating and managing Kubernetes clusters on Amazon EKS. The eksctl command line utility provides the fastest and easiest way to create a new cluster with nodes for Amazon EKS.
In order to install `eksctl` follow the [AWS official documentation](https://docs.aws.amazon.com/eks/latest/userguide/eksctl.html#installing-eksctl)

### Start a Cluster

Note: This procedure requires eksctl version 0.24.0 or later. You can check your version with the following command:

```bash
> eksctl version
```
To start a cluster:

1) Create a cluster with the Amazon EKS lastest Kubernetes version in your default region. Replace my-cluster with your own value.
```bash
> eksctl create cluster \
 --name my-cluster \
 --version 1.17 \
 --without-nodegroup
```
Note: To see most options that can be specified while creating a cluster with eksctl, use the eksctl create cluster --help command.

Cluster provisioning takes several minutes. Finally, the last output line should be similar to the following example:
```bash
> [✓]  EKS cluster "my-cluster" in "region-code" region is ready
```
2) When your cluster is ready, test that your kubectl configuration is correct.
```bash
> kubectl get svc
```
You should recieve the following output:
```bash
> NAME             TYPE        CLUSTER-IP   EXTERNAL-IP   PORT(S)   AGE
svc/kubernetes   ClusterIP   10.100.0.1   <none>        443/TCP   1m
```


