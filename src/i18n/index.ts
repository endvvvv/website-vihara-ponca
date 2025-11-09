// src/i18n/index.ts
import { createI18n } from 'vue-i18n'
import { watch } from 'vue'
import { setOgLocale } from '@/utils/seo'
import id from './id.json'
import en from './en.json'

const initial =
  (typeof window !== 'undefined'
    ? window.localStorage.getItem('locale')
    : null) ?? 'id'

const i18n = createI18n({
  legacy: false,
  locale: initial,
  fallbackLocale: 'id',
  messages: { id, en },
})

watch(
  () => i18n.global.locale.value,
  (loc) => {
    // persist
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('locale', String(loc))
    }
    // <html lang="...">
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', loc === 'id' ? 'id' : 'en')
    }
    // og:locale
    setOgLocale(loc === 'id' ? 'id_ID' : 'en_US')
  },
  { immediate: true }
)

export default i18n
