import FormInput from '@/components/form/FormInput'
import FormBtn from '@/components/form/FormBtn'
import TextLink from '@/components/TextLink'

import { useForm } from 'react-hook-form'

export default function RegisterForm({ setUser }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm()
  console.log(errors)

  const onSubmit = data => {
    console.log(data)
    reset()
  }

  return (
    <div>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="mb-10">Register</h1>
        <div className="mb-10">
          <FormInput
            cn="mb-5"
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
            cn="mb-5"
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
          <FormInput
            cn="mb-5"
            type="password"
            name="passwordConfirm"
            label="Password Confirm"
            errors={errors}
            register={register}
            validationSchema={{
              required: 'Password is required',
              validate: val => {
                if (watch('password') !== val) {
                  return 'Your passwords do no match'
                }
              }
            }}
            requiredz
          />
        </div>
        <div className="mb-5">
          <FormBtn text="Register" />
        </div>
        <div className="text-right">
          <TextLink to="/login" text="Already have an accout ? Login." />
        </div>
      </form>
    </div>
  )
}
