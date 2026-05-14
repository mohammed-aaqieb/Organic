import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import Navbar from "../components/common/Navbar";

const NotFound = () => {

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen overflow-hidden bg-[#F8FFF4] flex items-center justify-center px-6 pt-32">

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-300/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-lime-200/20 blur-[120px] rounded-full"></div>

        {/* Floating Blur */}
        <motion.div
          animate={{
            y: [0, -20, 0],
          }}

          transition={{
            repeat: Infinity,
            duration: 6,
            ease: "easeInOut",
          }}

          className="absolute top-1/4 right-20 w-40 h-40 bg-green-200/30 blur-[80px] rounded-full"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
          }}

          transition={{
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut",
          }}

          className="absolute bottom-20 left-20 w-52 h-52 bg-lime-200/30 blur-[100px] rounded-full"
        />

        {/* Main Content */}
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

          className="relative z-10 text-center max-w-4xl"
        >

          {/* 404 */}
          <motion.h1
            initial={{
              scale: 0.8,
            }}

            animate={{
              scale: 1,
            }}

            transition={{
              duration: 0.7,
            }}

            className="text-[120px] md:text-[220px] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-b from-green-600 to-green-300"
          >

            404

          </motion.h1>

          {/* Title */}
          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-6 leading-tight">

            Page Not Found

          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed mt-8 max-w-2xl mx-auto">

            The page you are looking for doesn’t exist or may have been moved.
            Let’s get you back to fresh organic shopping.

          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-12">

            {/* Home */}
            <Link to="/">

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}

                whileTap={{
                  scale: 0.97,
                }}

                className="px-10 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold text-lg shadow-[0_8px_25px_rgba(34,197,94,0.2)] transition duration-300"
              >

                Back To Home

              </motion.button>

            </Link>

            {/* Products */}
            <Link to="/products">

              <motion.button
                whileHover={{
                  scale: 1.03,
                }}

                whileTap={{
                  scale: 0.97,
                }}

                className="px-10 h-14 rounded-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 font-semibold text-lg shadow-[0_6px_20px_rgba(0,0,0,0.03)] transition duration-300"
              >

                Browse Products

              </motion.button>

            </Link>

          </div>

          {/* Image */}
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.8,
              delay: 0.2,
            }}

            className="mt-20"
          >

            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop"
              alt="Organic Food"

              className="w-full max-w-4xl mx-auto h-[350px] md:h-[450px] object-cover rounded-[40px] shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
            />

          </motion.div>

        </motion.div>

      </section>
    </>
  );
};

export default NotFound;