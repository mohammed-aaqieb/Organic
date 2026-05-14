import { motion } from "framer-motion";

import {
  FaSearch,
  FaLeaf,
  FaAppleAlt,
} from "react-icons/fa";

const FilterBar = ({
  search,
  setSearch,
  category,
  setCategory,
}) => {
  return (
    <section className="sticky top-0 z-40 bg-[#F8FFF4]/80 backdrop-blur-2xl border-b border-white/20 py-0.5 px-1 overflow-hidden">

      {/* Background Glow */}
      <motion.div
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}

        transition={{
          duration: 8,
          repeat: Infinity,
        }}

        className="absolute top-0 left-0 w-72 h-72 bg-green-300/20 blur-[120px] rounded-full"
      />

      <div className="relative z-10 max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{
            duration: 1,
          }}

          viewport={{ once: true }}

          className="bg-white/70 backdrop-blur-2xl border border-white/30 rounded-[22px] py-2 px-4 shadow-lg"
        >

          <div className="flex flex-col lg:flex-row gap-3 lg:items-center lg:justify-between">

            {/* Search */}
            <div className="relative flex-1">

              <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />

              <input
                type="text"
                placeholder="Search organic foods..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full h-16 pl-12 pr-6 rounded-full bg-white border border-gray-200 outline-none focus:border-green-400 transition duration-300 text-gray-700 shadow-sm"
              />

            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4">

              {/* All */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}

                whileTap={{
                  scale: 0.95,
                }}

                onClick={() => setCategory("all")}

                className={`h-14 px-6 rounded-full font-semibold transition duration-300 flex items-center gap-3 ${
                  category === "all"
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200"
                }`}
              >
                All Products
              </motion.button>

              {/* Fruits */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}

                whileTap={{
                  scale: 0.95,
                }}

                onClick={() => setCategory("fruit")}

                className={`h-14 px-6 rounded-full font-semibold transition duration-300 flex items-center gap-3 ${
                  category === "fruit"
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200"
                }`}
              >

                <FaAppleAlt />

                Fruits

              </motion.button>

              {/* Vegetables */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                }}

                whileTap={{
                  scale: 0.95,
                }}

                onClick={() => setCategory("vegetable")}

                className={`h-14 px-6 rounded-full font-semibold transition duration-300 flex items-center gap-3 ${
                  category === "vegetable"
                    ? "bg-green-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200"
                }`}
              >

                <FaLeaf />

                Vegetables

              </motion.button>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default FilterBar;