import type { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { signOut } from '../actions'

export const metadata: Metadata = {
  title: 'Admin',
  robots: { index: false, follow: false },
}

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) redirect('/admin/login')

  // Being signed in to the shared Supabase project isn't enough — this
  // project also serves an unrelated app (ASKTC), so anyone with an ASKTC
  // account is still "authenticated". Only choir_admins actually get in.
  const { data: admin } = await supabase
    .from('choir_admins')
    .select('user_id')
    .eq('user_id', user.id)
    .maybeSingle()

  if (!admin) {
    await supabase.auth.signOut()
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-surface">
      <header className="border-b border-border bg-white px-6 py-4 flex items-center justify-between">
        <p className="font-display text-[15px] text-ink">Choir Admin</p>
        <form action={signOut}>
          <button className="text-[13px] text-ink-muted hover:text-ink transition-colors">Sign Out</button>
        </form>
      </header>
      <main className="max-w-3xl mx-auto px-6 py-12">{children}</main>
    </div>
  )
}
