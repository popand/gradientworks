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
