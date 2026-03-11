'use client';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useMemo } from 'react';
import { 
    ShoppingBag, 
    Search, 
    ArrowRight, 
    Sparkles, 
    Package, 
    ShieldCheck,
    Truck,
    Zap,
    Globe,
    Briefcase
} from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import HomeFaq from '@/components/ui/HomeFaq';

interface CategoriesClientProps {
  categoriesWithProducts: any[];
  pageContent: any;
}

export default function CategoriesPage({ 
  categoriesWithProducts = [], 
  pageContent 
}: CategoriesClientProps) {
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

  const catalogFaqs = [
      { q: "What is your turnaround time for bulk orders?", a: "We typically dispatch stock orders within 48 hours. Shipping varies by region but generally arrives within 5-10 business days." },
      { q: "Do you offer white-label services?", a: "Selected hardware categories support white-labeling and custom branding for volume orders." },
      { q: "Are all products TPD compliant?", a: "Yes, we prioritize regulatory compliance across all our supply lines to ensure safety and legality." }
  ];

  return (
    <div className="min-h-screen bg-[#050505] text-white py-12 px-6 font-sans selection:bg-accent-blue/30 overflow-x-hidden">
      
      {/* Structural Minimalist Hero */}
      <div className="max-w-6xl mx-auto pt-24 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end border-b border-white/5 pb-20">
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-3 px-3 py-1 rounded-md bg-accent-blue/5 border border-accent-blue/20 text-accent-blue text-[10px] font-bold uppercase tracking-widest"
            >
              <Sparkles size={12} />
              Wholesale Index 2026
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none uppercase tracking-tighter italic"
            >
              The Global <br />
              <span className="text-white/20">Supply Catalogue</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-white/40 max-w-xl font-medium leading-relaxed italic"
            >
              {pageContent?.description || "Engineered distribution for high-performance hardware clusters and premium liquid tiers."}
            </motion.p>
          </div>
          
          <div className="lg:col-span-4 flex justify-start lg:justify-end">
             <div className="p-6 border border-white/5 bg-white/[0.02] rounded-2xl w-full">
                <div className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-4">Live Terminal Status</div>
                <div className="flex items-center gap-4">
                   <div className="w-2 h-2 rounded-full bg-accent-blue animate-pulse" />
                   <span className="text-sm font-bold text-white italic">Nodes Optimized</span>
                </div>
             </div>
          </div>
        </div>

        {/* Search Logic - Integrated refined UI */}
        <div className="mt-12 max-w-2xl">
           <div className="relative group">
              <Search size={18} className="absolute left-6 top-1/2 -translate-y-1/2 text-white/20 group-focus-within:text-accent-blue transition-colors" />
              <input
                type="text"
                placeholder="Filter by name or technical type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl py-5 pl-14 pr-8 text-sm font-bold text-white placeholder-white/10 focus:outline-none focus:border-accent-blue/30 transition-all uppercase italic"
              />
           </div>
        </div>
      </div>

      {/* Categories Grid - Scaled down for "Normal" feel */}
      <div className="max-w-6xl mx-auto space-y-32 mb-40">
        {filteredCategories.map((category) => (
          <section key={category._id} className="group">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-px bg-accent-blue" />
                  <span className="text-[9px] font-black text-white/20 uppercase tracking-[0.3em]">Sector {category._id.slice(-2)}</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-black text-white italic uppercase tracking-tighter leading-none">
                  {category.title}
                </h2>
              </div>
              <Link 
                href={`/category/${category.slug}`} 
                className="flex items-center gap-4 px-6 py-3 rounded-full border border-white/5 hover:bg-white hover:text-black transition-all group"
              >
                <span className="text-[10px] font-black uppercase tracking-widest">Full Access</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {category.products && category.products.slice(0, 4).map((product: any, idx: number) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <ProductCard product={{...product, id: product._id}} />
                </motion.div>
              ))}
            </div>
            
            {!category.products?.length && (
               <div className="py-12 border border-dashed border-white/5 rounded-2xl text-center">
                  <span className="text-[10px] font-black text-white/10 uppercase tracking-widest italic">Inventory Resync in Progress</span>
               </div>
            )}
          </section>
        ))}
      </div>

      {/* Modern B2B Section - More Scaled */}
      <div className="max-w-6xl mx-auto mb-40">
        <div className="relative p-12 md:p-20 bg-[#080808] border border-white/5 rounded-[2rem] overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-[0.02] pointer-events-none italic font-black text-[12rem] select-none">B2B</div>
          <div className="relative z-10 space-y-8">
            <div className="flex items-center gap-3">
              <Briefcase size={16} className="text-accent-blue" />
              <span className="text-[10px] font-black text-white/30 uppercase tracking-[0.4em]">Wholesale Terminal</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-white leading-tight uppercase italic tracking-tighter max-w-2xl">
              Scale Your Retail <br /> <span className="text-accent-blue">Infrastructure</span>
            </h2>
            <p className="text-base text-white/30 max-w-lg font-medium italic">
              Integrated logistics and tiered capital pricing for certified global distribution nodes.
            </p>
            <div className="pt-6 flex flex-wrap gap-4">
              <Link href="/wholesale" className="px-10 py-4 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-accent-blue transition-all rounded-lg">
                Activate Access
              </Link>
              <Link href="/contact" className="px-8 py-4 border border-white/10 text-white/40 font-black uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition-all rounded-lg">
                Speak to Analyst
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section - Cleaned up */}
      <div className="max-w-6xl mx-auto">
        <HomeFaq 
          faqs={catalogFaqs}
          title="Technical Documentation"
          subtitle="Support Node"
          theme="dark"
          showViewAll={false}
        />
      </div>

      {filteredCategories.length === 0 && (
         <div className="py-40 text-center">
            <h3 className="text-2xl font-black text-white/10 italic uppercase border border-white/5 p-20 rounded-3xl">Sector Not Found</h3>
         </div>
      )}
    </div>
  );
}
