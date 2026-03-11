'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { toggleCart } from '@/store/features/cartSlice';
import CartDropdown from '@/components/cart/CartDropdown';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, ChevronDown, ArrowRight, Zap } from 'lucide-react';

export default function Header({ logoUrl }: { logoUrl?: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();
  const pathname = usePathname();

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

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
        { name: 'Disposable Vapes', href: '/category/disposable-vapes' },
        { name: '510 Cartridges', href: '/category/510-cartridges' },
        { name: 'Wax Pens', href: '/category/wax-pens' },
        { name: 'Accessories', href: '/category/accessories' },
      ]
    },
    { name: 'Products', href: '/products' },
    { name: 'Wholesale', href: '/wholesale' },
    { name: 'FAQ', href: '/faq' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  const headerBg = isScrolled 
    ? 'bg-black/80 backdrop-blur-2xl border-b border-white/5 py-3 shadow-[0_0_30px_rgba(0,0,0,0.5)]' 
    : 'bg-transparent py-5';

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Zap className="text-accent-blue animate-pulse" size={24} />
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tighter text-white leading-none">VAPEFLOW</span>
                <span className="text-[10px] font-bold text-accent-blue tracking-[0.3em] uppercase opacity-80">USA</span>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">
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
                    className={`flex items-center gap-1 text-xs font-bold uppercase tracking-widest transition-all duration-300
                      ${isActive ? 'text-accent-blue' : 'text-white/60 hover:text-white'}
                    `}
                  >
                    {item.name}
                    {item.hasDropdown && <ChevronDown size={14} className="opacity-40" />}
                  </Link>
                  {isActive && (
                    <motion.div 
                      layoutId="nav-active"
                      className="absolute -bottom-1 left-0 w-full h-[1px] bg-accent-blue shadow-[0_0_10px_rgba(0,210,255,0.8)]"
                    />
                  )}

                  {/* Dropdown Overlay */}
                  {item.hasDropdown && (
                    <AnimatePresence>
                      {isCategoriesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-64"
                        >
                          <div className="glass-card p-4 border-white/10 ring-1 ring-white/5">
                             <div className="grid gap-1">
                                {item.items?.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    href={subItem.href}
                                    className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-white/5 transition-all group/item"
                                  >
                                    <span className="text-sm font-bold text-white/70 group-hover/item:text-accent-blue">{subItem.name}</span>
                                    <ArrowRight size={14} className="text-accent-blue opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all" />
                                  </Link>
                                ))}
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

          {/* Actions */}
          <div className="flex items-center gap-6">
             <button 
                onClick={() => dispatch(toggleCart())}
                className="relative p-2.5 text-white/80 hover:text-accent-blue transition-colors"
             >
                <ShoppingBag size={22} />
                {totalItems > 0 && (
                  <span className="absolute top-1.5 right-1.5 bg-accent-blue text-black text-[10px] font-black w-4.5 h-4.5 flex items-center justify-center rounded-full ring-2 ring-black">
                    {totalItems}
                  </span>
                )}
             </button>
             <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 text-white"
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
             </button>
          </div>
        </div>
      </div>

      <CartDropdown />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 top-[70px] bg-black/95 backdrop-blur-3xl z-40 lg:hidden p-8"
          >
            <div className="space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-3xl font-black text-white hover:text-accent-blue transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}


