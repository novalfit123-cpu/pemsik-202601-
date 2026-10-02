export default function Input({ id, name, type = "text", placeholder }) {
  return (
    <input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      required
      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring focus:ring-blue-300"
    />
  );
}