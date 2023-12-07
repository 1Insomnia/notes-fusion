import PropTypes from 'prop-types'
// Compos
import Note from '@/components/NoteDisplay/Note'

export default function NoteList({ notes }) {
  return (
    <ul className="">
      {notes.map(({ id, title, content }) => (
        <Note id={id} title={title} content={content} key={id} />
      ))}
    </ul>
  )
}

NoteList.propTypes = {
  notes: PropTypes.array,
  setActiveNote: PropTypes.func,
  setVisible: PropTypes.func
}
