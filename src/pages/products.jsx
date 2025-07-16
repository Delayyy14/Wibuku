import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      })
      .catch(err => {
        console.error('Error:', err);
      });
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price * 16000); 
  };

  return (
    <>
      <div className="p-10">
        <button
          onClick={() => navigate('/')}
          className="mb-4 text-sm text-blue-600 hover:underline"
        >
          ← Kembali
        </button>
      </div>

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">Daftar Produk</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {products.map(product => (
              <div key={product.id} className="border rounded p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain mb-2"
                />
                <h2 className="font-semibold text-sm mb-1">{product.title}</h2>
                <p className="text-sky-800 font-bold">{formatPrice(product.price)}</p>
              </div>
            ))}
          </div>
      </div>
    </>
  );
}

export default Products;
