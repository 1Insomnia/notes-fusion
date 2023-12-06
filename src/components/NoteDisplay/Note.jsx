import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import { useAppStore } from '@/context/AppStore'

import NoteButton from '@/components/NoteDisplay/NoteButton'

export default function Note({ id, title, content }) {
  const { setActiveNote, setVisible } = useAppStore()
  const handleView = () => {
    setActiveNote({ id: id, title: title, content: content })
    setVisible(prevVisible => !prevVisible)
  }

  return (
    <motion.li
      className="max-w-sm shadow-md rounded-lg border border-border"
      animate={{ opacity: [0, 100] }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex align-center justify-end">
        <NoteButton type="view" onClick={handleView} />
        <NoteButton type="edit" to={`/notes/${id}/edit`} />
        <NoteButton type="delete" />
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
  content: PropTypes.string
}
