import React from 'react';

function Navbar() {
  return (
    <nav className="bg-gray-700 text-sky-800 p-4 shadow-lg sticky top-0 z-50 backdrop-blur-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-xl text-white">ElainaStore</h1>
        <ul className="flex gap-4">
          <li><a href="#" className="bg-sky-800 text-white border border-sky-800 p-2 rounded-2xl
               hover:bg-white hover:text-sky-800
               transition duration-300 ease-in-out">Beranda</a></li>
          <li><a href="#pelanggan" className="bg-sky-800 text-white border border-sky-800 p-2 rounded-2xl
               hover:bg-white hover:text-sky-800
               transition duration-300 ease-in-out">Produk</a></li>
          <li><a href="#" className="bg-sky-800 text-white border border-sky-800 p-2 rounded-2xl
               hover:bg-white hover:text-sky-800
               transition duration-300 ease-in-out">Kontak</a></li>
          <li><a href="/SignIn" className="bg-white text-sky-800 border border-sky-800 p-2 rounded-2xl hover:bg-sky-800 hover:text-white transition">
  Sign In
</a>
</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
