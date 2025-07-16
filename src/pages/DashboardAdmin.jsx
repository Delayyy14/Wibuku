import React from 'react';
import { useNavigate } from 'react-router-dom';

const dummyProducts = [
  { id: 1, name: 'Kaos Luffy Gear 5', price: 120000, stock: 20 },
  { id: 2, name: 'Figure Miku', price: 350000, stock: 8 },
  { id: 3, name: 'Jaket AOT', price: 250000, stock: 12 },
];

function DashboardAdmin() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/signin');
  };

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-sky-800 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
        <nav className="flex flex-col space-y-2">
          <button onClick={() => navigate('/dashboard-admin')} className="text-left hover:underline">
            Dashboard
          </button>
          <button onClick={() => navigate('/')} className="text-left hover:underline">
            Lihat Halaman User
          </button>
          <button onClick={handleLogout} className="text-left hover:underline text-red-300">
            Logout
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-sky-800 mb-6">Dashboard Admin</h1>

        {/* Data Produk (tampilan CRUD dummy) */}
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-4">Daftar Produk</h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 border">ID</th>
                <th className="p-2 border">Nama Produk</th>
                <th className="p-2 border">Harga</th>
                <th className="p-2 border">Stok</th>
                <th className="p-2 border">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dummyProducts.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="p-2 border">{product.id}</td>
                  <td className="p-2 border">{product.name}</td>
                  <td className="p-2 border">Rp {product.price.toLocaleString()}</td>
                  <td className="p-2 border">{product.stock}</td>
                  <td className="p-2 border text-sm text-gray-500">Edit | Hapus</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default DashboardAdmin;
