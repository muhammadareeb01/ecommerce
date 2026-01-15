export default function DistributorPage() {
  return (
    <div className="bg-[#eff6e0] min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Header */}
        <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-700 fade-in">
          <span className="inline-block py-2 px-4 rounded-full bg-[#124559]/10 text-[#124559] text-sm font-bold uppercase tracking-wider mb-4">
            Partnership Programs
          </span>
          <h1 className="text-5xl md:text-6xl font-black text-[#01161e] mb-4 tracking-tight">
            Distributor Information
          </h1>
          <p className="text-xl text-[#598392] max-w-2xl mx-auto">
            Scale your distribution network with our comprehensive partnership programs
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          
          {/* Master Distributor */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#aec3b0]/50 hover:shadow-2xl transition-all hover:-translate-y-1 animate-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-backwards">
            <div className="w-16 h-16 bg-gradient-to-br from-[#124559] to-[#01161e] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-8 h-8 text-[#eff6e0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-[#01161e] mb-4">Master Distributor Program</h3>
            <p className="text-[#598392] leading-relaxed mb-6">
              Are you a regional distributor looking to expand your portfolio? We offer sub-distribution programs that give you access to our master pricing tiers.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-[#01161e] font-medium">Exclusive master pricing tiers</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-[#01161e] font-medium">Dedicated account manager</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-[#01161e] font-medium">Priority inventory allocation</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-[#01161e] font-medium">Marketing support & materials</span>
              </div>
            </div>
          </div>

          {/* Drop Shipping */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#aec3b0]/50 hover:shadow-2xl transition-all hover:-translate-y-1 animate-in slide-in-from-bottom-8 duration-700 delay-200 fill-mode-backwards">
            <div className="w-16 h-16 bg-gradient-to-br from-[#598392] to-[#124559] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
              <svg className="w-8 h-8 text-[#eff6e0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-[#01161e] mb-4">Drop Shipping Services</h3>
            <p className="text-[#598392] leading-relaxed mb-6">
              We offer blind drop-shipping services for approved online retailers. Let us handle the warehousing and logistics while you focus on sales and marketing.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-[#01161e] font-medium">Blind shipping (no branding)</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-[#01161e] font-medium">Same-day processing available</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-[#01161e] font-medium">Real-time inventory sync</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
                <span className="text-[#01161e] font-medium">Automated tracking updates</span>
              </div>
            </div>
          </div>

          {/* Private Labeling */}
          <div className="bg-gradient-to-br from-[#124559] to-[#01161e] rounded-3xl p-8 shadow-xl border border-[#eff6e0]/20 text-white md:col-span-2 animate-in slide-in-from-bottom-8 duration-700 delay-300 fill-mode-backwards relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#aec3b0]/10 rounded-full blur-3xl"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <div className="w-16 h-16 bg-[#eff6e0]/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 border border-[#eff6e0]/20">
                    <svg className="w-8 h-8 text-[#aec3b0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-black mb-4">Private Labeling & OEM/ODM</h3>
                  <p className="text-[#aec3b0] leading-relaxed mb-6 text-lg">
                    Looking to launch your own brand? Our OEM/ODM partnerships allow us to help you design, manufacture, and import your own line of disposables or e-liquids.
                  </p>
                  <a href="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#eff6e0] text-[#01161e] font-bold rounded-xl hover:bg-[#aec3b0] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                    <span>Schedule Consultation</span>
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
                <div className="flex-1 space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h4 className="font-bold text-lg mb-2 text-[#aec3b0]">Custom Design</h4>
                    <p className="text-white/80 text-sm">Work with our design team to create unique packaging and branding</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h4 className="font-bold text-lg mb-2 text-[#aec3b0]">Manufacturing</h4>
                    <p className="text-white/80 text-sm">Access to verified manufacturers with quality control</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <h4 className="font-bold text-lg mb-2 text-[#aec3b0]">Import & Compliance</h4>
                    <p className="text-white/80 text-sm">We handle all import logistics and regulatory compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Requirements Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#aec3b0]/50 animate-in slide-in-from-bottom-8 duration-700 delay-400 fill-mode-backwards">
          <h2 className="text-3xl font-black text-[#01161e] mb-8 text-center">Partnership Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-[#124559]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#124559]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-[#01161e] mb-2">Business License</h3>
              <p className="text-[#598392] text-sm">Valid tobacco/vape retail or wholesale license required</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#124559]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#124559]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-[#01161e] mb-2">Minimum Volume</h3>
              <p className="text-[#598392] text-sm">$5,000+ monthly order volume for distributor programs</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 bg-[#124559]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-[#124559]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-[#01161e] mb-2">Compliance</h3>
              <p className="text-[#598392] text-sm">Age verification and PACT Act compliance mandatory</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center animate-in slide-in-from-bottom-8 duration-700 delay-500 fill-mode-backwards">
          <p className="text-[#598392] mb-6 text-lg">Ready to become a distribution partner?</p>
          <a href="/contact" className="inline-flex items-center gap-2 px-10 py-4 bg-[#124559] text-[#eff6e0] font-bold rounded-xl hover:bg-[#01161e] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1">
            <span>Contact Our Partnership Team</span>
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </a>
        </div>

      </div>
    </div>
  );
}
