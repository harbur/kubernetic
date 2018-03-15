# Resource Quotas

When several users or teams share a cluster with a fixed number of nodes, there is a concern that one team could use more than its fair share of resources.

Resource quotas are a tool for administrators to address this concern.

For more information about Resource Quotas checkout the [Kubernetes User Guide](http://kubernetes.io/docs/admin/resourcequota/).

In this tutorial we'll activate Resource Quota to the `kubernetic-tutorial` namespace.

## Quotas Sample

Go to the tutorial chart repo and run the `resourcequota-sample` chart.

Here is the Resource Quota definition:

```
apiVersion: v1
kind: ResourceQuota
metadata:
  name: object-counts
spec:
  hard:
    pods: "4"
    configmaps: "10"
    persistentvolumeclaims: "4"
    replicationcontrollers: "20"
    secrets: "10"
    services: "10"
    services.loadbalancers: "2"

```

Now go to the Resource Quotas section. You'll see the `object-counts` Resource Quota that defines the hard limit of objects that can exist inside the current namespace.

Let's test that. Run the `nginx` Chart and increase the number of Pods to 8. You'll find that Kubernetes only permits 4 Pods to be Running.

![](/assets/quota-limits.png)

## Cleanup

You can now delete the `nginx` and `resourcequotas-sample`.
