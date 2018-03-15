# Cluster Authentication

Kubernetic uses ```~/.kube/config``` file to find existing cluster contexts and handle authentication. This means that as soon as you have a *kubectl* client configured to your machine *Kubernetic* will be able to login to your configured clusters. 

At the moment *Kubernetic* only reads configuration so you first need to configure your authentication using *kubectl* commands. Follow the guide [here](http://kubernetes.io/docs/user-guide/kubeconfig-file/) for more details on how to configure ```~/.kube/config``` file.

![](Screen Shot 2016-08-29 at 10.41.56 AM.png)

Once you manage to login to your cluster continue to the next section.
