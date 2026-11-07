<template>
  <button
    type="button"
    class="inline-flex h-9 items-center gap-2 rounded-lg border border-border-subtle bg-surface px-3 text-sm font-medium text-secondary transition-colors duration-(--motion-standard) hover:bg-surface-hover hover:text-primary disabled:opacity-60"
    :aria-label="t('common.switchLanguage')"
    :title="t('common.switchLanguage')"
    :disabled="switching"
    @click="toggle"
  >
    <Icon name="lucide:languages" size="18" />
    <span>{{ nextLocale?.name }}</span>
  </button>

  <VLocaleToggleOverlay :show="overlayVisible" />
</template>

<script lang="ts" setup>
import type { LocaleObject } from '@nuxtjs/i18n'

const { t, locale, locales, setLocale } = useI18n()

const overlayVisible = useState('locale-overlay', () => false)
const switching = ref(false)

const nextLocale = computed(() =>
  (locales.value as LocaleObject[]).find((l) => l.code !== locale.value),
)

const wait = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms))

async function toggle() {
  const target = nextLocale.value
  if (!target || switching.value) return
  switching.value = true

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  overlayVisible.value = true
  await wait(reduced ? 0 : 320) // let the overlay cover the screen before the page flips direction
  try {
    await setLocale(target.code)
    await nextTick()
    await wait(reduced ? 0 : 600) // hold the brand name briefly, then reveal
  } finally {
    overlayVisible.value = false
    switching.value = false
  }
}
</script>
