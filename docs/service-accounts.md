# Service Accounts

A service account provides an identity for processes that run in a Pod.

For more information about Service Accounts checkout the [Kubernetes User Guide](http://kubernetes.io/docs/user-guide/service-accounts/).

## Create a Service Account

Kubernetes will generate automatically a `default` Service Account on each Namespace.

Let's create a `test` Service Account:

```
kubectl create serviceaccount test
```

![](/assets/serviceaccount.png)

During the creation of `test` Service Account, a `test-token` Secret was also generated and associated with the new Service Account.

![](/assets/serviceaccount-view.png)

You can now delete the Service Account. The `test-token` Secret is also deleted together with the Service Account.
