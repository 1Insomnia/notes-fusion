export default function FormInput({
  name,
  label,
  register,
  errors,
  required,
  type,
  validationSchema,
  cn
}) {
  return (
    <div className={cn}>
      <label className="" htmlFor={label}>
        {label}
        {required && '*'}
      </label>
      <input
        className=""
        id={name}
        name={name}
        type={type}
        {...register(name, validationSchema)}
      />
      {errors && errors[name]?.type === 'required' && (
        <span className="">{errors[name]?.message}</span>
      )}
      {errors && errors[name]?.type === 'validate' && (
        <span className="">{errors[name]?.message}</span>
      )}
    </div>
  )
}
