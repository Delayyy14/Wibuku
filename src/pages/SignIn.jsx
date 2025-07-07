import React from 'react';
import { useNavigate } from 'react-router-dom';
import bg from '../image/bgSignin.jpg'; // ganti dengan path gambar kamu
import elaina from '../image/elaina.jpg';

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
      <div className="bg-white/20 backdrop-blur-md p-10 rounded-xl shadow-lg w-96">
      <img src="elaina" alt="hai" className='text-center'/>
        <h2 className="text-2xl font-bold mb-5 text-center text-black drop-shadow">
          Sign In
        </h2>
        <form onSubmit={handleSubmit}>
            
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-4 border rounded bg-white/30 text-black placeholder-black/70 backdrop-blur-sm"
            required
          />
          <input
            type="password"
            minLength={7}
            placeholder="Password"
            className="w-full px-4 py-2 mb-4 border rounded bg-white/30 text-black placeholder-black/70 backdrop-blur-sm"
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
