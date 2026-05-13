import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { motion } from "framer-motion";

import products from "../../data/products";

const BestSeller = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-16 overflow-hidden">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >

        <p className="text-green-600 uppercase tracking-[5px] font-semibold">
          Best Products
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-5 text-gray-900">
          Best Selling Organic Foods
        </h2>

      </motion.div>

      {/* Slider */}
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
        modules={[Pagination, Autoplay]}
      >

        {products.map((product) => (

          <SwiperSlide key={product.id}>

            <motion.div
              whileHover={{ y: -15 }}
              transition={{ duration: 0.4 }}
              className="group relative bg-[#F8FFF4] rounded-[35px] overflow-hidden shadow-xl hover:shadow-2xl transition duration-500"
            >

              {/* Product Image */}
              <div className="overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* Content */}
              <div className="p-6 text-center">

                <h3 className="text-2xl font-bold text-gray-800">
                  {product.name}
                </h3>

                <p className="text-green-700 text-xl font-semibold mt-3">
                  ₹{product.price}
                </p>

                {/* Animated Button */}
                <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full transition duration-300 hover:scale-105 shadow-lg">
                  Add To Cart
                </button>

              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-green-500/10 to-transparent pointer-events-none"></div>

            </motion.div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
};

export default BestSeller;