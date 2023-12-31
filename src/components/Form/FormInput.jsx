import PropTypes from 'prop-types'

export default function FormInput({
  name,
  label,
  type,
  register,
  errors,
  required,
  htmlFor,
  focus = false,
  validationSchema
}) {
  return (
    <div className="mb-5">
      <label
        className="block mb-2 capitalize font-medium text-sm"
        htmlFor={htmlFor}
      >
        {label}
        {required && '*'}
      </label>
      <input
        className="outline-none block text-fg bg-background w-full border border-border focus-within:border-foreground px-4 py-3 rounded-md"
        id={name}
        name={name}
        type={type}
        autoFocus={focus}
        autoComplete="off"
        {...register(name, validationSchema)}
      />
      {errors && errors[name]?.type === 'required' && (
        <span className="text-error mt-2 block">{errors[name]?.message}</span>
      )}
      {errors && errors[name]?.type === 'validate' && (
        <span className="text-error mt-2 block">{errors[name]?.message}</span>
      )}
    </div>
  )
}

FormInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  htmlFor: PropTypes.string,
  focus: PropTypes.bool,
  errors: PropTypes.object,
  validationSchema: PropTypes.object,
  required: PropTypes.any,
  register: PropTypes.any
}
