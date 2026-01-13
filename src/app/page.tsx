import Image from 'next/image';
import Link from 'next/link';
import { Section } from '@/components/ui/Section';
import ProductCard from '@/components/ui/ProductCard';
import { PRODUCTS, HERO_CONTENT, REVIEWS } from '@/data/mockData';

export default function Home() {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[#eff6e0]">
      
      {/* 1. HERO SECTION (Updated UI) */}
      <div className="relative bg-[#01161e] text-[#eff6e0] min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
            <Image 
                src={HERO_CONTENT.backgroundImage}
                alt="Vape Smoke Background"
                fill
                className="object-cover"
                priority
            />
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#01161e] via-[#01161e]/90 to-transparent"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-center py-20">
             <div className="max-w-3xl animate-in slide-in-from-left-10 duration-700 fade-in">
                <span className="inline-block py-2 px-4 rounded-full bg-[#124559]/30 border border-[#aec3b0]/30 text-[#aec3b0] text-sm font-bold uppercase tracking-wider mb-8 backdrop-blur-md">
                   Wholesale Only &bull; 21+
                </span>
                <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-none mb-8 text-[#eff6e0]">
                    {HERO_CONTENT.headline.split('\n')[0]} <br />
                    <span className="text-[#aec3b0]">
                         {HERO_CONTENT.headline.split('\n')[1]}
                    </span>
                </h1>
                <p className="text-xl text-[#598392] max-w-xl mb-10 leading-relaxed font-light">
                    {HERO_CONTENT.subheadline}
                </p>
                <div className="flex flex-col sm:flex-row gap-5">
                    <Link href="/categories" className="px-10 py-4 bg-[#124559] text-[#eff6e0] font-bold rounded-2xl hover:bg-[#598392] transition-all shadow-xl shadow-[#01161e]/50 text-center text-lg transform hover:-translate-y-1">
                        {HERO_CONTENT.ctaPrimary}
                    </Link>
                    <Link href="/wholesale" className="px-10 py-4 bg-[#eff6e0]/10 backdrop-blur-sm border border-[#eff6e0]/20 text-[#eff6e0] font-bold rounded-2xl hover:bg-[#eff6e0]/20 transition-all text-center text-lg">
                        {HERO_CONTENT.ctaSecondary}
                    </Link>
                </div>
                
                <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-[#598392] font-medium">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#aec3b0] shadow-[0_0_10px_rgba(174,195,176,0.5)]"></div>
                        <span>Verified Distributor</span>
                    </div>
                    <div className="flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-[#124559] shadow-[0_0_10px_rgba(18,69,89,0.5)]"></div>
                        <span>Fast Global Shipping</span>
                    </div>
                </div>
             </div>
        </div>
      </div>

      {/* 2. BENEFITS SECTION (Clean Grid) */}
      <div className="bg-[#eff6e0] py-24 mb-12 rounded-b-[3rem] shadow-xl shadow-[#01161e]/5 relative z-10 border-b border-[#aec3b0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-[#124559] font-bold uppercase tracking-wider text-sm">Why Choose Us</span>
                <h2 className="text-3xl md:text-5xl font-black text-[#01161e] mt-3 tracking-tight">Built for Retailers</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { icon: 'M13 10V3L4 14h7v7l9-11h-7z', title: 'Lightning Fast Speed', desc: 'Orders processed within 24 hours. Priority shipping available for wholesale partners.' },
                    { icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Authenticity Guaranteed', desc: 'We source directly from manufacturers. 100% genuine products, every time.' },
                    { icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', title: 'Crypto Discounts', desc: 'Save 5% instantly when you pay with Bitcoin, Ethereum, or USDT.' }
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

 

      {/* FEATURED PRODUCTS (Moved below proof for flow) */}
       <Section>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4 px-4">
            <div>
                <span className="text-[#124559] font-bold uppercase tracking-wider text-sm">Best Sellers</span>
                <h2 className="text-3xl md:text-5xl font-black text-[#01161e] mt-3 tracking-tight">Trending Products</h2>
            </div>
            <Link href="/categories" className="px-8 py-3 bg-[#01161e] text-[#eff6e0] font-bold rounded-xl hover:bg-[#124559] transition-all shadow-lg hover:shadow-xl">
                View Full Catalog
            </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
            {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
          </Section>
          


               {/* 3. PROOF SECTION (Testimonials / Trust) */}

                <Section className="bg-[#01161e] text-[#eff6e0] rounded-[3rem] mx-4 md:mx-auto max-w-7xl py-24 mb-20 relative overflow-hidden shadow-2xl">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#124559]/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#aec3b0]/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="text-center mb-16 relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-[#eff6e0]">Trusted by 500+ Retailers</h2>
            <p className="text-[#598392] text-lg">See what our partners are saying about our service.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 px-4">
            {REVIEWS.map((review) => (
                <div key={review.id} className="bg-[#eff6e0]/5 backdrop-blur-lg border border-[#eff6e0]/10 p-8 rounded-3xl relative hover:bg-[#eff6e0]/10 transition-colors">
                    <div className="text-[#aec3b0] flex gap-1 mb-6">
                        {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                        ))}
                    </div>
                    <p className="text-lg text-[#eff6e0]/90 italic mb-8 leading-relaxed">"{review.text}"</p>
                    <div className="flex items-center gap-4 mt-auto">
                         <div className="w-12 h-12 bg-[#124559] rounded-full flex items-center justify-center font-bold text-[#eff6e0] text-xl shadow-lg border border-[#aec3b0]">
                            {review.author.charAt(0)}
                         </div>
                         <div>
                             <h4 className="font-bold text-[#eff6e0] text-base">{review.author}</h4>
                             <p className="text-sm text-[#aec3b0]">{review.role}</p>
                         </div>
                    </div>
                </div>
            ))}
        </div>
      </Section>

      {/* 4. CTA SECTION (Modern Upgrade) */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#124559] to-[#01161e] rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-[#124559]/40 border border-[#aec3b0]/20">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#aec3b0]/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#598392]/30 rounded-full blur-3xl"></div>

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
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <Link href="/categories" className="px-12 py-5 bg-[#eff6e0] text-[#01161e] font-black rounded-2xl hover:bg-[#aec3b0] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg flex items-center justify-center gap-2">
                           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                           Shop Wholesale
                        </Link>
                        <Link href="/contact" className="px-12 py-5 bg-[#124559]/40 backdrop-blur-md border border-[#eff6e0]/30 text-[#eff6e0] font-black rounded-2xl hover:bg-[#124559]/60 transition-all shadow-lg hover:-translate-y-1 text-lg">
                           Support 24/7
                        </Link>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}
