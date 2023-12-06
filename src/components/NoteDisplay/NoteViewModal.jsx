import cn from 'classnames'
import { useState } from 'react'

export default function NoteViewModal() {
  const [visible, setVisible] = useState(true)

  const handleClick = e => {
    e.preventDefault()
    setVisible(!visible)
  }

  return (
    <div
      className={cn(
        'fixed top-0 left-0 w-full h-screen bg-background/90 bg-blur-md z-50 transform',
        visible ? 'scale-100' : 'scale-0'
      )}
    >
      <div className="h-full flex items-center justify-center relative">
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
        <h1 className="text-foreground">Note View</h1>
      </div>
    </div>
  )
}
