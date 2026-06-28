import Link from 'next/link'
import { SiYoutube, SiDiscord, SiSpotify, SiApplemusic, SiFacebook, SiInstagram } from 'react-icons/si'

const LINKS = [
  { href: '/about', label: 'About' },
  { href: '/music', label: 'Music' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/events', label: 'Events' },
  { href: '/join', label: 'Join' },
]

// TODO: replace href: '#' with real profile/channel URLs as they become available.
// Icons are wired up and ready — only the links themselves are placeholder.
const SOCIALS = [
  { label: 'YouTube', href: '#', Icon: SiYoutube },
  { label: 'Discord', href: '#', Icon: SiDiscord },
  { label: 'Spotify', href: '#', Icon: SiSpotify },
  { label: 'Apple Music', href: '#', Icon: SiApplemusic },
  { label: 'Facebook', href: '#', Icon: SiFacebook },
  { label: 'Instagram', href: '#', Icon: SiInstagram },
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
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-text-dim hover:text-gold hover:border-gold-dim transition-colors"
                >
                  <Icon size={14} />
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
