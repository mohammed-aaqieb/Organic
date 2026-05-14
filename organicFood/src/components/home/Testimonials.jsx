import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { FaQuoteLeft, FaStar } from "react-icons/fa";

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
    <section className="relative py-32 bg-[#F8FFF4] overflow-hidden">

      {/* Background Glow */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
        }}

        transition={{
          duration: 10,
          repeat: Infinity,
        }}

        className="absolute top-10 left-0 w-[400px] h-[400px] bg-green-300/20 blur-[140px] rounded-full"
      />

      {/* Floating Orb */}
      <motion.div
        animate={{
          y: [0, 30, 0],
        }}

        transition={{
          duration: 8,
          repeat: Infinity,
        }}

        className="absolute bottom-10 right-10 w-72 h-72 bg-lime-200/30 blur-[120px] rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{
            duration: 1,
          }}

          viewport={{ once: true }}

          className="text-center mb-20"
        >

          <p className="uppercase tracking-[5px] text-green-600 font-semibold">
            Testimonials
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-5">
            What Our Customers Say
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg">
            Thousands of customers trust our organic foods
            for freshness, quality, and healthy living.
          </p>

        </motion.div>

        {/* Slider */}
        <Swiper
          slidesPerView={1}
          spaceBetween={30}

          loop={true}

          speed={5000}

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

          modules={[Autoplay]}
          className="testimonialSlider"
        >

          {testimonials.map((item, index) => (

            <SwiperSlide key={item.id}>

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}

                transition={{
                  duration: 4 + index,
                  repeat: Infinity,
                }}

                whileHover={{
                  y: -15,
                  scale: 1.03,
                }}

                className="group relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-[35px] p-10 overflow-hidden shadow-xl hover:shadow-2xl transition duration-500"
              >

                {/* Quote Icon */}
                <div className="text-5xl text-green-200 mb-8">
                  <FaQuoteLeft />
                </div>

                {/* Review */}
                <p className="text-gray-700 leading-relaxed text-lg">
                  {item.review}
                </p>

                {/* Stars */}
                <div className="flex gap-2 text-yellow-400 mt-8">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>

                {/* User */}
                <div className="flex items-center gap-4 mt-10">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-green-100"
                  />

                  <div>

                    <h4 className="text-xl font-bold text-gray-900">
                      {item.name}
                    </h4>

                    <p className="text-gray-500">
                      {item.role}
                    </p>

                  </div>

                </div>

                {/* Glow Border */}
                <div className="absolute inset-0 rounded-[35px] opacity-0 group-hover:opacity-100 transition duration-500 border border-green-400/40 shadow-[0_0_40px_rgba(34,197,94,0.35)]"></div>

                {/* Shine Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">

                  <div className="absolute -left-40 top-0 w-40 h-full bg-white/20 rotate-12 blur-2xl group-hover:left-[120%] transition-all duration-[1500ms]"></div>

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