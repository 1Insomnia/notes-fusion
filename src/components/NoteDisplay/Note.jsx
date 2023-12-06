import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import NoteButton from '@/components/NoteDisplay/NoteButton'

export default function Note({
  id,
  title,
  content,
  setActiveNote,
  setVisible
}) {
  // p-5 border border-border bg-card-background text-card-foreground shadow-sm flex justify-between items-center py-3 px-5

  return (
    <motion.li
      className="max-w-sm shadow-md rounded-lg border border-border"
      animate={{ opacity: [0, 100] }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex align-center justify-end">
        <NoteButton type="view" />
        <NoteButton type="edit" to={`/notes/${id}/edit`} />
        <NoteButton type="delete" onClick={() => console.log(id)} />
      </div>
      <div className="p-5">
        <h3 className="truncate text-ellipsis text-sm m-0">{title}</h3>
        <p className="truncate text-muted-foreground text-ellipsis mt-2">
          {content}
        </p>
      </div>
    </motion.li>
  )
}

Note.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  setActiveNote: PropTypes.func,
  setVisible: PropTypes.func
}
