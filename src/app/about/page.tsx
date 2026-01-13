import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="bg-[#eff6e0] min-h-screen font-sans">
      
      {/* HERO SECTION */}
      <div className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="/images/about-hero.png" // Generated warehouse image
          alt="Bulk Vapes Warehouse"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#01161e]/95 to-[#124559]/80 mix-blend-multiply" />
        <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black text-[#eff6e0] mb-6 tracking-tight leading-tight uppercase drop-shadow-lg">
                The Future of <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#aec3b0] to-white">Wholesale Vaping</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#aec3b0] max-w-2xl font-light leading-relaxed mb-10 drop-shadow-md">
                We bridge the gap between premium global brands and American retailers. 
                Experience efficiency, authenticity, and unmatched growth.
            </p>
            <div>
                <Link href="/wholesale" className="inline-block bg-[#eff6e0] text-[#01161e] px-10 py-4 rounded-full font-black text-lg uppercase tracking-wider hover:bg-[#aec3b0] hover:scale-105 transition-all shadow-xl">
                    Partner With Us
                </Link>
            </div>
        </div>
      </div>

      {/* MISSION & VALUES */}
      <section className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-[#124559] text-sm font-black uppercase tracking-[0.2em] mb-4">Our Mission</h2>
                <h3 className="text-4xl md:text-5xl font-bold text-[#01161e] mb-8 leading-tight">
                    Empowering retailers with streamlined supply chains.
                </h3>
                <p className="text-[#598392] text-lg leading-loose mb-6">
                    At Bulk Vapes, we don't just move boxes. We engineer supply chain solutions that help vape shops thrive in a competitive market. By eliminating middlemen and guaranteeing authenticity, we ensure your shelves are stocked with the best products at the best margins.
                </p>
                <div className="flex gap-4 mt-8">
                    <div className="pl-6 border-l-4 border-[#124559]">
                        <p className="text-[#01161e] font-bold text-xl">100%</p>
                        <p className="text-[#598392] text-sm uppercase font-bold">Authentic</p>
                    </div>
                    <div className="pl-6 border-l-4 border-[#124559] opacity-70">
                        <p className="text-[#01161e] font-bold text-xl">24h</p>
                        <p className="text-[#598392] text-sm uppercase font-bold">Dispatch</p>
                    </div>
                </div>
            </div>
            
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl skew-y-3 md:skew-y-0 hover:skew-y-1 transition-all duration-700 group">
                <Image
                    src="/images/about-hero.png" // Reusing image for impact, but cropped differently via object-cover
                    alt="Warehouse Operations"
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#124559]/20 group-hover:bg-transparent transition-colors" />
            </div>
        </div>
      </section>

      {/* WHY CHOOSE US CARDS */}
      <section className="bg-[#01161e] py-24 text-[#eff6e0]">
         <div className="max-w-7xl mx-auto px-6 md:px-20">
            <div className="text-center mb-20">
                <h2 className="text-4xl font-black uppercase tracking-tight mb-4">Why Leaders Choose Us</h2>
                <div className="h-1 w-20 bg-[#aec3b0] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                    { title: "Direct Sourcing", desc: "We skip the middlemen to bring you factory-direct pricing on top brands.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
                    { title: "Compliant & Safe", desc: "Fully PACT Act compliant shipping and age verification processes.", icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
                    { title: "Rapid Logistics", desc: "Warehouses strategically located for 2-day shipping to most states.", icon: "M3 13h8V3h-8v10zm0 8h8v-6h-8v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" }
                ].map((card, i) => (
                    <div key={i} className="bg-[#124559]/30 p-10 rounded-3xl border border-[#aec3b0]/10 hover:border-[#aec3b0]/50 hover:bg-[#124559] transition-all group">
                         <div className="w-16 h-16 bg-[#eff6e0] rounded-2xl flex items-center justify-center text-[#01161e] mb-8 group-hover:rotate-12 transition-transform">
                            {/* Simple Icon Placeholders */}
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                            </svg>
                         </div>
                         <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                         <p className="text-[#aec3b0] leading-relaxed group-hover:text-[#eff6e0]">{card.desc}</p>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-32 px-6 text-center">
         <h2 className="text-4xl md:text-6xl font-black text-[#01161e] mb-8 tracking-tighter">
            READY TO DOMINATE <br/> YOUR MARKET?
         </h2>
         <p className="text-xl text-[#598392] mb-12 font-medium">Join 5,000+ retailers stocking the best.</p>
         <Link href="/wholesale" className="inline-block bg-[#124559] text-[#eff6e0] px-12 py-5 rounded-full font-black text-xl uppercase tracking-wider hover:bg-[#01161e] hover:shadow-2xl hover:-translate-y-1 transition-all">
            Open Wholesale Account
         </Link>
      </section>

    </div>
  );
}
