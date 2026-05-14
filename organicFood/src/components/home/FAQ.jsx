import { useState } from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question:
      "Are your fruits and vegetables completely organic?",

    answer:
      "Yes. All our products are sourced from trusted organic farms without harmful chemicals or pesticides.",
  },

  {
    id: 2,
    question:
      "How long does delivery usually take?",

    answer:
      "Most orders are delivered within 24 to 48 hours depending on your location.",
  },

  {
    id: 3,
    question:
      "Do you offer fresh farm delivery daily?",

    answer:
      "Yes. We work directly with farms to ensure fresh daily organic deliveries.",
  },

  {
    id: 4,
    question:
      "Can I return damaged products?",

    answer:
      "Absolutely. If any product arrives damaged, we provide replacement or refund support.",
  },

  {
    id: 5,
    question:
      "Do you use preservatives in your foods?",

    answer:
      "No. Our organic foods are completely natural and free from artificial preservatives.",
  },
];

const FAQ = () => {

  const [active, setActive] =
    useState(1);

  const toggleFAQ = (id) => {

    setActive(
      active === id
        ? null
        : id
    );
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-20">

      {/* Background */}
      <div className="absolute inset-0 bg-[#f6f8ef]"></div>

      {/* Gradient Blobs */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          x: [0, 15, 0],
        }}

        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="absolute -top-24 left-[-120px] w-[420px] h-[420px] rounded-full bg-green-200/30 blur-[120px]"
      />

      <motion.div
        animate={{
          y: [0, -25, 0],
          x: [0, -10, 0],
        }}

        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="absolute bottom-[-120px] right-[-100px] w-[420px] h-[420px] rounded-full bg-lime-200/25 blur-[120px]"
      />

      {/* Noise Grid */}
      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,rgba(22,101,52,0.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(22,101,52,0.9)_1px,transparent_1px)] [background-size:50px_50px]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">

        {/* Heading */}
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

          viewport={{
            once: true,
          }}

          className="text-center mb-14"
        >

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/50 bg-white/70 backdrop-blur-xl shadow-[0_6px_20px_rgba(0,0,0,0.05)]">

            <span className="w-2 h-2 rounded-full bg-green-600"></span>

            <p className="uppercase tracking-[4px] text-green-700 text-sm font-semibold">
              FAQ
            </p>

          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mt-7 leading-tight">

            Everything You
            <span className="text-green-700">
              {" "}Need To Know
            </span>

          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-relaxed">

            Answers about our fresh organic foods, delivery process, healthy products, and customer support.

          </p>

        </motion.div>

        {/* FAQ Wrapper */}
        <div className="relative rounded-[40px] border border-white/50 bg-white/40 backdrop-blur-3xl shadow-[0_20px_80px_rgba(0,0,0,0.05)] overflow-hidden">

          {/* Inner Glow */}
          <div className="absolute top-0 left-0 w-80 h-80 bg-green-200/20 blur-[100px] rounded-full"></div>

          <div className="relative z-10 divide-y divide-white/40">

            {faqData.map(
              (item, index) => {

                const isOpen =
                  active === item.id;

                return (

                  <motion.div
                    key={item.id}

                    initial={{
                      opacity: 0,
                      y: 30,
                    }}

                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}

                    transition={{
                      duration: 0.5,
                      delay:
                        index * 0.08,
                    }}

                    viewport={{
                      once: true,
                    }}

                    className="group"
                  >

                    {/* Question */}
                    <button
                      onClick={() =>
                        toggleFAQ(
                          item.id
                        )
                      }

                      className="w-full flex items-center justify-between gap-6 px-7 md:px-10 py-8 text-left transition duration-500 hover:bg-white/20"
                    >

                      <div className="flex items-start gap-5">

                        {/* Number */}
                        <div
                          className={`min-w-[58px] h-[58px] rounded-2xl flex items-center justify-center text-lg font-bold transition duration-500 ${
                            isOpen
                              ? "bg-green-600 text-white shadow-[0_10px_30px_rgba(34,197,94,0.3)]"
                              : "bg-white text-green-700"
                          }`}
                        >

                          0{item.id}

                        </div>

                        {/* Question */}
                        <div>

                          <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-snug">

                            {
                              item.question
                            }

                          </h3>

                        </div>

                      </div>

                      {/* Icon */}
                      <motion.div
                        animate={{
                          rotate:
                            isOpen
                              ? 180
                              : 0,

                          scale:
                            isOpen
                              ? 1.05
                              : 1,
                        }}

                        transition={{
                          duration: 0.3,
                        }}

                        className={`min-w-[54px] h-[54px] rounded-2xl flex items-center justify-center text-lg transition duration-500 ${
                          isOpen
                            ? "bg-green-600 text-white"
                            : "bg-white text-green-700"
                        }`}
                      >

                        {isOpen
                          ? <FaMinus />
                          : <FaPlus />}

                      </motion.div>

                    </button>

                    {/* Answer */}
                    <AnimatePresence>

                      {isOpen && (

                        <motion.div
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}

                          animate={{
                            height:
                              "auto",
                            opacity: 1,
                          }}

                          exit={{
                            height: 0,
                            opacity: 0,
                          }}

                          transition={{
                            duration: 0.35,
                          }}

                          className="overflow-hidden"
                        >

                          <div className="pl-[95px] pr-8 md:pr-16 pb-8 text-gray-600 text-lg leading-relaxed">

                            {
                              item.answer
                            }

                          </div>

                        </motion.div>

                      )}

                    </AnimatePresence>

                  </motion.div>
                );
              }
            )}

          </div>

          {/* Bottom Gradient */}
          <div className="h-[4px] bg-gradient-to-r from-green-500 via-lime-400 to-green-300"></div>

        </div>

      </div>

    </section>
  );
};

export default FAQ;