'use client';
import Link from 'next/link';
import Image from 'next/image';

const CATEGORIES = [
    {
        id: 'thc',
        name: 'THC Vapes',
        slug: 'thc-vapes',
        description: 'Premium Delta-8, Delta-9 & Live Resin',
        image: '/images/product.png', // Placeholder, using available image
        gradient: 'from-[#01161e] to-[#124559]',
        accent: '#aec3b0'
    },
    {
        id: 'nicotine',
        name: 'Nicotine Vapes',
        slug: 'nicotine-vapes',
        description: 'Top Brands: Elf Bar, Lost Mary & More',
        image: '/images/product.png',
        gradient: 'from-[#124559] to-[#598392]',
        accent: '#eff6e0'
    },
    {
        id: 'cbd',
        name: 'CBD Wellness',
        slug: 'cbd-vapes',
        description: 'Full Spectrum & Isolate Solutions',
        image: '/images/product.png',
        gradient: 'from-[#598392] to-[#aec3b0]',
        accent: '#01161e'
    }
];

export default function CategoriesSection() {
    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                     <span className="text-[#124559] font-bold uppercase tracking-wider text-sm pl-1">Browse Catalog</span>
                    <h2 className="text-3xl md:text-5xl font-black text-[#01161e] mt-2 tracking-tight">Shop by Category</h2>
                </div>
                <Link href="/categories" className="group flex items-center gap-2 text-[#124559] font-bold hover:text-[#01161e] transition-colors">
                    <span>View All Collections</span>
                    <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {CATEGORIES.map((cat) => (
                    <Link 
                        key={cat.id} 
                        href={`/category/${cat.slug}`}
                        className="group relative h-[400px] rounded-[2rem] overflow-hidden border border-[#aec3b0]/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                    >
                        {/* Background Gradient & Image */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${cat.gradient} opacity-90 transition-opacity duration-500 group-hover:opacity-100`}></div>
                        
                        {/* Abstract Decor */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors duration-500"></div>

                        {/* Content */}
                        <div className="relative h-full flex flex-col p-8 z-10">
                            <div className="mb-auto">
                                <span className={`inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-black uppercase tracking-widest text-[#eff6e0] border border-white/20 mb-4`}>
                                    Collection
                                </span>
                                <h3 className="text-3xl font-black text-[#eff6e0] leading-tight mb-2 group-hover:translate-x-1 transition-transform duration-300">
                                    {cat.name}
                                </h3>
                                <p className="text-[#eff6e0]/80 font-medium max-w-[200px]">
                                    {cat.description}
                                </p>
                            </div>

                            {/* Floating Image Effect */}
                        

                            {/* Button (Visual Only) */}
                            <div className="mt-auto self-start">
                                <div className="w-12 h-12 rounded-full bg-[#eff6e0] flex items-center justify-center text-[#01161e] transform transition-all duration-300 group-hover:w-full group-hover:rounded-xl group-hover:px-6 shadow-lg">
                                    <span className="hidden group-hover:inline-block font-bold text-sm mr-2 whitespace-nowrap">Explore</span>
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
}
