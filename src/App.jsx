import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout.jsx'

import Home from './pages/customer/Home.jsx'
import Pros from './pages/customer/Pros.jsx'
import Booking from './pages/customer/Booking.jsx'
import Status from './pages/customer/Status.jsx'
import Quote from './pages/customer/Quote.jsx'
import Review from './pages/customer/Review.jsx'

import Dashboard from './pages/pro/Dashboard.jsx'
import JobDetail from './pages/pro/JobDetail.jsx'
import SubmitQuote from './pages/pro/SubmitQuote.jsx'
import RateCustomer from './pages/pro/RateCustomer.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Customer flow */}
        <Route path="/" element={<Home />} />
        <Route path="/customer/pros" element={<Pros />} />
        <Route path="/customer/booking" element={<Booking />} />
        <Route path="/customer/status" element={<Status />} />
        <Route path="/customer/quote" element={<Quote />} />
        <Route path="/customer/review" element={<Review />} />

        {/* Professional flow */}
        <Route path="/pro" element={<Dashboard />} />
        <Route path="/pro/job/:id" element={<JobDetail />} />
        <Route path="/pro/quote" element={<SubmitQuote />} />
        <Route path="/pro/rate" element={<RateCustomer />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
