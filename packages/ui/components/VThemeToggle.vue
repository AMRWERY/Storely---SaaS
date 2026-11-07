<template>
  <button
    type="button"
    class="relative inline-flex size-9 items-center justify-center rounded-lg border border-border-subtle bg-surface text-secondary transition-colors duration-(--motion-standard) hover:bg-surface-hover hover:text-primary"
    :aria-label="isDark ? t('common.switchToLight') : t('common.switchToDark')"
    :title="isDark ? t('common.switchToLight') : t('common.switchToDark')"
    @click="onClick"
  >
    <!-- Icons are chosen with the `dark:` variant so SSR/hydration never mismatch -->
    <Icon name="lucide:sun" size="18" class="hidden dark:block" />
    <Icon name="lucide:moon" size="18" class="dark:hidden" />
  </button>
</template>

<script lang="ts" setup>
const { t } = useI18n()
const { isDark, toggleTheme } = useTheme()

function onClick(event: MouseEvent) {
  const el = event.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()
  toggleTheme({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
}
</script>
