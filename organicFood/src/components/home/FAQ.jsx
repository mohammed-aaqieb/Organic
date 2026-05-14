import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "Are your fruits and vegetables completely organic?",
    answer:
      "Yes. All our products are sourced from trusted organic farms without harmful chemicals or pesticides.",
  },

  {
    id: 2,
    question: "How long does delivery usually take?",
    answer:
      "Most orders are delivered within 24 to 48 hours depending on your location.",
  },

  {
    id: 3,
    question: "Do you offer fresh farm delivery daily?",
    answer:
      "Yes. We work directly with farms to ensure fresh daily organic deliveries.",
  },

  {
    id: 4,
    question: "Can I return damaged products?",
    answer:
      "Absolutely. If any product arrives damaged, we provide replacement or refund support.",
  },

  {
    id: 5,
    question: "Do you use preservatives in your foods?",
    answer:
      "No. Our organic foods are completely natural and free from artificial preservatives.",
  },
];

const FAQ = () => {
  const [active, setActive] = useState(null);

  const toggleFAQ = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section className="relative py-32 bg-white overflow-hidden">

      {/* Background Glow */}
      <motion.div
        animate={{
          y: [0, -40, 0],
          x: [0, 30, 0],
        }}

        transition={{
          duration: 10,
          repeat: Infinity,
        }}

        className="absolute top-10 left-0 w-[400px] h-[400px] bg-green-200/30 blur-[140px] rounded-full"
      />

      {/* Floating Orb */}
      <motion.div
        animate={{
          y: [0, 30, 0],
        }}

        transition={{
          duration: 8,
          repeat: Infinity,
        }}

        className="absolute bottom-10 right-10 w-72 h-72 bg-lime-200/30 blur-[120px] rounded-full"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{
            duration: 1,
          }}

          viewport={{ once: true }}

          className="text-center mb-20"
        >

          <p className="uppercase tracking-[5px] text-green-600 font-semibold">
            FAQ
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mt-5">
            Frequently Asked Questions
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg">
            Everything you need to know about our organic foods,
            delivery process, and healthy lifestyle.
          </p>

        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-8">

          {faqData.map((item, index) => {

            const isOpen = active === item.id;

            return (

              <motion.div
                key={item.id}

                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}

                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}

                viewport={{ once: true }}

                className="group bg-[#F8FFF4]/70 backdrop-blur-xl border border-white/40 rounded-[30px] overflow-hidden shadow-xl hover:shadow-2xl transition duration-500"
              >

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex justify-between items-center text-left p-8"
                >

                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 pr-6">
                    {item.question}
                  </h3>

                  {/* Icon */}
                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}

                    transition={{
                      duration: 0.3,
                    }}

                    className="min-w-[50px] min-h-[50px] rounded-full bg-green-100 flex items-center justify-center text-green-700 text-lg"
                  >

                    {isOpen ? <FaMinus /> : <FaPlus />}

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
                        height: "auto",
                        opacity: 1,
                      }}

                      exit={{
                        height: 0,
                        opacity: 0,
                      }}

                      transition={{
                        duration: 0.4,
                      }}

                      className="overflow-hidden"
                    >

                      <div className="px-8 pb-8 text-gray-600 text-lg leading-relaxed">

                        {item.answer}

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

                {/* Glow Border */}
                <div className="absolute inset-0 rounded-[30px] opacity-0 group-hover:opacity-100 transition duration-500 border border-green-400/30 shadow-[0_0_40px_rgba(34,197,94,0.25)] pointer-events-none"></div>

              </motion.div>

            );
          })}

        </div>

      </div>

    </section>
  );
};

export default FAQ;