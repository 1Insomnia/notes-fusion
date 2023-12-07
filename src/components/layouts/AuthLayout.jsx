import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthProvider'

// Components
import SideBar from '@/components/SideBar'

export default function AuthLayout() {
  const { user } = useAuth()

  return user ? (
    <div className="text-foreground bg-background">
      <div className="flex w-screen min-h-screen relative">
        <SideBar />
        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  )
}
