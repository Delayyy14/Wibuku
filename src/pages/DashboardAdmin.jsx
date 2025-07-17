import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Home, Package, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import elaina from '../image/elaina.jpg';
import Swal from 'sweetalert2';
function DashboardAdmin() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    fetch('https://68775431dba809d901eec221.mockapi.io/api/v1/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const addProduct = () => {
    if (!title || !price) return;
    fetch('https://68775431dba809d901eec221.mockapi.io/api/v1/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, price: parseInt(price), image: elaina })
    })
      .then(res => res.json())
      .then(newProduct => {
        setProducts([...products, newProduct]);
        setTitle('');
        setPrice('');
      });
  };

const deleteProduct = (id) => {
  Swal.fire({
    title: "Apakah kamu yakin?",
    text: "Produk akan dihapus secara permanen!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Ya, hapus!"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`https://68775431dba809d901eec221.mockapi.io/api/v1/products/${id}`, {
        method: 'DELETE',
      })
        .then(() => {
          setProducts(products.filter(p => p.id !== id));
          Swal.fire("Terhapus!", "Produk berhasil dihapus.", "success");
        })
        .catch(() => {
          Swal.fire("Gagal", "Terjadi kesalahan saat menghapus.", "error");
        });
    }
  });
};


  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-50 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-6 ">Admin Panel</h2>
        <nav className="space-y-4 mt-10">
          <button className="flex items-center space-x-2 hover:text-gray-300" onClick={() => navigate('/')}>
            <Home size={25} />
            <span>Dashboard</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-gray-300">
            <Package size={25} />
            <span>Produk</span>
          </button>
          <button className="flex items-center space-x-2 hover:text-gray-300">
            <LogOut size={25} />
            <span>Logout</span>
          </button>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 bg-gray-100 p-8">
        <div className="mb-6">
          <h1 className="text-2xl font-bold">Kelola Produk</h1>
        </div>

        <div className="bg-white p-4 rounded shadow mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Nama Produk"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <input
              type="number"
              placeholder="Harga"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="border px-3 py-2 rounded"
            />
            <button
              onClick={addProduct}
              className="bg-blue-600 text-white px-4 py-2 rounded flex items-center justify-center"
            >
              <Plus size={16} className="mr-1" /> Tambah
            </button>
          </div>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <table className="w-full table-auto">
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="p-2">ID</th>
                <th className="p-2">Nama</th>
                <th className="p-2">Harga</th>
                <th className="p-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id} className="border-t">
                  <td className="p-2">{product.id}</td>
                  <td className="p-2">{product.title}</td>
                  <td className="p-2">Rp {product.price}</td>
                  <td className="p-2">
                    <button
                      onClick={() => deleteProduct(product.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 size={16} />
                    </button>
                    
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan="4" className="text-center p-4 text-gray-500">
                    Belum ada produk
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default DashboardAdmin;
