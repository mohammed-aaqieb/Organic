import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  "Description",
  "Nutrition",
  "Shipping",
  "Reviews",
];

const ProductTabs = ({ product }) => {

  const [activeTab, setActiveTab] =
    useState("Description");

  return (
    <section className="relative py-10 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-300/20 blur-[120px] rounded-full"></div>

      <div className="relative z-10">

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-10">

          {tabs.map((tab) => (

            <motion.button
              key={tab}

              whileHover={{
                scale: 1.03,
              }}

              whileTap={{
                scale: 0.97,
              }}

              onClick={() => setActiveTab(tab)}

              className={`relative h-14 px-8 rounded-full font-semibold transition duration-300 ${
                activeTab === tab
                  ? "bg-green-600 text-white shadow-[0_0_30px_rgba(34,197,94,0.35)]"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-green-300"
              }`}
            >

              {tab}

            </motion.button>

          ))}

        </div>

        {/* Content Box */}
        <div className="relative bg-white rounded-[40px] p-8 md:p-12 shadow-2xl overflow-hidden">

          {/* Glow Border */}
          <div className="absolute inset-0 rounded-[40px] border border-green-100"></div>

          <AnimatePresence mode="wait">

            {/* DESCRIPTION */}
            {activeTab === "Description" && (

              <motion.div
                key="description"

                initial={{
                  opacity: 0,
                  y: 20,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                exit={{
                  opacity: 0,
                  y: -20,
                }}

                transition={{
                  duration: 0.35,
                }}
              >

                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Product Description
                </h3>

                <p className="text-gray-600 leading-relaxed text-lg">
                  {product.description}
                </p>

                <p className="text-gray-600 leading-relaxed text-lg mt-6">
                  Our organic foods are sourced directly from
                  trusted farms and delivered fresh with premium quality.
                </p>

              </motion.div>

            )}

            {/* NUTRITION */}
            {activeTab === "Nutrition" && (

              <motion.div
                key="nutrition"

                initial={{
                  opacity: 0,
                  y: 20,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                exit={{
                  opacity: 0,
                  y: -20,
                }}

                transition={{
                  duration: 0.35,
                }}
              >

                <h3 className="text-3xl font-bold text-gray-900 mb-8">
                  Nutrition Information
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                  {[
                    ["Calories", "95 kcal"],
                    ["Protein", "2g"],
                    ["Fiber", "5g"],
                    ["Vitamin C", "80%"],
                  ].map((item, index) => (

                    <div
                      key={index}
                      className="bg-[#F8FFF4] rounded-[24px] p-6 text-center"
                    >

                      <h4 className="text-2xl font-bold text-green-700">
                        {item[1]}
                      </h4>

                      <p className="text-gray-600 mt-2">
                        {item[0]}
                      </p>

                    </div>

                  ))}

                </div>

              </motion.div>

            )}

            {/* SHIPPING */}
            {activeTab === "Shipping" && (

              <motion.div
                key="shipping"

                initial={{
                  opacity: 0,
                  y: 20,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                exit={{
                  opacity: 0,
                  y: -20,
                }}

                transition={{
                  duration: 0.35,
                }}
              >

                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Shipping Information
                </h3>

                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">

                  <p>
                    • Free delivery on orders above ₹999.
                  </p>

                  <p>
                    • Delivery within 24–48 hours.
                  </p>

                  <p>
                    • Fresh packaging with temperature-safe handling.
                  </p>

                  <p>
                    • Organic quality guaranteed from trusted farms.
                  </p>

                </div>

              </motion.div>

            )}

            {/* REVIEWS */}
            {activeTab === "Reviews" && (

              <motion.div
                key="reviews"

                initial={{
                  opacity: 0,
                  y: 20,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                exit={{
                  opacity: 0,
                  y: -20,
                }}

                transition={{
                  duration: 0.35,
                }}
              >

                <h3 className="text-3xl font-bold text-gray-900 mb-10">
                  Customer Reviews
                </h3>

                <div className="space-y-8">

                  {[
                    {
                      name: "Aarav Sharma",
                      review:
                        "Excellent freshness and premium quality.",
                    },

                    {
                      name: "Priya Verma",
                      review:
                        "Very healthy organic foods with fast delivery.",
                    },
                  ].map((item, index) => (

                    <div
                      key={index}
                      className="bg-[#F8FFF4] rounded-[24px] p-6"
                    >

                      <h4 className="text-xl font-bold text-gray-900">
                        {item.name}
                      </h4>

                      <p className="text-gray-600 mt-3 leading-relaxed">
                        {item.review}
                      </p>

                    </div>

                  ))}

                </div>

              </motion.div>

            )}

          </AnimatePresence>

        </div>

      </div>

    </section>
  );
};

export default ProductTabs;