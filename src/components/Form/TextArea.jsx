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
    <div className="form-group">
      <label className="form-label" htmlFor={label}>
        {label}
        {required && '*'}
      </label>
      <textarea
        className="note-editor"
        id={name}
        name={name}
        autoFocus={focus}
        autoComplete="off"
        {...register(name, validationSchema)}
      ></textarea>
      {errors && errors[name]?.type === 'required' && (
        <span className="form-errors">{errors[name]?.message}</span>
      )}
      {errors && errors[name]?.type === 'validate' && (
        <span className="form-errors">{errors[name]?.message}</span>
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
