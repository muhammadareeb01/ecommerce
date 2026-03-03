'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

export default function Hero({ homeContent }: { homeContent?: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  // Parallax effect for the background image
  const y = useTransform(scrollY, [0, 500], ['0%', '20%']);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Section - Hardcoded Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div 
          style={{ y }}
          className="relative w-full h-full"
        >
          <Image 
            src="https://cdn.sanity.io/images/3zfeiea5/production/d1e5677ae70ea61d207543a1bcdc9b15518d1d77-1024x1024.jpg" 
            alt="USA Bulkvapes"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {/* Specific Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
        </motion.div>
      </div>

      {/* Hero Content Wrapper */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 text-center pt-24">
        {/* Subtle Brand Tagline */}
        <motion.div
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-8 flex justify-center items-center gap-4"
        >
          <span className="text-white text-[10px] font-black uppercase tracking-[0.6em] opacity-80">
            Premium Wholesale Experience
          </span>
        </motion.div>

        {/* Tiered Elite Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="font-black uppercase tracking-tighter leading-[0.85] mb-12
            bg-gradient-to-b from-white via-white to-white/80 bg-clip-text text-transparent drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
        >
          <span className="text-7xl md:text-8xl lg:text-9xl block mb-4">Bulk Vapes USA</span>
          <span className="text-4xl md:text-6xl lg:text-7xl block mb-2 tracking-tight ">Wholesale Disposable</span>
          <span className="text-3xl md:text-5xl lg:text-6xl block tracking-tight ">Vapes in Bulk</span>
        </motion.h1>

        {/* Hardcoded Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed font-light opacity-70"
        >
          Buy disposable vapes in bulk from a trusted wholesale supplier serving retailers, distributors, and bulk buyers across the USA and globally.
        </motion.p>

        {/* Action Buttons - New Elite Classes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-20 px-4"
        >
          <Link href="/cart" className="premium-btn-primary group w-full md:w-auto min-w-[280px]">
            <span className="flex items-center justify-center gap-3">
               Request Bulk Order
               <ArrowRight size={22} className="transition-transform duration-500 group-hover:translate-x-2" />
            </span>
          </Link>
          
          <Link href="/contact" className="premium-btn-secondary group w-full md:w-auto min-w-[280px]">
             <span className="flex items-center justify-center gap-3">
                Wholesale Inquiry
                <ArrowRight size={22} className="transition-opacity group-hover:opacity-100 opacity-50" />
             </span>
          </Link>
        </motion.div>
      </div>

      {/* Minimalism Scroll Arrow */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        onClick={scrollToNext}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 text-white cursor-pointer group"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={48} strokeWidth={1} className="text-white opacity-40 group-hover:opacity-100 transition-opacity" />
        </motion.div>
      </motion.button>
    </section>
  );
}
