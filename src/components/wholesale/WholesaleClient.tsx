'use client';

import { motion, Variants } from 'framer-motion';
import { 
    Truck, 
    ShieldCheck, 
    Zap, 
    ArrowRight, 
    CheckCircle2, 
    Package, 
    Briefcase, 
    TrendingUp, 
    ShieldAlert, 
    Coins,
    Sparkles,
    ShoppingCart,
    ShoppingBag,
    MousePointer2,
    Users,
    Globe
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import HomeFaq from '@/components/ui/HomeFaq';

interface WholesaleClientProps {
    data?: any;
}

export default function WholesaleClient({ data }: WholesaleClientProps) {
    const wholesaleFaqs = [
        { 
            q: "What is the Minimum Order Quantity (MOQ)?", 
            a: "Our general MOQ for wholesale accounts is $500 per order. Some specific product lines may have individual unit minimums (typically 10 units per SKU) to ensure we can offer the best wholesale pricing." 
        },
        { 
            q: "How long does shipping take for bulk orders?", 
            a: "We prioritize wholesale fulfillment. Orders are typically processed and dispatched within 24-48 hours. Shipping times vary by destination but generally range from 3-7 business days." 
        },
        { 
            q: "Am I eligible to be a reseller?", 
            a: "We partner with businesses of all sizes, from boutique vape shops to large-scale distributors. A valid business identification or retail license may be required for tax verification purposes." 
        },
        { 
            q: "Do you offer discounts for extremely large volume?", 
            a: "Yes! Our pricing is tiered. The larger the volume, the greater the discount. Contact a dedicated account representative for specialized quotes on high-volume distributions." 
        }
    ];

    const steps = [
        { 
            number: "01", 
            title: "Submit Inquiry", 
            description: "Fill out our simple wholesale form with your business details and requirements.",
            icon: MousePointer2
        },
        { 
            number: "02", 
            title: "Verify Eligibility", 
            description: "Our B2B team reviews your application and verifies business credentials quickly.",
            icon: ShieldCheck
        },
        { 
            number: "03", 
            title: "Receive Pricing", 
            description: "Gain access to our exclusive tiered wholesale pricing and inventory portal.",
            icon: TrendingUp
        },
        { 
            number: "04", 
            title: "Place Order", 
            description: "Finalize your order with our manual verification process for 100% accuracy.",
            icon: ShoppingBag 
        }
    ];

    const benefits = [
        { 
            title: "Bulk Pricing", 
            desc: "Maximum margins with our hyper-competitive tiered wholesale pricing structure.",
            icon: Coins,
            color: "accent-blue"
        },
        { 
            title: "Supply Reliability", 
            desc: "Consistent inventory availability ensuring your shelves are never empty.",
            icon: Zap,
            color: "accent-teal"
        },
        { 
            title: "Product Variety", 
            desc: "Access to the latest hardware and premium brands at distributor rates.",
            icon: Package,
            color: "accent-purple"
        },
        { 
            title: "Dedicated Support", 
            desc: "A personal account manager to handle your logistics and requirements.",
            icon: Users,
            color: "accent-blue"
        }
    ];

    // Animation Variants for mask reveal
    const titleVariant: Variants = {
        hidden: { y: "100%" },
        visible: { 
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <div className="bg-[#020202] text-white min-h-screen selection:bg-accent-blue/30 selection:text-accent-blue font-sans overflow-x-hidden">
            
            {/* 🟦 Hero Section */}
            <section className="relative min-h-[85vh] flex items-center pt-32 pb-20">
                {/* Background effects - cleaner grid */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent-blue/[0.03] blur-[150px] rounded-full" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4 mb-6"
                        >
                            <div className="w-8 h-[1px] bg-accent-blue" />
                            <span className="text-[10px] font-black tracking-[0.4em] uppercase text-accent-blue/60 mt-1">Institutional Supply B2B</span>
                        </motion.div>
                        
                        <div className="overflow-hidden mb-8">
                            <motion.h1 
                                initial="hidden"
                                animate="visible"
                                variants={titleVariant}
                                className="text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] font-light text-white leading-[1.1] tracking-[-0.03em] uppercase"
                            >
                                Wholesale <br />
                                <span className="font-black text-white italic tracking-tighter block mt-2">
                                    <span className="text-accent-blue">—</span> Dominance
                                </span>
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="flex flex-col md:flex-row md:items-start gap-12 mt-12"
                        >
                            <p className="text-xl text-white/20 leading-relaxed max-w-lg font-medium">
                                Redefining the B2B supply chain with architectural precision and uncompromised volume capacity.
                            </p>
                            
                            <div className="space-y-10">
                                <Link href="#apply" className="group block">
                                    <div className="flex items-center gap-6">
                                        <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent-blue group-hover:border-accent-blue transition-all duration-500">
                                            <ArrowRight size={32} className="group-hover:text-black transition-colors" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-black uppercase tracking-widest text-white/40 mb-1">Apply for Access</div>
                                            <div className="text-xl font-black uppercase italic tracking-tighter">Become a Partner</div>
                                        </div>
                                    </div>
                                </Link>
                                
                                <div className="flex items-center gap-6 opacity-30">
                                    <div className="flex -space-x-3">
                                        {[1,2,3].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full border border-black bg-white/10" />
                                        ))}
                                    </div>
                                    <span className="text-[9px] font-black uppercase tracking-widest italic">Global Scale Verified</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 1️⃣ Wholesale Introduction */}
            <section className="py-32 relative border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="relative flex justify-center"
                        >
                            <div className="relative w-full max-w-md aspect-[3/4] group">
                                <div className="absolute inset-0 border border-white/5 rounded-3xl -rotate-3 group-hover:rotate-0 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-[#080808] rounded-3xl p-8 flex flex-col justify-between border border-white/10 shadow-2xl">
                                     <div className="flex justify-between items-start">
                                         <Briefcase size={40} className="text-white/10" />
                                         <span className="text-[10px] font-black text-accent-blue">PARTNER_CATALOG_88</span>
                                     </div>
                                     <div className="relative h-48">
                                         <Image src="/images/product.png" alt="stock" fill className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                                     </div>
                                     <div>
                                         <div className="text-4xl font-black italic uppercase tracking-tighter leading-none mb-2">Inventory</div>
                                         <div className="text-[10px] text-white/30 uppercase tracking-[0.3em] font-bold">Tier-1 Node Dispatch</div>
                                     </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-12"
                        >
                            <div className="overflow-hidden">
                                <h2 className="text-4xl md:text-6xl font-light text-white leading-[1.1] uppercase">
                                    Global Supply <br />
                                    <span className="font-black italic text-white/20">Infrastructure</span>
                                </h2>
                            </div>
                            
                            <div className="space-y-8 text-white/40 text-lg leading-relaxed max-w-xl">
                                <p>Our wholesale ecosystem is engineered for retailers who demand consistency over compromise. We maintain multi-node distribution channels to ensure zero-latency fulfillment.</p>
                                <p>By joining the Flow Wholesale network, you gain immediate access to institutional-level stock pools and direct-to-factory lead times.</p>
                            </div>

                            <div id="apply" className="pt-4">
                                <Link href="/contact" className="inline-flex items-center gap-6 px-10 py-5 rounded-full bg-white text-black font-black uppercase text-sm tracking-widest hover:bg-accent-blue transition-colors group">
                                    Get Verified Access
                                    <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 2️⃣ MOQ / MOP Section */}
            <section className="py-32 bg-white/[0.01] border-y border-white/5">
                <div className="container mx-auto px-6">
                    <div className="max-w-2xl mb-24">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-[1px] bg-accent-blue" />
                            <span className="text-[10px] font-black text-white/20 uppercase tracking-[0.4em]">Guidelines</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
                             Order <span className="text-white/20">—</span> Architecture
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="p-12 border border-white/5 bg-[#080808] hover:border-accent-blue/30 transition-all group"
                        >
                            <div className="text-[10px] font-black uppercase tracking-widest text-accent-blue mb-10">Requirement_01</div>
                            <h3 className="text-4xl font-light text-white uppercase italic tracking-tighter mb-4">Initial <span className="font-black">Scale</span></h3>
                            <div className="text-6xl font-black text-white mb-8">$500 <span className="text-xs text-white/20 tracking-[0.4em] italic uppercase">USD Min</span></div>
                            <p className="text-white/30 text-base leading-relaxed max-w-xs border-l border-white/10 pl-6 mb-12">
                                Established to protect market integrity and secure distributor-level pricing for verified entities.
                            </p>
                            <div className="flex items-center gap-3 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                                <ShieldCheck size={14} className="text-accent-blue" />
                                Policy Verified 2026
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="p-12 border border-white/5 bg-[#080808] hover:border-accent-teal/30 transition-all group"
                        >
                            <div className="text-[10px] font-black uppercase tracking-widest text-accent-teal mb-10">Requirement_02</div>
                            <h3 className="text-4xl font-light text-white uppercase italic tracking-tighter mb-4">Unit <span className="font-black">Volume</span></h3>
                            <div className="text-6xl font-black text-white mb-8">10 <span className="text-xs text-white/20 tracking-[0.4em] italic uppercase">U/SKU</span></div>
                            <p className="text-white/30 text-base leading-relaxed max-w-xs border-l border-white/10 pl-6 mb-12">
                                Strategic SKU management allowing for high-turnover diversity across all category sectors.
                            </p>
                            <div className="flex items-center gap-3 text-[10px] font-bold text-white/40 uppercase tracking-widest">
                                <Zap size={14} className="text-accent-teal" />
                                Dynamic Batch System
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 3️⃣ Wholesale Ordering Process - Minimal Cards */}
            <section className="py-32 relative">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-32">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">Workflow <span className="text-accent-blue/30">&</span> Pipeline</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {steps.map((step, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-8 border border-white/5 hover:border-white/20 transition-all group bg-[#040404]"
                            >
                                <div className="text-4xl font-black text-white/5 group-hover:text-accent-blue/20 transition-colors mb-6">{step.number}</div>
                                <h3 className="text-lg font-black uppercase italic tracking-tighter text-white mb-4">{step.title}</h3>
                                <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest leading-loose">{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4️⃣ Why Choose Our Wholesale */}
            <section className="py-32 relative bg-white/[0.01]">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-12">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic leading-none max-w-xl">
                            The <span className="text-accent-blue">Architectural</span> Advantage
                        </h2>
                        <div className="text-right">
                             <span className="text-5xl font-black text-white/5 block">EST. 2026</span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                        {benefits.map((benefit, i) => (
                            <motion.div 
                                key={i}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 bg-[#060606] border border-white/5 hover:bg-accent-blue transition-all duration-500 group"
                            >
                                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/20 group-hover:text-black group-hover:border-black/20 mb-10 transition-all">
                                    <benefit.icon size={20} />
                                </div>
                                <h3 className="text-xl font-black uppercase italic tracking-tighter text-white group-hover:text-black mb-4 transition-colors">{benefit.title}</h3>
                                <p className="text-[10px] font-bold text-white/20 uppercase tracking-widest leading-relaxed group-hover:text-black/60 transition-colors">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5️⃣ Crypto Payment Offer */}
            <section className="py-32">
                <div className="container mx-auto px-6">
                    <div className="bg-[#080808] border border-white/5 p-12 md:p-32 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-24 opacity-[0.02] rotate-12">
                             <Coins size={400} />
                        </div>
                        
                        <div className="relative z-10 max-w-4xl">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-10 h-10 rounded-full bg-accent-blue/10 flex items-center justify-center text-accent-blue">
                                    <Sparkles size={18} />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-blue">Finance_Node</span>
                            </div>
                            
                            <h2 className="text-4xl md:text-7xl font-light text-white uppercase leading-none mb-12">
                                Instant <br />
                                <span className="font-black italic text-accent-blue">— Digital Discount</span>
                            </h2>
                            
                            <p className="text-2xl text-white/20 font-medium leading-relaxed max-w-2xl mb-16 italic">
                                Optimize your checkout pipeline. Automated 10% reduction for all crypto-verified settlements.
                            </p>

                            <Link href="/contact" className="inline-flex items-center gap-8 px-12 py-6 rounded-full bg-accent-blue text-black font-black uppercase text-lg tracking-widest hover:bg-white transition-all">
                                Settlement Inquiry
                                <ArrowRight size={24} />
                            </Link>

                            <div className="flex gap-12 mt-20 grayscale opacity-20 text-[10px] font-black uppercase tracking-widest italic">
                                <span>Blockchain_01_BTC</span>
                                <span>Blockchain_02_ETH</span>
                                <span>Blockchain_03_USDT</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6️⃣ Wholesale FAQ */}
            <section className="py-32 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="mb-20">
                        <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">FAQ <span className="text-white/10">—</span> Support</h2>
                    </div>
                    <HomeFaq 
                        faqs={wholesaleFaqs} 
                        title="" 
                        subtitle=""
                        theme="dark"
                        showViewAll={false}
                    />
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-60 text-center relative">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        className="space-y-12"
                    >
                        <h2 className="text-4rem md:text-6xl font-light text-white uppercase italic">
                            Begin <span className="font-black text-accent-blue">Partnership</span>
                        </h2>
                        <div className="flex justify-center pt-8">
                             <Link href="/contact" className="px-16 py-8 rounded-full bg-white text-black font-black uppercase text-2xl tracking-tighter hover:bg-accent-blue transition-all">
                                Connect Now
                             </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

        </div>
    );
}
