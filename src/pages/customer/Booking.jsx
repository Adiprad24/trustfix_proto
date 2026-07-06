import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext.jsx'
import { TIME_SLOTS } from '../../data/mock.js'
import {
  Avatar,
  Badge,
  Button,
  Card,
  Field,
  Modal,
  ScreenHeader,
  TrustNote,
  inputClass,
  CheckBadgeIcon,
  ShieldIcon,
} from '../../components/ui.jsx'

function tomorrowISO() {
  const d = new Date(Date.now() + 24 * 60 * 60 * 1000)
  return d.toISOString().slice(0, 10)
}

export default function Booking() {
  const navigate = useNavigate()
  const { selectedPro, booking, setBooking } = useApp()
  const [date, setDate] = useState(booking.date || tomorrowISO())
  const [time, setTime] = useState(booking.time || TIME_SLOTS[1])
  const [showCancel, setShowCancel] = useState(false)

  function confirm() {
    setBooking({ date, time })
    navigate('/customer/status')
  }

  return (
    <div className="space-y-4">
      <ScreenHeader
        title="Confirm your booking"
        onBack={() => navigate('/customer/pros')}
      />

      {selectedPro && (
        <Card className="flex items-center gap-3">
          <Avatar name={selectedPro.name} />
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900">{selectedPro.name}</span>
              <Badge tone="verified">
                <CheckBadgeIcon /> Verified
              </Badge>
            </div>
            <p className="text-sm text-slate-500">
              {selectedPro.autoMatched ? 'Auto-matched for you' : selectedPro.skills}
            </p>
          </div>
        </Card>
      )}

      <Card className="space-y-4">
        <Field label="Choose date">
          <input
            type="date"
            className={inputClass}
            value={date}
            min={new Date().toISOString().slice(0, 10)}
            onChange={(e) => setDate(e.target.value)}
          />
        </Field>

        <Field label="Choose time">
          <div className="grid grid-cols-3 gap-2">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setTime(slot)}
                className={`cursor-pointer rounded-xl border-2 px-2 py-3 text-sm font-semibold transition ${
                  time === slot
                    ? 'border-blue-600 bg-blue-50 text-blue-700'
                    : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </Field>
      </Card>

      {/* Inspection fee — clarity / trust element */}
      <TrustNote tone="blue" icon={<ShieldIcon className="h-5 w-5" />} title="Inspection fee: ₹150">
        Fully adjusted against your final repair cost. No surprise charges.
      </TrustNote>

      <Button variant="success" onClick={confirm}>
        Confirm Booking
      </Button>
      <Button variant="danger" onClick={() => setShowCancel(true)}>
        Cancel Booking
      </Button>

      {showCancel && (
        <Modal onClose={() => setShowCancel(false)}>
          <h2 className="text-lg font-bold text-slate-900">Cancel this booking?</h2>
          <p className="mt-1 text-sm text-slate-500">
            Your slot with {selectedPro?.name || 'the professional'} will be released. This
            can't be undone.
          </p>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Button variant="outline" onClick={() => setShowCancel(false)}>
              Keep booking
            </Button>
            <Button variant="danger" onClick={() => navigate('/')}>
              Yes, cancel
            </Button>
          </div>
        </Modal>
      )}
    </div>
  )
}
