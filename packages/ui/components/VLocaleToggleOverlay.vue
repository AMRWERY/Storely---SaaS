<template>
  <Teleport to="body">
    <Transition name="overlay-fade">
      <div
        v-if="show"
        dir="ltr"
        class="fixed inset-0 z-[100] flex items-center justify-center bg-canvas backdrop-blur-xl"
        role="status"
        aria-live="polite"
      >
        <div class="animate-pulse-slow flex flex-col items-center gap-6">
          <!-- Logo -->
          <div class="flex items-center gap-4">
            <div
              class="flex size-16 items-center justify-center rounded-xl bg-brand-500 text-white shadow-2xl shadow-brand-500/20"
            >
              <Icon name="lucide:store" size="36" />
            </div>
            <h1 class="text-3xl leading-none font-bold tracking-tight text-primary">
              {{ t('app.name') }}
            </h1>
          </div>

          <!-- Loading indicator -->
          <div class="flex gap-1.5">
            <div class="animate-bounce size-2 rounded-full bg-brand-500/40" style="animation-delay: 0s" />
            <div class="animate-bounce size-2 rounded-full bg-brand-500/40" style="animation-delay: 0.1s" />
            <div class="animate-bounce size-2 rounded-full bg-brand-500/40" style="animation-delay: 0.2s" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
defineProps<{
  show: boolean
}>()

const { t } = useI18n()
</script>

<style scoped>
.overlay-fade-enter-active,
.overlay-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.overlay-fade-enter-from,
.overlay-fade-leave-to {
  opacity: 0;
  backdrop-filter: blur(0px);
}

.animate-pulse-slow {
  animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse-slow {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(0.98);
  }
}

@media (prefers-reduced-motion: reduce) {
  .overlay-fade-enter-active,
  .overlay-fade-leave-active {
    transition-duration: 1ms;
  }
  .animate-pulse-slow,
  .animate-bounce {
    animation: none;
  }
}
</style>
