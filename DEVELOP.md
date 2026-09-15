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

The site is a static export (no server code), so it deploys straight to
[Cloudflare Workers static assets] — no container, no Flux. GitHub Actions
runs a type check and build on every push and PR; pushes to `main` also
deploy the build to https://docs.kubernetic.com/ via `wrangler deploy` (see
`wrangler.jsonc`). PRs are built and type-checked but not previewed.

VuePress-era URLs and the `crosssections-features` → `general` rename are
handled by `public/_redirects`, read by Cloudflare at deploy time.

[Cloudflare Workers static assets]: https://developers.cloudflare.com/workers/static-assets/
