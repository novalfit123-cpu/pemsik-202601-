export default function Form({ onSubmit, children }) {
  return (
    <form onSubmit={onSubmit} className="p-4 space-y-4">
      {children}
    </form>
  );
}