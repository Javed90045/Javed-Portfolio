// src/components/Footer.js
import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Address */}
        <div className="flex items-center justify-center gap-2 text-gray-400">
          <FaMapMarkerAlt />
          <span> Room No-02 Near Mata Mandir, Titwala, India 421605</span>
        </div>

        {/* Email */}
        <div className="flex items-center justify-center gap-2 text-gray-400">
          <FaEnvelope />
          <a
            href="mailto:yourname@gmail.com"
            className="hover:text-white transition"
          >
            Javedali90045@gmail.com
          </a>
        </div>

        {/* Phone Number (Optional) */}
        <div className="flex items-center justify-center gap-2 text-gray-400">
          <FaPhone />
          <span>+91 90045-19302</span>
        </div>

        {/* Footer Text */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Javed Ali. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
