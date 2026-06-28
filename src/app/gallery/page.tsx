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

export default function GalleryPage() {
  return (
    <>
      <Nav />
      <main className="flex-1 pt-32 sm:pt-40">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 pb-24">

          <Reveal>
            <p className="font-display text-[11px] tracking-[0.25em] uppercase text-gold mb-4 text-center">Moments</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-text mb-4 text-center">
              Gallery
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-text-muted text-[15px] leading-relaxed text-center max-w-md mx-auto mb-16">
              Glimpses of worship, fellowship, and life together as a choir family.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            {PHOTOS.map((photo, i) => (
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
