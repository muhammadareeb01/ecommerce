'use client';
import Link from 'next/link';

export default function CategoriesSection() {
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
               
            </div>

            {/* Simple Link List - Using Sanity Data */}
            <div className="flex flex-wrap gap-4">
                <Link 
                    href="/category/retail-vapes"
                    className="px-6 py-3 bg-white border border-[#aec3b0] rounded-full text-[#124559] font-bold hover:bg-[#124559] hover:text-[#eff6e0] transition-colors shadow-sm"
                >
                    Retail Vapes
                </Link>
                <Link 
                    href="/category/wholesale-vapes"
                    className="px-6 py-3 bg-white border border-[#aec3b0] rounded-full text-[#124559] font-bold hover:bg-[#124559] hover:text-[#eff6e0] transition-colors shadow-sm"
                >
                    Wholesale Vapes
                </Link>
            </div>
        </section>
    );
}
