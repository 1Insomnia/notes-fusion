// Fetch notes and display
import Container from '@/components/Container'
import Spacer from '@/components/Spacer'
import { useState, useEffect } from 'react'
import { useAuth } from '@/context/AuthProvider'
import supabase from '@/lib/supabase'

// Compos
import NoteList from '@/components/NoteDisplay/NoteList'
import NoteViewModal from '@/components/NoteDisplay/NoteViewModal'

export default function Notes() {
  const [activeNote, setActiveNote] = useState(null)
  const [visible, setVisible] = useState(false)

  const { user } = useAuth()

  const [notes, setNotes] = useState([])

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

  console.log(activeNote)
  console.log(visible)

  return (
    <Container>
      <Spacer>
        <div className="spacer-y">
          <h1 className="mb-10">Notes</h1>
          <NoteList
            notes={notes}
            setActiveNote={setActiveNote}
            setVisible={setVisible}
          />
        </div>
        <NoteViewModal
          activeNote={activeNote}
          visible={visible}
          setVisible={setVisible}
        />
      </Spacer>
    </Container>
  )
}
