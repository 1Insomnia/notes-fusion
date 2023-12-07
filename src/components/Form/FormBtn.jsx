import PropTypes from 'prop-types'
import cn from 'classNames'

export default function FormBtn({ text, disabled, className }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 h-12 px-4 py-2 w-full max-w-xs',
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
