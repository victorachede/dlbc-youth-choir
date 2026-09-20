'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Download, Share2 } from 'lucide-react'

export interface LightboxPhoto {
  src: string
  caption: string
}

export default function Lightbox({
  photos,
  index,
  onClose,
  onNavigate,
}: {
  photos: LightboxPhoto[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}) {
  const [shared, setShared] = useState(false)
  const open = index !== null
  const photo = open ? photos[index] : null

  const goTo = useCallback(
    (delta: number) => {
      if (index === null) return
      onNavigate((index + delta + photos.length) % photos.length)
    },
    [index, photos.length, onNavigate]
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') goTo(1)
      if (e.key === 'ArrowLeft') goTo(-1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose, goTo])

  useEffect(() => {
    setShared(false)
  }, [index])

  if (!open || !photo) return null

  const absoluteUrl = typeof window !== 'undefined' ? `${window.location.origin}${photo.src}` : photo.src

  async function handleShare() {
    if (!photo) return
    try {
      if (navigator.share) {
        await navigator.share({ title: photo.caption, url: absoluteUrl })
        return
      }
    } catch {
      // user cancelled or share failed — fall through to clipboard copy
    }
    try {
      await navigator.clipboard.writeText(absoluteUrl)
      setShared(true)
      setTimeout(() => setShared(false), 2000)
    } catch {
      // clipboard unavailable — nothing more we can do here
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={photo.caption}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
      >
        <X size={18} />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); goTo(-1) }}
        aria-label="Previous photo"
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); goTo(1) }}
        aria-label="Next photo"
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      <div
        className="relative w-full h-full max-w-5xl max-h-[85vh] mx-4 sm:mx-16 my-16 flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full flex-1 min-h-0">
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.caption}
            fill
            sizes="100vw"
            className="object-contain"
            priority
          />
        </div>

        <div className="flex items-center gap-5 mt-5">
          <p className="font-accent italic font-light text-white text-[15px] sm:text-base">{photo.caption}</p>
          <div className="flex items-center gap-2">
            <a
              href={photo.src}
              download
              onClick={(e) => e.stopPropagation()}
              aria-label="Download photo"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <Download size={15} />
            </a>
            <button
              onClick={(e) => { e.stopPropagation(); handleShare() }}
              aria-label="Share photo"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <Share2 size={15} />
            </button>
          </div>
        </div>
        {shared && (
          <p className="text-white/60 text-[12px] mt-2">Link copied</p>
        )}
      </div>
    </div>
  )
}
