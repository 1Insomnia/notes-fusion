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
      <label className="block mb-2 capitalize text-primary" htmlFor={label}>
        {label}
        {required && '*'}
      </label>
      <textarea
        className="outline-none block w-full text-fg rounded-md p-2 min-h-[280px] border-[1px] border-bd focus-within:border-primary bg-bg"
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
