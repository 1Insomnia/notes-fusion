import { Outlet, Navigate } from 'react-router-dom'
// Components
import Header from '@/components/Header'
import { useAuth } from '@/context/AuthProvider'

export default function AuthLayout() {
  const { user } = useAuth()

  return user ? (
    <div className="text-fg bg-bg">
      <Header />
      <main className="auth-layout">
        <Outlet />
      </main>
    </div>
  ) : (
    <Navigate to="/login" />
  )
}
