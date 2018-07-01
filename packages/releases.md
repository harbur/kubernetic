# Releases

In Releases section we manage the Helm Releases.

{% hint style="info" %}
When a chart is installed, Tiller \(the Helm server\) creates a [Release](https://github.com/kubernetes/helm/blob/master/docs/glossary.md#release) to track that installation.

A single chart may be installed many times into the same cluster, and create many different releases. For example, one can install three PostgreSQL databases by running helm install three times with a different release name.
{% endhint %}

### Listing Releases

Releases of helm are listed here:

![Packages &amp;gt; Releases: Listing a Release of wordpress](../.gitbook/assets/releases.png)

{% hint style="info" %}
To list the releases of the current namespace using helm CLI:

```bash
helm list --namespace NAMESPACE
```
{% endhint %}

### Details of a Release

Viewing the details of a release you can see the generated components of that Release and navigate to them.

![Packages &amp;gt; Release Details: stable/wordpress](../.gitbook/assets/release-details.png)

{% hint style="info" %}
To see the details of a release using helm CLI:

```bash
helm status RELEASE_NAME
```
{% endhint %}



