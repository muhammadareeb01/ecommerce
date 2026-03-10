'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BadgeDollarSign, ShieldCheck, Box, Zap, Coins } from 'lucide-react';

const badges = [
  { icon: <BadgeDollarSign />, text: 'Bulk Pricing' },
  { icon: <ShieldCheck />, text: 'Verified Products' },
  { icon: <Box />, text: 'Reliable Supply' },
  { icon: <Zap />, text: 'Fast Fulfilment' },
];

export default function WholesaleSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent-blue/20 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full glass-card mb-4 sm:mb-6 border-accent-purple/20">
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-accent-purple">B2B Opportunities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6 sm:mb-8 leading-tight">
              Scale Your Business with <br />
              <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">Premium Wholesale</span>
            </h2>
            <p className="text-base sm:text-lg text-white/50 mb-8 sm:mb-10 leading-relaxed max-w-xl">
              Partner with the industry's leading supplier. We provide authentic products, unbeatable bulk margins, and a reliable supply chain for resellers and distributors worldwide.
            </p>
            
            <Link href="/wholesale" className="btn-neon-purple animate-neon-pulse inline-flex items-center gap-2 px-10 py-5 text-lg">
              View Wholesale Program
            </Link>
          </motion.div>

          <div className="flex-1 w-full pt-16 lg:pt-0 border-t border-white/5 lg:border-t-0 mt-8 lg:mt-0">
            <div className="text-center lg:text-left mb-8 sm:mb-12">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white text-center">
                Why <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">Choose Us</span>
              </h3>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
            {[
              { icon: <BadgeDollarSign />, title: 'Bulk Pricing Available', desc: 'Competitive pricing for larger quantity orders.' },
              { icon: <ShieldCheck />, title: 'Authenticity Guaranteed', desc: 'Products sourced from trusted suppliers.' },
              { icon: <Coins />, title: 'Crypto Payment Discount', desc: 'Save when paying with supported cryptocurrencies.' },
              { icon: <Zap />, title: 'Priority Shipping', desc: 'Orders processed and dispatched quickly.' },
            ].map((item, idx) => (
              <div key={idx} className="glass-card p-6 md:p-8 flex flex-col items-center text-center relative overflow-hidden group min-h-[160px] md:min-h-[200px] justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/0 via-white/5 to-accent-blue/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-4 md:mb-6 text-accent-blue border border-white/5">
                  {item.icon}
                </div>
                <h4 className="text-white font-bold text-sm md:text-base mb-1 md:mb-2">{item.title}</h4>
                <p className="text-[10px] md:text-xs text-white/40 leading-tight">{item.desc}</p>
              </div>
            ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
