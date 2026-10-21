import Card from "../Components/Card";
import Heading from "../Components/Heading";
import Button from "../Components/Button";



import { mahasiswaList } from "@/Data/Dummy";

const Mahasiswa = () => {
  const handleEdit = (nama) => alert(`Edit data ${nama}`);
  const handleDelete = (nama) => {
    if (confirm(`Yakin ingin hapus ${nama}?`)) alert("Data berhasil dihapus!");
  };

  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <Heading as="h2" className="mb-0 text-left">Daftar Mahasiswa</Heading>
        {/* Tombol tambah otomatis berwarna biru navy karena menggunakan default variant="primary" */}
        <Button onClick={() => alert("Buka modal tambah")}>
          + Tambah Mahasiswa
        </Button>
      </div>

      <table className="w-full text-sm text-gray-700">
        <thead className="bg-[#1e3a8a] text-white">
          <tr>
            <th className="py-2 px-4 text-left">NIM</th>
            <th className="py-2 px-4 text-left">Nama</th>
            <th className="py-2 px-4 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {mahasiswaList.map((mhs, index) => (
            <tr
              key={mhs.nim}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              <td className="py-2 px-4">{mhs.nim}</td>
              <td className="py-2 px-4">{mhs.nama}</td>
              <td className="py-2 px-4 text-center">
                <div className="flex justify-center items-center gap-2">
                  <a
                    href={`/admin/mahasiswa/${mhs.nim}`}
                    className="inline-block bg-[#1e3a8a] hover:bg-[#172554] text-white text-xs px-3 py-1.5 rounded-md"
                  >
                    Detail
                  </a>
                  {/* Cukup panggil variant="warning", jangan ditimpa className bg- lagi */}
                  <Button
                    size="sm"
                    variant="warning"
                    onClick={() => handleEdit(mhs.nama)}
                  >
                    Edit
                  </Button>
                  {/* Cukup panggil variant="danger", jangan ditimpa className bg- lagi */}
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => handleDelete(mhs.nama)}
                  >
                    Hapus
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default Mahasiswa;
