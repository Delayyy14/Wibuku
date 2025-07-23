import Sidebar from '../component/Sidebar';
import NavbarAdmin from '../component/navbarAdmin';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Plus, Trash2, X } from 'lucide-react';
import Swal from 'sweetalert2';

export default function ProductAdmin() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

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
      body: JSON.stringify({ title, price: parseInt(price), image: '' })
    })
      .then(res => res.json())
      .then(newProduct => {
        setProducts([...products, newProduct]);
        setTitle('');
        setPrice('');
        setShowModal(false);
      });
  };

  const deleteProduct = (id) => {
    Swal.fire({
      title: "Yakin hapus?",
      text: "Produk akan hilang selamanya!",
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
            Swal.fire("Berhasil!", "Produk dihapus.", "success");
          })
          .catch(() => {
            Swal.fire("Gagal", "Tidak bisa menghapus produk.", "error");
          });
      }
    });
  };

  return (
    <div className="flex bg-slate-800">
      <Sidebar isOpen={isSidebarOpen} />
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-70' : 'ml-0'}`}>
        <NavbarAdmin toggleSidebar={toggleSidebar} />
        <main className="pt-20 px-6 min-h-screen bg-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Daftar Produk</h1>
            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded flex items-center gap-2"
            >
              <Plus size={18} /> Tambah Produk
            </button>
          </div>

          <div className="bg-white p-4 rounded shadow">
            <table className="w-full text-left table-auto">
              <thead>
                <tr>
                  <th className="p-2 border">Id</th>
                  <th className="p-2 border">Nama Produk</th>
                  <th className="p-2 border">Harga</th>
                  <th className="p-2 border">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p, i) => (
                  <tr key={p.id}>
                    <td className="p-2 border">{i + 1}</td>
                    <td className="p-2 border">{p.title}</td>
                    <td className="p-2 border">Rp {p.price}</td>
                    <td className="p-2 border">
                      <button onClick={() => deleteProduct(p.id)} className="text-red-500 hover:text-red-700">
                        <Trash2 size={18} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Modal Tambah Produk */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded shadow w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold">Tambah Produk</h2>
                  <button onClick={() => setShowModal(false)} className="text-gray-600">
                    <X />
                  </button>
                </div>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nama Produk"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border p-2 rounded"
                  />
                  <input
                    type="number"
                    placeholder="Harga"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full border p-2 rounded"
                  />
                  <button
                    onClick={addProduct}
                    className="w-full bg-blue-600 text-white py-2 rounded"
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
