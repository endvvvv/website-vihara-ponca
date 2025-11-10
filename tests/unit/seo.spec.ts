// tests/unit/seo.spec.ts
import { describe, it, expect, beforeEach } from 'vitest'
import { setPageMeta, setOgLocale } from '@/utils/seo'

const meta = (sel: string) => document.querySelector<HTMLMetaElement>(sel)!
const stripOrigin = (u: string) => u.replace(/^https?:\/\/[^/]+/, '')

describe('seo utils', () => {
  beforeEach(() => {
    document.head.innerHTML = ''
    document.title = ''
  })

  it('set title & meta description/OG/image', () => {
    setPageMeta({
      title: 'PMV',
      description: 'Agenda PMV',
      image: '/social.png',
    })

    expect(document.title).toContain('PMV')
    expect(meta('meta[name="description"]').content).toBe('Agenda PMV')
    expect(meta('meta[property="og:title"]').content).toBe('PMV')
    expect(meta('meta[property="og:description"]').content).toBe('Agenda PMV')

    // Robust terhadap normalisasi absolut oleh JSDOM/DOM
    expect(stripOrigin(meta('meta[property="og:image"]').content)).toBe(
      '/social.png'
    )
  })

  it('set og:locale', () => {
    setOgLocale('id_ID')
    expect(meta('meta[property="og:locale"]').content).toBe('id_ID')
  })
})
