import Image from 'next/image'
import Link from 'next/link'
import { SiYoutube, SiDiscord, SiSpotify, SiApplemusic, SiFacebook, SiInstagram } from 'react-icons/si'

const LINKS = [
  { href: '/about', label: 'About' },
  { href: '/music', label: 'Music' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/events', label: 'Events' },
  { href: '/branches', label: 'Branches' },
  { href: '/materials', label: 'Materials' },
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
          <div className="flex items-center gap-3">
            <Image src="/dlbc-logo.png" alt="Deeper Life Youth Choir Makurdi" width={32} height={32} className="h-8 w-8 object-contain" />
            <div>
              <p className="font-display text-[15px] text-ink mb-1">DLBC Youth Choir</p>
              <p className="text-[13px] text-ink-dim">Makurdi, Benue State, Nigeria</p>
            </div>
          </div>
          <ul className="flex gap-6">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-[13px] text-ink-muted hover:text-blue transition-colors">
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
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-border text-ink-dim hover:text-blue hover:border-blue-dim transition-colors"
                >
                  <Icon size={15} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between gap-2 text-[12px] text-ink-dim">
          <p>&copy; {new Date().getFullYear()} DLBC Makurdi Youth Choir. All rights reserved.</p>
          <p>Built by <span className="text-ink-muted">Black Sheep Co.</span></p>
        </div>
      </div>
    </footer>
  )
}
