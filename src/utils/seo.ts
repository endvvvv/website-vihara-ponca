// src/utils/seo.ts
type MetaSpec = {
  title: string
  description?: string
  image?: string
  url?: string
}

export function setPageMeta({ title, description, image, url }: MetaSpec) {
  const absoluteUrl = url ?? location.href
  const absoluteImage = image ? toAbsolute(image) : undefined

  document.title = title ? `${title} — Vihara` : 'Vihara'

  // Meta
  upsertMetaName('description', description ?? '')

  // Open Graph
  upsertMetaProp('og:title', title)
  if (description) upsertMetaProp('og:description', description)
  upsertMetaProp('og:url', absoluteUrl)
  if (absoluteImage) upsertMetaProp('og:image', absoluteImage)

  // Twitter
  upsertMetaName('twitter:card', 'summary_large_image')
  upsertMetaName('twitter:title', title)
  if (description) upsertMetaName('twitter:description', description)
  if (absoluteImage) upsertMetaName('twitter:image', absoluteImage)

  // Canonical
  upsertLinkRel('canonical', absoluteUrl)
}

function upsertMetaName(name: string, content: string) {
  upsertMeta({
    selector: `meta[name="${name}"]`,
    attr: 'name',
    key: name,
    value: content,
  })
}
function upsertMetaProp(prop: string, content: string) {
  upsertMeta({
    selector: `meta[property="${prop}"]`,
    attr: 'property',
    key: prop,
    value: content,
  })
}
function upsertLinkRel(rel: string, href: string) {
  let el = document.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}
function upsertMeta(opts: {
  selector: string
  attr: 'name' | 'property'
  key: string
  value: string
}) {
  let el = document.querySelector<HTMLMetaElement>(opts.selector)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(opts.attr, opts.key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', opts.value)
}
function toAbsolute(path: string) {
  return /^https?:\/\//i.test(path)
    ? path
    : new URL(path, location.origin).toString().replace(/\/$/, '') +
        (path.startsWith('/') ? path : '/' + path)
}
