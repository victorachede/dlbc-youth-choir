import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'

const EVENTS = [
  { day: '18', month: 'May', name: 'Sunday Worship Service', location: 'DLBC Makurdi Main Auditorium', time: '8:00 AM' },
  { day: '01', month: 'Jun', name: 'Youth Convention Choir Night', location: 'DLBC Makurdi Main Auditorium', time: '6:00 PM' },
  { day: '15', month: 'Jun', name: 'Choir Rehearsal & Fellowship', location: 'DLBC Youth Hall', time: '4:00 PM' },
  { day: '29', month: 'Jun', name: 'Sunday Worship Service', location: 'DLBC Makurdi Main Auditorium', time: '8:00 AM' },
  { day: '13', month: 'Jul', name: 'Mid-Year Thanksgiving Concert', location: 'DLBC Makurdi Main Auditorium', time: '5:00 PM' },
]

export default function EventsPage() {
  const [next, ...rest] = EVENTS

  return (
    <>
      <Nav />
      <main className="flex-1">

        {/* ── HERO — the next event pulled out front, data-first rather
            than atmospheric (the other heroes lean on photo/color/motion;
            this one leans on being immediately useful). ── */}
        <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 border-b border-border">
          <div className="max-w-3xl mx-auto px-6 sm:px-10 text-center">
            <Reveal>
              <p className="font-display text-[11px] tracking-[0.25em] uppercase text-blue mb-4">What&apos;s Coming</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="font-display font-semibold text-4xl sm:text-5xl lg:text-6xl text-ink mb-10">
                Events
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="inline-flex items-center gap-6 sm:gap-8 border border-blue rounded-sm px-6 sm:px-10 py-6 sm:py-8 bg-blue-faint">
                <div className="text-center shrink-0">
                  <span className="font-display text-4xl sm:text-5xl text-blue block leading-none">{next.day}</span>
                  <span className="text-[11px] tracking-[0.2em] uppercase text-blue/70">{next.month}</span>
                </div>
                <div className="text-left border-l border-blue/25 pl-6 sm:pl-8">
                  <p className="text-[10px] tracking-[0.2em] uppercase text-ink-dim mb-1.5">Up Next</p>
                  <h2 className="font-display text-lg sm:text-xl text-ink mb-1">{next.name}</h2>
                  <p className="text-[13px] text-ink-muted">{next.location} &middot; {next.time}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <div className="max-w-3xl mx-auto px-6 sm:px-10 pb-24 pt-16">

          <Reveal>
            <p className="text-[11px] tracking-[0.2em] uppercase text-ink-dim mb-6">Also Coming Up</p>
          </Reveal>

          <div className="flex flex-col gap-3">
            {rest.map((event, i) => (
              <Reveal key={`${event.name}-${i}`} delay={i * 0.05}>
                <div className="flex items-center gap-6 border border-border rounded-sm px-6 py-6 hover:border-blue-dim transition-colors">
                  <div className="text-center shrink-0 border-r border-border pr-6">
                    <span className="font-display text-2xl text-blue block leading-none">{event.day}</span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-ink-dim">{event.month}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-[16px] text-ink mb-1">{event.name}</h3>
                    <p className="text-[12.5px] text-ink-dim">{event.location}</p>
                  </div>
                  <div className="text-[12.5px] text-ink-muted shrink-0">{event.time}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p className="text-center text-[12px] text-ink-dim mt-10">
              Event details may change closer to the date — check back for updates.
            </p>
          </Reveal>

        </div>
      </main>
      <Footer />
    </>
  )
}
