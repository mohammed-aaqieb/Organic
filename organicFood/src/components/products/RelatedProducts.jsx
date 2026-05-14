import { motion } from "framer-motion";

import { FaShoppingBag } from "react-icons/fa";

import { Link } from "react-router-dom";

import products from "../../data/products";

import { useCart } from "../../context/CartContext";

const RelatedProducts = ({ currentId, category }) => {
  const { addToCart } = useCart();

  const relatedProducts = products
    .filter((item) => item.category === category && item.id !== currentId)
    .slice(0, 6);

  return (
    <section className="relative py-14 overflow-hidden">
      {/* Glow */}
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-300/10 blur-[100px] rounded-full"></div>

      <div className="relative z-10">
        {/* Heading */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="uppercase tracking-[4px] text-green-600 font-semibold mb-3">
              Organic Recommendations
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Related Products
            </h2>
          </div>
        </div>

        {/* Slider */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4">
          {relatedProducts.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.02,
              }}
              className="min-w-[280px] max-w-[280px] flex-shrink-0 snap-start"
            >
              <Link to={`/products/${item.id}`}>
                <div className="group bg-white rounded-[32px] overflow-hidden border border-white/40 shadow-[0_6px_25px_rgba(0,0,0,0.04)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition duration-500">
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition duration-[2000ms]"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <p className="uppercase tracking-[3px] text-green-600 text-xs font-semibold mb-3">
                      {item.category}
                    </p>

                    <h3 className="text-2xl font-bold text-gray-900 line-clamp-1">
                      {item.name}
                    </h3>

                    <p className="text-gray-500 mt-3 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Bottom */}
                    <div className="flex items-center justify-between mt-6">
                      <h4 className="text-2xl font-extrabold text-green-700">
                        ₹{item.price}
                      </h4>

                      <motion.button
                        whileHover={{
                          scale: 1.08,
                        }}
                        whileTap={{
                          scale: 0.95,
                        }}
                        onClick={(e) => {
                          e.preventDefault();
                          addToCart(item);
                        }}
                        className="w-12 h-12 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center shadow-[0_6px_20px_rgba(34,197,94,0.25)] transition duration-300"
                      >
                        <FaShoppingBag />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
