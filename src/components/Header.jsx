import { NavLink } from 'react-router-dom'
import LogoutBtn from '@/components/LogoutBtn'
import Container from '@/components/Container'

function Header() {
  return (
    <header className="fixed w-full top-0 left-0 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <nav className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <NavLink to="/" className="font-bold tracking-tighter logo">
              Dashboard
            </NavLink>
            <NavLink
              to="/notes"
              className="text-sm text-foreground/60 hover:text-foreground/80 nav-link"
            >
              Notes
            </NavLink>
            <NavLink
              to="/profile"
              className="text-sm text-foreground/60 hover:text-foreground/80 nav-link"
            >
              Profile
            </NavLink>
          </div>
          <LogoutBtn />
        </nav>
      </Container>
    </header>
  )
}
export default Header
