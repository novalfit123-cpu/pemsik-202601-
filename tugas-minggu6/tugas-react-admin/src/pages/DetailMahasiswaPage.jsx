import { useParams, Link } from "react-router-dom";
import Card from "../components/molecules/Card";

export default function DetailMahasiswaPage() {
  const { id } = useParams();

  return (
    <Card>
      <h2 className="text-xl font-bold mb-4">Detail Mahasiswa</h2>
      <p className="mb-2"><strong>NIM / ID:</strong> {id}</p>
      <p className="mb-4"><strong>Status:</strong> Mahasiswa Aktif</p>
      <Link to="/admin/mahasiswa" className="inline-block bg-gray-500 text-white px-3 py-1.5 rounded text-sm hover:bg-gray-600">
        &larr; Kembali
      </Link>
    </Card>
  );
}