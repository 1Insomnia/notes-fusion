import PropTypes from 'prop-types'

export default function Container({ children }) {
  return <div className="container max-w-2xl">{children}</div>
}

Container.propTypes = {
  children: PropTypes.node
}
