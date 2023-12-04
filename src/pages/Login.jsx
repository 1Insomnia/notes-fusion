/*  */
import './Login.css'
import { useForm } from 'react-hook-form'
// Components
import FormBtn from '@/components/form/FormBtn'
import TextLink from '@/components/TextLink'
import FormInput from '@/components/form/FormInput'

export default function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const onSubmit = data => {
    console.log(data)
    reset()
  }

  return (
    <div className="login-form-wrapper">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form-title">Login</h1>
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
            required: 'Email is required'
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
