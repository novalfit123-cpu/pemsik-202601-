import { Outlet } from "react-router-dom";
import Sidebar from "../components/organisms/Sidebar";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";

export default function AdminLayout() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 p-6 overflow-x-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}