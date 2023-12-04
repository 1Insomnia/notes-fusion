import FormInput from '@/components/form/FormInput'
import FormBtn from '@/components/form/FormBtn'
import TextLink from '@/components/TextLink'

import { useForm } from 'react-hook-form'

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm()
  console.log(errors)

  const onSubmit = data => {
    reset()
  }

  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="form-title">Register</h1>
        <FormInput
          type="email"
          name="email"
          label="Email"
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
          label="Password"
          errors={errors}
          register={register}
          validationSchema={{
            required: 'Password is required'
          }}
          required
        />
        <FormInput
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
        <FormBtn text="Register" />
        <div className="form-link">
          <TextLink to="/login" text="Already have an accout ? Login." />
        </div>
      </form>
    </div>
  )
}
