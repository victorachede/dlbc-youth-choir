import Image from 'next/image'

export default function PhotoTile({
  src,
  alt,
  caption,
  aspect,
  className = '',
  priority,
  sizes = '(min-width: 1024px) 33vw, 50vw',
  onClick,
}: {
  src: string
  alt: string
  caption?: string
  aspect?: string
  className?: string
  priority?: boolean
  sizes?: string
  onClick?: () => void
}) {
  return (
    <div
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick() } } : undefined}
      className={`relative overflow-hidden bg-surface-2 ${onClick ? 'cursor-zoom-in group' : ''} ${className}`}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={`object-cover ${onClick ? 'transition-transform duration-500 group-hover:scale-105' : ''}`}
        priority={priority}
      />
      {caption && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent pt-12 pb-3 px-3.5">
          <span className="font-accent italic font-light text-white text-[13px] sm:text-[14px] leading-tight">
            {caption}
          </span>
        </div>
      )}
    </div>
  )
}
