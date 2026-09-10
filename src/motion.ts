/**
 * Shared motion values. Mirrors --ease-out in index.css so CSS transitions and
 * Motion animations use one curve instead of four hardcoded copies.
 */
export const EASE_OUT = [0.22, 1, 0.36, 1] as const

/** Section reveal: slow enough to read as deliberate, under the 300ms UI cap
 *  only because it is a scroll-triggered entrance, not an interaction. */
export const REVEAL_DURATION = 0.5

/** Delay between staggered siblings. */
export const STAGGER = 0.07

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/**
 * Scrolls to a section, and — the point of this existing at all — yields the
 * instant the user intervenes.
 *
 * A smooth scroll is an animation the user cannot grab: once it starts, a wheel
 * or touch gesture fights it instead of taking over, and on a page this long
 * the trip to #contact traps them for the whole ride. Cancelling on the first
 * real input turns that into an interruption. Cancelling is a scrollTo to the
 * current position with behavior 'auto', which supersedes the running smooth
 * scroll and leaves the page exactly where the eye already is.
 */
export function scrollToSection(href: string) {
  const el = document.querySelector(href)
  if (!el) return

  if (prefersReducedMotion()) {
    el.scrollIntoView({ behavior: 'auto', block: 'start' })
    return
  }

  const cancel = () => {
    window.scrollTo({ top: window.scrollY, behavior: 'auto' })
    teardown()
  }

  // scrollend fires when the smooth scroll arrives on its own; without it the
  // listeners would outlive the animation and cancel an unrelated later scroll.
  const teardown = () => {
    window.removeEventListener('wheel', cancel)
    window.removeEventListener('touchstart', cancel)
    window.removeEventListener('keydown', onKeyDown)
    window.removeEventListener('scrollend', teardown)
  }

  const onKeyDown = (e: KeyboardEvent) => {
    // Only keys that are themselves an attempt to scroll.
    if (
      ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '].includes(
        e.key
      )
    ) {
      cancel()
    }
  }

  window.addEventListener('wheel', cancel, { passive: true })
  window.addEventListener('touchstart', cancel, { passive: true })
  window.addEventListener('keydown', onKeyDown)
  window.addEventListener('scrollend', teardown)

  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
