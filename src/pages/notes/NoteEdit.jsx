import { useAppStore } from '@/context/AppStore'

import EditNoteForm from '@/components/Form/EditNoteForm'

export default function Dashboard() {
  return (
    <div className="container">
      <div className="pt-10">
        <EditNoteForm />
      </div>
    </div>
  )
}
