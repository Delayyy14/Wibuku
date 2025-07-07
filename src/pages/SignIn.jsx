import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import bg from '../image/bgSignIn.jpg'; // ganti dengan gambar background kamu
import wibuku from '../image/wibuku.jpg'; // gambar elaina

function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white/20 backdrop-blur-md p-10 rounded-xl shadow-lg w-96 text-white text-center">
        <img
          src={wibuku}
          alt="Elaina"
          className="w-24 h-24 mx-auto rounded shadow-lg mb-5 object-cover"
        />
        <h2 className="text-2xl font-bold mb-5 drop-shadow">Sign In</h2>

        <form onSubmit={handleSubmit} className="text-left">
          <input
            type="nama"
            placeholder="Username or Email"
            className="w-full px-4 py-2 mb-4 border rounded bg-white/40 text-black placeholder-gray-700"
            required
          />
          <input
            type="password"
            minLength={7}
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 border rounded bg-white/40 text-black placeholder-gray-700"
            required
          />
          <button
            type="submit"
            className="w-full bg-sky-800 text-white py-2 rounded hover:bg-sky-700 transition"
          >
            Masuk
          </button>
        </form>

        <p className="mt-4 text-sm text-black">
          Belum punya akun?{' '}
          <Link
            to="/register"
            className="underline hover:text-sky-300 transition"
          >
            Daftar di sini
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
