import { useAuth } from '@/context/AuthProvider'

export default function Dashboard() {
  const { user } = useAuth()
  console.log(user)

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
