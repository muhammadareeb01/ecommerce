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
            <div className="glass-card p-6 md:p-8 flex items-start gap-4 hover:border-accent-blue/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center shrink-0">
                <Mail className="text-accent-blue" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Email Support</h3>
                <p className="text-sm text-white/50 mb-2">For general inquiries and order updates.</p>
                <a href="mailto:support@vapeflow.com" className="text-accent-blue font-bold text-sm hover:underline">support@example.com</a>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 flex items-start gap-4 hover:border-accent-teal/30 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent-teal/10 flex items-center justify-center shrink-0">
                <MessageCircle className="text-accent-teal" size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Live Chat</h3>
                <p className="text-sm text-white/50 mb-2">Available Mon-Fri, 9am - 6pm EST.</p>
                <div className="inline-flex items-center gap-2 text-xs font-bold text-accent-teal uppercase tracking-widest mt-1">
                  <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse" /> Online Now
                </div>
              </div>
            </div>

            <div className="glass-card p-6 md:p-8 flex flex-col bg-white/5 border-white/10 mt-4">
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
