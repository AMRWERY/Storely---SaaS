<template>
  <div class="min-h-screen">
    <header class="flex items-center justify-between border-b border-border-subtle bg-surface px-6 py-3">
      <span class="font-semibold text-primary">Storely</span>
      <div class="flex items-center gap-2">
        <VLocaleToggle />
        <VThemeToggle />
      </div>
    </header>
    <main class="p-6">
      <slot />
    </main>
  </div>
</template>
