import './Spacer.style.css'
import PropTypes from 'prop-types'

export default function Spacer({ children }) {
  return <div className="spacer">{children}</div>
}

Spacer.propTypes = {
  children: PropTypes.node
}
