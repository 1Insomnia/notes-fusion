import PropTypes from 'prop-types'
import Markdown from 'react-markdown'

export default function MdPreview({ source }) {
  return (
    <div className="mt-5">
      <div className="p-5 rounded-lg bg-card-background text-card-foreground shadow-[0_2px_5px_rgba(15,23,42,0.08)]">
        <h2 className="mb-10 h1">Preview</h2>
        <Markdown classname="md-preview">{source}</Markdown>
      </div>
    </div>
  )
}

MdPreview.propTypes = {
  source: PropTypes.string
}
