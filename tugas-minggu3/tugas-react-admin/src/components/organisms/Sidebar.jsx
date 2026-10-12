import { NavLink, useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const navItemClass = ({ isActive }) =>
    `block py-2 px-4 rounded transition-colors ${
      isActive ? "bg-blue-700 font-bold" : "hover:bg-blue-500"
    }`;

  return (
    <aside className="w-64 bg-blue-600 text-white flex flex-col justify-between p-4">
      <div>
        <h1 className="text-xl font-bold mb-6">Admin Panel</h1>
        <nav className="space-y-2">
          <NavLink to="/admin/dashboard" className={navItemClass}>
            Dashboard
          </NavLink>
          <NavLink to="/admin/mahasiswa" className={navItemClass}>
            Data Mahasiswa
          </NavLink>
        </nav>
      </div>
      <button 
        onClick={handleLogout}
        className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded mt-4"
      >
        Logout
      </button>
    </aside>
  );
}