import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nickname, setNickname] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem('email');
    const password = localStorage.getItem('password');
    const savedNickname = localStorage.getItem('nickname');

    if (email && password) {
      setIsLoggedIn(true);
      setNickname(savedNickname);
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate('/signin');
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-sky-800 text-white rounded-full shadow-md w-[90%] px-6 py-3 backdrop-blur-lg transition-all duration-300">
      <div className="flex items-center justify-between relative">
        {/* Logo */}
        <h1 className="font-bold text-lg whitespace-nowrap">WibukuStore</h1>

        {/* Hamburger (mobile only) */}
        <button
          className="md:hidden text-white"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Items */}
        <ul className={`flex-col md:flex-row absolute md:static top-14 left-0 w-full md:w-auto bg-sky-800 rounded-xl md:bg-transparent md:flex md:items-center md:gap-2 transition-all duration-300 ease-in-out ${menuOpen ? 'flex' : 'hidden'} md:flex`}>
          <li>
            <a href="#" className="block text-white hover:bg-sky-700 p-2 m-2 rounded-full font-bold text-center">
              Beranda
            </a>
          </li>
          <li>
            <a href="#pelanggan" className="block text-white hover:bg-sky-700 p-2 m-2 rounded-full font-bold text-center">
              Produk
            </a>
          </li>
          <li>
            <a href="#galeri" className="block text-white hover:bg-sky-700 p-2 m-2 rounded-full font-bold text-center">
              Galeri
            </a>
          </li>
          <li>
            <a href="#contact" className="block text-white hover:bg-sky-700 p-2 m-2 rounded-full font-bold text-center">
              Contact Us
            </a>
          </li>
        </ul>

        {/* Login/Logout */}
        <div className="hidden md:flex items-center gap-3 whitespace-nowrap">
          {isLoggedIn ? (
            <>
              <span className="text-yellow-300 font-semibold text-sm">Hai, {nickname}!</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white border border-red-500 px-4 py-2 rounded-full hover:bg-red-400 transition duration-300 text-sm"
              >
                Logout
              </button>
            </>
          ) : (
            <a
              href="/signin"
              className="bg-yellow-400 text-sky-900 border border-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-300 hover:text-sky-800 transition duration-300 font-semibold text-sm"
            >
              Sign In
            </a>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
