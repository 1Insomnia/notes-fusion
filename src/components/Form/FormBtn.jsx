import PropTypes from 'prop-types'
import cn from 'classNames'

export default function FormBtn({ text, disabled, className }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary-background text-primary-foreground hover:bg-primary-background/90 h-12 px-4 py-2 w-full max-w-xs',
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
