import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import ImagePlaceholder from '@/components/ImagePlaceholder'

const VALUES = [
  {
    title: 'Excellence',
    text: 'We bring our best to every rehearsal and every service. Excellence is not pride — it is reverence. God deserves nothing less than our finest.',
  },
  {
    title: 'Authenticity',
    text: 'We sing what we believe and believe what we sing. Our worship is not performance — it is an honest outpouring of hearts that have encountered the living God.',
  },
  {
    title: 'Community',
    text: 'We are more than a choir. We are a family. We carry each other through life, not just through harmonies. Brotherhood and sisterhood are non-negotiable.',
  },
  {
    title: 'Discipleship',
    text: 'Every member is a disciple first, a musician second. We grow spiritually together — through the Word, through prayer, and through intentional accountability.',
  },
  {
    title: 'Humility',
    text: 'The best voices in the room serve the song, not themselves. We submit our gifts to the Holy Spirit and to one another, always.',
  },
  {
    title: 'Legacy',
    text: 'We are building something that outlasts us. Every rehearsal deposits into a legacy of worship that will influence generations in Makurdi and beyond.',
  },
]

const LEADERS = [
  { initials: 'EO', name: 'Ezekiel Ode', role: 'Choir Master' },
  { initials: 'DO', name: 'David Oche', role: 'Assistant Choir Master' },
  { initials: 'DA', name: 'David Agber', role: 'Music Director' },
]

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">

        {/* ── HERO — editorial split, photo framed off-axis ── */}
        <section className="pt-32 sm:pt-40 pb-20 sm:pb-28 bg-surface border-b border-border overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <Reveal>
                <p className="font-display text-[11px] tracking-[0.25em] uppercase text-blue mb-4">Who We Are</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl text-ink mb-8 leading-tight">
                  More Than Music.<br /><em className="font-accent italic font-light text-blue">A Ministry.</em>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-ink-muted text-[15px] leading-[1.9] mb-5 max-w-md">
                  The DLBC Makurdi Youth Choir is a Spirit-led worship ministry born out of a deep hunger
                  for authentic, heaven-touching praise. We are young voices — raw, refined, and resolute —
                  committed to excellence in worship and the glory of God through every note we sing.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-ink-muted text-[15px] leading-[1.9] max-w-md">
                  We don&apos;t perform. We pray with our voices. Every rehearsal, every Sunday, every stage is an altar.
                </p>
              </Reveal>
            </div>
            <Reveal direction="right">
              {/* Offset frame behind the photo — the one purely decorative touch
                  that makes this read as a considered editorial spread rather
                  than just "text left, image right." */}
              <div className="relative">
                <div className="absolute -top-4 -right-4 bottom-4 left-4 border border-blue/25 rounded-sm -z-10" aria-hidden />
                <ImagePlaceholder label="Choir Photo" aspect="4/5" />
              </div>
            </Reveal>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 sm:px-10 pb-24 pt-24">

          {/* ── STATS ── */}
          <Reveal>
            <div className="grid grid-cols-2 sm:grid-cols-4 border border-border mb-24 rounded-sm overflow-hidden">
              {[
                { number: '460+', label: 'Members' },
                { number: '5+', label: 'Years Active' },
                { number: '100+', label: 'Performances' },
                { number: '12', label: 'Voice Sections' },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={`p-7 sm:p-10 text-center hover:bg-surface-2 transition-colors ${i < 3 ? 'border-r border-border' : ''}`}
                >
                  <span className="font-display text-3xl text-blue block mb-3">{stat.number}</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-ink-dim">{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── STORY ── */}
          <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-10 sm:gap-16 mb-24 pt-16 border-t border-border">
            <Reveal>
              <p className="font-display text-[11px] tracking-[0.22em] uppercase text-blue">Our Story</p>
            </Reveal>
            <div>
              <Reveal>
                <h3 className="font-accent italic font-light text-2xl sm:text-3xl text-ink mb-7 leading-snug">
                  Born from a hunger<br />the world couldn&apos;t satisfy.
                </h3>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-ink-muted text-[15px] leading-[1.95] mb-5 max-w-xl">
                  It started with a handful of young people who refused to let worship be ordinary. In the early days,
                  there were no microphones, no arrangements, no stage — just voices raised in a small hall in Makurdi,
                  believing that God inhabits the praise of His people.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-ink-muted text-[15px] leading-[1.95] mb-5 max-w-xl">
                  Under the founding vision of Choir Master Ezekiel Ode, what began as a small ensemble grew into one
                  of the most distinctive youth worship ministries in Benue State. Not because of talent alone, but
                  because of intentionality — a decision to treat music as sacred, rehearsal as discipline, and community
                  as covenant.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-ink-muted text-[15px] leading-[1.95] max-w-xl">
                  Today, the DLBC Makurdi Youth Choir stands as a testimony: that when young people surrender their gifts
                  to God, He multiplies them beyond imagination.
                </p>
              </Reveal>
            </div>
          </div>

          {/* ── VALUES ── */}
          <div className="mb-24">
            <Reveal>
              <p className="font-display text-[11px] tracking-[0.25em] uppercase text-blue mb-4 text-center">What Drives Us</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink mb-14 text-center">Our Core Values</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {VALUES.map((value, i) => (
                <Reveal key={value.title} delay={i * 0.05}>
                  <div className="border border-border rounded-sm p-7 h-full hover:border-blue-dim transition-colors">
                    <span className="font-display text-blue/40 text-2xl block mb-4">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-[16px] text-ink mb-3">{value.title}</h3>
                    <p className="text-ink-muted text-[13.5px] leading-relaxed">{value.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ── PULL QUOTE ── */}
          <Reveal>
            <div className="text-center py-16 border-y border-border mb-24">
              <span className="font-accent text-5xl text-blue/30 block mb-2">&ldquo;</span>
              <p className="font-accent italic font-light text-xl sm:text-2xl text-ink max-w-2xl mx-auto leading-snug mb-5">
                Music is not what we do on Sundays. It is who we are every day —
                people whose lives are a continuous act of worship.
              </p>
              <span className="text-[12px] tracking-wide text-ink-dim">— Ezekiel Ode, Choir Master</span>
            </div>
          </Reveal>

          {/* ── LEADERSHIP ── */}
          <div>
            <Reveal>
              <p className="font-display text-[11px] tracking-[0.25em] uppercase text-blue mb-4">The Team</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl text-ink mb-14">Leadership</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {LEADERS.map((leader, i) => (
                <Reveal key={leader.name} delay={i * 0.06}>
                  <div className="text-center">
                    {/* TODO: replace initials avatar with a real headshot once available */}
                    <div className="w-20 h-20 mx-auto rounded-full border border-blue/40 flex items-center justify-center font-display text-blue text-lg mb-4">
                      {leader.initials}
                    </div>
                    <h4 className="font-display text-[15px] text-ink">{leader.name}</h4>
                    <p className="text-[12px] text-ink-dim">{leader.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
