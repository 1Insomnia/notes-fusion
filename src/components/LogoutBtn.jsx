import { useAuth } from '@/context/AuthProvider'
import './LogoutBtn.syle.css'

export default function LogoutBtn() {
  const { logout } = useAuth()

  return (
    <button className="logout-btn" onClick={logout}>
      Logout
    </button>
  )
}
