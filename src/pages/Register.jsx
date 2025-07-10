import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import bg from '../image/bgSignIn.jpg'; // background gambar
import wibuku from '../image/wibuku.jpg'; // gambar elaina



function Register() {
  const navigate = useNavigate();

  // State untuk input form
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    // Simpan data ke localStorage
    localStorage.setItem('nickname', nickname);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    console.log('Akun berhasil disimpan ke localStorage');

    navigate('/signin');
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat flex justify-center items-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="bg-white/20 backdrop-blur-md rounded-xl p-10 shadow-lg w-96 text-white text-center">
        <img
          src={wibuku}
          alt="Elaina"
          className="w-24 h-24 mx-auto rounded shadow-lg mb-5 object-cover"
        />
        <h2 className="text-2xl font-bold mb-5 drop-shadow">Register</h2>

        <form onSubmit={handleRegister} className="text-left">
          <input
            type="text"
            placeholder="Nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded bg-white/40 text-black placeholder-gray-700"
            required
          />
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
            Daftar
          </button>
        </form>

        <p className="mt-4 text-sm text-black">
          Sudah punya akun?{' '}
          <Link to="/signin" className="underline hover:text-sky-300 transition">
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
}


export default Register;
