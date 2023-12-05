import PropTypes from 'prop-types'

export default function Spacer({ children }) {
  return <div className="py-4 md:py-10 lg:py-20">{children}</div>
}

Spacer.propTypes = {
  children: PropTypes.node
}
