# Azure Kubernetes Engine (AKS)

### Installation

To prepare a Kubernetes cluster on Azure with Active Directory follow [this guide](https://docs.microsoft.com/en-us/azure/aks/azure-ad-integration).

### Create a Cluster

```bash
> az group create \
  --name myResourceGroup \
  --location <region>

> az aks create \
  --resource-group myResourceGroup \
  --name myAKSCluster \
  --generate-ssh-keys \
  --node-count 1 \
  --aad-server-app-id <serverAppId> \
  --aad-server-app-secret <serverAppSecret> \
  --aad-client-app-id <clientAppId> \
  --aad-tenant-id <tenantId>

```

