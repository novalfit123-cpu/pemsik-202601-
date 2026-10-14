import Sidebar from "@/pages/Admin/Components/Sidebar";
import Header from "@/pages/Admin/Components/Header";
import Footer from "@/pages/Admin/Components/Footer";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar Samping */}
      <Sidebar />

      {/* Konten Kanan */}
      <div className="flex-1 flex flex-col">
        <Header />
        
        {/* Area Konten Dinamis */}
        <main className="p-6 flex-1">
          {children}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default AdminLayout;
