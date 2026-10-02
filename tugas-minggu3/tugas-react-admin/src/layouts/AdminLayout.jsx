import Sidebar from "../components/organisms/Sidebar";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";

export default function AdminLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar di sebelah kiri */}
      <Sidebar />
      
      {/* Kolom kanan untuk Header, Konten Utama, dan Footer */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        {/* Tempat untuk merender tabel dan konten halaman dinamis */}
        <main className="flex-1 p-6 overflow-x-auto">
          {children}
        </main>
        
        <Footer />
      </div>
    </div>
  );
}