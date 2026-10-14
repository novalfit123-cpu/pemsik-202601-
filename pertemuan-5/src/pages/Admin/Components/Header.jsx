import Button from "@/pages/Admin/Components/Button";

const Header = () => {
  return (
    <header className="bg-white shadow p-4 flex justify-between items-center">
      <span className="font-semibold text-gray-700">Panel Admin</span>
      <Button variant="danger" size="sm" onClick={() => alert("Logout berhasil!")}>
        Logout
      </Button>
    </header>
  );
};

export default Header;
