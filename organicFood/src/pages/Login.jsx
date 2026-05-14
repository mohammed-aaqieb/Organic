import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import {
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import { useState } from "react";

const Login = () => {

  const [showPassword, setShowPassword] =
    useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8FFF4]">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-300/20 blur-[100px] rounded-full"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* Left Side */}
        <div className="relative hidden lg:flex items-center justify-center overflow-hidden">

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop"
            alt="Organic"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 max-w-lg px-10 text-white">

            <p className="uppercase tracking-[4px] text-green-300 font-semibold mb-6">
              Fresh Organic Living
            </p>

            <h1 className="text-6xl font-extrabold leading-tight">
              Welcome Back
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed mt-8">
              Discover premium organic fruits and vegetables delivered fresh to your doorstep.
            </p>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center px-6 py-20">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.7,
            }}

            className="w-full max-w-xl bg-white/80 backdrop-blur-2xl rounded-[40px] border border-white/40 p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
          >

            {/* Heading */}
            <div className="mb-10">

              <p className="uppercase tracking-[4px] text-green-600 font-semibold mb-4">
                Account Access
              </p>

              <h2 className="text-5xl font-extrabold text-gray-900">
                Login
              </h2>

              <p className="text-gray-500 mt-5 leading-relaxed">
                Enter your details to continue your organic shopping journey.
              </p>

            </div>

            {/* Form */}
            <form className="space-y-6">

              {/* Email */}
              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"

                  className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition duration-300"
                />

              </div>

              {/* Password */}
              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }

                    placeholder="Enter your password"

                    className="w-full h-14 px-5 pr-14 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition duration-300"
                  />

                  {/* Toggle */}
                  <button
                    type="button"

                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }

                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
                  >

                    {showPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}

                  </button>

                </div>

              </div>

              {/* Forgot */}
              <div className="flex justify-end">

                <button
                  type="button"
                  className="text-green-600 hover:text-green-700 font-medium transition duration-300"
                >
                  Forgot Password?
                </button>

              </div>

              {/* Login Button */}
              <motion.button
                whileHover={{
                  scale: 1.02,
                }}

                whileTap={{
                  scale: 0.98,
                }}

                className="w-full h-14 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold text-lg shadow-[0_8px_25px_rgba(34,197,94,0.2)] transition duration-300"
              >

                Login

              </motion.button>

            </form>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">

              <div className="flex-1 h-px bg-gray-200"></div>

              <p className="text-gray-400 text-sm">
                OR
              </p>

              <div className="flex-1 h-px bg-gray-200"></div>

            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-2 gap-4">

              <button className="h-14 rounded-2xl border border-gray-200 hover:bg-gray-50 font-medium transition duration-300">
                Google
              </button>

              <button className="h-14 rounded-2xl border border-gray-200 hover:bg-gray-50 font-medium transition duration-300">
                Apple
              </button>

            </div>

            {/* Signup Link */}
            <p className="text-center text-gray-500 mt-10">

              Don’t have an account?{" "}

              <Link
                to="/signup"
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                Sign Up
              </Link>

            </p>

          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default Login;