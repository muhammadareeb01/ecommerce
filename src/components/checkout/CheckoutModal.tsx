'use client';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/store';
import { clearCart } from '@/store/features/cartSlice';

interface CheckoutModalProps {
  onClose: () => void;
}

export default function CheckoutModal({ onClose }: CheckoutModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    address: '',
    paymentMethod: 'bitcoin',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const items = useSelector((state: RootState) => state.cart.items);
  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
        const response = await fetch('/api/send-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...formData, items, total }) // formData now includes address
        });

        if (response.ok) {
            setStatus('success');
            dispatch(clearCart());
        } else {
            setStatus('error');
        }
    } catch (err) {
        console.error(err);
        setStatus('error');
    }
  };

  if (status === 'success') {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#01161e]/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-[#eff6e0] rounded-2xl p-8 max-w-md w-full text-center shadow-2xl border-2 border-[#124559]">
                <div className="w-16 h-16 bg-[#aec3b0]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#124559]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="text-2xl font-black text-[#01161e] mb-2">Order Received!</h2>
                <p className="text-[#598392] mb-6 font-medium">
                    Thank you {formData.name}. We have sent the details to our admin (syedareebali795@gmail.com). We will contact you shortly.
                </p>
                <button 
                    onClick={onClose}
                    className="w-full bg-[#124559] text-[#eff6e0] font-bold py-3 rounded-xl hover:bg-[#01161e] transition-colors"
                >
                    Close
                </button>
            </div>
        </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#01161e]/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#eff6e0] rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh] border border-[#aec3b0]">
        <div className="p-6 bg-[#eff6e0] border-b border-[#aec3b0] flex justify-between items-center flex-shrink-0">
            <h2 className="text-xl font-black text-[#01161e]">Checkout Request</h2>
            <button onClick={onClose} className="text-[#598392] hover:text-[#124559]">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-8 overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 <div>
                    <label className="block text-sm font-bold text-[#01161e] mb-2">Full Name</label>
                    <input 
                        required 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[#aec3b0] focus:ring-2 focus:ring-[#124559] focus:border-[#124559] outline-none bg-white text-[#01161e]"
                    />
                 </div>
                 <div>
                    <label className="block text-sm font-bold text-[#01161e] mb-2">WhatsApp Number</label>
                    <input 
                        required 
                        type="tel" 
                        name="whatsapp" 
                        value={formData.whatsapp}
                        onChange={handleChange}
                        placeholder="+1 234 567 8900"
                        className="w-full px-4 py-3 rounded-xl border border-[#aec3b0] focus:ring-2 focus:ring-[#124559] focus:border-[#124559] outline-none bg-white text-[#01161e]"
                    />
                 </div>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-bold text-[#01161e] mb-2">Delivery Address</label>
                <textarea
                    required
                    rows={3}
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#aec3b0] focus:ring-2 focus:ring-[#124559] focus:border-[#124559] outline-none bg-white text-[#01161e] resize-none"
                ></textarea>
            </div>

            <div className="mb-6">
                <label className="block text-sm font-bold text-[#01161e] mb-2">Email Address</label>
                <input 
                    required 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#aec3b0] focus:ring-2 focus:ring-[#124559] focus:border-[#124559] outline-none bg-white text-[#01161e]"
                />
            </div>

            <div className="mb-8">
                <label className="block text-sm font-bold text-[#01161e] mb-2">Payment Method</label>
                <select 
                    name="paymentMethod" 
                    value={formData.paymentMethod}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-[#aec3b0] focus:ring-2 focus:ring-[#124559] focus:border-[#124559] outline-none bg-white text-[#01161e]"
                >
                    <option value="bitcoin">Bitcoin (BTC) - 5% OFF</option>
                    <option value="usdt">Tether (USDT) - 5% OFF</option>
                    <option value="wire">Bank Wire Transfer</option>
                </select>
                <p className="text-xs text-[#124559] mt-2 font-bold flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                    Discount applied automatically for Crypto payments.
                </p>
            </div>

            {status === 'error' && (
                <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-xl text-center font-bold border border-red-200">
                    Something went wrong. Please try again.
                </div>
            )}

            <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#124559] text-[#eff6e0] font-bold py-4 rounded-xl hover:bg-[#01161e] transition-colors shadow-xl shadow-[#124559]/30 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
                {status === 'loading' ? 'Processing...' : `Submit Order Request ($${total.toFixed(2)})`}
            </button>
        </form>
      </div>
    </div>
  );
}
