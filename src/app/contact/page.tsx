'use client';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, ArrowRight, HelpCircle, FileText } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050505] pt-32 pb-24">
      {/* 1. Hero */}
      <section className="container mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-blue/10 border border-accent-blue/30 text-accent-blue text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-6 animate-neon-pulse">
            24/7 Support
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Get In <span className="bg-gradient-to-r from-accent-blue to-accent-teal bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-white/60 text-base sm:text-lg md:text-xl leading-relaxed">
            We're here to help. Reach out to our team for any product inquiries, order support, or wholesale questions.
          </p>
        </motion.div>
      </section>

      {/* 2. Contact Methods & 3. Contact Form */}
      <section className="container mx-auto px-6 max-w-6xl mb-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Contact Information & 4. FAQ Links */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/3 flex flex-col gap-4"
          >
            <div className="glass-card p-6 md:p-8 flex flex-col gap-4">
              <h3 className="text-xl font-bold text-white mb-2">Response Time & What Happens Next</h3>
              <p className="text-sm text-white/70 mb-4">Once your message is submitted:</p>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-xs font-bold mt-1">1</div>
                <div>
                  <h4 className="font-bold text-white">Manual Review</h4>
                  <p className="text-sm text-white/50">Our team reviews your inquiry manually.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-xs font-bold mt-1">2</div>
                <div>
                  <h4 className="font-bold text-white">Direct Response</h4>
                  <p className="text-sm text-white/50">We respond with the relevant information or next steps.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-xs font-bold mt-1">3</div>
                <div>
                  <h4 className="font-bold text-white">Transaction Details</h4>
                  <p className="text-sm text-white/50">If applicable, order or payment details are shared directly with you.</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 flex flex-col gap-4">
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold text-white">Important Information</h3>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">No Automated Checkout</h4>
                  <p className="text-xs text-white/50 mt-1">We do not use automated checkout or instant payment systems. Every interaction is human-to-human.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Direct Communication</h4>
                  <p className="text-xs text-white/50 mt-1">All communication is handled directly by our team. You will never speak to a bot.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Manual Processing</h4>
                  <p className="text-xs text-white/50 mt-1">Orders, wholesale requests, and general inquiries are processed manually to ensure accuracy.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Transparency</h4>
                  <p className="text-xs text-white/50 mt-1">We prioritize clarity, transparency, and direct communication in every step of the process.</p>
                </div>
              </div>
            </div>
            
            <div className="glass-card p-6 md:p-8 flex flex-col bg-white/5 border-white/10 mt-2">
              <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-xs opacity-50">Quick Help</h4>
              <Link href="/faq" className="flex items-center justify-between text-sm text-white/80 hover:text-white py-2 group">
                <span className="flex items-center gap-2"><HelpCircle size={16} /> FAQ Center</span>
                <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent-blue" />
              </Link>
              <Link href="/policies" className="flex items-center justify-between text-sm text-white/80 hover:text-white py-2 group">
                <span className="flex items-center gap-2"><FileText size={16} /> Company Policies</span>
                <ArrowRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent-blue" />
              </Link>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-2/3"
          >
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-2xl font-black text-white mb-6">Send a Message</h2>
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/50">Full Name</label>
                    <input type="text" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue/50 transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/50">Email Address</label>
                    <input type="email" className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue/50 transition-colors" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/50">WhatsApp Number*</label>
                    <input type="tel" required className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue/50 transition-colors" placeholder="+1234567890" />
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-xs font-bold uppercase tracking-widest text-white/50">Inquiry Type</label>
                    <select className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue/50 transition-colors appearance-none">
                      <option value="general">General Question</option>
                      <option value="order">Order Status</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="support">Product Support</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2 text-left">
                  <label className="text-xs font-bold uppercase tracking-widest text-white/50">Message</label>
                  <textarea rows={5} className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue/50 transition-colors resize-none" placeholder="How can we help you today?"></textarea>
                </div>

                <button type="submit" className="w-full btn-neon-blue py-4 font-bold text-lg flex justify-center items-center gap-2">
                  Submit Message
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </section>

      {/* 5. Additional Links / Quick Links */}
      <section className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
           <Link href="/categories" className="flex items-center gap-4 text-white hover:text-accent-blue transition-colors p-4 rounded-xl hover:bg-white/5">
             <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
               <ArrowRight size={16} />
             </div>
             <div>
               <h4 className="font-bold text-sm mb-1">Browse Categories</h4>
               <p className="text-xs text-white/50">Explore our product catalog.</p>
             </div>
           </Link>
           <Link href="/wholesale" className="flex items-center gap-4 text-white hover:text-accent-purple transition-colors p-4 rounded-xl hover:bg-white/5">
             <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
               <ArrowRight size={16} />
             </div>
             <div>
               <h4 className="font-bold text-sm mb-1">Wholesale Portal</h4>
               <p className="text-xs text-white/50">Access B2B pricing & features.</p>
             </div>
           </Link>
           <Link href="/blog" className="flex items-center gap-4 text-white hover:text-accent-teal transition-colors p-4 rounded-xl hover:bg-white/5">
             <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center shrink-0">
               <ArrowRight size={16} />
             </div>
             <div>
               <h4 className="font-bold text-sm mb-1">Latest News</h4>
               <p className="text-xs text-white/50">Read our blog and guides.</p>
             </div>
           </Link>
        </div>
      </section>

    </div>
  );
}
