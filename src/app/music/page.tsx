'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { Play, Pause } from 'lucide-react'

// TODO: wire up real audio src + cover art once recordings are available
const TRACKS = [
  { title: 'Hallelujah (Live)', meta: 'Sunday Service — 2026', duration: '4:12' },
  { title: 'Great Is Thy Faithfulness', meta: 'Easter Special — 2026', duration: '5:03' },
  { title: 'We Worship You', meta: 'Christmas Concert — 2025', duration: '3:48' },
  { title: 'In His Presence', meta: 'Youth Convention — 2025', duration: '6:21' },
  { title: 'Mighty God', meta: 'Sunday Service — 2025', duration: '4:55' },
  { title: 'Holy, Holy, Holy', meta: 'Anniversary Concert — 2024', duration: '5:30' },
]

export default function MusicPage() {
  const [playing, setPlaying] = useState<number | null>(null)

  return (
    <>
      <Nav />
      <main className="flex-1 pt-32 sm:pt-40">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 pb-24">

          <Reveal>
            <p className="font-display text-[11px] tracking-[0.25em] uppercase text-gold mb-4 text-center">Our Sound</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-text mb-4 text-center">
              Music
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-text-muted text-[15px] leading-relaxed text-center max-w-md mx-auto mb-16">
              Worship recorded live, the way it was sung — unedited hearts in the room with us.
            </p>
          </Reveal>

          <div className="flex flex-col gap-2">
            {TRACKS.map((track, i) => (
              <Reveal key={track.title} delay={i * 0.04}>
                <button
                  onClick={() => setPlaying(playing === i ? null : i)}
                  className="w-full flex items-center gap-5 border border-border rounded-sm px-5 sm:px-7 py-5 hover:border-gold-dim transition-colors text-left group"
                >
                  <div className="w-11 h-11 rounded-full border border-gold/40 flex items-center justify-center shrink-0 group-hover:bg-gold-faint transition-colors">
                    {playing === i ? (
                      <Pause size={14} className="text-gold" fill="currentColor" />
                    ) : (
                      <Play size={14} className="text-gold" fill="currentColor" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-[15px] text-text truncate">{track.title}</h3>
                    <p className="text-[12px] text-text-dim">{track.meta}</p>
                  </div>
                  <span className="font-display text-[12px] text-text-dim shrink-0">{track.duration}</span>
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="text-center text-[12px] text-text-dim mt-10">
              More recordings added after every major service — check back soon.
            </p>
          </Reveal>

        </div>
      </main>
      <Footer />
    </>
  )
}
