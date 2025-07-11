import React, { useEffect, useRef, useState } from 'react';
import galeri from '../image/galeri1.jpg';
import galeri1 from '../image/galeri-booth.jpg';
import galeri2 from '../image/galeri-cosplay.jpg';
const slides = [
  {
    id: 1,
    image: galeri,
    alt: 'Event Terbesar Wibuku',
  },
  {
    id: 2,
    image: galeri1,
    alt: 'Pameran Booth Wibuku',
  },
  {
    id: 3,
    image: galeri2,
    alt: 'Cosplayer Hadir',
  }
];

export default function GalleryEvent() {
  const containerRef = useRef(null);
  const [index, setIndex] = useState(0);

  // Auto scroll setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (index + 1) % slides.length;
      setIndex(nextIndex);
      if (containerRef.current) {
        containerRef.current.scrollTo({
          left: nextIndex * containerRef.current.clientWidth,
          behavior: 'smooth',
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: slideIndex * containerRef.current.clientWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = (e) => {
    const newIndex = Math.round(
      e.target.scrollLeft / e.target.clientWidth
    );
    if (newIndex !== index) {
      setIndex(newIndex);
    }
  };

  return (
    <div className="relative w-full bg-sky-100 py-10">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Gallery Event</h2>
        <p className="text-gray-600">Koleksi momen terbaik dari event kami</p>
      </div>

      {/* Photo Slider */}
      <div className="relative max-w-4xl mx-auto px-4">
        <div
          ref={containerRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory w-full rounded-lg shadow-lg"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onScroll={handleScroll}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="snap-center shrink-0 w-full h-64 md:h-[400px] relative"
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback jika gambar tidak ditemukan
                  e.target.src = `https://via.placeholder.com/800x400/3b82f6/ffffff?text=${encodeURIComponent(slide.alt)}`;
                }}
              />
              <div className="absolute bottom-0 bg-gradient-to-t from-black/70 to-transparent text-white p-6 w-full">
                <h3 className="text-xl font-semibold mb-2">{slide.alt}</h3>
                <p className="text-sm opacity-90">Dokumentasi event eksklusif</p>
              </div>
            </div>
          ))}
        </div>


        {/* Navigation arrows */}
        <button
          onClick={() => goToSlide(index === 0 ? slides.length - 1 : index - 1)}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => goToSlide((index + 1) % slides.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Slide counter */}
    </div>
  );
}