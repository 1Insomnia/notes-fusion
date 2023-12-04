import { Outlet } from 'react-router-dom'

export default function GuestLayout() {
  return (
    <main className="">
      <div className="container">
        <Outlet />
      </div>
    </main>
  )
}
