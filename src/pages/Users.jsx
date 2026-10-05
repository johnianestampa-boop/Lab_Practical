import { useEffect, useState } from 'react'
import usersData from '../data/users'
import UserCard from '../components/UserCard'
import Loader from '../components/Loader'
import ErrorMessage from '../components/ErrorMessage'

function Users({ favorites, onToggleFavorite }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  // Load users after a 1-second delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setUsers(usersData)
      setLoading(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  // Update the page title with the number of displayed users
  useEffect(() => {
    document.title = `Users (${filteredUsers.length})`
  }, [filteredUsers.length])

  return (
    <div>
      <h1 className="mb-4 text-3xl font-bold">Users</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name..."
        className="mb-6 w-full max-w-sm rounded-md border border-gray-300 bg-white px-3 py-2 text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100"
      />

      {loading ? (
        <Loader />
      ) : filteredUsers.length === 0 ? (
        <ErrorMessage message="No users found." />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              company={user.company}
              isFavorite={favorites.includes(user.id)}
              onToggleFavorite={() => onToggleFavorite(user.id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default Users