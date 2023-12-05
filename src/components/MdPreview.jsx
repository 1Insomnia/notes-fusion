import PropTypes from 'prop-types'
import Markdown from 'react-markdown'

export default function MdPreview({ source }) {
  return (
    <div className="md-preview-wrapper mt-10 p-5 bg-bg-l shadow-md rounded-md">
      <h2 className="mb-10">Preview</h2>
      <Markdown classname="md-preview">{source}</Markdown>
    </div>
  )
}

MdPreview.propTypes = {
  source: PropTypes.string
}
