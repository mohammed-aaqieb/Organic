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

      <section className="relative min-h-screen bg-[#F8FFF4] overflow-hidden pt-32 pb-24 px-6 md:px-16">

        {/* Glow Effects */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-300/20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-lime-200/20 blur-[120px] rounded-full"></div>

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* Heading */}
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
              duration: 0.7,
            }}

            className="text-center max-w-4xl mx-auto mb-20"
          >

            <p className="uppercase tracking-[4px] text-green-600 font-semibold mb-6">
              Contact Us
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">

              Let’s Talk About
              <span className="text-green-600">
                {" "}Fresh Organic Food
              </span>

            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mt-8">

              Have questions about our products, delivery, or organic farming?
              Our team is here to help you anytime.

            </p>

          </motion.div>

          {/* Main Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-12 items-start">

            {/* Contact Form */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.7,
              }}

              viewport={{ once: true }}

              className="bg-white/80 backdrop-blur-2xl rounded-[40px] border border-white/40 p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
            >

              <h2 className="text-4xl font-extrabold text-gray-900 mb-10">
                Send A Message
              </h2>

              <form className="space-y-7">

                {/* Name */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                  <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      First Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter first name"

                      className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition duration-300"
                    />

                  </div>

                  <div>

                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Last Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter last name"

                      className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition duration-300"
                    />

                  </div>

                </div>

                {/* Email */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email"

                    className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition duration-300"
                  />

                </div>

                {/* Subject */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Subject
                  </label>

                  <input
                    type="text"
                    placeholder="Enter subject"

                    className="w-full h-14 px-5 rounded-2xl border border-gray-200 outline-none focus:border-green-500 transition duration-300"
                  />

                </div>

                {/* Message */}
                <div>

                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Write your message..."

                    className="w-full px-5 py-4 rounded-3xl border border-gray-200 outline-none focus:border-green-500 transition duration-300 resize-none"
                  ></textarea>

                </div>

                {/* Button */}
                <motion.button
                  whileHover={{
                    scale: 1.02,
                  }}

                  whileTap={{
                    scale: 0.98,
                  }}

                  className="w-full md:w-auto px-10 h-14 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold text-lg shadow-[0_8px_25px_rgba(34,197,94,0.2)] transition duration-300"
                >

                  Send Message

                </motion.button>

              </form>

            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.7,
                delay: 0.1,
              }}

              viewport={{ once: true }}

              className="space-y-6"
            >

              {contactInfo.map((item, index) => (

                <motion.div
                  key={index}

                  whileHover={{
                    scale: 1.02,
                  }}

                  className="bg-white/80 backdrop-blur-2xl rounded-[32px] border border-white/40 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
                >

                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-700 text-2xl flex items-center justify-center">

                    {item.icon}

                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mt-7">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed mt-4 text-lg">
                    {item.value}
                  </p>

                </motion.div>

              ))}

              {/* Map Card */}
              <motion.div
                whileHover={{
                  scale: 1.02,
                }}

                className="relative overflow-hidden rounded-[32px] shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
              >

                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1200&auto=format&fit=crop"
                  alt="Location"

                  className="w-full h-[300px] object-cover"
                />

                <div className="absolute inset-0 bg-black/20"></div>

                <div className="absolute bottom-6 left-6 text-white">

                  <p className="uppercase tracking-[3px] text-green-300 font-semibold">
                    Our Store
                  </p>

                  <h3 className="text-3xl font-extrabold mt-2">
                    Organic Market
                  </h3>

                </div>

              </motion.div>

            </motion.div>

          </div>

        </div>

      </section>
      <Footer />
    </>
  );
};

export default Contact;