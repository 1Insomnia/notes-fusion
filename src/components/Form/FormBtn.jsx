import PropTypes from 'prop-types'

export default function FormBtn({ text }) {
  return (
    <button className="btn form-btn" type="submit">
      {text}
    </button>
  )
}

FormBtn.propTypes = {
  text: PropTypes.string
}
