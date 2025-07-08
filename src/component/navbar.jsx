import React, { useEffect, useState } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
        <ul className="flex gap-4">
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
          <li>
            <a
              href="/signin"
              className="bg-yellow-400 text-sky-900 border border-yellow-400 px-4 py-2 rounded-full hover:bg-yellow-300 hover:text-sky-800 transition duration-300 font-semibold"
            >
              Sign In
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
