// Comps
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

  const onSubmit = data => {
    console.log(data)
    reset()
  }

  return (
    <div className="pt-10">
      <form
        className="p-5 rounded-lg bg-card-background text-card-foreground shadow-[0_2px_5px_rgba(15,23,42,0.08)]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className="mb-5">Register</h1>
        <FormInput
          type="email"
          name="email"
          label="Email"
          htmlFor="email"
          errors={errors}
          register={register}
          focus={true}
          validationSchema={{
            required: 'Email is required'
          }}
          required
        />
        <FormInput
          type="password"
          name="password"
          htmlFor="password"
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
          label="password confirm"
          htmlFor="passwordConfirm"
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
        />
        <FormBtn text="Register" />
        <div className="text-right mt-5">
          <TextLink to="/login" text="Already have an accout ? Login." />
        </div>
      </form>
    </div>
  )
}
