import i18n from '@/locales'

export const required = (v: string | number) => !!v || i18n.global.t('validation.fieldIsRequired')
export const emailValidation = (v: string) =>
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    v
  ) || i18n.global.t('validation.emailIsInvalid')
export const minChars = (min: number) => (v: string) =>
  v.length >= min || i18n.global.t('validation.minChars', { count: min })
export const maxChars = (max: number) => (v: string) =>
  v.length <= max || i18n.global.t('validation.maxChars', { count: max })
