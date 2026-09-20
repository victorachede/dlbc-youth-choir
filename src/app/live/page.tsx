import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { Radio } from 'lucide-react'
import { SiFacebook } from 'react-icons/si'

export const metadata: Metadata = {
  title: 'Live',
  description: 'Watch DLBC Youth Choir Makurdi services live, streamed straight from our Facebook page.',
}

// TODO: set this to the choir's actual Facebook Page URL (e.g.
// 'https://www.facebook.com/DLBCYouthChoirMakurdi') to activate the embed.
// The Facebook Page Plugin below always shows that page's most recent
// video/live post, so once set this needs no further updates per stream.
const FACEBOOK_PAGE_URL = ''

export default function LivePage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="pt-32 sm:pt-40 pb-12 sm:pb-16 px-6 text-center">
          <Reveal>
            <p className="font-display text-[11px] tracking-[0.25em] uppercase text-blue mb-4 flex items-center justify-center gap-2">
              <Radio size={13} /> Live
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl text-ink mb-4">Watch Live</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-ink-muted text-[15px] leading-relaxed max-w-md mx-auto">
              Can&apos;t make it in person? Join us here whenever we&apos;re streaming a service live.
            </p>
          </Reveal>
        </section>

        <div className="max-w-2xl mx-auto px-6 sm:px-10 pb-24">
          {FACEBOOK_PAGE_URL ? (
            <Reveal delay={0.15}>
              <div className="rounded-sm overflow-hidden border border-border">
                <iframe
                  title="Live stream"
                  src={`https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
                    FACEBOOK_PAGE_URL
                  )}&tabs=videos&width=640&height=720&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false`}
                  width="100%"
                  height="720"
                  style={{ border: 'none', overflow: 'hidden', display: 'block' }}
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </Reveal>
          ) : (
            <Reveal delay={0.15}>
              <div className="border border-border rounded-sm py-16 px-8 text-center bg-surface">
                <div className="w-12 h-12 rounded-full border border-blue/30 flex items-center justify-center mx-auto mb-5">
                  <SiFacebook size={16} className="text-blue" />
                </div>
                <p className="font-display text-[16px] text-ink mb-2">Not Streaming Right Now</p>
                <p className="text-ink-muted text-[14px] leading-relaxed max-w-xs mx-auto">
                  We stream services live on Facebook. Check back during service times, or follow our page
                  to get notified the moment we go live.
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
