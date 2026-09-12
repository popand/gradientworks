/**
 * Shared motion values, mirroring the Lemon design-system tokens in
 * src/styles/lemon/colors_and_type.css so CSS transitions and Motion
 * animations use one curve and one rhythm.
 *
 *   --ease-smooth  cubic-bezier(.2,.7,.3,1)   default for everything
 *   --dur-reveal   700ms                       scroll reveal
 *   --reveal-d1/2/3  80 / 160 / 240 ms         stagger between siblings
 */
export const EASE_SMOOTH = [0.2, 0.7, 0.3, 1] as const

/** Section reveal: opacity 0→1 with a 14 px rise. */
export const REVEAL_DURATION = 0.7
export const REVEAL_RISE = 14

/** Delay between staggered siblings. */
export const STAGGER = 0.08

/** The DS reveal, as Motion props. `delay` is in stagger steps (0, 1, 2 …). */
export const reveal = (step = 0) => ({
  initial: { opacity: 0, transform: `translateY(${REVEAL_RISE}px)` },
  animate: { opacity: 1, transform: 'translateY(0px)' },
  transition: { duration: REVEAL_DURATION, delay: step * STAGGER, ease: EASE_SMOOTH },
})

/** Same reveal, gated on an in-view flag (sections below the fold). */
export const revealWhen = (visible: boolean, step = 0) => ({
  initial: { opacity: 0, transform: `translateY(${REVEAL_RISE}px)` },
  animate: visible ? { opacity: 1, transform: 'translateY(0px)' } : {},
  transition: { duration: REVEAL_DURATION, delay: step * STAGGER, ease: EASE_SMOOTH },
})

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
