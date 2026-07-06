import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Button,
  Card,
  Field,
  ScreenHeader,
  TrustNote,
  inputClass,
  CheckIcon,
  ShieldIcon,
} from '../../components/ui.jsx'

const INSPECTION_FEE = 150

export default function SubmitQuote() {
  const navigate = useNavigate()
  const [labour, setLabour] = useState('500')
  const [parts, setParts] = useState('350')
  const [partsDesc, setPartsDesc] = useState('Cooling fan capacitor')
  const [sent, setSent] = useState(false)

  const total = INSPECTION_FEE + Number(labour || 0) + Number(parts || 0)

  if (sent) {
    return (
      <div className="flex flex-col items-center py-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h1 className="mt-4 text-xl font-extrabold text-slate-900">Quote sent!</h1>
        <p className="mt-1 max-w-xs text-slate-500">
          The customer will review your ₹{total} quote. Work starts only after they approve.
        </p>
        <div className="mt-6 w-full space-y-3">
          <Button variant="success" onClick={() => navigate('/pro/rate')}>
            Job done — Rate the customer
          </Button>
          <Button variant="outline" onClick={() => navigate('/pro')}>
            Back to Dashboard
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <ScreenHeader title="Submit quote" subtitle="AC repair — not cooling" onBack={() => navigate(-1)} />

      <Card className="space-y-4">
        <Field label="Labour charge (₹)">
          <input
            type="number"
            inputMode="numeric"
            min="0"
            className={inputClass}
            value={labour}
            onChange={(e) => setLabour(e.target.value)}
          />
        </Field>

        <Field label="Parts cost (₹)">
          <input
            type="number"
            inputMode="numeric"
            min="0"
            className={inputClass}
            value={parts}
            onChange={(e) => setParts(e.target.value)}
          />
        </Field>

        <Field label="Parts description">
          <input
            className={inputClass}
            value={partsDesc}
            onChange={(e) => setPartsDesc(e.target.value)}
            placeholder="e.g. Cooling fan capacitor"
          />
        </Field>
      </Card>

      <Card className="space-y-1">
        <Row label="Inspection (already paid)" value={INSPECTION_FEE} />
        <Row label="Labour" value={Number(labour || 0)} />
        <Row label={partsDesc || 'Parts'} value={Number(parts || 0)} />
        <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-3">
          <p className="font-bold text-slate-900">Total to customer</p>
          <p className="text-xl font-extrabold text-slate-900">₹{total}</p>
        </div>
      </Card>

      <TrustNote icon={<ShieldIcon className="h-5 w-5" />}>
        The customer approves this quote before you begin any work.
      </TrustNote>

      <Button onClick={() => setSent(true)}>Send to customer</Button>
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div className="flex items-center justify-between border-b border-slate-100 py-2.5 text-sm last:border-0">
      <span className="text-slate-600">{label}</span>
      <span className="font-semibold text-slate-900">₹{value}</span>
    </div>
  )
}
