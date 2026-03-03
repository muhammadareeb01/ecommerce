'use client';
import { motion } from 'framer-motion';

export default function BestSellers() {
  return (
    <section className="bg-[#050810] py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block"
        >
          {/* Large Gradient Heading matching the screenshot */}
          <h2 className="text-7xl md:text-8xl lg:text-[140px] font-black uppercase tracking-tight leading-none
            bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent
            select-none pointer-events-none opacity-90"
          >
            Best Sellers
          </h2>
          
          {/* Subtle glow behind the text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 blur-[100px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
