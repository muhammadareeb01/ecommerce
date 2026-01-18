'use client';
import Link from 'next/link';
import { useState, useMemo } from 'react';
import ProductCard from '@/components/ui/ProductCard';

interface CategoriesClientProps {
  initialProducts: any[];
  initialCategories: any[];
  pageContent?: {
    heading?: string;
    description?: string;
  };
}

export default function CategoriesPage({ 
  initialProducts = [], 
  initialCategories = [], 
  pageContent 
}: CategoriesClientProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let filtered = initialProducts;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description?.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [searchQuery, initialProducts]);

  return (
    <div className="min-h-screen bg-[#eff6e0] py-16 px-4 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 text-center max-w-4xl mx-auto animate-in slide-in-from-bottom-4 duration-700 fade-in relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-gradient-to-r from-[#124559]/5 via-[#aec3b0]/10 to-[#124559]/5 blur-3xl rounded-[3rem] -z-10"></div>
          
          <span className="inline-block py-2 px-6 rounded-full bg-[#124559] text-[#eff6e0] text-xs font-black uppercase tracking-widest mb-6 shadow-xl shadow-[#124559]/20 transform hover:scale-105 transition-transform cursor-default">
             Wholesale Catalog
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#01161e] mb-6 tracking-tighter leading-tight drop-shadow-sm">
            {pageContent?.heading || "Shop All Products"}
          </h1>
          <p className="text-xl md:text-2xl text-[#598392] leading-relaxed max-w-3xl mx-auto font-medium whitespace-pre-line mb-8">
            {pageContent?.description || "Explore our complete inventory of bulk disposable vapes, cartridges, and hardware."}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-12 max-w-2xl mx-auto animate-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-backwards relative z-10">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#124559]/5 rounded-3xl blur-xl transition-all duration-300 group-hover:bg-[#124559]/10"></div>
            <input
              type="text"
              placeholder="Search products by name or brand..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-8 py-5 pl-16 rounded-3xl border-2 border-white/50 bg-white/80 backdrop-blur-xl text-[#01161e] placeholder-[#598392]/70 focus:outline-none focus:ring-4 focus:ring-[#124559]/30 focus:border-[#124559] shadow-lg transition-all text-xl font-medium"
            />
            <svg className="absolute left-6 top-1/2 -translate-y-1/2 w-7 h-7 text-[#124559]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Category Navigation (Links) */}
        <div className="mb-16 flex flex-wrap items-center justify-center gap-3 animate-in slide-in-from-bottom-12 duration-700 delay-200 fill-mode-backwards">
          <Link
            href="/categories"
            className="px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 border bg-[#124559] text-[#eff6e0] border-[#124559] scale-105 cursor-default"
          >
            All Products
          </Link>
{initialCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/category/${cat.slug}`}
              className="px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 border bg-white text-[#598392] border-[#aec3b0]/50 hover:bg-[#eff6e0] hover:text-[#124559]"
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Results Header */}
        <div className="mb-8 flex items-center justify-between border-b border-[#aec3b0]/30 pb-4">
           <h2 className="text-2xl font-black text-[#01161e] tracking-tight">
              Available Inventory
           </h2>
           <span className="bg-[#124559]/10 text-[#124559] px-4 py-1.5 rounded-full text-sm font-black uppercase tracking-wide">
              {filteredProducts.length} Items
           </span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-in fade-in duration-500">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white/40 rounded-[3rem] border border-[#aec3b0]/30 backdrop-blur-sm">
            <div className="inline-block p-6 bg-[#eff6e0] rounded-full mb-6">
                <svg className="w-12 h-12 text-[#124559]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h3 className="text-3xl font-black text-[#01161e] mb-2">No Products Found</h3>
            <p className="text-[#598392] text-lg">Try adjusting your search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
}
