import Link from 'next/link'

const LINKS = [
  { href: '/about', label: 'About' },
  { href: '/music', label: 'Music' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/events', label: 'Events' },
  { href: '/join', label: 'Join' },
]

// TODO: replace # with real social links when available
const SOCIALS = [
  { label: 'IG', href: '#' },
  { label: 'YT', href: '#' },
  { label: 'FB', href: '#' },
  { label: 'TW', href: '#' },
]

export default function Footer() {
  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 pb-8">
          <div>
            <p className="font-display text-[15px] text-text mb-1">DLBC Youth Choir</p>
            <p className="text-[13px] text-text-dim">Makurdi, Benue State, Nigeria</p>
          </div>
          <ul className="flex gap-6">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[13px] text-text-muted hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="flex gap-4">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} aria-label={s.label} className="text-[12px] text-text-dim hover:text-gold transition-colors">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between gap-2 text-[12px] text-text-dim">
          <p>&copy; {new Date().getFullYear()} DLBC Makurdi Youth Choir. All rights reserved.</p>
          <p>Built by <span className="text-text-muted">Black Sheep Co.</span></p>
        </div>
      </div>
    </footer>
  )
}
