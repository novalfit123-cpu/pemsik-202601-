import { Outlet } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const AdminLayout = () => {
  return (
    <div className="flex h-screen bg-gray-50 overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 p-6 overflow-x-auto bg-gray-50">
          <Outlet /> {/* Tempat halaman Mahasiswa atau Dashboard muncul */}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
