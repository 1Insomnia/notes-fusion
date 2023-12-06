import { useAuth } from '@/context/AuthProvider'

export default function LogoutBtn() {
  const { logout } = useAuth()

  return (
    <button
      className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-foreground text-primary-foreground shadow hover:bg-foreground/90 h-9 px-4 py-2"
      onClick={logout}
    >
      Logout
    </button>
  )
}
