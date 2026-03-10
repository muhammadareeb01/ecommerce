'use client';
import { motion } from 'framer-motion';
import { CreditCard, ShieldCheck, Zap, Truck, Globe } from 'lucide-react';

const cards = [
  {
    icon: <Zap className="text-accent-blue" size={32} />,
    title: 'Modern Ecosystem',
    desc: 'From high-capacity disposables to advanced refillable systems and 510 cartridges.',
  },
  {
    icon: <Globe className="text-accent-purple" size={32} />,
    title: 'Market Evolution',
    desc: 'The vape industry is rapidly evolving with safer materials and efficient delivery tech.',
  },
  {
    icon: <Truck className="text-accent-teal" size={32} />,
    title: 'Reliable Supply',
    desc: 'Consistent availability of top-tier products for both individual and wholesale needs.',
  },
];

export default function IndustryOverview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Industry Evolution</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            The vape industry has moved beyond simple devices into a complex ecosystem of high-performance hardware and premium extracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="glass-card glass-card-hover p-8 group"
            >
              <motion.div 
                whileHover={{ rotate: 10 }}
                className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 transition-colors group-hover:bg-white/10"
              >
                {card.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-4">{card.title}</h3>
              <p className="text-white/50 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Crypto Offer Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card p-1 md:p-12 relative overflow-hidden border-accent-blue/20"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-xs font-bold uppercase tracking-widest mb-4 animate-neon-pulse">
                5% Discount
              </div>
              <h3 className="text-3xl font-black text-white mb-2">Pay with Cryptocurrency</h3>
              <p className="text-white/60 max-w-md">
                Secure, fast, and verified. Get an instant 5% discount on all orders made with BTC, ETH, or USDT.
              </p>
            </div>
            
            <div className="flex gap-4">
              <div className="glass-card p-6 flex flex-col items-center gap-2 border-white/10 w-32">
                <div className="text-orange-500 font-bold text-2xl">₿</div>
                <span className="text-xs text-white/40">Bitcoin</span>
              </div>
              <div className="glass-card p-6 flex flex-col items-center gap-2 border-white/10 w-32">
                <div className="text-blue-500 font-bold text-2xl">◆</div>
                <span className="text-xs text-white/40">Ethereum</span>
              </div>
              <div className="glass-card p-6 flex flex-col items-center gap-2 border-white/10 w-32 text-accent-teal">
                <ShieldCheck size={24} />
                <span className="text-xs text-white/40">Verified</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
