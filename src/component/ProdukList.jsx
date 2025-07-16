import React, { useState } from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import kaos from '../image/kaosanime.jpg';
import miku from '../image/figure.jpg';

const produkAnime = [
  {
    id: 1,
    nama: "Kaos Luffy Gear 5",
    harga: 120000,
    hargaAsli: 150000,
    deskripsi: "Kaos keren Luffy Gear 5, bahan adem dan nyaman.",
    gambar: kaos,
    rating: 4.8,
    terjual: 234
  },
  {
    id: 2,
    nama: "Figure Miku",
    harga: 350000,
    hargaAsli: 400000,
    deskripsi: "Figure Miku import Jepang, super detail!",
    gambar: miku,
    rating: 4.9,
    terjual: 89
  },
  {
    id: 3,
    nama: "Jaket AOT",
    harga: 250000,
    hargaAsli: 280000,
    deskripsi: "Jaket survey corps bahan tebal dan nyaman.",
    gambar: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop",
    rating: 4.7,
    terjual: 156
  },
];

export default function ProdukListWithLove() {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

    const handleClick = () => {
    alert('Terbeli!');
  }
  
  return (
    <div className="p-6">
      <h2 className="text-center text-2xl font-bold mb-4">List Produk Anime</h2>
      <p className="text-center mb-8">Produk anime pilihan dengan harga terjangkau</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {produkAnime.map((item) => {
          const loved = wishlist.includes(item.id);
          return (
            <div
              key={item.id}
              className="border rounded-2xl shadow-md p-4 text-center bg-white"
            >
              <img
                src={item.gambar}
                alt={item.nama}
                className="mx-auto mb-3 h-70 object-cover rounded"
              />

              <h3 className="text-lg font-bold mb-1">{item.nama}</h3>
              <p className="text-sm mb-2">{item.deskripsi}</p>

              <div className="mb-2">
                <span className="text-blue-700 font-bold">{formatPrice(item.harga)}</span>
              </div>

              <div className="mb-2 text-sm text-gray-600">
                <Star className="inline w-4 h-4 text-yellow-400" /> {item.rating} ({item.terjual} terjual)
              </div>

              <div className="mt-4 flex justify-center gap-4">
                <button className="bg-blue-600 text-white py-2 px-4 text-sm" onClick={handleClick}>
                  <ShoppingCart className="inline w-4 h-4 mr-1" />
                  Beli
                </button>
                <button onClick={() => toggleWishlist(item.id)}>
                  <Heart className={`w-5 h-5 ${'♥' ? 'text-white' : 'text-red-600'}`} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
