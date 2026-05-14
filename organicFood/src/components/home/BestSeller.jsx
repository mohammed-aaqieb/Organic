import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
} from "swiper/modules";

import "swiper/css";

import { motion } from "framer-motion";

import products from "../../data/products";

const BestSeller = () => {

  return (
    <section className="relative overflow-hidden py-14 md:py-20">

      {/* Main Background */}
      <div className="absolute inset-0 bg-[#f7f8ef]"></div>

      {/* Animated Blobs */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
        }}

        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="absolute -top-24 left-[-100px] w-[350px] h-[350px] bg-lime-200/35 blur-[100px] rounded-full"
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, -12, 0],
        }}

        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="absolute top-10 right-[-120px] w-[350px] h-[350px] bg-green-200/30 blur-[110px] rounded-full"
      />

      <motion.div
        animate={{
          y: [0, 15, 0],
        }}

        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="absolute bottom-[-100px] left-1/3 w-[320px] h-[320px] bg-emerald-200/25 blur-[100px] rounded-full"
      />

      {/* Dot Texture */}
      <div className="absolute left-[10%] top-14 grid grid-cols-5 gap-2 opacity-20">
        {Array.from({
          length: 25,
        }).map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-green-700/40"
          />
        ))}
      </div>

      <div className="relative z-10 mx-4 md:mx-8 lg:mx-10">

        {/* Glass Container */}
        <div
          className="relative max-w-7xl mx-auto overflow-hidden rounded-[44px] border border-white/60 bg-white/30 backdrop-blur-2xl shadow-[0_10px_50px_rgba(0,0,0,0.04)]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 15%, rgba(219,239,186,0.55) 0%, rgba(219,239,186,0.14) 20%, transparent 38%), radial-gradient(circle at 85% 10%, rgba(197,233,170,0.45) 0%, rgba(197,233,170,0.12) 18%, transparent 36%), linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(247,250,239,0.86) 100%)",
          }}
        >

          {/* Grid Texture */}
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(116,156,72,0.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(116,156,72,0.9)_1px,transparent_1px)] [background-size:40px_40px]"></div>

          <div className="relative z-10 px-6 md:px-10 py-14">

            {/* Heading */}
            <motion.div
              initial={{
                opacity: 0,
                y: 50,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.8,
              }}

              viewport={{
                once: true,
              }}

              className="text-center mb-12"
            >

              <div className="flex items-center justify-center gap-4 mb-5">

                <span className="w-10 h-px bg-gradient-to-r from-transparent to-green-600/70"></span>

                <p className="text-green-700 uppercase tracking-[5px] font-semibold text-sm">
                  Best Products
                </p>

                <span className="w-10 h-px bg-gradient-to-l from-transparent to-green-600/70"></span>

              </div>

              <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">

                Best Selling
                <span className="text-green-700">
                  {" "}Organic Foods
                </span>

              </h2>

              <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed">

                Fresh organic fruits and vegetables loved by thousands of healthy customers.

              </p>

            </motion.div>

            {/* Slider */}
            <Swiper
              slidesPerView={1.15}
              spaceBetween={22}
              loop={true}
              speed={5000}
              allowTouchMove={true}

              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}

              breakpoints={{
                640: {
                  slidesPerView: 2,
                },

                1024: {
                  slidesPerView: 4,
                },
              }}

              modules={[Autoplay]}

              className="bestSellerSlider"
            >

              {products.map((product) => (

                <SwiperSlide key={product.id}>

                  <motion.div
                    whileHover={{
                      y: -8,
                    }}

                    transition={{
                      duration: 0.4,
                    }}

                    className="group relative overflow-hidden rounded-[32px] border border-white/40 bg-white/55 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
                  >

                    {/* Glow */}
                    <div className="absolute top-0 right-0 w-28 h-28 bg-green-200/20 blur-[60px] rounded-full"></div>

                    {/* Image */}
                    <div className="relative overflow-hidden">

                      <img
                        src={product.image}
                        alt={product.name}

                        className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-[1800ms]"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent"></div>

                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6">

                      {/* Category */}
                      <div className="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-green-700">

                        Organic Food

                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold text-gray-900 mt-5 leading-snug">

                        {product.name}

                      </h3>

                      {/* Bottom */}
                      <div className="flex items-center justify-between mt-6">

                        <button className="h-11 px-6 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold transition duration-300 shadow-[0_8px_20px_rgba(0,0,0,0.08)]">

                          Add to Cart

                        </button>

                        

                      </div>

                    </div>

                  </motion.div>

                </SwiperSlide>

              ))}

            </Swiper>

          </div>

        </div>

      </div>

    </section>
  );
};

export default BestSeller;