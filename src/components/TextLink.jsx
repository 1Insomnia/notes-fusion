import PropTypes from 'prop-types'
import cn from 'classnames'

import { NavLink } from 'react-router-dom'

export default function TextLink({ to, text, className }) {
  return (
    <NavLink
      to={to}
      className={cn('text-secondary hover:underline', className)}
    >
      {text}
    </NavLink>
  )
}

TextLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string
}
