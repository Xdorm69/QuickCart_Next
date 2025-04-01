"use client";
import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Subscribe = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        setEmail('');
        toast.success("Email subscribed successfully");
    }
  return (
    <section className="my-10 py-10 text-center">
      <h1 className="font-semibold text-gray-600 text-3xl mb-3">
        Subscribe now & get 20% off
      </h1>
      <p className="text-sm text-gray-400 mb-5">
        With bunch of speacial offers awaiting, you hop on our services quick.
      </p>

      <form onSubmit={(e) => handleSubmit(e)} className="w-full flex items-center justify-center">
        <div className="w-[60%] flex rounded-lg overflow-hidden">
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            placeholder="Enter your email id"
            className="w-full py-3 px-3 border-t border-b border-l border-gray-300 rounded-tl-lg rounded-bl-lg "
          />
          <button
            className="px-4 py-3 text-white bg-orange-400 hover:bg-orange-600 transition"
            type="submit"
          >
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
}

export default Subscribe