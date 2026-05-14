import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { FaTimes, FaPlus, FaMinus, FaTrash } from "react-icons/fa";

import { useCart } from "../../context/CartContext";

const CartDrawer = ({ isOpen, setIsOpen }) => {
  const { cartItems, subtotal, increaseQty, decreaseQty, removeFromCart } =
    useCart();

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
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[90]"
          />

          {/* Drawer */}
          <motion.div
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{
              type: "spring",
              damping: 30,
              stiffness: 300,
            }}
            className="fixed top-0 right-0 w-full sm:w-[450px] h-screen bg-white z-[100] shadow-[0_10px_60px_rgba(0,0,0,0.12)] flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Your Cart</h2>

                <p className="text-gray-500 mt-1">{cartItems.length} Items</p>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-12 h-12 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition duration-300"
              >
                <FaTimes />
              </button>
            </div>

            {/* Empty State */}
            {cartItems.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
                <div className="w-28 h-28 rounded-full bg-green-100 flex items-center justify-center text-5xl">
                  🛒
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mt-8">
                  Your Cart is Empty
                </h3>

                <p className="text-gray-500 mt-4 leading-relaxed">
                  Add fresh organic products to your cart.
                </p>
              </div>
            ) : (
              <>
                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
                  {cartItems.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      className="flex gap-5 bg-[#F8FFF4] rounded-[28px] p-4"
                    >
                      {/* Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-28 h-28 rounded-[22px] object-cover"
                      />

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 line-clamp-1">
                              {item.name}
                            </h3>

                            <p className="text-green-700 font-bold mt-2">
                              ₹{item.price}
                            </p>
                          </div>

                          {/* Remove */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-600 transition duration-300"
                          >
                            <FaTrash />
                          </button>
                        </div>

                        {/* Quantity */}
                        <div className="flex items-center gap-3 mt-6">
                          <button
                            onClick={() => decreaseQty(item.id)}
                            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-green-50 transition duration-300"
                          >
                            <FaMinus className="text-sm" />
                          </button>

                          <div className="w-10 text-center font-bold">
                            {item.quantity}
                          </div>

                          <button
                            onClick={() => increaseQty(item.id)}
                            className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-green-50 transition duration-300"
                          >
                            <FaPlus className="text-sm" />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                <div className="border-t border-gray-100 p-6 space-y-5">
                  {/* Subtotal */}
                  <div className="flex items-center justify-between">
                    <p className="text-xl font-semibold text-gray-700">
                      Subtotal
                    </p>

                    <h3 className="text-3xl font-extrabold text-green-700">
                      ₹{subtotal}
                    </h3>
                  </div>

                  {/* Checkout */}
                  <Link to="/checkout">
                    <motion.button
                      whileHover={{
                        scale: 1.02,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="w-full h-16 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold text-lg shadow-[0_8px_25px_rgba(34,197,94,0.2)] transition duration-300"
                    >
                      Proceed To Checkout
                    </motion.button>
                  </Link>
                </div>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
