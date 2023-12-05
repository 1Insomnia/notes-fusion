import PropTypes from 'prop-types'
import cn from 'classNames'

export default function FormBtn({ text, disabled, className }) {
  return (
    <button
      className={cn(
        'block h-10 uppercase font-bold tracking-tighter text-fg bg-primary px-6 rounded-md hover:opacity-80',
        className
      )}
      type="submit"
      disabled={disabled}
    >
      {text}
    </button>
  )
}

FormBtn.propTypes = {
  text: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string
}
