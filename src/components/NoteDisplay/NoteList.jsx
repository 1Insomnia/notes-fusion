import PropTypes from 'prop-types'
// Compos
import Note from '@/components/NoteDisplay/Note'

export default function NoteList({ notes }) {
  return (
    <ul className="space-y-5">
      {notes.map(({ id, title, content }) => (
        <Note id={id} title={title} content={content} key={id} />
      ))}
    </ul>
  )
}

NoteList.propTypes = {
  notes: PropTypes.array
}
