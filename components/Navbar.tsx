"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-blue-900/95 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-5 sm:px-6">

        <div className="flex items-center justify-between py-3">

          {/* Logo */}
          <a href="#" onClick={closeMenu} className="flex items-center">
            <Image
              src="/logo/Logo.png"
              alt="Erackel Traders"
              width={140}
              height={50}
              priority
              className="w-[120px] sm:w-[140px] h-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-white font-medium text-[15px]">

            <li>
              <a href="#" className="hover:text-blue-200 transition duration-300">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-blue-200 transition duration-300">
                About
              </a>
            </li>

            <li>
              <a href="#products" className="hover:text-blue-200 transition duration-300">
                Products
              </a>
            </li>

            <li>
              <a href="#services" className="hover:text-blue-200 transition duration-300">
                Services
              </a>
            </li>

            <li>
              <a href="#gallery" className="hover:text-blue-200 transition duration-300">
                Gallery
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-blue-200 transition duration-300">
                Contact
              </a>
            </li>

          </ul>

          {/* Desktop Quote Button */}
          <a
            href="#contact"
            className="hidden md:inline-flex bg-white text-blue-900 px-5 lg:px-6 py-2.5 rounded-lg font-semibold shadow hover:bg-blue-100 hover:scale-105 transition-all duration-300"
          >
            Get Quote
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white text-3xl w-11 h-11 flex items-center justify-center"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden border-t border-blue-700 py-4">

            <div className="flex flex-col">

              <a
                href="#"
                onClick={closeMenu}
                className="text-white py-3 px-3 rounded-lg hover:bg-blue-800 transition"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="text-white py-3 px-3 rounded-lg hover:bg-blue-800 transition"
              >
                About
              </a>

              <a
                href="#products"
                onClick={closeMenu}
                className="text-white py-3 px-3 rounded-lg hover:bg-blue-800 transition"
              >
                Products
              </a>

              <a
                href="#services"
                onClick={closeMenu}
                className="text-white py-3 px-3 rounded-lg hover:bg-blue-800 transition"
              >
                Services
              </a>

              <a
                href="#gallery"
                onClick={closeMenu}
                className="text-white py-3 px-3 rounded-lg hover:bg-blue-800 transition"
              >
                Gallery
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="text-white py-3 px-3 rounded-lg hover:bg-blue-800 transition"
              >
                Contact
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-3 bg-white text-blue-900 text-center px-6 py-3 rounded-lg font-semibold"
              >
                Get Quote
              </a>

            </div>

          </div>
        )}

      </div>
    </nav>
  );
}