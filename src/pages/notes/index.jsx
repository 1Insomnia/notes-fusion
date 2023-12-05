// Fetch notes and display
import Container from '@/components/Container'
import Spacer from '@/components/Spacer'
import { useState, useEffect } from 'react'
import { useAuth } from '@/context/AuthProvider'
import supabase from '@/lib/supabase'

// Compos
import NoteList from '@/components/NoteDisplay/NoteList'

export default function Notes() {
  const { user } = useAuth()

  const [notes, setNotes] = useState([])
  const [fetchErrors, setFetchErrors] = useState(null)

  useEffect(() => {
    const fetcher = async () => {
      let { data: notes, error } = await supabase
        .from('notes')
        .select('*')
        .eq('user_id', user.id)
      setNotes(notes)
    }
    fetcher()
  }, [user.id])

  return (
    <Container>
      <Spacer>
        <div className="spacer-y">
          <h1 className="mb-10">Notes</h1>
          <NoteList notes={notes} />
        </div>
      </Spacer>
    </Container>
  )
}
