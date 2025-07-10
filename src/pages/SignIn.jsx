import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import bg from '../image/bgSignIn.jpg';
import wibuku from '../image/wibuku.jpg';

function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ambil data akun dari localStorage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Validasi
    if (email === storedEmail && password === storedPassword) {
      console.log('Login berhasil!');
      navigate('/');
    } else {
      setError('Email atau password salah!');
    }
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

        {error && <p className="text-red-400 text-sm mb-3">{error}</p>}

        <form onSubmit={handleSubmit} className="text-left">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded bg-white/40 text-black placeholder-gray-700"
            required
          />
          <input
            type="password"
            minLength={7}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
