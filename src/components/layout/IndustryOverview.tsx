'use client';
import { motion } from 'framer-motion';
import { CreditCard, ShieldCheck, Zap, Truck, Globe, Headphones } from 'lucide-react';

const cards = [
  {
    icon: <ShieldCheck className="text-accent-blue" size={32} />,
    title: 'Quality Products',
    desc: 'Every item in our inventory undergoes strict quality checks to ensure safety and reliable performance.',
  },
  {
    icon: <Headphones className="text-accent-purple" size={32} />,
    title: '24/7 Customer Support',
    desc: 'Our dedicated support team is available around the clock to assist you with inquiries and orders.',
  },
  {
    icon: <Truck className="text-accent-teal" size={32} />,
    title: 'Fast & Secure Delivery',
    desc: 'We guarantee prompt dispatch with discreet packaging to ensure your order arrives safely and on time.',
  },
];

export default function IndustryOverview() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">Industry Evolution</h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
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
          className="glass-card p-6 sm:p-8 md:p-12 relative overflow-hidden border-accent-blue/20"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 relative z-10">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-3 sm:mb-4 animate-neon-pulse">
                10% Discount
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-2 leading-tight">Pay with Cryptocurrency</h3>
              <p className="text-white/60 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
                Secure, fast, and verified. Get an instant 10% discount on all orders made with BTC, ETH, or USDT.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 w-full lg:w-auto">
              {[
                { label: 'Bitcoin', icon: '₿', color: 'text-orange-500' },
                { label: 'Ethereum', icon: '◆', color: 'text-blue-500' },
                { label: 'Verified', icon: <ShieldCheck size={20} className="sm:size-[24px]" />, color: 'text-accent-teal' }
              ].map((item, i) => (
                <div key={i} className="glass-card p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center gap-1 sm:gap-2 border-white/10 min-w-[70px] sm:min-w-[80px] md:w-32 aspect-square">
                  <div className={`${typeof item.icon === 'string' ? item.color + ' text-xl sm:text-2xl' : item.color} font-bold`}>
                    {item.icon}
                  </div>
                  <span className="text-[9px] sm:text-[10px] md:text-xs text-white/40 font-bold uppercase tracking-tight text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
