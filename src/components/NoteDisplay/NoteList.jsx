import PropTypes from 'prop-types'
// Compos
import Note from '@/components/NoteDisplay/Note'

export default function NoteList({ notes, setActiveNote, setVisible }) {
  return (
    <ul className="space-y-5">
      {notes.map(({ id, title, content }) => (
        <Note
          id={id}
          title={title}
          content={content}
          key={id}
          setActiveNote={setActiveNote}
          setVisible={setVisible}
        />
      ))}
    </ul>
  )
}

NoteList.propTypes = {
  notes: PropTypes.array,
  setActiveNote: PropTypes.func,
  setVisible: PropTypes.func
}
