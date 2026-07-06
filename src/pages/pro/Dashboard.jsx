import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { JOB_REQUESTS } from '../../data/mock.js'
import {
  Badge,
  Card,
  Field,
  Toggle,
  inputClass,
  ChevronRightIcon,
  MapPinIcon,
  ClockIcon,
  LockIcon,
} from '../../components/ui.jsx'

export default function Dashboard() {
  const navigate = useNavigate()
  const [available, setAvailable] = useState(true)
  const [from, setFrom] = useState('09:00')
  const [to, setTo] = useState('18:00')

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900">Hi, Suresh 👋</h1>
        <p className="mt-1 text-slate-500">Manage your availability and job requests.</p>
      </div>

      {/* Availability + working hours */}
      <Card className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold text-slate-900">
              {available ? 'You’re Available' : 'You’re Unavailable'}
            </p>
            <p className="text-sm text-slate-500">
              {available ? 'Receiving new job requests' : 'New requests are paused'}
            </p>
          </div>
          <Toggle checked={available} onChange={setAvailable} label="Availability" />
        </div>

        <div className="border-t border-slate-100 pt-4">
          <p className="mb-2 text-sm font-semibold text-slate-700">Working hours</p>
          <div className="grid grid-cols-2 gap-3">
            <Field label="From">
              <input
                type="time"
                className={inputClass}
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </Field>
            <Field label="To">
              <input
                type="time"
                className={inputClass}
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </Field>
          </div>
        </div>
      </Card>

      <div className="flex items-center justify-between pt-1">
        <h2 className="font-bold text-slate-900">Incoming requests</h2>
        <Badge tone="info">{JOB_REQUESTS.length} new</Badge>
      </div>

      {!available && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
          You’re offline. Turn on availability to accept new requests.
        </div>
      )}

      <div className={available ? 'space-y-3' : 'space-y-3 opacity-50'}>
        {JOB_REQUESTS.map((job) => (
          <button
            key={job.id}
            type="button"
            disabled={!available}
            onClick={() => navigate(`/pro/job/${job.id}`)}
            className="flex w-full cursor-pointer items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition hover:border-blue-300 hover:shadow disabled:cursor-not-allowed"
          >
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2">
                <p className="truncate font-bold text-slate-900">{job.title}</p>
                {job.advance && <Badge tone="verified">3+ hrs notice</Badge>}
              </div>
              <p className="mt-1 flex items-center gap-1 text-sm text-slate-500">
                <MapPinIcon className="h-4 w-4" /> {job.area}
              </p>
              <p className="mt-0.5 flex items-center gap-1 text-sm text-slate-500">
                <ClockIcon className="h-4 w-4" /> {job.when}
              </p>
              <p className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-slate-400">
                <LockIcon className="h-3.5 w-3.5" /> Contact masked
              </p>
            </div>
            <ChevronRightIcon className="h-5 w-5 shrink-0 text-slate-400" />
          </button>
        ))}
      </div>
    </div>
  )
}
