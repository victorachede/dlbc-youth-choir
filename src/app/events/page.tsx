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
  return (
    <>
      <Nav />
      <main className="flex-1 pt-32 sm:pt-40">
        <div className="max-w-3xl mx-auto px-6 sm:px-10 pb-24">

          <Reveal>
            <p className="font-display text-[11px] tracking-[0.25em] uppercase text-gold mb-4 text-center">What&apos;s Coming</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl text-text mb-4 text-center">
              Events
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-text-muted text-[15px] leading-relaxed text-center max-w-md mx-auto mb-16">
              Join us for worship, fellowship, and the next chapter of what God is doing.
            </p>
          </Reveal>

          <div className="flex flex-col gap-3">
            {EVENTS.map((event, i) => (
              <Reveal key={`${event.name}-${i}`} delay={i * 0.05}>
                <div className="flex items-center gap-6 border border-border rounded-sm px-6 py-6 hover:border-gold-dim transition-colors">
                  <div className="text-center shrink-0 border-r border-border pr-6">
                    <span className="font-display text-2xl text-gold block leading-none">{event.day}</span>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-text-dim">{event.month}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-[16px] text-text mb-1">{event.name}</h3>
                    <p className="text-[12.5px] text-text-dim">{event.location}</p>
                  </div>
                  <div className="text-[12.5px] text-text-muted shrink-0">{event.time}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p className="text-center text-[12px] text-text-dim mt-10">
              Event details may change closer to the date — check back for updates.
            </p>
          </Reveal>

        </div>
      </main>
      <Footer />
    </>
  )
}
