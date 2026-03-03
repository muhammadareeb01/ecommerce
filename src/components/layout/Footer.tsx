import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ logoUrl }: { logoUrl?: string }) {
  return (
    <footer className="bg-[#01161e] text-[#eff6e0] pt-20 pb-10 border-t border-[#124559]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          
          {/* Brand Column (Kept for design, but links follow spec below) */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-6 block relative">
              {logoUrl ? (
                <div className="relative h-12 w-48">
                    <Image 
                        src={logoUrl} 
                        alt="Bulk Vapes Logo" 
                        fill
                        className="object-contain object-left"
                    />
                </div>
              ) : (
                <div className="text-3xl font-serif tracking-tight flex items-center gap-1.5">
                  <span className="text-white font-bold">BULK VAPES</span>
                  <span className="text-[#aec3b0] font-light italic">USA</span>
                </div>
              )}
            </Link>
            <p className="text-[#598392] mb-6 leading-relaxed max-w-sm">
              America&apos;s leading wholesale distributor for premium disposable vapes and e-liquids.
            </p>
            <div className="flex gap-4">
                <span className="w-10 h-10 bg-[#124559] rounded-full flex items-center justify-center text-[#eff6e0] font-bold">IG</span>
                <span className="w-10 h-10 bg-[#124559] rounded-full flex items-center justify-center text-[#eff6e0] font-bold">X</span>
                <span className="w-10 h-10 bg-[#124559] rounded-full flex items-center justify-center text-[#eff6e0] font-bold">FB</span>
            </div>
          </div>

          {/* Column 1 - Shop */}
          <div>
            <h3 className="text-[#eff6e0] font-bold mb-6 text-lg tracking-wide uppercase border-b border-[#124559] pb-2 inline-block">Shop</h3>
            <ul className="space-y-3 text-[#aec3b0]">
              <li><Link href="/wholesale" className="hover:text-[#eff6e0] transition-colors">Wholesale</Link></li>
              <li><Link href="/categories" className="hover:text-[#eff6e0] transition-colors">Categories</Link></li>
            </ul>
          </div>

          {/* Column 2 - Wholesale */}
          <div>
            <h3 className="text-[#eff6e0] font-bold mb-6 text-lg tracking-wide uppercase border-b border-[#124559] pb-2 inline-block">Wholesale</h3>
            <ul className="space-y-3 text-[#aec3b0]">
              <li><Link href="/distributor-info" className="hover:text-[#eff6e0] transition-colors">Distributor Info</Link></li>
              <li><Link href="/moq-info" className="hover:text-[#eff6e0] transition-colors">MOQ Info</Link></li>
              <li><Link href="/shipping" className="hover:text-[#eff6e0] transition-colors">Shipping Info</Link></li>
            </ul>
          </div>

          {/* Column 3 - Company */}
          <div>
            <h3 className="text-[#eff6e0] font-bold mb-6 text-lg tracking-wide uppercase border-b border-[#124559] pb-2 inline-block">Company</h3>
            <ul className="space-y-3 text-[#aec3b0]">
              <li><Link href="/about" className="hover:text-[#eff6e0] transition-colors">About Us</Link></li>
              <li><Link href="/compliance" className="hover:text-[#eff6e0] transition-colors">Compliance & Legality</Link></li>
              <li><Link href="/faq" className="hover:text-[#eff6e0] transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-[#eff6e0] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4 - Legal */}
          <div>
            <h3 className="text-[#eff6e0] font-bold mb-6 text-lg tracking-wide uppercase border-b border-[#124559] pb-2 inline-block">Legal</h3>
            <ul className="space-y-3 text-[#aec3b0]">
              <li><Link href="/terms" className="hover:text-[#eff6e0] transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-[#eff6e0] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/refund-policy" className="hover:text-[#eff6e0] transition-colors">Refund Policy</Link></li>
              <li><Link href="/age-policy" className="hover:text-[#eff6e0] transition-colors">Age Restriction</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-[#124559] mt-16 pt-8 text-center text-[#598392] text-sm">
          <p className="mb-2">&copy; {new Date().getFullYear()} Bulk Vapes USA. All rights reserved.</p>
         
        </div>
      </div>
    </footer>
  );
}
