import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation, Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
{/* pages */}
import Navbar from './component/navbar';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Products from './pages/products';
import ProdukListWithLove from './component/ProdukList';
import GalleryEvent from './component/GalleryEvent';
import DashboardAdmin from './pages/DashboardAdmin';

{/* images */}
import elaina from './image/elaina.jpg';
import Nisekoi_chitoge from './image/Nisekoi_chitoge.jpg';
import rem from './image/rem.jpg';
import march from './image/march.jpg';
import cat from './image/cat.jpg';
import wielino from './image/wielino.jpg';
import googleplay from './image/googleplay.jpg';
import appstore from './image/appstore.png';
import wibuku from './image/wibuku.jpg';

const komentarList = [
  { name: "Elaina", comment: "Produk figurenya berkualitas!", avatar: elaina, rating: 5 },
  { name: "Chitoge", comment: "Pengiriman cepat dan aman.", avatar: Nisekoi_chitoge, rating: 4 },
  { name: "Rem", comment: "Box agak penyok, tapi oke.", avatar: rem, rating: 3 },
  { name: "March", comment: "Lucu banget barangnya", avatar: march, rating: 5 },
  { name: "Cukurukuk", comment: "Admin nya ramah, Miaw!", avatar: cat, rating: 5 },
  { name: "Wielino Ino", comment: "Pengiriman secepat cahaya", avatar: wielino, rating: 5 },
  { name: "Wielino Ino", comment: "Pengiriman secepat cahaya", avatar: wielino, rating: 5 },
  { name: "Wielino Ino", comment: "Pengiriman secepat cahaya", avatar: wielino, rating: 5 },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />

      {/* Hero */}
      <div className="h-screen bg-sky-800 text-white text-center p-10">
        <div className='flex justify-center mt-20'>
        <img src={wibuku} alt="logoapp" className='h-50 rounded'/>
        </div>
        
        <h1 className="text-4xl font-bold mb-4">OtakuMart</h1>
        <h2 className="text-xl mb-2">Koleksi Merch Anime Terbaik</h2>
        <p className="mb-4">Temukan merchandise favoritmu. Figure, poster, jaket, dan lainnya!</p>
        <Link to="/products">
          <button className="bg-white text-sky-800 px-4 py-2 rounded-full hover:bg-sky-700 hover:text-white transition duration-300">Lihat Produk</button>
        </Link>
      </div>

      {/* Produk */}
      <div className="p-10 text-center">
        <ProdukListWithLove />
      </div>

      {/* Galeri */}
      <div className="p-10">
        <GalleryEvent />
      </div>

      {/* Komentar */}
<div className="p-10 bg-blue-100 text-center">
  <h2 className="text-2xl font-bold mb-6">Komentar Pelanggan</h2>
  
  <div className="flex flex-wrap justify-center gap-6">
    {komentarList.map((k, i) => (
      <div key={i} className="bg-white rounded-2xl w-60 p-4 shadow-md">
        <img src={k.avatar} alt={k.name} className="mx-auto mb-2 w-20 h-20 rounded-full" />
        <p className="font-bold">{k.name}</p>
        <p className="text-sm text-gray-600 italic">"{k.comment}"</p>
        <p className="text-yellow-500 mt-1">⭐ {k.rating}/5</p>
      </div>
    ))}
  </div>
</div>


      {/* Footer */}
      <div className="bg-sky-900 text-white text-center p-6">
        <h3 className="text-xl font-bold mb-2">Otaku<span className='text-red-600'>Mart</span></h3>
        <p className="mb-2">Merchandise anime terpercaya dan lengkap.</p>
        <div className="mb-4">
          <img src={googleplay} alt="Google Play" className="inline-block w-24 mx-2" />
          <img src={appstore} alt="App Store" className="inline-block w-24 mx-2" />
        </div>
        <p className="text-sm">© 2025 OtakuMart. All rights reserved.</p>
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className="text-center pt-40">
      <h1 className="text-xl font-bold">Tunggu yaa...</h1>
    </div>
  );
}

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
      <Route path="/dashboard-admin" element={<DashboardAdmin />} />

    </Routes>
  );
}

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <RouteWithLoader />
    </Router>
  );
}

export default App;
