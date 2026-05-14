import { motion } from "framer-motion";

const Newsletter = () => {
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
          duration: 7,
          repeat: Infinity,
        }}

        className="absolute right-20 top-40 w-32 h-32 bg-lime-300/20 rounded-full blur-3xl"
      />

      {/* Floating Orb */}
      <motion.div
        animate={{
          y: [0, 30, 0],
        }}

        transition={{
          duration: 10,
          repeat: Infinity,
        }}

        className="absolute left-20 bottom-10 w-40 h-40 bg-green-300/20 rounded-full blur-3xl"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">

        {/* Newsletter Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}

          transition={{
            duration: 1,
          }}

          viewport={{ once: true }}

          className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[45px] px-8 md:px-20 py-20 text-center overflow-hidden shadow-[0_0_80px_rgba(34,197,94,0.2)]"
        >

          {/* Glow Border */}
          <div className="absolute inset-0 rounded-[45px] border border-green-400/20 pointer-events-none"></div>


          {/* Shine Effect */}
          <div className="absolute -left-40 top-0 w-40 h-full bg-white/10 rotate-12 blur-2xl animate-[shine_6s_linear_infinite] pointer-events-none"></div>

          {/* Small Heading */}
          <p className="uppercase tracking-[5px] text-green-400 font-semibold">
            Newsletter
          </p>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-extrabold text-white mt-6 leading-tight">
            Stay Healthy <br />
            Stay Connected
          </h2>

          {/* Description */}
          <p className="max-w-3xl mx-auto mt-8 text-gray-300 text-lg leading-relaxed">
            Subscribe to receive fresh organic updates,
            healthy lifestyle tips, seasonal offers,
            and premium farm products directly in your inbox.
          </p>

          {/* Form */}
          <motion.form
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}

            transition={{
              duration: 1,
              delay: 0.3,
            }}

            viewport={{ once: true }}

            className="mt-14 flex flex-col md:flex-row items-center gap-5 max-w-3xl mx-auto"
          >

            {/* Input */}
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full h-16 px-8 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-gray-400 outline-none backdrop-blur-xl focus:border-green-400 transition duration-300"
            />

            {/* Button */}
            <motion.button
              whileHover={{
                scale: 1.05,
              }}

              whileTap={{
                scale: 0.95,
              }}

              className="h-16 px-10 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold text-lg shadow-[0_0_30px_rgba(34,197,94,0.4)] transition duration-300 whitespace-nowrap"
            >
              Subscribe
            </motion.button>

          </motion.form>

          {/* Bottom Text */}
          <p className="text-gray-400 mt-8 text-sm">
            Fresh organic lifestyle updates every week.
          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default Newsletter;