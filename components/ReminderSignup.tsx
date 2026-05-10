'use client'

import { useState } from 'react'
import { saveReminderEmail, hasReminderSignup } from '@/lib/storage'

const INTERVALS = [
  { label: '2 weeks', desc: 'A quick check-in — are you living from your strengths?' },
  { label: '1 month', desc: 'Deeper reflection — how has this changed how you see yourself?' },
  { label: '3 months', desc: 'Seasonal retake — are you in a role that fits who you are?' },
  { label: '6 months', desc: 'Half-year audit — has your calling become clearer?' },
]

export default function ReminderSignup() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (hasReminderSignup() || done) {
    return (
      <div className="bg-card border border-border rounded-2xl p-6 text-center">
        <div className="text-2xl mb-3">🙏</div>
        <p className="font-display text-lg text-text">You're signed up for reminders.</p>
        <p className="text-sm text-muted mt-2">We recommend retaking each assessment 2–3× per year as you grow.</p>
      </div>
    )
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/reminder-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (!res.ok) throw new Error('Failed')
      saveReminderEmail(email)
      setDone(true)
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-card border border-border rounded-2xl p-6">
      <div className="mb-5">
        <p className="text-[10px] tracking-[0.4em] text-muted uppercase mb-2">Grow with it</p>
        <h3 className="font-display text-xl text-text">Set a reminder to retake</h3>
        <p className="text-sm text-subtle mt-2 leading-relaxed">
          Who you are deepens over time. We recommend retaking each assessment 2–3× per year.
          Enter your email and we'll remind you at the intervals below.
        </p>
      </div>

      {/* Intervals */}
      <div className="space-y-2 mb-6">
        {INTERVALS.map(i => (
          <div key={i.label} className="flex items-start gap-3 py-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gold/60 mt-2 flex-shrink-0" />
            <div>
              <span className="text-xs text-gold font-semibold">{i.label} —</span>
              <span className="text-xs text-muted ml-1">{i.desc}</span>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="your@email.com"
          required
          className="w-full bg-background border border-border rounded-xl px-4 py-3.5 text-sm text-text placeholder-muted focus:outline-none focus:border-gold/50 transition-colors font-sans"
        />
        {error && <p className="text-xs text-coral">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-3.5 rounded-xl border border-gold/40 text-gold text-sm font-semibold tracking-wide hover:bg-gold/5 transition-colors disabled:opacity-50 font-sans"
        >
          {loading ? 'Signing up…' : 'Remind me to retake →'}
        </button>
      </form>

      <p className="text-[10px] text-muted text-center mt-3">No spam. Unsubscribe anytime.</p>
    </div>
  )
}
