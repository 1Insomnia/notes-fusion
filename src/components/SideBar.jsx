import { useAppStore } from '@/context/AppStore'
import { useAuth } from '@/context/AuthProvider'
import NoteList from '@/components/NoteDisplay/NoteList'
import ProfileDropDown from '@/components/ProfileDropDown'

export default function SideBar() {
  const { notes } = useAppStore()
  const {
    user: { email }
  } = useAuth()

  return (
    <div className="w-[285px] bg-[#fbfbfa]">
      <div className="h-full">
        <ProfileDropDown email={email} />
        <NoteList notes={notes} />
      </div>
    </div>
  )
}
