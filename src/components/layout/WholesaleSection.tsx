'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BadgeDollarSign, ShieldCheck, Box, Zap } from 'lucide-react';

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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 border-accent-purple/20">
              <span className="text-xs font-black uppercase tracking-widest text-accent-purple">B2B Opportunities</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 leading-tight">
              Scale Your Business with <br />
              <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">Premium Wholesale</span>
            </h2>
            <p className="text-lg text-white/50 mb-10 leading-relaxed max-w-xl">
              Partner with the industry's leading supplier. We provide authentic products, unbeatable bulk margins, and a reliable supply chain for resellers and distributors worldwide.
            </p>
            
            <Link href="/wholesale" className="btn-neon-purple animate-neon-pulse inline-flex items-center gap-2 px-10 py-5 text-lg">
              View Wholesale Program
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 grid grid-cols-2 gap-6"
          >
            {badges.map((badge, idx) => (
              <div key={idx} className="glass-card p-8 flex flex-col items-center text-center relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-accent-blue/0 via-white/5 to-accent-blue/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-accent-blue border border-white/5">
                  {badge.icon}
                </div>
                <h4 className="text-white font-bold">{badge.text}</h4>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
