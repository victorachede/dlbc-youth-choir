import type { Metadata } from 'next'
import MusicClient from './MusicClient'

export const metadata: Metadata = {
  title: 'Music',
  description:
    'Listen to live worship recordings from the DLBC Youth Choir Makurdi — Sunday services, concerts, and special programs, sung as they happened.',
}

export default function MusicPage() {
  return <MusicClient />
}
