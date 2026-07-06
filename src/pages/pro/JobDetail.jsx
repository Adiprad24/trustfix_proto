import { useNavigate, useParams } from 'react-router-dom'
import { JOB_REQUESTS } from '../../data/mock.js'
import {
  Badge,
  Button,
  Card,
  ScreenHeader,
  TrustNote,
  MapPinIcon,
  ClockIcon,
  LockIcon,
  CheckBadgeIcon,
} from '../../components/ui.jsx'

export default function JobDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const job = JOB_REQUESTS.find((j) => j.id === id) || JOB_REQUESTS[0]

  return (
    <div className="space-y-4">
      <ScreenHeader title="Job request" onBack={() => navigate('/pro')} />

      <Card>
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-lg font-extrabold text-slate-900">{job.title}</h2>
        </div>
        <Badge tone="muted" className="mt-2">
          {job.service}
        </Badge>

        <div className="mt-4 space-y-3">
          <InfoRow icon={<MapPinIcon className="h-5 w-5" />} label="Location">
            {job.area}
          </InfoRow>
          <InfoRow icon={<ClockIcon className="h-5 w-5" />} label="Preferred time">
            {job.when}
          </InfoRow>
        </div>
      </Card>

      {job.advance && (
        <TrustNote
          tone="emerald"
          icon={<CheckBadgeIcon className="h-5 w-5" />}
          title="Requested 3+ hrs in advance"
        >
          Enough lead time to plan your route and parts.
        </TrustNote>
      )}

      {/* Masked contact — highlighted trust element */}
      <TrustNote tone="blue" icon={<LockIcon className="h-5 w-5" />} title="Contact stays masked until you accept">
        <span className="font-mono text-base tracking-wider text-blue-900">
          {job.customer} · {job.maskedPhone}
        </span>
      </TrustNote>

      <div className="grid grid-cols-2 gap-3">
        <Button variant="danger" onClick={() => navigate('/pro')}>
          Decline
        </Button>
        <Button variant="success" onClick={() => navigate('/pro/quote')}>
          Accept
        </Button>
      </div>
    </div>
  )
}

function InfoRow({ icon, label, children }) {
  return (
    <div className="flex items-center gap-3">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-500">
        {icon}
      </span>
      <div>
        <p className="text-xs font-medium text-slate-400">{label}</p>
        <p className="font-semibold text-slate-800">{children}</p>
      </div>
    </div>
  )
}
