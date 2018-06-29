# Repositories

Kubernetic integrates with Helm as Package management. In this section the Repositories refer to Helm repositories.

{% hint style="info" %}
In order for Repositories screen to be functional you need to install [helm](https://github.com/kubernetes/helm/releases) and do an init:

```bash
> helm init --client-only
Creating /Users/username/.helm
Creating /Users/username/.helm/repository
Creating /Users/username/.helm/repository/cache
Creating /Users/username/.helm/repository/local
Creating /Users/username/.helm/plugins
Creating /Users/username/.helm/starters
Creating /Users/username/.helm/cache/archive
Creating /Users/username/.helm/repository/repositories.yaml
Adding stable repo with URL: https://kubernetes-charts.storage.googleapis.com
Adding local repo with URL: http://127.0.0.1:8879/charts
$HELM_HOME has been configured at /Users/username/.helm.
Not installing Tiller due to 'client-only' flag having been set
Happy Helming!
```
{% endhint %}

Go to screen **Settings** &gt; **Repositories**

### List Repositories

You will see the list of Repositories for Helm. By default helm configures **stable** and **local** repository.

![Settings &amp;gt; Repositories: Manage Repositories](../.gitbook/assets/repositories.png)

### Adding Repository

Let's add a new repository:

* Fill name: **kubernetic**
* Fill URL: [https://harbur.github.io/kubernetic-charts/](https://harbur.github.io/kubernetic-charts/)
* Click **Add Repository** button

{% hint style="info" %}
To add a repository using helm CLI:

```bash
helm repo add kubernetic https://harbur.github.io/kubernetic-charts/
```
{% endhint %}

### Deleting Repository

Repositories can be deleted from the menu:

![Settings &amp;gt; Repositories Menu](../.gitbook/assets/repository-menu.png)

A confirmation dialog is shown before deleting the repository:

![Settings &amp;gt; Repository deletion confirmation](../.gitbook/assets/repository-delete-confirmation.png)

{% hint style="info" %}
To delete a repository using helm CLI:

```bash
helm repo remove kubernetic
```
{% endhint %}



