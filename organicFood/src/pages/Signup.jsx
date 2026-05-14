import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import {
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

import { useState } from "react";

const Signup = () => {

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F8FFF4]">

      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-300/20 blur-[100px] rounded-full"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">

        {/* Left Side */}
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
                Create Account
              </p>

              <h2 className="text-5xl font-extrabold text-gray-900">
                Sign Up
              </h2>

              <p className="text-gray-500 mt-5 leading-relaxed">
                Join our organic marketplace and start shopping fresh today.
              </p>

            </div>

            {/* Form */}
            <form className="space-y-6">

              {/* Name */}
              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"

                  className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition duration-300"
                />

              </div>

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

                    placeholder="Create password"

                    className="w-full h-14 px-5 pr-14 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition duration-300"
                  />

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

              {/* Confirm Password */}
              <div>

                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Confirm Password
                </label>

                <div className="relative">

                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }

                    placeholder="Confirm password"

                    className="w-full h-14 px-5 pr-14 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition duration-300"
                  />

                  <button
                    type="button"

                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }

                    className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
                  >

                    {showConfirmPassword ? (
                      <FaEyeSlash />
                    ) : (
                      <FaEye />
                    )}

                  </button>

                </div>

              </div>

              {/* Terms */}
              <label className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed cursor-pointer">

                <input
                  type="checkbox"
                  className="mt-1 accent-green-600"
                />

                I agree to the Terms & Conditions and Privacy Policy.

              </label>

              {/* Button */}
              <motion.button
                whileHover={{
                  scale: 1.02,
                }}

                whileTap={{
                  scale: 0.98,
                }}

                className="w-full h-14 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold text-lg shadow-[0_8px_25px_rgba(34,197,94,0.2)] transition duration-300"
              >

                Create Account

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

            {/* Social */}
            <div className="grid grid-cols-2 gap-4">

              <button className="h-14 rounded-2xl border border-gray-200 hover:bg-gray-50 font-medium transition duration-300">
                Google
              </button>

              <button className="h-14 rounded-2xl border border-gray-200 hover:bg-gray-50 font-medium transition duration-300">
                Apple
              </button>

            </div>

            {/* Login */}
            <p className="text-center text-gray-500 mt-10">

              Already have an account?{" "}

              <Link
                to="/login"
                className="text-green-600 hover:text-green-700 font-semibold"
              >
                Login
              </Link>

            </p>

          </motion.div>

        </div>

        {/* Right Side */}
        <div className="relative hidden lg:flex items-center justify-center overflow-hidden">

          {/* Image */}
          <img
            src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=1200&auto=format&fit=crop"
            alt="Organic"

            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content */}
          <div className="relative z-10 max-w-lg px-10 text-white">

            <p className="uppercase tracking-[4px] text-green-300 font-semibold mb-6">
              Organic Lifestyle
            </p>

            <h1 className="text-6xl font-extrabold leading-tight">
              Eat Fresh. Live Better.
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed mt-8">
              Join thousands of customers choosing premium organic fruits and vegetables every day.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Signup;