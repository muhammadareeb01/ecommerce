'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effect for the background
  const y = useTransform(scrollY, [0, 1000], ['0%', '30%']);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Parallax Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.div style={{ y }} className="relative w-full h-full scale-110">
          <Image 
            src="https://cdn.sanity.io/images/3zfeiea5/production/d1e5677ae70ea61d207543a1bcdc9b15518d1d77-1024x1024.jpg" 
            alt="Premium Vape Hardware"
            fill
            className="object-cover opacity-40 grayscale-[0.2]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border-accent-blue/10"
          >
            <Zap size={14} className="text-accent-blue" />
            <span className="text-xs font-bold tracking-widest uppercase text-accent-blue/80">Next-Gen Performance</span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 sm:mb-8 leading-tight tracking-tight">
            <span className="block text-white">Premium Vapes &</span>
            <span className="block bg-gradient-to-r from-accent-blue via-accent-purple to-accent-teal bg-clip-text text-transparent">Modern Devices</span>
            <span className="block text-white/90 text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 sm:mt-4"> Built for Performance</span>
          </h1>

          <p className="text-base sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed font-light">
            Leading supplier of premium disposable vapes, cartridges, devices, and accessories with fast delivery and trusted service.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link href="/categories" className="btn-neon-blue group flex items-center justify-center w-full sm:w-auto gap-2 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg !shadow-none ring-1 ring-accent-blue/30">
              Shop Categories
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/wholesale" className="btn-neon-purple flex flex-col sm:flex-row items-center justify-center w-full sm:w-auto gap-2 px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg !shadow-none !animate-none border-accent-purple/30">
              Wholesale Program
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <button 
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          className="flex flex-col items-center gap-2 group cursor-pointer"
        >
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/40 group-hover:text-white transition-colors">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1"
          >
            <motion.div 
              animate={{ height: [4, 12, 4] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 bg-white rounded-full" 
            />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}



