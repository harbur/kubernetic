# Namespaces

Now that you have a working cluster connected to your _Kubernetic_ client you can continue with handling the namespaces.

::: tip
[Namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/) is a way to virtually split an existing cluster to separate environments. Most objects inside Kubernetes act inside a specific namespace, which means when you switch namespace a fresh environment will be provided.
:::

Go to screen **Settings** &gt; **Namespaces**

### List Namespaces

You will see there your existing namespaces. Kubernetes creates an active _"default"_ namespace automatically which is where your objects act on by default. It also creates a _"kube-system"_ namespace where all cluster's management objects are stored \(e.g. A DNS service\).

:::: tabs
::: tab with Kubernetic

![Namespaces: Manage namespaces](../images/namespaces.png)

:::
::: tab with Kubectl

```bash
> kubectl get namespaces
NAME                              STATUS        AGE
default                           Active        9m
kube-public                       Active        9m
kube-system                       Active        9m
```

:::
::::

### Creating Namespace

:::: tabs
::: tab with Kubernetic

Let's create a namespace:

* Fill name: **kubernetic-tutorial**
* Click **Add Namespace** button


:::

::: tab with Kubectl

```bash
kubectl create namespace kubernetic-tutorial
```

:::
::::

### Switching Namespace

:::: tabs

::: tab with Kubernetic

The active namespace can be seen on the top menu bar, you can switch to the new namespace by selecting the name:

![Switching Namespace](../images/switching-namespace.png)

:::

::: tab with Kubectl

e.g. to see the pods of `kubernetic-tutorial` namespace:

```bash
kubectl get pods --namespace kubernetic-tutorial
```

:::
::::

### Deleting Namespace

::: danger
Deletion of a namespace propagates the deletion of all resources under that namespace.
:::


:::: tabs
::: tab with Kubernetic

Namespaces can be deleted from the menu:

![Namespace Menu](../images/namespace-menu.png)

A confirmation dialog is shown before deleting the namespace:

![Namespace deletion confirmation](../images/namespace-delete-confirmation.png)

:::
::: tab with Kubectl

To delete a namespace using kubectl CLI:

```bash
kubectl delete namespace kubernetic-tutorial
```

:::
::::

