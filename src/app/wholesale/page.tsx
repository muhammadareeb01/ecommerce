import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bulk Vapes Wholesale Distributor USA | Buy Vapes in Bulk',
  description: 'Trusted bulk vape wholesale supplier in the USA. We specialize in large-volume vape orders, offering transparent pricing, manual order verification, and flexible payment options.',
};

export default function WholesalePage() {
  return (
    <div className="bg-[#eff6e0] min-h-screen py-16 px-4 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
            <span className="text-[#124559] font-bold uppercase tracking-wider text-sm">Partner Program</span>
            <h1 className="text-4xl md:text-5xl font-black text-[#01161e] mt-2 mb-6">
                Wholesale Bulk Vapes Distributor in the USA
            </h1>
            <p className="text-xl text-[#598392] leading-relaxed max-w-2xl mx-auto">
                BulkVapes.us is a trusted bulk vape wholesale supplier serving businesses nationwide. We specialize in large-volume vape orders, offering transparent pricing, manual order verification, and flexible payment options.
            </p>
        </div>

        {/* Process Steps / Features */}
        <div className="grid gap-8 mb-20">
            <h2 className="text-3xl font-black text-[#01161e] text-center mb-8">Wholesale Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                    { title: 'Mix & Match Bulk Orders', desc: 'Combine different brands and flavors to meet MOQs without overstocking single items.' },
                    { title: 'Dedicated Account Support', desc: 'Get direct access to a wholesale agent for personalized service and order tracking.' },
                    { title: 'Crypto & Alternative Payments', desc: 'Secure payment options including Bitcoin, Ethereum, and USDT with instant discounts.' },
                    { title: 'Scalable Supply for Growing Businesses', desc: 'Consistent inventory and fast fulfillment for growing retail businesses.' }
                ].map((item, idx) => (
                    <div key={idx} className="bg-white p-8 rounded-3xl border border-[#aec3b0]/50 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                         <h3 className="text-xl font-bold text-[#124559] mb-3">{item.title}</h3>
                         <p className="text-[#598392] leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Info Cards (MOQ & Shipping) */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-[#01161e] text-[#eff6e0] p-10 rounded-[2.5rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#124559] rounded-full blur-3xl translate-x-10 -translate-y-10"></div>
                <h3 className="text-2xl font-black mb-4 relative z-10">Minimum Order (MOQ)</h3>
                <ul className="space-y-4 text-[#aec3b0] relative z-10 font-medium">
                    <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-[#eff6e0] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span>$500 Minimum Order Value</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-[#eff6e0] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span>10 Units Per SKU (Mix & Match allowed)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-[#eff6e0] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span>Valid Business ID required for tax verification.</span>
                    </li>
                </ul>
            </div>

            <div className="bg-[#eff6e0] border-2 border-[#124559] p-10 rounded-[2.5rem]">
                 <h3 className="text-2xl font-black text-[#01161e] mb-4">Shipping & Returns</h3>
                 <ul className="space-y-4 text-[#598392] font-medium">
                    <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-[#124559] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Free Shipping on orders over $2,000 (US Only).</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-[#124559] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Orders process within 24-48 hours.</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-[#124559] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        <span>Refunds handled on a case-by-case basis.</span>
                    </li>
                </ul>
            </div>
        </div>

        {/* CTA */}
        <div className="text-center">
             <Link href="/contact" className="inline-block px-12 py-5 bg-[#124559] text-[#eff6e0] font-black rounded-2xl hover:bg-[#01161e] transition-all shadow-xl hover:-translate-y-1 text-lg">
                Submit Wholesale Inquiry
            </Link>
             <p className="mt-4 text-[#598392] text-sm font-bold">Have questions? <Link href="/contact" className="underline hover:text-[#124559]">Contact Support</Link></p>
        </div>

      </div>
    </div>
  );
}
