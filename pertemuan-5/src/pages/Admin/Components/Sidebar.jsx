import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  const navItemClass = ({ isActive }) =>
    `block py-2 px-4 rounded transition-colors ${
      isActive ? "bg-[#172554] font-bold" : "hover:bg-[#172554]"
    }`;

  return (
    <aside className="w-64 bg-[#1e3a8a] text-white flex flex-col justify-between p-4">
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
        className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded mt-4 cursor-pointer transition-colors"
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
