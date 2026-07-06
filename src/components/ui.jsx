import { useState } from 'react'

/* ---------- Shared input styling ---------- */
export const inputClass =
  'w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-base text-slate-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100'

/* ---------- Button ---------- */
export function Button({ variant = 'primary', className = '', ...props }) {
  const base =
    'w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-4 text-base font-semibold cursor-pointer transition active:scale-[0.99] focus:outline-none focus-visible:ring-4 disabled:opacity-50 disabled:pointer-events-none'
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-200',
    success:
      'bg-emerald-600 text-white hover:bg-emerald-700 focus-visible:ring-emerald-200',
    outline:
      'border-2 border-slate-300 bg-white text-slate-700 hover:bg-slate-50 focus-visible:ring-slate-200',
    danger:
      'border-2 border-red-200 bg-white text-red-600 hover:bg-red-50 focus-visible:ring-red-100',
    ghost: 'text-slate-600 hover:bg-slate-100',
  }
  return <button className={`${base} ${variants[variant]} ${className}`} {...props} />
}

/* ---------- Card ---------- */
export function Card({ className = '', children, ...props }) {
  return (
    <div
      className={`rounded-2xl border border-slate-200 bg-white p-4 shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

/* ---------- Badge ---------- */
export function Badge({ tone = 'verified', className = '', children }) {
  const tones = {
    verified: 'bg-emerald-100 text-emerald-800 ring-1 ring-emerald-200',
    new: 'bg-amber-100 text-amber-800 ring-1 ring-amber-200',
    info: 'bg-blue-100 text-blue-800 ring-1 ring-blue-200',
    muted: 'bg-slate-100 text-slate-600 ring-1 ring-slate-200',
  }
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  )
}

/* ---------- Avatar ---------- */
export function Avatar({ name = '', className = '' }) {
  const initials = name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
  return (
    <div
      className={`grid h-12 w-12 shrink-0 place-items-center rounded-full bg-blue-100 text-base font-bold text-blue-700 ${className}`}
    >
      {initials}
    </div>
  )
}

/* ---------- Screen header with back button ---------- */
export function ScreenHeader({ title, subtitle, onBack, right }) {
  return (
    <div className="mb-5 flex items-center gap-3">
      {onBack && (
        <button
          type="button"
          onClick={onBack}
          aria-label="Go back"
          className="grid h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:bg-slate-50"
        >
          <ArrowLeftIcon />
        </button>
      )}
      <div className="min-w-0 flex-1">
        <h1 className="truncate text-xl font-extrabold text-slate-900">{title}</h1>
        {subtitle && <p className="truncate text-sm text-slate-500">{subtitle}</p>}
      </div>
      {right}
    </div>
  )
}

/* ---------- Labelled field ---------- */
export function Field({ label, hint, children }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-slate-700">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-xs text-slate-500">{hint}</span>}
    </label>
  )
}

/* ---------- Trust callout ---------- */
export function TrustNote({ icon, title, children, tone = 'emerald' }) {
  const tones = {
    emerald: 'border-emerald-200 bg-emerald-50 text-emerald-900',
    blue: 'border-blue-200 bg-blue-50 text-blue-900',
    amber: 'border-amber-200 bg-amber-50 text-amber-900',
  }
  const iconTone = {
    emerald: 'text-emerald-600',
    blue: 'text-blue-600',
    amber: 'text-amber-600',
  }
  return (
    <div className={`flex gap-3 rounded-xl border p-3.5 ${tones[tone]}`}>
      {icon && <div className={`mt-0.5 shrink-0 ${iconTone[tone]}`}>{icon}</div>}
      <div className="text-sm">
        {title && <p className="font-bold">{title}</p>}
        <div className={title ? 'mt-0.5 opacity-90' : ''}>{children}</div>
      </div>
    </div>
  )
}

/* ---------- Star rating (read-only display) ---------- */
export function Stars({ value = 0, className = '' }) {
  const rounded = Math.round(value)
  return (
    <span
      className={`inline-flex items-center ${className}`}
      aria-label={`${value} out of 5 stars`}
    >
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={n <= rounded ? 'text-amber-400' : 'text-slate-300'}>
          ★
        </span>
      ))}
    </span>
  )
}

/* ---------- Star rating (interactive input) ---------- */
export function StarInput({ value = 0, onChange }) {
  const [hover, setHover] = useState(0)
  const active = hover || value
  return (
    <div className="flex gap-2" role="radiogroup" aria-label="Rating">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          role="radio"
          aria-checked={value === n}
          aria-label={`${n} star${n > 1 ? 's' : ''}`}
          onMouseEnter={() => setHover(n)}
          onMouseLeave={() => setHover(0)}
          onClick={() => onChange(n)}
          className={`cursor-pointer text-5xl leading-none transition ${
            active >= n ? 'text-amber-400' : 'text-slate-300 hover:text-amber-200'
          }`}
        >
          ★
        </button>
      ))}
    </div>
  )
}

/* ---------- Toggle switch ---------- */
export function Toggle({ checked, onChange, label }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative h-9 w-16 shrink-0 cursor-pointer rounded-full transition ${
        checked ? 'bg-emerald-500' : 'bg-slate-300'
      }`}
    >
      <span
        className={`absolute top-1 h-7 w-7 rounded-full bg-white shadow transition-all ${
          checked ? 'left-8' : 'left-1'
        }`}
      />
    </button>
  )
}

/* ---------- Modal / confirmation dialog ---------- */
export function Modal({ children, onClose }) {
  return (
    <div
      className="fixed inset-0 z-40 flex items-end justify-center bg-black/50 p-4 sm:items-center"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-2xl bg-white p-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}

/* ---------- Icons (inline SVG, use currentColor) ---------- */
function Svg({ children, className = 'h-5 w-5', fill = 'none', ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      stroke={fill === 'none' ? 'currentColor' : 'none'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  )
}

export const ArrowLeftIcon = (p) => (
  <Svg {...p}>
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </Svg>
)
export const ShieldIcon = (p) => (
  <Svg {...p}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
    <path d="m9 12 2 2 4-4" />
  </Svg>
)
export const CheckBadgeIcon = ({ className = 'h-3.5 w-3.5' }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" className={className} aria-hidden="true">
    <path
      fillRule="evenodd"
      d="M16.7 6.3a1 1 0 0 1 0 1.4l-6.5 6.5a1 1 0 0 1-1.4 0L4.3 9.7a1 1 0 1 1 1.4-1.4l3.8 3.8 5.8-5.8a1 1 0 0 1 1.4 0Z"
      clipRule="evenodd"
    />
  </svg>
)
export const LockIcon = (p) => (
  <Svg {...p}>
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </Svg>
)
export const MapPinIcon = (p) => (
  <Svg {...p}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </Svg>
)
export const ClockIcon = (p) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Svg>
)
export const ChevronRightIcon = (p) => (
  <Svg {...p}>
    <path d="m9 18 6-6-6-6" />
  </Svg>
)
export const CheckIcon = (p) => (
  <Svg strokeWidth="3" {...p}>
    <path d="m5 12 5 5 9-9" />
  </Svg>
)
export const SparklesIcon = (p) => (
  <Svg fill="currentColor" {...p}>
    <path d="M12 2.5 13.9 8 19 9.9 13.9 12 12 17.5 10.1 12 5 9.9 10.1 8 12 2.5Z" />
  </Svg>
)
