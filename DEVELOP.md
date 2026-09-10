# DEVELOP

The documentation site is [Fumadocs] on Next.js. Content is MDX under
`content/docs/`; the app shell lives in `app/` and `lib/`. Writing docs means
touching `content/` only.

[Fumadocs]: https://fumadocs.dev/

## Run locally

```shell
bun install
bun run dev
```

Open http://localhost:3000.

## Adding a page

1. Create `content/docs/<section>/<topic>.mdx` with a `title` in the frontmatter.
2. Add `<topic>` to `pages` in that folder's `meta.json`, in reading order.
3. Add a `<Card>` for it to the section's `index.mdx`, in the same order.

## Branches

* The `main` branch is the [live] documentation.
* The `develop` branch is the next release documentation.

[live]: https://docs.kubernetic.com/

## Deployment

GitHub Actions runs a type check and build on every push and PR. Pushes to
`main` and `v*` tags also build a container image and push it to
`ghcr.io/harbur/kubernetic`, which Flux deploys from the `kubernetic-apps`
repository.

Until that manifest is in place, [Netlify] keeps deploying `main` to
https://docs.kubernetic.com/ and PRs as previews (see `netlify.toml`).

[Netlify]: https://www.netlify.com/
