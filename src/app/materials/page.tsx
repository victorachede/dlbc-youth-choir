import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { createClient } from '@/lib/supabase/server'
import { FileText, Music, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Materials',
  description:
    'Sheet music and practice audio tracks for DLBC Youth Choir Makurdi members — everything you need to rehearse between services.',
}

type Material = {
  id: string
  title: string
  category: 'audio' | 'sheet_music'
  file_url: string
  created_at: string
}

export default async function MaterialsPage() {
  const supabase = await createClient()
  const { data } = await supabase
    .from('choir_materials')
    .select('id, title, category, file_url, created_at')
    .order('created_at', { ascending: false })

  const materials = (data ?? []) as Material[]
  const sheetMusic = materials.filter((m) => m.category === 'sheet_music')
  const audioTracks = materials.filter((m) => m.category === 'audio')

  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="pt-32 sm:pt-40 pb-16 sm:pb-20 px-6 text-center">
          <Reveal>
            <p className="font-display text-[11px] tracking-[0.25em] uppercase text-blue mb-4">For Members</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display font-semibold text-4xl sm:text-5xl text-ink mb-4">Materials</h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-ink-muted text-[15px] leading-relaxed max-w-md mx-auto">
              Sheet music and practice tracks to rehearse with between services.
            </p>
          </Reveal>
        </section>

        <div className="max-w-3xl mx-auto px-6 sm:px-10 pb-24">

          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <FileText size={16} className="text-blue" />
              <h2 className="font-display text-[15px] text-ink">Sheet Music</h2>
            </div>
            {sheetMusic.length === 0 ? (
              <p className="text-[13px] text-ink-dim">No sheet music uploaded yet — check back soon.</p>
            ) : (
              <div className="flex flex-col gap-2">
                {sheetMusic.map((m, i) => (
                  <Reveal key={m.id} delay={i * 0.04}>
                    <a
                      href={m.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 border border-border rounded-sm px-5 py-4 hover:border-blue-dim transition-colors group"
                    >
                      <span className="flex-1 text-[14px] text-ink">{m.title}</span>
                      <Download size={14} className="text-ink-dim group-hover:text-blue transition-colors shrink-0" />
                    </a>
                  </Reveal>
                ))}
              </div>
            )}
          </section>

          <section>
            <div className="flex items-center gap-3 mb-6">
              <Music size={16} className="text-blue" />
              <h2 className="font-display text-[15px] text-ink">Practice Audio</h2>
            </div>
            {audioTracks.length === 0 ? (
              <p className="text-[13px] text-ink-dim">No practice tracks uploaded yet — check back soon.</p>
            ) : (
              <div className="flex flex-col gap-4">
                {audioTracks.map((m, i) => (
                  <Reveal key={m.id} delay={i * 0.04}>
                    <div className="border border-border rounded-sm px-5 py-4">
                      <p className="text-[14px] text-ink mb-3">{m.title}</p>
                      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                      <audio controls src={m.file_url} className="w-full h-9" />
                    </div>
                  </Reveal>
                ))}
              </div>
            )}
          </section>

        </div>
      </main>
      <Footer />
    </>
  )
}
