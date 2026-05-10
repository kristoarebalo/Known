import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-5 text-center">
      <p className="font-display text-6xl text-gold mb-4">✝</p>
      <h2 className="font-display text-3xl text-text mb-3">Page not found</h2>
      <p className="text-subtle text-sm mb-8 max-w-xs">
        That path doesn't exist. Let's take you back to where it all begins.
      </p>
      <Link
        href="/"
        className="px-6 py-3.5 rounded-xl bg-gold text-background text-sm font-bold font-sans hover:bg-gold-light transition-colors"
      >
        Back to home →
      </Link>
    </div>
  )
}
