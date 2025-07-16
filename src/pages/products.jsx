import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Navbar from '../component/navbar';
function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('https://68775431dba809d901eec221.mockapi.io/api/v1/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(err => {
        console.error('Error:', err);
      });
  }, []);

  return (
    <>
    <Navbar />
<div className='p-10'></div>
      <div className="p-6">        
        <button
          onClick={() => navigate('/')}
          className="mb-4 text-sm text-blue-600 hover:underline"
        >
          ← Kembali
        </button>
        <h1 className="text-2xl font-bold mb-4 text-center">Daftar Produk</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map(product => (
              <div key={product.id} className="border border-sky-600 rounded p-4 shadow-md bg-white">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain mb-2"
                />
                <h2 className="font-semibold text-sm mb-1">{product.title}</h2>
                <p className='font-semibold text-md mb-2'>{product.description}</p>
                <p className="text-sky-800 font-bold">${(product.price)}</p>
              </div>
            ))}
          </div>
      </div>
    </>
  );
}

export default Products;
