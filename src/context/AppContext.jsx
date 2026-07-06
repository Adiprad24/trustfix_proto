import { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

export function AppProvider({ children }) {
  const [category, setCategory] = useState('AC & Appliance Repair')
  const [location, setLocation] = useState('Koramangala, Zone 2')
  const [selectedPro, setSelectedPro] = useState(null)
  const [booking, setBooking] = useState({ date: '', time: '10:00 AM' })

  const value = {
    category,
    setCategory,
    location,
    setLocation,
    selectedPro,
    setSelectedPro,
    booking,
    setBooking,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
