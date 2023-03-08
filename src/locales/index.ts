import { createI18n } from 'vue-i18n'
import en from './langs/en.json'
import pl from './langs/pl.json'

const i18n = createI18n({
  locale: 'pl',
  messages: {
    en,
    pl
  },
  legacy: false
})

export default i18n
