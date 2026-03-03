'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleCart } from '@/store/features/cartSlice';
import CartDropdown from '@/components/cart/CartDropdown';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Header({ logoUrl }: { logoUrl?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const pathname = usePathname();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Categories', 
      href: '/categories', 
      hasDropdown: true,
      items: [
        { name: 'Disposable Vapes', href: '/categories/disposable-vapes' },
        { name: 'E-Liquids', href: '/categories/e-liquids' },
        { name: 'Vape Mods', href: '/categories/mods' },
        { name: 'Accessories', href: '/categories/accessories' },
      ]
    },
    { name: 'Products', href: '/products' },
    { name: 'Wholesale', href: '/wholesale' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  // Logic for header appearance - White background even at the top
  const headerBg = !isHomePage || isScrolled 
    ? 'bg-white/95 backdrop-blur-2xl border-b border-gray-100 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.08)] py-3' 
    : 'bg-white/80 backdrop-blur-xl border-b border-white/5 py-4';
  
  const textColor = 'text-black';

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${headerBg}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex justify-between items-center">
          {/* Logo - Text Only */}
          <div className="flex-1 flex items-center justify-start">
            <Link href="/" className="group flex items-center gap-2">
              <div className="text-2xl font-serif tracking-tight flex items-center gap-2">
                <span className="text-black font-bold transition-all duration-300 group-hover:tracking-wider">BULK VAPES</span>
                <span className="text-indigo-600 font-light italic">USA</span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center justify-center gap-10">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <div 
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.hasDropdown && setIsCategoriesOpen(true)}
                  onMouseLeave={() => item.hasDropdown && setIsCategoriesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`relative flex items-center gap-1.5 py-1 text-[12px] font-black uppercase tracking-[0.2em] transition-all duration-300
                      ${textColor}
                      ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'}
                    `}
                  >
                    {item.name}
                    {item.hasDropdown && (
                      <motion.div
                        animate={{ rotate: isCategoriesOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={14} className="opacity-40" />
                      </motion.div>
                    )}
                    <motion.span 
                      className={`absolute -bottom-1 left-0 w-full h-[2px] bg-indigo-600 rounded-full origin-left transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                    />
                  </Link>

                  {/* Categories Dropdown */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {isCategoriesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64"
                        >
                          <div className="bg-white rounded-2xl shadow-[0_20px_50px_-15px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden backdrop-blur-3xl">
                             <div className="p-3 grid gap-1">
                                {item.items?.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="group/item flex items-center justify-between px-4 py-3 rounded-xl hover:bg-slate-50 transition-all duration-200"
                                  >
                                    <span className="text-sm font-bold text-gray-700 group-hover/item:text-indigo-600 transition-colors">{subItem.name}</span>
                                    <ArrowRight size={14} className="text-indigo-600 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                                  </Link>
                                ))}
                             </div>
                             <div className="bg-indigo-600 p-4 text-center">
                                <Link href="/categories" className="text-xs font-black text-white uppercase tracking-widest hover:underline">
                                  View All Collections
                                </Link>
                             </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex-1 flex items-center justify-end gap-6">
             {/* Cart Icon */}
             <div className="relative">
                <button 
                    onClick={() => dispatch(toggleCart())}
                    className={`group relative p-2.5 transition-all duration-300 rounded-xl ${!isHomePage || isScrolled ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                >
                    <ShoppingBag size={22} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
                    {totalItems > 0 && (
                        <motion.span 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute top-1.5 right-1.5 bg-indigo-600 text-white text-[10px] font-black w-4.5 h-4.5 flex items-center justify-center rounded-full border-2 border-white shadow-lg"
                        >
                            {totalItems}
                        </motion.span>
                    )}
                </button>
                <CartDropdown />
             </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-xl transition-all ${!isHomePage || isScrolled ? 'text-black hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[70px] bg-white z-40 lg:hidden"
          >
            <div className="p-8 space-y-6">
              {navigation.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={item.name}
                >
                  <Link
                    href={item.href}
                    className="flex items-center justify-between text-3xl font-serif font-bold text-black group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    <ArrowRight size={24} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

