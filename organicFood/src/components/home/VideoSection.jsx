import { motion } from "framer-motion";

import farmVideo from "../../assets/videos/farm2.mp4";
import { Link } from "react-router-dom";

const VideoSection = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden">

      {/* Animated Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}

        transition={{
          duration: 8,
          repeat: Infinity,
        }}

        className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 blur-[150px] rounded-full"
      />

      {/* Floating Orb */}
      <motion.div
        animate={{
          y: [0, -40, 0],
        }}

        transition={{
          duration: 6,
          repeat: Infinity,
        }}

        className="absolute right-20 top-40 w-24 h-24 bg-lime-300/20 rounded-full blur-3xl"
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{
            duration: 1,
          }}

          viewport={{ once: true }}

          className="text-center mb-20"
        >

          <p className="uppercase tracking-[5px] text-green-400 font-semibold">
            Organic Lifestyle
          </p>

          <h2 className="text-5xl md:text-7xl font-extrabold text-white mt-6 leading-tight">
            Fresh From Nature <br />
            To Your Home
          </h2>

          <p className="text-gray-300 mt-8 max-w-3xl mx-auto text-lg leading-relaxed">
            Experience premium organic foods directly from trusted farms
            with freshness, purity, and healthy nutrition.
          </p>

        </motion.div>

        {/* Video Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}

          transition={{
            duration: 1,
          }}

          viewport={{ once: true }}

          whileHover={{
            scale: 1.02,
          }}

          className="relative group rounded-[40px] overflow-hidden shadow-[0_0_80px_rgba(34,197,94,0.25)]"
        >

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition duration-700 z-10"></div>

          {/* Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-[3000ms]"
          >
            <source src={farmVideo} type="video/mp4" />
          </video>

          {/* Floating Content */}
          <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">

            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: 1,
                delay: 0.3,
              }}

              viewport={{ once: true }}

              className="text-white text-4xl md:text-6xl font-extrabold leading-tight"
            >
              Pure Organic <br />
              Healthy Living
            </motion.h3>

            

          </div>

          {/* Shine Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 z-30">

            <div className="absolute -left-40 top-0 w-40 h-full bg-white/20 rotate-12 blur-2xl group-hover:left-[120%] transition-all duration-[1500ms]"></div>

          </div>

        </motion.div>

      </div>

    </section>
  );
};

export default VideoSection;