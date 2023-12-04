import { NavLink } from 'react-router-dom'

export default function TextLink({ to, text }) {
  return <NavLink to={to}>{text}</NavLink>
}
