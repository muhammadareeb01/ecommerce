'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleCart } from '@/store/features/cartSlice';
import CartDropdown from '@/components/cart/CartDropdown';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const pathname = usePathname();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const navigation = [
    { name: 'Home', href: '/' },
    
    { name: 'Products', href: '/products' },
    { name: 'Categories', href: '/categories' },
    { name: 'Wholesale', href: '/wholesale' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#eff6e0]/90 backdrop-blur-md border-b border-[#aec3b0]/30 shadow-sm">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo (Left) */}
          <div className="flex-1 flex items-center justify-start">
            <Link href="/" className="text-3xl font-black tracking-tighter text-[#01161e] flex items-center gap-1">
              BULK<span className="text-[#124559]">VAPES</span>
            </Link>
          </div>

          {/* Desktop Menu (Center) */}
          <nav className="hidden md:flex items-center justify-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-black uppercase tracking-wide transition-all border-b-2 
                    ${isActive 
                      ? 'text-[#124559] border-[#124559]' 
                      : 'text-[#01161e] border-transparent hover:text-[#124559] hover:border-[#124559]'
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions (Cart + Mobile Menu) */}
          <div className="flex-1 flex items-center justify-end gap-4">
             {/* Cart Icon */}
             <div className="relative">
                <button 
                    onClick={() => dispatch(toggleCart())}
                    className="p-3 text-[#01161e] hover:text-[#124559] transition-colors relative bg-[#aec3b0]/20 rounded-full hover:bg-[#aec3b0]/40"
                >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {totalItems > 0 && (
                        <span className="absolute -top-1 -right-1 bg-[#124559] text-[#eff6e0] text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#eff6e0]">
                            {totalItems}
                        </span>
                    )}
                </button>
                <CartDropdown />
             </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
                <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#01161e] hover:text-[#124559] p-2"
                >
                <span className="sr-only">Open menu</span>
                {isMenuOpen ? (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}
                </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#eff6e0] border-t border-[#aec3b0]/30 shadow-xl absolute w-full left-0">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-[#01161e] hover:text-[#eff6e0] hover:bg-[#124559] px-4 py-3 rounded-xl text-base font-black uppercase tracking-wide transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
