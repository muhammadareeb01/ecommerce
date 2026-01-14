'use client';
import { useState } from 'react';
import { PRODUCTS, FAQS } from '@/data/mockData';
import ProductCard from '@/components/ui/ProductCard';

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(product => 
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#eff6e0] py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Enhanced Header Section */}
        <div className="mb-16 text-center max-w-4xl mx-auto animate-in slide-in-from-bottom-4 duration-700 fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-[#124559]/10 to-[#aec3b0]/10 blur-3xl rounded-full -z-10 max-w-2xl mx-auto h-64"></div>
          
          <span className="inline-block py-2 px-6 rounded-full bg-[#124559] text-[#eff6e0] text-xs font-black uppercase tracking-widest mb-4 shadow-lg">
            Full Catalog
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-[#01161e] mb-6 tracking-tighter leading-tight">
            All Products
          </h1>
          <p className="text-xl text-[#598392] leading-relaxed max-w-2xl mx-auto mb-8">
            Browse our complete collection of premium vapes. From high-potency THC disposables to smooth nicotine devices and wellness-focused CBD options - we've got everything you need at wholesale prices.
          </p>
          <div className="w-24 h-1 bg-[#aec3b0] mx-auto rounded-full"></div>
        </div>

        {/* Search Bar */}
        <div className="mb-12 max-w-2xl mx-auto animate-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-backwards">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search for products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-14 rounded-2xl border-2 border-[#aec3b0] bg-white text-[#01161e] placeholder-[#598392] focus:outline-none focus:ring-2 focus:ring-[#124559] focus:border-transparent shadow-lg text-lg"
            />
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-[#598392]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-black text-[#01161e]">All Products</h2>
          <span className="text-[#598392] font-bold">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Item' : 'Items'}
          </span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-24">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white/50 rounded-3xl border border-[#aec3b0] mb-24">
            <div className="text-[#aec3b0] mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-[#01161e] mb-2">No products found</h3>
            <p className="text-[#598392]">Try checking your spelling or search for something else.</p>
          </div>
        )}

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-24 animate-in slide-in-from-bottom-16 duration-700">
          <div className="text-center mb-10">
            <span className="text-[#124559] font-bold uppercase tracking-wider text-sm">Got Questions?</span>
            <h2 className="text-3xl md:text-4xl font-black text-[#01161e] mt-2">Frequently Asked Questions</h2>
          </div>
          
          <div className="bg-white rounded-3xl border border-[#aec3b0]/50 shadow-xl shadow-[#124559]/5 overflow-hidden">
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
        </div>

      </div>
    </div>
  );
}
