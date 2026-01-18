'use client';
import Link from 'next/link';
import Image from 'next/image';
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
  categoriesWithProducts = [], 
  pageContent 
}: { categoriesWithProducts: any[], pageContent: any }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return categoriesWithProducts;

    const query = searchQuery.toLowerCase();
    
    return categoriesWithProducts.map(cat => ({
      ...cat,
      products: cat.products.filter((p: any) => 
        p.name.toLowerCase().includes(query) ||
        (p.description && p.description.toLowerCase().includes(query))
      )
    })).filter(cat => cat.products.length > 0);
  }, [searchQuery, categoriesWithProducts]);

  return (
    <div className="min-h-screen bg-[#eff6e0] py-16 px-4 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 text-center max-w-4xl mx-auto animate-in slide-in-from-bottom-4 duration-700 fade-in relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[150%] bg-gradient-to-r from-[#124559]/5 via-[#aec3b0]/10 to-[#124559]/5 blur-3xl rounded-[3rem] -z-10"></div>
          
          <span className="inline-block py-2 px-6 rounded-full bg-[#124559] text-[#eff6e0] text-xs font-black uppercase tracking-widest mb-6 shadow-xl shadow-[#124559]/20 cursor-default">
             Wholesale Catalog
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-[#01161e] mb-6 tracking-tighter leading-tight drop-shadow-sm">
            {pageContent?.heading || "Shop All Products"}
          </h1>
          <p className="text-xl md:text-2xl text-[#598392] leading-relaxed max-w-3xl mx-auto font-medium whitespace-pre-line mb-8">
            {pageContent?.description || "Explore our complete inventory of bulk Disposable Vapes, Cartridges, and Hardware."}
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-20 max-w-2xl mx-auto animate-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-backwards relative z-10">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#124559]/5 rounded-3xl blur-xl transition-all duration-300 group-hover:bg-[#124559]/10"></div>
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-8 py-5 pl-16 rounded-3xl border-2 border-white/50 bg-white/80 backdrop-blur-xl text-[#01161e] placeholder-[#598392]/70 focus:outline-none focus:ring-4 focus:ring-[#124559]/30 focus:border-[#124559] shadow-lg transition-all text-xl font-medium"
            />
            <svg className="absolute left-6 top-1/2 -translate-y-1/2 w-7 h-7 text-[#124559]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Categories Stack */}
        <div className="space-y-24">
            {filteredCategories.map((category) => (
                <div key={category._id} className="animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <div className="flex flex-col mb-8 border-b border-[#aec3b0] pb-6">
                        <div className="flex items-center gap-4 mb-4">
                          {category.image && (
                            <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl overflow-hidden shadow-md border border-[#aec3b0]/50 shrink-0">
                                <Image 
                                    src={category.image} 
                                    alt={category.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                          )}
                          <h2 className="text-3xl md:text-5xl font-black text-[#01161e] tracking-tight">
                              {category.title}
                          </h2>
                        </div>
                        {category.description && (
                            <p className="text-[#598392] text-lg max-w-3xl leading-relaxed">
                                {category.description}
                            </p>
                        )}
                    </div>

                    {category.products && category.products.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {category.products.map((product: any) => (
                                <ProductCard key={product._id} product={{...product, id: product._id}} />
                            ))}
                        </div>
                    ) : (
                        <p className="text-[#598392] italic">No products found in this category.</p>
                    )}
                    
                     <div className="mt-8 md:hidden text-center">
                        <Link href={`/category/${category.slug}`} className="inline-block px-6 py-2 border border-[#124559] rounded-full text-[#124559] font-bold text-sm">
                            View All {category.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-24 bg-white/40 rounded-[3rem] border border-[#aec3b0]/30 backdrop-blur-sm">
            <h3 className="text-3xl font-black text-[#01161e] mb-2">No Products Found</h3>
            <p className="text-[#598392] text-lg">Try adjusting your search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
}
