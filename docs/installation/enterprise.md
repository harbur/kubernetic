# Enterprise

To install Kubernetic Enterprise, you will need [Helm] CLI tool.

[Helm]: https://helm.sh/

* Add the following chart repository:

```sh
(⎈) ➜ helm repo add kubernetic https://harbur.github.io/kubernetic-charts
"kubernetic" has been added to your repositories
```

* Create a Namespace (recommended name `kubernetic`)

```sh
(⎈) ➜ kubectl create namespace kubernetic
namespace/kubernetic created
```

* Install Kubernetic:

```sh
(⎈) ➜ helm install kubernetic --namespace kubernetic kubernetic/kubernetic
NAME: kubernetic
LAST DEPLOYED: Wed Sep  2 14:23:06 2020
NAMESPACE: kubernetic
STATUS: deployed
REVISION: 1
```

* Wait for Pods to be running:

```sh
(⎈)➜ kubectl get pod -w
NAME                                   READY   STATUS    RESTARTS   AGE
kubernetic-backend-66d49f8d96-7sv77    1/1     Running   0          66s
kubernetic-frontend-744d647796-8d86r   1/1     Running   0          66s
```

* Open connection to Kubernetic with port-forward:

```sh
(⎈)➜  ~ kubectl port-forward svc/kubernetic-frontend 5000:80
Forwarding from 127.0.0.1:5000 -> 80
Forwarding from [::1]:5000 -> 80
```

* Open on browser the UI http://localhost:5000

Continue the setup process on screen.
