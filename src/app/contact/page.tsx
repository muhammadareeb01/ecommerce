'use client';
import { motion } from 'framer-motion';
import {  ArrowRight, HelpCircle, FileText, Clock } from 'lucide-react';
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
          
          {/* Contact Information Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-1/3 flex flex-col gap-6"
          >
            {/* Guaranteed Response Time Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-8 relative overflow-hidden group border-white/10 hover:border-accent-blue/40 transition-all duration-700 shadow-2xl shadow-accent-blue/5"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-accent-blue/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              <div className="absolute -top-10 -right-10 p-4 opacity-[0.02] group-hover:opacity-10 transition-all duration-1000 rotate-[15deg] group-hover:rotate-[25deg] group-hover:scale-110">
                <Clock size={200} />
              </div>

              <div className="relative z-10 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center text-accent-blue group-hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-500">
                    <Clock size={24} className="group-hover:rotate-12 transition-transform duration-500" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[10px] font-black text-accent-blue tracking-[0.2em] uppercase">Service level</h3>
                    <span className="text-sm font-bold text-white/90">Response Time</span>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <h2 className="text-lg font-medium text-white/60">Guaranteed within</h2>
                  <div className="flex items-baseline gap-2">
                    <h2 className="text-4xl md:text-5xl font-black text-white italic tracking-tighter uppercase">An Hour</h2>
                    <span className="text-accent-teal animate-pulse text-2xl">!</span>
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
                <p className="text-sm text-white/50 leading-relaxed">
                  This applies to both <span className="text-white font-semibold">Email</span> and <span className="text-white font-semibold">WhatsApp</span>, with WhatsApp inquiry typically receiving the <span className="text-accent-blue font-bold">fastest replies</span>.
                </p>
              </div>
            </motion.div>

            {/* Box 1: Support Process */}
            <div className="glass-card p-6 md:p-8 flex flex-col gap-6 border-white/5 hover:border-accent-blue/20 transition-all duration-500 bg-white/[0.02]">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-blue" />
                  Response Time & What Happens Next
                </h3>
                <p className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Once your message is submitted:</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-white/5 text-white flex items-center justify-center shrink-0 text-[10px] font-black border border-white/10">01</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-[13px]">Manual Review</h4>
                    <p className="text-[11px] text-white/40 leading-relaxed mt-1">Our team reviews your inquiry individually within 60 minutes.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-white/5 text-white flex items-center justify-center shrink-0 text-[10px] font-black border border-white/10">02</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-[13px]">Direct Response</h4>
                    <p className="text-[11px] text-white/40 leading-relaxed mt-1">We reach out via your preferred method (Email/WhatsApp).</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-white/5 text-white flex items-center justify-center shrink-0 text-[10px] font-black border border-white/10">03</div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-[13px]">Finalization</h4>
                    <p className="text-[11px] text-white/40 leading-relaxed mt-1">Orders and wholesale requests are finalized securely.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 flex flex-col bg-white/5 border-white/10">
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

          {/* Contact Form & Important Info */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-2/3 flex flex-col gap-8"
          >
            <div className="glass-card p-8 md:p-12">
              <h2 className="text-2xl font-black text-white mb-6 underline decoration-accent-blue/20 underline-offset-[12px]">Send a Message</h2>
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
                    <select className="w-full bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-blue/50 transition-colors appearance-none cursor-pointer">
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

                <button type="submit" className="w-full btn-neon-blue py-4 font-bold text-lg flex justify-center items-center gap-2 group">
                  Submit Message
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Box 2: Important Information */}
            <div className="glass-card p-8 md:p-10 flex flex-col gap-8 border-white/5 hover:border-accent-teal/20 transition-all duration-500 bg-white/[0.01]">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-6">
                <h3 className="text-2xl font-black text-white tracking-tight uppercase italic">
                  Important <span className="text-accent-teal">Information</span>
                </h3>
                <div className="px-4 py-1.5 rounded-full bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-[10px] font-bold uppercase tracking-[0.2em]">
                  Retail & Wholesale Policy
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center shrink-0 mt-1 border border-green-500/20 group-hover:bg-green-500 group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-[15px] mb-2 uppercase tracking-wide">No Automated Checkout</h4>
                    <p className="text-[12px] text-white/40 leading-relaxed font-medium">We do not use automated checkout or instant payment systems. Every interaction is human-to-human.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center shrink-0 mt-1 border border-green-500/20 group-hover:bg-green-500 group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-[15px] mb-2 uppercase tracking-wide">Direct Communication</h4>
                    <p className="text-[12px] text-white/40 leading-relaxed font-medium">All communication is handled directly by our team. You will never speak to a bot.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center shrink-0 mt-1 border border-green-500/20 group-hover:bg-green-500 group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-[15px] mb-2 uppercase tracking-wide">Manual Processing</h4>
                    <p className="text-[12px] text-white/40 leading-relaxed font-medium">Orders and general inquiries are processed manually to ensure accuracy.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-xl bg-green-500/10 text-green-500 flex items-center justify-center shrink-0 mt-1 border border-green-500/20 group-hover:bg-green-500 group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white text-[15px] mb-2 uppercase tracking-wide">Transparency</h4>
                    <p className="text-[12px] text-white/40 leading-relaxed font-medium">We prioritize clarity and transparency in every step of our wholesale process.</p>
                  </div>
                </div>
              </div>
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
