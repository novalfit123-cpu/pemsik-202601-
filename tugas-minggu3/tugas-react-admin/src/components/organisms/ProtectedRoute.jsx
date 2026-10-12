import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const isAuth = localStorage.getItem("isLoggedIn") === "true";

  if (!isAuth) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}