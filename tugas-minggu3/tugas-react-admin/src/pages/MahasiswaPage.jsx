import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/molecules/Card";
import Button from "../components/atoms/Button";
import Modal from "../components/organisms/Modal";

export default function MahasiswaPage() {
  // State utama data mahasiswa (NIM, Nama, status)
  const [mahasiswa, setMahasiswa] = useState([
    { nim: "20211001", nama: "Budi Santoso", status: true },
    { nim: "20211002", nama: "Siti Aminah", status: true },
    { nim: "20211003", nama: "Ahmad Fauzi", status: false },
  ]);

  // State untuk modal pop-up
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [error, setError] = useState("");

  // State form input
  const [formData, setFormData] = useState({
    nim: "",
    nama: "",
    status: true,
  });

  // Handle perubahan input form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "status" ? value === "true" || value === true : value,
    }));
  };

  // Buka modal untuk Tambah Data
  const handleOpenAddModal = () => {
    setIsEdit(false);
    setFormData({ nim: "", nama: "", status: true });
    setError("");
    setModalOpen(true);
  };

  // Buka modal untuk Edit Data
  const handleOpenEditModal = (item) => {
    setIsEdit(true);
    setFormData({ nim: item.nim, nama: item.nama, status: item.status });
    setError("");
    setModalOpen(true);
  };

  // Submit form (Tambah / Edit)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi: Data kurang terisi
    if (!formData.nim.trim() || !formData.nama.trim()) {
      setError("Semua field (NIM dan Nama) wajib diisi!");
      return;
    }

    if (isEdit) {
      // Validasi Konfirmasi Update
      const confirmUpdate = window.confirm(
        "Apakah Anda yakin ingin memperbarui data mahasiswa ini?"
      );
      if (!confirmUpdate) return;

      // Update data di state
      setMahasiswa((prev) =>
        prev.map((m) => (m.nim === formData.nim ? formData : m))
      );
      setModalOpen(false);
    } else {
      // Validasi: NIM Unique
      const isNimExist = mahasiswa.some((m) => m.nim === formData.nim.trim());
      if (isNimExist) {
        setError("NIM sudah terdaftar! Gunakan NIM lain.");
        return;
      }

      // Tambah data baru ke state
      setMahasiswa((prev) => [...prev, formData]);
      setModalOpen(false);
    }
  };

  // Handle Hapus Data
  const handleDelete = (nim) => {
    // Validasi Konfirmasi Delete
    const confirmDelete = window.confirm(
      `Apakah Anda yakin ingin menghapus mahasiswa dengan NIM ${nim}?`
    );
    if (confirmDelete) {
      setMahasiswa((prev) => prev.filter((m) => m.nim !== nim));
    }
  };

  return (
    <Card>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold">Data Mahasiswa</h2>
          <p className="text-gray-500 text-sm">
            Kelola data mahasiswa (CRUD) menggunakan React State
          </p>
        </div>
        <Button
          onClick={handleOpenAddModal}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          + Tambah Mahasiswa
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-700 border-collapse">
          <thead className="bg-blue-600 text-white uppercase text-xs">
            <tr>
              <th className="py-3 px-4">NIM</th>
              <th className="py-3 px-4">Nama</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {mahasiswa.length === 0 ? (
              <tr>
                <td colSpan="4" className="py-4 text-center text-gray-500">
                  Data mahasiswa kosong.
                </td>
              </tr>
            ) : (
              mahasiswa.map((item) => (
                <tr
                  key={item.nim}
                  className="even:bg-gray-50 odd:bg-white border-b hover:bg-gray-100 transition-colors"
                >
                  <td className="py-3 px-4 font-medium">{item.nim}</td>
                  <td className="py-3 px-4">{item.nama}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        item.status
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.status ? "Aktif" : "Tidak Aktif"}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-center space-x-2">
                    <Link
                      to={`/admin/mahasiswa/${item.nim}`}
                      className="bg-green-600 hover:bg-green-700 text-white px-2.5 py-1 rounded text-xs inline-block"
                    >
                      Detail
                    </Link>
                    <button
                      onClick={() => handleOpenEditModal(item)}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-2.5 py-1 rounded text-xs"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.nim)}
                      className="bg-red-600 hover:bg-red-700 text-white px-2.5 py-1 rounded text-xs"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pop-up Modal Form */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        formData={formData}
        handleChange={handleChange}
        isEdit={isEdit}
        error={error}
      />
    </Card>
  );
}