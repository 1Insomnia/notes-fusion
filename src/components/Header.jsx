import './Header.css'

import { NavLink } from 'react-router-dom'
import LogoutBtn from '@/components/LogoutBtn'
import Container from '@/components/Container'

function Header() {
  return (
    <header className="header">
      <Container>
        <nav className="nav">
          <NavLink to="/">Dashboard</NavLink>
          <div className="nav-menu">
            <NavLink to="/notes" className="nav-menu-link">
              Notes
            </NavLink>
            <NavLink to="/profile" className="nav-menu-link">
              Profile
            </NavLink>
            <LogoutBtn />
          </div>
        </nav>
      </Container>
    </header>
  )
}
export default Header
