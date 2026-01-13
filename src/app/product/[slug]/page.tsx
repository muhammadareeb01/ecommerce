'use client';
import { PRODUCTS, Product } from '@/data/mockData'; // Import type
import { Section } from '@/components/ui/Section';
import Image from 'next/image';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation'; // client hooks
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/features/cartSlice';

// We need to fetch data based on client params now, or pass it differently. 
// Ideally we keep this Server Component but for Redux interactivity we need a Client Component island 
// or make the whole page client. For simplicity in this demo refactor, we'll make it client or use a wrapper.
// Actually, let's keep it a Server Component and add a Client Component for the "Add to Cart" section.

// Refactoring to purely client for simplicity as we have dynamic mock data access
// OR: We stick to the existing structure but swap the button for a client component.
// Let's rewrite the whole page as client for simplest Redux integration without passing too many props down.

export default function ProductPage() {
    const params = useParams();
    const slug = params.slug as string;
    const product = PRODUCTS.find((p) => p.slug === slug);
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);

    if (!product) {
        // In a real client component, notFound() doesn't work effectively during render, 
        // but let's assume valid slugs for this walkthrough
        return <div className="p-20 text-center">Product not found</div>; 
    }

    const handleAddToCart = () => {
        dispatch(addToCart({ product, quantity: qty }));
    };

  return (
    <div className="bg-[#eff6e0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Image Gallery */}
            <div className="relative aspect-square rounded-[30px] overflow-hidden bg-white border-2 border-[#aec3b0]">
                <Image 
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-8"
                    priority
                />
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
                <div className="mb-8">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#124559]/10 text-[#124559] font-bold uppercase tracking-wider text-xs border border-[#124559]/20 mb-4">
                        {product.category.replace('-', ' ')}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-black text-[#01161e] mt-2 mb-6 leading-tight">{product.name}</h1>
                    <div className="flex items-center gap-4 flex-wrap">
                        <span className="text-4xl font-black text-[#124559]">${product.price.toFixed(2)}</span>
                        {product.wholesalePrice > 0 && (
                            <span className="px-4 py-2 bg-[#aec3b0]/30 text-[#124559] rounded-xl text-sm font-bold border border-[#aec3b0]">
                                Wholesale: ${product.wholesalePrice.toFixed(2)} (Min {product.wholesaleMinQty})
                            </span>
                        )}
                    </div>
                </div>

                <div className="prose prose-lg text-[#598392] mb-10">
                    <p className="leading-relaxed font-medium">{product.description}</p>
                    <ul className="mt-6 space-y-3">
                        {product.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-[#aec3b0]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="border-t border-[#aec3b0]/30 pt-8">
                    <div className="bg-white/50 backdrop-blur-sm border border-[#aec3b0] rounded-2xl p-6 mb-8 shadow-lg shadow-[#aec3b0]/10">
                        <div className="flex items-center gap-6 mb-8">
                            <span className="font-bold text-[#01161e] text-lg">Quantity:</span>
                            <div className="flex items-center bg-white rounded-xl border-2 border-[#aec3b0] overflow-hidden">
                                <button onClick={() => setQty(Math.max(1, qty - 1))} className="w-12 h-12 hover:bg-[#eff6e0] font-black text-[#124559] flex items-center justify-center transition-colors text-xl">-</button>
                                <span className="w-16 h-12 flex items-center justify-center font-bold text-[#01161e] text-lg bg-[#eff6e0]/30 border-x border-[#aec3b0]">{qty}</span>
                                <button onClick={() => setQty(qty + 1)} className="w-12 h-12 hover:bg-[#eff6e0] font-black text-[#124559] flex items-center justify-center transition-colors text-xl">+</button>
                            </div>
                        </div>

                        <button 
                            onClick={handleAddToCart}
                            className="w-full flex items-center justify-center gap-3 bg-[#124559] text-[#eff6e0] font-bold py-4 rounded-xl hover:bg-[#01161e] transition-all shadow-xl shadow-[#124559]/30 hover:-translate-y-1 text-lg"
                        >
                             <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
