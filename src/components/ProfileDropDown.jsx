import PropTypes from 'prop-types'
import cn from 'classnames'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import LogoutBtn from '@/components/LogoutBtn'

export default function ProfileDropDown({ email }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="">
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="w-full flex items-center justify-between hover:bg-[#e2e2e1] p-2"
      >
        <span className="block font-bold tracking-tighter">[{email}]</span>
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
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>
      <div
        className={cn(
          'text-sm font-normal text-muted-foreground ',
          isOpen ? 'block' : 'hidden'
        )}
      >
        <Link className="py-2 block hover:bg-[#e2e2e1] p-2" to="/">
          Add Note
        </Link>
        <Link className="py-2 block hover:bg-[#e2e2e1] p-2" to="/profile">
          Profile
        </Link>
        <LogoutBtn className="w-full text-left p-2 bg-foreground text-background hover:text-card-background/90" />
      </div>
    </div>
  )
}

ProfileDropDown.propTypes = {
  email: PropTypes.string
}
