import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center pt-20 text-fg bg-bg">
      <h1>Hello, seems like you lost your way!</h1>
      <p>
        Head back{' '}
        <Link className="text-secondary underline" to="/">
          Home
        </Link>
      </p>
    </div>
  )
}
