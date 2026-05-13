import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-6 md:px-16 py-6">
        {/* Logo */}
        <h1 className="text-3xl font-extrabold text-white tracking-wide cursor-pointer">
          Organic
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-10 text-white font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-green-400 transition duration-300 cursor-pointer"
            >
              {" "}
              Home{" "}
            </Link>
          </li>

          <li>
            {" "}
            <Link
              to="/products"
              className="hover:text-green-400 transition duration-300 cursor-pointer"
            >
              Products
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="hover:text-green-400 transition duration-300 cursor-pointer"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-green-400 transition duration-300 cursor-pointer"
            >
              Contact{" "}
            </Link>
          </li>
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          {/* Login */}
          <Link to="/login" className="hidden md:block text-white hover:text-green-400 transition duration-300">
          Login
          </Link>

          {/* Signup */}
          <Link
            to="/signup"
            className="bg-white text-green-700 hover:bg-green-100 px-5 py-2 rounded-full font-semibold transition duration-300 shadow-lg"
          >
            Sign Up
          </Link>

          {/* Cart */}
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full transition duration-300 shadow-xl hover:scale-105">
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
