/*  */
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
// Components
import FormBtn from '@/components/form/FormBtn'
import TextLink from '@/components/TextLink'
import FormInput from '@/components/form/FormInput'

import supabase from '@/lib/supabase'

export default function Form() {
  const [loginErrors, setLoginErrors] = useState([])
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const login = async (email, password) => {
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password
      })
      setLoginErrors(prevErrors => [...prevErrors, error])
      navigate('/')
    } catch (error) {
      setLoginErrors(prevErrors => [...prevErrors, error])
    }
  }

  const onSubmit = async data => {
    console.log(data)
    login(data.email, data.password)
    reset()
  }

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form-title">Login</h1>
        <p className="text-error">{loginErrors}</p>
        <FormInput
          focus={true}
          type="email"
          name="email"
          label="email"
          errors={errors}
          register={register}
          validationSchema={{
            required: 'Email is required'
          }}
          required
        />
        <FormInput
          type="password"
          name="password"
          label="password"
          errors={errors}
          register={register}
          validationSchema={{
            required: 'Password is required'
          }}
          required
        />
        <FormBtn text="Login" />
        <div className="form-link">
          <TextLink to="/register" text="Don't have an accout ? Register." />
        </div>
      </form>
    </div>
  )
}
