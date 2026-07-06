import { useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext.jsx'
import {
  Button,
  Card,
  ScreenHeader,
  TrustNote,
  CheckIcon,
  ShieldIcon,
} from '../../components/ui.jsx'

const STEPS = [
  { label: 'Booking confirmed', state: 'done' },
  { label: 'Pro assigned', state: 'done' },
  { label: 'Diagnosing issue', state: 'active' },
  { label: 'Quote ready for approval', state: 'pending' },
]

export default function Status() {
  const navigate = useNavigate()
  const { selectedPro } = useApp()

  return (
    <div className="space-y-5">
      <ScreenHeader title="Booking status" onBack={() => navigate('/')} />

      <Card className="text-center">
        <span className="relative mx-auto mb-3 flex h-3 w-3">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
        </span>
        <h2 className="text-lg font-bold text-slate-900">
          Pro assigned — diagnosing issue
        </h2>
        <p className="mt-1 text-sm text-slate-500">
          {selectedPro?.name || 'Your professional'} is inspecting the appliance and
          preparing a quote.
        </p>
      </Card>

      <Card>
        <ol className="space-y-1">
          {STEPS.map((step, i) => (
            <li key={step.label} className="flex gap-3">
              <div className="flex flex-col items-center">
                <span
                  className={`grid h-7 w-7 place-items-center rounded-full text-xs font-bold ${
                    step.state === 'done'
                      ? 'bg-emerald-500 text-white'
                      : step.state === 'active'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-200 text-slate-400'
                  }`}
                >
                  {step.state === 'done' ? <CheckIcon className="h-4 w-4" /> : i + 1}
                </span>
                {i < STEPS.length - 1 && (
                  <span
                    className={`my-1 w-0.5 flex-1 ${
                      step.state === 'done' ? 'bg-emerald-400' : 'bg-slate-200'
                    }`}
                    style={{ minHeight: '1.25rem' }}
                  />
                )}
              </div>
              <span
                className={`pt-1 text-sm font-semibold ${
                  step.state === 'pending' ? 'text-slate-400' : 'text-slate-800'
                }`}
              >
                {step.label}
                {step.state === 'active' && (
                  <span className="ml-2 font-normal text-blue-600">In progress…</span>
                )}
              </span>
            </li>
          ))}
        </ol>
      </Card>

      <TrustNote icon={<ShieldIcon className="h-5 w-5" />}>
        You'll review and approve the full quote before any work starts.
      </TrustNote>

      <Button onClick={() => navigate('/customer/quote')}>View Quote</Button>
    </div>
  )
}
