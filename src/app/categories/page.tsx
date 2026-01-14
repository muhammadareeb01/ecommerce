'use client';
import { useState, useMemo } from 'react';
import { PRODUCTS, CATEGORIES } from '@/data/mockData';
import ProductCard from '@/components/ui/ProductCard';

export default function CategoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    let filtered = PRODUCTS;

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#eff6e0] py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 text-center max-w-4xl mx-auto animate-in slide-in-from-bottom-4 duration-700 fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-[#124559]/10 to-[#aec3b0]/10 blur-3xl rounded-full -z-10 max-w-2xl mx-auto h-64"></div>
          
          <span className="inline-block py-2 px-6 rounded-full bg-[#124559] text-[#eff6e0] text-xs font-black uppercase tracking-widest mb-4 shadow-lg">
            Browse Our Store
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-[#01161e] mb-4 tracking-tighter leading-tight">
            All Collections
          </h1>
          <p className="text-xl text-[#598392] leading-relaxed max-w-2xl mx-auto">
            Explore our premium selection of THC, Nicotine, and CBD vapes. Filter by category or search for specific products.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 max-w-2xl mx-auto animate-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-backwards">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 pl-14 rounded-2xl border-2 border-[#aec3b0] bg-white text-[#01161e] placeholder-[#598392] focus:outline-none focus:ring-2 focus:ring-[#124559] focus:border-transparent shadow-lg text-lg"
            />
            <svg className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-[#598392]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="mb-12 flex flex-wrap items-center justify-center gap-3 animate-in slide-in-from-bottom-12 duration-700 delay-200 fill-mode-backwards">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 ${
              selectedCategory === 'all'
                ? 'bg-[#124559] text-[#eff6e0] scale-105'
                : 'bg-white text-[#124559] hover:bg-[#eff6e0]'
            }`}
          >
            All Products ({PRODUCTS.length})
          </button>
          {CATEGORIES.map((cat) => {
            const count = PRODUCTS.filter(p => p.category === cat.slug).length;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5 ${
                  selectedCategory === cat.slug
                    ? 'bg-[#124559] text-[#eff6e0] scale-105'
                    : 'bg-white text-[#124559] hover:bg-[#eff6e0]'
                }`}
              >
                {cat.name} ({count})
              </button>
            );
          })}
        </div>

        {/* Results Count */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-black text-[#01161e]">
            {selectedCategory === 'all' 
              ? 'All Products' 
              : CATEGORIES.find(c => c.slug === selectedCategory)?.name || 'Products'
            }
          </h2>
          <span className="text-[#598392] font-bold">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'Item' : 'Items'}
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
          <div className="text-center py-20 bg-white/50 rounded-3xl border border-[#aec3b0]">
            <svg className="w-16 h-16 text-[#aec3b0] mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-2xl font-bold text-[#01161e] mb-2">No Products Found</h3>
            <p className="text-[#598392]">Try adjusting your search or filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
