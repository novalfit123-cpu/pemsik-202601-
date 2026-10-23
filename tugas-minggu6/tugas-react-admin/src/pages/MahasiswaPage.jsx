import { useState } from "react";
import Card from "../components/molecules/Card";
import Button from "../components/atoms/Button";
import MahasiswaTable from "../components/organisms/MahasiswaTable";
import MahasiswaModal from "../components/organisms/MahasiswaModal";

export default function MahasiswaPage() {
  // State
  const [mahasiswa, setMahasiswa] = useState([
    { nim: "20211001", nama: "Budi Santoso", status: true },
    { nim: "20211002", nama: "Siti Aminah", status: true },
    { nim: "20211003", nama: "Ahmad Fauzi", status: false },
  ]);
  const [selectedMahasiswa, setSelectedMahasiswa] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  // Logika State
  const storeMahasiswa = (dataBaru) => {
    // Validasi NIM Unique
    const isNimExist = mahasiswa.some((m) => m.nim === dataBaru.nim.trim());
    if (isNimExist) {
      alert("NIM sudah terdaftar! Gunakan NIM lain.");
      return;
    }
    setMahasiswa((prev) => [...prev, dataBaru]);
  };

  const updateMahasiswa = (dataUpdate) => {
    setMahasiswa((prev) =>
      prev.map((m) => (m.nim === dataUpdate.nim ? dataUpdate : m))
    );
  };

  const deleteMahasiswa = (nim) => {
    setMahasiswa((prev) => prev.filter((m) => m.nim !== nim));
  };

  // Handler Modal
  const openAddModal = () => {
    setSelectedMahasiswa(null);
    setModalOpen(true);
  };

  const openEditModal = (item) => {
    setSelectedMahasiswa(item);
    setModalOpen(true);
  };

  const handleSubmit = (formData) => {
    if (selectedMahasiswa) {
      const confirmUpdate = window.confirm(
        "Apakah Anda yakin ingin memperbarui data mahasiswa ini?"
      );
      if (confirmUpdate) {
        updateMahasiswa(formData);
      }
    } else {
      storeMahasiswa(formData);
    }
  };

  const handleDelete = (nim) => {
    const confirmDelete = window.confirm(
      `Apakah Anda yakin ingin menghapus mahasiswa dengan NIM ${nim}?`
    );
    if (confirmDelete) {
      deleteMahasiswa(nim);
    }
  };

  return (
    <Card>
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-xl font-bold">Data Mahasiswa</h2>
          <p className="text-gray-500 text-sm">
            Manajemen Data Mahasiswa menggunakan Props, State, dan useEffect
          </p>
        </div>
        <Button
          onClick={openAddModal}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
        >
          + Tambah Mahasiswa
        </Button>
      </div>

      {/* Komponen Tabel */}
      <MahasiswaTable
        mahasiswa={mahasiswa}
        openEditModal={openEditModal}
        onDelete={handleDelete}
      />

      {/* Komponen Modal */}
      <MahasiswaModal
        isModalOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSubmit={handleSubmit}
        selectedMahasiswa={selectedMahasiswa}
      />
    </Card>
  );
}