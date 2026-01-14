'use client';
import Link from 'next/link';
import { FAQS } from '@/data/mockData';

export default function FAQPage() {
  
  return (
    <div className="bg-[#eff6e0] min-h-screen py-16 px-4 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-700 fade-in">
          <span className="text-[#124559] font-bold uppercase tracking-wider text-sm">Help Center</span>
          <h1 className="text-4xl md:text-5xl font-black text-[#01161e] mt-2 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-[#598392] leading-relaxed max-w-2xl mx-auto">
            Find answers to your questions about our wholesale process, shipping, and payment options.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="bg-white rounded-3xl border border-[#aec3b0]/50 shadow-xl shadow-[#124559]/5 overflow-hidden animate-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-backwards">
          <div className="divide-y divide-[#aec3b0]/20">
            {FAQS.map((faq, idx) => (
              <details key={idx} className="group p-6 cursor-pointer bg-white hover:bg-[#eff6e0]/20 transition-colors duration-200">
                <summary className="flex items-center justify-between list-none">
                  <span className="font-bold text-[#124559] text-lg pr-4">{faq.question}</span>
                  <span className="flex-shrink-0 ml-4 p-2 bg-[#eff6e0] rounded-full text-[#124559] group-open:bg-[#124559] group-open:text-[#eff6e0] transition-all duration-300">
                    <svg className="w-4 h-4 transition-transform duration-300 group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="overflow-hidden bg-transparent">
                  <p className="text-[#598392] leading-relaxed mt-4 text-base animate-in fade-in slide-in-from-top-2 duration-300">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Still Have Questions? */}
        <div className="mt-20 text-center bg-[#01161e] text-[#eff6e0] rounded-[3rem] p-12 relative overflow-hidden animate-in slide-in-from-bottom-12 duration-700 delay-200 fill-mode-backwards">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#124559] rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h3 className="text-3xl font-black mb-4">Still have questions?</h3>
            <p className="text-[#aec3b0] mb-8 text-lg">Our support team is available 24/7 via Email or WhatsApp.</p>
            <Link href="/contact" className="inline-block px-10 py-4 bg-[#eff6e0] text-[#01161e] font-bold rounded-xl hover:bg-[#aec3b0] transition-colors">
              Contact Support
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
