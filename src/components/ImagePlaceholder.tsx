/**
 * PLACEHOLDER — swap for a real image when content is available.
 *
 * Usage once a real photo exists:
 *   <img src="/photos/choir-2026.jpg" alt="..." className="w-full h-full object-cover" />
 * and delete this component's usage at that call site.
 */
export default function ImagePlaceholder({
  label,
  className = '',
  aspect,
}: {
  label: string
  className?: string
  aspect?: string
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 bg-dark-3 border border-gold-dim overflow-hidden ${className}`}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(201,168,76,0.05) 0%, transparent 70%)',
        }}
      />
      <span className="relative z-10 text-2xl text-gold/20">♪</span>
      <span className="relative z-10 font-display text-[10px] tracking-[0.3em] uppercase text-gold/40">
        {label}
      </span>
    </div>
  )
}
