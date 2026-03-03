'use client';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Bitcoin, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useRef } from 'react';

export default function IntroSection({ homeContent }: { homeContent?: any }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Mouse tilt effect for 3D state
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (rect) {
      const width = rect.width;
      const height = rect.height;
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const imageParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const textParallax = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section 
      ref={containerRef} 
      id="about-section" 
      className="bg-white py-32 md:py-48 overflow-hidden relative"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Decorative High-End Background - Subtler for Pure White Look */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#f3f4f6_1.5px,transparent_1.5px)] [background-size:60px_60px] opacity-[0.4]" />
      </div>

      <div className="w-[85%] lg:w-[80%] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
          
          {/* Left Content - High Legibility & Stylish */}
          <motion.div 
            style={{ y: textParallax }}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="w-full lg:w-[55%] space-y-12"
          >
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-center gap-3 text-indigo-700"
              >
                <div className="w-10 h-[1.5px] bg-indigo-700 rounded-full" />
                <span className="text-[9px] font-black uppercase tracking-[0.4em]">
                  Authority & Trust Signals
                </span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#161616] leading-[1.1] tracking-tight">
                Buy Vapes in Bulk from a trusted Wholesale Supplier
              </h2>
            </div>

            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-xl font-light">
              Bulkvapes.us is a wholesale-focused B2B platform offering bulk disposable vapes and nik vape products to qualified buyers worldwide. 
              We bridge the gap between major manufacturers and retailers.
            </p>

            {/* Crypto Exclusive Banner - Elevated Contrast */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative p-10 bg-[#f8fbff] rounded-[3rem] border border-blue-50/50 shadow-sm overflow-hidden group"
            >
              <div className="absolute -right-8 -bottom-8 opacity-[0.05] group-hover:scale-110 transition-transform duration-700">
                <Bitcoin size={200} />
              </div>
              <div className="relative flex items-center gap-8">
                <div className="w-20 h-20 rounded-full bg-white shadow-xl flex items-center justify-center text-orange-500 border border-orange-50">
                   <Bitcoin size={40} />
                </div>
                <div className="space-y-2">
                  <h4 className="text-blue-900 font-black text-xl">Crypto Exclusive Offer</h4>
                  <p className="text-blue-800/80 text-base leading-relaxed">
                    Order in bulk, mix & match products, and pay with crypto to get an <span className="font-bold text-blue-900 underline decoration-blue-200 underline-offset-4">instant 10% discount.</span>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Elite Action Buttons - Inverted Hover States */}
            <div className="flex flex-col sm:flex-row gap-6 pt-6">
              <Link href="/cart" className="premium-btn-primary group !rounded-2xl">
                Request Bulk Order
                <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
              </Link>
              <Link href="/contact" className="premium-btn-secondary group !rounded-2xl shadow-md uppercase tracking-wider text-xs font-black">
                Talk to a Wholesale Agent
              </Link>
            </div>
          </motion.div>

          {/* Right Image - 100% Visible & No Crop */}
          <motion.div 
            style={{ y: imageParallax }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="w-full lg:w-[50%] relative"
          >
            {/* Main Showcase Container */}
            <div className="relative group">
              <div className="relative aspect-square w-full rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] transform-gpu transition-all duration-700">
                <Image 
                  src="/images/rightimage.jpg" 
                  alt="Quality Vape Hardware"
                  fill
                  className="object-contain"
                  priority
                />
                
                {/* Subtle Overlay to match white background */}
                <div className="absolute inset-0 bg-transparent" />
                
                {/* Advanced Light Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/90 via-black/30 to-transparent" />
                
                {/* Floating Tags */}
                <div className="absolute top-10 left-10 flex flex-col gap-3">
                   <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-1.5 bg-white/10 backdrop-blur-xl rounded-full text-white text-[10px] font-black uppercase tracking-[0.2em] border border-white/20"
                   >
                      High Capacity
                   </motion.span>
                   <motion.span 
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-1.5 bg-indigo-600/90 backdrop-blur-xl rounded-full text-white text-[10px] font-black uppercase tracking-[0.2em]"
                   >
                      Authentic Mesh Coil
                   </motion.span>
                </div>

                <div className="absolute bottom-12 left-12 text-white space-y-3">
                   <p className="text-[11px] font-black uppercase tracking-[0.5em] text-indigo-400">Series G3-X</p>
                   <h3 className="text-4xl font-serif leading-tight">The Future of <br /> Disposables</h3>
                </div>
              </div>

              {/* Floating Live Fulfillment Card - More Premium */}
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-12 -right-6 lg:-right-16 bg-white/95 backdrop-blur-2xl p-7 rounded-[2rem] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.25)] border border-white w-72 z-20"
              >
                <div className="flex justify-between items-center mb-8">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">Global Status</span>
                    <h5 className="font-bold text-[#1a1a1a] text-base">Real-time Fulfillment</h5>
                  </div>
                  <div className="flex items-center gap-2 py-1.5 px-3 rounded-full bg-green-500/10 text-green-600 text-[10px] font-black">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    Active
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group/item cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-indigo-600 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-colors duration-300">
                      <ShieldCheck size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Verified Supply</p>
                      <p className="text-[12px] font-bold text-[#1a1a1a]">Direct Factory Logic</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group/item cursor-default">
                    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-indigo-600 group-hover/item:bg-indigo-600 group-hover/item:text-white transition-colors duration-300">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-black text-gray-400 uppercase tracking-tighter">Shipping</p>
                      <p className="text-[12px] font-bold text-[#1a1a1a]">USA Priority Active</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
