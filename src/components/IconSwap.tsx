import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * Cross-fades between two icons instead of unmounting one and mounting the
 * other. Both children occupy the same grid cell, so the swap never shifts
 * layout. Spring with bounce 0 — an icon that overshoots reads as a glitch.
 *
 * MotionConfig reducedMotion="user" drops the scale, leaving a plain
 * cross-fade, which is the correct degradation here.
 */
const IconSwap = ({
  swapKey,
  children,
  className = '',
}: {
  /** Changing this triggers the swap. */
  swapKey: string
  children: ReactNode
  className?: string
}) => (
  <span className={`grid place-items-center ${className}`} aria-hidden="true">
    <AnimatePresence initial={false} mode="popLayout">
      <motion.span
        key={swapKey}
        initial={{ opacity: 0, transform: 'scale(0.25)', filter: 'blur(4px)' }}
        animate={{ opacity: 1, transform: 'scale(1)', filter: 'blur(0px)' }}
        exit={{ opacity: 0, transform: 'scale(0.25)', filter: 'blur(4px)' }}
        transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
        className="col-start-1 row-start-1 flex items-center justify-center"
      >
        {children}
      </motion.span>
    </AnimatePresence>
  </span>
)

export default IconSwap
