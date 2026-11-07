export type Theme = 'dark' | 'light'

export const THEME_STORAGE_KEY = 'storely-theme'

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function useTheme() {
  const theme = useState<Theme>('theme', () => 'dark')
  const isDark = computed(() => theme.value === 'dark')

  function applyTheme(next: Theme) {
    theme.value = next
    document.documentElement.classList.toggle('dark', next === 'dark')
    try {
      localStorage.setItem(THEME_STORAGE_KEY, next)
    } catch {
      /* storage unavailable: preference just won't persist */
    }
  }

  /**
   * Switch theme. When `origin` is given (e.g. the clicked button's centre) the new theme
   * is revealed as an expanding circle from that point; otherwise it swaps from the screen centre.
   */
  function setTheme(next: Theme, origin?: { x: number; y: number }) {
    if (next === theme.value) return

    if (prefersReducedMotion()) {
      applyTheme(next)
      return
    }

    if (!document.startViewTransition) {
      // Fallback: brief colour cross-fade
      const root = document.documentElement
      root.classList.add('theme-transition')
      applyTheme(next)
      window.setTimeout(() => root.classList.remove('theme-transition'), 300)
      return
    }

    const x = origin?.x ?? window.innerWidth / 2
    const y = origin?.y ?? window.innerHeight / 2
    const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y))

    const transition = document.startViewTransition(async () => {
      applyTheme(next)
      await nextTick()
    })

    transition.ready
      .then(() => {
        document.documentElement.animate(
          { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
          {
            duration: 450,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            pseudoElement: '::view-transition-new(root)',
          },
        )
      })
      .catch(() => {})
  }

  function toggleTheme(origin?: { x: number; y: number }) {
    setTheme(isDark.value ? 'light' : 'dark', origin)
  }

  return { theme, isDark, setTheme, toggleTheme }
}
