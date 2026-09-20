'use client'

import { useActionState } from 'react'
import { Loader2 } from 'lucide-react'
import { signIn } from '../actions'

export default function LoginForm() {
  const [state, formAction, pending] = useActionState(signIn, undefined)

  return (
    <form action={formAction} className="flex flex-col gap-5 w-full max-w-sm">
      <div>
        <label className="block text-[12px] tracking-wide text-ink-muted mb-2">Email</label>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-[14px] text-ink outline-none focus:border-blue transition-colors"
        />
      </div>
      <div>
        <label className="block text-[12px] tracking-wide text-ink-muted mb-2">Password</label>
        <input
          required
          type="password"
          name="password"
          autoComplete="current-password"
          className="w-full bg-surface border border-border rounded-sm px-4 py-3 text-[14px] text-ink outline-none focus:border-blue transition-colors"
        />
      </div>

      {state?.error && <p className="text-[13px] text-red">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="mt-1 bg-blue text-white text-[13px] tracking-wide font-medium px-6 py-3.5 rounded-sm hover:bg-blue/90 transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
      >
        {pending ? (
          <>
            <Loader2 size={14} className="animate-spin" /> Signing in...
          </>
        ) : (
          'Sign In'
        )}
      </button>
    </form>
  )
}
