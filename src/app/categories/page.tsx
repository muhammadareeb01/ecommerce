'use client';
import { useState, useMemo } from 'react';
import { Section } from '@/components/ui/Section';
import ProductCard from '@/components/ui/ProductCard';
import { PRODUCTS, CATEGORIES } from '@/data/mockData';

export default function StorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('featured'); // featured, price-asc, price-desc, name-asc, name-desc
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Derived state for filtered products
  const filteredProducts = useMemo(() => {
    let result = [...PRODUCTS];

    // 1. Search Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q)
      );
    }

    // 2. Category Filter
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    // 3. Sorting
    switch (sortOption) {
      case 'price-low-high':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-a-z':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-z-a':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Keep original order (Featured)
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, sortOption]);

  return (
    <div className="pt-8 min-h-screen bg-[#eff6e0] font-sans">
      <Section className="bg-[#eff6e0]">
        
        {/* HEADER & SEARCH */}
        <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-black text-[#01161e] mb-2 tracking-tight uppercase">
                STORE
                <div className="h-1.5 w-24 bg-[#124559] mx-auto mt-4 rounded-full"></div>
            </h1>
            
            <div className="max-w-2xl mx-auto mt-8 relative flex items-center gap-2">
                 <div className="relative flex-grow">
                    <input 
                        type="text" 
                        placeholder="Search products..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-6 pr-4 py-4 rounded-2xl border-2 border-[#aec3b0] focus:border-[#124559] outline-none text-[#01161e] font-bold shadow-sm transition-colors text-lg"
                    />
                    <svg className="w-6 h-6 absolute right-4 top-1/2 -translate-y-1/2 text-[#598392]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                 </div>
                 <button className="bg-[#124559] text-[#eff6e0] px-8 py-4 rounded-2xl font-black uppercase tracking-wider hover:bg-[#01161e] transition-all shadow-lg hidden sm:block">
                    Search
                 </button>
            </div>
        </div>

        {/* TOOLBAR */}
        <div className="max-w-7xl mx-auto px-4 mb-10 flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Sort Dropdown */}
            <div className="relative group z-20">
                <select 
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}
                    className="appearance-none bg-white pl-6 pr-12 py-3 rounded-xl border border-[#aec3b0] text-[#01161e] font-bold cursor-pointer focus:ring-2 focus:ring-[#124559] outline-none shadow-sm hover:border-[#124559] transition-colors"
                >
                    <option value="featured">Sort by: Featured</option>
                    <option value="price-low-high">Price: Low to High</option>
                    <option value="price-high-low">Price: High to Low</option>
                    <option value="name-a-z">Name: A - Z</option>
                    <option value="name-z-a">Name: Z - A</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[#124559]">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-3">
                 <button 
                    onClick={() => setSelectedCategory('all')}
                    className={`px-5 py-2 rounded-full border-2 font-bold transition-all ${selectedCategory === 'all' ? 'bg-[#124559] text-[#eff6e0] border-[#124559]' : 'bg-transparent text-[#598392] border-[#aec3b0] hover:border-[#124559] hover:text-[#124559]'}`}
                >
                    All
                </button>
                {CATEGORIES.map(cat => (
                    <button 
                        key={cat.id} 
                        onClick={() => setSelectedCategory(cat.slug)}
                        className={`px-5 py-2 rounded-full border-2 font-bold transition-all ${selectedCategory === cat.slug ? 'bg-[#124559] text-[#eff6e0] border-[#124559]' : 'bg-transparent text-[#598392] border-[#aec3b0] hover:border-[#124559] hover:text-[#124559]'}`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

        </div>

        {/* PRODUCTS GRID */}
        {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto pb-20">
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        ) : (
            <div className="text-center py-20">
                <div className="w-24 h-24 bg-[#aec3b0]/20 rounded-full flex items-center justify-center mx-auto mb-6 text-[#aec3b0]">
                    <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#01161e] mb-2">No products found</h3>
                <p className="text-[#598392]">Try adjusting your search or filters.</p>
            </div>
        )}
      </Section>
    </div>
  );
}
