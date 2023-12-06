import PropTypes from 'prop-types'

export default function TextArea({
  name,
  label,
  register,
  errors,
  required,
  focus = false,
  validationSchema
}) {
  return (
    <div className="">
      <label
        className="block mb-2 capitalize font-medium text-sm"
        htmlFor={label}
      >
        {label}
        {required && '*'}
      </label>
      <textarea
        className="border border-border outline-none block w-full text-fg rounded-md p-2 min-h-[280px] lg:min-h-[500px] focus-within:border-primary-background bg-background"
        id={name}
        name={name}
        autoFocus={focus}
        autoComplete="off"
        {...register(name, validationSchema)}
      ></textarea>
      {errors && errors[name]?.type === 'required' && (
        <span className="text-error">{errors[name]?.message}</span>
      )}
      {errors && errors[name]?.type === 'validate' && (
        <span className="text-error">{errors[name]?.message}</span>
      )}
    </div>
  )
}

TextArea.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  focus: PropTypes.bool,
  errors: PropTypes.object,
  validationSchema: PropTypes.object,
  required: PropTypes.any,
  register: PropTypes.any
}
