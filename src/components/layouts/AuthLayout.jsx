import './AuthLayout.css'
import { Outlet } from 'react-router-dom'

// Components

export default function AuthLayout() {
  return (
    <main className="auth-layout">
      <Outlet />
    </main>
  )
}
