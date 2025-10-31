import { createI18n } from 'vue-i18n'
import id from './id.json'
import en from './en.json'

export default createI18n({
  legacy: false,
  locale: 'id',
  fallbackLocale: 'en',
  messages: { id, en },
})
