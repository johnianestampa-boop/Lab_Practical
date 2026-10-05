import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold">Welcome to the Team Directory</h1>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        Find your teammates, search by name, and save your favorites.
      </p>
      <Link to="/users" className="text-indigo-600 underline dark:text-indigo-400">
        Browse all users
      </Link>
    </div>
  )
}

export default Home