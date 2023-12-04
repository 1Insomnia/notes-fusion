import './SideContent.css'
import PropTypes from 'prop-types'
// Components
import Note from '@/components/Note'

export default function SideContent({ notes }) {
  return (
    <div className="side-content-wrapper">
      <div className="side-content">
        <div className="notes">
          {notes.map(note => (
            <Note {...note} key={note.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

SideContent.propTypes = {
  notes: PropTypes.array
}
