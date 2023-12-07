import Container from '@/components/Container'
import CreateNoteForm from '@/components/Form/CreateNoteForm'

import { useEffect } from 'react'
import supabase from '@/lib/supabase'
import { useAuth } from '@/context/AuthProvider'
import { useAppStore } from '@/context/AppStore'

export default function Dashboard() {
  const { user } = useAuth()
  const { setNotes } = useAppStore()

  useEffect(() => {
    const fetcher = async () => {
      let { data: notes, error } = await supabase
        .from('notes')
        .select('*')
        .eq('user_id', user.id)
      setNotes(notes)
    }
    fetcher()
  }, [user.id, setNotes])

  return (
    <Container>
      <div className="pt-5">
        <h1>Add Note</h1>
        <CreateNoteForm />
      </div>
    </Container>
  )
}
