import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import ImagePlaceholder from '@/components/ImagePlaceholder'

// TODO: replace each placeholder with a real photo once available.
// Aspect varies slightly per item to keep the grid from feeling too uniform —
// keep that variation when swapping in real photos for the best visual result.
const PHOTOS = [
  { label: 'Sunday Service', aspect: '4/5' },
  { label: 'Youth Convention', aspect: '1/1' },
  { label: 'Rehearsal Night', aspect: '4/5' },
  { label: 'Christmas Concert', aspect: '1/1' },
  { label: 'Choir Retreat', aspect: '4/5' },
  { label: 'Easter Special', aspect: '1/1' },
  { label: 'Anniversary Concert', aspect: '4/5' },
  { label: 'Fellowship Evening', aspect: '1/1' },
  { label: 'Sunday Service', aspect: '4/5' },
]

const HERO_PHOTOS = PHOTOS.slice(0, 5)

export default function GalleryPage() {
  const rest = PHOTOS.slice(5)

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
                <ImagePlaceholder label={HERO_PHOTOS[0].label} className="rounded-sm h-full" />
              </Reveal>
              <Reveal delay={0.05} className="col-span-1 row-span-1">
                <ImagePlaceholder label={HERO_PHOTOS[1].label} className="rounded-sm h-full" />
              </Reveal>
              <Reveal delay={0.1} className="col-span-1 row-span-1">
                <ImagePlaceholder label={HERO_PHOTOS[2].label} className="rounded-sm h-full" />
              </Reveal>
              <Reveal delay={0.15} className="col-span-1 row-span-1">
                <ImagePlaceholder label={HERO_PHOTOS[3].label} className="rounded-sm h-full" />
              </Reveal>
              <Reveal delay={0.2} className="col-span-1 row-span-1">
                <ImagePlaceholder label={HERO_PHOTOS[4].label} className="rounded-sm h-full" />
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
            {rest.map((photo, i) => (
              <Reveal key={`${photo.label}-${i}`} delay={(i % 3) * 0.06}>
                <ImagePlaceholder label={photo.label} aspect={photo.aspect} className="rounded-sm" />
              </Reveal>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
