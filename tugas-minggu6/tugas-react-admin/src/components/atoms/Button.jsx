export default function Button({ children, onClick, type = "button", className = "" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-4 py-2 text-white rounded focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
}