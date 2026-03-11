'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
    q: string;
    a: string;
}

interface HomeFaqProps {
    faqs?: FAQ[];
    title?: string;
    subtitle?: string;
    showViewAll?: boolean;
    theme?: 'light' | 'dark';
}

const DEFAULT_FAQS = [
    { q: "What is the Minimum Order Quantity (MOQ)?", a: "Our general MOQ for wholesale accounts is $500 per order, or 50 units for specific product lines to ensure wholesale pricing." },
    { q: "How do I pay with Crypto?", a: "Select 'Crypto Payment' at the order form. You will receive a 10% discount instantly. We accept BTC, ETH, and USDT." },
    { q: "Are your products authentic?", a: "Yes, we guarantee 100% authenticity. We source directly from manufacturers and authorized distributors." }
];

export default function HomeFaq({ 
    faqs = DEFAULT_FAQS, 
    title = "Common Questions", 
    subtitle = "Got Questions?", 
    showViewAll = true,
    theme = 'light'
}: HomeFaqProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const isDark = theme === 'dark';

    return (
        <section className={`py-20 max-w-4xl mx-auto px-4 ${isDark ? 'text-white' : 'text-[#01161e]'}`}>
            <div className="text-center mb-12">
                <span className={`font-bold uppercase tracking-wider text-sm ${isDark ? 'text-accent-blue' : 'text-[#124559]'}`}>{subtitle}</span>
                <h2 className={`text-3xl md:text-5xl font-black mt-2 tracking-tight ${isDark ? 'text-white' : 'text-[#01161e]'}`}>{title}</h2>
            </div>
            
            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        key={i} 
                        className={`transition-all duration-300 rounded-2xl overflow-hidden border ${
                            isDark 
                            ? (openIndex === i ? 'bg-white/5 border-white/20 shadow-xl' : 'bg-transparent border-white/10 hover:border-white/20')
                            : (openIndex === i ? 'bg-white border-[#124559] shadow-lg ring-1 ring-[#124559]/20' : 'bg-white border-[#aec3b0] shadow-sm hover:border-[#598392]')
                        }`}
                    >
                        <button 
                            onClick={() => toggleFaq(i)}
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                        >
                            <h3 className={`text-lg font-bold transition-colors ${
                                openIndex === i 
                                ? (isDark ? 'text-accent-blue' : 'text-[#124559]')
                                : (isDark ? 'text-white' : 'text-[#01161e]')
                            }`}>
                                {faq.q}
                            </h3>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                                openIndex === i 
                                ? 'bg-accent-blue text-black rotate-180' 
                                : (isDark ? 'bg-white/5 text-white' : 'bg-[#eff6e0] text-[#124559]')
                            }`}>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>
                        
                        <AnimatePresence>
                            {openIndex === i && (
                                <motion.div 
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <p className={`px-6 pb-6 leading-relaxed border-t pt-4 mt-2 ${
                                        isDark 
                                        ? 'text-white/60 border-white/10' 
                                        : 'text-[#598392] border-[#eff6e0]'
                                    }`}>
                                        {faq.a}
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </div>

            {showViewAll && (
                <div className="text-center mt-10">
                    <Link href="/faq" className={`font-bold underline ${isDark ? 'text-accent-blue hover:text-white' : 'text-[#124559] hover:text-[#01161e]'}`}>
                        View All FAQs →
                    </Link>
                </div>
            )}
        </section>
    );
}
