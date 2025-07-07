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
import Footer from './component/footer';


import AOS from 'aos'; // ✅ Tambahkan ini
import 'aos/dist/aos.css'; // ✅ Tambahkan ini

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
            animate={{ y: [0, -15, 0] }}
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

      {/* Hero */}
      <div className="min-h-screen bg-sky-800 flex flex-col md:flex-row items-center justify-center px-10 py-20 gap-10">
        <div className="w-full md:w-1/2 flex justify-center" data-aos="zoom-in">
          <img src={elaina} alt="Elaina" className="max-w-xs rounded-xl shadow-xl" />
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

      {/* Produk */}
      <div id="pelanggan" className="py-16 px-5 flex flex-col items-center">
        <h1 className="text-center font-bold text-3xl text-sky-900 mb-10">List Produk Anime</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div data-aos="fade-right">
            <CardElaina title="Elaina" description="Penyihir cantik dari negeri sihir." image={elaina} />
          </div>
          <div data-aos="fade-up">
            <CardElaina title="Mikasa" description="Prajurit setia dari Shiganshina." image={mikasa} />
          </div>
          <div data-aos="fade-left">
            <CardElaina title="Chitoge" description="Ratu tsundere dari Nisekoi." image={Nisekoi_chitoge} />
          </div>
          <div data-aos="fade-right">
            <CardElaina title="Elaina" description="Penyihir cantik dari negeri sihir." image={elaina} />
          </div>
          <div data-aos="fade-up">
            <CardElaina title="Mikasa" description="Prajurit setia dari Shiganshina." image={mikasa} />
          </div>
          <div data-aos="fade-left">
            <CardElaina title="Chitoge" description="Ratu tsundere dari Nisekoi." image={Nisekoi_chitoge} />
          </div>
        </div>
      </div>

      {/* Komentar */}
      <div className="py-16 px-5 flex flex-col items-center bg-sky-100">
        <h1 className="text-center font-bold text-3xl text-sky-800 mb-10">Komentar Pelanggan</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Comment name="Elaina" comment="Produk sihirnya berkualitas!" avatar={elaina} rating={5} offset="translate-y-0" />
          <Comment name="Hinata" comment="Pengiriman cepat dan aman." avatar={Nisekoi_chitoge} rating={4} offset="translate-y-2" />
          <Comment name="Mikasa" comment="Box agak penyok, tapi oke." avatar={mikasa} rating={4} offset="-translate-y-1" />
          <Comment name="Mikasa" comment="Box agak penyok, tapi oke." avatar={mikasa} rating={4} offset="-translate-y-1" />
          <Comment name="Mikasa" comment="Box agak penyok, tapi oke." avatar={mikasa} rating={4} offset="-translate-y-1" />
          <Comment name="Mikasa" comment="Box agak penyok, tapi oke." avatar={mikasa} rating={4} offset="-translate-y-1" />
        </div>
      </div>

<div className='bg-sky-600 w-full h-10 flex items-center justify-center'>
  <p> © Fall 2025 WibukuStore. All rights reserved.</p>
</div>

    </>
  );

    
  };

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
