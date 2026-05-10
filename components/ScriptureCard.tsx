'use client'

interface Props {
  verse: string
  reference: string
  className?: string
}

export default function ScriptureCard({ verse, reference, className = '' }: Props) {
  return (
    <div className={`text-center px-6 py-8 ${className}`}>
      <div className="w-8 h-px bg-gold/40 mx-auto mb-5" />
      <p className="font-display text-lg italic text-text/80 leading-relaxed max-w-sm mx-auto">
        "{verse}"
      </p>
      <p className="mt-3 text-xs tracking-[0.3em] text-muted uppercase">{reference}</p>
      <div className="w-8 h-px bg-gold/40 mx-auto mt-5" />
    </div>
  )
}
