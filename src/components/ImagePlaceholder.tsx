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
      className={`relative flex flex-col items-center justify-center gap-2 bg-surface-2 border border-blue-dim overflow-hidden ${className}`}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(57,87,128,0.05) 0%, transparent 70%)',
        }}
      />
      <span className="relative z-10 text-2xl text-blue/20">♪</span>
      <span className="relative z-10 font-display text-[10px] tracking-[0.3em] uppercase text-blue/40">
        {label}
      </span>
    </div>
  )
}
