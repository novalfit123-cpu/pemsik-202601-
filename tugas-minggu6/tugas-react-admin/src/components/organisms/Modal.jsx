import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

export default function Modal({
  isOpen,
  onClose,
  onSubmit,
  formData,
  handleChange,
  isEdit,
  error,
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          {isEdit ? "Edit Data Mahasiswa" : "Tambah Mahasiswa"}
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-2 rounded text-sm mb-4">
            {error}
          </div>
        )}

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <Label htmlFor="nim">NIM</Label>
            <Input
              id="nim"
              name="nim"
              value={formData.nim}
              onChange={handleChange}
              placeholder="Masukkan NIM"
              disabled={isEdit} // NIM tidak boleh diubah saat mode Edit
            />
          </div>

          <div>
            <Label htmlFor="nama">Nama Mahasiswa</Label>
            <Input
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              placeholder="Masukkan Nama"
            />
          </div>

          <div>
            <Label htmlFor="status">Status</Label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={true}>Aktif</option>
              <option value={false}>Tidak Aktif</option>
            </select>
          </div>

          <div className="flex justify-end space-x-2 pt-2">
            <Button
              type="button"
              onClick={onClose}
              className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
            >
              Batal
            </Button>
            <Button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              {isEdit ? "Update" : "Simpan"}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}