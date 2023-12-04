import PropTypes from 'prop-types'

export default function FormBtn({ text, disabled }) {
  return (
    <button className="btn form-btn" type="submit" disabled={disabled}>
      {text}
    </button>
  )
}

FormBtn.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool
}
