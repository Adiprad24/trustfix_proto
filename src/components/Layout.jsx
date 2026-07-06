import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { ShieldIcon, MapPinIcon } from './ui.jsx'

export default function Layout() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const role = pathname.startsWith('/pro') ? 'pro' : 'customer'

  return (
    <div className="flex min-h-screen justify-center bg-slate-200">
      <div className="flex min-h-screen w-full max-w-md flex-col bg-slate-50 shadow-xl ring-1 ring-slate-200">
        <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 px-4 pb-3 pt-3 backdrop-blur">
          <div className="mb-3 flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-lg bg-blue-600 text-white">
              <ShieldIcon className="h-5 w-5" />
            </div>
            <span className="text-lg font-extrabold tracking-tight text-slate-900">
              TrustFix
            </span>
            <span className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-slate-400">
              <MapPinIcon className="h-3.5 w-3.5" />
              Koramangala
            </span>
          </div>

          {/* Role switcher */}
          <div className="grid grid-cols-2 gap-1 rounded-xl bg-slate-100 p-1">
            <RoleButton active={role === 'customer'} onClick={() => navigate('/')}>
              Customer
            </RoleButton>
            <RoleButton active={role === 'pro'} onClick={() => navigate('/pro')}>
              Professional
            </RoleButton>
          </div>
        </header>

        <main className="flex-1 px-4 py-5">
          <Outlet />
        </main>

        <footer className="border-t border-slate-200 px-4 py-3 text-center text-xs text-slate-400">
          TrustFix • Demo prototype
        </footer>
      </div>
    </div>
  )
}

function RoleButton({ active, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-lg py-2.5 text-sm font-bold transition ${
        active ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'
      }`}
    >
      {children}
    </button>
  )
}
