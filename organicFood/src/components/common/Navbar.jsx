import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import CartDrawer from "../cart/CartDrawer";

const Navbar = () => {

  const location = useLocation();

  const [isCartOpen, setIsCartOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const isHome = location.pathname === "/";

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isHome && !scrolled
            ? "bg-transparent"
            : "bg-white/20 backdrop-blur-2xl border-b border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
        }`}
      >

        <div className="flex items-center justify-between px-6 md:px-16 py-5">

          {/* Logo */}
          <Link to="/">
            <h1
              className={`text-3xl font-extrabold tracking-wide cursor-pointer transition duration-300 ${
                isHome && !scrolled
                  ? "text-white"
                  : "text-green-700"
              }`}
            >
              Organic
            </h1>
          </Link>

          {/* Navigation Links */}
          <ul
            className={`hidden md:flex items-center gap-10 font-medium transition duration-300 ${
              isHome && !scrolled
                ? "text-white"
                : "text-gray-800"
            }`}
          >

            <li>
              <Link
                to="/"
                className={`transition duration-300 ${
                  isHome && !scrolled
                    ? "hover:text-green-300"
                    : "hover:text-green-600"
                }`}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/products"
                className={`transition duration-300 ${
                  isHome && !scrolled
                    ? "hover:text-green-300"
                    : "hover:text-green-600"
                }`}
              >
                Products
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className={`transition duration-300 ${
                  isHome && !scrolled
                    ? "hover:text-green-300"
                    : "hover:text-green-600"
                }`}
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className={`transition duration-300 ${
                  isHome && !scrolled
                    ? "hover:text-green-300"
                    : "hover:text-green-600"
                }`}
              >
                Contact
              </Link>
            </li>

          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-4">

            {/* Login */}
            <Link
              to="/login"
              className={`hidden md:block transition duration-300 ${
                isHome && !scrolled
                  ? "text-white hover:text-green-300"
                  : "text-gray-800 hover:text-green-600"
              }`}
            >
              Login
            </Link>

            {/* Signup */}
            <Link
              to="/signup"
              className="bg-white/90 hover:bg-white text-green-700 px-5 py-2.5 rounded-full font-semibold transition duration-300 shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
            >
              Sign Up
            </Link>

            {/* Cart */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-full transition duration-300 shadow-[0_4px_20px_rgba(34,197,94,0.18)] hover:scale-105"
            >
              Cart
            </button>

          </div>

        </div>

      </nav>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        setIsOpen={setIsCartOpen}
      />
    </>
  );
};

export default Navbar;