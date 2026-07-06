import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../../context/AppContext.jsx'
import {
  Avatar,
  Button,
  Card,
  Field,
  ScreenHeader,
  StarInput,
  inputClass,
  CheckIcon,
} from '../../components/ui.jsx'

export default function Review() {
  const navigate = useNavigate()
  const { selectedPro } = useApp()
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="flex flex-col items-center py-10 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
          <CheckIcon className="h-8 w-8" />
        </span>
        <h1 className="mt-4 text-xl font-extrabold text-slate-900">Thanks for your review!</h1>
        <p className="mt-1 text-slate-500">
          Your feedback keeps TrustFix professionals accountable.
        </p>
        <Button className="mt-6" onClick={() => navigate('/')}>
          Back to Home
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <ScreenHeader title="Rate your experience" onBack={() => navigate('/customer/quote')} />

      <Card className="flex items-center gap-3">
        <Avatar name={selectedPro?.name || 'Pro'} />
        <div>
          <p className="text-sm text-slate-500">Work completed by</p>
          <p className="font-bold text-slate-900">{selectedPro?.name || 'Your professional'}</p>
        </div>
      </Card>

      <Card className="space-y-4">
        <div>
          <p className="mb-2 text-sm font-semibold text-slate-700">How was the service?</p>
          <StarInput value={rating} onChange={setRating} />
        </div>

        <Field label="Add a comment (optional)">
          <textarea
            className={`${inputClass} min-h-24 resize-none`}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share details about the work, punctuality, behaviour…"
          />
        </Field>
      </Card>

      <Button disabled={rating === 0} onClick={() => setSubmitted(true)}>
        {rating === 0 ? 'Select a rating to submit' : 'Submit'}
      </Button>
    </div>
  )
}
