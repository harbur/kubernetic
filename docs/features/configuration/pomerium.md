# Setup Pomerium authentication

Pomerium is an identity-aware proxy that enables secure access to internal applications. Pomerium provides a standardized interface to add access control to applications regardless of whether the application itself has authorization or authentication baked-in. After configuring Pomerium. For more information abour Pomerium check    [Pomerium official documentation](https://www.pomerium.io/docs/).

In order to set up Pomerium for Kubernetic app, you will need to make use of [Helm](https://helm.sh/). Note that you also need having the Enterprise version of Kubernetic installed in your local.

## Setting your Identity Provider Configuration

Firstly, in order to use Pomerium you will need to set an Identity Provider Configuration that will implement the SSO (Single Sign On) authenthication to Kubernetic. [Here](https://www.pomerium.io/docs/identity-providers/) you can find a guide on how to do that. You can choose from various platforms like Azure AD, AWS Cognito, Github, Gitlab, Google/GSuite, Okta and OneLogin. In this guide we have used [Google OAuth](https://www.pomerium.io/docs/identity-providers/google.html).

## Installation

Firstly we will need to create a namespace where to install Pomerium:
```sh
kubectl create namespace pomerium-demo
```

In order to install Pomerium, you will need to vreate a values.yaml file, that will be used by Helm. 

Example of values.yaml file:

[values.yaml](../configuration/values.yaml ':include :type=code')

When you have your values.yaml field configured properly for your own environment you can install Pomerium using Helm.
1)  Add the Helm Repo
```sh
helm repo add stable https://kubernetes-charts.storage.googleapis.com
```

2) Install the appropriate chart

```sh
 helm install -f values.yaml pomerium-demo stable/pomerium --namespace pomerium-demo --version 1.3.1
```

You can check if the installation is ready when all the corresponding pods are running


```sh
kubectl get pods --namespace pomerium-demo
```
You should see the pods in these states:

```sh
NAME                                         READY   STATUS    RESTARTS   AGE
pomerium-demo-authenticate-d64d76d4c-qvf5h   1/1     Running   0          2m
pomerium-demo-authorize-5944d775-tnvw5       1/1     Running   0          2m
pomerium-demo-proxy-7bc87577db-g6w2l         1/1     Running   
0          2m
```

After the installation of Pomerium is complete you will also need two more objects: one ConfigMap and one Ingress

[pomerium-ingress.yaml](../configuration/pomerium-ingress.yaml ':include :type=code')

[pomerium-configmap.yaml](../configuration/pomerium-configmap.yaml ':include :type=code')