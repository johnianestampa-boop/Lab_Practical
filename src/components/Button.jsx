function Button({ label, onClick, variant = 'primary', children }) {
  const styles =
    variant === 'danger'
      ? 'bg-red-600 hover:bg-red-700 text-white'
      : 'bg-indigo-600 hover:bg-indigo-700 text-white'

  return (
    <button
      onClick={onClick}
      className={`rounded-md px-3 py-1.5 text-sm font-medium cursor-pointer ${styles}`}
    >
      {children}
      {label}
    </button>
  )
}

export default Button