import Link from 'next/link';
import { Section } from '@/components/ui/Section';

export default function WholesalePage() {
  return (
    <div className="min-h-screen bg-[#eff6e0] font-sans">
      
      {/* Hero Banner */}
      <div className="bg-[#01161e] text-[#eff6e0] py-24 relative overflow-hidden rounded-b-[4rem] shadow-2xl">
         <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
         {/* Glow effects */}
         <div className="absolute top-10 left-10 w-64 h-64 bg-[#124559] rounded-full blur-[100px] opacity-40"></div>
         <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#aec3b0] rounded-full blur-[100px] opacity-20"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="text-[#aec3b0] font-bold uppercase tracking-[0.2em] mb-4 block">B2B Partners Only</span>
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-[#eff6e0]">
              Wholesale <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#aec3b0] to-[#598392]">Program</span>
            </h1>
            <p className="text-xl text-[#598392] max-w-2xl mx-auto leading-relaxed">
              Unlock tiered pricing, priority shipping, and exclusive access to the hottest vape products on the market.
            </p>
         </div>
      </div>

      <Section className="px-4">
        {/* Benefits Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-16 relative z-20">
            {[
                { title: "Tiered Pricing", desc: "Unlock deeper discounts as your order volume grows.", icon: "$" },
                { title: "Priority Support", desc: "Dedicated account manager available via WhatsApp.", icon: "★" },
                { title: "Fast Shipping", desc: "Same-day dispatch for orders placed before 2PM EST.", icon: "✈" },
                { title: "Low MOQs", desc: "Start small with just $500 minimum order value.", icon: "📉" },
            ].map((item, i) => (
                <div key={i} className="bg-[#eff6e0] border-2 border-[#aec3b0] p-8 rounded-3xl shadow-xl hover:-translate-y-2 transition-transform duration-300">
                    <div className="w-12 h-12 bg-[#124559] rounded-xl flex items-center justify-center text-[#eff6e0] text-2xl font-bold mb-4 shadow-lg">
                        {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#01161e] mb-2">{item.title}</h3>
                    <p className="text-[#598392] text-sm font-medium">{item.desc}</p>
                </div>
            ))}
        </div>

        {/* MOQ Table Section */}
        <div className="max-w-4xl mx-auto mt-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-black text-[#01161e] mb-4">Minimum Order Quantities (MOQ)</h2>
                <p className="text-[#598392]">Transparent requirements for our wholesale partners.</p>
            </div>
            
            <div className="bg-white rounded-[2rem] shadow-xl overflow-hidden border border-[#aec3b0]/50">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-[#124559] text-[#eff6e0]">
                            <th className="p-6 font-bold uppercase text-sm tracking-wider">Product Category</th>
                            <th className="p-6 font-bold uppercase text-sm tracking-wider">Min Qty</th>
                            <th className="p-6 font-bold uppercase text-sm tracking-wider hidden sm:table-cell">Notes</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#aec3b0]/30">
                        {[
                            { cat: "Disposable Vapes", qty: "50 Units", note: "Mix & Match flavors allowed (min 10 per flavor)" },
                            { cat: "E-Liquids", qty: "20 Bottles", note: "Minimum 5 per strength/flavor" },
                            { cat: "Pod Systems", qty: "10 Kits", note: "Includes 1 pack of replacement pods per kit" },
                            { cat: "Coils / Pods", qty: "10 Packs", note: "Sold in display boxes only" },
                        ].map((row, idx) => (
                            <tr key={idx} className="hover:bg-[#eff6e0]/50 transition-colors">
                                <td className="p-6 font-bold text-[#01161e]">{row.cat}</td>
                                <td className="p-6 text-[#124559] font-bold">{row.qty}</td>
                                <td className="p-6 text-[#598392] text-sm hidden sm:table-cell">{row.note}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                 <div className="p-6 bg-[#eff6e0] border-t border-[#aec3b0]/30 text-center">
                    <p className="text-[#01161e] font-bold">
                        Total Order Value Minimum: <span className="text-[#124559]">$500.00</span>
                    </p>
                </div>
            </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 mb-10">
            <div className="inline-block p-1 bg-gradient-to-r from-[#124559] to-[#aec3b0] rounded-2xl">
                 <div className="bg-[#eff6e0] rounded-[14px] p-8 md:p-12">
                    <h2 className="text-3xl md:text-4xl font-black text-[#01161e] mb-6">Ready to Partner?</h2>
                    <p className="text-[#598392] max-w-lg mx-auto mb-8">
                        Browse our catalog and start adding items to your cart. 
                        The checkout process handles the rest.
                    </p>
                    <Link href="/categories" className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-[#eff6e0] transition-all duration-200 bg-[#124559] rounded-xl hover:bg-[#01161e] shadow-lg hover:shadow-xl hover:-translate-y-1">
                        Start Your Order
                    </Link>
                 </div>
            </div>
        </div>

      </Section>
    </div>
  );
}
