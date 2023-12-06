import PropTypes from 'prop-types'
import cn from 'classnames'
import Container from '@/components/Container'
import Spacer from '@/components/Spacer'

export default function NoteViewModal({ setVisible, visible, activeNote }) {
  if (!activeNote) return

  const { title, content } = activeNote

  const handleClick = e => {
    e.preventDefault()
    setVisible(prevVisible => !prevVisible)
  }

  return (
    <div
      className={cn(
        'fixed top-0 left-0 w-full h-screen bg-background/90 bg-blur-md z-50 transform duration-500 ease-in-out',
        visible ? 'scale-100' : 'scale-0'
      )}
    >
      <div className="h-full relative">
        <button
          className="absolute top-0 right-0 h-16 w-16 text-center bg-foreground flex items-center justify-center"
          onClick={handleClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-primary-foreground"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Container>
          <Spacer>
            <div className="whitespace-pre-line">
              <h1 className="text-foreground">{title}</h1>
              <p className="text-foreground">{content}</p>
            </div>
          </Spacer>
        </Container>
      </div>
    </div>
  )
}

NoteViewModal.propTypes = {
  visible: PropTypes.bool,
  setVisible: PropTypes.func,
  activeNote: PropTypes?.object
}
