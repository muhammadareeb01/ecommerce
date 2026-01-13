'use client';
import { Section } from '@/components/ui/Section';
import { FAQS } from '@/data/mockData';
import { useState } from 'react';

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="bg-[#eff6e0] min-h-screen">
      <div className="bg-[#01161e] text-[#eff6e0] py-20 rounded-b-[4rem] shadow-xl mb-12 relative overflow-hidden">
         {/* Background decor */}
         <div className="absolute top-0 right-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#124559] rounded-full blur-3xl opacity-50"></div>
         
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-[#aec3b0] font-bold uppercase tracking-widest text-sm mb-4 block">Help Center</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Frequently Asked Questions</h1>
            <p className="text-[#598392] text-lg max-w-2xl mx-auto">
                Everything you need to know about wholesale ordering, shipping, and payments.
            </p>
         </div>
      </div>

      <Section className="max-w-3xl -mt-20 relative z-20">
        <div className="space-y-4">
            {FAQS.map((faq, idx) => (
                <div 
                    key={idx} 
                    className={`bg-[#eff6e0] rounded-2xl transition-all duration-300 border-2 ${openIndex === idx ? 'border-[#124559] shadow-xl scale-[1.02]' : 'border-[#aec3b0] shadow-sm hover:border-[#598392]'}`}
                >
                    <button 
                        onClick={() => toggleFaq(idx)}
                        className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                    >
                        <span className={`text-lg md:text-xl font-bold transition-colors ${openIndex === idx ? 'text-[#124559]' : 'text-[#01161e]'}`}>
                            {faq.question}
                        </span>
                        
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ml-4 flex-shrink-0 ${openIndex === idx ? 'bg-[#124559] text-[#eff6e0] rotate-180' : 'bg-[#aec3b0]/20 text-[#124559]'}`}>
                             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                    </button>
                    
                    <div 
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                        <div className="p-6 md:p-8 pt-0 text-[#598392] leading-relaxed font-medium border-t border-[#aec3b0]/10 mt-2">
                            {faq.answer}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        <div className="mt-20 text-center">
            <div className="inline-block p-1 bg-gradient-to-r from-[#124559] to-[#aec3b0] rounded-2xl">
                <div className="bg-[#eff6e0] rounded-xl px-10 py-8">
                    <p className="text-[#01161e] font-bold text-lg mb-2">Still have questions?</p>
                    <p className="text-[#598392] mb-6">Our support team is available 24/7 on WhatsApp.</p>
                    <a href="/contact" className="inline-flex items-center gap-2 text-[#124559] font-black hover:underline text-lg">
                        Contact Support 
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </a>
                </div>
            </div>
        </div>
      </Section>
    </div>
  );
}
