import { motion } from "framer-motion";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { FaHeart, FaShoppingBag } from "react-icons/fa";

const ProductCard = ({ item }) => {
  const { addToCart } = useCart();
  return (
    <Link to={`/products/${item.id}`}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
        }}
        viewport={{ once: true }}
        whileHover={{
          y: -15,
        }}
        className="group relative bg-white rounded-[35px] overflow-hidden shadow-xl hover:shadow-2xl transition duration-500"
      >
        {/* Image Section */}
        <div className="relative overflow-hidden">
          {/* Category Badge */}
          <div className="absolute top-5 left-5 z-20 bg-green-600 text-white text-sm px-4 py-2 rounded-full capitalize shadow-lg">
            {item.category}
          </div>

          {/* Wishlist */}
          <motion.button
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.9,
            }}
            className="absolute top-5 right-5 z-20 w-12 h-12 rounded-full bg-white/80 backdrop-blur-xl flex items-center justify-center text-gray-700 shadow-lg hover:bg-green-600 hover:text-white transition duration-300"
          >
            <FaHeart />
          </motion.button>

          {/* Product Image */}
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-[2500ms]"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Product Name */}
          <h3 className="text-2xl font-bold text-gray-900">{item.name}</h3>

          {/* Description */}
          <p className="text-gray-500 mt-3 leading-relaxed">
            Fresh premium organic food directly from trusted farms.
          </p>

          {/* Bottom */}
          <div className="flex items-center justify-between mt-8">
            {/* Price */}
            <h4 className="text-3xl font-extrabold text-green-700">
              ₹{item.price}
            </h4>

            {/* Add To Cart */}
            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={(e) => {
                e.preventDefault();
                addToCart(item);
              }}
              className="h-14 px-6 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold flex items-center gap-3 shadow-lg transition duration-300"
            >
              <FaShoppingBag />
              Add
            </motion.button>
          </div>
        </div>

        {/* Hover Glow */}
        <div className="absolute inset-0 rounded-[35px] opacity-0 group-hover:opacity-100 transition duration-500 border border-green-400/40 shadow-[0_0_50px_rgba(34,197,94,0.25)] pointer-events-none"></div>

        {/* Shine Sweep */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">
          <div className="absolute -left-40 top-0 w-40 h-full bg-white/20 rotate-12 blur-2xl group-hover:left-[120%] transition-all duration-[1500ms]"></div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProductCard;
