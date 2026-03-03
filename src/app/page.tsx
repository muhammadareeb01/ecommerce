import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import CategoriesSection from '@/components/layout/CategoriesSection';
import HomeFaq from '@/components/ui/HomeFaq';
import { REVIEWS } from '@/data/mockData';
import { client } from '@/sanity/lib/client';
import { GET_ALL_CATEGORIES_QUERY, GET_HOME_PAGE_CONTENT_QUERY } from '@/sanity/lib/queries';
import Hero from '@/components/layout/Hero';
import IntroSection from '@/components/layout/IntroSection';
import BestSellers from '@/components/layout/BestSellers';

export const metadata = {
  title: 'Bulk Vapes Wholesale USA | Buy Disposable Vapes in Bulk & Pay with Crypto',
  description: 'Buy bulk vapes online at wholesale prices in the USA. Disposable vapes, nicotine, THC & THCA vapes in bulk. Pay with BTC, ETH, USDT & get 10% crypto discount.',
};

export const dynamic = 'force-dynamic';

export default async function Home() {
  const categories = await client.fetch(GET_ALL_CATEGORIES_QUERY);
  const homeContent = await client.fetch(GET_HOME_PAGE_CONTENT_QUERY);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#eff6e0]">
      
      {/* 1. HERO SECTION */}
      <Hero homeContent={homeContent} />

      {/* 1.5 NEW INTRO SECTION */}
      <IntroSection homeContent={homeContent} />

      {/* BEST SELLERS TITLE */}
      {/* <BestSellers /> */}

      {/* 1.5 CATEGORIES SECTION */}
      <div className="pt-20">
        <CategoriesSection />
      </div>

      {/* 2. WHY BUY SECTION */}
      <div className="bg-[#eff6e0] py-24 mb-12 shadow-xl shadow-[#01161e]/5 relative z-10 border-b border-[#aec3b0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[#124559] font-bold uppercase tracking-wider text-sm">Why Choose Us</span>
                <h2 className="text-3xl md:text-5xl font-black text-[#01161e] mt-3 tracking-tight">Why We are the Best Place to Buy Bulk Disposable Vapes</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: 'M12 8c-1.657 0-3 .89zz10V3L4 14h7v7l9-11h-7z', title: 'Fast & Discreet', desc: 'Fast & discreet USA shipping. We understand the importance of timely delivery.' },
                    { icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Manual Review', desc: 'Every order is manually reviewed for accuracy and compliance supports.' },
                    { icon: 'M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z', title: 'Crypto Payments', desc: 'We accept BTC, ETH, and USDT (TRC20). Secure, private, and efficient.' },
                    { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: '10% Discount', desc: 'Get an instant 10% discount when paying with cryptocurrency.' }
                ].map((item, idx) => (
                    <div key={idx} className="bg-[#eff6e0] rounded-3xl p-8 hover:shadow-xl transition-all duration-300 border-2 border-[#aec3b0] hover:border-[#598392] hover:-translate-y-2">
                        <div className="w-16 h-16 bg-[#124559]/10 rounded-2xl flex items-center justify-center mb-6 text-[#124559]">
                             <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                            </svg>
                        </div>
                        <h3 className="text-xl font-bold text-[#01161e] mb-3">{item.title}</h3>
                        <p className="text-[#598392] leading-relaxed font-medium">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
      
      {/* 2.5 CRYPTO PAYMENT SECTION */}
      <section className="py-20 px-4 bg-[#01161e] text-[#eff6e0] relative overflow-hidden mb-12">
           <div className="absolute top-0 right-0 w-96 h-96 bg-[#124559]/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#aec3b0]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
           
           <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-12">
                     <span className="inline-block py-2 px-6 rounded-full bg-orange-500/20 text-orange-300 text-sm font-bold uppercase tracking-widest mb-4 border border-orange-500/30">
                        Smart Savings
                     </span>
                     <h2 className="text-4xl md:text-5xl font-black mb-6">Pay with Crypto & Get 10% Off Your Bulk Order</h2>
                     <p className="text-xl text-[#aec3b0] max-w-2xl mx-auto mb-10">
                        Crypto payments are fast, secure, and discounted. Wallet addresses are displayed at checkout after order submission.
                     </p>
                     
                     <div className="flex flex-wrap justify-center gap-6 mb-12">
                        <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-xl border border-white/10">
                            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center font-bold text-white text-xs">₿</div>
                            <span className="font-bold text-lg">Bitcoin (BTC)</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-xl border border-white/10">
                             <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center font-bold text-white text-xs">◆</div>
                             <span className="font-bold text-lg">Ethereum (ETH)</span>
                        </div>
                        <div className="flex items-center gap-3 bg-white/5 px-6 py-3 rounded-xl border border-white/10">
                             <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center font-bold text-white text-xs">T</div>
                             <span className="font-bold text-lg">USDT (TRC20)</span>
                        </div>
                     </div>
                </div>
           </div>
      </section>

      {/* 3. PROOF SECTION */}
      <Section className="bg-[#124559] text-[#eff6e0] rounded-[3rem] mx-4 md:mx-auto max-w-7xl py-24 mb-20 relative overflow-hidden shadow-2xl">
        <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-[#eff6e0]">Trusted by 500+ Retailers</h2>
            <p className="text-[#aec3b0] text-lg">See what our partners are saying about our service.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 px-8">
            {REVIEWS.map((review) => (
                <div key={review.id} className="bg-[#eff6e0]/5 backdrop-blur-lg border border-[#eff6e0]/10 p-8 rounded-3xl relative hover:bg-[#eff6e0]/10 transition-colors">
                    {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-[#aec3b0] mr-1">★</span>
                    ))}
                    <p className="text-lg text-[#eff6e0]/90 italic my-6 leading-relaxed">"{review.text}"</p>
                    <div className="flex items-center gap-4 mt-auto">
                         <div className="w-10 h-10 bg-[#01161e] rounded-full flex items-center justify-center font-bold text-[#eff6e0] border border-[#aec3b0]">
                            {review.author.charAt(0)}
                         </div>
                         <div>
                             <h4 className="font-bold text-[#eff6e0] text-sm">{review.author}</h4>
                             <p className="text-xs text-[#aec3b0]">{review.role}</p>
                         </div>
                    </div>
                </div>
            ))}
        </div>
      </Section>

      {/* 3.5 FAQ PREVIEW */}
      <HomeFaq />

      {/* 4. INTERNAL LINKS & CTA */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#124559] to-[#01161e] rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-[#124559]/40 border border-[#aec3b0]/20">
            <div className="relative z-10">
                <span className="inline-block py-1 px-4 rounded-full bg-[#eff6e0]/10 text-[#eff6e0]/90 text-sm font-bold uppercase tracking-widest mb-6 backdrop-blur-md border border-[#eff6e0]/20">
                    Join the Revolution
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-[#eff6e0] mb-6 tracking-tight leading-tight">
                    Ready to Stock Up?
                </h2>
                <p className="text-xl md:text-2xl text-[#aec3b0] max-w-3xl mx-auto mb-12 leading-relaxed">
                    Scale your business with premium products and unbeatable wholesale margins.
                </p>
                
                <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
                        <Link href="/cart" className="px-12 py-5 bg-[#eff6e0] text-[#01161e] font-black rounded-2xl hover:bg-[#aec3b0] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg flex items-center justify-center gap-2">
                           Request Bulk Order
                        </Link>
                        <Link href="/contact" className="px-12 py-5 bg-[#124559]/40 backdrop-blur-md border border-[#eff6e0]/30 text-[#eff6e0] font-black rounded-2xl hover:bg-[#124559]/60 transition-all shadow-lg hover:-translate-y-1 text-lg">
                           Contact Wholesale Team
                        </Link>
                </div>

                <div className="flex flex-wrap justify-center gap-4 text-[#aec3b0] font-medium text-sm">
                   <Link href="/cart" className="hover:text-white underline">Order Bulk Vapes Wholesale</Link>
                   <span className="opacity-50">•</span>
                   <Link href="/contact" className="hover:text-white underline">Contact Our Wholesale Team</Link>
                   <span className="opacity-50">•</span>
                   <Link href="/faq" className="hover:text-white underline">Read Bulk Vape FAQs</Link>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}
