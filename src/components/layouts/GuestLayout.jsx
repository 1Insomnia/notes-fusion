import './GuestLayout.css'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthProvider'

export default function GuestLayout() {
  const { user } = useAuth()

  return !user ? (
    <main>
      <div className="guest-layout">
        <Outlet />
      </div>
    </main>
  ) : (
    <Navigate to="/" />
  )
}
