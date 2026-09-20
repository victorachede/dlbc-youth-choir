import type { Metadata } from 'next'
import GalleryClient from './GalleryClient'

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Photos from DLBC Youth Choir Makurdi services, rehearsals, and events — worship, fellowship, and life together as a choir family.',
}

export default function GalleryPage() {
  return <GalleryClient />
}
