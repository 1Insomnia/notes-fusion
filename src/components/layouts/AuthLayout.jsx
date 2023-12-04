import { Outlet } from 'react-router-dom'

// Components

export default function AuthLayout() {
  return (
    <div className="">
      {/* AuthNav */}
      <main className="">
        <Outlet />
      </main>
    </div>
  )
}
