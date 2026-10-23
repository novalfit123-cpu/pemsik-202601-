import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleProfileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const logout = () => {
    alert("Logout berhasil!");
  };

  return (
    <header className="bg-white shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-semibold text-gray-800">Mahasiswa</h1>
        <div className="relative">
          <button 
            onClick={toggleProfileMenu} 
            className="w-8 h-8 rounded-full bg-gray-300 focus:outline-none"
          ></button>
          
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-md shadow-lg py-2">
              <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
              <button onClick={logout} className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}