import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./Pages/Auth/AuthLayout";
import AdminLayout from "./Pages/Admin/AdminLayout";
import Login from "./Pages/Auth/Login/Login";
import DashboardPage from "./Pages/Admin/Dashboard/Dashboard"; 
import Mahasiswa from "./Pages/Admin/Mahasiswa/Mahasiswa";
import MahasiswaDetail from "./Pages/Admin/Mahasiswa/MahasiswaDetail";
import ProtectedRoute from "./Pages/Auth/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Kelompok Rute Auth */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Kelompok Rute Admin (Dilindungi ProtectedRoute) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="mahasiswa" element={<Mahasiswa />} />
            <Route path="mahasiswa/:nim" element={<MahasiswaDetail />} />
          </Route>
        </Route>

        {/* Jalur Otomatis jika URL Tidak Dikenali */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
