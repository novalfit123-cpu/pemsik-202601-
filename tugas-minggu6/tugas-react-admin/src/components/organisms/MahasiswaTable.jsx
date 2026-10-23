import { Link } from "react-router-dom";

export default function MahasiswaTable({ mahasiswa, openEditModal, onDelete }) {
  const handleDelete = (nim) => {
    onDelete(nim);
  };

  return (
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
                    onClick={() => openEditModal(item)}
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
  );
}