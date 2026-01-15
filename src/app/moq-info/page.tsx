export default function MoqPage() {
  return (
    <div className="bg-[#eff6e0] min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Header */}
        <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-700 fade-in">
          <span className="inline-block py-2 px-4 rounded-full bg-[#124559]/10 text-[#124559] text-sm font-bold uppercase tracking-wider mb-4">
            Order Requirements
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-[#01161e] mb-4 tracking-tight">
            MOQ Information
          </h1>
          <p className="text-xl text-[#598392] max-w-2xl mx-auto">
            Understanding our minimum order quantities for wholesale pricing
          </p>
        </div>

        {/* General MOQ Highlight */}
        <div className="bg-gradient-to-br from-[#124559] to-[#01161e] rounded-3xl p-8 md:p-12 shadow-2xl border border-[#eff6e0]/20 text-white mb-12 relative overflow-hidden animate-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-backwards">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#aec3b0]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-400/10 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <div className="w-20 h-20 bg-[#eff6e0]/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-[#eff6e0]/20">
              <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Minimum Order: $500</h2>
            <p className="text-[#aec3b0] text-lg max-w-2xl mx-auto">
              To maintain our wholesale pricing structure and ensure the best value for our partners, we require a minimum total order value of <span className="text-white font-bold">$500.00 USD</span>. Orders below this threshold cannot be processed through our wholesale portal.
            </p>
          </div>
        </div>

        {/* Product Specific MOQs */}
        <div className="mb-12">
          <h2 className="text-3xl font-black text-[#01161e] mb-8 text-center">Product Specific Requirements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Disposable Vapes */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#aec3b0]/50 hover:shadow-2xl transition-all hover:-translate-y-1 animate-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-backwards">
              <div className="w-16 h-16 bg-gradient-to-br from-[#124559] to-[#598392] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-[#eff6e0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-[#01161e] mb-4">Disposable Vapes</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#124559]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#124559] font-bold text-xs">✓</span>
                  </div>
                  <span className="text-[#598392]">Sold in display boxes (typically 10 units per box)</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#124559]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#124559] font-bold text-xs">✓</span>
                  </div>
                  <span className="text-[#598392]"><strong className="text-[#01161e]">Minimum:</strong> 5 boxes per order</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#124559]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#124559] font-bold text-xs">✓</span>
                  </div>
                  <span className="text-[#598392]">Mix and match flavors available</span>
                </div>
              </div>
            </div>

            {/* E-Liquids */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#aec3b0]/50 hover:shadow-2xl transition-all hover:-translate-y-1 animate-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-backwards">
              <div className="w-16 h-16 bg-gradient-to-br from-[#598392] to-[#aec3b0] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-[#eff6e0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-[#01161e] mb-4">E-Liquids</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#124559]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#124559] font-bold text-xs">✓</span>
                  </div>
                  <span className="text-[#598392]"><strong className="text-[#01161e]">Minimum:</strong> 20 bottles per order</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#124559]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#124559] font-bold text-xs">✓</span>
                  </div>
                  <span className="text-[#598392]">Can mix flavors and nicotine strengths</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#124559]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#124559] font-bold text-xs">✓</span>
                  </div>
                  <span className="text-[#598392]">Available in 30ml, 60ml, and 100ml sizes</span>
                </div>
              </div>
            </div>

            {/* Hardware */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#aec3b0]/50 hover:shadow-2xl transition-all hover:-translate-y-1 animate-in slide-in-from-bottom-8 duration-700 delay-400 fill-mode-backwards">
              <div className="w-16 h-16 bg-gradient-to-br from-[#01161e] to-[#124559] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-[#eff6e0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black text-[#01161e] mb-4">Hardware & Kits</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#124559]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#124559] font-bold text-xs">✓</span>
                  </div>
                  <span className="text-[#598392]"><strong className="text-[#01161e]">Minimum:</strong> 5 kits per order</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#124559]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#124559] font-bold text-xs">✓</span>
                  </div>
                  <span className="text-[#598392]">Includes mods, pod systems, and starter kits</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#124559]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-[#124559] font-bold text-xs">✓</span>
                  </div>
                  <span className="text-[#598392]">Replacement coils and pods available</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Sample Orders */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#aec3b0]/50 mb-12 animate-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-backwards">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 bg-gradient-to-br from-[#124559] to-[#01161e] rounded-3xl flex items-center justify-center shadow-xl">
                <svg className="w-12 h-12 text-[#eff6e0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-3xl font-black text-[#01161e] mb-4">Sample Orders Available</h2>
              <p className="text-[#598392] leading-relaxed text-lg mb-4">
                We understand the need to test products before committing to larger orders. Sample orders below the MOQ can be arranged by contacting your account manager directly.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-[#eff6e0] px-4 py-2 rounded-full border border-[#aec3b0]">
                  <svg className="w-5 h-5 text-[#124559]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-[#01161e] font-bold text-sm">Retail Pricing Applies</span>
                </div>
                <div className="flex items-center gap-2 bg-[#eff6e0] px-4 py-2 rounded-full border border-[#aec3b0]">
                  <svg className="w-5 h-5 text-[#124559]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-[#01161e] font-bold text-sm">Contact Account Manager</span>
                </div>
                <div className="flex items-center gap-2 bg-[#eff6e0] px-4 py-2 rounded-full border border-[#aec3b0]">
                  <svg className="w-5 h-5 text-[#124559]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-[#01161e] font-bold text-sm">Limited Quantities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-[#eff6e0] to-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#aec3b0]/50 animate-in slide-in-from-bottom-8 duration-700 delay-600 fill-mode-backwards">
          <h2 className="text-3xl font-black text-[#01161e] mb-8 text-center">Why Our MOQ Structure Benefits You</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#01161e] mb-2">Better Margins</h3>
                <p className="text-[#598392]">Wholesale pricing ensures maximum profitability for your business</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#01161e] mb-2">Inventory Variety</h3>
                <p className="text-[#598392]">Mix and match products to build a diverse inventory</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#01161e] mb-2">Fast Processing</h3>
                <p className="text-[#598392]">Streamlined fulfillment for orders meeting MOQ requirements</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-[#01161e] mb-2">Quality Assurance</h3>
                <p className="text-[#598392]">All products are 100% authentic and verified</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center animate-in slide-in-from-bottom-8 duration-700 delay-700 fill-mode-backwards">
          <p className="text-[#598392] mb-6 text-lg">Questions about MOQ requirements?</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#124559] text-[#eff6e0] font-bold rounded-xl hover:bg-[#01161e] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
            <span>Contact Support Team</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
}
