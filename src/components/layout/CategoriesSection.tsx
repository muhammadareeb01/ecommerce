'use client';
import Link from 'next/link';

interface Category {
  _id: string;
  title: string;
  slug: string;
}

interface CategoriesSectionProps {
  categories: Category[];
}

export default function CategoriesSection({ categories = [] }: CategoriesSectionProps) {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div className="max-w-2xl">
                     <span className="text-[#124559] font-bold uppercase tracking-wider text-sm pl-1">Wholesale Collection</span>
                    <h2 className="text-3xl md:text-5xl font-black text-[#01161e] mt-2 mb-4 tracking-tight">Shop Vapes in Bulk by Category</h2>
                    <p className="text-[#598392] text-lg font-medium leading-relaxed">
                        Explore our extensive catalog of high-demand disposable vapes, cartridges, and hardware. 
                        Sourced directly for the best wholesale pricing in the USA.
                    </p>
                </div>
                <Link href="/categories" className="group flex items-center gap-2 text-[#124559] font-bold hover:text-[#01161e] transition-colors whitespace-nowrap mb-1">
                    <span>View All Categories</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>

            {/* Simple Link List - Using Sanity Data */}
            <div className="flex flex-wrap gap-4">
                {categories.map((cat) => (
                    <Link 
                        key={cat._id} 
                        href={`/category/${cat.slug}`}
                        className="px-6 py-3 bg-white border border-[#aec3b0] rounded-full text-[#124559] font-bold hover:bg-[#124559] hover:text-[#eff6e0] transition-colors shadow-sm"
                    >
                        {cat.title}
                    </Link>
                ))}
            </div>
        </section>
    );
}
