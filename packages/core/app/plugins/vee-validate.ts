import { defineRule, configure } from 'vee-validate'
import { all } from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import en from '@vee-validate/i18n/dist/locale/en.json'
import ar from '@vee-validate/i18n/dist/locale/ar.json'

export default defineNuxtPlugin((nuxtApp) => {
  // Register every built-in rule (required, email, min, ...)
  Object.entries(all).forEach(([name, rule]) => defineRule(name, rule))

  const i18n = nuxtApp.$i18n as { locale: Ref<string> }

  configure({
    generateMessage: localize({ en, ar }),
  })
  setLocale(i18n.locale.value)

  // Keep validation messages in sync with the active app locale
  watch(i18n.locale, (code) => setLocale(code))
})
