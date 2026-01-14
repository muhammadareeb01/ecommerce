'use client';
import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { PRODUCTS, CATEGORIES, Product } from '@/data/mockData';
import { addToCart } from '@/store/features/cartSlice';
import ProductCard from '@/components/ui/ProductCard';
import { toast } from 'react-toastify';

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const dispatch = useDispatch();
  const router = useRouter();

  const product = PRODUCTS.find(p => p.slug === slug);
  const [qty, setQty] = useState(1);

  if (!product) {
     return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#eff6e0] p-4 text-center">
            <h1 className="text-4xl font-black text-[#01161e] mb-4">Product Not Found</h1>
            <Link href="/products" className="px-8 py-3 bg-[#124559] text-[#eff6e0] font-bold rounded-xl hover:bg-[#01161e]">
                Back to Catalog
            </Link>
        </div>
    );
  }

  const category = CATEGORIES.find(c => c.slug === product.category);
  const relatedProducts = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
  
  // Price Logic
  const subtotal = product.price * qty;
  const cryptoTotal = subtotal * 0.90; // 10% off

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity: qty }));
    toast.success(`${qty}x ${product.name} added to cart!`);
  };

  return (
    <div className="bg-[#eff6e0] min-h-screen py-12 px-4 sm:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm font-bold text-[#598392] mb-8">
            <Link href="/" className="hover:text-[#124559]">Home</Link>
            <span>/</span>
            <Link href={`/category/${product.category}`} className="hover:text-[#124559] capitalize">
                {product.category.replace('-', ' ')}
            </Link>
            <span>/</span>
            <span className="text-[#124559]">{product.name}</span>
        </div>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
            
            {/* Left: Image Gallery */}
            <div className="space-y-4">
                 <div className="relative aspect-[4/3] bg-white rounded-3xl overflow-hidden border border-[#aec3b0]/50 shadow-sm">
                    <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-8 hover:scale-105 transition-transform duration-500"
                        priority
                    />
                     {product.wholesalePrice > 0 && (
                        <div className="absolute top-6 left-6 bg-[#124559] text-[#eff6e0] text-sm font-bold px-4 py-2 rounded-lg shadow-lg">
                            WHOLESALE DISTRO
                        </div>
                    )}
                 </div>
            </div>

            {/* Right: Product Info */}
            <div className="animate-in slide-in-from-right-4 duration-700 fade-in">
                 <div className="mb-6">
                    <span className="inline-block py-1 px-3 rounded-md bg-[#124559]/10 text-[#124559] text-xs font-bold uppercase tracking-wider mb-3">
                        {product.wholesaleMinQty > 0 ? 'Wholesale Only' : 'In Stock'}
                    </span>
                    <h1 className="text-4xl md:text-6xl font-black text-[#01161e] mb-4 leading-none tracking-tight">
                        {product.name}
                    </h1>
                    <div className="h-1 w-20 bg-[#aec3b0] rounded-full"></div>
                 </div>
                 
                 {/* Rating / Category */}
                 <div className="flex items-center gap-4 mb-8">
                    <Link href={`/category/${product.category}`} className="group flex items-center gap-2">
                        <span className="bg-[#aec3b0]/20 text-[#124559] text-sm font-bold px-4 py-1.5 rounded-full uppercase tracking-wide border border-[#aec3b0]/30 group-hover:bg-[#124559] group-hover:text-[#eff6e0] transition-colors">
                            {category?.name}
                        </span>
                    </Link>
                 </div>

                 {/* Dual Price Box (Stylish) */}
                 <div className="bg-white rounded-3xl border border-[#aec3b0]/50 mb-8 shadow-xl shadow-[#124559]/5 relative overflow-hidden group p-1">
                     <div className="absolute top-0 right-0 w-32 h-32 bg-[#aec3b0]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#aec3b0]/20 transition-colors"></div>
                    
                    <div className="grid grid-cols-2 gap-1 relative z-10">
                        {/* Standard Price */}
                        <div className="p-5 flex flex-col justify-center rounded-l-2xl transition-colors hover:bg-gray-50">
                            <span className="text-xs font-bold text-[#598392] uppercase tracking-wider mb-1">Standard Paying</span>
                            <span className="text-3xl lg:text-4xl font-black text-[#598392] decoration-red-500/30 line-through decoration-2 opacity-60">
                                ${(product.price).toFixed(2)}
                            </span>
                        </div>

                        {/* Crypto Price */}
                        <div className="bg-[#124559] p-5 flex flex-col justify-center text-white rounded-2xl shadow-lg transform scale-[1.02] origin-left ring-4 ring-white">
                            <div className="flex items-center gap-1 mb-1">
                                <svg className="w-3 h-3 text-[#green-400]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                <span className="text-xs font-bold text-[#eff6e0] uppercase tracking-wider">Crypto Price</span>
                            </div>
                            <span className="text-4xl lg:text-5xl font-black text-green-400 tracking-tight">
                                ${(product.price * 0.9).toFixed(2)}
                            </span>
                            <span className="text-[10px] font-bold text-white/60">Save 10% Instantly</span>
                        </div>
                    </div>

                    {/* MOQ Removed */ }
                 </div>

                 {/* Description */}
                 <div className="mb-8 p-6 bg-[#white] rounded-2xl border-l-4 border-[#124559] bg-gradient-to-r from-white to-[#eff6e0]/30">
                    <h3 className="text-lg font-bold text-[#01161e] mb-2 uppercase tracking-wider text-xs opacity-70">Product Overview</h3>
                    <p className="text-[#598392] leading-relaxed text-lg">
                        {product.description}
                    </p>
                 </div>

                 {/* Product FAQs (Stylish) */}
                 <div className="mb-8">
                    <div className="bg-white rounded-2xl border border-[#aec3b0]/30 overflow-hidden shadow-sm">
                         <div className="p-4 bg-[#eff6e0]/30 border-b border-[#aec3b0]/30 flex items-center gap-2">
                            <svg className="w-5 h-5 text-[#124559]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            <h3 className="text-sm font-bold text-[#01161e] uppercase tracking-wider">Common Questions</h3>
                         </div>
                         <div className="divide-y divide-[#aec3b0]/20">
                            {[
                                ...(category?.faqs?.slice(0, 2) || []),
                                { question: "Shipping Times", answer: "Orders placed before 2PM EST ship same business day." },
                                { question: "Authenticity Guarantee", answer: "All products are 100% authentic and sourced directly." }
                            ].map((faq, i) => (
                                <details key={i} className="group p-4">
                                    <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-[#124559] text-sm">
                                        {faq.question}
                                        <span className="transition-transform group-open:rotate-180">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                        </span>
                                    </summary>
                                    <p className="text-[#598392] text-sm mt-2 leading-relaxed animate-in fade-in slide-in-from-top-1">
                                        {faq.answer}
                                    </p>
                                </details>
                            ))}
                         </div>
                    </div>
                 </div>

                 {/* Specs Grid */}
                 {product.features && (
                    <div className="mb-8">
                        <h3 className="text-lg font-bold text-[#01161e] mb-3">Specifications</h3>
                        <div className="grid grid-cols-2 gap-3">
                            {product.features.map((feature, idx) => (
                                <div key={idx} className="bg-[#eff6e0] border border-[#aec3b0] px-4 py-2 rounded-xl text-sm font-bold text-[#124559] flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-[#124559] rounded-full"></span>
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>
                 )}

                 {/* Secure Payment & Crypto Discount Banner (New) */}
                 <div className="bg-gradient-to-r from-[#01161e] to-[#124559] rounded-2xl p-4 mb-6 text-[#eff6e0] shadow-lg border border-[#eff6e0]/20 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#aec3b0]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                             <div className="bg-[#eff6e0]/10 p-2 rounded-lg backdrop-blur-sm border border-[#eff6e0]/10">
                                <svg className="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                             </div>
                             <div>
                                 <h4 className="font-bold text-sm uppercase tracking-wider text-[#aec3b0]">Secure Checkout</h4>
                                 <p className="font-black text-lg leading-none">Accepting Payments Via:</p>
                             </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                            <span className="px-2 py-1 bg-[#eff6e0] text-[#01161e] text-[10px] font-black rounded flex items-center gap-1 shadow-sm" title="Bitcoin">
                                ₿ BTC
                            </span>
                            <span className="px-2 py-1 bg-[#eff6e0] text-[#01161e] text-[10px] font-black rounded flex items-center gap-1 shadow-sm" title="Ethereum">
                                Ξ ETH
                            </span>
                             <span className="px-2 py-1 bg-[#eff6e0] text-[#01161e] text-[10px] font-black rounded flex items-center gap-1 shadow-sm" title="USDT">
                                ₮ USDT
                            </span>
                             <span className="px-2 py-1 bg-[#aec3b0] text-[#01161e] text-[10px] font-black rounded flex items-center gap-1 shadow-sm" title="Bank Wire">
                                WIRE
                            </span>
                        </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-[#eff6e0]/10 flex items-center justify-center sm:justify-start gap-2 text-sm font-bold text-green-300">
                         <svg className="w-4 h-4 animate-pulse" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd"/></svg>
                         Save 10% instantly when paying with Crypto!
                    </div>
                 </div>

                    {/* Add to Cart Actions */}
                 <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-[#aec3b0]/30">
                    <div className="flex items-center border-2 border-[#aec3b0] rounded-xl bg-white w-full sm:w-auto">
                        <button 
                            onClick={() => setQty(q => Math.max(1, q - 1))}
                            className="px-4 py-3 text-xl font-bold text-[#124559] hover:bg-gray-50 flex-1"
                        >-</button>
                        <span className="px-4 py-3 text-xl font-black text-[#01161e] min-w-[3rem] text-center border-x-2 border-[#aec3b0] bg-[#eff6e0]/30">
                            {qty}
                        </span>
                        <button 
                             onClick={() => setQty(q => q + 1)}
                            className="px-4 py-3 text-xl font-bold text-[#124559] hover:bg-gray-50 flex-1"
                        >+</button>
                    </div>

                    <button 
                        onClick={handleAddToCart}
                        className="flex-1 bg-[#124559] text-[#eff6e0] font-black text-lg py-4 px-8 rounded-xl hover:bg-[#01161e] transition-all shadow-xl shadow-[#124559]/20 hover:-translate-y-1"
                    >
                        Add to Order - ${(subtotal).toFixed(2)}
                    </button>
                 </div>
                 <p className="text-center text-[#598392] text-xs mt-3 font-medium">
                    Secure Checkout • Ships within 24h • 100% Authentic
                 </p>
            </div>
        </div>

        {/* Related Products (Stylish & Animated) */}
        {relatedProducts.length > 0 && (
            <div className="border-t border-[#aec3b0]/30 pt-16 mt-16 animate-in slide-in-from-bottom-16 duration-1000 delay-300 fill-mode-backwards">
                 <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
                    <div>
                         <span className="text-[#124559] font-bold uppercase tracking-wider text-sm pl-1 block text-center sm:text-left">You Might Also Like</span>
                        <h2 className="text-3xl md:text-4xl font-black text-[#01161e] mt-1 text-center sm:text-left">Related Products</h2>
                    </div>
                    <Link href={`/category/${product.category}`} className="group flex items-center gap-2 text-[#124559] font-bold hover:text-[#01161e] transition-colors bg-white px-6 py-3 rounded-full border border-[#aec3b0]/30 shadow-sm hover:shadow-md">
                        <span>View More {category?.name}</span>
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                 </div>
                 <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {relatedProducts.map(rp => (
                        <div key={rp.id} className="hover:-translate-y-2 transition-transform duration-300">
                            <ProductCard product={rp} />
                        </div>
                    ))}
                 </div>
            </div>
        )}

      </div>
    </div>
  );
}
