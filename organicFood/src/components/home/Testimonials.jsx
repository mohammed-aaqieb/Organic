import { motion } from "framer-motion";

import {
  Swiper,
  SwiperSlide,
} from "swiper/react";

import {
  
  Autoplay,
} from "swiper/modules";

import "swiper/css";
// import "swiper/css/effect-coverflow";  

import {
  FaStar,
} from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Aarav Sharma",
    role: "Fitness Trainer",

    image:
      "https://randomuser.me/api/portraits/men/32.jpg",

    review:
      "The vegetables and fruits are incredibly fresh. The quality feels premium and healthy.",
  },

  {
    id: 2,
    name: "Priya Verma",
    role: "Nutrition Expert",

    image:
      "https://randomuser.me/api/portraits/women/44.jpg",

    review:
      "I love the freshness and organic quality. Delivery was smooth and amazing.",
  },

  {
    id: 3,
    name: "Rahul Mehta",
    role: "Chef",

    image:
      "https://randomuser.me/api/portraits/men/75.jpg",

    review:
      "Best organic store experience I have seen. Beautiful design and excellent food quality.",
  },

  {
    id: 4,
    name: "Sneha Kapoor",
    role: "Yoga Coach",

    image:
      "https://randomuser.me/api/portraits/women/68.jpg",

    review:
      "Healthy lifestyle starts with healthy food. This organic collection feels truly natural.",
  },
];

const Testimonials = () => {

  return (
    <section className="relative overflow-hidden py-16 md:py-20">

      {/* Background */}
      <div className="absolute inset-0 bg-[#f5f8ef]"></div>

      {/* Big Gradient Orbs */}
      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, 10, 0],
        }}

        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="absolute top-[-100px] left-[-100px] w-[420px] h-[420px] rounded-full bg-green-200/30 blur-[120px]"
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, -10, 0],
        }}

        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] rounded-full bg-lime-200/30 blur-[120px]"
      />

      

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}

          whileInView={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            duration: 0.7,
          }}

          viewport={{
            once: true,
          }}

          className="text-center mb-14"
        >

          <div className="inline-flex items-center gap-3 bg-white/70 backdrop-blur-xl border border-white/50 px-6 py-3 rounded-full shadow-[0_6px_20px_rgba(0,0,0,0.05)]">

            <span className="w-2 h-2 rounded-full bg-green-600"></span>

            <p className="uppercase tracking-[4px] text-green-700 text-sm font-semibold">
              Testimonials
            </p>

          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-7 leading-tight">

            Loved By
            <span className="text-green-700">
              {" "}Healthy People
            </span>

          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed">

            Real customers sharing their experience with our premium organic foods and healthy lifestyle products.

          </p>

        </motion.div>

        {/* Coverflow Slider */}
        <Swiper
  slidesPerView={1.15}

  spaceBetween={24}

  loop={true}

  freeMode={true}

  speed={6000}

  allowTouchMove={false}

  autoplay={{
    delay: 0,
    disableOnInteraction: false,
  }}

  breakpoints={{
    768: {
      slidesPerView: 2,
    },

    1200: {
      slidesPerView: 3,
    },
  }}

  modules={[
    Autoplay,
  ]}

  className="pb-12"
>

          {testimonials.map((item) => (

            <SwiperSlide
              key={item.id}

              className="max-w-[420px]"
            >

              <motion.div
                whileHover={{
                  y: -8,
                }}

                transition={{
                  duration: 0.35,
                }}

                className="group relative overflow-hidden rounded-[38px] border border-white/40 bg-white/65 backdrop-blur-2xl shadow-[0_15px_50px_rgba(0,0,0,0.06)]"
              >

                {/* Gradient Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-green-200/25 blur-[80px] rounded-full"></div>

                {/* Top Area */}
                <div className="relative p-8 pb-6">

                  {/* Profile */}
                  <div className="flex items-center gap-5">

                    <div className="relative">

                      <img
                        src={item.image}
                        alt={item.name}

                        className="w-20 h-20 rounded-full object-cover border-[5px] border-white shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                      />

                      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-green-500 border-4 border-white"></div>

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold text-gray-900">

                        {item.name}

                      </h3>

                      <p className="text-green-700 font-medium mt-1">

                        {item.role}

                      </p>

                    </div>

                  </div>

                  {/* Review */}
                  <p className="text-gray-700 text-lg leading-relaxed mt-8">

                    “{item.review}”

                  </p>

                  {/* Stars */}
                  <div className="flex items-center gap-2 text-yellow-400 mt-8 text-lg">

                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                  </div>

                </div>

                {/* Bottom Decoration */}
                <div className="h-2 bg-gradient-to-r from-green-500 via-lime-400 to-green-300"></div>

                {/* Hover Shine */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 pointer-events-none">

                  <div className="absolute -left-40 top-0 h-full w-40 bg-white/20 rotate-12 blur-2xl group-hover:left-[130%] transition-all duration-[1600ms]"></div>

                </div>

              </motion.div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
};

export default Testimonials;