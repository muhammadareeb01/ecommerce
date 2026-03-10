'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { PRODUCTS } from '@/data/mockData';
import { ShoppingCart, CheckCircle, Truck, CreditCard, Zap } from 'lucide-react';

const steps = [
  { icon: <ShoppingCart />, title: 'Choose Product', desc: 'Select from our premium catalog.' },
  { icon: <CheckCircle />, title: 'Add to Cart', desc: 'Review quantities for wholesale.' },
  { icon: <CreditCard />, title: 'Secure Checkout', desc: 'Pay via Crypto or Wire.' },
  { icon: <Truck />, title: 'Fast Dispatch', desc: 'Ships within 24-48 hours.' },
];

export default function BestSellers() {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 4);

  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3 sm:mb-4">Best Sellers</h2>
            <p className="text-sm sm:text-base text-white/50 max-w-xl">Our most popular devices and extracts, trusted by retailers nationwide.</p>
          </div>
          <Link href="/products" className="text-accent-blue font-bold flex items-center gap-2 hover:underline">
            View All Products
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {featuredProducts.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-6 group"
            >
              <div className="relative aspect-square mb-6 overflow-hidden rounded-xl bg-white/5">
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-full h-full p-4"
                >
                  <Image
                    src={"https://cdn.sanity.io/images/3zfeiea5/production/d1e5677ae70ea61d207543a1bcdc9b15518d1d77-1024x1024.jpg"}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                  />
                </motion.div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-accent-blue/20 backdrop-blur-md rounded-full border border-accent-blue/30">
                  <span className="text-[10px] font-black uppercase text-accent-blue">Elite</span>
                </div>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 line-clamp-1">{product.name}</h3>
              <div className="flex items-center justify-between mb-6">
                <span className="text-accent-teal font-black text-xl">${product.wholesalePrice.toFixed(2)}</span>
                <span className="text-white/30 text-xs">Min: {product.wholesaleMinQty} units</span>
              </div>

              <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold transition-all hover:bg-accent-blue hover:text-black hover:neon-glow-blue">
                Add to Cart
              </button>
            </motion.div>
          ))}
        </div>

        {/* How to Order Steps */}
        <div className="glass-card p-6 sm:p-8 md:p-12 border-accent-purple/20">
          <h3 className="text-xl sm:text-2xl font-black text-white text-center mb-8 sm:mb-12">How Ordering Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {[
              { icon: <ShoppingCart />, title: 'Browse & Select', desc: 'Choose products and add them to your cart.' },
              { icon: <CheckCircle />, title: 'Review Cart', desc: 'Verify your items before proceeding.' },
              { icon: <CreditCard />, title: 'Submit Request', desc: 'Confirm your cart and submit the form.' },
              { icon: <Zap />, title: 'Receive Invoice', desc: 'Payment details sent via Email/WhatsApp.' },
              { icon: <Truck />, title: 'Processing', desc: 'Shipped within 24-48 hours after payment.' },
            ].map((step, idx) => (
              <div key={idx} className="text-center relative">
                <div className="w-14 h-14 rounded-full bg-accent-purple/10 flex items-center justify-center mx-auto mb-6 text-accent-purple border border-accent-purple/30">
                  {step.icon}
                </div>
                <h4 className="text-white font-bold mb-2 text-sm">{step.title}</h4>
                <p className="text-white/40 text-[11px] leading-relaxed line-clamp-2 md:line-clamp-none">{step.desc}</p>
                {idx < 4 && (
                  <div className="hidden lg:block absolute top-7 left-[70%] w-full h-[1px] bg-gradient-to-r from-accent-purple/30 to-transparent" />
                )}
              </div>
            ))}
          </div>
          
          <div className="pt-8 border-t border-white/5 text-center">
            <p className="text-xs text-white/40 italic">
              <span className="text-accent-purple font-bold mr-1">NB:</span>
              After placing your order, you may contact support or send a WhatsApp message to confirm your request and speed up the processing time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

