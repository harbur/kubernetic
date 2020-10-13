# Configuration

There are some values that can be customized in the configuration of the application. 

To change the configurations of the application you will need [Helm] tool. 

[Helm]: https://helm.sh/
Firstly, we need to write a values.yaml under the format displayed below:

[values.yaml](../enterprise/values.yaml ':include :type=code')


The values that we can overwrite refer to the format of the logging system and the backlink for ArgoCD deployments. The values for the logging system may be either "info", either "debug". As for the backlink, for more details, check the the ArgoCD section.

After we have the values.yaml file, we can run the helm upgrade command to update the application.

```sh
helm upgrade kubernetic --namespace kubernetic kubernetic/kubernetic -f values.yaml
```