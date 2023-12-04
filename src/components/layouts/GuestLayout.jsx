import './GuestLayout.css'
import { Outlet } from 'react-router-dom'

export default function GuestLayout() {
  return (
    <main>
      <div className="guest-layout">
        <Outlet />
      </div>
    </main>
  )
}
