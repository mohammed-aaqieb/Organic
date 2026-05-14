import { motion } from "framer-motion";

import {
  FaStar,
  FaRegStar,
} from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Aarav Sharma",
    rating: 5,
    review:
      "Absolutely fresh and premium quality products. Delivery was fast and packaging was excellent.",
  },

  {
    id: 2,
    name: "Priya Verma",
    rating: 4,
    review:
      "Very healthy organic foods with amazing freshness. Highly recommended.",
  },

  {
    id: 3,
    name: "Rahul Mehta",
    rating: 5,
    review:
      "Best organic store experience I have seen online. Beautiful packaging and fresh vegetables.",
  },
];

const ratingBars = [
  { stars: 5, width: "85%" },
  { stars: 4, width: "65%" },
  { stars: 3, width: "30%" },
  { stars: 2, width: "10%" },
  { stars: 1, width: "5%" },
];

const ProductReviews = () => {
  return (
    <section className="relative py-10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-300/20 blur-[140px] rounded-full"></div>

      <div className="relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row gap-16">

          {/* Rating Summary */}
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
              duration: 0.8,
            }}

            viewport={{ once: true }}

            className="lg:w-[400px]"
          >

            <div className="bg-white rounded-[40px] p-10 shadow-2xl">

              <h2 className="text-6xl font-extrabold text-green-700">
                4.8
              </h2>

              {/* Stars */}
              <div className="flex gap-2 mt-5 text-yellow-400 text-2xl">

                {[...Array(5)].map((_, index) => (

                  <FaStar key={index} />

                ))}

              </div>

              <p className="text-gray-500 mt-4">
                Based on 2,500+ reviews
              </p>

              {/* Rating Bars */}
              <div className="mt-10 space-y-5">

                {ratingBars.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >

                    <div className="flex items-center gap-1 min-w-[60px]">

                      <span className="font-semibold">
                        {item.stars}
                      </span>

                      <FaStar className="text-yellow-400 text-sm" />

                    </div>

                    <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">

                      <motion.div
                        initial={{
                          width: 0,
                        }}

                        whileInView={{
                          width: item.width,
                        }}

                        transition={{
                          duration: 1,
                          delay: index * 0.1,
                        }}

                        viewport={{ once: true }}

                        className="h-full bg-green-500 rounded-full"
                      />

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </motion.div>

          {/* Reviews List */}
          <div className="flex-1 space-y-8">

            {reviews.map((item, index) => (

              <motion.div
                key={item.id}

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
                  delay: index * 0.1,
                }}

                viewport={{ once: true }}

                whileHover={{
                  y: -6,
                }}

                className="bg-white rounded-[35px] p-8 shadow-xl hover:shadow-2xl transition duration-500"
              >

                <div className="flex items-start gap-5">

                  {/* Avatar */}
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-700">

                    {item.name.charAt(0)}

                  </div>

                  {/* Content */}
                  <div className="flex-1">

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                      <div>

                        <h3 className="text-2xl font-bold text-gray-900">
                          {item.name}
                        </h3>

                        <div className="flex gap-1 mt-2 text-yellow-400">

                          {[...Array(item.rating)].map((_, i) => (

                            <FaStar key={i} />

                          ))}

                          {[...Array(5 - item.rating)].map((_, i) => (

                            <FaRegStar key={i} />

                          ))}

                        </div>

                      </div>

                      <p className="text-gray-400 text-sm">
                        Verified Customer
                      </p>

                    </div>

                    <p className="text-gray-600 leading-relaxed mt-6 text-lg">
                      {item.review}
                    </p>

                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

        {/* Review Form */}
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

          viewport={{ once: true }}

          className="mt-24 bg-white rounded-[40px] p-8 md:p-12 shadow-2xl"
        >

          <h3 className="text-4xl font-bold text-gray-900 mb-10">
            Write a Review
          </h3>

          <form className="space-y-6">

            {/* Name */}
            <input
              type="text"
              placeholder="Your Name"
              className="w-full h-16 px-6 rounded-[20px] border border-gray-200 outline-none focus:border-green-500 transition duration-300"
            />

            {/* Review */}
            <textarea
              rows="6"
              placeholder="Write your review..."
              className="w-full p-6 rounded-[20px] border border-gray-200 outline-none focus:border-green-500 transition duration-300 resize-none"
            ></textarea>

            {/* Button */}
            <motion.button
              whileHover={{
                scale: 1.03,
              }}

              whileTap={{
                scale: 0.97,
              }}

              type="submit"

              className="h-14 px-10 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold shadow-lg transition duration-300"
            >

              Submit Review

            </motion.button>

          </form>

        </motion.div>

      </div>

    </section>
  );
};

export default ProductReviews;