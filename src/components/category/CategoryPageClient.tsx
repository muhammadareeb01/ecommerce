'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
    ShoppingBag, 
    ArrowRight, 
    Truck, 
    ShieldCheck, 
    Zap, 
    CheckCircle2, 
    Plus,
    Briefcase,
    Sparkles,
    MousePointer2,
    Package,
    Settings,
    Globe,
    // TrendingUp
} from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import HomeFaq from '@/components/ui/HomeFaq';
import { useRef, useEffect, useState } from 'react';

interface CategoryPageClientProps {
    category: any;
    otherCategories: any[];
    heroImageUrl: string;
}

export default function CategoryPageClient({ category, otherCategories, heroImageUrl }: CategoryPageClientProps) {
    // FAQ Content
    const categoryFaqs = [
        { 
            q: `Where to buy ${category.title} in bulk supply?`, 
            a: `You can purchase our entire range of ${category.title} directly through our wholesale portal. We specialize in B2B distributions and offer high-volume inventory.` 
        },
        { 
            q: `How to use ${category.title} products?`, 
            a: `${category.title} items are designed for intuitive use. Detailed manuals are included with every dispatch.` 
        }
    ];

    const filteredOtherCategories = otherCategories.filter(cat => cat.slug !== category.slug).slice(0, 3);

    // Carousel state
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-scroll effect
    useEffect(() => {
        if (!carouselRef.current || isHovered) return;
        
        const scrollInterval = setInterval(() => {
            if (carouselRef.current) {
                const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
                if (carouselRef.current.scrollLeft >= maxScrollLeft) {
                    carouselRef.current.scrollLeft = 0;
                } else {
                    carouselRef.current.scrollLeft += 1;
                }
            }
        }, 35); 

        return () => clearInterval(scrollInterval);
    }, [isHovered]);

    return (
        <div className="bg-[#050505] text-white min-h-screen selection:bg-accent-blue/30 font-sans overflow-x-hidden">
            
            {/* Structural Hero - Reduced Scales */}
            <section className="relative pt-32 pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src={heroImageUrl || "/images/about-hero.png"} 
                        alt={category.title} 
                        fill 
                        className="object-cover opacity-[0.08]"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: -5 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3"
                        >
                            <div className="w-6 h-[1px] bg-accent-blue" />
                            <span className="text-[10px] font-black tracking-widest uppercase text-accent-blue/60 mt-1">Sovereign Supply / Sector_{category._id?.slice(-2)}</span>
                        </motion.div>
                        
                        <motion.h1 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight uppercase tracking-tighter italic"
                        >
                            {category.title} <br />
                            <span className="text-white/20">Distribution Node</span>
                        </motion.h1>

                        <div className="flex flex-col md:flex-row md:items-start gap-12">
                            <p className="text-lg text-white/40 leading-relaxed max-w-lg font-medium italic border-l border-white/10 pl-8">
                                {category.pageSubheading || `Professional institutional stock pool for global retail distributors and entities.`}
                            </p>
                            <div className="flex flex-wrap gap-4 mt-2">
                                <Link href="#explore" className="px-8 py-4 bg-white text-black font-black uppercase text-[11px] tracking-widest hover:bg-accent-blue transition-all rounded-lg">
                                    Browse Supply
                                </Link>
                                <Link href="/wholesale" className="px-8 py-4 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all font-black uppercase tracking-widest text-[9px] text-white/40 rounded-lg">
                                    Partnership Portal
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Introduction Section - High Visibility, Normal Scales */}
            <section className="py-24 border-t border-white/5 relative bg-white/[0.01]">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.98 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 p-10 group"
                        >
                            <Image 
                                src="/images/product.png" 
                                alt={category.title} 
                                fill 
                                className="object-contain p-12 opacity-60 group-hover:opacity-100 transition-all duration-[1s]"
                            />
                            <div className="absolute bottom-10 left-10">
                                <div className="text-[9px] font-black text-white/20 uppercase tracking-widest mb-2 italic">Standard_Unit_V1</div>
                                <div className="text-2xl font-black italic text-white uppercase tracking-tighter leading-none">Global Certified</div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="space-y-10"
                        >
                            <div className="space-y-4">
                                <span className="text-[10px] font-black text-accent-blue uppercase tracking-widest">Technical Briefing</span>
                                <h2 className="text-3xl md:text-5xl font-black text-white leading-none uppercase italic tracking-tighter">
                                    Structural <br />
                                    <span className="text-white/10">Foundation</span>
                                </h2>
                            </div>
                            
                            <p className="text-lg text-white/40 leading-relaxed max-w-xl font-medium italic border-l-2 border-accent-blue/20 pl-8">
                                Our {category.title} ecosystems are engineered for retailers who demand consistency, compliance, and industrial-grade reliability across all supply lanes.
                            </p>

                            <div className="grid grid-cols-2 gap-10 pt-8 border-t border-white/5">
                                <div className="space-y-2">
                                    <div className="text-[9px] font-black text-accent-blue uppercase tracking-widest">Supply Node</div>
                                    <div className="text-xl font-black italic text-white tracking-tighter uppercase">Direct Hub</div>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-[9px] font-black text-accent-teal uppercase tracking-widest">Protocol</div>
                                    <div className="text-xl font-black italic text-white tracking-tighter uppercase">TPD Compliant</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 🟦 THE CAROUSEL - Normal Scaling */}
            <section id="explore" className="py-24 relative overflow-hidden text-center">
                <div className="container mx-auto px-6 mb-16 px-4">
                    <div className="max-w-xl mx-auto space-y-4">
                        <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Inventory Nodes</span>
                        <h2 className="text-3xl md:text-5xl font-black text-white italic tracking-tighter uppercase leading-none italic">
                          Elite <span className="text-white/10 italic">Reference</span>
                        </h2>
                    </div>
                </div>

                <div 
                    className="relative"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div 
                        ref={carouselRef}
                        className="flex gap-6 overflow-x-auto no-scrollbar px-6 pb-12 scroll-smooth"
                        style={{ scrollbarWidth: 'none' }}
                    >
                        {category.products && category.products.length > 0 ? (
                            [...category.products, ...category.products].map((product: any, i: number) => (
                                <div 
                                    key={`${product._id}-${i}`}
                                    className="min-w-[280px] md:min-w-[340px]"
                                >
                                    <ProductCard product={{...product, id: product._id}} />
                                </div>
                            ))
                        ) : (
                            <div className="w-full py-20 text-center text-white/10 font-black italic uppercase tracking-widest">Resyncing Stock...</div>
                        )}
                    </div>
                    <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-[#050505] to-transparent pointer-events-none z-10" />
                    <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-[#050505] to-transparent pointer-events-none z-10" />
                </div>
            </section>

            {/* Benefits - Structural Grid */}
            <section className="py-24 bg-white/[0.01] border-y border-white/5 relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            { icon: Zap, title: "Output", desc: "Minimalist efficiency optimized for high-volume dispatch Cycles." },
                            { icon: Settings, title: "Unified", desc: "Universal thread clusters for seamless retailer integration pods." },
                            { icon: ShieldCheck, title: "Verified", desc: "Direct manufacturer authentication on all verified supply tiers." },
                            { icon: Globe, title: "Node", desc: "Strategic distribution established across major global hubs." }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                className="p-10 border border-white/5 bg-[#080808] hover:border-accent-blue/30 transition-all group flex flex-col items-center text-center rounded-2xl"
                            >
                                <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center mb-10 text-white/20 group-hover:text-accent-blue transition-colors">
                                    <item.icon size={22} />
                                </div>
                                <h3 className="text-xl font-black text-white mb-4 tracking-tighter uppercase italic">{item.title}</h3>
                                <p className="text-[10px] font-black text-white/20 uppercase tracking-widest leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* B2B Terminal - Normal Sizing */}
            <section className="py-24 relative px-6">
                <div className="container mx-auto">
                    <div className="bg-[#080808] border border-white/10 p-12 md:p-20 rounded-[2.5rem] relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-10 opacity-[0.03] italic font-black text-[12rem] select-none pointer-events-none">BULK</div>
                        <div className="max-w-2xl space-y-10 relative z-10">
                            <div className="flex items-center gap-3">
                                <Briefcase size={16} className="text-accent-blue shadow-[0_0_15px_rgba(0,210,255,0.4)]" />
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/30 italic">Supply Access alpha</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white leading-none uppercase italic tracking-tighter">
                                Retail <span className="text-accent-blue">Acceleration</span>
                            </h2>
                            <p className="text-lg text-white/40 leading-relaxed font-medium italic border-l border-white/5 pl-8 mt-6">
                                Integrated institutional supply pools for 2,000+ verified partner nodes.
                            </p>
                            <div className="pt-4">
                                <Link href="/wholesale" className="px-10 py-5 bg-white text-black font-black uppercase text-xs tracking-widest hover:bg-accent-blue transition-all rounded-lg inline-flex items-center gap-4 group">
                                    Activate Channel
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ & Others - Cleaned up */}
            <section className="py-24 px-6 border-t border-white/5">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-black text-white italic uppercase mb-12 border-b border-white/5 pb-6">Knowledge Base</h2>
                    <HomeFaq faqs={categoryFaqs} title="" subtitle="" theme="dark" showViewAll={false} />
                </div>
            </section>

        </div>
    );
}

const TrendingUp = ({ size, className }: { size: number, className?: string }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);
