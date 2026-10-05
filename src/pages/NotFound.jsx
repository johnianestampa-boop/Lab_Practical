import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold">404 Not Found</h1>
      <p className="mb-4 text-gray-600 dark:text-gray-300">That page does not exist.</p>
      <Link to="/" className="text-indigo-600 underline dark:text-indigo-400">Go home</Link>
    </div>
  )
}

export default NotFound