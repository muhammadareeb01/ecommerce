import { Section } from '@/components/ui/Section';

export default function ContactPage() {
  return (
    <div className="bg-[#eff6e0] min-h-screen">
      <div className="bg-[#01161e] text-[#eff6e0] py-20 rounded-b-[4rem] shadow-xl mb-12 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
            <span className="text-[#aec3b0] font-bold uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
            <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Contact Us</h1>
            <p className="text-[#598392] text-lg max-w-2xl mx-auto">
                We are dedicated to supporting our wholesale partners. Reach out anytime.
            </p>
         </div>
      </div>

      <Section className="-mt-20 relative z-20">
        <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Contact Card 1 */}
                <div className="bg-[#eff6e0] border-2 border-[#aec3b0] rounded-3xl p-8 shadow-xl hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-12 h-12 bg-[#124559] rounded-xl flex items-center justify-center text-[#eff6e0] mb-6 shadow-lg">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <h3 className="text-xl font-black text-[#01161e] mb-2">Email Support</h3>
                    <p className="text-[#598392] mb-4">For general inquiries and invoice requests.</p>
                    <a href="mailto:sales@bulkvapes.usa" className="text-[#124559] font-bold text-lg hover:underline decoration-[#aec3b0]">sales@bulkvapes.usa</a>
                </div>

                {/* Contact Card 2 */}
                <div className="bg-[#eff6e0] border-2 border-[#aec3b0] rounded-3xl p-8 shadow-xl hover:-translate-y-1 transition-transform duration-300">
                    <div className="w-12 h-12 bg-[#124559] rounded-xl flex items-center justify-center text-[#eff6e0] mb-6 shadow-lg">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>
                    </div>
                    <h3 className="text-xl font-black text-[#01161e] mb-2">WhatsApp Direct</h3>
                    <p className="text-[#598392] mb-4">Instant chat for wholesale partners.</p>
                    <a href="#" className="text-[#124559] font-bold text-lg hover:underline decoration-[#aec3b0]">+1 (555) 123-4567</a>
                </div>
            </div>

            <div className="bg-[#01161e] rounded-3xl p-8 md:p-12 mt-12 text-center shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl font-black text-[#eff6e0] mb-4">Need to place an order?</h2>
                    <p className="text-[#aec3b0] mb-8 max-w-lg mx-auto">
                        Browse our catalog, add items to your cart, and checkout to request an invoice automatically.
                    </p>
                    <a href="/categories" className="inline-block px-10 py-4 bg-[#eff6e0] text-[#01161e] font-bold rounded-xl hover:bg-[#aec3b0] transition-colors shadow-lg">
                        Start Shopping
                    </a>
                </div>
            </div>
        </div>
      </Section>
    </div>
  );
}
