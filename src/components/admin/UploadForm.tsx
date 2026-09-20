'use client'

import { useActionState, useEffect, useRef } from 'react'
import { Loader2, Upload } from 'lucide-react'
import { uploadMaterial } from '@/app/admin/actions'

export default function UploadForm() {
  const [state, formAction, pending] = useActionState(uploadMaterial, undefined)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (state && state.error === '') formRef.current?.reset()
  }, [state])

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-4 border border-border rounded-sm p-6 bg-white">
      <div>
        <label className="block text-[12px] tracking-wide text-ink-muted mb-2">Title</label>
        <input
          required
          name="title"
          placeholder="e.g. Hallelujah (Live) — Soprano Part"
          className="w-full bg-surface border border-border rounded-sm px-4 py-2.5 text-[14px] text-ink outline-none focus:border-blue transition-colors placeholder:text-ink-dim"
        />
      </div>

      <div>
        <label className="block text-[12px] tracking-wide text-ink-muted mb-2">Category</label>
        <div className="flex gap-2">
          {[
            { value: 'audio', label: 'Audio Track' },
            { value: 'sheet_music', label: 'Sheet Music' },
          ].map((c) => (
            <label
              key={c.value}
              className="flex-1 flex items-center justify-center gap-2 border border-border rounded-sm px-3 py-2.5 text-[13px] text-ink-muted cursor-pointer has-[:checked]:bg-blue has-[:checked]:border-blue has-[:checked]:text-white transition-colors"
            >
              <input type="radio" name="category" value={c.value} required defaultChecked={c.value === 'audio'} className="sr-only" />
              {c.label}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-[12px] tracking-wide text-ink-muted mb-2">File</label>
        <input
          required
          type="file"
          name="file"
          accept="audio/*,application/pdf"
          className="w-full text-[13px] text-ink-muted file:mr-4 file:py-2 file:px-4 file:rounded-sm file:border file:border-border file:bg-surface file:text-[12px] file:text-ink"
        />
      </div>

      {state?.error && <p className="text-[13px] text-red">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="mt-1 bg-blue text-white text-[13px] tracking-wide font-medium px-6 py-3 rounded-sm hover:bg-blue/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {pending ? (
          <>
            <Loader2 size={14} className="animate-spin" /> Uploading...
          </>
        ) : (
          <>
            <Upload size={14} /> Upload Material
          </>
        )}
      </button>
    </form>
  )
}
