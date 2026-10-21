const Card = ({ children, className = "" }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div
        className={`w-full bg-white rounded-xl shadow-md border border-gray-100 p-8 ${className}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Card;
