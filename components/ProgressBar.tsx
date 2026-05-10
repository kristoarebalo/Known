'use client'

interface Props {
  current: number
  total: number
  color?: string
  label?: string
}

export default function ProgressBar({ current, total, color = '#C9A84C', label }: Props) {
  const pct = Math.round((current / total) * 100)

  return (
    <div className="w-full">
      <div className="h-[2px] bg-border rounded-full overflow-hidden">
        <div
          className="h-full rounded-full progress-fill"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      {label && (
        <div className="flex justify-between items-center mt-2">
          <span className="text-[10px] tracking-[0.3em] text-muted uppercase">{label}</span>
          <span className="text-[10px] text-muted">{current}/{total}</span>
        </div>
      )}
    </div>
  )
}
