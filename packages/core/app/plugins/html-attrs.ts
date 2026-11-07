// Sets <html lang> and <html dir> from the active locale (Arabic => rtl), on server and client.
export default defineNuxtPlugin((nuxtApp) => {
  const i18n = nuxtApp.$i18n as { locale: Ref<string>; localeProperties: Ref<{ language?: string; dir?: 'ltr' | 'rtl' }> }

  useHead({
    htmlAttrs: {
      lang: computed(() => i18n.localeProperties.value.language ?? i18n.locale.value),
      dir: computed(() => i18n.localeProperties.value.dir ?? 'ltr'),
    },
  })
})
