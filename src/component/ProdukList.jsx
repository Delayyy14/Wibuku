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
    {
    id: 4,
    nama: "Figure Miku",
    harga: 350000,
    hargaAsli: 400000,
    deskripsi: "Figure Miku import Jepang, super detail!",
    gambar: miku,
    rating: 4.9,
    terjual: 89
  },
    {
    id: 5,
    nama: "Figure Miku",
    harga: 350000,
    hargaAsli: 400000,
    deskripsi: "Figure Miku import Jepang, super detail!",
    gambar: miku,
    rating: 4.9,
    terjual: 89
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

  const calculateDiscount = (original, current) => {
    return Math.round(((original - current) / original) * 100);
  };

  return (
    <div className="py-16 px-5 flex flex-col items-center bg-gradient-to-br from-sky-50 to-blue-100" id="pelanggan">
      <h1 className="text-4xl font-bold text-center text-sky-800 mb-4">
        List Produk Anime
      </h1>
      <p className="text-lg text-sky-600 text-center mb-12 max-w-2xl">
        Koleksi produk anime terbaik dengan kualitas premium dan harga terjangkau
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-6xl">
        {produkAnime.map((item) => {
          const loved = wishlist.includes(item.id);
          const discount = calculateDiscount(item.hargaAsli, item.harga);
          
          return (
            <div key={item.id} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative group">
              {/* Discount Badge */}
              {discount > 0 && (
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                  -{discount}%
                </div>
              )}

              {/* Wishlist Button */}
              <button
                className="absolute top-4 right-4 text-2xl z-10 p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-110"
                onClick={() => toggleWishlist(item.id)}
              >
                <Heart className={`w-6 h-6 ${loved ? 'text-red-500 fill-current' : 'text-gray-400'} transition-colors`} />
              </button>

              {/* Product Image */}
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img 
                  src={item.gambar} 
                  alt={item.nama} 
                  className="w-full h-110 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gray-800">{item.nama}</h3>
                
                {/* Rating and Sales */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium text-gray-600">{item.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">{item.terjual} terjual</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-sky-600">{formatPrice(item.harga)}</span>
                  {item.hargaAsli > item.harga && (
                    <span className="text-sm text-gray-400 line-through">{formatPrice(item.hargaAsli)}</span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">{item.deskripsi}</p>

                {/* Add to Cart Button */}
                <button className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 transform hover:scale-105">
                  <ShoppingCart className="w-5 h-5" />
                  Tambah ke Keranjang
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* View All Products Button */}
      <button className="relative inline-block text-white font-bold px-10 py-4 rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        link="#produk"
        style={{
          background: "linear-gradient(135deg, #0284c7, #38bdf8, #0284c7)",
          backgroundSize: "200% 200%",
          animation: "gradientMove 3s ease infinite",
        }}
      >
        Lihat Semua Produk
      </button>

      <style jsx>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}