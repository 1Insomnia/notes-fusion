import { RouterProvider } from 'react-router-dom'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from 'react-router-dom'

import AuthLayout from '@/components/layouts/AuthLayout'
import GuestLayout from '@/components/layouts/GuestLayout'
// Pages
// Auth
import Dashboard from '@/pages/Dashboard'
// Guest
import Login from '@/pages/Login'
import Register from '@/pages/Register'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Auth */}
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Dashboard />} />
      </Route>
      {/* Guest */}
      <Route element={<GuestLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router}></RouterProvider>
}
