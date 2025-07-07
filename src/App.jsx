import './App.css';
import CardElaina from './component/CardElaina'; 
import Navbar from './component/navbar';         
import elaina from './image/elaina.jpg';        
import Nisekoi_chitoge from './image/Nisekoi_chitoge.jpg';
import mikasa from './image/mikasa.jpg';
import Comment from './component/comment';       


function App() {
  return (
    <>
      <Navbar />

      
      <div className="min-h-screen bg-sky-800 flex flex-col md:flex-row items-center justify-center px-10 py-20 gap-10">
        
        <div className="w-full md:w-1/2 flex justify-center animate-pulse">
          <img
            src={elaina}
            alt="Elaina"
            className="max-w-xs rounded-xl shadow-xl"
          />
        </div>

        
        <div className="w-full md:w-1/2 text-white text-center md:text-left">
          <h1 className="text-4xl font-bold mb-4">Selamat Datang di WibukuStore!</h1>
          <p className="mb-6 text-lg">
            WibukuStore adalah toko online khusus para wibu yang menyediakan berbagai merchandise anime dari berbagai genre — mulai dari action, romance, isekai, slice of life, hingga fantasy! 🎉

<br />Temukan koleksi figure, poster, gantungan kunci, jaket, manga, dan barang-barang eksklusif dari karakter favoritmu. Kami jamin kualitas produk terbaik, pengiriman cepat, dan harga bersahabat!

<br />Bergabunglah bersama ribuan pelanggan lain yang telah menemukan tempat belanja anime impian mereka di WibukuStore! 💫
          </p>
          <a
            href="#pelanggan"
            className="bg-white text-sky-800 font-semibold px-6 py-3 rounded hover:bg-sky-700 hover:text-white transition"
          >
            Lihat Stock Anime
          </a>
        </div>
      </div>

      {/* Section Pelanggan */}
      <div id="pelanggan" className="py-16 px-5 flex flex-col items-center">
        <h1 className="text-center font-bold text-3xl text-sky-900 mb-10">
          List Anime
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <CardElaina 
          title="Elaina"
          description="Ability bisa punya tongkang yang bisa melayang dan memiliki sihir"
          image={elaina}/>
          <CardElaina 
          title="Mikasa"
          description="Dapat Gear dan kesetiaan dari hati"
          image={mikasa}/>
          <CardElaina 
          title="Chitoge"
          description="Ratu tsundere"
          image={Nisekoi_chitoge}/>
          <CardElaina />
          <CardElaina />
          <CardElaina />
        </div>
      </div>

      <div className="py-16 px-5 flex flex-col items-center bg-sky-100">
        <h1 className="text-center font-bold text-3xl text-sky-800 mb-10">
          Komentar Pelanggan
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <Comment
            name="Elaina"
            comment="Produk sihirnya berkualitas! Aku suka banget wkwk."
            avatar={elaina}
            rating={5}
            offset="translate-y-0"
          />
          <Comment
            name="Hinata"
            comment="Pelayanan ramah dan pengiriman cepat."
            avatar={Nisekoi_chitoge}
            rating={4}
            offset="translate-y-2"
          />
          <Comment
            name="Mikasa"
            comment="Kurang satu bintang karena box agak penyok."
            avatar={mikasa}
            rating={4}
            offset="-translate-y-1"
          />
          
        </div>
      </div>
    </>
  );
}

export default App;
