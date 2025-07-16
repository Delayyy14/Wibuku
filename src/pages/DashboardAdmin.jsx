import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function DashboardAdmin() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
//
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://68775431dba809d901eec221.mockapi.io/api/v1/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Gagal fetch:', err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Yakin ingin hapus?')) {
      fetch(`https://68775431dba809d901eec221.mockapi.io/api/v1/products/${id}`, {
        method: 'DELETE',
      })
        .then(() => {
          setProducts(products.filter(p => p.id !== id));
        })
        .catch(err => console.error('Gagal hapus data:', err));
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();

    const newProduct = {
      title,
      price: parseInt(price),
      category: "Default",//,
      image: "https://via.placeholder.com/200x200?text=Produk"
    };

    fetch('https://68775431dba809d901eec221.mockapi.io/api/v1/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newProduct)
    })
      .then(res => res.json())
      .then(data => {
        setProducts([...products, data]); 
        setTitle('');
        setPrice('');
//
      })
      .catch(err => console.error('Gagal tambah:', err));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard Admin</h1>
      <button
        onClick={() => navigate('/')}
        className="mb-4 text-blue-600 hover:underline text-sm"
      >
        ← Kembali ke Halaman User
      </button>

      <form onSubmit={handleAddProduct} className="mb-6 space-y-2">
        <input
          type="text"
          placeholder="Nama Produk"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Harga"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          className="border p-2 rounded w-full"
        />
//
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Tambah Produk
        </button>
      </form>

      {/* Tabel Produk */}
      <table className="w-full border text-left">
        <thead>
          <tr className="bg-gray-200">
            <th className='p-2 border'>id</th>
            <th className="p-2 border">Nama</th>
            <th className="p-2 border">Harga</th>
//
            <th className="p-2 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map(product => (
              <tr key={product.id}>
                <td className='p-2 border'>{product.id}</td>
                <td className="p-2 border">{product.title}</td>
                <td className="p-2 border">Rp {product.price?.toLocaleString()}</td>
//
                <td className="p-2 border">
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center p-4 text-gray-500">
                Tidak ada data.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default DashboardAdmin;
