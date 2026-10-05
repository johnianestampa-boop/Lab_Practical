import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import usersData from '../data/users'
import ErrorMessage from '../components/ErrorMessage'

function UserDetails() {
  const { id } = useParams()
  const [user, setUser] = useState(null)

  // Runs again whenever the id in the URL changes
  useEffect(() => {
    const found = usersData.find((u) => u.id === Number(id))
    setUser(found || null)
  }, [id])

  useEffect(() => {
    document.title = user ? user.name : 'User not found'
  }, [user])

  return (
    <div>
      <Link to="/users" className="mb-4 inline-block text-indigo-600 underline dark:text-indigo-400">
        Back
      </Link>

      {user ? (
        <div className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
          <h1 className="mb-2 text-3xl font-bold">{user.name}</h1>
          <p>Email: {user.email}</p>
          <p>Company: {user.company}</p>
          <p>Role: {user.role}</p>
        </div>
      ) : (
        <ErrorMessage message="User not found." />
      )}
    </div>
  )
}

export default UserDetails