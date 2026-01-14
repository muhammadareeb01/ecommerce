'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/mockData';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/features/cartSlice';

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
        className="group relative flex flex-col h-full bg-[#eff6e0] rounded-[20px] overflow-hidden border-2 border-[#aec3b0] hover:border-[#598392] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
    >
      {/* Image Container with White Background */}
      <div className="relative aspect-[4/3] bg-white w-full overflow-hidden border-b border-[#aec3b0]/30">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
        />
        {/* Badge Removed */ }
        <div className="absolute top-4 right-4 bg-green-500 text-white text-[10px] font-bold px-3 py-1.5 rounded shadow-sm uppercase tracking-wide z-10 animate-pulse">
            10% Crypto Off
        </div>
      </div>
      
      {/* Content Container */}
      <div className="p-4 flex flex-col flex-grow">
        
        {/* Category Tag */}
        <div className="mb-2">
            <span className="inline-block bg-[#aec3b0]/30 text-[#124559] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                {product.category.replace('-', ' ')}
            </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-black text-[#01161e] mb-4 leading-tight group-hover:text-[#124559] transition-colors line-clamp-2">
            {product.name}
        </h3>
        
        {/* Price Box */}
        <div className="mt-auto bg-white/60 backdrop-blur-sm rounded-xl p-3 flex items-center justify-between shadow-sm border border-[#aec3b0]/50 mb-4">
             <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#598392] flex items-center justify-center text-[10px] font-bold text-white shadow-inner">
                    $
                </div>
                <span className="text-xl font-black text-[#01161e]">${product.price.toFixed(2)}</span>
             </div>
             {/* {product.wholesaleMinQty > 0 && (
                <span className="text-xs text-[#598392] font-medium">Min: {product.wholesaleMinQty}</span>
             )} */}
        </div>

        {/* Add to Cart Button */}
        <button 
            onClick={handleAddToCart}
            className="w-full bg-[#124559] hover:bg-[#01161e] text-[#eff6e0] font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#124559]/20"
        >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            ADD TO CART
        </button>
      </div>
    </Link>
  );
}
