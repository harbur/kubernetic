# Kind

### Installation

"kind" is a tool for running local Kubernetes clusters using Docker container “nodes”.
kind was primarily designed for testing Kubernetes itself, but may be used for local development or CI.

 You can either install kind with GO111MODULE="on" go get sigs.k8s.io/kind@v0.8.1 or clone [this repo](https://github.com/kubernetes-sigs/kind//) and execute from the repository the command 
 ```bash
> make build
```

Please use the latest Go when installing KIND from source, ideally go 1.14 or greater.

Without installing Go, kind can be built reproducibly with docker using make build.
Stable releases are generally recommended for CI usage in particular. To install, download the binary for your platform from “Assets” and place this into your $PATH .

<!-- tabs:start -->

#### ** Mac (with brew) **

```bash
> brew install kind
```

#### ** Mac (without brew) **

```bash
> curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.8.1/kind-darwin-amd64
```

#### ** Linux **

```bash
> curl -Lo ./kind https://kind.sigs.k8s.io/dl/v0.8.1/kind-linux-amd64
chmod +x ./kind
mv ./kind /some-dir-in-your-PATH/kind
```

#### ** Windows (with Chocolatey) **

1. Install [Chocolatey](https://chocolatey.org/)

2. Install kind

```bash
> choco install kind
```

#### ** Windows **

```bash
> curl.exe -Lo kind-windows-amd64.exe https://kind.sigs.k8s.io/dl/v0.8.1/kind-windows-amd64
Move-Item .\kind-windows-amd64.exe c:\some-dir-in-your-PATH\kind.exe
```

<!-- tabs:end -->

### Start a Cluster

1) Run the following command:

 ```bash
> kind create cluster
```
This will bootstrap a Kubernetes cluster using a pre-built node image - you can find it on [docker hub](https://hub.docker.com/r/kindest/node//).
By default, the cluster will be given the name kind. Use the --name flag to assign the cluster a different context name.

