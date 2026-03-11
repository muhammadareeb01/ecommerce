'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/mockData';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/features/cartSlice';
import { ShoppingCart, Plus, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); 
    e.stopPropagation();
    dispatch(addToCart({ product, quantity: 1 }));
  };

  return (
    <Link 
        href={`/product/${product.slug}`}
        className="group relative flex flex-col h-full bg-white/[0.03] rounded-[24px] overflow-hidden border border-white/10 hover:border-accent-blue/50 transition-all duration-700 hover:shadow-[0_0_40px_rgba(0,210,255,0.15)] hover:-translate-y-2"
    >
      {/* 🟦 Top Badge */}
      <div className="absolute top-4 left-4 z-20">
          <div className="px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-[8px] font-black uppercase tracking-[0.2em] backdrop-blur-md">
              Premium Stock
          </div>
      </div>

      {/* 🖼️ Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-white/5 border-b border-white/5">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-8 group-hover:scale-110 transition-transform duration-[1.5s] ease-out drop-shadow-2xl"
        />
        
        {/* Hover Overlay with Button */}
        <div className="absolute inset-0 bg-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-[2px] flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 shadow-2xl">
                <ArrowUpRight size={24} />
            </div>
        </div>

        {/* Floating Crypto Off Badge */}
        <div className="absolute bottom-4 right-4 bg-green-500/10 border border-green-500/30 text-green-500 text-[9px] font-black px-3 py-1.5 rounded-lg backdrop-blur-md shadow-lg animate-neon-pulse z-10">
            -10% CRYPTO
        </div>
      </div>
      
      {/* 📝 Content Container */}
      <div className="p-6 flex flex-col flex-grow relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-[-50%] left-[-50%] w-full h-full bg-accent-blue/5 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        
        {/* Category Tag */}
        <div className="mb-4 flex items-center justify-between relative z-10">
            <span className="text-accent-teal text-[10px] font-black uppercase tracking-[0.2em]">
                {product.category.replace('-', ' ')}
            </span>
            <div className="flex items-center gap-1 text-white/20">
                <Plus size={12} />
                <span className="text-[10px] font-bold">FLOW</span>
            </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-black text-white/90 mb-6 leading-[1.1] group-hover:text-accent-blue transition-colors line-clamp-2 tracking-tighter uppercase italic">
            {product.name}
        </h3>
        
        {/* Price Box - High Tech Design */}
        <div className="mt-auto flex items-end justify-between relative z-10">
             <div className="flex flex-col">
                <span className="text-[9px] font-black text-white/30 uppercase tracking-widest mb-1">MSRP / WHOLESALE</span>
                <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-black text-white italic tracking-tighter">${product.price.toFixed(2)}</span>
                    <span className="text-[10px] text-white/20 font-bold">USD</span>
                </div>
             </div>

             {/* Dynamic CTA Button */}
             <button 
                onClick={handleAddToCart}
                className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-white hover:bg-accent-blue hover:text-black hover:border-accent-blue hover:shadow-[0_0_20px_rgba(0,210,255,0.4)] transition-all duration-500"
                title="Add to Cart"
             >
                <ShoppingCart size={22} />
             </button>
        </div>
      </div>
      
      {/* Bottom Border Glow */}
      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent-blue to-accent-teal group-hover:w-full transition-all duration-700" />
    </Link>
  );
}
