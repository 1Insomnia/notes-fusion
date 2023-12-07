import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function SideBarLink({ icon, text, to, onClick }) {
  return (
    <Link
      to={to}
      className="w-full p-2 flex items-center gap-2 text-sm uppercase font-bold hover:bg-[#e2e2e1]"
      onClick={onClick}
    >
      {icon}
      <span className="text-muted-foreground">{text}</span>
    </Link>
  )
}

SideBarLink.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string,
  to: PropTypes?.string,
  onClick: PropTypes?.func
}
