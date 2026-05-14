import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { useState, useEffect, useRef } from "react";

import {
  FaLeaf,
  FaTruck,
  FaSeedling,
  FaAppleWhole,
} from "react-icons/fa6";

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

const AnimatedNumber = ({
  end,
  duration = 2.5,
  suffix = "",
}) => {

  const [count, setCount] = useState(0);

  const [isVisible, setIsVisible] =
    useState(false);

  const elementRef = useRef(null);

  useEffect(() => {

    const observer =
      new IntersectionObserver(
        ([entry]) => {

          if (entry.isIntersecting) {

            setIsVisible(true);

            observer.unobserve(entry.target);

          }
        },

        {
          threshold: 0.4,
        }
      );

    if (elementRef.current) {

      observer.observe(
        elementRef.current
      );

    }

    return () => {

      if (elementRef.current) {

        observer.unobserve(
          elementRef.current
        );

      }
    };
  }, []);

  useEffect(() => {

    if (!isVisible) return;

    let startTime = null;

    let animationFrame;

    const easeOutExpo = (t) => {
      return t === 1
        ? 1
        : 1 - Math.pow(2, -10 * t);
    };

    const animate = (timestamp) => {

      if (!startTime)
        startTime = timestamp;

      const elapsed =
        timestamp - startTime;

      const progress = Math.min(
        elapsed / (duration * 1000),
        1
      );

      const easedProgress =
        easeOutExpo(progress);

      const currentCount =
        Math.floor(
          easedProgress * end
        );

      setCount(currentCount);

      if (progress < 1) {

        animationFrame =
          requestAnimationFrame(
            animate
          );

      } else {

        setCount(end);

      }
    };

    animationFrame =
      requestAnimationFrame(
        animate
      );

    return () => {

      if (animationFrame) {

        cancelAnimationFrame(
          animationFrame
        );

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
    <section className="relative overflow-hidden py-14 md:py-20">

      {/* Main Background */}
      <div className="absolute inset-0 bg-[#f7f8ef]"></div>

      {/* Layered Blobs */}
      <motion.div
        animate={{
          y: [0, 20, 0],
          x: [0, 10, 0],
        }}

        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="absolute -top-24 -left-24 w-[350px] h-[350px] bg-lime-200/40 blur-[100px] rounded-full"
      />

      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, -15, 0],
        }}

        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="absolute top-10 right-[-100px] w-[350px] h-[350px] bg-green-200/35 blur-[110px] rounded-full"
      />

      <motion.div
        animate={{
          y: [0, 15, 0],
        }}

        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="absolute bottom-[-120px] left-1/3 w-[320px] h-[320px] bg-emerald-200/25 blur-[100px] rounded-full"
      />

      {/* Dot Texture */}
      <div className="absolute left-[10%] top-14 grid grid-cols-5 gap-2 opacity-20">
        {Array.from({
          length: 25,
        }).map((_, i) => (
          <span
            key={i}
            className="w-1.5 h-1.5 rounded-full bg-green-700/40"
          />
        ))}
      </div>

      <div className="relative z-10 mx-4 md:mx-8 lg:mx-10">

        {/* Main Glass Container */}
        <div
          className="relative max-w-7xl mx-auto overflow-hidden rounded-[44px] border border-white/60 bg-white/30 backdrop-blur-2xl shadow-[0_10px_50px_rgba(0,0,0,0.04)]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 15% 15%, rgba(219,239,186,0.55) 0%, rgba(219,239,186,0.14) 20%, transparent 38%), radial-gradient(circle at 85% 10%, rgba(197,233,170,0.45) 0%, rgba(197,233,170,0.12) 18%, transparent 36%), linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(247,250,239,0.86) 100%)",
          }}
        >

          {/* Grid Texture */}
          <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(to_right,rgba(116,156,72,0.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(116,156,72,0.9)_1px,transparent_1px)] [background-size:40px_40px]"></div>

          <div className="relative z-10 px-6 md:px-10 py-14">

            {/* Heading */}
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

              viewport={{
                once: true,
              }}

              className="text-center mb-14"
            >

              <div className="flex items-center justify-center gap-4 mb-5">

                <span className="w-10 h-px bg-gradient-to-r from-transparent to-green-600/70"></span>

                <p className="text-green-700 uppercase tracking-[5px] font-semibold text-sm">
                  Why Choose Us
                </p>

                <span className="w-10 h-px bg-gradient-to-l from-transparent to-green-600/70"></span>

              </div>

              <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">

                Healthy Organic
                <span className="text-green-700">
                  {" "}Lifestyle
                </span>

              </h2>

              <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed">

                We deliver premium organic fruits and vegetables directly from trusted farms with freshness and quality.

              </p>

            </motion.div>

            {/* Cards */}
            <Tilt
              tiltMaxAngleX={5}
              tiltMaxAngleY={5}
              scale={1.01}
            >

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {benefits.map(
                  (item, index) => (

                    <motion.div
                      key={item.id}

                      initial={{
                        opacity: 0,
                        y: 60,
                      }}

                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}

                      transition={{
                        duration: 0.7,
                        delay:
                          index * 0.12,
                      }}

                      viewport={{
                        once: true,
                      }}

                      whileHover={{
                        y: -8,
                      }}

                      className="group relative overflow-hidden rounded-[32px] border border-white/40 bg-white/50 backdrop-blur-xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                    >

                      {/* Glow */}
                      <div className="absolute top-0 right-0 w-28 h-28 bg-green-200/20 blur-[60px] rounded-full"></div>

                      {/* Icon */}
                      <div className="relative z-10 w-18 h-18 rounded-full bg-gradient-to-br from-green-100 to-lime-100 flex items-center justify-center text-3xl text-green-700 mb-7 shadow-[0_8px_20px_rgba(0,0,0,0.05)] group-hover:scale-110 transition duration-500">

                        {item.icon}

                      </div>

                      {/* Title */}
                      <h3 className="relative z-10 text-2xl font-bold text-gray-900">

                        {item.title}

                      </h3>

                      {/* Desc */}
                      <p className="relative z-10 text-gray-600 mt-5 leading-relaxed">

                        {item.desc}

                      </p>

                    </motion.div>
                  )
                )}

              </div>

            </Tilt>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">

              {[
                {
                  number: 10000,
                  label:
                    "Happy Customers",
                  suffix: "+",
                },

                {
                  number: 500,
                  label:
                    "Organic Farms",
                  suffix: "+",
                },

                {
                  number: 50,
                  label:
                    "Cities Delivered",
                  suffix: "+",
                },

                {
                  number: 100,
                  label:
                    "Natural Foods",
                  suffix: "%",
                },
              ].map((item, index) => (

                <motion.div
                  key={index}

                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}

                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}

                  transition={{
                    duration: 0.6,
                    delay:
                      index * 0.12,
                  }}

                  viewport={{
                    once: true,
                  }}

                  whileHover={{
                    y: -6,
                  }}

                  className="relative overflow-hidden rounded-[30px] border border-white/40 bg-white/50 backdrop-blur-xl p-8 text-center shadow-[0_8px_25px_rgba(0,0,0,0.04)]"
                >

                  {/* Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-100/20 to-transparent"></div>

                  <h2 className="relative z-10 text-4xl md:text-5xl font-extrabold text-green-700">

                    <AnimatedNumber
                      end={item.number}
                      duration={2.5}
                      suffix={
                        item.suffix
                      }
                    />

                  </h2>

                  <p className="relative z-10 mt-4 text-gray-700 text-lg">

                    {item.label}

                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default OrganicBenefits;