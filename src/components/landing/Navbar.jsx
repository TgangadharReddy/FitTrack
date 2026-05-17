import { useState, useEffect } from "react";

import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  // SCROLL EFFECT
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-black/90 backdrop-blur-xl border-b border-white/10 shadow-lg"
            : "bg-transparent"
        }`}
      >

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          {/* LOGO */}
          <a
            href="#home"
            className="text-3xl font-extrabold"
          >
            <span className="text-white">
              Fit
            </span>

            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Track
            </span>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">

            <a
              href="#home"
              className="hover:text-purple-400 transition"
            >
              Home
            </a>

            <a
              href="#features"
              className="hover:text-purple-400 transition"
            >
              Features
            </a>

            <a
              href="#pricing"
              className="hover:text-purple-400 transition"
            >
              Pricing
            </a>

            <a
              href="#contact"
              className="hover:text-purple-400 transition"
            >
              Contact
            </a>

          </div>

          {/* DESKTOP BUTTON */}
          <div className="hidden md:block">

            <a
              href="/auth"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 font-semibold hover:scale-105 transition shadow-lg shadow-purple-500/20"
            >
              Get Started
            </a>

          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            aria-label="Toggle Mobile Menu"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
            className="md:hidden text-2xl"
          >

            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}

          </button>

        </div>

      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-screen w-[280px] bg-black/95 backdrop-blur-2xl z-50 border-l border-white/10 transform transition-transform duration-300
        ${
          menuOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >

        <div className="p-8 flex flex-col h-full">

          {/* CLOSE BUTTON */}
          <button
            aria-label="Close Mobile Menu"
            onClick={() =>
              setMenuOpen(false)
            }
            className="self-end text-3xl mb-12"
          >
            <FaTimes />
          </button>

          {/* LINKS */}
          <div className="flex flex-col gap-8 text-xl font-medium">

            <a
              href="#home"
              onClick={() =>
                setMenuOpen(false)
              }
              className="hover:text-purple-400 transition"
            >
              Home
            </a>

            <a
              href="#features"
              onClick={() =>
                setMenuOpen(false)
              }
              className="hover:text-purple-400 transition"
            >
              Features
            </a>

            <a
              href="#pricing"
              onClick={() =>
                setMenuOpen(false)
              }
              className="hover:text-purple-400 transition"
            >
              Pricing
            </a>

            <a
              href="#contact"
              onClick={() =>
                setMenuOpen(false)
              }
              className="hover:text-purple-400 transition"
            >
              Contact
            </a>

          </div>

          {/* BUTTON */}
          <div className="mt-auto">

            <a
              href="/auth"
              className="block w-full text-center py-4 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 font-semibold shadow-lg shadow-purple-500/20"
            >
              Get Started
            </a>

          </div>

        </div>

      </div>
    </>
  );
}

export default Navbar;