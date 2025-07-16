import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/navbar';
import AOS from 'aos';
import googleplay from '../image/googleplay.jpg';
import appstore from '../image/appstore.png';

const productsData = [
  {
    id: 1,
    name: "Kaos Luffy Gear 5",
    price: 120000,
    image: "/image/kaosanime.jpg",
    category: "Kaos",
    description: "Kaos keren Luffy Gear 5, bahan adem dan nyaman."
  },
  {
    id: 2,
    name: "Figure Miku",
    price: 350000,
    image: "/image/figure.jpg",
    category: "Figure",
    description: "Figure Miku import Jepang, super detail!"
  },
  {
    id: 3,
    name: "Jaket AOT",
    price: 250000,
    image: "/image/jaket.jpg",
    category: "Jaket",
    description: "Jaket survey corps bahan tebal dan nyaman."
  },
  {
    id: 4,
    name: "Figure Rem",
    price: 425000,
    image: "/image/rem.jpg",
    category: "Figure",
    description: "Figure Rem Re:Zero premium quality, detail sempurna."
  },
  {
    id: 5,
    name: "Poster Naruto",
    price: 45000,
    image: "/image/elaina.jpg",
    category: "Poster",
    description: "Poster Naruto ukuran A3, print berkualitas tinggi."
  },
  {
    id: 6,
    name: "Kaos Attack on Titan",
    price: 135000,
    image: "/image/kaosanime.jpg",
    category: "Kaos",
    description: "Kaos AOT dengan desain eksklusif, bahan premium."
  },
  {
    id: 7,
    name: "Figure Mikasa",
    price: 380000,
    image: "/image/mikasa.jpg",
    category: "Figure",
    description: "Figure Mikasa Ackerman, detail terbaik dari Jepang."
  },
  {
    id: 8,
    name: "Hoodie Demon Slayer",
    price: 185000,
    image: "/image/jaket.jpg",
    category: "Jaket",
    description: "Hoodie Demon Slayer dengan bordir premium."
  },
  {
    id: 9,
    name: "Figure Chitoge",
    price: 320000,
    image: "/image/Nisekoi_chitoge.jpg",
    category: "Figure",
    description: "Figure Chitoge Nisekoi, original dari Jepang."
  },
  {
    id: 10,
    name: "Poster One Piece",
    price: 50000,
    image: "/image/elaina.jpg",
    category: "Poster",
    description: "Poster One Piece crew, ukuran jumbo A2."
  },
  {
    id: 11,
    name: "Kaos Jujutsu Kaisen",
    price: 125000,
    image: "/image/kaosanime.jpg",
    category: "Kaos",
    description: "Kaos JJK dengan print glow in the dark."
  },
  {
    id: 12,
    name: "Figure Elaina",
    price: 450000,
    image: "/image/elaina.jpg",
    category: "Figure",
    description: "Figure Elaina The Witch, limited edition."
  }
];

const categories = ["Semua", "Kaos", "Figure", "Jaket", "Poster"];

function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const navigate = useNavigate();

  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  useEffect(() => {
    let result = [...productsData];
    if (selectedCategory !== "Semua") {
      result = result.filter(p => p.category === selectedCategory);
    }
    if (searchTerm) {
      result = result.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    result.sort((a, b) => sortBy === 'name' ? a.name.localeCompare(b.name) : sortBy === 'price-low' ? a.price - b.price : b.price - a.price);
    setFilteredProducts(result);
  }, [selectedCategory, searchTerm, sortBy]);

  const formatPrice = price => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);

  return (
    <>
      <Navbar />
      <div className="pt-20 px-4 bg-gray-50 min-h-screen">
        <button onClick={() => navigate('/')} className="text-sky-800 mb-4">← Kembali ke Home</button>
        <h1 className="text-2xl font-bold text-sky-800 mb-2 text-center">Koleksi Produk Anime</h1>
        <p className="text-center text-gray-500 mb-6">Temukan merchandise anime favoritmu!</p>

        <div className="mb-6">
          <input
            type="text"
            placeholder="Cari produk..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded w-full max-w-sm"
          />
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded text-sm ${selectedCategory === cat ? 'bg-sky-800 text-white' : 'bg-gray-200 text-gray-700'}`}
            >
              {cat}
            </button>
          ))}

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border p-2 rounded text-sm"
          >
            <option value="name">Nama</option>
            <option value="price-low">Harga Rendah</option>
            <option value="price-high">Harga Tinggi</option>
          </select>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="flex flex-wrap gap-4 justify-center">
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-4 rounded shadow w-60"
                data-aos="fade-up"
              >
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2 rounded" />
                <h3 className="font-bold text-sm mb-1">{product.name}</h3>
                <p className="text-xs text-gray-500 mb-2">{product.description}</p>
                <div className="text-sm font-semibold text-sky-800">{formatPrice(product.price)}</div>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">Produk tidak ditemukan.</p>
        )}

      <div className="bg-sky-900 text-white text-center p-6 mt-10">
        <h3 className="text-xl font-bold mb-2">OtakuMart</h3>
        <p className="mb-2">Merchandise anime terpercaya dan lengkap.</p>
        <div className="mb-4">
          <img src={googleplay} alt="Google Play" className="inline-block w-24 mx-2" />
          <img src={appstore} alt="App Store" className="inline-block w-24 mx-2" />
        </div>
        <p className="text-sm">© 2025 OtakuMart. All rights reserved.</p>
      </div>
    </div>
    </>
  );
}

export default Products;
