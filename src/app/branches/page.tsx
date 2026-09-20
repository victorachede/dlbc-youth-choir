import type { Metadata } from 'next'
import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { MapPin, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Branches',
  description:
    'DLBC Youth Choir branches across Benue State — Makurdi, Guma, Konshisha, Wannune, Oju, and Otukpo.',
}

const BRANCHES = [
  { name: 'Makurdi', tag: 'Headquarters' },
  { name: 'Guma', tag: 'Branch' },
  { name: 'Konshisha', tag: 'Branch' },
  { name: 'Wannune', tag: 'Branch' },
  { name: 'Oju', tag: 'Branch' },
  { name: 'Otukpo', tag: 'Branch' },
]

export default function BranchesPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 px-6 text-center">
          <Reveal>
            <p className="font-display text-[11px] tracking-[0.25em] uppercase text-blue mb-4">Where We Are</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl text-ink mb-4">Our Branches</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-ink-muted text-[15px] leading-relaxed max-w-md mx-auto">
              One choir, carried across Benue State — each branch raising its own voices, all part of the
              same family.
            </p>
          </Reveal>
        </section>

        <div className="max-w-4xl mx-auto px-6 sm:px-10 pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {BRANCHES.map((branch, i) => (
              <Reveal key={branch.name} delay={i * 0.05}>
                <div className="border border-border rounded-sm p-7 h-full flex flex-col hover:border-blue-dim transition-colors">
                  <div className="w-11 h-11 rounded-full border border-blue/30 flex items-center justify-center mb-5">
                    <MapPin size={16} className="text-blue" />
                  </div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-blue mb-1.5">{branch.tag}</span>
                  <h2 className="font-display text-xl text-ink mb-1">{branch.name}</h2>
                  <p className="text-[13px] text-ink-dim mb-6">Benue State, Nigeria</p>
                  <Link
                    href={`/join?branch=${encodeURIComponent(branch.name)}`}
                    className="mt-auto inline-flex items-center gap-1.5 text-[13px] text-blue group"
                  >
                    Join this branch
                    <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p className="text-center text-[12px] text-ink-dim mt-12">
              Don&apos;t see a branch near you? <Link href="/join" className="text-blue border-b border-blue/30 hover:border-blue transition-colors">Reach out</Link> and we&apos;ll connect you.
            </p>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  )
}
