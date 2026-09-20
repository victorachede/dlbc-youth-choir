'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import { Check, Loader2 } from 'lucide-react'

const VOICE_PARTS = ['Soprano', 'Alto', 'Tenor', 'Bass', 'Not sure yet']
const BRANCHES = ['Makurdi', 'Guma', 'Konshisha', 'Wannune', 'Oju', 'Otukpo']

export default function JoinForm() {
  const searchParams = useSearchParams()
  const branchFromUrl = searchParams.get('branch')
  const initialBranch = branchFromUrl && (BRANCHES as string[]).includes(branchFromUrl) ? branchFromUrl : ''

  const [form, setForm] = useState({ name: '', phone: '', email: '', branch: initialBranch, voicePart: '', experience: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [voicePartError, setVoicePartError] = useState(false)
  const [branchError, setBranchError] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.branch) {
      setBranchError(true)
      return
    }
    if (!form.voicePart) {
      setVoicePartError(true)
      return
    }
    setSubmitting(true)
    // TODO: wire this up to a real API route once a database/backend exists
    // for this site (currently no API route — submissions go nowhere yet).
    await new Promise((r) => setTimeout(r, 800))
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <>
        <Nav />
        <main className="flex-1 flex items-center justify-center px-6 pt-24">
          <Reveal>
            <div className="text-center max-w-md">
              <div className="w-14 h-14 rounded-full border border-blue/40 flex items-center justify-center mx-auto mb-6">
                <Check size={22} className="text-blue" />
              </div>
              <h1 className="font-display text-2xl text-ink mb-3">Application Received</h1>
              <p className="text-ink-muted text-[15px] leading-relaxed">
                Thank you, {form.name.split(' ')[0] || 'friend'}. Someone from the choir leadership team will
                reach out to you soon. We&apos;re excited to welcome you in.
              </p>
            </div>
          </Reveal>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Nav />
      <main className="flex-1 pt-32 sm:pt-40">
        <div className="max-w-xl mx-auto px-6 sm:px-10 pb-24">

          <Reveal>
            <p className="font-display text-[11px] tracking-[0.25em] uppercase text-blue mb-4 text-center">Be Part of It</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-display font-semibold text-3xl sm:text-4xl text-ink mb-4 text-center">
              Join the Choir
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-ink-muted text-[15px] leading-relaxed text-center mb-14">
              We welcome every voice — trained or untrained. What matters is a heart for worship.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label className="block text-[12px] tracking-wide text-ink-muted mb-2">Full Name</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-[14px] text-ink outline-none focus:border-blue transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[12px] tracking-wide text-ink-muted mb-2">Phone Number</label>
                  <input
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-[14px] text-ink outline-none focus:border-blue transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[12px] tracking-wide text-ink-muted mb-2">Email (optional)</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-[14px] text-ink outline-none focus:border-blue transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[12px] tracking-wide text-ink-muted mb-2">Branch</label>
                <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Branch">
                  {BRANCHES.map((b) => {
                    const active = form.branch === b
                    return (
                      <button
                        key={b}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => { setForm({ ...form, branch: b }); setBranchError(false) }}
                        className={`px-4 py-2.5 rounded-full text-[13px] border transition-colors ${
                          active
                            ? 'bg-blue border-blue text-white'
                            : 'bg-surface border-border text-ink-muted hover:border-blue-dim'
                        }`}
                      >
                        {b}
                      </button>
                    )
                  })}
                </div>
                {branchError && (
                  <p className="text-[12px] text-red mt-2">Please select a branch.</p>
                )}
              </div>

              <div>
                <label className="block text-[12px] tracking-wide text-ink-muted mb-2">Voice Part</label>
                <div className="flex flex-wrap gap-2" role="radiogroup" aria-label="Voice Part">
                  {VOICE_PARTS.map((v) => {
                    const active = form.voicePart === v
                    return (
                      <button
                        key={v}
                        type="button"
                        role="radio"
                        aria-checked={active}
                        onClick={() => { setForm({ ...form, voicePart: v }); setVoicePartError(false) }}
                        className={`px-4 py-2.5 rounded-full text-[13px] border transition-colors ${
                          active
                            ? 'bg-blue border-blue text-white'
                            : 'bg-surface border-border text-ink-muted hover:border-blue-dim'
                        }`}
                      >
                        {v}
                      </button>
                    )
                  })}
                </div>
                {voicePartError && (
                  <p className="text-[12px] text-red mt-2">Please select a voice part.</p>
                )}
              </div>

              <div>
                <label className="block text-[12px] tracking-wide text-ink-muted mb-2">Musical Experience (optional)</label>
                <input
                  value={form.experience}
                  onChange={(e) => setForm({ ...form, experience: e.target.value })}
                  placeholder="e.g. sang in school choir, no formal training, plays piano"
                  className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-[14px] text-ink outline-none focus:border-blue transition-colors placeholder:text-ink-dim"
                />
              </div>

              <div>
                <label className="block text-[12px] tracking-wide text-ink-muted mb-2">Why do you want to join? (optional)</label>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-[14px] text-ink outline-none focus:border-blue transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="mt-2 bg-blue text-white text-[13px] tracking-wide font-medium px-6 py-3.5 rounded-sm hover:bg-blue/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <Loader2 size={14} className="animate-spin" /> Submitting...
                  </>
                ) : (
                  'Submit Application'
                )}
              </button>
            </form>
          </Reveal>

        </div>
      </main>
      <Footer />
    </>
  )
}
