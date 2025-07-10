import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [nickname, setNickname] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Cek login dari localStorage
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

  return (
    <nav
      className={`fixed top-0 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 backdrop-blur-md
        ${scrolled
          ? 'bg-sky-800 rounded-xl shadow-md w-[95%] mt-2'
          : 'bg-sky-800 w-full rounded-none mt-0'}
      `}
    >
      <div className="container mx-auto flex justify-between items-center p-4 text-white">
        <h1 className="font-bold text-xl">WibukuStore</h1>

        <ul className="flex gap-4 items-center">
          <li>
            <a
              href="#"
              className="bg-white text-sky-800 border border-white px-4 py-2 rounded-full hover:bg-sky-700 hover:text-white hover:border-sky-700 transition duration-300"
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="#pelanggan"
              className="bg-white text-sky-800 border border-white px-4 py-2 rounded-full hover:bg-sky-700 hover:text-white hover:border-sky-700 transition duration-300"
            >
              Produk
            </a>
          </li>
          <li>
            <a
              href="#galeri"
              className="bg-white text-sky-800 border border-white px-4 py-2 rounded-full hover:bg-sky-700 hover:text-white hover:border-sky-700 transition duration-300"
            >
              Galeri
            </a>
          </li>

          {isLoggedIn ? (
            <>
              <li className="text-yellow-300 font-semibold">Hai, {nickname}!</li>
              <li>
                <button
                  onClick={handleLogout}
                  className="bg-red-500 text-white border border-red-500 px-4 py-2 rounded-full hover:bg-red-400 transition duration-300"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <a
                href="/signin"
                className="bg-yellow-400 text-sky-900 border border-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-300 hover:text-sky-800 transition duration-300 font-semibold"
              >
                Sign In
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
