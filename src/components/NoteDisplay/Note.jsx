import PropTypes from 'prop-types'

export default function Note({ id, title, content }) {
  const handleDelete = () => console.log(id)

  return (
    <li className="bg-bg-l text-fg flex items-center py-3 px-5 rounded-md shadow-md cursor-pointer">
      <h3 className="w-1/2 truncate text-ellipsis text-sm m-0">{title}</h3>
      <p className="w-1/2 truncate text-ellipsis text-xs">{content}</p>
      <div className="h-full flex ml-4">
        <button className="w-12 h-12 text-secondary-600 hover:text-secondary-500 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
        </button>
        <button
          onClick={handleDelete}
          className="w-12 h-12 text-primary-500 hover:text-primary-400  flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
            />
          </svg>
        </button>
      </div>
    </li>
  )
}

Note.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string
}
