import Form from "../molecules/Form";
import Label from "../atoms/Label";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const submitForm = (e) => {
    e.preventDefault();
    alert('Mahasiswa berhasil ditambah!');
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Tambah Mahasiswa</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-red-500 text-2xl">&times;</button>
        </div>
        <Form onSubmit={submitForm}>
          <div>
            <Label htmlFor="nim">NIM</Label>
            <Input id="nim" name="nim" />
          </div>
          <div>
            <Label htmlFor="nama">Nama</Label>
            <Input id="nama" name="nama" />
          </div>
          <div className="flex justify-end space-x-2 pt-4">
            <Button onClick={onClose} className="bg-gray-400 hover:bg-gray-500">Batal</Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">Simpan</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}