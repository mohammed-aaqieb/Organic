import { motion } from "framer-motion";

import farmVideo from "../../assets/videos/farm.mp4";

const ProductsHero = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={farmVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/70 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}

          transition={{
            duration: 1,
            delay: 0.2,
          }}

          className="text-5xl md:text-7xl font-extrabold text-white mt-6 leading-tight"
        >
          Fresh Organic <br />
          Foods Collection
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}

          transition={{
            duration: 1,
            delay: 0.4,
          }}

          className="max-w-3xl mt-8 text-gray-300 text-lg leading-relaxed"
        >
          Discover premium organic fruits and vegetables
          directly from healthy farms with freshness and quality.
        </motion.p>

      </div>

    </section>
  );
};

export default ProductsHero;