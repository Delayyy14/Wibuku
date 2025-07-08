import React, { useState } from "react";
import ProfilStack from "./ProfilStack";
import fotoevent from "../image/fotoevent.jpg"
import booth from "../image/booth.jpg"
import cosplay from "../image/cosplay.jpg"
const dataEvent = [
  {
    id: 1,
    img: fotoevent,
    title: "Event Terbesar Wibuku",
    desc: "Kami menyelengarakan Event anime terbesar di Indonesia!"
  },
  {
    id: 2,
    img: booth,
    title: "Pameran Booth Wibuku",
    desc: "Booth Wibuku di Event Umbul Madiun"
  },
  {
    id: 3,
    img: cosplay,
    title: "Salah satu Cosplayer yang hadir",
    desc: "Cosplayer dengan kostum yang memukau dan penuh semangat hadir meramaikan acara."
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
    title: "Kompetisi Cosplay & Lomba Gambar",
    desc: "Event yang seru dan ramai dengan banyak cosplayer dari seluruh Indonesia."
  },    
    {
    id: 5,
    img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
    title: "Kompetisi Cosplay & Lomba Gambar",
    desc: "Event yang seru dan ramai dengan banyak cosplayer dari seluruh Indonesia."
  }
];

export default function GalleryEvent() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (newIndex) => {
    setActiveIndex(newIndex);
  };

  return (
    <div className="flex flex-col md:flex-row items-center gap-10 px-6 py-16 bg-sky-100">
      {/* Deskripsi */}
      <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-bold text-sky-800 mb-4">
          {dataEvent[activeIndex].title}
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {dataEvent[activeIndex].desc}
        </p>
      </div>

      {/* Stack Foto */}
      <div className="w-full md:w-1/2 flex justify-center">
        <ProfilStack
          cardsData={dataEvent}
          cardDimensions={{ width: 300, height: 300 }}
          randomRotation={true}
          sensitivity={180}
          sendToBackOnClick={true}
          onCardChange={handleChange}
        />
      </div>
    </div>
  );
}
