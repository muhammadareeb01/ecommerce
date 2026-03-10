'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { ShieldCheck, Truck, Coins, Zap } from 'lucide-react';

export default function ProductsOverview() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left Side: Professional Image Backdrop */}
          <div className="flex-1 relative">
            <motion.div 
              style={{ y: parallaxY }}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/10"
            >
              <Image 
                src="https://cdn.sanity.io/images/3zfeiea5/production/d1e5677ae70ea61d207543a1bcdc9b15518d1d77-1024x1024.jpg" 
                alt="Product Ecosystem"
                fill
                className="object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass-card p-6 border-white/10">
                   <p className="text-accent-blue text-xs font-bold uppercase tracking-[0.2em] mb-2">Verified Supplier</p>
                   <h4 className="text-white font-black text-xl">Premium Hardware Ecosystem</h4>
                </div>
              </div>
            </motion.div>
            
            {/* Subtle floating badge */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 w-32 h-32 glass-card flex flex-col items-center justify-center text-center p-4 border-accent-blue/20"
            >
              <Zap className="text-accent-blue mb-1" size={24} />
              <span className="text-[10px] font-black uppercase text-white/80 leading-tight">USA Quality Standard</span>
            </motion.div>
          </div>

          {/* Right Side: Content */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold uppercase tracking-widest mb-6">
              Commercial Overview
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              Ready to Supply <br />
              <span className="bg-gradient-to-r from-accent-blue to-accent-teal bg-clip-text text-transparent">Your Inventory</span>
            </h2>

            <div className="space-y-8 mb-12">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-accent-blue">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Diverse Product Formats</h4>
                  <p className="text-sm text-white/40 leading-relaxed">From 2g high-capacity disposables to 510-threaded cartridges and premium extracts, we cover all market demands.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-accent-teal">
                  <Coins size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Flexible Buying Options</h4>
                  <p className="text-sm text-white/40 leading-relaxed">Secure your stock using Bitcoin (BTC), Ethereum (ETH), or USDT for instant processing and exclusive discounts. Wire transfers also available.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-accent-purple">
                  <Truck size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Wholesale Efficiency</h4>
                  <p className="text-sm text-white/40 leading-relaxed">Direct-to-retailer fulfillment with reliable shipping schedules and verified product authenticity for every order.</p>
                </div>
              </div>
            </div>

            <Link href="/products" className="btn-neon-blue group inline-flex items-center gap-2 px-10 py-5 text-lg !shadow-none ring-1 ring-accent-blue/30">
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

