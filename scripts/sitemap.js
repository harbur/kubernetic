// Writes dist/sitemap.xml from the built pages. Runs after `vuepress build`.
// URLs match the canonical links set in config.ts; pages marked noindex and
// the 404 page are left out.
const fs = require('fs')
const path = require('path')

const dist = path.join(__dirname, '..', 'docs', '.vuepress', 'dist')
const site = 'https://docs.kubernetic.com'

function htmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) return entry.name === 'assets' ? [] : htmlFiles(full)
    return entry.name.endsWith('.html') ? [full] : []
  })
}

const urls = htmlFiles(dist)
  .filter((file) => path.basename(file) !== '404.html')
  .filter((file) => !/<meta name="robots" content="noindex"/.test(fs.readFileSync(file, 'utf8')))
  .map((file) => {
    const rel = path.relative(dist, file).split(path.sep).join('/')
    return `${site}/${rel.replace(/(^|\/)index\.html$/, '$1')}`
  })
  .sort()

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((url) => `  <url><loc>${url}</loc></url>`),
  '</urlset>',
  '',
].join('\n')

fs.writeFileSync(path.join(dist, 'sitemap.xml'), xml)
console.log(`sitemap.xml: ${urls.length} urls`)
