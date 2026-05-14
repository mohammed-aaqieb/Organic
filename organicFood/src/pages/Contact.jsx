import { motion } from "framer-motion";

import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {

  const contactInfo = [
    {
      icon: <FaPhoneAlt />,
      title: "Phone Number",
      value: "+91 98765 43210",
    },

    {
      icon: <FaEnvelope />,
      title: "Email Address",
      value: "support@organic.com",
    },

    {
      icon: <FaMapMarkerAlt />,
      title: "Our Location",
      value: "Aurangabad, Maharashtra",
    },

    {
      icon: <FaClock />,
      title: "Working Hours",
      value: "Mon - Sat : 9AM - 8PM",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="relative overflow-hidden bg-[#f5f8ef] pt-28 pb-14">

        {/* Background */}
        <div className="absolute inset-0">

          {/* Glow */}
          <div className="absolute top-0 left-[-100px] w-[420px] h-[420px] bg-green-200/30 blur-[130px] rounded-full"></div>

          <div className="absolute bottom-0 right-[-100px] w-[420px] h-[420px] bg-lime-200/30 blur-[130px] rounded-full"></div>

          {/* Grid */}
          <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,rgba(22,101,52,0.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,101,52,0.9)_1px,transparent_1px)] [background-size:48px_48px]"></div>

        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

          {/* Hero */}
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
              duration: 0.7,
            }}

            className="text-center max-w-4xl mx-auto mb-12"
          >

            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/70 backdrop-blur-xl border border-white/50 shadow-[0_6px_20px_rgba(0,0,0,0.05)]">

              <span className="w-2 h-2 rounded-full bg-green-600"></span>

              <p className="uppercase tracking-[4px] text-green-700 text-sm font-semibold">
                Contact Us
              </p>

            </div>

            <h1 className="text-4xl md:text-7xl font-extrabold text-gray-900 mt-7 leading-tight">

              Let’s Talk About
              <span className="text-green-600">
                {" "}Organic Living
              </span>

            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mt-7 max-w-3xl mx-auto">

              Have questions about products, delivery, or organic farming?
              Our team is always ready to help you.

            </p>

          </motion.div>

          {/* Main Connected Container */}
          <div className="rounded-[42px] border border-white/40 bg-white/50 backdrop-blur-3xl shadow-[0_20px_80px_rgba(0,0,0,0.06)] overflow-hidden">

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px]">

              {/* LEFT SIDE */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 30,
                }}

                whileInView={{
                  opacity: 1,
                  y: 0,
                }}

                transition={{
                  duration: 0.7,
                }}

                viewport={{
                  once: true,
                }}

                className="p-6 md:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/40"
              >

                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">

                  Send A Message

                </h2>

                <form className="space-y-6">

                  {/* Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    <input
                      type="text"
                      placeholder="First Name"

                      className="h-14 px-5 rounded-2xl border border-gray-200 bg-white/80 outline-none focus:border-green-500 transition duration-300"
                    />

                    <input
                      type="text"
                      placeholder="Last Name"

                      className="h-14 px-5 rounded-2xl border border-gray-200 bg-white/80 outline-none focus:border-green-500 transition duration-300"
                    />

                  </div>

                  {/* Email */}
                  <input
                    type="email"
                    placeholder="Email Address"

                    className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-white/80 outline-none focus:border-green-500 transition duration-300"
                  />

                  {/* Subject */}
                  <input
                    type="text"
                    placeholder="Subject"

                    className="w-full h-14 px-5 rounded-2xl border border-gray-200 bg-white/80 outline-none focus:border-green-500 transition duration-300"
                  />

                  {/* Message */}
                  <textarea
                    rows="6"
                    placeholder="Write your message..."

                    className="w-full px-5 py-4 rounded-[28px] border border-gray-200 bg-white/80 outline-none focus:border-green-500 transition duration-300 resize-none"
                  ></textarea>

                  {/* Button */}
                  <motion.button
                    whileHover={{
                      scale: 1.02,
                    }}

                    whileTap={{
                      scale: 0.98,
                    }}

                    className="w-full md:w-auto px-10 h-14 rounded-2xl bg-green-600 hover:bg-green-700 text-white font-semibold text-lg shadow-[0_12px_35px_rgba(34,197,94,0.25)] transition duration-300"
                  >

                    Send Message

                  </motion.button>

                </form>

              </motion.div>

              {/* RIGHT SIDE */}
              <div className="relative p-6 md:p-8 bg-white/30">

                {/* Glow */}
                <div className="absolute top-10 right-0 w-40 h-40 bg-green-200/30 blur-[80px] rounded-full"></div>

                <div className="relative z-10">

                  <h3 className="text-3xl font-extrabold text-gray-900 mb-8">

                    Contact Info

                  </h3>

                  <div className="space-y-5">

                    {contactInfo.map((item, index) => (

                      <motion.div
                        key={index}

                        whileHover={{
                          y: -4,
                        }}

                        className="flex items-start gap-5 p-5 rounded-[28px] bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                      >

                        {/* Icon */}
                        <div className="min-w-[60px] h-[60px] rounded-2xl bg-green-100 text-green-700 flex items-center justify-center text-xl">

                          {item.icon}

                        </div>

                        {/* Content */}
                        <div>

                          <h4 className="text-xl font-bold text-gray-900">

                            {item.title}

                          </h4>

                          <p className="text-gray-600 mt-2 leading-relaxed">

                            {item.value}

                          </p>

                        </div>

                      </motion.div>

                    ))}

                  </div>

                  {/* Map */}
                  <motion.div
                    whileHover={{
                      scale: 1.01,
                    }}

                    className="relative overflow-hidden rounded-[32px] mt-6"
                  >

                    <img
                      src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                      alt="Location"

                      className="w-full h-[240px] object-cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                    <div className="absolute bottom-6 left-6 text-white">

                      <p className="uppercase tracking-[3px] text-green-300 text-sm font-semibold">

                        Our Store

                      </p>

                      <h3 className="text-3xl font-extrabold mt-2">

                        Organic Market

                      </h3>

                    </div>

                  </motion.div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Contact;