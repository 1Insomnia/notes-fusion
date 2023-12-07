import { Outlet, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from '@/context/AuthProvider'
import { useAppStore } from '@/context/AppStore'
import supabase from '@/lib/supabase'
// Components
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'

export default function AuthLayout() {
  const { user } = useAuth()

  const { setNotes } = useAppStore()

  useEffect(() => {
    const fetcher = async () => {
      let { data: notes, error } = await supabase
        .from('notes')
        .select('*')
        .eq('user_id', user.id)
      setNotes(notes)
    }
    fetcher()
  }, [user.id, setNotes])

  return user ? (
    <div className="text-foreground bg-background">
      <div className="flex w-screen min-h-screen relative">
        <SideBar />
        <main className="w-full">
          <Header />
          <Outlet />
        </main>
      </div>
    </div>
  ) : (
    <Navigate to="/login" />
  )
}
