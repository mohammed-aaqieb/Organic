import { motion, AnimatePresence } from "framer-motion";

import { FaCheckCircle } from "react-icons/fa";

import { Link } from "react-router-dom";

const OrderSuccessModal = ({
  isOpen,
}) => {

  return (
    <AnimatePresence>

      {isOpen && (

        <>
          {/* Backdrop */}
          <motion.div
            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

            className="fixed inset-0 bg-black/40 backdrop-blur-md z-[100]"
          />

          {/* Modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              y: 40,
            }}

            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              scale: 0.8,
              y: 40,
            }}

            transition={{
              duration: 0.5,
            }}

            className="fixed inset-0 z-[110] flex items-center justify-center px-6"
          >

            <div className="relative w-full max-w-xl bg-white/90 backdrop-blur-2xl rounded-[40px] p-10 md:p-14 text-center border border-white/30 shadow-[0_10px_50px_rgba(0,0,0,0.08)] overflow-hidden">

              {/* Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-green-300/20 blur-[100px] rounded-full"></div>

              <div className="relative z-10">

                {/* Icon */}
                <motion.div
                  initial={{
                    scale: 0,
                    rotate: -180,
                  }}

                  animate={{
                    scale: 1,
                    rotate: 0,
                  }}

                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 12,
                  }}

                  className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center mx-auto text-green-600 text-6xl"
                >

                  <FaCheckCircle />

                </motion.div>

                {/* Title */}
                <h2 className="text-5xl font-extrabold text-gray-900 mt-10">
                  Order Placed!
                </h2>

                {/* Text */}
                <p className="text-gray-600 leading-relaxed text-lg mt-6 max-w-md mx-auto">
                  Your fresh organic products are being prepared and will arrive soon.
                </p>

                {/* Delivery Box */}
                <div className="mt-10 bg-[#F8FFF4] rounded-[28px] p-6">

                  <p className="text-sm uppercase tracking-[3px] text-green-600 font-semibold">
                    Estimated Delivery
                  </p>

                  <h3 className="text-3xl font-bold text-gray-900 mt-3">
                    2 - 4 Business Days
                  </h3>

                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-10">

                  <Link
                    to="/products"
                    className="flex-1"
                  >

                    <motion.button
                      whileHover={{
                        scale: 1.02,
                      }}

                      whileTap={{
                        scale: 0.98,
                      }}

                      className="w-full h-14 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold transition duration-300"
                    >

                      Continue Shopping

                    </motion.button>

                  </Link>

                  <Link
                    to="/"
                    className="flex-1"
                  >

                    <motion.button
                      whileHover={{
                        scale: 1.02,
                      }}

                      whileTap={{
                        scale: 0.98,
                      }}

                      className="w-full h-14 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 font-semibold transition duration-300"
                    >

                      Back To Home

                    </motion.button>

                  </Link>

                </div>

              </div>

            </div>

          </motion.div>

        </>

      )}

    </AnimatePresence>
  );
};

export default OrderSuccessModal;