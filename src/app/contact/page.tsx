'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for actual logic
    if (typeof window !== 'undefined') {
        window.alert('Thank you! Your message has been sent to our support team.');
    }
  };

  return (
    <div className="bg-[#eff6e0] min-h-screen font-sans">
      
      {/* 1. HERO HEADER (Immersive) */}
      <div className="relative h-[400px] w-full bg-[#01161e] overflow-hidden">
         <Image 
            src="/images/contact-hero.png" // Generated Map Image
            alt="Global Connections"
            fill
            className="object-cover opacity-60"
            priority
         />
         <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#eff6e0]" />
         <div className="absolute inset-0 flex flex-col items-center justify-center pt-10 px-4">
            <h1 className="text-5xl md:text-7xl font-black text-[#eff6e0] tracking-tighter uppercase drop-shadow-2xl text-center">
                Get In Touch
            </h1>
            <p className="text-[#aec3b0] text-xl font-medium mt-4 max-w-lg text-center">
                We are here to help you scale. Reach out to our dedicated wholesale team.
            </p>
         </div>
      </div>

      {/* 2. MAIN CONTENT (Offset Layout) */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-20 relative z-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            
            {/* LEFT: Contact Information Cards */}
            <div className="space-y-6">
                
                {/* Info Card 1 */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#aec3b0]/30 hover:shadow-2xl transition-all hover:-translate-y-1">
                    <div className="w-14 h-14 bg-[#124559] rounded-2xl flex items-center justify-center text-[#eff6e0] mb-6">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#01161e] mb-2">Email Support</h3>
                    <p className="text-[#598392] mb-4">For general inquiries and wholesale applications.</p>
                    <a href="mailto:syedareebali795@gmail.com" className="text-[#124559] font-black text-lg hover:underline">
                        syedareebali795@gmail.com
                    </a>
                </div>

                {/* Info Card 2 */}
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#aec3b0]/30 hover:shadow-2xl transition-all hover:-translate-y-1">
                    <div className="w-14 h-14 bg-[#124559] rounded-2xl flex items-center justify-center text-[#eff6e0] mb-6">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#01161e] mb-2">Phone</h3>
                    <p className="text-[#598392] mb-4">Mon-Fri from 9am to 6pm EST.</p>
                    <a href="tel:+15550000000" className="text-[#124559] font-black text-lg hover:underline">
                        +1 (555) 000-0000
                    </a>
                </div>

                 {/* Info Card 3 */}
                 <div className="bg-white p-8 rounded-3xl shadow-xl border border-[#aec3b0]/30 hover:shadow-2xl transition-all hover:-translate-y-1">
                    <div className="w-14 h-14 bg-[#124559] rounded-2xl flex items-center justify-center text-[#eff6e0] mb-6">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13 21.314v-1.657a2 2 0 00-2-2H5a2 2 0 00-2 2v4a1 1 0 001 1h6.657c1.332 0 2.607-.53 3.535-1.464l3.536-3.536a2.5 2.5 0 00-3.536-3.536z" />
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7-7v14" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-[#01161e] mb-2">Live Chat / WhatsApp</h3>
                    <p className="text-[#598392] mb-4">Instant support for urgent orders.</p>
                    <a href="#" className="text-[#124559] font-black text-lg hover:underline">
                        Start Chat
                    </a>
                </div>

            </div>

            {/* RIGHT: Contact Form */}
            <div className="bg-[#124559] rounded-[40px] p-10 md:p-14 text-white shadow-2xl relative overflow-hidden">
                {/* Decor elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#eff6e0] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                
                <h2 className="text-3xl font-black uppercase tracking-tight mb-2 relative z-10">Send a Message</h2>
                <p className="text-[#aec3b0] mb-10 relative z-10">We usually respond within 24 hours.</p>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div>
                        <label className="block text-sm font-bold uppercase tracking-wider text-[#aec3b0] mb-2">Your Name</label>
                        <input 
                            type="text" 
                            className="w-full bg-[#01161e]/30 border border-[#aec3b0]/30 rounded-xl px-4 py-4 focus:bg-[#01161e]/50 focus:border-[#eff6e0] outline-none transition-colors text-white font-medium"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold uppercase tracking-wider text-[#aec3b0] mb-2">Email Address</label>
                        <input 
                            type="email" 
                            className="w-full bg-[#01161e]/30 border border-[#aec3b0]/30 rounded-xl px-4 py-4 focus:bg-[#01161e]/50 focus:border-[#eff6e0] outline-none transition-colors text-white font-medium"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={e => setFormData({...formData, email: e.target.value})}
                        />
                    </div>
                     <div>
                        <label className="block text-sm font-bold uppercase tracking-wider text-[#aec3b0] mb-2">Subject</label>
                        <select 
                             className="w-full bg-[#01161e]/30 border border-[#aec3b0]/30 rounded-xl px-4 py-4 focus:bg-[#01161e]/50 focus:border-[#eff6e0] outline-none transition-colors text-white font-medium appearance-none"
                             value={formData.subject}
                             onChange={e => setFormData({...formData, subject: e.target.value})}
                        >
                            <option className="bg-[#01161e] text-[#aec3b0]">General Inquiry</option>
                            <option className="bg-[#01161e] text-[#aec3b0]">Wholesale Application</option>
                            <option className="bg-[#01161e] text-[#aec3b0]">Order Issue</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-bold uppercase tracking-wider text-[#aec3b0] mb-2">Message</label>
                        <textarea 
                            rows={4}
                            className="w-full bg-[#01161e]/30 border border-[#aec3b0]/30 rounded-xl px-4 py-4 focus:bg-[#01161e]/50 focus:border-[#eff6e0] outline-none transition-colors text-white font-medium resize-none"
                            placeholder="How can we help you?"
                            value={formData.message}
                            onChange={e => setFormData({...formData, message: e.target.value})}
                        />
                    </div>

                    <button type="submit" className="w-full bg-[#eff6e0] text-[#01161e] py-4 rounded-xl font-black uppercase tracking-wider hover:bg-[#white] hover:scale-[1.02] transition-all shadow-lg mt-4">
                        Send Message
                    </button>
                </form>
            </div>

        </div>
      </div>

    </div>
  );
}
