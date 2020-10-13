# Storage

*Since version  v.2.13.0

::: tip
During this tutorial you'll learn how to manage Storage on Kubernetes.
:::

* Level: *beginner*
* Requirements: *default StorageClass*
* Previous Tutorials Series: [Workloads](/tutorials/workloads/)
* Can run on Cluster: *any*
* Can run on Namespace: *any*

> Storage describes the management of mounting [volumes](https://kubernetes.io/docs/concepts/storage/volumes/) on running instances, useful for stateful applications that want persistence of disk data across restarts or upgrades.

## Tutorials

Choose your Tutorial that you want to begin from the list below:

| Name                               | Description                      | Features |
|------------------------------------|----------------------------------|----------|
| [Claims](tutorials/storage/claims/) | Configure StatefulSet with Claim |          |

::: warning
You need to have a default StorageClass configured in your cluster so that Claims can be provisioned.
:::
