import './MdPreview.style.css'
import PropTypes from 'prop-types'
import Markdown from 'react-markdown'

export default function MdPreview({ source }) {
  return (
    <div className="md-preview-wrapper">
      <h2>Preview</h2>
      <Markdown classname="md-preview">{source}</Markdown>
    </div>
  )
}

MdPreview.propTypes = {
  source: PropTypes.string
}