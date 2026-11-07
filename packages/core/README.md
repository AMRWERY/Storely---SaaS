# @storely/core

Shared Nuxt layer. **All shared frontend libraries are installed here**, not in the apps.
Apps only add `@storely/core` (plus `nuxt`) and extend it:

```ts
export default defineNuxtConfig({ extends: ['@storely/core'] })
```

Provides: Tailwind v4 + tailwindcss-rtl, @nuxtjs/i18n (en/ar), VueUse, Pinia, VeeValidate (rules + i18n), Nuxt Icon.
To add a shared library: `pnpm --filter @storely/core add <pkg>`.
