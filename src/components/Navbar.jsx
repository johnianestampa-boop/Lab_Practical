import { NavLink } from 'react-router-dom'
import Button from './Button'

function Navbar({ favoritesCount, darkMode, onToggleDarkMode }) {
  const linkClass = ({ isActive }) =>
    isActive
      ? 'font-bold underline underline-offset-4'
      : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'

  return (
    <nav className="flex flex-wrap items-center gap-6 border-b border-gray-200 px-6 py-4 dark:border-gray-700">
      <span className="text-lg font-bold">Team Directory</span>
      <NavLink to="/" end className={linkClass}>Home</NavLink>
      <NavLink to="/users" className={linkClass}>Users</NavLink>
      <NavLink to="/about" className={linkClass}>About</NavLink>

      <div className="ml-auto flex items-center gap-4">
        <span className="text-sm">Favorites: {favoritesCount}</span>
        <Button
          label={darkMode ? 'Light Mode' : 'Dark Mode'}
          onClick={onToggleDarkMode}
          variant="primary"
        />
      </div>
    </nav>
  )
}

export default Navbar