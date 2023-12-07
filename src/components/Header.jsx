import Container from '@/components/Container'
import { useAppStore } from '@/context/AppStore'

function Header() {
  const { activeNote } = useAppStore()

  return (
    <header className="w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <nav className="h-12 flex items-center justify-between">
          <div className="flex items-center gap-4">{activeNote.title}</div>
        </nav>
      </Container>
    </header>
  )
}
export default Header
