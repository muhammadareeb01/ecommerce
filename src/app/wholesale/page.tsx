import Link from 'next/link';

export const metadata = {
  title: 'Wholesale Information | Bulk Vapes USA',
  description: 'Learn about our wholesale process, MOQs, and shipping policies.',
};

export default function WholesalePage() {
  return (
    <div className="bg-[#eff6e0] min-h-screen py-16 px-4 sm:px-8 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
            <span className="text-[#124559] font-bold uppercase tracking-wider text-sm">Partner Program</span>
            <h1 className="text-4xl md:text-5xl font-black text-[#01161e] mt-2 mb-6">
                Wholesale Made Simple
            </h1>
            <p className="text-xl text-[#598392] leading-relaxed max-w-2xl mx-auto">
                We streamline the sourcing process so you can focus on growing your retail business. No hidden fees, just great margins.
            </p>
        </div>

        {/* Process Steps */}
        <div className="grid gap-12 mb-20 relative">
            <div className="absolute left-8 top-8 bottom-8 w-1 bg-[#aec3b0]/30 hidden md:block"></div>
            
            {[
                { step: '01', title: 'Browse Catalog', desc: 'Explore our extensive range of top-tier vape products. Filtering by THC, Nicotine, or CBD to find exactly what your customers want.' },
                { step: '02', title: 'No Account Needed', desc: 'Add items directly to your cart. We do not require a lengthy signup process. Just browse and build your order.' },
                { step: '03', title: 'Submit Request', desc: 'Head to checkout and submit your order request. You can choose to pay via Crypto (10% off) or Bank Wire.' },
                { step: '04', title: 'We Contact You', desc: 'Our team will review your order details and contact you via Email or WhatsApp to finalize payment and shipping.' }
            ].map((item, idx) => (
                <div key={idx} className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start group">
                     <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#124559] text-[#eff6e0] flex items-center justify-center font-black text-2xl shadow-lg shadow-[#124559]/20 z-10 border-4 border-[#eff6e0]">
                        {item.step}
                     </div>
                     <div className="bg-white p-8 rounded-3xl border border-[#aec3b0]/50 shadow-sm flex-grow group-hover:shadow-md transition-shadow">
                        <h3 className="text-2xl font-bold text-[#01161e] mb-3">{item.title}</h3>
                        <p className="text-[#598392] leading-relaxed">{item.desc}</p>
                     </div>
                </div>
            ))}
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
                        <span>10 Units Per SKU (Mix & Match allowed for samples)</span>
                    </li>
                    <li className="flex items-start gap-3">
                        <svg className="w-6 h-6 text-[#eff6e0] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span>Must provide valid Business ID for tax verification (handled after checkout).</span>
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
                        <span>Damaged items must be reported within 48 hours of delivery for full credit.</span>
                    </li>
                </ul>
            </div>
        </div>

        {/* CTA */}
        <div className="text-center">
             <Link href="/products" className="inline-block px-12 py-5 bg-[#124559] text-[#eff6e0] font-black rounded-2xl hover:bg-[#01161e] transition-all shadow-xl hover:-translate-y-1 text-lg">
                Start My Order
            </Link>
             <p className="mt-4 text-[#598392] text-sm font-bold">Have questions? <Link href="/contact" className="underline hover:text-[#124559]">Contact Support</Link></p>
        </div>

      </div>
    </div>
  );
}
