import tailwindcss from "@tailwindcss/vite";

// Shared base for every Nuxt app in the monorepo (merchant, storefront, platform-admin, marketing).
// Apps opt in with: `extends: ['@storely/core']`
export default defineNuxtConfig({
  extends: ["@storely/ui"],
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
    "@pinia/nuxt",
    "@vee-validate/nuxt",
    "@nuxt/icon",
  ],
  // English (LTR) is default, Arabic (RTL) is the second locale — see docs design.md §8
  i18n: {
    defaultLocale: "en",
    strategy: "prefix",
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "i18n_locale",
      redirectOn: "root",
    },
    locales: [
      {
        code: "en",
        language: "en-US",
        dir: "ltr",
        name: "English",
        file: "en.json",
      },
      {
        code: "ar",
        language: "ar-EG",
        dir: "rtl",
        name: "العربية",
        file: "ar.json",
      },
    ],
  },
  // `useForm`, `useField`, `Form`, `Field`, `ErrorMessage` are auto-imported
  veeValidate: {
    autoImports: true,
  },
  icon: {
    mode: "css",
    cssLayer: "base",
  },
  vite: {
    plugins: [tailwindcss()],
  },
  router: {
    options: {
      scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) return savedPosition;
        if (_to.hash) return { el: _to.hash, behavior: "smooth" };
        return { top: 0, left: 0, behavior: "smooth" };
      },
    },
  },
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { charset: "utf-8" },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },
});
