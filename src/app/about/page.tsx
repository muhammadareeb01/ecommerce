'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Box, ShieldCheck, Truck, Zap, Package, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-24">
      {/* 1. Hero */}
      <section className="container mx-auto px-6 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6 animate-neon-pulse">
            Our Brand
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Pioneering the <span className="bg-gradient-to-r from-accent-blue to-accent-teal bg-clip-text text-transparent">Future of Vaping</span>
          </h1>
          <p className="text-white/60 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            Leading supplier of premium disposable vapes, cartridges, devices, and accessories built for performance, reliability, and style.
          </p>
        </motion.div>
      </section>

      {/* 2. Platform Overview */}
      <section className="container mx-auto px-6 max-w-5xl mb-24">
        <div className="glass-card p-8 md:p-12 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-4xl font-black text-white mb-6">Our Mission</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                We bridge the gap between cutting-edge hardware manufacturers and end consumers, providing a trusted platform for both singular purchases and large-scale wholesale operations. Our commitment to quality ensures that every product passing through our doors meets rigorous industry standards.
              </p>
              <div className="flex items-center gap-4 text-sm font-bold text-white/80">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="text-accent-blue" size={20} /> Verified
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="text-accent-teal" size={20} /> Worldwide
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-black text-white mb-2">50+</span>
                <span className="text-xs text-white/50 uppercase tracking-widest">Premium Brands</span>
              </div>
              <div className="glass-card p-6 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-black text-white mb-2">10k+</span>
                <span className="text-xs text-white/50 uppercase tracking-widest">Happy Customers</span>
              </div>
              <div className="glass-card p-6 flex flex-col items-center justify-center text-center col-span-2">
                <span className="text-3xl font-black text-white mb-2">24/7</span>
                <span className="text-xs text-white/50 uppercase tracking-widest">Dedicated Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What the Site Offers */}
      <section className="container mx-auto px-6 mb-24 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-12">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="glass-card p-8 group hover:border-accent-blue/30 transition-colors flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 text-accent-blue group-hover:bg-accent-blue/10 transition-colors">
              <Zap size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Latest Technology</h3>
            <p className="text-sm text-white/50 leading-relaxed">Access to the newest devices with advanced heating elements and long-lasting batteries.</p>
          </div>
          <div className="glass-card p-8 group hover:border-accent-purple/30 transition-colors flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 text-accent-purple group-hover:bg-accent-purple/10 transition-colors">
              <Box size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Extensive Variety</h3>
            <p className="text-sm text-white/50 leading-relaxed">A massive selection of disposables, cartridges, and accessories in every format and flavor.</p>
          </div>
          <div className="glass-card p-8 group hover:border-accent-teal/30 transition-colors flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-6 text-accent-teal group-hover:bg-accent-teal/10 transition-colors">
              <Truck size={32} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Swift Logistics</h3>
            <p className="text-sm text-white/50 leading-relaxed">Optimized fulfillment centers ensuring your order is processed quickly and delivered securely.</p>
          </div>
        </div>
      </section>

      {/* 4. Category Pathways */}
      <section className="container mx-auto px-6 mb-24 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-black text-white mb-8 border-b border-white/10 pb-4 text-center md:text-left">Explore Our Collection</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: 'Disposable Vapes', href: '/categories/disposable-vapes' },
            { name: '510 Cartridges', href: '/categories/510-cartridges' },
            { name: 'Wax Pens', href: '/categories/wax-pens' },
            { name: 'Accessories', href: '/categories/accessories' },
          ].map((cat, idx) => (
            <Link key={idx} href={cat.href} className="glass-card p-6 flex flex-col items-center justify-center text-center group hover:border-accent-blue/30 transition-colors">
               <Package className="text-white/40 mb-4 group-hover:text-accent-blue transition-colors" size={24} />
               <span className="font-bold text-white text-sm">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* 5. Wholesale & 6. Contact */}
      <section className="container mx-auto px-6 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-card p-8 md:p-10 border-accent-purple/20 flex flex-col justify-between items-start text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-purple/10 border border-accent-purple/30 text-accent-purple text-[10px] font-bold uppercase tracking-widest mb-4">
                B2B Opportunities
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Wholesale Program</h3>
              <p className="text-sm text-white/60 mb-8 leading-relaxed">
                Scale your retail business with our competitive bulk pricing, dedicated account managers, and priority fulfillment line.
              </p>
            </div>
            <Link href="/wholesale" className="btn-neon-purple inline-flex items-center gap-2 px-6 py-3 text-sm">
              View Program <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="glass-card p-8 md:p-10 border-accent-blue/20 flex flex-col justify-between items-start text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-[10px] font-bold uppercase tracking-widest mb-4">
                Get In Touch
              </div>
              <h3 className="text-2xl font-black text-white mb-4">Need Assistance?</h3>
              <p className="text-sm text-white/60 mb-8 leading-relaxed">
                Our support team is standing by to assist you with orders, product inquiries, or platform feedback. Response times under 24 hours.
              </p>
            </div>
            <Link href="/contact" className="btn-neon-blue inline-flex items-center gap-2 px-6 py-3 text-sm">
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
