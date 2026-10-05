import { Link } from 'react-router-dom'
import Button from './Button'

function UserCard({ id, name, email, company, isFavorite, onToggleFavorite }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">{email}</p>
      <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">{company}</p>

      <div className="flex items-center justify-between">
        <Link to={`/users/${id}`} className="text-sm text-indigo-600 underline dark:text-indigo-400">
          View Details
        </Link>
        <Button
          label={isFavorite ? 'Remove Favorite' : 'Add Favorite'}
          onClick={onToggleFavorite}
          variant={isFavorite ? 'danger' : 'primary'}
        />
      </div>
    </div>
  )
}

export default UserCard