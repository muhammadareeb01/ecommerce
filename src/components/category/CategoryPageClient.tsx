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
    Layers, 
    CheckCircle2, 
    Plus,
    Users,
    Briefcase,
    Sparkles,
    MousePointer2
} from 'lucide-react';
import ProductCard from '@/components/ui/ProductCard';
import HomeFaq from '@/components/ui/HomeFaq';

interface CategoryPageClientProps {
    category: any;
    otherCategories: any[];
    heroImageUrl: string;
}

export default function CategoryPageClient({ category, otherCategories, heroImageUrl }: CategoryPageClientProps) {
    // Category FAQ content (Mixed intent)
    const categoryFaqs = [
        { 
            q: `Where to buy ${category.title} in bulk?`, 
            a: `You can purchase ${category.title} in bulk directly through our wholesale portal. We offer tiered pricing based on order volume to ensure the best value for your business.` 
        },
        { 
            q: `How to use ${category.title}?`, 
            a: `Usage varies by specific product, but generally involves connecting to a compatible power source or device. For detailed instructions, please check the product documentation included with your order.` 
        },
        { 
            q: `What are the different types of ${category.title} available?`, 
            a: `We carry a wide range including standard, premium, and professional-grade options. Each type is designed for specific performance requirements and user preferences.` 
        },
        { 
            q: `Are these products compatible with standard devices?`, 
            a: `Yes, most of our ${category.title} follow industry-standard compatibility guidelines. Specific compatibility details are listed on each individual product page.` 
        }
    ];

    // Filter out current category from "Other Categories"
    const filteredOtherCategories = otherCategories.filter(cat => cat.slug !== category.slug).slice(0, 3);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="bg-[#050505] text-white min-h-screen selection:bg-accent-blue/30 selection:text-accent-blue">
            
            {/* 1. Hero Section */}
            <section className="relative min-h-[70vh] flex items-center pt-24 pb-16 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src={heroImageUrl} 
                        alt="Hero Background" 
                        fill 
                        className="object-cover opacity-40"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/60 to-transparent" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-[10px] font-bold uppercase tracking-[0.2em] mb-6 animate-pulse">
                            <Sparkles size={12} />
                            Premium Collection
                        </div>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-[0.95] tracking-tighter">
                            {category.pageHeading || category.title}
                        </h1>
                        <p className="text-lg md:text-xl text-white/60 mb-10 leading-relaxed max-w-2xl border-l-2 border-accent-blue/30 pl-6">
                            {category.pageSubheading || `Professional-grade ${category.title.toLowerCase()} specifically chosen for quality, performance, and reliability.`}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link href="#products" className="btn-neon-blue group flex items-center gap-2">
                                <ShoppingBag size={18} />
                                Browse Products
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/wholesale" className="px-8 py-4 rounded-xl border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 transition-all font-bold">
                                Wholesale Pricing
                            </Link>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-accent-blue/5 blur-[120px] rounded-full -translate-y-1/4 translate-x-1/4" />
            </section>

            {/* 2. Category Introduction */}
            <section className="py-24 relative">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative aspect-square rounded-3xl overflow-hidden glass-card p-2"
                        >
                            <div className="relative w-full h-full rounded-2xl overflow-hidden">
                                <Image 
                                    src={category.image || heroImageUrl} 
                                    alt={category.title} 
                                    fill 
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-accent-blue/10 mix-blend-overlay" />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-blue/20 blur-3xl" />
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-accent-teal font-black uppercase tracking-[0.2em] text-xs mb-4">Discovery</h3>
                                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">
                                    Commercial Grade <br /> <span className="text-accent-blue">Solutions</span>
                                </h2>
                            </div>
                            
                            <div className="text-lg text-white/50 leading-relaxed space-y-4">
                                <p>{category.pageContent || category.description}</p>
                                <p>Our range includes various types designed for every user level, from casual enthusiasts to professional retailers seeking high-volume inventory.</p>
                            </div>

                            <div className="grid grid-cols-2 gap-6 pt-6">
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <Layers className="text-accent-blue mb-3" />
                                    <h4 className="font-bold text-white mb-1">Main Types</h4>
                                    <p className="text-xs text-white/40">Diverse selection of models and capacities.</p>
                                </div>
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                    <Users className="text-accent-teal mb-3" />
                                    <h4 className="font-bold text-white mb-1">Target Audience</h4>
                                    <p className="text-xs text-white/40">Perfect for retailers and distributors.</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3. Product Grid */}
            <section id="products" className="py-24 bg-white/[0.02] border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div className="max-w-2xl">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-4 italic tracking-tighter">Available Now</h2>
                            <p className="text-white/50">Explore our current inventory. All products are guaranteed authentic and ready for shipping.</p>
                        </div>
                        <div className="flex gap-2">
                             <div className="px-4 py-2 rounded-lg bg-green-500/10 text-green-500 border border-green-500/20 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                In Stock
                             </div>
                        </div>
                    </div>

                    {category.products && category.products.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {category.products.map((product: any, i: number) => (
                                <motion.div
                                    key={product._id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <ProductCard product={{...product, id: product._id}} />
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="glass-card p-20 text-center border-dashed border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-4 underline decoration-accent-blue underline-offset-8">Restocking Soon</h3>
                            <p className="text-white/50 max-w-md mx-auto">We are currently updating our inventory for this category. Check back shortly or contact us for pre-orders.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* 4. Why Buy This Category */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Why Choose This Category?</h2>
                        <div className="w-24 h-1 bg-accent-blue mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: Zap, title: "Efficiency", desc: "Optimized for quick use and immediate results.", color: "accent-blue" },
                            { icon: ShieldCheck, title: "Potency", desc: "Highest quality standards for maximum effect.", color: "accent-teal" },
                            { icon: CheckCircle2, title: "Compatibility", desc: "Designed to work seamlessly with industry standards.", color: "accent-purple" },
                            { icon: Truck, title: "Portability", desc: "Sleek designs made for convenience on the go.", color: "accent-blue" }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="glass-card p-8 group hover:border-white/20 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col items-center text-center"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:bg-accent-blue group-hover:text-black transition-all duration-500 mb-6 group-hover:shadow-[0_0_30px_rgba(0,210,255,0.4)]`}>
                                    <item.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Wholesale Section (B2B Reminder) */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-accent-blue/10 -skew-y-3 translate-y-24" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="glass-card p-12 md:p-20 overflow-hidden relative">
                        <div className="absolute top-0 right-0 p-12 opacity-5 text-white/10 hidden lg:block">
                            <Briefcase size={400} />
                        </div>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <span className="px-4 py-2 rounded-full bg-accent-blue text-black font-black text-[10px] uppercase tracking-widest shadow-[0_0_20px_rgba(0,210,255,0.4)]">
                                    B2B Exclusive
                                </span>
                                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                                    Wholesale <br /> <span className="text-accent-teal">Partnership</span>
                                </h2>
                                <p className="text-xl text-white/60 leading-relaxed">
                                    Scale your business with our premium {category.title.toLowerCase()} supply. Get access to exclusive tier-pricing, dedicated support, and early product releases.
                                </p>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-white/80">
                                        <CheckCircle2 size={20} className="text-accent-blue" />
                                        <span className="font-medium">Direct Manufacturer Pricing</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-white/80">
                                        <CheckCircle2 size={20} className="text-accent-blue" />
                                        <span className="font-medium">Expedited Global Shipping</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-white/80">
                                        <CheckCircle2 size={20} className="text-accent-blue" />
                                        <span className="font-medium">Quality Guaranteed Certification</span>
                                    </div>
                                </div>
                                <div className="pt-6">
                                    <Link href="/wholesale" className="btn-neon-blue inline-flex px-12 text-xl">
                                        Wholesale Orders
                                    </Link>
                                </div>
                            </div>

                            <div className="relative group">
                                <motion.div 
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative z-10 p-4 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-3xl"
                                >
                                    <div className="aspect-video relative rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-1000">
                                        <Image src={heroImageUrl} alt="Wholesale" fill className="object-cover" />
                                        <div className="absolute inset-0 bg-accent-blue/20 mix-blend-multiply" />
                                    </div>
                                </motion.div>
                                <div className="absolute inset-0 bg-accent-blue/10 blur-[100px] -z-10 animate-pulse" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Buy Category Overview */}
            <section className="py-24 text-center">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white italic">Ready to Upgrade?</h2>
                        <p className="text-xl text-white/50 leading-relaxed">
                            Don't settle for less. Our {category.title} collection is curated to provide the best possible experience for our clients. Whether for personal use or resale, quality is our priority.
                        </p>
                        <div className="pt-8">
                             <Link href="#products" className="inline-flex items-center gap-4 text-white hover:text-accent-blue transition-all group font-black text-2xl uppercase tracking-tighter">
                                View Category Products
                                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                    <ArrowRight size={24} />
                                </div>
                             </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 7. Category FAQ */}
            <section className="py-24 bg-white/[0.01]">
                <div className="container mx-auto px-6">
                    <HomeFaq 
                        faqs={categoryFaqs} 
                        title={`${category.title} FAQ`} 
                        subtitle="Knowledge Base"
                        theme="dark"
                        showViewAll={false}
                    />
                </div>
            </section>

            {/* 8. Other Categories */}
            <section className="py-24 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex items-center justify-between mb-16 px-4">
                        <h2 className="text-3xl font-black text-white uppercase tracking-wider">Other Categories</h2>
                        <Link href="/categories" className="text-accent-blue font-bold flex items-center gap-2 hover:underline">
                            All Categories <Plus size={16} />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {filteredOtherCategories.map((cat, i) => (
                            <Link 
                                href={`/category/${cat.slug}`} 
                                key={cat._id}
                                className="group relative glass-card p-6 flex flex-col gap-8 hover:border-accent-blue/30 transition-all duration-500"
                            >
                                <div className="relative aspect-video rounded-xl overflow-hidden">
                                     <Image 
                                        src={cat.image || heroImageUrl} 
                                        alt={cat.title} 
                                        fill 
                                        className="object-cover group-hover:scale-110 transition-transform duration-700" 
                                     />
                                     <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all" />
                                     <div className="absolute bottom-4 left-4">
                                        <h3 className="text-xl font-black text-white uppercase">{cat.title}</h3>
                                     </div>
                                </div>
                                <div className="flex items-center justify-between text-white/50 group-hover:text-white transition-colors">
                                    <span className="text-sm font-bold">Explore Collection</span>
                                    <MousePointer2 size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
