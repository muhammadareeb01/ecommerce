'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Package, Truck, Briefcase, ShoppingCart, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';

const categories = [
  { id: 'all', label: 'All FAQs' },
  { id: 'products', label: 'Products', icon: <Package size={16} /> },
  { id: 'shipping', label: 'Shipping', icon: <Truck size={16} /> },
  { id: 'wholesale', label: 'Wholesale', icon: <Briefcase size={16} /> },
  { id: 'ordering', label: 'Ordering', icon: <ShoppingCart size={16} /> },
];

const faqs = [
  {
    category: 'products',
    question: 'Are your products authentic?',
    answer: 'Yes, all our products are 100% authentic and sourced directly from licensed manufacturers. We guarantee the quality and safety of every item in our inventory.',
  },
  {
    category: 'products',
    question: 'What types of products do you offer?',
    answer: 'We offer a wide range of premium products including disposables, cartridges, hardware, and accessories from top industry leading brands.',
  },
  {
    category: 'shipping',
    question: 'How long does shipping take?',
    answer: 'Orders are typically processed within 24 hours. Domestic delivery takes 2-5 business days, while international shipping can take 7-14 business days depending on the destination.',
  },
  {
    category: 'shipping',
    question: 'Do you offer discreet shipping?',
    answer: 'Yes, all orders are shipped in plain, unmarked packaging to ensure your privacy and security.',
  },
  {
    category: 'wholesale',
    question: 'How do I apply for a wholesale account?',
    answer: 'You can apply for a wholesale account by visiting our Wholesale page and filling out the application form. Our B2B team will review your application within 1-2 business days.',
  },
  {
    category: 'wholesale',
    question: 'What is the minimum order quantity (MOQ) for wholesale?',
    answer: 'Our MOQ varies by product category. Please contact our wholesale team or check our MOQ Info page for specific details.',
  },
  {
    category: 'ordering',
    question: 'What payment methods do you accept?',
    answer: 'We accept major credit cards, bank transfers, and cryptocurrencies (BTC, ETH, USDT). Paying with crypto gives you an automatic 10% discount on your order.',
  },
  {
    category: 'ordering',
    question: 'Can I track my order?',
    answer: 'Yes, once your order is dispatched, you will receive an email confirmation with a tracking number and a link to track your package.',
  },
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredFaqs = faqs.filter(
    (faq) => activeCategory === 'all' || faq.category === activeCategory
  );

  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-24">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-xs font-bold uppercase tracking-widest mb-6 animate-neon-pulse">
            Support Center
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Frequently Asked <span className="bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-white/60 text-base sm:text-lg md:text-xl leading-relaxed">
            Find answers to common questions about our products, shipping, wholesale programs, and ordering process.
          </p>
        </motion.div>
      </section>

      {/* FAQ Navigation & Content */}
      <section className="container mx-auto px-6 max-w-5xl mb-24">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Navigation Filters */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-64 shrink-0"
          >
            <div className="glass-card p-4 md:sticky md:top-32">
              <h3 className="text-white font-bold mb-4 px-2 uppercase tracking-widest text-sm text-white/50 hidden md:block">Categories</h3>
              <div className="flex flex-row overflow-x-auto md:flex-col gap-2 pb-2 md:pb-0 scrollbar-hide">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setOpenIndex(null);
                    }}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm min-w-max md:min-w-0 md:w-full text-left
                      ${activeCategory === cat.id 
                        ? 'bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 text-white border border-white/10' 
                        : 'text-white/60 hover:bg-white/5 hover:text-white border border-transparent'
                      }`}
                  >
                    {cat.icon && <span className={`${activeCategory === cat.id ? 'text-accent-blue' : 'text-white/40'}`}>{cat.icon}</span>}
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* FAQ Accordion Groups */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            <div className="flex flex-col gap-4">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className={`glass-card overflow-hidden border transition-colors ${isOpen ? 'border-accent-blue/30' : 'border-white/5 hover:border-white/10'}`}
                    >
                      <button
                        onClick={() => setOpenIndex(isOpen ? null : idx)}
                        className="w-full flex items-center justify-between p-5 md:p-6 text-left"
                      >
                        <span className={`font-bold text-base md:text-lg pr-4 md:pr-8 transition-colors ${isOpen ? 'text-white' : 'text-white/80'}`}>
                          {faq.question}
                        </span>
                        <ChevronDown 
                          size={20} 
                          className={`shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent-blue' : 'text-white/40'}`} 
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                          >
                            <div className="px-5 md:px-6 pb-5 md:pb-6 text-sm md:text-base text-white/60 leading-relaxed border-t border-white/5 pt-4">
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })
              ) : (
                <div className="glass-card p-12 text-center text-white/50">
                  No questions found for this category.
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Commercial Links */}
      <section className="container mx-auto px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-4">Still Need Help?</h2>
            <p className="text-white/50">Explore more resources or get in touch with our team.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <Link href="/products" className="glass-card p-6 md:p-8 group hover:border-accent-blue/30 transition-colors flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue mb-4 group-hover:scale-110 transition-transform">
                <Package size={24} />
              </div>
              <h3 className="text-white font-bold mb-2">Shop Categories</h3>
              <p className="text-xs text-white/50 mb-4 px-2">Browse our premium selection of devices and extracts.</p>
              <div className="mt-auto flex items-center gap-2 text-accent-blue text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                Explore <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            
            <Link href="/wholesale" className="glass-card p-6 md:p-8 group hover:border-accent-purple/30 transition-colors flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent-purple/10 flex items-center justify-center text-accent-purple mb-4 group-hover:scale-110 transition-transform">
                <Briefcase size={24} />
              </div>
              <h3 className="text-white font-bold mb-2">Wholesale Program</h3>
              <p className="text-xs text-white/50 mb-4 px-2">Partner with us for unbeatable bulk B2B pricing.</p>
              <div className="mt-auto flex items-center gap-2 text-accent-purple text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>

            <Link href="/blog" className="glass-card p-6 md:p-8 group hover:border-accent-teal/30 transition-colors flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-accent-teal/10 flex items-center justify-center text-accent-teal mb-4 group-hover:scale-110 transition-transform">
                <BookOpen size={24} />
              </div>
              <h3 className="text-white font-bold mb-2">Read Our Blog</h3>
              <p className="text-xs text-white/50 mb-4 px-2">Stay updated with industry news and user guides.</p>
              <div className="mt-auto flex items-center gap-2 text-accent-teal text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                Read Articles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
