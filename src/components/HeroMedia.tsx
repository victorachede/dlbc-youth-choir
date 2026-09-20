'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

export interface HeroSlide {
  type: 'video' | 'image'
  src: string
  /** Only used for images — how long this slide stays up before crossfading
   *  to the next one. A video slide advances on its own 'ended' event instead
   *  (with a safety-net timeout in case it never fires). */
  durationMs?: number
}

const DEFAULT_IMAGE_DURATION_MS = 5000
const VIDEO_SAFETY_TIMEOUT_MS = 20000
const CROSSFADE_MS = 1400

/**
 * Cycling hero background: plays a video, then crossfades through a photo
 * slideshow, looping the whole sequence — all on one shared overlay so the
 * hero text sitting on top never sees a contrast change no matter what's
 * playing underneath. Every layer is stacked with opacity (not swapped via
 * display/unmount), so transitions crossfade instead of popping, and the
 * text block is untouched by any of this — it lives in the page, not here.
 *
 * With no slides configured (the current state — no real footage/photos
 * exist for this choir yet), it falls back to the original static gradient
 * so the hero still looks intentional rather than broken. Drop real files
 * into /public/hero and pass them in via the `slides` prop to activate it —
 * see the HERO_SLIDES placeholder in page.tsx for the exact shape.
 */
export default function HeroMedia({ slides }: { slides: HeroSlide[] }) {
  const reduceMotion = useReducedMotion()
  const [index, setIndex] = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const current = slides[index]

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    if (!slides.length || reduceMotion || !current) return

    const ms = current.type === 'image'
      ? current.durationMs ?? DEFAULT_IMAGE_DURATION_MS
      : VIDEO_SAFETY_TIMEOUT_MS // fallback in case a video slide never fires onEnded (e.g. loop=true)

    timerRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, ms)

    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [index, slides, reduceMotion, current])

  return (
    <div className="absolute inset-0 bg-white overflow-hidden">
      {slides.length === 0 ? (
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 20%, rgba(57,87,128,0.07) 0%, transparent 70%)',
          }}
        />
      ) : (
        slides.map((slide, i) => {
          const active = i === index
          return (
            <div
              key={slide.src}
              aria-hidden={!active}
              className="absolute inset-0"
              style={{
                opacity: active ? 1 : 0,
                transition: `opacity ${CROSSFADE_MS}ms ease`,
                // Reduced motion: skip straight to the first slide, static, no cycling.
                display: reduceMotion && i !== 0 ? 'none' : undefined,
              }}
            >
              {slide.type === 'video' ? (
                <video
                  src={slide.src}
                  autoPlay
                  muted
                  loop={slides.length === 1}
                  playsInline
                  className="w-full h-full object-cover"
                  onEnded={() => {
                    if (active && slides.length > 1) setIndex((idx) => (idx + 1) % slides.length)
                  }}
                />
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={slide.src}
                  alt=""
                  className="w-full h-full object-cover"
                  style={
                    !reduceMotion && active
                      ? { animation: `heroKenBurns ${(current?.durationMs ?? DEFAULT_IMAGE_DURATION_MS) + CROSSFADE_MS}ms ease-out forwards` }
                      : undefined
                  }
                />
              )}
            </div>
          )
        })
      )}

      {/* Constant overlay, above every media layer — this is what actually
          guarantees the text never loses contrast as slides cycle. The hero
          copy is dark ink on a white theme now, so this is a light scrim
          (not a dark one) — it washes video/photos toward white so dark
          text stays readable, the same job a dark scrim did for light text
          on the old dark theme. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.78) 55%, rgba(255,255,255,0.92) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 20%, rgba(57,87,128,0.07) 0%, transparent 70%)',
        }}
      />
    </div>
  )
}
