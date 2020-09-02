# DEVELOP

## Branches

* The `master` branch is the [live] documentation.
* The `develop` branch is the [next release] documentation.

[live]: https://docs.kubernetic.com/
[next release]: https://develop--docs-kubernetic.netlify.app/

## Run locally

Documentation can be previewed locally with [docsify].

[docsify]: https://docsify.js.org/#/

* To install docsify:

```shell
npm i docsify-cli -g
```

* To start:

```shell
docsify serve docs
```

## Deployment

Continuous Deployment (CD) is done with [Netlify]:

* from `master` branch to https://docs.kubernetic.com/.
* from `develop` branch to https://develop--docs-kubernetic.netlify.app/.
* from PRs as Preview with dedicated URL for each one.

[Netlify]: https://www.netlify.com/
