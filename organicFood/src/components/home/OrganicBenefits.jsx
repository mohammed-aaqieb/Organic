import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useState, useEffect, useRef } from "react";
import { FaLeaf, FaTruck, FaSeedling, FaAppleWhole } from "react-icons/fa6";

const benefits = [
  {
    id: 1,
    title: "100% Organic",
    icon: <FaLeaf />,
    desc: "Completely natural vegetables and fruits with no chemicals.",
  },
  {
    id: 2,
    title: "Farm Fresh",
    icon: <FaSeedling />,
    desc: "Freshly harvested organic foods directly from farms.",
  },
  {
    id: 3,
    title: "Healthy Foods",
    icon: <FaAppleWhole />,
    desc: "Nutritious fruits and vegetables for a healthy lifestyle.",
  },
  {
    id: 4,
    title: "Fast Delivery",
    icon: <FaTruck />,
    desc: "Quick and safe delivery directly to your doorstep.",
  },
];

const AnimatedNumber = ({ end, duration = 2.5, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  // Intersection Observer to detect when element is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once visible
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of element is visible
        rootMargin: "0px 0px -50px 0px", // Slightly before it fully enters
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  // Animation logic
  useEffect(() => {
    if (!isVisible) return;

    let startTime = null;
    let animationFrame;

    const easeOutExpo = (t) => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const easedProgress = easeOutExpo(progress);
      const currentCount = Math.floor(easedProgress * end);
      
      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    // Small delay for better effect
    const timeout = setTimeout(() => {
      animationFrame = requestAnimationFrame(animate);
    }, 300);

    return () => {
      clearTimeout(timeout);
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <span ref={elementRef}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

const OrganicBenefits = () => {
  return (
    <section className="relative bg-[#F8FFF4] py-28 px-6 md:px-16 overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-green-300/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 blur-[150px] rounded-full"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center mb-20 relative z-10"
      >
        <p className="text-green-600 uppercase tracking-[5px] font-semibold">
          Why Choose Us
        </p>
        <h2 className="text-4xl md:text-6xl font-bold mt-5 text-gray-900">
          Healthy Organic Lifestyle
        </h2>
        <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg">
          We deliver premium organic fruits and vegetables directly from trusted
          farms with freshness and quality.
        </p>
      </motion.div>

      {/* Benefits Grid */}
      <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} scale={1.02}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
          {benefits.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
              className="group bg-white/70 backdrop-blur-xl border border-white/30 rounded-[35px] p-10 shadow-xl hover:shadow-2xl transition duration-500"
            >
              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-4xl text-green-700 mb-8 group-hover:scale-110 transition duration-500">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-600 mt-5 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Tilt>

      {/* Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-24 relative z-10">
        {[
          { number: 10000, label: "Happy Customers", suffix: "+" },
          { number: 500, label: "Organic Farms", suffix: "+" },
          { number: 50, label: "Cities Delivered", suffix: "+" },
          { number: 100, label: "Natural Foods", suffix: "%" },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
            }}
            className="text-center"
          >
            <h2 className="text-5xl font-extrabold text-green-700">
              <AnimatedNumber
                end={item.number}
                duration={2.5}
                suffix={item.suffix}
              />
            </h2>
            <p className="mt-3 text-gray-700 text-lg">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OrganicBenefits;