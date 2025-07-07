import React from 'react';

function CardElaina({ title, description, image }) {
  return (
    <div className="group bg-white shadow-lg rounded-xl w-80 p-5 hover:bg-gradient-to-bl from-sky-600 to-sky-800 transition duration-500 ease-in-out transform hover:scale-105 active:scale-95">
      <img
        src={image}
        alt="Gambar Card"
        className="rounded-lg mb-4"
      />
      <h2 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-white transition">
        {title}
      </h2>
      <p className="text-gray-600 text-sm group-hover:text-white transition">
        {description}
      </p>
      <button className="mt-4 bg-sky-700 text-white px-4 py-2 rounded group-hover:bg-white group-hover:text-sky-700 transition">
        Lihat Detail
      </button>
    </div>
  );
}

export default CardElaina;
