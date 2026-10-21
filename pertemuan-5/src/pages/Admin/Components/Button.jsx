const Button = ({ children, type = "button", className = "", ...props }) => {
  return (
    <button
      type={type}
      className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors cursor-pointer focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
