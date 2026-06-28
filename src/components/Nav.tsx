'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/music', label: 'Music' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/events', label: 'Events' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-5 backdrop-blur-md bg-dark/70 border-b border-border">
        <Link href="/" className="font-display text-[15px] tracking-wide text-text">
          DLBC <span className="text-gold">Youth Choir</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[13px] tracking-wide transition-colors ${
                  pathname === link.href ? 'text-gold' : 'text-text-muted hover:text-text'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/join"
              className="text-[13px] tracking-wide border border-gold text-gold px-4 py-2 rounded-sm hover:bg-gold hover:text-dark transition-colors"
            >
              Join Us
            </Link>
          </li>
        </ul>

        <button
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 w-6"
        >
          <span className={`h-px bg-text transition-transform ${open ? 'translate-y-1.5 rotate-45' : ''}`} />
          <span className={`h-px bg-text transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-px bg-text transition-transform ${open ? '-translate-y-1.5 -rotate-45' : ''}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-dark flex items-center justify-center md:hidden"
          >
            <ul className="flex flex-col items-center gap-8">
              {LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-2xl text-text hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/join"
                  onClick={() => setOpen(false)}
                  className="font-display text-2xl text-gold"
                >
                  Join Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
