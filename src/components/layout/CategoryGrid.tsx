'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Shovel as Vape, Wind, Flame, Droplets, Settings, ShieldCheck, Truck, Coins, Briefcase } from 'lucide-react';

const categories = [
  { name: 'Disposable Vapes', icon: <Wind size={32} />, href: '/category/disposables', accent: 'blue' },
  { name: '510 Vape Cartridges', icon: <Vape size={32} />, href: '/category/510-cartridges', accent: 'purple' },
  { name: 'Wax Pens', icon: <Flame size={32} />, href: '/category/wax-pens', accent: 'teal' },
  { name: 'Refillable Vape Liquid', icon: <Droplets size={32} />, href: '/category/e-liquid', accent: 'blue' },
  { name: 'Vape Accessories', icon: <Settings size={32} />, href: '/category/accessories', accent: 'purple' },
];

const trustBadges = [
  { icon: <ShieldCheck size={18} />, text: 'Secure Checkout' },
  { icon: <Truck size={18} />, text: 'Discreet Shipping' },
  { icon: <Coins size={18} />, text: 'Crypto Accepted' },
  { icon: <Briefcase size={18} />, text: 'Wholesale Available' },
];

export default function CategoryGrid() {
  return (
    <section className="py-24 bg-dark/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Explore Categories</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Link href={cat.href} className="group block">
                <div className="glass-card p-8 h-full flex flex-col items-center justify-center text-center transition-all duration-300 hover:-translate-y-2 hover:border-accent-blue/40 hover:shadow-[0_0_30px_rgba(0,210,255,0.1)]">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-white/5 transition-all duration-500 group-hover:scale-110 group-hover:bg-accent-${cat.accent}/20 text-accent-${cat.accent}`}>
                    {cat.icon}
                  </div>
                  <h3 className="text-sm md:text-base font-bold text-white group-hover:text-white transition-colors">
                    {cat.name}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {trustBadges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + idx * 0.1 }}
              className="flex items-center gap-3 text-white/40 font-medium"
            >
              <div className="text-accent-blue/60">{badge.icon}</div>
              <span className="text-xs uppercase tracking-widest">{badge.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
