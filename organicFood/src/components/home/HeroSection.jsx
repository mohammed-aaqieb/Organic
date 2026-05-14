import { motion } from "framer-motion";
import farmVideo from "../../assets/videos/farm1.mp4";

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={farmVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55"></div>

      {/* Green Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-950/70 via-black/30 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-20">

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl text-white"
        >

          {/* Small Tag */}
          <span className="bg-green-500/20 border border-green-400 px-4 py-2 rounded-full text-sm tracking-widest uppercase backdrop-blur-md">
            100% Natural Food
          </span>

          {/* Main Heading */}
          <h1 className="mt-6 text-5xl md:text-7xl font-extrabold leading-tight">
            Fresh Organic <br />
            Fruits & Vegetables
          </h1>

          {/* Paragraph */}
          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl">
            Healthy, chemical-free organic foods directly from farms.
            Fresh vegetables and fruits delivered to your doorstep.
          </p>

          {/* Buttons */}
          <div className="flex gap-5 mt-10 flex-wrap">

            <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full text-lg font-semibold transition duration-300 shadow-2xl hover:scale-105">
              Shop Now
            </button>

            <button className="border border-white/40 backdrop-blur-md hover:bg-white/10 px-8 py-4 rounded-full text-lg font-semibold transition duration-300">
              Explore More
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default HeroSection;