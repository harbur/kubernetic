# DEVELOP

## Branches

* The `master` branch is the live documentation.
* The `develop` branch is the documentation of next release.

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

Deployment is done with [Netlify] from `master` branch to https://docs.kubernetic.com/.

Previews are activated on every PR with a dedicated URL for each one.

[Netlify]: https://www.netlify.com/
