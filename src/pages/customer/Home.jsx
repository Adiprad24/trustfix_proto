import { useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext.jsx'
import { CATEGORIES } from '../../data/mock.js'
import {
  Button,
  Card,
  Field,
  inputClass,
  ShieldIcon,
  CheckBadgeIcon,
  LockIcon,
  MapPinIcon,
} from '../../components/ui.jsx'

export default function Home() {
  const navigate = useNavigate()
  const { category, setCategory, location, setLocation } = useApp()

  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">Book a trusted pro</h1>
        <p className="mt-1 text-slate-500">
          Background-verified experts near you. You approve before any work begins.
        </p>
      </div>

      {/* Trust strip */}
      <div className="grid grid-cols-3 gap-2">
        <TrustPill icon={<CheckBadgeIcon className="h-5 w-5" />} label="Verified pros" />
        <TrustPill icon={<ShieldIcon className="h-5 w-5" />} label="Approve first" />
        <TrustPill icon={<LockIcon className="h-5 w-5" />} label="Masked contact" />
      </div>

      <Card className="space-y-4">
        <Field label="Service category">
          <select
            className={inputClass}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Location">
          <div className="relative">
            <MapPinIcon className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <input
              className={`${inputClass} pl-11`}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter your area"
            />
          </div>
        </Field>

        <Button onClick={() => navigate('/customer/pros')}>Find Pros</Button>
      </Card>
    </div>
  )
}

function TrustPill({ icon, label }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl border border-emerald-100 bg-emerald-50 px-2 py-3 text-center">
      <span className="text-emerald-600">{icon}</span>
      <span className="text-xs font-semibold text-emerald-800">{label}</span>
    </div>
  )
}
