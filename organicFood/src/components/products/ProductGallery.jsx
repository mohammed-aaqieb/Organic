import { motion } from "framer-motion";

const ProductGallery = ({ product }) => {

  return (
    <div className="relative group">

      {/* Soft Glow */}
      <div className="absolute inset-0 bg-green-300/10 blur-[90px] rounded-full"></div>

      {/* Image Container */}
      <div className="relative bg-white rounded-[32px] overflow-hidden border border-white/40 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">

        <motion.img
          src={product.image}
          alt={product.name}

          initial={{
            opacity: 0,
            scale: 1.05,
          }}

          animate={{
            opacity: 1,
            scale: 1,
          }}

          transition={{
            duration: 0.7,
          }}

          className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition duration-[2500ms]"
        />

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent"></div>

      </div>

    </div>
  );
};

export default ProductGallery;