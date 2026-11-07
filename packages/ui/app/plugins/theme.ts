// Syncs the saved theme into app state before hydration and keeps <html class="dark"> in sync
// (dark is the default; the inline script in the layer config avoids a first-paint flash).
export default defineNuxtPlugin(() => {
  const theme = useState<Theme>('theme', () => 'dark')

  if (import.meta.client) {
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY)
      if (saved === 'light' || saved === 'dark') theme.value = saved
    } catch {
      /* ignore */
    }
  }

  useHead({
    htmlAttrs: { class: computed(() => (theme.value === 'dark' ? 'dark' : '')) },
  })
})
