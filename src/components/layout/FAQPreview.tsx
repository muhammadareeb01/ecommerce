'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Plus } from 'lucide-react';

const faqs = [
  {
    question: 'How do I place a wholesale order?',
    answer: 'Simply add your desired products and quantities to the cart. Once you submit your order, our dedicated wholesale team will review it and contact you within 24 hours with a custom invoice and payment instructions.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept Bitcoin (BTC), Ethereum (ETH), and USDT (TRC-20) for immediate processing with a 5% discount. We also support secure bank wire transfers for larger wholesale orders.',
  },
  {
    question: 'Is shipping discreet?',
    answer: 'Yes, all orders are shipped in plain, unmarked packaging to ensure privacy and security. We provide tracking information for every shipment.',
  },
  {
    question: 'Do you ship internationally?',
    answer: 'We primarily serve the USA market with fast domestic shipping, but we also handle international wholesale requests on a case-by-case basis. Contact our team for a quote.',
  },
];

export default function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Common Questions</h2>
          <p className="text-white/40">Everything you need to know about our products and services.</p>
        </div>

        <div className="space-y-4 mb-16">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`glass-card transition-all duration-300 ${openIndex === idx ? 'border-accent-blue/30 ring-1 ring-accent-blue/10' : 'hover:border-white/10'}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between"
              >
                <span className="text-lg font-bold text-white/90">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  className="text-accent-blue"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-white/50 leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/faq" className="btn-neon-blue group inline-flex items-center gap-2">
            View All FAQs
          </Link>
        </div>
      </div>
    </section>
  );
}
