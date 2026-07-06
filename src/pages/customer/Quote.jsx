import { useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext.jsx'
import { QUOTE_ITEMS } from '../../data/mock.js'
import {
  Button,
  Card,
  ScreenHeader,
  TrustNote,
  ShieldIcon,
} from '../../components/ui.jsx'

export default function Quote() {
  const navigate = useNavigate()
  const { selectedPro } = useApp()
  const total = QUOTE_ITEMS.reduce((sum, item) => sum + item.amount, 0)

  return (
    <div className="space-y-4">
      <ScreenHeader
        title="Approve your quote"
        subtitle={selectedPro ? `From ${selectedPro.name}` : undefined}
        onBack={() => navigate('/customer/status')}
      />

      <Card className="space-y-1">
        {QUOTE_ITEMS.map((item) => (
          <div
            key={item.label}
            className="flex items-start justify-between border-b border-slate-100 py-3 last:border-0"
          >
            <div>
              <p className="font-semibold text-slate-800">{item.label}</p>
              {item.note && <p className="text-xs text-slate-500">{item.note}</p>}
            </div>
            <p className="font-semibold text-slate-900">₹{item.amount}</p>
          </div>
        ))}

        <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-3">
          <p className="text-base font-bold text-slate-900">Total</p>
          <p className="text-xl font-extrabold text-slate-900">₹{total}</p>
        </div>
      </Card>

      {/* Highlighted trust element */}
      <TrustNote
        icon={<ShieldIcon className="h-5 w-5" />}
        title="No work begins until you approve."
      >
        The pro cannot start or charge you until you tap “Approve & Start Work”.
      </TrustNote>

      <Button variant="success" onClick={() => navigate('/customer/review')}>
        Approve &amp; Start Work
      </Button>
      <Button variant="danger" onClick={() => navigate('/customer/status')}>
        Decline
      </Button>
    </div>
  )
}
