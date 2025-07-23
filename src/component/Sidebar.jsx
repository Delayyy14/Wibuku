import React from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { Home, Package2 } from "lucide-react";
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen">
      <aside className="fixed top-0 left-0 min-h-screen w-70 text-white p-8 shadow-lg">
        <h2 className="text-xl font-bold mb-10">Admin Otaku Panel</h2>
        <nav className="space-y-4">
          <p className="mt-5">Isian</p>
          <NavLink
          to="/dashboard-admin"
      className={({ isActive }) =>
      `flex items-center gap-2 px-4 py-2 rounded-md transition ${
      isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-300"
      }`
    }
  >
  <Home size={20} />  
  Beranda
          </NavLink>
          <NavLink
            to="/product-admin"
            className={({ isActive }) =>
              `flex items-center gap-2 px-4 py-2 rounded-md transition ${
                isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-blue-300"
              }`
            }
          >
            <Package2 size={20} />
            Produk
          </NavLink>
        </nav>
      </aside>
    </div>
  );
} 

