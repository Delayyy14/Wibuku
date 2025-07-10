import React, { useState } from 'react';
import { motion } from 'framer-motion';
import kaosanime from '../image/kaosanime.jpg';
import figure from '../image/figure.jpg';
import jaket from '../image/jaket.jpg';

const produkAnime = [
  {
    id: 1,
    nama: "Kaos Luffy Gear 5",
    harga: 120000,
    deskripsi: "Kaos keren Luffy Gear 5, bahan adem dan nyaman.",
    gambar: kaosanime
  },
  {
    id: 2,
    nama: "Figure Miku",
    harga: 350000,
    deskripsi: "Figure Miku import Jepang, super detail!",
    gambar: figure
  },
  {
    id: 3,
    nama: "Jaket AOT",
    harga: 250000,
    deskripsi: "Jaket survey corps bahan tebal dan nyaman.",
    gambar: jaket
  },
];

export default function ProdukListWithLove() {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
    } else {
      setWishlist([...wishlist, id]);
    }
  };

  return (
    <div className="py-16 px-5 flex flex-col items-center bg-white" id="pelanggan">
      <h1 className="text-3xl font-bold text-center text-sky-800 mb-10">List Produk Anime</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {produkAnime.map((item) => {
          const loved = wishlist.includes(item.id);
          return (
            <div key={item.id} className="bg-sky-100 p-4 rounded-xl shadow relative">
              <motion.button
                className="absolute top-2 right-2 text-2xl"
                onClick={() => toggleWishlist(item.id)}
                whileTap={{ scale: 1.5 }}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {loved ? '❤️' : '🤍'}
              </motion.button>

              <img src={item.gambar} alt={item.nama} className="w-full h-110 object-cover rounded-lg mb-3" />
              <h3 className="text-lg font-bold text-sky-900">{item.nama}</h3>
              <p className="text-sky-700 font-semibold mb-2">Rp {item.harga.toLocaleString()}</p>
              <p className="text-sm text-gray-700">{item.deskripsi}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
