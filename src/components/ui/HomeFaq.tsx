'use client';

import { useState } from 'react';
import Link from 'next/link';

const FAQS = [
    { q: "What is the Minimum Order Quantity (MOQ)?", a: "Our general MOQ for wholesale accounts is $500 per order, or 50 units for specific product lines to ensure wholesale pricing." },
    { q: "How do I pay with Crypto?", a: "Select 'Crypto Payment' at the order form. You will receive a 10% discount instantly. We accept BTC, ETH, and USDT." },
    { q: "Are your products authentic?", a: "Yes, we guarantee 100% authenticity. We source directly from manufacturers and authorized distributors." }
];

export default function HomeFaq() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
                <span className="text-[#124559] font-bold uppercase tracking-wider text-sm">Got Questions?</span>
                <h2 className="text-3xl md:text-5xl font-black text-[#01161e] mt-2 tracking-tight">Common Questions</h2>
            </div>
            
            <div className="space-y-4">
                {FAQS.map((faq, i) => (
                    <div 
                        key={i} 
                        className={`bg-white border transition-all duration-300 rounded-2xl overflow-hidden ${openIndex === i ? 'border-[#124559] shadow-lg ring-1 ring-[#124559]/20' : 'border-[#aec3b0] shadow-sm hover:border-[#598392]'}`}
                    >
                        <button 
                            onClick={() => toggleFaq(i)}
                            className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                        >
                            <h3 className={`text-lg font-bold transition-colors ${openIndex === i ? 'text-[#124559]' : 'text-[#01161e]'}`}>
                                {faq.q}
                            </h3>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === i ? 'bg-[#124559] text-white rotate-180' : 'bg-[#eff6e0] text-[#124559]'}`}>
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </button>
                        
                        <div 
                            className={`transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                        >
                            <p className="px-6 pb-6 text-[#598392] leading-relaxed border-t border-[#eff6e0] pt-4 mt-2">
                                {faq.a}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-10">
                <Link href="/faq" className="text-[#124559] font-bold underline hover:text-[#01161e]">
                    View All FAQs →
                </Link>
            </div>
        </section>
    );
}
