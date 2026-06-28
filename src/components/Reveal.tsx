'use client'

import { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type Direction = 'up' | 'left' | 'right'

const OFFSETS: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 28 },
  left: { x: -28 },
  right: { x: 28 },
}

/**
 * Scroll-triggered reveal — fades + slides an element in once, the first
 * time it enters the viewport. Replaces the original site's manual
 * IntersectionObserver wiring (`.reveal` / `.reveal-left` / `.reveal-right`
 * classes toggled by hand) with the same visual result via framer-motion,
 * so animation lives in one place instead of being re-implemented per page.
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className,
}: {
  children: ReactNode
  direction?: Direction
  delay?: number
  className?: string
}) {
  const reduceMotion = useReducedMotion()
  const offset = OFFSETS[direction]

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x ?? 0, y: offset.y ?? 0 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -40px 0px', amount: 0.08 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
