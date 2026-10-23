import { useState } from "react";
import AdminLayout from "../Layouts/Adminlayout";
import Card from "../components/molecules/Card";
import Button from "../components/atoms/Button";
import Modal from "../components/organisms/Modal";

export default function AdminPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AdminLayout>
      <Card>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Daftar Mahasiswa</h2>
          <Button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700">
            Tambah Mahasiswa
          </Button>
        </div>
        
        <table className="w-full text-sm text-gray-700">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-2 px-4 text-left">NIM</th>
              <th className="py-2 px-4 text-left">Nama</th>
              <th className="py-2 px-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr className="even:bg-gray-100 odd:bg-white">
              <td className="py-2 px-4">20211002</td>
              <td className="py-2 px-4">Siti Aminah</td>
              <td className="py-2 px-4 text-center space-x-2">
                <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Hapus</button>
              </td>
            </tr>
            <tr className="even:bg-gray-100 odd:bg-white">
              <td className="py-2 px-4">20211003</td>
              <td className="py-2 px-4">Ahmad Fauzi</td>
              <td className="py-2 px-4 text-center space-x-2">
                <button className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">Hapus</button>
              </td>
            </tr>
          </tbody>
        </table>
      </Card>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </AdminLayout>
  );
}