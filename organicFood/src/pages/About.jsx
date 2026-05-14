import { motion } from "framer-motion";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import {
  FaLeaf,
  FaTruck,
  FaSeedling,
  FaUsers,
} from "react-icons/fa";

const About = () => {

  const features = [
    {
      icon: <FaLeaf />,
      title: "100% Organic",
      description:
        "Fresh fruits and vegetables grown naturally without harmful chemicals.",
    },

    {
      icon: <FaTruck />,
      title: "Fast Delivery",
      description:
        "Quick and safe delivery to keep your products fresh and healthy.",
    },

    {
      icon: <FaSeedling />,
      title: "Eco Farming",
      description:
        "Supporting sustainable farms and environmentally friendly agriculture.",
    },

    {
      icon: <FaUsers />,
      title: "Trusted By Thousands",
      description:
        "Thousands of happy customers choose our organic products daily.",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="relative bg-[#F8FFF4] overflow-hidden">

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-300/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-lime-200/20 blur-[120px] rounded-full"></div>

        {/* Hero */}
        <div className="relative min-h-[90vh] flex items-center pt-32 pb-20 px-6 md:px-16">

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
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
            >

              <p className="uppercase tracking-[4px] text-green-600 font-semibold mb-6">
                About Organic
              </p>

              <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">

                Fresh Organic
                <span className="text-green-600">
                  {" "}Food For A{" "}
                </span>

                Healthier Life

              </h1>

              <p className="text-gray-600 text-lg leading-relaxed mt-8 max-w-2xl">

                We provide premium organic fruits and vegetables sourced directly from trusted farms.
                Our mission is to make healthy eating simple, fresh, and accessible for everyone.

              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-8 mt-12">

                <div>

                  <h2 className="text-5xl font-extrabold text-green-700">
                    10K+
                  </h2>

                  <p className="text-gray-600 mt-2">
                    Happy Customers
                  </p>

                </div>

                <div>

                  <h2 className="text-5xl font-extrabold text-green-700">
                    500+
                  </h2>

                  <p className="text-gray-600 mt-2">
                    Organic Farms
                  </p>

                </div>

              </div>

            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}

              animate={{
                opacity: 1,
                scale: 1,
              }}

              transition={{
                duration: 0.8,
              }}

              className="relative"
            >

              {/* Glow */}
              <div className="absolute inset-0 bg-green-300/20 blur-[100px] rounded-full"></div>

              <div className="relative rounded-[40px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1200&auto=format&fit=crop"
                  alt="Organic Farm"

                  className="w-full h-[700px] object-cover"
                />

              </div>

            </motion.div>

          </div>

        </div>

        {/* Features */}
        <section className="relative py-24 px-6 md:px-16">

          <div className="max-w-7xl mx-auto">

            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-20">

              <p className="uppercase tracking-[4px] text-green-600 font-semibold mb-5">
                Why Choose Us
              </p>

              <h2 className="text-5xl font-extrabold text-gray-900">
                Organic Quality You Can Trust
              </h2>

            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

              {features.map((item, index) => (

                <motion.div
                  key={index}

                  initial={{
                    opacity: 0,
                    y: 40,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}

                  viewport={{ once: true }}

                  whileHover={{
                    scale: 1.03,
                  }}

                  className="bg-white/80 backdrop-blur-xl rounded-[32px] p-8 border border-white/40 shadow-[0_6px_25px_rgba(0,0,0,0.04)]"
                >

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 text-2xl flex items-center justify-center">

                    {item.icon}

                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-8">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mt-5">
                    {item.description}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </section>

        {/* Story Section */}
        <section className="relative py-24 px-6 md:px-16">

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Image */}
            <motion.div
              initial={{
                opacity: 0,
                x: -40,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              transition={{
                duration: 0.7,
              }}

              viewport={{ once: true }}

              className="relative"
            >

              <div className="absolute inset-0 bg-green-300/20 blur-[100px] rounded-full"></div>

              <div className="relative rounded-[40px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">

                <img
                  src="https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?q=80&w=1200&auto=format&fit=crop"
                  alt="Fresh Vegetables"

                  className="w-full h-[650px] object-cover"
                />

              </div>

            </motion.div>

            {/* Content */}
            <motion.div
              initial={{
                opacity: 0,
                x: 40,
              }}

              whileInView={{
                opacity: 1,
                x: 0,
              }}

              transition={{
                duration: 0.7,
              }}

              viewport={{ once: true }}
            >

              <p className="uppercase tracking-[4px] text-green-600 font-semibold mb-6">
                Our Story
              </p>

              <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
                Bringing Nature Closer To Your Table
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mt-8">

                Our journey started with a simple mission — to deliver healthy,
                naturally grown food directly from farms to families.

              </p>

              <p className="text-gray-600 text-lg leading-relaxed mt-6">

                Every fruit and vegetable is carefully selected to ensure freshness,
                nutrition, and premium quality for your daily lifestyle.

              </p>

              {/* Features */}
              <div className="space-y-5 mt-10">

                <div className="flex items-center gap-4">

                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                    ✓
                  </div>

                  <p className="text-gray-700 font-medium">
                    Farm Fresh Daily Products
                  </p>

                </div>

                <div className="flex items-center gap-4">

                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                    ✓
                  </div>

                  <p className="text-gray-700 font-medium">
                    Chemical-Free Organic Foods
                  </p>

                </div>

                <div className="flex items-center gap-4">

                  <div className="w-10 h-10 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                    ✓
                  </div>

                  <p className="text-gray-700 font-medium">
                    Sustainable Farming Support
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </section>

      </section>
      <Footer />
    </>
  );
};

export default About;