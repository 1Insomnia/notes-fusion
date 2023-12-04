import { useState } from 'react'

import RegisterForm from '@/components/form/RegisterForm'

export default function Register() {
  const [user, setUser] = useState({
    email: '',
    password: '',
    passwordConfirm: ''
  })

  console.log(user)

  return (
    <div>
      <RegisterForm setUser={setUser} />
    </div>
  )
}
