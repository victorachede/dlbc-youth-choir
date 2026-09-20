'use client'

import { useTransition } from 'react'
import { Trash2, Loader2 } from 'lucide-react'
import { deleteMaterial } from '@/app/admin/actions'

export default function DeleteButton({ id, filePath }: { id: string; filePath: string }) {
  const [pending, startTransition] = useTransition()

  return (
    <button
      onClick={() => {
        if (!confirm('Delete this material? This cannot be undone.')) return
        startTransition(() => deleteMaterial(id, filePath))
      }}
      disabled={pending}
      aria-label="Delete material"
      className="text-ink-dim hover:text-red transition-colors disabled:opacity-50 shrink-0"
    >
      {pending ? <Loader2 size={15} className="animate-spin" /> : <Trash2 size={15} />}
    </button>
  )
}
