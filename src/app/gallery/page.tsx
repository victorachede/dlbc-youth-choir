'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import PhotoTile from '@/components/PhotoTile'
import Lightbox from '@/components/Lightbox'

const HERO_PHOTOS = [
  { src: '/photos/string-orchestra.jpg', caption: 'Strings — Combine Service' },
  { src: '/photos/choir-group-solo.jpg', caption: 'Full Choir in Worship' },
  { src: '/photos/lineup-formal.jpg', caption: 'Robed & Ready' },
  { src: '/photos/soloist-mic.jpg', caption: 'A Lifted Voice' },
  { src: '/photos/sax-solo.jpg', caption: 'Saxophone Solo' },
]

const PHOTOS = [
  { src: '/photos/preacher-mic.jpg', caption: 'The Word Preached', aspect: '3/2' },
  { src: '/photos/keyboard-trio.jpg', caption: 'Keys Section', aspect: '3/2' },
  { src: '/photos/woodwind-group.jpg', caption: 'Woodwinds', aspect: '3/2' },
  { src: '/photos/cameraman.jpg', caption: 'Behind the Scenes', aspect: '3/2' },
  { src: '/photos/brass-trio.jpg', caption: 'Brass Section', aspect: '3/2' },
  { src: '/photos/crowd-stadium.jpg', caption: 'The Congregation', aspect: '3/2' },
  { src: '/photos/flute-duet.jpg', caption: 'Flute Duet', aspect: '3/4' },
  { src: '/photos/duet-mics.jpg', caption: 'Harmony', aspect: '3/2' },
  { src: '/photos/blue-choir-formation.jpg', caption: 'State Combine Service', aspect: '3/2' },
  { src: '/photos/keyboard-trio-tent.jpg', caption: 'Sound Check', aspect: '3/2' },
  { src: '/photos/speaker-lineup.jpg', caption: 'Addressing the Choir', aspect: '3/2' },
  { src: '/photos/choir-lineup-boys.jpg', caption: 'Standing in Order', aspect: '3/2' },
]

// One shared list so the lightbox can step through every photo on the page,
// hero mosaic included, regardless of which grid it was clicked from.
const ALL_PHOTOS = [...HERO_PHOTOS, ...PHOTOS]

export default function GalleryPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <>
      <Nav />
      <main className="flex-1">

        {/* ── HERO — the photos themselves are the header, a title floats
            over a mosaic instead of introducing content below it. ── */}
        <section className="pt-24 pb-3 px-3 sm:px-4">
          <div className="max-w-6xl mx-auto relative">
            <div className="grid grid-cols-4 grid-rows-2 gap-3 sm:gap-4 h-[60vh] sm:h-[65vh]">
              <Reveal className="col-span-2 row-span-2">
                <PhotoTile
                  src={HERO_PHOTOS[0].src}
                  alt={HERO_PHOTOS[0].caption}
                  caption={HERO_PHOTOS[0].caption}
                  className="rounded-sm h-full"
                  sizes="50vw"
                  priority
                  onClick={() => setOpenIndex(0)}
                />
              </Reveal>
              <Reveal delay={0.05} className="col-span-1 row-span-1">
                <PhotoTile src={HERO_PHOTOS[1].src} alt={HERO_PHOTOS[1].caption} caption={HERO_PHOTOS[1].caption} className="rounded-sm h-full" sizes="25vw" priority onClick={() => setOpenIndex(1)} />
              </Reveal>
              <Reveal delay={0.1} className="col-span-1 row-span-1">
                <PhotoTile src={HERO_PHOTOS[2].src} alt={HERO_PHOTOS[2].caption} caption={HERO_PHOTOS[2].caption} className="rounded-sm h-full" sizes="25vw" priority onClick={() => setOpenIndex(2)} />
              </Reveal>
              <Reveal delay={0.15} className="col-span-1 row-span-1">
                <PhotoTile src={HERO_PHOTOS[3].src} alt={HERO_PHOTOS[3].caption} caption={HERO_PHOTOS[3].caption} className="rounded-sm h-full" sizes="25vw" onClick={() => setOpenIndex(3)} />
              </Reveal>
              <Reveal delay={0.2} className="col-span-1 row-span-1">
                <PhotoTile src={HERO_PHOTOS[4].src} alt={HERO_PHOTOS[4].caption} caption={HERO_PHOTOS[4].caption} className="rounded-sm h-full" sizes="25vw" onClick={() => setOpenIndex(4)} />
              </Reveal>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center px-6 py-8 rounded-sm bg-white/70 backdrop-blur-sm">
                <p className="font-display text-[11px] tracking-[0.25em] uppercase text-blue mb-3">Moments</p>
                <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl text-ink mb-3">
                  Gallery
                </h1>
                <p className="text-ink-muted text-[15px] max-w-sm mx-auto">
                  Glimpses of worship, fellowship, and life together as a choir family.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 sm:px-10 pb-24 pt-16">

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {PHOTOS.map((photo, i) => (
              <Reveal key={photo.src} delay={(i % 3) * 0.06}>
                <PhotoTile
                  src={photo.src}
                  alt={photo.caption}
                  caption={photo.caption}
                  aspect={photo.aspect}
                  className="rounded-sm"
                  onClick={() => setOpenIndex(HERO_PHOTOS.length + i)}
                />
              </Reveal>
            ))}
          </div>

        </div>
      </main>
      <Footer />

      <Lightbox
        photos={ALL_PHOTOS}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onNavigate={setOpenIndex}
      />
    </>
  )
}
