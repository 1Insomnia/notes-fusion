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
import Notes from '@/pages/Notes'
import NoteEdit from '@/pages/Notes/NoteEdit'
// Guest
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import NotFound from '@/pages/NotFound'
import Profile from '@/pages/profile'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      {/* Auth */}
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:id/edit" element={<NoteEdit />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      {/* Guest */}
      <Route element={<GuestLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router}></RouterProvider>
}
