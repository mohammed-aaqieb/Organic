import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../components/common/Navbar";
import ProductGallery from "../components/products/ProductGallery";
import ProductTabs from "../components/products/ProductTabs";
import ProductReviews from "../components/products/ProductReviews";
import products from "../data/products";
import { useCart } from "../context/CartContext";
import { FaHeart, FaStar, FaTruck, FaLeaf, FaShieldAlt } from "react-icons/fa";
import RelatedProducts from "../components/products/RelatedProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const product = products.find((item) => item.id === Number(id));

  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Product Not Found
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <section className="relative bg-[#F8FFF4] pt-40 pb-24 px-6 md:px-16 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-300/20 blur-[140px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Top Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Gallery */}
            <ProductGallery product={product} />

            {/* Product Info */}
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
                duration: 0.8,
              }}
              className="lg:sticky lg:top-32"
            >
              {/* Category */}
              <p className="uppercase tracking-[5px] text-green-600 font-semibold">
                {product.category}
              </p>

              {/* Name */}
              <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-5 leading-tight">
                {product.name}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-4 mt-8">
                <div className="flex gap-1 text-yellow-400 text-xl">
                  {[...Array(5)].map((_, index) => (
                    <FaStar key={index} />
                  ))}
                </div>

                <p className="text-gray-500">2,500+ Reviews</p>
              </div>

              {/* Price */}
              <div className="mt-10 flex items-center gap-5">
                <h2 className="text-5xl font-extrabold text-green-700">
                  ₹{product.price}
                </h2>

                <span className="bg-red-100 text-red-500 px-4 py-2 rounded-full font-semibold">
                  20% OFF
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed mt-10">
                {product.description}
              </p>

              {/* Quantity */}
              <div className="mt-10">
                <p className="font-semibold text-gray-900 mb-4">Quantity</p>

                <div className="flex items-center gap-4">
                  {/* Minus */}
                  <button
                    onClick={decreaseQuantity}
                    className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-2xl hover:bg-green-50 transition duration-300"
                  >
                    -
                  </button>

                  {/* Quantity */}
                  <div className="w-14 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center font-bold text-lg">
                    {quantity}
                  </div>

                  {/* Plus */}
                  <button
                    onClick={increaseQuantity}
                    className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-2xl hover:bg-green-50 transition duration-300"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 mt-12">
                {/* Add To Cart */}
                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  onClick={() =>
                    addToCart({
                      ...product,
                      quantity,
                    })
                  }
                  className="flex-1 h-16 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold text-lg shadow-[0_0_40px_rgba(34,197,94,0.3)] transition duration-300"
                >
                  Add To Cart
                </motion.button>

                {/* Wishlist */}
                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="w-16 h-16 rounded-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex items-center justify-center text-xl text-gray-700 hover:bg-green-600 hover:text-white transition duration-300"
                >
                  <FaHeart />
                </motion.button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14">
                {[
                  {
                    icon: <FaLeaf />,
                    title: "100% Organic",
                  },

                  {
                    icon: <FaTruck />,
                    title: "Fast Delivery",
                  },

                  {
                    icon: <FaShieldAlt />,
                    title: "Quality Guarantee",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-[28px] p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] text-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-2xl mx-auto">
                      {item.icon}
                    </div>

                    <h4 className="font-bold text-gray-900 mt-5">
                      {item.title}
                    </h4>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Tabs */}
          <div className="mt-">
            <ProductTabs product={product} />
          </div>

          {/* Reviews */}
          <div className="mt-16">
            <ProductReviews />
          </div>
          <div className="mt-20">

  <RelatedProducts
    currentId={product.id}
    category={product.category}
  />

</div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
