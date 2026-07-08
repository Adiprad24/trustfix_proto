# TrustFix

A mobile-first prototype for booking **trusted, background-verified home-service professionals** — AC repair, plumbing, electrical, carpentry, cleaning, and pest control. The design leads with trust: customers approve a transparent quote before any work begins, professionals are verified, and contact numbers stay masked.

> **Demo prototype** — front-end only, with hardcoded mock data. There is no backend, database, or real payment/authentication.

## Highlights

- **Two roles in one app** — switch between the **Customer** and **Professional** flows from the header.
- **Trust-first UX** — verified-pro badges, "approve before work" quotes, and masked contact details.
- **Mobile framed** — laid out as a phone-sized screen (`max-w-md`) so it reads like a native app.

## Tech stack

- [React 19](https://react.dev/)
- [Vite 8](https://vite.dev/) (dev server + build)
- [Tailwind CSS 4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [React Router 7](https://reactrouter.com/)

## Getting started

Requires [Node.js](https://nodejs.org/) (18+ recommended).

```bash
# install dependencies
npm install

# start the dev server (with HMR)
npm run dev

# build for production
npm run build

# preview the production build locally
npm run preview

# lint
npm run lint
```

Then open the URL Vite prints (default: `http://localhost:5173`).

## App flows

The app has two role-based flows, switchable from the header.

### Customer

| Route | Screen | Purpose |
| --- | --- | --- |
| `/` | Home | Pick a service category and location |
| `/customer/pros` | Pros | Browse verified professionals nearby |
| `/customer/booking` | Booking | Choose a date and time slot |
| `/customer/status` | Status | Track the booking |
| `/customer/quote` | Quote | Review and **approve** an itemized quote before work |
| `/customer/review` | Review | Rate the professional after the job |

### Professional

| Route | Screen | Purpose |
| --- | --- | --- |
| `/pro` | Dashboard | Incoming job requests |
| `/pro/job/:id` | Job Detail | View a single job request |
| `/pro/quote` | Submit Quote | Send an itemized quote to the customer |
| `/pro/rate` | Rate Customer | Rate the customer after the job |

Any unknown route redirects to Home.

## Project structure

```
src/
├── main.jsx              # App entry, router + context providers
├── App.jsx               # Route definitions
├── index.css             # Tailwind entry + global styles
├── context/
│   └── AppContext.jsx    # Shared state (category, location, selected pro, booking)
├── components/
│   ├── Layout.jsx        # Header, role switcher, footer shell
│   └── ui.jsx            # Reusable UI primitives + icons
├── data/
│   └── mock.js           # Hardcoded categories, pros, jobs, quote items, slots
└── pages/
    ├── customer/         # Customer-facing screens
    └── pro/              # Professional-facing screens
```

Shared UI state (selected category, location, pro, and booking details) lives in [`AppContext`](src/context/AppContext.jsx). All displayed content comes from [`src/data/mock.js`](src/data/mock.js).
