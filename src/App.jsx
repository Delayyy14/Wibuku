import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './component/navbar';
import SignIn from './pages/SignIn';
import CardElaina from './component/CardElaina';
import Comment from './component/Comment';
import elaina from './image/elaina.jpg';
import Nisekoi_chitoge from './image/Nisekoi_chitoge.jpg';
import mikasa from './image/mikasa.jpg';
import Register from './pages/Register';
import Products from './pages/products';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import ScroolFM from "./component/ScroolFM";
import GalleryEvent from './component/GalleryEvent';
import wibuku from './image/wibuku.jpg'
import rem from './image/rem.jpg'
import march from './image/march.jpg'
import cat from './image/cat.jpg';
import wielino from './image/wielino.jpg';
import kaosanime from './image/kaosanime.jpg';
import actionfigure from './image/figure.jpg';
import jaket from './image/jaket.jpg';
import { motion } from 'framer-motion';
import ContactForm from './component/contact';
import ProdukListWithLove from './component/ProdukList';
import naruto from './image/naruto.jpg';
import googleplay from './image/googleplay.jpg';
import appstore from './image/appstore.png';  
const komentarList = [
  {
    name: "Elaina",
    comment: "Produk figurenya berkualitas!",
    avatar: elaina,
    rating: 5,
    offset: "translate-y-0",
  },
  {
    name: "Chitoge",
    comment: "Pengiriman cepat dan aman.",
    avatar: Nisekoi_chitoge,
    rating: 4,
    offset: "translate-y-2",
  },
  {
    name: "Rem",
    comment: "Box agak penyok, tapi oke.",
    avatar: rem,
    rating: 3,
    offset: "-translate-y-1",
  },
  {
    name: "March 7th",
    comment: "Lucu banget barangnya",
    avatar: march,
    rating: 5,
    offset: "-translate-y-1",
  },
  {
    name: "Cukurukuk",
    comment: "Admin nya ramah, Miaw!",
    avatar: cat,
    rating: 5,
    offset: "-translate-y-1",
  },
  {
    name: "Wielino Ino",
    comment: "Pengiriman secepat cahaya, cihuy",
    avatar: wielino,
    rating: 5,
    offset: "-translate-y-1",
  },
];

function Loading() {
  const letters = 'Tunggu yaa...'.split('');
  
  return (
    <div className="h-screen flex justify-center items-center bg-white">
      <h1 className="text-sky-800 text-4xl font-bold flex gap-1">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            initial={{ y: 0 }}
            animate={{ y: [5, -15, 5] }}
            transition={{
              repeat: Infinity,
              duration: 1,
              delay: i * 0.1,
            }}
          >
            {char}
          </motion.span>
        ))}
      </h1>
    </div>
  );
}


// Komponen Halaman Home
function Home() {
  const navigate = useNavigate();
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
<div
  className="relative h-screen bg-cover bg-center"
  style={{ backgroundImage: `url(${naruto})` }}
>
  {/* Overlay gelap */}
  <div className="absolute inset-0 bg-black/70 z-10" />

  {/* Konten */}
  <div className="relative z-20 flex flex-col justify-center h-full px-10 max-w-4xl">
    <h2 className="text-red-500 font-bold text-sm mb-2">OtakuMart</h2>
    <h1 className="text-white text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
      Koleksi Terbaik <br /> Merch Anime Populer
    </h1>
    <p className="text-gray-200 text-lg mb-6 max-w-lg">
      Temukan merchandise eksklusif dari anime favoritmu. Figure, poster, jaket, hingga koleksi langka!
    </p>
    <div className="flex items-center gap-4">
      <Link
        to="/products"
        className="relative inline-block text-white font-semibold px-8 py-3 rounded-lg overflow-hidden transition duration-300"
        style={{
          background: "linear-gradient(270deg, #0284c7, #38bdf8, #0284c7)",
          backgroundSize: "600% 600%",
          animation: "gradientMove 3s ease infinite",
        }}
      >
        Lihat Semua Produk
      </Link>
    </div>
  </div>
</div>

<div id="produk">
  <ProdukListWithLove />      
      
</div>



      <div id="galeri">
        <GalleryEvent />
      </div>

      {/* Komentar Section */}
<div id="pelanggan" className="py-16 px-5 flex flex-col items-center bg-sky-100">
  <h1 className="text-center font-bold text-3xl text-sky-800 mb-10">Komentar Pelanggan</h1>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
    {komentarList.map((k, index) => (
      <Comment
        key={index}
        name={k.name}
        comment={k.comment}
        avatar={k.avatar}
        rating={k.rating}
        offset={k.offset}
      />
    ))}
  </div>
</div>


<footer className="bg-sky-950 text-white py-10 px-5" id="contact">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
    {/* Brand + Deskripsi */}
    <div>
      <h2 className="text-2xl font-bold text-white mb-2">
        <span className="text-pink-500">Otaku</span>Mart
      </h2>
      <p className="text-sm text-gray-300 mb-4">
        OtakuMart menyediakan berbagai macam merchandise anime pilihan seperti figure, kaos, jaket, dan lainnya. 
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
      <p className="text-sm text-gray-300">support@otakumart.com</p>
    </div>
  </div>

  {/* Copyright */}
  <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
    © {new Date().getFullYear()} OtakuMart By Fall. All Rights Reserved.
  </div>
</footer>

    </>
  );
}

// Wrapper untuk efek loading saat route berubah
function RouteWithLoader() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [location]);

  if (loading) return <Loading />;

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/register" element={<Register />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}

// Root App
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true
    });
  }, []);

  return ( 
    <Router>
      <RouteWithLoader />
    </Router>
  );
}



export default App;