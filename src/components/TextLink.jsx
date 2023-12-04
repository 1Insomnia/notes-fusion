import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'

export default function TextLink({ to, text }) {
  return (
    <NavLink to={to} className="link">
      {text}
    </NavLink>
  )
}

TextLink.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string
}
