import { Menu, User } from "lucide-react";
import { useState } from "react";

export default function NavbarAdmin({ toggleSidebar }) {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="flex items-center justify-between bg-white p-4 shadow sticky top-0 z-50">

      <button 
        onClick={toggleSidebar} 
        className="p-2 hover:bg-gray-100 rounded-full"
      >
        <Menu size={20} />
      </button>

      {/* User menu */}
      <div className="relative">
        <button 
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded"
        >
          <User size={20} />
          <span className="hidden sm:block">Admin ⤵</span>
        </button>

        {/* Dropdown menu */}
        {showDropdown && (
          <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Profile</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">Settings</a>
            <a href="/SignIn" className="block px-4 py-2 hover:bg-gray-100 text-red-500">Logout</a>
          </div>
        )}
      </div>
    </div>
  );
}