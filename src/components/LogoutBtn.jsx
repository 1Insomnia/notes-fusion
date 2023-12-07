import PropTypes from 'prop-types'
import { useAuth } from '@/context/AuthProvider'

export default function LogoutBtn({ className }) {
  const { logout } = useAuth()

  return (
    <button className={className} onClick={logout}>
      Logout
    </button>
  )
}

LogoutBtn.propTypes = {
  className: PropTypes.string
}
