// src/components/Contact.js
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <form className="max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full mb-4 p-3 border rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 border rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full mb-4 p-3 border rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
