import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from './component/navbar';
import SignIn from './pages/SignIn';
import CardElaina from './component/CardElaina';
import Comment from './component/Comment';
import elaina from './image/elaina.jpg';
import Nisekoi_chitoge from './image/Nisekoi_chitoge.jpg';
import mikasa from './image/mikasa.jpg';
import Register from './pages/Register';
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
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="min-h-screen bg-sky-800 flex flex-col md:flex-row items-center justify-center px-10 py-20 gap-10">
        <div className="w-full md:w-1/2 flex justify-center" data-aos="zoom-in">
          <img src={wibuku} alt="Elaina" className="max-w-xs rounded-xl shadow-xl" />
        </div>
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Selamat Datang di WibukuStore!</h1>
          <p className="mb-6 text-lg">
            WibukuStore adalah toko online khusus para wibu yang menyediakan berbagai merchandise anime dari berbagai genre.
            <br />Figure, poster, manga, dan barang eksklusif lainnya!
            <br />Temukan karakter favoritmu di sini! 💫
          </p>
          <a href="#pelanggan" className="bg-white text-sky-800 font-semibold px-6 py-3 rounded hover:bg-sky-700 hover:text-white transition">
            Lihat Stock Anime
          </a>
        </div>
      </div>

      {/* Scroll Velocity Parallax */}
      <div className="w-full bg-sky-800 py-10">
        <ScroolFM />
      </div>

      {/* Produk Section */}
      <div id="pelanggan" className="py-16 px-5 flex flex-col items-center">
        <h1 className="text-center font-bold text-3xl text-sky-900 mb-10">List Produk Anime</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div data-aos="fade-right">
            <CardElaina title="Kaos Luffy Gear 5" description="lorem" image={kaosanime} />
          </div>
          <div data-aos="fade-up">
            <CardElaina title="Action Figure Miku" description="lorem" image={actionfigure} />
          </div>
          <div data-aos="fade-left">
            <CardElaina title="Jaket Attack On Titan" description="lorem" image={jaket} />
          </div>
          <div data-aos="fade-right">
            <CardElaina title="Rem" description="Rem si biru" image={rem} />
          </div>
          <div data-aos="fade-up">
            <CardElaina title="Mikasa" description="Prajurit setia dari Shiganshina." image={mikasa} />
          </div>
          <div data-aos="fade-left">
            <CardElaina title="Chitoge" description="Ratu tsundere dari Nisekoi." image={Nisekoi_chitoge} />
          </div>
        </div>
      </div>
      <div id="galeri">
        <GalleryEvent />
      </div>

      {/* Komentar Section */}
      <div className="py-16 px-5 flex flex-col items-center bg-sky-100">
        <h1 className="text-center font-bold text-3xl text-sky-800 mb-10">Komentar Pelanggan</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Comment name="Elaina" comment="Produk figurenya berkualitas!" avatar={elaina} rating={5} offset="translate-y-0" />
          <Comment name="Chitoge" comment="Pengiriman cepat dan aman." avatar={Nisekoi_chitoge} rating={4} offset="translate-y-2" />
          <Comment name="Rem" comment="Box agak penyok, tapi oke." avatar={rem} rating={3} offset="-translate-y-1" />
          <Comment name="March 7th" comment="Lucu banget barangnya" avatar={march} rating={5} offset="-translate-y-1" />
          <Comment name="Cukurukuk" comment="Admin nya ramah, Miaw!" avatar={cat} rating={5} offset="-translate-y-1" />
          <Comment name="Wielino Ino" comment="Pengiriman secepat cahaya, cihuy" avatar={wielino} rating={5} offset="-translate-y-1" />
        </div>
      </div>

      {/* Footer */}
      <div className='bg-sky-600 w-full h-10 flex items-center justify-center'>
        <p>© Fall 2025 WibukuStore. All rights reserved.</p>
      </div>
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
