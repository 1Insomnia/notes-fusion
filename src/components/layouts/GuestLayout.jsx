import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthProvider'

export default function GuestLayout() {
  const { user } = useAuth()

  return !user ? (
    <main className="text-fg bg-bg min-h-screen">
      <div className="container max-w-2xl">
        <Outlet />
      </div>
    </main>
  ) : (
    <Navigate to="/" />
  )
}
