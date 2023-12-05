import { useAuth } from '@/context/AuthProvider'

export default function LogoutBtn() {
  const { logout } = useAuth()

  return (
    <button
      className="block h-10 uppercase font-bold tracking-tighter text-fg-d bg-primary-400 px-6 rounded-md hover:opacity-80"
      onClick={logout}
    >
      Logout
    </button>
  )
}
