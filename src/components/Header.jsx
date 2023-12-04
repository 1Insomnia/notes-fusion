import './Header.css'

import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/">Dashboard</NavLink>
        <div className="nav-menu">
          <NavLink to="/profile" className="nav-menu-link">
            Profile
          </NavLink>
          <button className="logout-btn">Logout</button>
        </div>
      </nav>
    </header>
  )
}
export default Header
