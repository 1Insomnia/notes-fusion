import { Outlet, Navigate } from 'react-router-dom'
// Components
import Header from '@/components/Header'
import { useAuth } from '@/context/AuthProvider'

export default function AuthLayout() {
  const { user } = useAuth()

  return user ? (
    <>
      <Header />
      <main className="auth-layout">
        <Outlet />
      </main>
    </>
  ) : (
    <Navigate to="/login" />
  )
}
