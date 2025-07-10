import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_a9h5oze',      // ganti ini
      'template_5qamaig',     // ganti ini
      form.current,
      'SRqngSr5GvLlFkzUO'       // ganti ini
    ).then(() => {
      setSuccess(true);
      form.current.reset();
    }).catch((err) => {
      console.error("Error kirim email:", err);
      alert("Gagal mengirim pesan!");
    });
  };

  return (
    <section id="kontak" className="bg-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-6">Hubungi Kami</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="name" // HARUS SAMA dengan EmailJS: {{name}}
            placeholder="Nama Anda"
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            name="email" // HARUS SAMA dengan EmailJS: {{email}}
            placeholder="Email Anda"
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <textarea
            name="message" // HARUS SAMA dengan EmailJS: {{message}}
            placeholder="Tulis pesan Anda di sini..."
            rows="5"
            required
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <button
            type="submit"
            className="bg-sky-800 text-white font-semibold px-6 py-3 rounded-full hover:bg-sky-700 transition"
          >
            Kirim Pesan
          </button>
        </form>
        {success && (
          <p className="text-green-600 mt-4 text-center">Pesan berhasil dikirim ke admin!</p>
        )}
      </div>
    </section>
  );
}
