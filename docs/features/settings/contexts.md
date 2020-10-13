# Contexts

Kubernetic uses `~/.kube/config` file to find existing cluster contexts and handle authentication. This means that as soon as you have a _kubectl_ client configured to your machine _Kubernetic_ will be able to login to your configured clusters.

::: tip
At the moment _Kubernetic_ only reads configuration so you first need to configure your authentication using _kubectl_ commands. Follow the guide [here](http://kubernetes.io/docs/user-guide/kubeconfig-file/) for more details on how to configure `~/.kube/config` file.
:::

![Contexts: Switch between Kubernetes contexts](../images/contexts.png)

Once you manage to login to your cluster continue to the next section.
