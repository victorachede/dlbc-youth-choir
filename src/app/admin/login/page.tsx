import type { Metadata } from 'next'
import LoginForm from './LoginForm'

export const metadata: Metadata = {
  title: 'Admin Login',
  robots: { index: false, follow: false },
}

export default function AdminLoginPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 bg-surface">
      <div className="mb-10 text-center">
        <p className="font-display text-[11px] tracking-[0.25em] uppercase text-blue mb-2">Admin</p>
        <h1 className="font-display font-semibold text-2xl text-ink">Choir Dashboard</h1>
      </div>
      <LoginForm />
    </main>
  )
}
