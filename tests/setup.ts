import { config } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import 'vitest-axe/extend-expect'

Object.defineProperty(window.HTMLCanvasElement.prototype, 'getContext', {
  value: () => null,
})
const i18n = createI18n({
  legacy: false,
  locale: 'id',
  fallbackLocale: 'id',
  messages: {
    id: { nav: { home: 'Beranda', pmv: 'PMV', gabi: 'GABI' } },
    en: { nav: { home: 'Home', pmv: 'PMV', gabi: 'GABI' } },
  },
})
config.global.plugins = [i18n]
config.global.stubs = {
  RouterLink: { props: ['to'], template: `<a :href="to"><slot /></a>` },
}
