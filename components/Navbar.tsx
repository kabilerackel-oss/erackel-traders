"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-blue-900/90 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image
            src="/logo/Logo.png"
            alt="Erackel Traders"
            width={140}
            height={50}
            priority
            style={{
              width: "140px",
              height: "auto",
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 text-white font-medium text-[15px]">

          <li>
            <a
              href="#"
              className="hover:text-blue-200 transition duration-300"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-blue-200 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#products"
              className="hover:text-blue-200 transition duration-300"
            >
              Products
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="hover:text-blue-200 transition duration-300"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#gallery"
              className="hover:text-blue-200 transition duration-300"
            >
              Gallery
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-blue-200 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">

          <a
            href="#contact"
            className="hidden md:inline-flex bg-white text-blue-900 px-6 py-2.5 rounded-lg font-semibold shadow hover:bg-blue-100 hover:scale-105 transition-all duration-300"
          >
            Get Quote
          </a>

          {/* Mobile Menu (placeholder) */}
          <button className="md:hidden text-white text-3xl">
            ☰
          </button>

        </div>

      </div>
    </nav>
  );
}