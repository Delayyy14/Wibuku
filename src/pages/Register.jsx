import React from "react";
import { FcGoogle} from "react-icons/fc";
import { FaFacebookF } from 'react-icons/fa';
import { BiLogoXing } from "react-icons/bi";
import vectorRL from "../image/vectorRL2.png";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/signin");
  };
  const handleClick = () => {
    alert("Google Sign In clicked");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-10 rounded-lg shadow-lg scale-95 md:scale-90">
          <h2 className="text-3xl font-bold mb-3 text-gray-800 text-center">
            Buat Akun
          </h2>
          <h2 className="text-md font-semibold mb-6 text-gray-800 text-center">
            Buat akun kamu untuk melanjutkan
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
<div className="flex items-center px-3 gap-3 py-2 shadow-md rounded-md bg-white focus-within:ring-2 focus-within:ring-blue-500 mb-4">
  <i className="fa-solid fa-user text-gray-400"></i>
  <input
    autoFocus
    required
    type="text"
    placeholder="Name"
    className="w-full focus:outline-none font-semibold"
  />
</div>


<div className="flex items-center px-3 gap-3 py-2 shadow-md rounded-md bg-white focus-within:ring-2 focus-within:ring-blue-500 mb-4">
  <i className="fa-solid fa-envelope text-gray-400"></i>
  <input
    required
    type="email"
    placeholder="Email"
    className="w-full focus:outline-none font-semibold"
  />
</div>


<div className="flex items-center px-3 gap-3 py-2 shadow-md rounded-md bg-white focus-within:ring-2 focus-within:ring-blue-500 mb-4">
  <i className="fa-solid fa-lock text-gray-400"></i>
  <input
    required
    minLength={5}
    type="password"
    placeholder="Password"
    className="w-full focus:outline-none font-semibold"
  />
</div>


<div className="flex items-center px-3 gap-3 py-2 shadow-md rounded-md bg-white focus-within:ring-2 focus-within:ring-blue-500 mb-4">
  <i className="fa-solid fa-lock text-gray-400"></i>
  <input
    required
    minLength={5}
    type="password"
    placeholder="Konfirmasi Password"
    className="w-full focus:outline-none font-semibold"
  />
</div>
            <div className="flex justify-between mb-0.5 text-sm">
            <label className="items-center mb-4">
              <input type="checkbox" className="form-checkbox text-blue-600" required />
              <span className="ml-2 text-gray-600 text-sm">
              Saya setuju dengan{" "}
              <a href="/terms" className="text-blue-600 hover:underline" target="_blank" rel="">
              Syarat & Ketentuan
              </a>{" "}
              dan{" "}
              <a href="/privacy" className="text-blue-600 hover:underline" target="_blank" rel="">
              Kebijakan Privasi
            </a>
        </span>
</label>

            </div>

            <button
              type="submit"
              className="w-full mb-6 bg-gradient-to-br from-blue-600 to-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Register
            </button>

            {/* Divider */}
            <div className="flex items-center justify-between mb-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-2 text-gray-500">Atau daftar dengan</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>

            {/* Google Button */}
            <div className="flex items-center justify-center mb-4 gap-2">
              <button
                type="button"
                onClick={handleClick}
                className="flex items-center justify-center bg-white border border-gray-300 rounded-md px-4 py-2 shadow hover:bg-gray-100 transition"
              >
                <FcGoogle className="w-5 h-5" />
              </button>

              <button 
              type="button"
              onClick={handleClick}
              className="flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-md px-4 py-2 shadow hover:bg-gray-100 transition"
              >
              <FaFacebookF className="text-blue-600 w-5 h-5" />
            </button>
              <button 
              type="button"
              onClick={handleClick}
              className="flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-md px-4 py-2 shadow hover:bg-gray-100 transition"
              >
              <BiLogoXing className="text-blue-600 w-5 h-5" />
            </button>
            </div>


            {/* Daftar Link */}
            <p className="text-sm text-gray-600 text-center">
              Sudah Punya Akun?{" "}
              <a
                href="/signin"
                className="text-blue-600 hover:text-blue-500 font-semibold"
              >
                Login di sini
              </a>
            </p>
          </form>
        </div>
      </div>

<div className="flex justify-end items-center h-screen">
  <img 
  src={vectorRL} 
  alt="elaina"
  className="absolute left-169 w-[525px] object-contain rounded-lg z-10" />
  <div className="w-[700px] h-[500px] bg-blue-500 rounded-l-full relative z-0"></div>
  
</div>

    </div>
  );
}
