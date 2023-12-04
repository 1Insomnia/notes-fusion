import { Outlet } from 'react-router-dom'
// Components
import Header from '@/components/Header'

export default function AuthLayout() {
  return (
    <>
      <Header />
      <main className="auth-layout">
        <Outlet />
      </main>
    </>
  )
}
