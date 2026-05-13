// src/components/home/HeroSection.jsx
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import farmVideo from "../../assets/videos/farm.mp4"; // adjust path as needed

// Hero text animation variants
const textContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const textItem = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.8], [0.5, 0.75]);

  // Floating leaves animation (decorative)
  const leaves = [
    { left: "10%", delay: 0, size: "w-8 h-8", duration: 6 },
    { left: "80%", delay: 2, size: "w-6 h-6", duration: 8 },
    { left: "50%", delay: 4, size: "w-10 h-10", duration: 7 },
    { left: "30%", delay: 1, size: "w-7 h-7", duration: 9 },
    { left: "70%", delay: 3, size: "w-5 h-5", duration: 6.5 },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Video Background */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 w-full h-full"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={farmVideo}
        />
      </motion.div>

      {/* Overlay */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"
      />

      {/* Animated Leaves */}
      {leaves.map((leaf, index) => (
        <motion.div
          key={index}
          className={`absolute top-0 ${leaf.size} ${leaf.left} pointer-events-none`}
          initial={{ y: -50, rotate: 0, opacity: 0.8 }}
          animate={{
            y: "110vh",
            rotate: 360,
            opacity: [0.8, 0.6, 0.3, 0],
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            delay: leaf.delay,
            ease: "linear",
          }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="text-green-400/30 w-full h-full">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 14 22 8c0-4.42-5.37-9-14-9-1.62 0-3.6.23-5.34.64l.18.17C4.25 3.12 6.25 8 17 8z" />
          </svg>
        </motion.div>
      ))}

      {/* Hero Content */}
      <motion.div
        variants={textContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      >
        <motion.span
          variants={textItem}
          className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-green-200 text-xs sm:text-sm uppercase tracking-[0.25em] font-medium mb-6 border border-white/10"
        >
          🌿 100% Organic & Fresh
        </motion.span>

        <motion.h1
          variants={textItem}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-serif text-white leading-tight mb-6"
        >
          Nature’s{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-200">
            Finest
          </span>{" "}
          Harvest
        </motion.h1>

        <motion.p
          variants={textItem}
          className="max-w-2xl text-base sm:text-lg text-white/80 font-light mb-10"
        >
          From farm to your table — we deliver pure, pesticide‑free organic food.
          Taste the goodness of real nutrition, sustainably grown with love.
        </motion.p>

        <motion.div
          variants={textItem}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-400 text-white font-semibold text-sm shadow-2xl shadow-green-600/20 hover:shadow-green-600/40 transition-all"
            >
              Shop Now
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/30 text-white font-semibold text-sm backdrop-blur-sm hover:bg-white/10 transition-all"
          >
            <FiPlay className="text-lg" />
            Watch Story
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
          className="flex flex-col items-center gap-2 text-white/60"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 rounded-full border-2 border-white/40 flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.4 }}
              className="w-1.5 h-1.5 rounded-full bg-white mt-1"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;