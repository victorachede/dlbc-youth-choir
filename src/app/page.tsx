import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import ImagePlaceholder from '@/components/ImagePlaceholder'

export default function HomePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">

        {/* ── HERO ── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden">
          {/* TODO: replace with a real choir photo/video background once available */}
          <div className="absolute inset-0 bg-dark">
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(ellipse 70% 60% at 50% 20%, rgba(201,168,76,0.08) 0%, transparent 70%)',
              }}
            />
          </div>

          <div className="relative z-10 max-w-2xl">
            <Reveal>
              <p className="font-display text-[11px] tracking-[0.25em] uppercase text-gold mb-6">
                Deeper Life Bible Church — Makurdi
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="font-display font-semibold leading-[1.05] tracking-tight text-text mb-6" style={{ fontSize: 'clamp(2.4rem, 7vw, 4.5rem)' }}>
                Voices<br />
                <span className="font-accent italic font-light text-gold">Lifted</span><br />
                In Grace
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="text-text-muted text-[15px] sm:text-[16px] leading-relaxed mb-10 max-w-md mx-auto">
                One choir. One Spirit. One sound that moves heaven.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link href="/music" className="bg-gold text-dark text-[13px] tracking-wide font-medium px-6 py-3 rounded-sm hover:bg-gold/90 transition-colors">
                  Listen Now
                </Link>
                <Link href="/join" className="border border-text/25 text-text text-[13px] tracking-wide px-6 py-3 rounded-sm hover:bg-text/5 transition-colors">
                  Join the Choir
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="absolute bottom-8 flex flex-col items-center gap-2 text-text-dim text-[10px] tracking-[0.2em] uppercase">
            <span>Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-gold to-transparent" />
          </div>
        </section>

        {/* ── ABOUT TEASER ── */}
        <section className="py-24 sm:py-32 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <p className="font-display text-[11px] tracking-[0.25em] uppercase text-gold mb-4">Who We Are</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h2 className="font-display font-semibold text-3xl sm:text-4xl text-text mb-6 leading-tight">
                  More Than Music.<br /><em className="font-accent italic font-light text-gold">A Ministry.</em>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-text-muted text-[15px] leading-[1.9] mb-4">
                  The DLBC Makurdi Youth Choir is a Spirit-led worship ministry born out of a hunger
                  for authentic praise. We are young voices committed to excellence in worship, discipleship
                  in community, and the glory of God through every note we sing.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <div className="grid grid-cols-3 gap-4 mt-10 border-t border-border pt-8">
                  <div>
                    <span className="font-display text-2xl text-gold block">460+</span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-text-dim">Members</span>
                  </div>
                  <div>
                    <span className="font-display text-2xl text-gold block">5+</span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-text-dim">Years</span>
                  </div>
                  <div>
                    <span className="font-display text-2xl text-gold block">100+</span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-text-dim">Performances</span>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <Link href="/about" className="inline-block mt-8 text-[13px] text-gold border-b border-gold/30 hover:border-gold transition-colors">
                  Read our story →
                </Link>
              </Reveal>
            </div>
            <Reveal direction="right">
              <ImagePlaceholder label="Choir Photo" aspect="4/5" />
            </Reveal>
          </div>
        </section>

        {/* ── MUSIC TEASER ── */}
        <section className="py-24 sm:py-32 px-6 bg-dark-2 border-t border-border">
          <div className="max-w-5xl mx-auto">
            <Reveal>
              <p className="font-display text-[11px] tracking-[0.25em] uppercase text-gold mb-4 text-center">Our Sound</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl text-text mb-14 text-center">Latest Releases</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { title: 'Hallelujah (Live)', meta: 'Sunday Service — 2026' },
                { title: 'Great Is Thy Faithfulness', meta: 'Easter Special — 2026' },
                { title: 'We Worship You', meta: 'Christmas Concert — 2025' },
              ].map((track, i) => (
                <Reveal key={track.title} delay={i * 0.08}>
                  <div className="border border-border p-6 rounded-sm hover:border-gold-dim transition-colors">
                    <div className="w-14 h-14 rounded-full border border-gold/40 flex items-center justify-center mb-5">
                      <div className="w-4 h-4 rounded-full bg-gold/30" />
                    </div>
                    <h3 className="font-display text-[15px] text-text mb-1">{track.title}</h3>
                    <p className="text-[12px] text-text-dim mb-4">{track.meta}</p>
                    {/* TODO: wire up real audio src once recordings are available */}
                    <button className="text-[12px] text-gold tracking-wide flex items-center gap-2">
                      <span>▶</span> Play
                    </button>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.3}>
              <div className="text-center mt-12">
                <Link href="/music" className="text-[13px] text-gold border-b border-gold/30 hover:border-gold transition-colors">
                  Hear more →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── EVENTS TEASER ── */}
        <section className="py-24 sm:py-32 px-6">
          <div className="max-w-3xl mx-auto">
            <Reveal>
              <p className="font-display text-[11px] tracking-[0.25em] uppercase text-gold mb-4 text-center">What&apos;s Coming</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl text-text mb-14 text-center">Upcoming Events</h2>
            </Reveal>
            <div className="flex flex-col gap-3">
              {[
                { day: '18', month: 'May', name: 'Sunday Worship Service', location: 'DLBC Makurdi Main Auditorium', time: '8:00 AM' },
                { day: '01', month: 'Jun', name: 'Youth Convention Choir Night', location: 'DLBC Makurdi Main Auditorium', time: '6:00 PM' },
                { day: '15', month: 'Jun', name: 'Choir Rehearsal & Fellowship', location: 'DLBC Youth Hall', time: '4:00 PM' },
              ].map((event, i) => (
                <Reveal key={event.name} delay={i * 0.06}>
                  <div className="flex items-center gap-6 border border-border rounded-sm px-6 py-5 hover:border-gold-dim transition-colors">
                    <div className="text-center shrink-0 border-r border-border pr-6">
                      <span className="font-display text-xl text-gold block leading-none">{event.day}</span>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-text-dim">{event.month}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-[15px] text-text">{event.name}</h3>
                      <p className="text-[12px] text-text-dim">{event.location}</p>
                    </div>
                    <div className="text-[12px] text-text-muted shrink-0">{event.time}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.25}>
              <div className="text-center mt-12">
                <Link href="/events" className="text-[13px] text-gold border-b border-gold/30 hover:border-gold transition-colors">
                  See all events →
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── JOIN CTA ── */}
        <section className="py-24 sm:py-32 px-6 bg-dark-2 border-t border-border text-center">
          <div className="max-w-xl mx-auto">
            <Reveal>
              <p className="font-display text-[11px] tracking-[0.25em] uppercase text-gold mb-4">Be Part of It</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl text-text mb-5 leading-tight">
                Ready to Add<br /><em className="font-accent italic font-light text-gold">Your Voice?</em>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-text-muted text-[15px] leading-relaxed mb-9">
                We welcome every voice — trained or untrained. What matters is a heart for worship and a willingness to grow.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <Link href="/join" className="inline-block bg-gold text-dark text-[13px] tracking-wide font-medium px-7 py-3.5 rounded-sm hover:bg-gold/90 transition-colors">
                Submit Application
              </Link>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
