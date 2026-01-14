'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-[#eff6e0] min-h-screen py-16 px-4 sm:px-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-700 fade-in">
          <div className="absolute inset-0 bg-gradient-to-r from-[#124559]/10 to-[#aec3b0]/10 blur-3xl rounded-full -z-10 max-w-2xl mx-auto h-64"></div>
          
          <span className="inline-block py-2 px-6 rounded-full bg-[#124559] text-[#eff6e0] text-xs font-black uppercase tracking-widest mb-4 shadow-lg">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-[#01161e] mb-6 tracking-tighter leading-tight">
            Contact Us
          </h1>
          <p className="text-xl text-[#598392] leading-relaxed max-w-2xl mx-auto">
            Have questions about wholesale orders, shipping, or our products? We're here to help 24/7.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 animate-in slide-in-from-bottom-8 duration-700 delay-100 fill-mode-backwards">
          
          {/* Contact Info Cards */}
          <div className="space-y-6">
            
            {/* Email Card */}
            <div className="bg-white rounded-3xl p-8 border border-[#aec3b0]/50 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#124559]/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-[#124559]/10 transition-colors"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#124559] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-[#eff6e0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-[#01161e] mb-2">Email Us</h3>
                <p className="text-[#598392] mb-3">Get a response within 24 hours</p>
                <a href="mailto:syedareebali795@gmail.com" className="text-[#124559] font-bold hover:underline">
                  syedareebali795@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-white rounded-3xl p-8 border border-[#aec3b0]/50 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-green-500/10 transition-colors"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-green-500 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-black text-[#01161e] mb-2">WhatsApp</h3>
                <p className="text-[#598392] mb-3">Instant support via chat</p>
                <a href="https://wa.me/1234567890" className="text-green-600 font-bold hover:underline">
                  Chat with us
                </a>
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-gradient-to-br from-[#124559] to-[#01161e] rounded-3xl p-8 shadow-lg text-[#eff6e0] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black mb-2">Business Hours</h3>
                <p className="text-[#aec3b0]">Available 24/7 for wholesale inquiries</p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-[#aec3b0]/50 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-[#aec3b0]/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              {status === 'success' ? (
                <div className="text-center py-12 animate-in fade-in zoom-in-50 duration-500">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#01161e] mb-2">Message Sent!</h3>
                  <p className="text-[#598392] mb-8">We'll get back to you within 24 hours.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-[#124559] font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-[#01161e] mb-2">Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#aec3b0] focus:ring-2 focus:ring-[#124559] focus:border-[#124559] outline-none text-[#01161e] transition-all bg-[#eff6e0]/20"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-[#01161e] mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#aec3b0] focus:ring-2 focus:ring-[#124559] focus:border-[#124559] outline-none text-[#01161e] transition-all bg-[#eff6e0]/20"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-[#01161e] mb-2">Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-[#aec3b0] focus:ring-2 focus:ring-[#124559] focus:border-[#124559] outline-none text-[#01161e] transition-all resize-none bg-[#eff6e0]/20"
                      placeholder="Tell us about your wholesale inquiry..."
                    ></textarea>
                  </div>

                  {status === 'error' && (
                    <div className="p-4 bg-red-50 text-red-600 rounded-xl text-center font-bold text-sm animate-in fade-in slide-in-from-top-2 duration-300">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full bg-[#124559] text-[#eff6e0] font-bold py-4 rounded-xl hover:bg-[#01161e] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
