// Hardcoded mock data — no backend.

export const CATEGORIES = [
  'AC & Appliance Repair',
  'Plumbing',
  'Electrical Work',
  'Carpentry',
  'Home Cleaning',
  'Pest Control',
]

export const PROS = [
  {
    id: 'suresh',
    name: 'Suresh K.',
    verified: true,
    isNew: false,
    rating: 4.8,
    jobs: 320,
    distanceKm: 1.2,
    priceMin: 400,
    priceMax: 600,
    skills: 'AC & Refrigerator specialist',
  },
  {
    id: 'raghu',
    name: 'Raghu M.',
    verified: true,
    isNew: false,
    rating: 4.6,
    jobs: 210,
    distanceKm: 2.0,
    priceMin: 400,
    priceMax: 550,
    skills: 'Appliance repair • 6 yrs',
  },
  {
    id: 'anil',
    name: 'Anil P.',
    verified: true,
    isNew: true,
    rating: null,
    jobs: 7,
    distanceKm: 1.6,
    priceMin: 400,
    priceMax: 500,
    skills: 'AC installation & repair',
  },
]

// Quote line items shown to the customer for approval.
export const QUOTE_ITEMS = [
  { label: 'Inspection', note: 'Adjusted against repair cost', amount: 150 },
  { label: 'Labour', note: 'AC servicing & gas top-up', amount: 500 },
  { label: 'Spare part', note: 'Cooling fan capacitor', amount: 350 },
]

export const JOB_REQUESTS = [
  {
    id: 'j1',
    title: 'AC repair — not cooling',
    service: 'AC & Appliance Repair',
    area: 'Koramangala, Zone 2',
    when: 'Tomorrow, 10:00 AM',
    customer: 'Meera R.',
    maskedPhone: '+91 •••• ••90',
    advance: true,
  },
  {
    id: 'j2',
    title: 'Washing machine not draining',
    service: 'AC & Appliance Repair',
    area: 'Koramangala, Zone 2',
    when: 'Tomorrow, 1:30 PM',
    customer: 'Arjun D.',
    maskedPhone: '+91 •••• ••41',
    advance: true,
  },
  {
    id: 'j3',
    title: 'Refrigerator making noise',
    service: 'AC & Appliance Repair',
    area: 'Koramangala, Zone 1',
    when: 'Wed, 5:00 PM',
    customer: 'Priya S.',
    maskedPhone: '+91 •••• ••08',
    advance: false,
  },
]

export const TIME_SLOTS = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '02:00 PM',
  '04:00 PM',
  '06:00 PM',
]
