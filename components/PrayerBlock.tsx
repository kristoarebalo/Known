'use client'

import { useState } from 'react'

interface Props {
  prayer: string
  onContinue: () => void
  continueLabel?: string
}

export default function PrayerBlock({ prayer, onContinue, continueLabel = 'Begin the assessment →' }: Props) {
  const [prayed, setPrayed] = useState(false)

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-5 py-12">
      <div className="w-full max-w-md">
        {/* Cross / symbol */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gold/30 text-gold text-xl">
            ✝
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-xs tracking-[0.4em] text-muted uppercase mb-2">A moment before we begin</p>
          <h2 className="font-display text-2xl text-text">Let us pray</h2>
        </div>

        <div className="bg-card border border-border rounded-2xl p-6 mb-6">
          <p className="prayer-text text-text/85 text-[15px] whitespace-pre-line">
            {prayer}
          </p>
        </div>

        {!prayed ? (
          <button
            onClick={() => setPrayed(true)}
            className="w-full py-4 rounded-xl border border-gold/40 text-gold font-sans text-sm tracking-widest uppercase hover:bg-gold/5 transition-colors"
          >
            Amen
          </button>
        ) : (
          <button
            onClick={onContinue}
            className="w-full py-4 rounded-xl bg-gold text-background font-sans font-semibold text-sm tracking-wide hover:bg-gold-light transition-colors"
          >
            {continueLabel}
          </button>
        )}
      </div>
    </div>
  )
}
