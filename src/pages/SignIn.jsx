import React from "react";
import { FcGoogle} from "react-icons/fc";
import { FaFacebookF } from 'react-icons/fa';
import { BiLogoXing } from "react-icons/bi";
import elaina from "../image/elaina.jpg";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const handleClick = () => {
    alert("Google Sign In clicked");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Form Login */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md bg-white p-10 rounded-lg shadow-lg scale-85 md:scale-90">
          <h2 className="text-3xl font-bold mb-3 text-gray-800 text-center">
            Selamat datang
          </h2>
          <h2 className="text-md font-semibold mb-6 text-gray-800 text-center">
            Masuk ke akun kamu untuk melanjutkan
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
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
            <div className="flex justify-between mb-4 text-sm">
              <label className="items-center">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-600"
                />
                <span className="ml-2 text-gray-600">Ingat saya</span>
              </label>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-500 p-1 hover:bg-gray-100 rounded-full"
              >
                Lupa password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full mb-6 bg-gradient-to-br from-blue-600 to-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Masuk
            </button>

            {/* Divider */}
            <div className="flex items-center justify-between mb-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-2 text-gray-500">Atau masuk dengan</span>
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
              Belum punya akun?{" "}
              <a
                href="/register"
                className="text-blue-600 hover:text-blue-500 font-semibold"
              >
                Daftar di sini
              </a>
            </p>
          </form>
        </div>
      </div>

      <div className="hidden md:flex w-1/2 items-center justify-center bg-gray-100">
        <img
          src={elaina}
          alt="Elaina"
          className="w-2/3 max-w-sm object-contain rounded-lg shadow"
        />
      </div>
    </div>
  );
}
