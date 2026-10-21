import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // Menyesuaikan localStorage "isLoggedIn" dari instruksi PDF tugas
  const isAuth = localStorage.getItem("isLoggedIn") === "true";

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />; // Merender rute halaman admin di dalamnya
};

export default ProtectedRoute;
