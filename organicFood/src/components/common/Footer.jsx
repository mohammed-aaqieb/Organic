import { motion } from "framer-motion";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-[#07130A] text-white overflow-hidden">

      {/* Background Glow */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
        }}

        transition={{
          duration: 10,
          repeat: Infinity,
        }}

        className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-500/10 blur-[140px] rounded-full"
      />

      {/* Floating Orb */}
      <motion.div
        animate={{
          y: [0, 30, 0],
        }}

        transition={{
          duration: 8,
          repeat: Infinity,
        }}

        className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-lime-300/10 blur-[120px] rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 py-24">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

          {/* Brand */}
          <div>

            <h2 className="text-4xl font-extrabold text-white">
              Organic
            </h2>

            <p className="text-gray-400 mt-6 leading-relaxed">
              Premium organic fruits and vegetables directly from trusted farms.
              Healthy lifestyle with fresh natural foods.
            </p>

            {/* Socials */}
            <div className="flex gap-5 mt-8">

              {[

                <FaFacebookF />,
                <FaInstagram />,
                <FaTwitter />,
                <FaYoutube />,

              ].map((icon, index) => (

                <motion.div
                  key={index}

                  whileHover={{
                    y: -8,
                    scale: 1.1,
                  }}

                  className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center text-lg cursor-pointer hover:bg-green-600 transition duration-300"
                >

                  {icon}

                </motion.div>

              ))}

            </div>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-2xl font-bold mb-8">
              Quick Links
            </h3>

            <ul className="space-y-5 text-gray-400">

              <li>
                <Link
                  to="/"
                  className="hover:text-green-400 transition duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/products"
                  className="hover:text-green-400 transition duration-300"
                >
                  Products
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-green-400 transition duration-300"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-green-400 transition duration-300"
                >
                  Contact
                </Link>
              </li>

            </ul>

          </div>

          {/* Categories */}
          <div>

            <h3 className="text-2xl font-bold mb-8">
              Categories
            </h3>

            <ul className="space-y-5 text-gray-400">

              <li className="hover:text-green-400 transition duration-300 cursor-pointer">
                Organic Fruits
              </li>

              <li className="hover:text-green-400 transition duration-300 cursor-pointer">
                Fresh Vegetables
              </li>

              <li className="hover:text-green-400 transition duration-300 cursor-pointer">
                Seasonal Foods
              </li>

              <li className="hover:text-green-400 transition duration-300 cursor-pointer">
                Healthy Products
              </li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-2xl font-bold mb-8">
              Contact Us
            </h3>

            <div className="space-y-6 text-gray-400">

              <div className="flex gap-4">

                <FaMapMarkerAlt className="text-green-400 mt-1" />

                <p>
                  Aurangabad, Maharashtra, India
                </p>

              </div>

              <div className="flex gap-4">

                <FaPhoneAlt className="text-green-400 mt-1" />

                <p>
                  +91 98765 43210
                </p>

              </div>

              <div className="flex gap-4">

                <FaEnvelope className="text-green-400 mt-1" />

                <p>
                  organic@example.com
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-gray-500 text-center">
            © 2026 Organic. All Rights Reserved.
          </p>

          <div className="flex gap-8 text-gray-500">

            <p className="hover:text-green-400 transition duration-300 cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-green-400 transition duration-300 cursor-pointer">
              Terms & Conditions
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;