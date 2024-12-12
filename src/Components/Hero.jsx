// src/components/Hero.js
import React from "react";
import javed from "../assets/Javed.jpg"

const Hero = () => {
  return (
    <section className="bg-gray-800 text-white text-center py-20">
      <div className="flex items-center justify-center mb-1">
        <img className="w-[10%] rounded-full" src={javed} alt="" />
      </div>
      <h1 className="text-4xl font-bold mb-4">Hello, I'm Javed Ali</h1>
      <p className="text-lg mb-8">Frontend Developer | React Enthusiast</p>
      <a
        href="#contact"
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600"
      >
        Get in Touch
      </a>
    </section>
  );
};

export default Hero;
