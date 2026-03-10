import Link from 'next/link';
import { Zap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-3xl pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-accent-blue/5 blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          
          <div className="lg:col-span-2">
            <Link href="/" className="group flex items-center gap-2 mb-8">
              <Zap className="text-accent-blue" size={24} />
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-white leading-none">VAPEFLOW</span>
                <span className="text-[10px] font-bold text-accent-blue tracking-[0.3em] uppercase opacity-80">USA</span>
              </div>
            </Link>
            <p className="text-white/40 mb-8 leading-relaxed max-w-sm">
              America's leading wholesale distributor for premium disposable vapes and e-liquids. Built for performance and reliability.
            </p>
            <div className="flex gap-4">
                {['IG', 'X', 'FB'].map((social) => (
                  <span key={social} className="w-10 h-10 glass-card flex items-center justify-center text-white/60 font-bold hover:text-accent-blue hover:border-accent-blue/40 transition-all cursor-pointer">
                    {social}
                  </span>
                ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Shop</h3>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><Link href="/wholesale" className="hover:text-accent-blue transition-colors">Wholesale</Link></li>
              <li><Link href="/categories" className="hover:text-accent-blue transition-colors">Categories</Link></li>
              <li><Link href="/products" className="hover:text-accent-blue transition-colors">All Products</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Wholesale</h3>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><Link href="/distributor-info" className="hover:text-accent-blue transition-colors">Distributor Info</Link></li>
              <li><Link href="/moq-info" className="hover:text-accent-blue transition-colors">MOQ Info</Link></li>
              <li><Link href="/shipping" className="hover:text-accent-blue transition-colors">Shipping Info</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Company</h3>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><Link href="/about" className="hover:text-accent-blue transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-accent-blue transition-colors">Contact</Link></li>
              <li><Link href="/faq" className="hover:text-accent-blue transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-xs uppercase tracking-[0.2em]">Legal</h3>
            <ul className="space-y-4 text-white/40 text-sm">
              <li><Link href="/terms" className="hover:text-accent-blue transition-colors">Terms</Link></li>
              <li><Link href="/privacy" className="hover:text-accent-blue transition-colors">Privacy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-accent-blue transition-colors">Refunds</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/20 text-[10px] font-bold uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} VAPEFLOW ANTIGRAVITY. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">SECURE CHECKOUT</span>
            <span className="hover:text-white transition-colors cursor-pointer">CRYPTO ACCEPTED</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

