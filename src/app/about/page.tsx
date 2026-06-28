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
      <main className="flex-1 pt-32 sm:pt-40">
        <div className="max-w-5xl mx-auto px-6 sm:px-10 pb-24">

          {/* ── INTRO ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <div>
              <Reveal>
                <p className="font-display text-[11px] tracking-[0.25em] uppercase text-gold mb-4">Who We Are</p>
              </Reveal>
              <Reveal delay={0.05}>
                <h1 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-text mb-8 leading-tight">
                  More Than Music.<br /><em className="font-accent italic font-light text-gold">A Ministry.</em>
                </h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-text-muted text-[15px] leading-[1.9] mb-5">
                  The DLBC Makurdi Youth Choir is a Spirit-led worship ministry born out of a deep hunger
                  for authentic, heaven-touching praise. We are young voices — raw, refined, and resolute —
                  committed to excellence in worship and the glory of God through every note we sing.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-text-muted text-[15px] leading-[1.9]">
                  We don&apos;t perform. We pray with our voices. Every rehearsal, every Sunday, every stage is an altar.
                </p>
              </Reveal>
            </div>
            <Reveal direction="right">
              <ImagePlaceholder label="Choir Photo" aspect="4/5" />
            </Reveal>
          </div>

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
                  className={`p-7 sm:p-10 text-center hover:bg-dark-3 transition-colors ${i < 3 ? 'border-r border-border' : ''}`}
                >
                  <span className="font-display text-3xl text-gold block mb-3">{stat.number}</span>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-text-dim">{stat.label}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* ── STORY ── */}
          <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-10 sm:gap-16 mb-24 pt-16 border-t border-border">
            <Reveal>
              <p className="font-display text-[11px] tracking-[0.22em] uppercase text-gold">Our Story</p>
            </Reveal>
            <div>
              <Reveal>
                <h3 className="font-accent italic font-light text-2xl sm:text-3xl text-text mb-7 leading-snug">
                  Born from a hunger<br />the world couldn&apos;t satisfy.
                </h3>
              </Reveal>
              <Reveal delay={0.05}>
                <p className="text-text-muted text-[15px] leading-[1.95] mb-5 max-w-xl">
                  It started with a handful of young people who refused to let worship be ordinary. In the early days,
                  there were no microphones, no arrangements, no stage — just voices raised in a small hall in Makurdi,
                  believing that God inhabits the praise of His people.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-text-muted text-[15px] leading-[1.95] mb-5 max-w-xl">
                  Under the founding vision of Choir Master Ezekiel Ode, what began as a small ensemble grew into one
                  of the most distinctive youth worship ministries in Benue State. Not because of talent alone, but
                  because of intentionality — a decision to treat music as sacred, rehearsal as discipline, and community
                  as covenant.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p className="text-text-muted text-[15px] leading-[1.95] max-w-xl">
                  Today, the DLBC Makurdi Youth Choir stands as a testimony: that when young people surrender their gifts
                  to God, He multiplies them beyond imagination.
                </p>
              </Reveal>
            </div>
          </div>

          {/* ── VALUES ── */}
          <div className="mb-24">
            <Reveal>
              <p className="font-display text-[11px] tracking-[0.25em] uppercase text-gold mb-4 text-center">What Drives Us</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl text-text mb-14 text-center">Our Core Values</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {VALUES.map((value, i) => (
                <Reveal key={value.title} delay={i * 0.05}>
                  <div className="border border-border rounded-sm p-7 h-full hover:border-gold-dim transition-colors">
                    <span className="font-display text-gold/40 text-2xl block mb-4">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-[16px] text-text mb-3">{value.title}</h3>
                    <p className="text-text-muted text-[13.5px] leading-relaxed">{value.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* ── PULL QUOTE ── */}
          <Reveal>
            <div className="text-center py-16 border-y border-border mb-24">
              <span className="font-accent text-5xl text-gold/30 block mb-2">&ldquo;</span>
              <p className="font-accent italic font-light text-xl sm:text-2xl text-text max-w-2xl mx-auto leading-snug mb-5">
                Music is not what we do on Sundays. It is who we are every day —
                people whose lives are a continuous act of worship.
              </p>
              <span className="text-[12px] tracking-wide text-text-dim">— Ezekiel Ode, Choir Master</span>
            </div>
          </Reveal>

          {/* ── LEADERSHIP ── */}
          <div>
            <Reveal>
              <p className="font-display text-[11px] tracking-[0.25em] uppercase text-gold mb-4">The Team</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl text-text mb-14">Leadership</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {LEADERS.map((leader, i) => (
                <Reveal key={leader.name} delay={i * 0.06}>
                  <div className="text-center">
                    {/* TODO: replace initials avatar with a real headshot once available */}
                    <div className="w-20 h-20 mx-auto rounded-full border border-gold/40 flex items-center justify-center font-display text-gold text-lg mb-4">
                      {leader.initials}
                    </div>
                    <h4 className="font-display text-[15px] text-text">{leader.name}</h4>
                    <p className="text-[12px] text-text-dim">{leader.role}</p>
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
