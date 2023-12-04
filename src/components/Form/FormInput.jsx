import PropTypes from 'prop-types'
import './FormInput.css'

export default function FormInput({
  name,
  label,
  type,
  register,
  errors,
  required,
  focus = false,
  validationSchema
}) {
  return (
    <div className="form-group">
      <label className="form-label" htmlFor={label}>
        {label}
        {required && '*'}
      </label>
      <input
        className="form-input"
        id={name}
        name={name}
        type={type}
        autoFocus={focus}
        {...register(name, validationSchema)}
      />
      {errors && errors[name]?.type === 'required' && (
        <span className="form-errors">{errors[name]?.message}</span>
      )}
      {errors && errors[name]?.type === 'validate' && (
        <span className="form-errors">{errors[name]?.message}</span>
      )}
    </div>
  )
}

FormInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  focus: PropTypes.bool,
  errors: PropTypes.object,
  validationSchema: PropTypes.object,
  required: PropTypes.any,
  register: PropTypes.any
}
