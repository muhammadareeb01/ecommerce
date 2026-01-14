'use client';
import { useParams } from 'next/navigation';
import { PRODUCTS, CATEGORIES } from '@/data/mockData';
import ProductCard from '@/components/ui/ProductCard';
import Link from 'next/link';

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;

  const category = CATEGORIES.find(c => c.slug === slug);
  const products = PRODUCTS.filter(p => p.category === slug);

  if (!category) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#eff6e0] p-4 text-center">
            <h1 className="text-4xl font-black text-[#01161e] mb-4">Category Not Found</h1>
            <p className="text-[#598392] mb-8">The category you are looking for does not exist.</p>
            <Link href="/products" className="px-8 py-3 bg-[#124559] text-[#eff6e0] font-bold rounded-xl hover:bg-[#01161e]">
                View All Products
            </Link>
        </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#eff6e0] py-12 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Category Header */}
        {/* Category Header (Stylish & Animated) */}
        <div className="mb-16 text-center max-w-4xl mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#124559]/20 to-[#aec3b0]/20 blur-3xl rounded-full -z-10 animate-in fade-in zoom-in-50 duration-1000"></div>
            
            <div className="animate-in slide-in-from-bottom-4 duration-700 fade-in">
                <span className="inline-block py-2 px-6 rounded-full bg-[#124559] text-[#eff6e0] text-xs font-black uppercase tracking-widest mb-6 shadow-lg shadow-[#124559]/20 transform hover:scale-105 transition-transform">
                    Collection
                </span>
                <h1 className="text-5xl md:text-7xl font-black text-[#01161e] mb-6 tracking-tighter leading-tight bg-clip-text text-transparent bg-gradient-to-br from-[#01161e] to-[#124559]">
                    {category.name}
                </h1>
                <p className="text-xl md:text-2xl text-[#598392] leading-relaxed font-medium max-w-2xl mx-auto">
                    {category.description}
                </p>
                <div className="w-24 h-1 bg-[#aec3b0] mx-auto mt-8 rounded-full"></div>
            </div>
        </div>

        {/* Browse Collections (Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20 animate-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-backwards">
            {CATEGORIES.map((cat) => (
                <Link 
                    key={cat.id} 
                    href={`/category/${cat.slug}`}
                    className={`group relative h-48 rounded-3xl overflow-hidden border border-[#aec3b0]/30 shadow-lg hover:shadow-2xl transition-all duration-300 ${cat.slug === slug ? 'ring-4 ring-[#124559]/20 scale-[1.02]' : 'hover:-translate-y-1'}`}
                >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-90 transition-opacity duration-500 group-hover:opacity-100`}></div>
                    
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                    <div className="relative h-full flex flex-col justify-center p-6 z-10">
                        <span className={`text-[10px] font-black uppercase tracking-widest text-[#eff6e0]/60 mb-1 ${cat.slug === slug ? 'text-[#eff6e0]' : ''}`}>
                            {cat.slug === slug ? 'Current Collection' : 'Collection'}
                        </span>
                        <h3 className="text-2xl font-black text-[#eff6e0] leading-tight group-hover:translate-x-1 transition-transform duration-300">
                            {cat.name}
                        </h3>
                        {cat.slug !== slug && (
                             <div className="mt-4 flex items-center gap-2 text-[#eff6e0] text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">
                                <span>Browse</span>
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                             </div>
                        )}
                    </div>
                </Link>
            ))}
        </div>

        {/* Product Grid Section */}
        <div className="mb-12 flex items-center justify-between">
             <h2 className="text-3xl font-black text-[#01161e]">Available Products</h2>
             <span className="text-[#598392] font-bold">{products.length} Items</span>
        </div>

        {products.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        ) : (
            <div className="text-center py-20 bg-white/50 rounded-3xl border border-[#aec3b0]">
                 <h3 className="text-2xl font-bold text-[#01161e] mb-2">Coming Soon</h3>
                 <p className="text-[#598392]">We are currently restocking this category. Check back later!</p>
            </div>
        )}
      </div>

      {/* Category FAQs (Stylish Accordion) */}
      {category.faqs && category.faqs.length > 0 && (
        <div className="max-w-3xl mx-auto mt-24 animate-in slide-in-from-bottom-16 duration-700">
            <div className="text-center mb-10">
                <span className="text-[#124559] font-bold uppercase tracking-wider text-sm">Got Questions?</span>
                <h2 className="text-3xl md:text-4xl font-black text-[#01161e] mt-2">Frequently Asked Questions</h2>
            </div>
            
            <div className="bg-white rounded-3xl border border-[#aec3b0]/50 shadow-xl shadow-[#124559]/5 overflow-hidden">
                <div className="divide-y divide-[#aec3b0]/20">
                    {category.faqs.map((faq, idx) => (
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
      )}

    </div>
  );
}
