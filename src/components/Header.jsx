import { NavLink } from 'react-router-dom'
import LogoutBtn from '@/components/LogoutBtn'
import Container from '@/components/Container'

function Header() {
  return (
    <header className="fixed w-full top-0 left-0 bg-bg-l border-b-[3px] border-b-primary">
      <Container>
        <nav className="h-16 flex items-center justify-between">
          <NavLink to="/">Dashboard</NavLink>
          <div className="flex items-center gap-4">
            <NavLink to="/notes" className="hover:text-primary hover:underline">
              Notes
            </NavLink>
            <NavLink
              to="/profile"
              className="hover:text-primary hover:underline"
            >
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
