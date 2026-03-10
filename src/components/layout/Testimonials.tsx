'use client';
import { motion } from 'framer-motion';
import { REVIEWS } from '@/data/mockData';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white mb-3 sm:mb-4">Customer Testimonials</h2>
          <p className="text-xs sm:text-sm md:text-base text-white/40">Real stories from our high-performance product users.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                zIndex: 10,
                boxShadow: '0 0 50px rgba(0, 210, 255, 0.15)' 
              }}
              className="glass-card p-10 relative cursor-default transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-accent-blue/10">
                <Quote size={48} />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i} className="text-accent-teal text-lg">★</span>
                ))}
              </div>

              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-lg text-white/80 italic leading-relaxed mb-8"
              >
                "{review.text}"
              </motion.p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 flex items-center justify-center font-bold text-white border border-white/10">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{review.author}</h4>
                  <p className="text-sm text-white/30">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
