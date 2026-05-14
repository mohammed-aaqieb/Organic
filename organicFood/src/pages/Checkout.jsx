import { motion } from "framer-motion";

import Navbar from "../components/common/Navbar";
import { useState } from "react";

import OrderSuccessModal from "../components/checkout/OrderSuccessModal";
import { useCart } from "../context/CartContext";

import { FaCreditCard, FaMoneyBillWave, FaTruck } from "react-icons/fa";

const Checkout = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const { cartItems, subtotal } = useCart();

  const shipping = 50;

  const total = subtotal + shipping;

  return (
    <>
      <Navbar />

      <section className="relative bg-[#F8FFF4] min-h-screen pt-36 pb-20 px-6 md:px-16 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-300/10 blur-[100px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mb-16"
          >
            <p className="uppercase tracking-[4px] text-green-600 font-semibold mb-4">
              Secure Checkout
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900">
              Complete Your Order
            </h1>
          </motion.div>

          {/* Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12">
            {/* Left Side */}
            <div className="space-y-10">
              {/* Shipping Form */}
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
                className="bg-white rounded-[32px] p-8 border border-white/40 shadow-[0_6px_25px_rgba(0,0,0,0.04)]"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Shipping Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition duration-300"
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    className="h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition duration-300"
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition duration-300 md:col-span-2"
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition duration-300 md:col-span-2"
                  />

                  <input
                    type="text"
                    placeholder="Address"
                    className="h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition duration-300 md:col-span-2"
                  />

                  <input
                    type="text"
                    placeholder="City"
                    className="h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition duration-300"
                  />

                  <input
                    type="text"
                    placeholder="Postal Code"
                    className="h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition duration-300"
                  />
                </div>
              </motion.div>

              {/* Payment Method */}
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
                  delay: 0.1,
                }}
                className="bg-white rounded-[32px] p-8 border border-white/40 shadow-[0_6px_25px_rgba(0,0,0,0.04)]"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Payment Method
                </h2>

                <div className="space-y-5">
                  {/* Card */}
                  <div className="flex items-center justify-between p-5 rounded-2xl border border-green-500 bg-green-50">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                        <FaCreditCard />
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900">
                          Credit / Debit Card
                        </h3>

                        <p className="text-sm text-gray-500">
                          Secure online payment
                        </p>
                      </div>
                    </div>

                    <input type="radio" checked readOnly />
                  </div>

                  {/* COD */}
                  <div className="flex items-center justify-between p-5 rounded-2xl border border-gray-200">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                        <FaMoneyBillWave />
                      </div>

                      <div>
                        <h3 className="font-bold text-gray-900">
                          Cash On Delivery
                        </h3>

                        <p className="text-sm text-gray-500">
                          Pay after receiving order
                        </p>
                      </div>
                    </div>

                    <input type="radio" readOnly />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side */}
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
                delay: 0.2,
              }}
              className="lg:sticky lg:top-32 h-fit"
            >
              <div className="bg-white rounded-[32px] p-8 border border-white/40 shadow-[0_6px_25px_rgba(0,0,0,0.04)]">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Order Summary
                </h2>

                {/* Items */}
                <div className="space-y-5">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 rounded-2xl object-cover"
                      />

                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 line-clamp-1">
                          {item.name}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          Qty: {item.quantity}
                        </p>
                      </div>

                      <p className="font-bold text-green-700">
                        ₹{item.price * item.quantity}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Coupon */}
                <div className="flex gap-3 mt-8">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="flex-1 h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition duration-300"
                  />

                  <button className="px-6 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-semibold transition duration-300">
                    Apply
                  </button>
                </div>

                {/* Totals */}
                <div className="mt-10 space-y-4 border-t border-gray-100 pt-6">
                  <div className="flex items-center justify-between text-gray-600">
                    <p>Subtotal</p>

                    <p>₹{subtotal}</p>
                  </div>

                  <div className="flex items-center justify-between text-gray-600">
                    <p className="flex items-center gap-2">
                      <FaTruck />
                      Shipping
                    </p>

                    <p>₹{shipping}</p>
                  </div>

                  <div className="flex items-center justify-between text-2xl font-extrabold text-gray-900 pt-4 border-t border-gray-100">
                    <p>Total</p>

                    <p className="text-green-700">₹{total}</p>
                  </div>
                </div>

                {/* Place Order */}
               <motion.button
  whileHover={{
    scale: 1.02,
  }}

  whileTap={{
    scale: 0.98,
  }}

  onClick={() => setShowSuccess(true)}

  className="w-full h-16 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold text-lg mt-10 shadow-[0_8px_25px_rgba(34,197,94,0.2)] transition duration-300"
>
  Place Order
</motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <OrderSuccessModal
  isOpen={showSuccess}
/>
    </>
  );
};

export default Checkout;
