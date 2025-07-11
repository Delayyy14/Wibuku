import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../component/navbar';
import AOS from 'aos';
import googleplay from '../image/googleplay.jpg';
import appstore from '../image/appstore.png';

// Dummy data untuk produk
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

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const handleBackToHome = () => {
    navigate('/');
  };

  const handleBackToSection = (sectionId) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  useEffect(() => {
    let filtered = productsData;

    // Filter by category
    if (selectedCategory !== "Semua") {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Sort products
    filtered.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "price-low") {
        return a.price - b.price;
      } else if (sortBy === "price-high") {
        return b.price - a.price;
      }
      return 0;
    });

    setFilteredProducts(filtered);
  }, [selectedCategory, searchTerm, sortBy]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const ProductCard = ({ product }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      data-aos="fade-up"
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg text-gray-800 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sky-800 font-bold text-lg">{formatPrice(product.price)}</span>
          <button className="bg-sky-800 text-white px-4 py-2 rounded-lg hover:bg-sky-700 transition-colors duration-300">
            Beli
          </button>
        </div>
      </div>
    </motion.div>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <button 
                onClick={handleBackToHome}
                className="hover:text-sky-800 transition-colors"
              >
                Home
              </button>
              <span className="text-gray-400">/</span>
              <span className="text-sky-800 font-medium">Products</span>
            </div>
          </nav>

          {/* Back Button */}
          <div className="mb-6">
            <button 
              onClick={handleBackToHome}
              className="inline-flex items-center text-sky-800 hover:text-sky-600 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Home
            </button>
          </div>
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-sky-800 mb-4">Koleksi Produk Anime</h1>
            <p className="text-gray-600">Temukan merchandise anime favorit Anda di sini!</p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <input
                  type="text"
                  placeholder="Cari produk..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <svg className="absolute right-3 top-3 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Category Filter */}
              <div className="flex gap-2 flex-wrap">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-sky-800 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="name">Urutkan: Nama</option>
                <option value="price-low">Harga: Rendah ke Tinggi</option>
                <option value="price-high">Harga: Tinggi ke Rendah</option>
              </select>
            </div>
          </div>

          {/* Product Count */}
          <div className="mb-6">
            <p className="text-gray-600">
              Menampilkan {filteredProducts.length} produk
              {selectedCategory !== "Semua" && ` dalam kategori "${selectedCategory}"`}
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* No Products Found */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.034 0-3.9.785-5.291 2.071M6.343 6.343A8 8 0 1017.657 17.657 8 8 0 006.343 6.343z" />
              </svg>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Produk tidak ditemukan</h3>
              <p className="text-gray-500">Coba ubah filter atau kata kunci pencarian</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
    <footer className="bg-sky-950 text-white py-10 px-5" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand + Deskripsi */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">
            <span className="text-pink-500">Wibuku</span>Store
          </h2>
          <p className="text-sm text-gray-300 mb-4">
            WibukuStore menyediakan berbagai macam merchandise anime pilihan seperti figure, kaos, jaket, dan lainnya. 
            Temukan karakter favoritmu di sini!
          </p>
          <div className="flex gap-2">
            <img src={googleplay} alt="Google Play" className="h-10" />
            <img src={appstore} alt="App Store" className="h-10" />
          </div>
        </div>
    
        {/* Menu Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>
    
        {/* Kontak */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us!</h3>
          <p className="text-sm text-gray-300">+12-3456-7890</p>
          <p className="text-sm text-gray-300">support@wibukustore.com</p>
        </div>
      </div>
    
      {/* Copyright */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} WibukuStore By Fall. All Rights Reserved.
      </div>
    </footer>
    
    </>
  );
}

export default Products;