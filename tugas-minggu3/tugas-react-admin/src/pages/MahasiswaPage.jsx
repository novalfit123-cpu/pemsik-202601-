import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/molecules/Card";
import Button from "../components/atoms/Button";
import Modal from "../components/organisms/Modal";

export default function MahasiswaPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dataMahasiswa = [
    { id: "20211002", nama: "Siti Aminah" },
    { id: "20211003", nama: "Ahmad Fauzi" },
  ];

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Daftar Mahasiswa</h2>
        <Button onClick={() => setIsModalOpen(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded">
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
          {dataMahasiswa.map((item) => (
            <tr key={item.id} className="even:bg-gray-100 odd:bg-white border-b">
              <td className="py-2 px-4">{item.id}</td>
              <td className="py-2 px-4">{item.nama}</td>
              <td className="py-2 px-4 text-center space-x-2">
                <Link 
                  to={`/admin/mahasiswa/${item.id}`} 
                  className="bg-green-600 text-white px-2 py-1 rounded text-xs hover:bg-green-700"
                >
                  Detail
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </Card>
  );
}