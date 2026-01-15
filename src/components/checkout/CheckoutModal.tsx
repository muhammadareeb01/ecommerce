'use client';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { RootState } from '@/store/store';
import { clearCart } from '@/store/features/cartSlice';
import SuccessModal from '@/components/ui/SuccessModal';

type PaymentMethod = 'bitcoin' | 'ethereum' | 'usdt' | 'bank' | 'wire' | 'uk_bank' | 'revolut' | 'paypal' | 'cashapp' | 'apple_pay';

interface CheckoutModalProps {
  onClose: () => void;
  initialPaymentMethod?: PaymentMethod;
}

export default function CheckoutModal({ onClose, initialPaymentMethod = 'bitcoin' }: CheckoutModalProps) {
  const router = useRouter();
  const dispatch = useDispatch();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    address: '',
    contactMethod: 'whatsapp', // New Field
    notes: '', // New Field
    paymentMethod: initialPaymentMethod,
    showContactDropdown: false,
    showPaymentDropdown: false,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  
  const items = useSelector((state: RootState) => state.cart.items);
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  // Discount Logic - same as cart page
  const isCrypto = ['bitcoin', 'ethereum', 'usdt'].includes(formData.paymentMethod);
  const isRevolut = formData.paymentMethod === 'revolut';
  
  let discountRate = 0;
  if (isCrypto) discountRate = 0.10;
  else if (isRevolut) discountRate = 0.05;

  const discountAmount = subtotal * discountRate;
  const finalTotal = subtotal - discountAmount;

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
            body: JSON.stringify({ 
                ...formData, 
                items, 
                total: finalTotal, 
                subtotal,
                discount: discountAmount,
                isCrypto,
                isRevolut
            })
        });

        if (response.ok) {
            setStatus('success');
            dispatch(clearCart());
            toast.success("🎉 Order request sent successfully! Check your email for confirmation.", { 
                autoClose: 3000 
            });
            setShowSuccessModal(true);
            
            // Redirect to home page after 3.5 seconds (after toast closes)
            setTimeout(() => {
                router.push('/');
                onClose();
            }, 3500);
        } else {
            setStatus('error');
        }
    } catch (err) {
        console.error(err);
        setStatus('error');
    }
  };

  const handleSuccessModalClose = () => {
    setShowSuccessModal(false);
    onClose();
    router.push('/');
  };

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
            
           

            {/* Contact Info Group */}
            <div className="mb-8">
                 <h3 className="text-[#124559] font-bold uppercase tracking-wider text-xs mb-4 border-b border-[#aec3b0]/30 pb-2">Contact Information</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
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
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
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
                    <div>
                         <label className="block text-sm font-bold text-[#01161e] mb-2">Preferred Contact Method</label>
                         <div className="relative">
                            <button
                                type="button"
                                onClick={() => setFormData(p => ({ ...p, showContactDropdown: !p.showContactDropdown as any, showPaymentDropdown: false as any }))}
                                className="w-full px-4 py-3 text-left rounded-xl border border-[#aec3b0] bg-white text-[#01161e] flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#124559]"
                            >
                                <span className="capitalize flex items-center gap-2">
                                    {formData.contactMethod === 'whatsapp' && (
                                        <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.698c1.005.572 1.903.87 3.05.87 3.196 0 5.775-2.586 5.775-5.766 0-3.18-2.579-5.767-5.766-5.767zm0 9.778c-.966 0-1.78-.291-2.576-.733l-1.48.389.395-1.444c-.495-.838-.756-1.637-.756-2.67 0-2.404 1.956-4.36 4.362-4.36 2.407 0 4.365 1.956 4.365 4.36.004 2.405-1.954 4.362-4.36 4.362z"/></svg> 
                                    )}
                                    {formData.contactMethod === 'email' && (
                                        <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    )}
                                    {formData.contactMethod === 'phone' && (
                                        <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    )}
                                    {formData.contactMethod === 'whatsapp' ? 'WhatsApp' : formData.contactMethod === 'email' ? 'Email' : 'Phone Call'}
                                </span>
                                <svg className={`w-5 h-5 text-[#598392] transition-transform ${formData.showContactDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            {formData.showContactDropdown && (
                                <div className="absolute z-20 w-full mt-1 bg-white border border-[#aec3b0] rounded-xl shadow-xl overflow-hidden animate-in fade-in zoom-in-50 duration-200">
                                    {[
                                        { id: 'whatsapp', label: 'WhatsApp', icon: <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.592 2.654-.698c1.005.572 1.903.87 3.05.87 3.196 0 5.775-2.586 5.775-5.766 0-3.18-2.579-5.767-5.766-5.767zm0 9.778c-.966 0-1.78-.291-2.576-.733l-1.48.389.395-1.444c-.495-.838-.756-1.637-.756-2.67 0-2.404 1.956-4.36 4.362-4.36 2.407 0 4.365 1.956 4.365 4.36.004 2.405-1.954 4.362-4.36 4.362z"/></svg> },
                                        { id: 'email', label: 'Email', icon: <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> },
                                        { id: 'phone', label: 'Phone Call', icon: <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg> }
                                    ].map((option) => (
                                        <div 
                                            key={option.id}
                                            onClick={() => {
                                                handleChange({ target: { name: 'contactMethod', value: option.id } } as any);
                                                setFormData(p => ({ ...p, showContactDropdown: false as any }));
                                            }}
                                            className={`px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-[#eff6e0] transition-colors ${formData.contactMethod === option.id ? 'bg-[#eff6e0] font-bold text-[#124559]' : 'text-[#01161e]'}`}
                                        >
                                            {option.icon}
                                            {option.label}
                                        </div>
                                    ))}
                                </div>
                            )}
                         </div>
                    </div>
                 </div>
            </div>

            {/* Delivery Info Group */}
            <div className="mb-8">
                <h3 className="text-[#124559] font-bold uppercase tracking-wider text-xs mb-4 border-b border-[#aec3b0]/30 pb-2">Delivery Details</h3>
                <div className="mb-4">
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
                 <div>
                    <label className="block text-sm font-bold text-[#01161e] mb-2">Special Notes (Optional)</label>
                    <textarea
                        rows={2}
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Gate code, delivery instructions, etc."
                        className="w-full px-4 py-3 rounded-xl border border-[#aec3b0] focus:ring-2 focus:ring-[#124559] focus:border-[#124559] outline-none bg-white text-[#01161e] resize-none"
                    ></textarea>
                </div>
            </div>

            {/* Payment Group */}
            <div className="mb-8">
                 <h3 className="text-[#124559] font-bold uppercase tracking-wider text-xs mb-4 border-b border-[#aec3b0]/30 pb-2">Payment Selection</h3>
                <div className="relative">
                    <button
                        type="button"
                        onClick={() => setFormData(p => ({ ...p, showPaymentDropdown: !p.showPaymentDropdown as any, showContactDropdown: false as any }))}
                        className="w-full px-4 py-4 text-left rounded-xl border-2 border-[#124559] bg-white text-[#01161e] flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-[#124559]/20 shadow-sm hover:bg-gray-50 transition-colors"
                    >
                         <div className="flex items-center gap-3">
                            <span className="text-2xl">
                                {['bitcoin', 'ethereum', 'usdt'].includes(formData.paymentMethod) ? '💳' : '🏦'}
                            </span>
                            <div>
                                <span className="block font-bold text-lg leading-none mb-1">
                                    {formData.paymentMethod === 'bitcoin' && 'Bitcoin (BTC)'}
                                    {formData.paymentMethod === 'ethereum' && 'Ethereum (ETH)'}
                                    {formData.paymentMethod === 'usdt' && 'Tether (USDT - TRC20)'}
                                    {formData.paymentMethod === 'bank' && 'Bank Transfer'}
                                    {formData.paymentMethod === 'wire' && 'Wire Transfer'}
                                    {formData.paymentMethod === 'uk_bank' && 'UK Bank Transfer'}
                                    {formData.paymentMethod === 'revolut' && 'Revolut Card/Crypto'}
                                    {formData.paymentMethod === 'paypal' && 'PayPal'}
                                    {formData.paymentMethod === 'cashapp' && 'CashApp'}
                                    {formData.paymentMethod === 'apple_pay' && 'USA Apple Pay'}
                                </span>
                                {isCrypto && (
                                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full inline-block">10% Discount Applied</span>
                                )}
                                {isRevolut && (
                                    <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full inline-block">5% Discount Applied</span>
                                )}
                            </div>
                         </div>
                        <svg className={`w-6 h-6 text-[#124559] transition-transform duration-200 ${formData.showPaymentDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {formData.showPaymentDropdown && (
                        <div className="absolute bottom-full mb-2 z-20 w-full bg-white border-2 border-[#124559] rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200">
                            {/* Crypto Group */}
                            <div className="bg-gray-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#598392] border-b border-gray-100">
                                Crypto (10% Discount)
                            </div>
                            {[
                                { id: 'bitcoin', label: 'Bitcoin (BTC)', icon: '₿' },
                                { id: 'ethereum', label: 'Ethereum (ETH)', icon: 'Ξ' },
                                { id: 'usdt', label: 'Tether (USDT - TRC20)', icon: '₮' }
                            ].map((option) => (
                                <div 
                                    key={option.id}
                                    onClick={() => {
                                        handleChange({ target: { name: 'paymentMethod', value: option.id } } as any);
                                        setFormData(p => ({ ...p, showPaymentDropdown: false as any }));
                                    }}
                                    className={`px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-[#124559] hover:text-white transition-colors ${formData.paymentMethod === option.id ? 'bg-[#124559] text-white' : 'text-[#01161e]'}`}
                                >
                                    <span className="text-xl w-6 text-center">{option.icon}</span>
                                    <span className="font-bold">{option.label}</span>
                                </div>
                            ))}

                            {/* Other Payment Methods */}
                            <div className="bg-gray-50 px-4 py-2 text-xs font-black uppercase tracking-wider text-[#598392] border-b border-gray-100 border-t">
                                Other Payment Methods
                            </div>
                             {[
                                { id: 'wire', label: 'Wire Transfer', icon: '💳' },
                                { id: 'uk_bank', label: 'UK Bank Transfer', icon: '🇬🇧' },
                                { id: 'revolut', label: 'Revolut Card/Crypto (-5%)', icon: '🇷' },
                                { id: 'paypal', label: 'PayPal', icon: '🅿️' },
                                { id: 'cashapp', label: 'CashApp', icon: '💵' },
                                { id: 'apple_pay', label: 'USA Apple Pay', icon: '🍎' }
                            ].map((option) => (
                                <div 
                                    key={option.id}
                                    onClick={() => {
                                        handleChange({ target: { name: 'paymentMethod', value: option.id } } as any);
                                        setFormData(p => ({ ...p, showPaymentDropdown: false as any }));
                                    }}
                                    className={`px-4 py-3 flex items-center gap-3 cursor-pointer hover:bg-[#124559] hover:text-white transition-colors ${formData.paymentMethod === option.id ? 'bg-[#124559] text-white' : 'text-[#01161e]'}`}
                                >
                                    <span className="text-xl w-6 text-center">{option.icon}</span>
                                    <span className="font-bold">{option.label}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                
                {isCrypto ? (
                     <p className="text-sm text-green-700 mt-3 font-bold flex items-center bg-green-100 p-3 rounded-xl border border-green-200 animate-in fade-in slide-in-from-top-2">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                        10% Crypto Discount Applied!
                    </p>
                ) : isRevolut ? (
                    <p className="text-sm text-green-700 mt-3 font-bold flex items-center bg-green-100 p-3 rounded-xl border border-green-200 animate-in fade-in slide-in-from-top-2">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                        5% Revolut Discount Applied!
                    </p>
                ) : (
                    <p className="text-xs text-[#598392] mt-2 ml-1">
                        Select Crypto for 10% discount or Revolut for 5% discount.
                    </p>
                )}
            </div>

            {status === 'error' && (
                <div className="mb-4 p-4 bg-red-50 text-red-600 rounded-xl text-center font-bold border border-red-200">
                    Something went wrong. Please try again.
                </div>
            )}

            <div className="mt-8 mb-6 flex justify-between items-center p-6 bg-[#aec3b0]/10 rounded-2xl border border-[#aec3b0]/20">
                <span className="text-[#01161e] font-bold text-lg">Total Estimate:</span>
                <div className="text-right">
                    {isCrypto ? (
                        <>
                            <span className="text-[#598392] line-through text-sm mr-2 font-medium">${subtotal.toFixed(2)}</span>
                            <span className="text-[#124559] font-black text-2xl">${finalTotal.toFixed(2)}</span>
                        </>
                    ) : (
                        <span className="text-[#124559] font-black text-2xl">${subtotal.toFixed(2)}</span>
                    )}
                </div>
            </div>

            <button 
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-[#124559] text-[#eff6e0] font-black py-5 rounded-xl hover:bg-[#01161e] transition-all shadow-xl shadow-[#124559]/20 hover:shadow-2xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed text-xl uppercase tracking-wide"
            >
                {status === 'loading' ? 'Processing...' : `Submit Order Request`}
            </button>
        </form>
      </div>

      {/* Success Modal */}
      <SuccessModal 
        isOpen={showSuccessModal}
        onClose={handleSuccessModalClose}
        title="Order Request Sent!"
        message="Thank you for your order request. Our team will review it and get back to you within 24 hours with payment instructions."
      />
    </div>
  );
}
