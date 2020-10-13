# Repositories

Kubernetic integrates with Helm as Package management. In this section the Repositories refer to Helm repositories.

Go to screen **Settings** &gt; **Repositories**

### List Repositories

You will see the list of Repositories for Helm. By default helm configures **stable** and **local** repository.

![Repositories: Manage Repositories](../images/repositories.png)

### Adding Repository

:::: tabs
::: tab with Kubernetic

Let's add a new repository:

* Fill name: **kubernetic**
* Fill URL: [https://harbur.github.io/kubernetic-charts/](https://harbur.github.io/kubernetic-charts/)
* Click **Add Repository** button

:::
::: tab with helm

To add a repository using helm CLI:

```bash
helm repo add kubernetic https://harbur.github.io/kubernetic-charts/
```

:::
::::

### Deleting Repository

:::: tabs
::: tab with Kubernetic

Repositories can be deleted from the menu:

![Repositories Menu](../images/repository-menu.png)

A confirmation dialog is shown before deleting the repository:

![Repository deletion confirmation](../images/repository-delete-confirmation.png)

:::
::: tab with helm

To delete a repository using helm CLI:

```bash
helm repo remove kubernetic
```

:::
::::