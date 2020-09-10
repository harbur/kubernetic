## Setup multi-node cluster

In order to run a multi-node cluster with [kind] create the following `kind-config.yaml` file:

```yaml
# three node (two workers) cluster config
kind: Cluster
apiVersion: kind.x-k8s.io/v1alpha4
nodes:
- role: control-plane
- role: worker
- role: worker
```

Then start the cluster with the following command:

```bash
kind create cluster --config kind-config.yaml
```

Once run you should be able to see the cluster nodes up:

```bash
(⎈ |kind-kind:default)➜ kubectl get nodes
NAME                 STATUS   ROLES    AGE   VERSION
kind-control-plane   Ready    master   56m   v1.18.2
kind-worker          Ready    <none>   55m   v1.18.2
kind-worker2         Ready    <none>   55m   v1.18.2
```
[kind]: https://kind.sigs.k8s.io/