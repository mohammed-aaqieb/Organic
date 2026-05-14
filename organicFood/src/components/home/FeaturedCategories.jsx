import { motion } from "framer-motion";

import fruitsImg from "../../assets/fruits/apple.jpg";
import vegImg from "../../assets/vegetables/tomato.jpg";

const FeaturedCategories = () => {
  const categories = [
    {
      title: "Fresh Fruits",
      subtitle: "Naturally Sweet",
      description: "Fresh premium organic fruits directly from healthy farms.",
      image: fruitsImg,
      button: "Shop Fruits",
      dark: true,
    },
    {
      title: "Organic Vegetables",
      subtitle: "Farm Fresh Daily",
      description:
        "Healthy organic vegetables full of nutrition and freshness.",
      image: vegImg,
      button: "Shop Vegetables",
      dark: false,
    },
  ];

  return (
    <section className="relative overflow-hidden py-10 md:py-14">
      {/* Soft page canvas */}
      <div className="absolute inset-0 bg-[#f7f8ef]" />

      {/* Layered background blobs */}
      <motion.div
        animate={{ y: [0, 18, 0], x: [0, 12, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-24 h-[360px] w-[360px] rounded-full bg-lime-200/45 blur-[90px]"
      />
      <motion.div
        animate={{ y: [0, -22, 0], x: [0, -14, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-[-90px] h-[320px] w-[320px] rounded-full bg-green-200/35 blur-[95px]"
      />
      <motion.div
        animate={{ y: [0, 16, 0], x: [0, 10, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-120px] left-1/4 h-[340px] w-[340px] rounded-full bg-emerald-200/25 blur-[100px]"
      />

      {/* Decorative dots */}
      <div className="absolute left-[14%] top-10 grid grid-cols-5 gap-2 opacity-25">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-lime-700/40" />
        ))}
      </div>

      <div className="absolute right-[10%] top-24 grid grid-cols-5 gap-2 opacity-20">
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-green-700/40" />
        ))}
      </div>

      {/* Floating leaf shapes */}
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-5 top-8 h-24 w-24 rounded-full bg-gradient-to-br from-lime-300/70 to-green-500/50 blur-[2px] opacity-70"
      />
      <motion.div
        animate={{ y: [0, 12, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-5 top-10 h-20 w-20 rounded-full bg-gradient-to-br from-green-400/60 to-lime-300/50 blur-[2px] opacity-70"
      />

      <div className="relative z-10 mx-4 md:mx-8 lg:mx-10">
        {/* Floating glass panel */}
        <div
          className="relative mx-auto max-w-7xl overflow-hidden rounded-[44px] border border-white/60 bg-white/30 backdrop-blur-2xl shadow-[0_10px_50px_rgba(0,0,0,0.04)]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 18% 18%, rgba(219, 239, 186, 0.55) 0%, rgba(219, 239, 186, 0.18) 16%, transparent 34%), radial-gradient(circle at 82% 14%, rgba(197, 233, 170, 0.42) 0%, rgba(197, 233, 170, 0.12) 18%, transparent 34%), radial-gradient(circle at 10% 90%, rgba(190, 230, 190, 0.28) 0%, transparent 28%), radial-gradient(circle at 90% 92%, rgba(208, 236, 172, 0.25) 0%, transparent 30%), linear-gradient(180deg, rgba(255,255,255,0.72) 0%, rgba(247,250,239,0.86) 100%)",
          }}
        >
          {/* Inner texture */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.65),_transparent_45%)]" />

          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(to_right,rgba(116,156,72,0.9)_1px,transparent_1px),linear-gradient(to_bottom,rgba(116,156,72,0.9)_1px,transparent_1px)] [background-size:42px_42px]" />

          <div className="relative z-10 px-5 py-10 md:px-10 md:py-12 lg:px-12">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mx-auto mb-8 max-w-3xl text-center md:mb-10"
            >
              <div className="mb-4 flex items-center justify-center gap-4 text-green-700/80">
                <span className="h-px w-10 bg-gradient-to-r from-transparent to-green-600/60" />
                <span className="text-sm font-semibold tracking-[0.35em] uppercase">
                  Categories
                </span>
                <span className="h-px w-10 bg-gradient-to-l from-transparent to-green-600/60" />
              </div>

              <h2 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                Explore <span className="text-green-700">Organic Foods</span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                Fresh fruits and vegetables directly from healthy organic farms.
              </p>
            </motion.div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-7">
              {categories.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: index * 0.12 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  className="group relative h-[470px] overflow-hidden rounded-[34px] shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-[1800ms] group-hover:scale-110"
                  />

                  <div
                    className={`absolute inset-0 ${
                      item.dark
                        ? "bg-gradient-to-t from-black/76 via-black/22 to-transparent"
                        : "bg-gradient-to-t from-green-950/78 via-green-900/18 to-transparent"
                    }`}
                  />

                  {/* soft corner glow */}
                  <div className="absolute -bottom-20 left-1/2 h-[140px] w-[320px] -translate-x-1/2 rounded-full bg-green-300/18 blur-[90px]" />

                  {/* glass content */}
                  {/* Content */}
                  <div className="absolute inset-x-6 bottom-6 z-10">
                    {/* Small Badge */}
                   

                    {/* Text */}
                    <h3 className="max-w-md text-4xl md:text-5xl font-extrabold leading-tight text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
                      {item.title}
                    </h3>

                    <p className="max-w-md text-white/90 text-lg leading-relaxed mt-5 drop-shadow-[0_4px_14px_rgba(0,0,0,0.35)]">
                      {item.description}
                    </p>

                    {/* Button */}
                    <motion.button
                      whileHover={{
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className={`mt-7 inline-flex items-center gap-3 h-12 rounded-full px-7 font-semibold transition duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.15)] ${
                        item.dark
                          ? "bg-green-600 text-white hover:bg-green-700"
                          : "bg-white text-green-700 hover:bg-green-100"
                      }`}
                    >
                      {item.button}

                      <span>→</span>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
