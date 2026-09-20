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
  index,
}: {
  label: string
  className?: string
  aspect?: string
  index?: number
}) {
  const warm = typeof index === 'number' && index % 2 === 1

  return (
    <div
      className={`relative flex flex-col justify-between overflow-hidden border ${warm ? 'bg-blue-faint border-blue-dim' : 'bg-surface-2 border-border'} ${className}`}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      {/* Fine diagonal hatch — reads as a deliberate "plate" rather than an empty box. */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: `repeating-linear-gradient(135deg, ${warm ? 'rgba(232,57,63,0.05)' : 'rgba(57,87,128,0.05)'} 0px, ${warm ? 'rgba(232,57,63,0.05)' : 'rgba(57,87,128,0.05)'} 1px, transparent 1px, transparent 9px)`,
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse 90% 70% at 50% 40%, ${warm ? 'rgba(232,57,63,0.05)' : 'rgba(57,87,128,0.06)'} 0%, transparent 72%)`,
        }}
      />

      {typeof index === 'number' && (
        <span className="relative z-10 m-3 sm:m-4 w-fit text-[10px] font-display text-blue/50 border border-blue/20 rounded-sm px-1.5 py-0.5 leading-none">
          {String(index + 1).padStart(2, '0')}
        </span>
      )}

      <div className="relative z-10 flex-1 flex items-center justify-center">
        <span className="text-2xl text-blue/15">♪</span>
      </div>

      <span className="relative z-10 font-accent italic font-light text-[15px] sm:text-base text-ink/70 text-center px-3 pb-4 sm:pb-5">
        {label}
      </span>
    </div>
  )
}
