import React from 'react';

function Comment({ name, comment, avatar, rating, offset }) {
  const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);

  return (
    <div
      className={`bg-white shadow-md rounded-xl p-5 flex items-start gap-4 w-full max-w-2xl
                 transform ${offset} transition duration-300`}
    >
      <img
        src={avatar}
        alt="avatar"
        className="w-14 h-14 object-cover rounded-full border-2 border-sky-600"
      />
      <div>
        <h2 className="font-semibold text-sky-900">{name}</h2>
        <p className="text-gray-600 text-sm">{comment}</p>
        <p className="mt-2 text-yellow-500 text-lg">{stars}</p>
      </div>
    </div>
  );
}

export default Comment;
