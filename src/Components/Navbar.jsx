import React, { useState } from "react";

const Navbar = () => {
  // State for toggling the menu
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open/close
  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <h1 className="text-xl font-bold">Javed Ali</h1>

        {/* Hamburger Icon */}
        <button
          className="md:hidden block focus:outline-none"
          onClick={handleMenuToggle}
        >
          {/* Simple hamburger icon */}
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white mb-1"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${isOpen ? "flex flex-col justify-center items-center" : "hidden"}
           md:flex space-y-2 md:space-y-0 md:space-x-4 absolute md:static  top-10 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent  `}
        >
          <li>
            <a href="#about" className="block px-4 py-2 hover:text-gray-400">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="block px-4 py-2 hover:text-gray-400">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="block px-4 py-2 hover:text-gray-400">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="block px-4 py-2 hover:text-gray-400">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
