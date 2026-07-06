import { useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext.jsx'
import { PROS } from '../../data/mock.js'
import {
  Avatar,
  Badge,
  Button,
  Card,
  Stars,
  ScreenHeader,
  CheckBadgeIcon,
  SparklesIcon,
  MapPinIcon,
} from '../../components/ui.jsx'

export default function Pros() {
  const navigate = useNavigate()
  const { category, location, setSelectedPro } = useApp()

  function choose(pro) {
    setSelectedPro(pro)
    navigate('/customer/booking')
  }

  function autoMatch() {
    // Pick the highest-rated available pro.
    const best = [...PROS].sort((a, b) => (b.rating || 0) - (a.rating || 0))[0]
    setSelectedPro({ ...best, autoMatched: true })
    navigate('/customer/booking')
  }

  return (
    <div className="space-y-4">
      <ScreenHeader
        title="Verified professionals"
        subtitle={`${category} • ${location}`}
        onBack={() => navigate('/')}
      />

      {/* Auto-match */}
      <button
        type="button"
        onClick={autoMatch}
        className="flex w-full cursor-pointer items-center gap-3 rounded-2xl border-2 border-blue-200 bg-blue-50 p-4 text-left transition hover:bg-blue-100"
      >
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-blue-600 text-white">
          <SparklesIcon className="h-6 w-6" />
        </span>
        <span className="flex-1">
          <span className="block font-bold text-blue-900">Auto-match me</span>
          <span className="block text-sm text-blue-700">
            We'll pick the best-rated pro for you
          </span>
        </span>
      </button>

      <div className="flex items-center gap-3 py-1">
        <div className="h-px flex-1 bg-slate-200" />
        <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
          or choose yourself
        </span>
        <div className="h-px flex-1 bg-slate-200" />
      </div>

      {PROS.map((pro) => (
        <ProCard key={pro.id} pro={pro} onSelect={() => choose(pro)} />
      ))}
    </div>
  )
}

function ProCard({ pro, onSelect }) {
  return (
    <Card>
      <div className="flex items-start gap-3">
        <Avatar name={pro.name} />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-bold text-slate-900">{pro.name}</h3>
            {pro.verified && (
              <Badge tone="verified">
                <CheckBadgeIcon /> Verified
              </Badge>
            )}
            {pro.isNew && <Badge tone="new">New Pro</Badge>}
          </div>

          <p className="mt-0.5 text-sm text-slate-500">{pro.skills}</p>

          <div className="mt-1.5 flex items-center gap-2 text-sm">
            {pro.rating ? (
              <span className="inline-flex items-center gap-1 font-semibold text-slate-700">
                <Stars value={pro.rating} />
                {pro.rating.toFixed(1)}
                <span className="font-normal text-slate-400">({pro.jobs} jobs)</span>
              </span>
            ) : (
              <span className="font-semibold text-amber-700">
                New pro • {pro.jobs} jobs
              </span>
            )}
          </div>

          <div className="mt-1 flex items-center gap-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-1">
              <MapPinIcon className="h-4 w-4" />
              {pro.distanceKm} km away
            </span>
            <span className="font-semibold text-slate-700">
              ₹{pro.priceMin}–{pro.priceMax}
            </span>
          </div>
        </div>
      </div>

      <Button className="mt-3" onClick={onSelect}>
        Select
      </Button>
    </Card>
  )
}
