import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Di sini kamu bisa validasi login dulu kalau mau
    navigate('/'); // pindah ke halaman utama
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-sky-200">
      <div className="bg-white p-10 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-5 text-center text-sky-800">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 border rounded"
            required
          />
          <input
            type="password"
            minLength={7}
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 border rounded"
            required
          />
          <button
            type="submit"
            className="w-full bg-sky-800 text-white py-2 rounded hover:bg-sky-700 transition"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
