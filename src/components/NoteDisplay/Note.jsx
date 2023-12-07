import PropTypes from 'prop-types'
import { useAppStore } from '@/context/AppStore'
import { Link } from 'react-router-dom'
import cn from 'classnames'

export default function Note({ id, title, content }) {
  const { activeNote, setActiveNote } = useAppStore()

  const handleView = () => {
    setActiveNote({ id: id, title: title, content: content })
  }

  return (
    <li
      className={cn(
        'text-muted-foreground hover:bg-[#e2e2e1] p-2',
        activeNote.id === id && 'bg-[#e2e2e1]'
      )}
      onClick={handleView}
    >
      <Link to={`/${id}/edit`}>
        <div className="flex items-center justify-between">
          <h3 className="truncate text-ellipsis m-0 text-sm font-normal">
            {title}
          </h3>
          <button className="w-5 h-5  flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </Link>
    </li>
  )
}

Note.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string
}
